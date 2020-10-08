
function Leer() {
    const peli = document.getElementById("input").value;
    const key='832d6baf';
    buscar2(peli,key);
}

const buscar2=async(peli,key)=>{

    const api_url=`http://www.omdbapi.com/?s=${peli}&apikey=${key}`
    const respuesta= await fetch(api_url);
    const data= await respuesta.json();
    const Search = await data.Search;
    console.log(Search);
    if(Search!=null)
    {   document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="width:30;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }
}    
   
