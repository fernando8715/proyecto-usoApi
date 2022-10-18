import { obtenerChiste } from "./http.provider";

const body = document.body;
let btnChiste, olChistes;
let num = 0;

const crearChisteHtml = () => {

    const html = `
        <h1 class="mt-4">Chistes</h1>
        <hr>

        <button class="btn btn-success btn-lg">Nuevo chiste</button>
        

        <ol class="list-group mt-3">
                  
        </ol>    
    `;
        
    const divchistes = document.createElement('div');
    divchistes.innerHTML = html;
    body.append(divchistes);

}

const eventos = () => {

    btnChiste = document.querySelector('button');    
    olChistes = document.querySelector('ol');
    
    btnChiste.addEventListener( 'click', async() => {
        
        btnChiste.disabled = true;

        dibujarChiste( await obtenerChiste() );

        btnChiste.disabled = false;
    })

}


const dibujarChiste = async (chiste) => {

    const liItem = document.createElement('il');
    liItem.innerHTML = `<b>${num += 1}. </b> ${chiste.value} <br><b>${chiste.id}</b>`;
    liItem.classList.add('list-group-item');
    olChistes.append(liItem);
}




export const init = () => {
    crearChisteHtml();
    eventos();
}

