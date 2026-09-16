let idade=Number(prompt("digite sua idade para começarmos"))

if (idade < 16){
    alert ("você não pode participar")
    console.log ("você não pode participar")
}
if (idade >=60){
    alert ("é necessario atestado")
    console.log ("é necessario atestado")

} else {
    alert ("digite ok para prosseguir")
    console.log ("idaded confirmada")
}

var distancia = Number(prompt("qual a distancia de corrida você quer correr? 5, 10, 21 ou 42 km"))

if (distancia == 5 | distancia == 10 | distancia == 21 | distancia ==  42) {
    alert ("distancia aprovada")
    console.log ("distancia aprovada")
} else {
    alert ("distancia reprovada")
    console.log ("distancia reprovada.")
}

var Pace = Number(prompt("em quantos minutos você correu?"))

if (Pace / distancia){
    alert(`você correu em um pace de:${Pace}`)
    console.log(`ele correu em um pace de:${Pace}`)
}