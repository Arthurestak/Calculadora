//  FACTORY FUNCTION

// function criaCalculadora(){
//     return{
//         inicia(){
//             this.cliqueBotoes()
//             this.btEnter()
//         },
//         display: document.querySelector('.display'),
//         btEnter(){
//             this.display.addEventListener('keyup', e =>{
//                 if (e.key === 'Enter'){
//                     const resultado = this.realizaConta(this.display.value)
//                     this.display.value = resultado
//                 }
//             })
//         },
//         realizaConta(operacao){
//             try{
//                 const resultado = eval(`${operacao}`)
//                 return resultado
//             }
//             catch(e){
//                 alert(`Ocorreu um erro "${e}"`)
//             }
//         },
//         cliqueBotoes(){
//             document.addEventListener('click', e =>{
//                 const el = e.target
//                 if(el.classList.contains('btn-num')){
//                     this.display.value += el.innerText
//                 }
//                 if (el.classList.contains('btn-eq')){
//                     const resultado = this.realizaConta(this.display.value)
//                     this.display.value = resultado
//                 }
//                 if (el.classList.contains('btn-del')){
//                     this.display.value = this.display.value.slice(0, -1)
//                 }
//                 if (el.classList.contains('btn-numX')){
//                     this.display.value += '*'
//                 }
//                 if (el.classList.contains('btn-clear')){
//                     this.display.value = ''
//                 }
//             })
//         },
        
//     }
// }
// const calculadora = criaCalculadora()
// calculadora.inicia()

const Calculadora = function(){
    const display = document.querySelector('.display')

    this.inicia = () =>{
        this.cliqueBotoes()
        this.digita()
    }

    const calcula = (display) => {
        try{
            const resultado = eval(`${display}`)
            return resultado
        }
        catch(e){
            alert(`Houve um erro: "${e}"`)
        }
    }

    this.digita = () => {
        document.addEventListener('keyup', e =>{
            if (isDigit(e.key)){
                display.value += e.key       
            }
            if (e.key === 'Enter'){
                display.value = calcula(display.value)
            }
            if (e.key === 'Backspace'){
                display.value = display.value.slice(0,-1)
            }
            if (e.key === ','){
                display.value += '.'
            }
        })
    }

    this.cliqueBotoes = () =>{
        document.addEventListener('click', e =>{
            const el = e.target
            if (el.classList.contains('btn-num')){
                display.value += el.innerText
            }
            if (el.classList.contains('btn-numX')){
                display.value += '*'
            }
            if (el.classList.contains('btn-clear')){
                display.value = ''
            }
            if (el.classList.contains('btn-del')){
                display.value = display.value.slice(0, -1)
            }
            if (el.classList.contains('btn-clear')){
                display.value = ''
            }
            if (el.classList.contains('btn-eq')){
                if(calcula(display.value)){
                    display.value = calcula(display.value)
                }
            }
        })
    }
    const isDigit = (x) => {
        if (x % 1 === 0 ||['*','/','-','+','=','.','(',')','%'].includes(x)){
            return x
        }
    }
}
const calculadora = new Calculadora()
calculadora.inicia()