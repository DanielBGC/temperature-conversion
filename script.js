var inputs = document.querySelectorAll(".temp-inicial input");
var divs = document.querySelectorAll("#res div")

inputs.forEach(element => {
    element.addEventListener('click', converter)
});

function converter() {
    divs.forEach(element => {
        element.classList.remove("selected")
    })
    
    let valor = document.getElementById("entrada")
    let tempInicial = document.getElementsByName("tempInicial")
    let celsP = document.querySelector(".cels")
    let fahrP = document.querySelector(".fahr")
    let kelvinP = document.querySelector(".kelvin")

    let cels;
    let fahr;
    let kelvin;

    //temperatura inicial = Celsius
    if(tempInicial[0].checked) { 
        celsP.parentElement.classList.add("selected")

        cels = Number(valor.value);

        celsP.innerHTML = `${cels} ºC`
    
        fahr = cels*(9/5)+32;
        fahrP.innerHTML = `${fahr.toFixed(2)} ºF`
    
        kelvin = cels + 273;
        kelvinP.innerHTML = `${kelvin} K`
    }

    //temperatura inicial = Fahrenheit
    if(tempInicial[1].checked) { 
        fahrP.parentElement.classList.add("selected")

        fahr = Number(valor.value);
        fahrP.innerHTML = `${fahr} ºF`

        cels = (fahr-32)*(5/9);
        celsP.innerHTML = `${cels.toFixed(2)} ºC`
    
        kelvin = (fahr-32)*(5/9)+273;
        kelvinP.innerHTML = `${kelvin.toFixed(2)} K`
    }

    //temperatura inicial = Kelvin
    if(tempInicial[2].checked) { 
        kelvinP.parentElement.classList.add("selected")

        kelvin = Number(valor.value);
        kelvinP.innerHTML = `${kelvin} K`

        cels = kelvin - 273;
        celsP.innerHTML = `${cels} ºC`
        
        fahr = (kelvin-273)*(9/5)+32;
        fahrP.innerHTML = `${fahr.toFixed(2)} ºF`
    }
}