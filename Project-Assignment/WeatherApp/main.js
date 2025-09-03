const form = document.getElementById('myform');
const loading = document.getElementById('loading');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    loading.style.display = 'block';
    result.innerText = "";
    try{
        const res = await getWeather()
        result.innerText = JSON.stringify(res);
    }catch (err) {
        result.innerText = "❌ Error fetching data";
    } finally {
        // Hide loading indicator
        loading.style.display = 'none';
      }
});

async function getWeather(){
    try{
        let location = document.querySelector("#locationName").value.toLowerCase()
        const respone = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=XN3U9G3UQAQLYG3KNG7Z3MR6Q`)
        
        if(respone.ok){
            console.log("Success")
        }
        else{
            throw new Error("Could not fetch resource!")
        }

        let data = await respone.json()
        let filteredObject =  getRequireData(data)
        return filteredObject
    }
    catch(err){
        console.error(err)
    }
}

function getRequireData(object){
    return {
        datetime: object.currentConditions.datetime,
        humidity: object.currentConditions.humidity,
        description: object.description,
        temperature: object.currentConditions.temp,
        windspeed: object.currentConditions.windspeed,
        icon : object.currentConditions.icon
    }
}
