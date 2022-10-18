
const url = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=1';

const obtenerChiste = async() => {

    try{

        const chiste = await fetch(url);
        
        if(!chiste.ok) throw 'No se encontro la url'

        const {created_at, id, value } = await chiste.json();

        return {created_at, id, value }

    }catch (err) {
        
        throw err;
    }
}

export {
    obtenerChiste, 
}


export const obtenerUsuarios = async() => {

    const resp = await fetch(urlUsuarios);
    const {data:usuario} = await resp.json();

    return usuario;
};