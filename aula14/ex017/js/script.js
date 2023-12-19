function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){

        window.alert('Por favor, digite um número!')

    } else {

        let n = Number(num.value)

        let c = 1

        tab.innerHTML = ''

        for (let c = n ; c <= 1000 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${ n * c }`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        
        /*
        while ( c <= 10 ) {
            let item = document.createAttribute('option')
            item.text = `${n} X ${c} = ${n * c }`
            tab.appendChild(item)
            c++
        }*/

    }
    

}