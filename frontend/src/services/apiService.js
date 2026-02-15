const API_URL = "http://localhost:3333";

export async function registerUser(userData) {
    const response = await fetch(`${API_URL}/users/create`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(userData)

    });

    if(!response.ok) {
        throw new Error(`Erro ao cadastrar o usuário!`);
    }
    return await response.json();

}

export async function userLogin(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({email, password})
    });

    console.log(response);
    if(!response.ok) {
        throw new Error(`Credenciais inválidas`);
        
    }
    const data = await response.json();

    localStorage.setItem("token", data.token);
    return data;

}



