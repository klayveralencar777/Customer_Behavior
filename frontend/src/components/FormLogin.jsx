import { Link } from "react-router-dom";

export default function FormLogin() {
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu email"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Senha</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Digite sua senha"
                    required
                />
            </div>

            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                    Entrar
                </button>

                <div className="text-center">
                    <Link to="/register" className="text-decoration-none">
                        Não possui conta? Cadastre-se aqui.
                    </Link>
                </div>
            </div>
        </form>
    );
}
