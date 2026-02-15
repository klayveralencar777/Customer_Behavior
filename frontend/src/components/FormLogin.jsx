import { Link } from "react-router-dom";
import "../styles/auth.css";
import { useState } from "react";


export default function FormLogin({ onSubmit }) {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({email, password});
    }
    
    return (
        <form  onSubmit={ handleSubmit} className="auth-form">

            <div className="mb-4">
                <label className="form-label fw-semibold small text-uppercase">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control rounded-3"
                    value={ email }
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="form-label fw-semibold small text-uppercase">
                    Senha
                </label>
                <input
                    type="password"
                    className="form-control rounded-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    required
                />
            </div>

            <div className="d-grid mb-3">
                <button
                    type="submit"
                    className="btn btn-primary rounded-3 fw-semibold py-2"
                >
                    Entrar
                </button>
            </div>

            <div className="text-center">
                <Link
                    to="/register"
                    className="text-decoration-none small fw-medium"
                >
                    Não possui conta? Cadastre-se
                </Link>
            </div>

        </form>
    );
}
