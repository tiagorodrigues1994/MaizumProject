import { Link } from "react-router-dom"
import SplashMaizumm from "../../assets/splashMaizum.png"
export default function Splash(){
    return(

<>
<div className='h-screen flex justify-center'>
            <div >
              <Link to='/Login'>
              <img src={SplashMaizumm} alt="SplashMaizum" className="w-full h-full object-cover" />
              </Link>
               
            </div>
        </div>

</>
        
    )
}