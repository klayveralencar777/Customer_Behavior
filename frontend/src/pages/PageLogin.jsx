import { useNavigate } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import { userLogin } from "../services/authService";

export default function PageLogin() {
    const navigate = useNavigate();
    async function handleLogin({email, password}) {
        try {
            const response =  await userLogin(email, password);
            console.log(response);
            alert(`Login realizado com sucesso!`);
            navigate('/dashboard');
            
        } catch (error) {
            alert("Verifique suas credenciais");
        }

    }
    return(
         <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card shadow-lg rounded-4">
                        <div className="card-body p-4">
                            <h5 className="text-center mb-4">Entrar</h5>
                                    <FormLogin onSubmit={ handleLogin }></FormLogin>                 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}