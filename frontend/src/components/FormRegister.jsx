import { useState } from "react";

export default function FormRegister({onSubmit}) {

    const[name, setName] = useState("");
    const [ email, setEmail ] = useState("");
    const[ password, setPassword ] = useState("");

    function handleSubmit(e) {
        e.preventDefault();      
        onSubmit({
            name,
            email,
            password
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                    type="nome"
                    className="form-control"
                    value= { name }
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={ email }
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Senha</label>
                <input
                    type="password"
                    className="form-control"
                    value={ password }
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    required
                />
            </div>

            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                    Cadastrar
                </button>
            </div>
        </form>

    );
}