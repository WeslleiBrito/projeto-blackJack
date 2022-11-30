
console.log('Boas vindas ao jogo BlackJack')
const respota = confirm('Deseja iniciar uma nova rodada?')

function somarArray(array){
   total = 0

   for(valor of array){
      total += valor
   }
   return total

}


let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()
let valorComputador = [cartaComputador1.valor, cartaComputador2.valor]
let textoComputador = [cartaComputador1.texto, cartaComputador2.texto]

let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()
let valorUsuario = [cartaUsuario1.valor, cartaUsuario2.valor]
let textoUsuario = [cartaUsuario1.texto, cartaUsuario2.texto]


const pontuacaoComputador = somarArray(valorComputador)
const pontuacaoUsuario = somarArray(valorUsuario)

if(respota){
   
   let resultado = ''

   if((pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador <= 21) || (pontuacaoUsuario > 21 && pontuacaoComputador <= 21)){
      resultado = 'O computador ganhou!'
   }else if((pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21) || (pontuacaoComputador > 21 && pontuacaoUsuario >= 21)){
      resultado = 'O usuário ganhou!'
   }else if(pontuacaoComputador === pontuacaoUsuario && pontuacaoComputador <= 21){
      resultado = 'Empate!'
   }else{
      console.log('Ninguém venceu!')
   }

   console.log(`"Usuário - cartas: ${textoUsuario[0]} ${textoUsuario[1]}, pontuação: ${pontuacaoUsuario}"`)
   console.log(`"Computador - cartas: ${textoComputador[0]} ${textoComputador[1]}, pontuação: ${pontuacaoComputador}"`)

   console.log(resultado)
}else{
   console.log('O jogo acabou')
}