

export default function FormCustomer() {

    const clients = [
        {
            id: "1",
            name: "João Silva",
            email: "joao@email.com",
            phone: "11999999999",
            createdAt: "2026-02-17T12:00:00Z"
        },
        {
            id: "2",
            name: "Maria Oliveira",
            email: "maria@email.com",
            phone: "",
            createdAt: "2026-02-16T10:30:00Z"
        },
        {
            id: "3",
            name: "Carlos Pereira",
            email: "carlos@email.com",
            phone: "11988887777",
            createdAt: "2026-02-15T15:00:00Z"
        }
    ];

    return (
        <div className="container mt-5">

            <div className="card shadow mb-4">
                <div className="card-body">
                    <h4 className="mb-4 text-center">Cadastro de Cliente</h4>

                    <form className="row g-3 align-items-end">
                        
                        <div className="col-12 col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome"
                            />
                        </div>

                        
                        <div className="col-12 col-md-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>

                        
                        <div className="col-12 col-md-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefone"
                            />
                        </div>

                        
                        <div className="col-12 col-md-1 d-grid">
                            <button type="submit" className="btn btn-primary w-100">
                                    Salvar
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            <div className="card shadow">
                <div className="card-body">
                    <h4 className="mb-3 text-center">Clientes Cadastrados</h4>

                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th>Criado em</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((client) => (
                                    <tr key={client.id}>
                                        <td>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>{client.phone || "Não informado"}</td>
                                        <td>{new Date(client.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
}
