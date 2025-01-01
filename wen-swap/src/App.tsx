import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./routes/Home";
import CreateSwap from "./routes/CreateSwap";
import ClaimSwap from "./routes/ClaimSwap";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    success: {
      main: "#439E43",
      dark: "#439E43",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ToastContainer
        pauseOnFocusLoss={false}
        closeOnClick
        draggable
        pauseOnHover={false}
        position="bottom-right"
        rtl={false}
        hideProgressBar={false}
        autoClose={2500}
        newestOnTop={true}
        theme="dark"
      />
      <div className="flex flex-col min-h-screen bg-secondary-black font-roboto justify-between">
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateSwap />} />
              <Route path="/claim" element={<ClaimSwap />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
