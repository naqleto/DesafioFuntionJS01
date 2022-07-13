/*
A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!
*/
const pesquisa = [
    {   
        totalFilhos: 2,
        salario: 3.500
    },
    {
        totalFilhos: 1,
        salario: 4.584
    },
    {
        totalFilhos: 3,
        salario: 4.561
    },
    {
        totalFilhos: 5,
        salario: 3.659
    },
    {
        totalFilhos: 6,
        salario: 2.250
    },
    {
        totalFilhos: 1,
        salario: -1.250
    },
]
function encontrarMediaESalarioMaisAlto(pesquisapessoas) {
    let mediaFilhos = 0
    let mediaSalairo = 0
    let maiorSalario = 0

    for (let i = 0; i <= pesquisapessoas.length; i++) {

        const filhos = pesquisapessoas[i].totalFilhos
        const salario = pesquisapessoas[i].salario

        if (salario > maiorSalario) maiorSalario = salario

        if (salario < 0) {
            console.log(`Média de salário R$ ${(mediaSalairo / i)}`)
            console.log(`Média de filhos ${(mediaFilhos / i).toFixed(0)}`)
            console.log(`Maior de salário R$ ${(maiorSalario)}`)
            break
        }
        else {
            mediaSalairo = mediaSalairo + salario;
            mediaFilhos += filhos;
        }

    }
}

encontrarMediaESalarioMaisAlto(pesquisa)