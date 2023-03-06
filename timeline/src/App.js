import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./contact/contact";
import TimeLineA from "./timeline";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="timeline" element={<TimeLineA />} />
        <Route path="contact" element={<Contact/>} />
        
          
    
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);