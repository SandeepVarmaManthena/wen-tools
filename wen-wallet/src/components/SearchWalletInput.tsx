import { isValidAddress } from "algosdk";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getWalletAddressFromNfDomain } from "../core/utils";

export default function SearchWalletInput() {
  const [searchWallet, setSearchWallet] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let walletAddress = searchWallet.trim();
    if (walletAddress.toLowerCase().includes(".algo")) {
      const response = await getWalletAddressFromNfDomain(
        walletAddress.toLowerCase()
      );
      if (response.length === 58 && isValidAddress(response)) {
        setSearchWallet("");
        navigation(`/account/${walletAddress.toLowerCase()}`);
      } else {
        toast.error("Invalid domain name!");
        return;
      }
    } else if (!isValidAddress(walletAddress)) {
      try {
        if (!isNaN(parseInt(walletAddress)) && Number(walletAddress) > 0) {
          setSearchWallet("");
          navigation(`/asset/${walletAddress}`);
        } else {
          toast.error("Invalid wallet address!");
          return;
        }
      } catch (error) {
        toast.error("Invalid wallet address!");
        return;
      }
    } else {
      setSearchWallet("");
      navigation(`/account/${walletAddress}`);
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        id="wallet-search-input"
        type="text"
        className="px-4 py-2 w-60 rounded-l placeholder:font-roboto placeholder:text-black text-black placeholder:opacity-70 focus:outline-none"
        placeholder="search account or asset"
        value={searchWallet}
        onChange={(e) => setSearchWallet(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center justify-center rounded-r px-4 bg-secondary-green"
      >
        <FaSearch className="text-black" />
      </button>
    </form>
  );
}
