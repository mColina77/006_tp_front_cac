let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000) {
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async() => {
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c623b2decc43cc2f46c560dc659ef975&language=es-MX&page=${pagina}`);

        if(resp.status === 200) {
            const datos = await resp.json();

            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h4 class="titulo">${pelicula.title}</h4>
                    </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;


        } else if(resp.status === 401) {
            console.log('Error de autenticación: no tiene permisos para acceder al servicio.');
        } else if(resp.status === 404) {
            console.log('La película que se busca no está en catálogo.');
        } else {
            console.log('Algo pasó que no lo estamos solucionando de momento.');
        }

    } catch(error) {
        console.log(error);
    }
}

cargarPeliculas();