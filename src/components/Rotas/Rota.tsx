
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from "../LoginPages/Login";
import SenhaEmail from "../LoginPages/SenhaEmail";
import RecuperarSenha1 from "../LoginPages/RecuperarSenha1";
import SenhaCodigo from "../LoginPages/SenhaCodigo";
import RecuperarSenha from "../LoginPages/RecuperarSenha";
import NovaSenha from '../LoginPages/NovaSenha';
import Home from "../Home/Home";
import Splash from '../LoginPages/Splash';


export default function Rota() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SenhaEmail" element={<SenhaEmail />} />
        <Route path="/RecuperarSenha1" element={<RecuperarSenha1 />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/SenhaCodigo" element={<SenhaCodigo />} />
        <Route path="/novaSenha" element={<NovaSenha />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Splash />} />
      </Routes>
    </BrowserRouter>
  );
}
