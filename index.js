let estudantes = [
    { nome:"Robson", primeiraNota: 10, segundaNota: 8},
    { nome:"Michael", primeiraNota: 4, segundaNota: 5},
    { nome:"Spencer", primeiraNota: 6, segundaNota: 7}
]

function caucularNotas(primeiraNota, segundaNota) {
    return (primeiraNota + segundaNota) / 2
}

function verificarAprovação(estudantes) {
    for (let aluno of estudantes) {
        let nome = aluno.nome
        let nota1 = aluno.primeiraNota
        let nota2 = aluno.segundaNota
    
    let media = caucularNotas(nota1, nota2)

    if (media >= 7) {
        alert("A média de " + nome + " foi " + media.toFixed(2) + ",\ncom isso está aprovado(a)!")
    } else {
        alert("A média de " + nome + " foi " + media.toFixed(2) + ",\ncom isso está reprovado(a)!")
    }
        
    }
}

verificarAprovação(estudantes)