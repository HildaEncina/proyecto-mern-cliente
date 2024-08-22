import {useState} from "react"; 
import logo from "../assents/logo.jpg"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const FormularioLogin = (props) => {
     
    const [correo, setCorreo] = useState(""); 
    const [contrasena, setContrasena] = useState(""); 
    const [err, setError]= useState(""); 
    const navigate = useNavigate();
    
    const procesaLogin = async (event) => {
        event.preventDefault(); 
       
        const URL = "http://localhost:8000/usuario/login";  
        const config = {
            correo, contrasena
        };
        try {
            const respuesta = await axios.post(URL, config);
           
        
            if (respuesta && respuesta.data) {
              const { token } = respuesta.data;
              if (token) {
                localStorage.setItem("token", token);
                console.log("Token guardado:", localStorage.getItem("token"));
        
                
                const decodedToken = jwtDecode(token);
                
        
                const rol = decodedToken.rol; 
                if (rol === 'Rescatista') {
                  navigate('/HomeRescatista');
                } else if (rol === 'Adoptante') {
                  navigate('/HomeAdoptante');
                } else {
                  setError("Rol de usuario desconocido.");
                }
        
                setError(""); 
                setCorreo(""); 
                setContrasena(""); 
              } else {
                setError("La respuesta del servidor no contiene un token.");
              }
            } else {
              setError("La respuesta del servidor es inválida.");
            }
          } catch (err) {
            console.error("Error en el login:", err);
            if (err.response && err.response.data && err.response.data.mensaje) {
              setError(err.response.data.mensaje);
            } else {
              setError("Error al realizar el login. Por favor, inténtelo de nuevo.");
            }
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
                            <label htmlFor="contrasena"></label>
                            <input className="form-login"
                                type="password"
                                name="contrasena"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)} 
                                placeholder="Contrasena"
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



