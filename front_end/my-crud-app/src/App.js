import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListNhanVien from "./components/listNhanVien";
import CreateNhanVien from "./components/createNhanVien";
import DetailNhanVien from "./components/detailNhanVien";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<ListNhanVien />} />
          <Route path="/create" element={<CreateNhanVien />} />
          <Route path="/detail/:id" element={<DetailNhanVien />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
