function Leer() {
    const city = document.getElementById("input").value;
    const key='7b32a6c8138724e90eefb18bf60c65f8';
    buscar2(city,key);
}


const buscar2=async(city,key)=>{
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    const respuesta= await fetch(api_url);
    const data= await respuesta.json();
    const Search = await data.main;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        
                document.getElementById("lista").innerHTML+=`<div style="width:30;">
                Nombre:
                <h2>${data.name}</h2>
                <br></br>
                <h2>Temperatura: ${Search.temp} C° </h2> 
                <h2>Máxima: ${Search.temp_max} C° </h2> 
                <h2>Mínima: ${Search.temp_min} C° </h2>
                </div>`;
        

    }

}    

