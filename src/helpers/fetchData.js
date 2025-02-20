

const fetchData = async () => {

    try {
        // Fetcheamos la API proporcionada
        const response = await fetch("https://67b634b907ba6e59084014c8.mockapi.io/food");

        // Dificil que falle si viene de Mock pero por las dudas
        if (!response.ok) throw new Error("Error en la respuesta de la API");
        
        // Me guardo la respuesta en formato json
        const data = await response.json();
        return data;


    } catch (error) {

        // Por las dudas manejamos el error
        console.error("Fetch error:", error);
        return []; // Devuelve un array vacío si hay error
    }
};

export default fetchData;