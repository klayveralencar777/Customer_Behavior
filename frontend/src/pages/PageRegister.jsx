import FormRegister from "../components/FormRegister";
import { registerUser } from "../services/authService";

export default function PageRegister() {
    async function handleRegister(data) {
        try {
            const response = await registerUser(data);
            console.log(response);
            alert("Usuário cadastrado com sucesso");
            
        } catch (error) {
            alert(`Erro ao cadastrar o usuário. Erro: ${error}`);
            
        }
    }
    return(
         
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card shadow-lg rounded-4">
                        <div className="card-body p-4">
                            <h5 className="text-center mb-4">Criar Conta</h5>
                            <FormRegister onSubmit={handleRegister}></FormRegister>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
     );   
}
    