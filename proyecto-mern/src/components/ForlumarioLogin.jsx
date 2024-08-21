import {useState} from "react"; 
import logo from "../assents/logo.jpg"
import axios from "axios";
import { Link } from 'react-router-dom';
const FormularioLogin = (props) => {
     
    const [correo, setCorreo] = useState(""); 
    const [contrasena, setContrasena] = useState(""); 
    const [err, setError]= useState(""); 
    
    const procesaLogin = async (event) => {
        event.preventDefault(); 
        const URL = "http://localhost:8000/usuario/login";  
        const config = {
            correo, contrasena
        }
        try{
            const respuesta = await axios.post(URL, config);
            localStorage.setItem("token", respuesta.data.token);
            setError(err.response.data.mensaje);
            setCorreo(""); 
            setContrasena(""); 
        }
        catch (err){
            setError(err.response.data.mensaje);
        }
       
    } 

    return (
        <>  
         
          <div className="login">
          
                <div>
                    <img src={logo} alt="Logo" className="login-logo" />
                </div>
                <div>
                    <h5>Inicio de sesión</h5>
                    <form className="form-login" onSubmit={procesaLogin}>
                    <div>
                            <label htmlFor="correo"></label>
                    </div>
                    <div>
                            <input className="form-login"
                                type="text"
                                name="correo"
                                id="correo"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)} 
                                placeholder="Correo"
                            />
                    </div>
            
                    <div>
                            <label htmlFor="contraseña"></label>
                            <input className="form-login"
                                type="password"
                                name="contrasena"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)} 
                                placeholder="Contraseña"
                            />
                    </div>
            
                    <div className="container-button">
                        <button className="btn-login">Login</button>
                    </div>
            
                    <Link to="/registro" className="register-link">Registrarse</Link>
                    </form>
                </div>
            </div>
            
        </>
      );
    };
    
    export default FormularioLogin;



