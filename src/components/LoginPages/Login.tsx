import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: LoginFormData = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (formData.password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);

      if (!emailError && !passwordError) {
        // Se email e senha estiverem corretos, então redireciona para a página Home
        localStorage.setItem('email', formData.email); // Armazena o email no localStorage
        localStorage.setItem('loggedIn', 'true'); // Define o usuário como logado
        console.log('Email:', formData.email);
        console.log('Senha:', formData.password);
        navigate('/Home'); // Navega para a página Cardapio
      }
    }
  };

  return (
    <div className="h-screen justify-center bg-gray-300 flex items-center">
      <div className="container max-auto max-w-lg h-full bg-white p-5 flex flex-col justify-center">
        <h3 className="block text-2xl font-bold mb-3">Acessar minha conta</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-2 font-semibold text-sm">
              Email<span className="text-red-600 p-1">*</span>
            </label>
            <input
              className={`p-2 border ${emailError ? 'border-red-600' : 'border-gray-400'} rounded focus:outline-none focus:border-black container`}
              type="text"
              name="email"
              placeholder="name@example.com"
            />
            {emailError && (
              <div className="text-red-600">
                Por favor, insira um e-mail válido.
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="block mb-2 font-semibold text-sm">
              Senha<span className="text-red-600 p-1">*</span>
            </label>
            <input
              className={`p-2 border ${passwordError ? 'border-red-600' : 'border-gray-400'} rounded focus:outline-none focus:border-black container`}
              type="password"
              name="password"
              placeholder="*********"
            />
            {passwordError && (
              <div className="text-red-600">
                A senha deve ter pelo menos 6 caracteres.
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <h3 className="mb-3">
              <Link to='/SenhaEmail'><button className="text-red-600 text-xs">Esqueci minha senha</button> </Link> 
            </h3>
          </div>

          <button
            className="bg-red-600 hover:bg-red-400 text-white font-bold transition-all p-1 rounded container"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
