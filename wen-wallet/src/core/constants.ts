import useConnectionStore from "../store/connectionStore";

// NODE
const MAINNET_ALGONODE_NODE = "https://mainnet-api.algonode.cloud";
const TESTNET_ALGONODE_NODE = "https://testnet-api.algonode.cloud";

// INDEXER
const MAINNET_ALGONODE_INDEXER = "https://mainnet-idx.algonode.cloud";
const TESTNET_ALGONODE_INDEXER = "https://testnet-idx.algonode.cloud";

export const NODE_URL =
  useConnectionStore.getState().networkType === "mainnet"
    ? MAINNET_ALGONODE_NODE
    : TESTNET_ALGONODE_NODE;
export const INDEXER_URL =
  useConnectionStore.getState().networkType === "mainnet"
    ? MAINNET_ALGONODE_INDEXER
    : TESTNET_ALGONODE_INDEXER;

export const IPFS_ENDPOINT = "https://ipfs.algonode.dev/ipfs";

export const PAGE_SIZE = 64;
export const MAX_SELECT_COUNT = 64;

export const TX_NOTE = "via wen.tools | wen wallet";

export const fuseSearchOptions = {
  includeScore: true,
  keys: ["asset-id"],
  distance: 1,
  threshold: 0,
};

export const orderByOptions = [
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
  {
    label: "ASA Id (Asc.)",
    value: "asset-id-asc",
  },
  {
    label: "ASA Id (Desc.)",
    value: "asset-id-desc",
  },
];

export const filterByOptions = [
  {
    label: "Show All",
    value: "showAll",
  },
  {
    label: "Zero Balances",
    value: "showZero",
  },
  {
    label: "Non-Zero Balances",
    value: "showNonZero",
  },
  {
    label: "Created Assets",
    value: "showCreated",
  },
  {
    label: "Non-Created Assets",
    value: "showNonCreated",
  },
];
