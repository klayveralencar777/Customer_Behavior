import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function FormRegister({ onSubmit }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ name, email, password, confirmPassword });
    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>

            <div className="mb-4">
                <label className="form-label fw-semibold small text-uppercase">
                    Nome
                </label>
                <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-4">
                <label className="form-label fw-semibold small text-uppercase">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control rounded-3"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>


            <div className="d-grid mb-3">
                <button
                    type="submit"
                    className="btn btn-primary rounded-3 fw-semibold py-2"
                >
                    Criar Conta
                </button>
            </div>

            <div className="text-center">
                <Link
                    to="/"
                    className="text-decoration-none small fw-medium"
                >
                    Já possui conta? Faça login
                </Link>
            </div>

        </form>
    );
}
