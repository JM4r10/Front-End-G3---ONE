import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]')

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if (id == null) {
        window.location.href = '/screens/error.html';
    }
    const name = document.querySelector("[data-nombre]");
    const mail = document.querySelector("[data-email]");

    // clientServices.detalleCliente(id).then(({nombre, email}) => {
    //     name.value = nombre;
    //     mail.value = email;
    // });
    try {
        const perfil = await clientServices.detalleCliente(id)
        
        if(perfil.nombre && perfil.email){
            name.value = perfil.nombre;
        mail.value = perfil.email;
        }else{
            throw new Error;
        }
    } catch (err) {
        window.location.href='/screens/error.html'
    }

}

obtenerInformacion();

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const name = document.querySelector("[data-nombre]").value;
    const mail = document.querySelector("[data-email]").value;

    clientServices.actualizarCliente(name, mail, id).then(() => {
        window.location.href = '/screens/edicion_concluida.html';
    })
});