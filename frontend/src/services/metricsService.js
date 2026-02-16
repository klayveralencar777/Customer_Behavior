const API_URL = "http://localhost:3333";

export async function getMetrics() {
   try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${API_URL}/metrics/find`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
            if(!response.ok) {
                     throw new Error(`Error ao buscar dados da Dashboard.`);
                }

            return await response.json();
    
   } catch (error) {
        console.log(error);
    
   }

    }