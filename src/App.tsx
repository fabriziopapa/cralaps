import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tessera from "./pages/Tessera";
import Eventi from "./pages/Eventi";
import VerificaQR from "./pages/VerificaQR";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "system-ui" }}>
      <nav
        style={{
          display: "flex",
          gap: 16,
          padding: 16,
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/tessera">Tessera</Link>
        <Link to="/eventi">Eventi</Link>
        <Link to="/verifica">Verifica QR</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tessera" element={<Tessera />} />
        <Route path="/eventi" element={<Eventi />} />
        <Route path="/verifica" element={<VerificaQR />} />
      </Routes>
    </div>
  );
}