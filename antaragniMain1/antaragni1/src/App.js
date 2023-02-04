import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";
import NoPage from "./pages/NoPage";
import Gallery from "./pages/Gallery";
import MobileLanding from "./pages/compitions";
// import Sponsors from "./pages/Sponsors";
import Sponsors from "./pages/Sponsors";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="competitions" element={<MobileLanding/>}/>
          <Route path="sponsors" element={<Sponsors/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);