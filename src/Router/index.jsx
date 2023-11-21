import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Main from "../Pages/Home/main";
import Loja from "../Pages/Loja/loja";
import Prodatari from "../Pages/Loja/atari";
import Prodplay from "../Pages/Loja/playstation";
import Nintendo from "../Pages/Loja/nintendo";
import Xbox from "../Pages/Loja/xbox";
import Contato from "../Pages/Contato";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/atari" element={<Prodatari />} />
        <Route path="/PlayStation5" element={<Prodplay />} />
        <Route path="/Nintendo" element={<Nintendo />} />
        <Route path="/Xbox" element={<Xbox />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
