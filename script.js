function converter() {
    var valor = document.getElementById("entrada")
    var res = document.getElementById("res")
            
    var tempInicial = document.getElementsByName("tempInicial")
    var tempFinal = document.getElementsByName("tempFinal")
            
    if(tempInicial[0].checked) { 
        var cels = Number(valor.value);

        if(tempFinal[0].checked) { //temperatura inicial Celsius
            res.innerHTML = `${cels}ºC = ${cels}ºC`
        }

        if(tempFinal[1].checked) {
            var fahr = cels*(9/5)+32;
            res.innerHTML = `${cels}ºC = ${fahr.toFixed(2)}ºF`
        }

        if(tempFinal[2].checked) {
            var kelv = cels + 273;
            res.innerHTML = `${cels}ºC = ${kelv}K`
        }
    }

    if(tempInicial[1].checked) { //temperatura inicial Fahrenheit
        var fahr = Number(valor.value);

        if(tempFinal[0].checked) {
            var cels = (fahr-32)*(5/9)
            res.innerHTML = `${fahr}ºF = ${cels.toFixed(2)}ºC`
        }

        if(tempFinal[1].checked) {
            res.innerHTML = `${fahr}ºF = ${fahr}ºF`
        }

        if(tempFinal[2].checked) {
            var kelv = (fahr-32)*(5/9)+273;
            res.innerHTML = `${fahr}ºF = ${kelv.toFixed(2)}K`
        }
    }

    if(tempInicial[2].checked) { //temperatura inicial Kelvin
        var kelv = Number(valor.value);
        if(kelv >= 0) {
            if(tempFinal[0].checked) {
                var cels = kelv - 273;
                res.innerHTML = `${kelv}K = ${cels}ºC`
            }

            if(tempFinal[1].checked) {
                var fahr = (kelv-273)*(9/5)+32;
                res.innerHTML = `${kelv}K = ${fahr.toFixed(2)}ºF`
            }

            if(tempFinal[2].checked) {
                res.innerHTML = `${kelv}K = ${kelv}K`
            }
        }
        else 
            res.innerHTML = `[ERRO] Temperatura negativa em Kelvin`
    }
}