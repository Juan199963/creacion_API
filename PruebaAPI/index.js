// const API_URL = "https://jsonplaceholder.typicode.com";

// const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if(this.readyState == 4 && this.status == 200){
//         //0 = UNSET, no se ha llamado al metodo open
//         //1 = OPENED, se ha llamado al metodo open
//         //2 = HEADERS_RECEIVED, se esta llamando al metodo send()
//         //3 = LOADING, esta cargando es decir, recibiendo la respuesta
//         //4 = DONE, se completo la operacion
//         console.log(this.response);
//     }
// };

// xhr.addEventListener("load", onRequestHandler);

// xhr.open('GET', '${API_URL}/users');
// xhr.send();


const cargarPeliculas = async() =>{

    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/530?api_key=4a0d89fde128b0a74b9aee4518db97f0&language=es-MX');
        console.log(respuesta);
        const datos = await respuesta.json();

        console.log(datos.title);
    } catch(error){
        console.log(error);
    }

    

};

cargarPeliculas();