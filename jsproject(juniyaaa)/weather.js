
// const API_KEY = "da92224379e3897e142bba2187ea652f"
// const url = ""


// function onGeoOK(position){
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     console.log("you live in", lat, lng);
//     fetch(url).then(response => response.json()).then(data=> {
//         console.log(data.name, data.weather[0].main)
//     });
// }

// function onGeoError(){
//     alert("can't find you. No weather for you.")
// }


// navigator.geolocation.getCurrentPosition(onGeoOK ,onGeoError);