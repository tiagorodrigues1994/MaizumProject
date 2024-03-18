import { Link } from "react-router-dom"

export default function RecuperarSenha1(){
    return(

<>
<div className="h-screen flex justify-center items-center bg-gray-400">
  <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
  <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Recuperar Senha</h2>
            <Link to='/'>
            <button className="text-black font-bold  text-2xl hover:text-gray-700 " onClick={() => console.log("Fechar")}>
              X
            </button>
            </Link>
           
 </div>
    
  <div className="mb-4 text-sm " >
    Sua solicitação de recuperação de senha foi enviada para o administrador da conta. Embreve, uma nova senha será enviada para seu e-mail!
  </div>
  <Link to='/novaSenha'>
  <button
      className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline container"
      type="button"
    >
      Próximo
    </button>
  </Link>
  
  </div>
</div>

</>
        
    )
}