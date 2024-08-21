
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const FormularioRegistro = (props) => {

    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [edad, setEdad] = useState(""); 
    const [correo, setCorreo] = useState(""); 
    const [contrasena, setContrasena] = useState(""); 
    const [telefono, setTelefono] = useState(""); 
    const [ciudad, setCiudad] = useState(""); 
    const [rol, setRol] = useState(""); 
    const [estiloDeVida, setEstiloDeVida] = useState(""); 
    const [mascotas, setMascotas] = useState("");
    const [error, setError] = useState(""); 
 
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    
    const navegacion = useNavigate(); 
     
    const manejarCambio = (e) => {
        setOpcionSeleccionada(e.target.value);
    };

    const enviarFormularioRegistro = async (e) => {
        e.preventDefault(); 
        try{
            const nuevoUsuario = {
                nombre, apellido, edad, correo, contrasena, telefono, ciudad, rol, estiloDeVida
            }
            const URL = "http://localhost:8080/usuario/nuevo";
            const respuesta = await axios.post(URL, nuevoUsuario); 
            props.actualizarListaUsuarios(respuesta.data); 
            setNombre(""); 
            setApellido("");
            setEdad("");
            setCorreo(""); 
            setContrasena(""); 
            setTelefono("");
            setCiudad(""); 
            setRol(""); 
            setEstiloDeVida(""); 
            navegacion("/login"); 
        }
        catch(error) {
            setError(error.response.statusText);
        }


    }


    return(
        <>
            <div className="body-registro">
        
                <div className="container-registro">
                                <h2 className="titulo-registro">Registrarse</h2>
                                <form className="form-registro" onSubmit={enviarFormularioRegistro}>
                                    <div className="form-group-registro">
                                        <label htmlFor="nombre" className="label-nombre"></label>
                                        <input
                                            type="text"
                                            className="input-nombre"
                                            id="nombre"
                                            name="nombre"
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            placeholder="Nombre"
                                        />
                                    </div>
                                    <div className="form-group-registro">
                                        <label htmlFor="apellido" className="label-apellido"></label>
                                        <input
                                            type="text"
                                            className="input-apellido"
                                            id="apellido"
                                            name="apellido"
                                            value={apellido}
                                            onChange={(e) => setApellido(e.target.value)}
                                            placeholder="Apellido"
                                        />
                                    </div>
                                    <div className="form-group-registro">
                                        <label htmlFor="edad" className="label-edad"></label>
                                        <input
                                            type="number"
                                            className="input-edad"
                                            id="edad"
                                            name="edad"
                                            value={edad}
                                            onChange={(e) => setEdad(e.target.value)}
                                            placeholder="Edad"
                                        />
                                    </div>
                                    <div className="form-group-registro">
                                        <label htmlFor="correo" className="label-correo"></label>
                                        <input
                                            type="text"
                                            className="input-correo"
                                            id="correo"
                                            name="correo"
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            placeholder="Correo"
                                        />
                                    </div>
                                    <div className="form-group-registro">
                                        <label htmlFor="contrasena" className="label-contrasena"></label>
                                        <input
                                            type="password"
                                            className="input-contrasena"
                                            id="contrasena"
                                            name="contrasena"
                                            value={contrasena}
                                            onChange={(e) => setContrasena(e.target.value)}
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                    <div className="form-group-registro">
                                        <label htmlFor="telefono" className="label-telefono"></label>
                                        <input
                                            type="text"
                                            className="input-telefono"
                                            id="telefono"
                                            name="telefono"
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            placeholder="Teléfono"
                                        />
                                    </div>
                                    <div className="form-group-registro">
                                        <label htmlFor="ciudad" className="label-ciudad"></label>
                                        <input
                                            type="text"
                                            className="input-ciudad"
                                            id="ciudad"
                                            name="ciudad"
                                            value={ciudad}
                                            onChange={(e) => setCiudad(e.target.value)}
                                            placeholder="Ciudad"
                                        />
                                    </div>
                                    <div className="form-group-registro">
                                        <label htmlFor="rol" className="label-rol"></label>
                                        <select
                                            id="opciones"
                                            className="input-rol"
                                            value={opcionSeleccionada}
                                            onChange={(e) => setRol(manejarCambio)}
                                        >
                                            <option value="">Seleccione un Rol</option>
                                            <option value="opcion1">Adoptante</option>
                                            <option value="opcion2">Rescatista</option>
                                        </select>
                                    </div>
                                    <div className="form-group-registro">
                                        <label htmlFor="estiloDeVida" className="label-estiloDeVida"></label>
                                        <input
                                            type="text"
                                            className="input-estiloDeVida"
                                            id="estiloDeVida"
                                            name="estiloDeVida"
                                            value={estiloDeVida}
                                            onChange={(e) => setEstiloDeVida(e.target.value)}
                                            placeholder="Estilo de vida"
                                        />
                                    </div>
                                    <button className="btn-registrarse">Registrarse</button>
                                    <div className="error-mensaje">{error}</div>
                                </form>
                            </div>
            </div>
   
               

        </>
    )
}

export default FormularioRegistro; 

