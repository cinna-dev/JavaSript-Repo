/* function visitedCity(city){
    if(city === 'Hamburg'){
return `<h1>I visited ${city}</h1>`
}
    else{return `<h1>Sorry I didn't visited ${city}</h1>`}
}
document.write(visitedCity('Hamburg')); */


function visitedCity(city, cityArr){
    for(i=0; i<cityArr.length; i++){
          if(city == cityArr[i]){
        return `<h1>I visited ${city}</h1>`
        }
}
return `<h1>Sorry I didn't visited ${city}</h1>`
}

let ArrayOfCities = ['Hamburg', 'Dubai', 'Istanbul'];
let CityToSearch = 'Dubai';
document.write(visitedCity(CityToSearch, ArrayOfCities)); 
