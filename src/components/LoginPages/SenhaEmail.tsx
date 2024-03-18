import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SenhaEmail() {
  const [email, setEmail] = useState<string>('');
  const [erroEmail, setErroEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErroEmail('');
  };

  const handleNext = () => {
    const emailCadastrado: string | null = localStorage.getItem('email');
    console.log('Email armazenado:', emailCadastrado); // Adicionando console.log para verificar o email armazenado
    console.log('Email digitado:', email); // Adicionando console.log para verificar o email digitado
    if (email && emailCadastrado && email.toLowerCase() === emailCadastrado.toLowerCase()) {
      navigate('/RecuperarSenha');
    } else {
      setErroEmail('Email inválido');
    }
  };

 
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-400">
        <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Recuperar Senha</h2>
            <Link to='/'>
              <button
                className="text-black font-bold text-2xl hover:text-gray-700"
                onClick={() => console.log('Fechar')}
              >
                X
              </button>
            </Link>
          </div>

          <div className="mb-3">
            <label className="block mb-2 font-semibold text-sm">E-mail</label>
            <input
              className={`p-2 border border-gray-400 rounded focus:outline-none focus:border-black container ${erroEmail ? 'border-red-500' : ''}`}
              type="text"
              name="email"
              placeholder="Digite o e-mail cadastrado"
              value={email}
              onChange={handleChangeEmail}
            />
            {erroEmail && <p className="text-red-500 mt-1">{erroEmail}</p>}
          </div>

          <button
            className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline container"
            type="button"
            onClick={handleNext}
          >
            Próximo
          </button>
        </div>
      </div>
    </>
  );
}
