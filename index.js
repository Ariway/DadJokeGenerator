const btn=document.getElementById("btn");
const apikey="6GUHCS0+4e2+2tUER1V0lw==2c68UF11rWnK2V3S";
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const option={
    method: 'GET',
    headers: { 'X-Api-Key':apikey},
};


const jokii=document.getElementById("joke");

async function helper(){
    try {
        btn.disabled=true;
    jokii.innerText="Updating...";
    btn.innerText="Loading..."
    const response=await fetch(apiurl,option);
    const data=await response.json();
    jokii.innerHTML=data[0].joke;
    btn.innerHTML="Tell Me a Joke"

    btn.disabled=false;
        
    } catch (error) {
        jokii.innerText=error.message;
        
    }


}
btn.addEventListener("click",helper);