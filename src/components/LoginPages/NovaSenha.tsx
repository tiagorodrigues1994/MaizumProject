import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NovaSenha() {
  const navigate = useNavigate();
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [erro, setErro] = useState<string>('');

  const handleButtonClick = () => {
    // Verificar se as senhas são iguais e têm pelo menos 6 dígitos
    if (senha.length < 6 || senha !== confirmarSenha) {
      setErro('As senhas devem ter pelo menos 6 dígitos e serem iguais.');
    } else {
      // Redirecionar para a próxima etapa
      navigate('/Login');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Recuperar Senha</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
            Senha
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="senha"
            type="password"
            placeholder="***********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmarSenha">
            Confirme sua senha
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmarSenha"
            type="password"
            placeholder="***********"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>
        {erro && <p className="text-red-600 mb-4">{erro}</p>}

        <button
          className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline container"
          type="button"
          onClick={handleButtonClick}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
