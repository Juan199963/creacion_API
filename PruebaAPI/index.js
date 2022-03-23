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

let pagina = 1;

const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', ()=>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }else{
        alert('Llego al limite de peliculas')
    }
    
})

btnAnterior.addEventListener('click', ()=>{
    if(pagina >1){
        pagina -= 1;
        cargarPeliculas();
    }else{
        alert('No hay hoja anterior')
    }
    
})





const cargarPeliculas = async() =>{

    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4a0d89fde128b0a74b9aee4518db97f0&language=es-MX&page=${pagina}`);
        console.log(respuesta);
        
        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let peliculas = '';

            datos.results.forEach(pelicula =>{
                peliculas +=
                 `
                 <div class = "pelicula">
                    <img class = "poster" src ="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class = "titulo">${pelicula.title}</h3>
                 </div>

                 
                 `;
            });

            document.getElementById('contenedor').innerHTML = peliculas

        }else if(respuesta.status === 401){
            console.log('Pusiste la llave mal');
        }else if(respuesta.status === 404){
            console.log('La pelicula no existe');
        }else{
            console.log('Hubo un error desconocido.');
        }
        
    } catch(error){
        console.log(error);
    }

    

};

cargarPeliculas();