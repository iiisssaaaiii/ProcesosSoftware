// home.js
// Simulación de datos para la cartelera (en producción se consume desde backend)
const cartelera = [
    { titulo: "El sorprendente hombre-araña", clasificacion: "B", imagen: "/assets/images/spiderman.jpg" },
    { titulo: "Los vengadores", clasificacion: "B", imagen: "/assets/imagesvengadores.jpg" },
    { titulo: "Volver al futuro", clasificacion: "B", imagen: "/assets/imagesfuturo.jpg" },
    { titulo: "Shrek", clasificacion: "A", imagen: "/assets/images/shrek.jpg" },
    { titulo: "Avatar", clasificacion: "B", imagen: "/assets/images/avatar.jpg" },
    { titulo: "Jurassic Park", clasificacion: "B", imagen: "/assets/images/jurassic.jpg" },
    { titulo: "Thunderbolts", clasificacion: "B", imagen: "/assets/images/thunderbolts.jpg" },
    { titulo: "Una película de Minecraft", clasificacion: "A", imagen: "/assets/images/minecraft.jpg" }
];

const container = document.getElementById('carteleraContainer');
container.innerHTML = '';
cartelera.forEach(pelicula => {
    container.innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                <div class="card-body">
                    <span class="badge bg-${pelicula.clasificacion === 'A' ? 'success' : 'warning text-dark'}">${pelicula.clasificacion}</span>
                    <h5 class="card-title">${pelicula.titulo}</h5>
                    <a href="#" class="text-primary">Ver más</a>
                </div>
            </div>
        </div>
    `;
});
