import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ConnectButton from "./ConnectButton";

export function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#030003" }} position="sticky">
        <Toolbar>
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="mr-2 w-25 h-12 p-1 "
            />
          </Link>
          <Typography
            component="div"
            sx={{
              fontFamily: "Poppins",
              flexGrow: 1,
              fontWeight: 400,
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
                lg: "1.75rem",
              },
              ":hover": {
                cursor: "pointer",
              },
              ml: { xs: 2, sm: 0 },
              visibility: { xs: "hidden", sm: "visible" },
            }}
          >
            <Link className="text-primary-blue" to="/">wen swap</Link>
          </Typography>
          <ConnectButton />
        </Toolbar>
      </AppBar>
      <div className="bg-primary-blue text-black flex py-1 justify-center items-center">
        <p className="text-center text-sm">
          Check out our full suite of tools {" "}
          <a
            href="https://wen.tools"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-gray-700 transition"
          >
            🧪 here!
          </a>
        </p>
      </div>
    </>
  );
}
