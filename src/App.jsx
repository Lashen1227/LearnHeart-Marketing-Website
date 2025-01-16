import "./App.css";
import Footer from "./components/Footer";
import Marketing from "./components/Marketing";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Features from "./components/Features";
import ScrollToTopButton from "./components/ScrollToTop";
import Team from "./components/Team";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Profile />
        <Marketing />
        <Features />
        <Team />
        <Footer />
        <ScrollToTopButton />
        <ToastContainer />
      </div>
    </>
    
  );
}

export default App;
