function calcular(){
    const peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    if(peso=="" || altura==""){
        alert("No se puede calcular sin datos")
        document.getElementById('peso').focus()
    } else{
    if(altura>100){
        altura=altura/100
    }

    let imc=(peso/altura**2).toFixed(1)
    let valor=document.getElementById('valor')
    valor.innerText=imc
    if(imc<=18.4){
        valor.style.backgroundColor=`#1EB6D8`
    } else if(imc>=18.5 && imc<=24.9){
        valor.style.backgroundColor=`#73D81E`
    }else if(imc>=25 && imc<=29.9){
        valor.style.backgroundColor=`#F9F921`
    }else if(imc>=30 && imc<=34.9){
        valor.style.backgroundColor=`#F7CC08`
    } else{
        valor.style.backgroundColor=`#F73308`
    }
    }
}

const button = document.getElementById('button')
button.addEventListener('click',calcular)