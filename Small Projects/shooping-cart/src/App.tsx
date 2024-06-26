import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoopingCartProvider } from "./context/ShoopingCartContext";

function App() {
  return (
    <ShoopingCartProvider>
    <Container className="mb-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Container>
    </ShoopingCartProvider>
  );
}

export default App;
