
let contenedorProyectos = document.getElementById("contenedorProyectos")
for (let index = 0; index < proyectos.length; index++) {
    
    contenedorProyectos.innerHTML += `
    
        <div class="col">
            <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${proyectos[index].imagen}" alt="">
                <div class="card-body">
                    <p class="card-text">${proyectos[index].nombre}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a type="button" class="btn btn-sm btn-outline-secondary" href="${proyectos[index].direccion}" target="_blank">Ver</a>
                        </div>
                        <small class="text-body-secondary">${proyectos[index].fechaSubida}</small>
                    </div>
                </div>
            </div>
        </div>
    `

    
}