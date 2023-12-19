function clicar() {
    let n = Number(document.getElementById('txtn').value)
    let res = document.getElementById('res')
    res.innerHTML = `Tabuada do ${n} <br>`
    for ( let c = 21 ; n >= 1 ; c++ ) {
        res.innerHTML += `${n} X ${c} = ${ n * c }
        <br>`
        
    }
}