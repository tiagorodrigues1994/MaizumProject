import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SenhaCodigo(): JSX.Element {
  const [codigo, setCodigo] = useState<string>('');
  const [erroCodigo, setErroCodigo] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeCodigo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCodigo(inputValue);
  };

  const handleNext = () => {
    if (codigo.length === 6) {
      // Proceed to the next step
      console.log('Código válido, prosseguir...');
      navigate('/NovaSenha');
    } else {
      // Display error message
      setErroCodigo('O código deve conter exatamente 6 dígitos.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">Recuperar Senha</h2>
          <button
            className="text-black font-bold text-2xl hover:text-gray-700"
            onClick={() => console.log('Fechar')}
          >
            X
          </button>
        </div>

        <div className="mb-3">
          <label htmlFor="codigo" className="block mb-2 font-semibold text-sm">Código</label>
          <input
            id="codigo"
            className="p-2 border border-gray-400 rounded focus:outline-none focus:border-black container"
            type="text"
            name="codigo"
            placeholder="Digite o código recebido"
            value={codigo}
            onChange={handleChangeCodigo}
          />
          {erroCodigo && <p className="text-red-700 mt-1">{erroCodigo}</p>}
          <p>Não recebeu o código? <span className="text-red-700">Tente novamente</span></p>
        </div>
<Link to='/RecuperarSenha1'>
<button
          className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline container"
          type="button"
          onClick={handleNext}
        >
          Próximo
        </button>
</Link>
       

      </div>
    </div>
  );
}
