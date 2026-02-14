import FormLogin from "../components/FormLogin";

export default function PageLogin() {
    return(
         <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card shadow-lg rounded-4">
                        <div className="card-body p-4">
                            <h5 className="text-center mb-4">Login</h5>
                                    <FormLogin></FormLogin>                 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}