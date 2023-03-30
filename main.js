let descripcion = document.querySelector("#descripcion");

descripcion.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
})