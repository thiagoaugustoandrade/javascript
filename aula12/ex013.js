/*
EX013 - CONDIÇÕES MÚLTIPLAS (SWITCH) 
*/
var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) { //switch serve para casos específicos e inescapáveis
    case 0:
        console.log('Domingo - Dia de Tipheret')
        console.log('Trabalhe sua Beleza da Alma, sua Compaixão e Magnanimidade (Sol)')
        break // Jamais esquecer o 'Break' em cada caso!
    case 1:
        console.log('Segunda-Feira - Dia de Yesod')
        console.log('Trabalhe sua Intuição, seu Vínculo e Humildade (Lua)')
        break
    case 2:
        console.log('Terça-Feira - Dia de Geburah')
        console.log('Trabalhe sua Disciplina, Diligência e Vontade (Marte)')
        break
    case 3: 
        console.log('Quarta-Feira - Dia de Hod')
        console.log('Trabalhe seu Intelecto, Comunicação e sua Paciência  (Mercúrio')
        break
    case 4:
        console.log('Quinta-Feira - Dia de Chesed')
        console.log('Trabalhe sua Bondade, Misericórdia e Caridade (Júpiter)')
        break
    case 5: 
        console.log('Sexta-Feira - Dia de Netzach')
        console.log('Trabalhe sua Moderação, Equilíbrio e Tolerância (Vênus)')
        break
    case 6:
        console.log('Sábado - Dia de Binah')
        console.log('Trabalhe sua Responsabilidade, Entendimento e seus Limites (Saturno) ')
        break
    default:
        console.log('ERRO - Dia Não-Existente') // este dia foi só pra evitar erros.
        break
}
