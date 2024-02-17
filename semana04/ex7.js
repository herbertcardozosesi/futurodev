/**Você foi contratado por um supermercado para catalogar a compra de uma cliente. Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, só serão aceitas as seguintes respostas:

(1)Hortifruti

(2)Laticínios

(3)Carnes

(4)Peixes

(5)Aves

(6)Fechar pedido

Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.

Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.

Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade. */

//solução 1
let produtosContagem = []

// criamos uma constante para a mensagem por motivos de boa prática
const mensagemPrompt1 = "Qual produto deseja comprar? (selecione pelo numero):\n(1)Hortifruti\n(2)Laticínios\n(3)Carnes\n(4)Peixes\n(5)Aves\n(6)Fechar Pedido"

// uma função para personalizar o prompt de quantidade para cada produto 
function mensagemPrompt2(produto) {
    // essa função aceita um parâmetro do tipo string, usamos a palavra 'produto' por escolha própria
    let mensagem = `Qual a quantidade de ${produto} deseja comprar?`

    // essa função devolve a mensagem com o nome do produto dentro da string na variável 'mensagem'
    return mensagem
}
// um loop eterno que só é quebrando quando a variável 'rodando' for mudada para false.
let rodando = true

while (rodando == true) {
    // guardamos a escolha do cliente em uma variável
    let opcaoSelecionada = window.prompt(mensagemPrompt1) // usamos nossa variável com a mensagem do prompt

    // checamos qual foi a opcao selecionada no menu
    let produtoSelecionado

    // usando if/else .. não é elegante mas pra quem está começando é uma solução que permite entender como funciona a lógica de programação
    if (opcaoSelecionada == '1') {
        produtoSelecionado = 'hortifruti';
    } else if (opcaoSelecionada == '2') {
        produtoSelecionado = 'laticinios';
    } else if (opcaoSelecionada == '3') {
        produtoSelecionado = 'carnes'
    } else if (opcaoSelecionada == '4') {
        produtoSelecionado = 'peixes'
    } else if (opcaoSelecionada == '5') {
        produtoSelecionado = 'aves'
    } else if (opcaoSelecionada == '6') {
        rodando = false // aqui quebramos o loop eterno mudando o valor de rodando para false
        break;
    } else if (opcaoSelecionada == null) {
        break;
    }

    // agora que sabemos qual foi o produto escolhido, vamos perguntar a quantidade
    // para isso nós chamamos a função nomeada mensagemPrompt2 passando a variável produtoSelecionado como parâmetro para dentro da função   
    let quantidadeSelecionada = window.prompt(mensagemPrompt2(produtoSelecionado))
    quantidadeSelecionada = Number(quantidadeSelecionada) // para transformar em um numero

    //de posse das duas informações, vamos salvar nossos dados
    // uma forma não elegante e não eficaz mas criativa é adicionar a string do produto em um array um numero de vezes igual à quantidade selecionada
    for (let i = 0; i < quantidadeSelecionada; i++) {
        // usando i começando do 0 até 'i < quantidadeSelecionada' adicionaremos exatamente a quantidade selecionada 
        produtosContagem.push(produtoSelecionado) // usando o metodo de arrays .push() nós adicionamos o produtoSelecionado para dentro do array produtosContagem 
    }
}
// terminado o loop vamos contar os nossos produtos , de forma didática mas não elegante
// criamos um dicionário(nao sei o nome em javascript, mas em python é um dicionario)
// dicionarios são como listas mas eles guardam relações key:value .. guardam valores atrelados a um nome.
let contagem = {}

for (var produto of produtosContagem) { // iteramos pelo array de produtos adicionados
    if (contagem[produto]) {         // aqui checamos se o produto já está em nosso dicionario
        contagem[produto] += 1      // se sim, adicionamos +1 à quantidade
    } else {
        contagem[produto] = 1      // se não, criamos ele dentro do dicionário
    }
}

// como só precisamos saber o produto com maior quantidade:
let maiorQuantidade = 0
let produtoMaiorQuantidade

//o problema com esse método é que se houver um empate só mostraremos um produto.
for (var produto in contagem) {
    // checamos cada a quantidade 'contagem[produto]' de cada produto no dicionário 'contagem' frente a um valor maximo maiorQuantidade
    if (contagem[produto] >= maiorQuantidade) {
        // se for maior ou igual a gente atualiza o valor máximo na variável maiorQuantidade
        maiorQuantidade = contagem[produto]
        // e atualizamos o produto com esse valor na variável produtoMaiorQuantidade
        produtoMaiorQuantidade = produto
    }
}

// pronto, agora só mostrar o resultado
const resposta = `O produto mais pedido foi ${produtoMaiorQuantidade} com um total de ${maiorQuantidade} unidades.`
console.log(resposta)

//solução 2 sempre prefiro criar soluções dentro de funções
function main() {

    const promptMessage1 = "Qual produto deseja comprar? (selecione pelo numero):\n(1)Hortifruti\n(2)Laticínios\n(3)Carnes\n(4)Peixes\n(5)Aves\n(6)Fechar Pedido"

    // uma função para personalizar o prompt de quantidade para cada produto 
    function promptMessage2(produto) {
        // essa função aceita um parâmetro do tipo string, usamos a palavra 'produto' por escolha própria
        let mensagem = `Qual a quantidade de ${produto} deseja comprar?`

        // essa função devolve a mensagem com o nome do produto dentro da string na variável 'mensagem'
        return mensagem
    }

    let productsDict = {}
    let run = true
    //loop eterno
    while (run) {

        let selectedOption = window.prompt(promptMessage1)
        let selectedProduct
        let productQuantity = 0
        // switch case é mais facil de ler do que if/else
        switch (selectedOption) {
            case "1":
                selectedProduct = "Hortifruti"
                break;
            case '2':
                selectedProduct = "Laticínios"
                break;
            case '3':
                selectedProduct = "Carnes"
                break;
            case '4':
                selectedProduct = "Peixes"
                break;
            case '5':
                selectedProduct = "Aves"
                break;
            case '6':
                selectedProduct = null
                run = false
                break;
            case null: // clicar em cancelar
                selectedProduct = null
                run = false
                break;
            default:
                selectedProduct = null
                break;
        }
        // check de validação...se escreverem qualquer coisa que não seja os numeros do menu, o codigo não continua
        if (selectedProduct) {
            productQuantity = Number(window.prompt(promptMessage2(selectedProduct)))
            // salva os dados no dicionario productsDict..se já tiver lá atualiza a quantidade, se não tiver cria uma entrada no dicionario
            if (productsDict[selectedProduct]) {
                productsDict[selectedProduct] += productQuantity
            } else {
                productsDict[selectedProduct] = productQuantity
            }
        }
    }
    // fora do loop
    // Math.max() aceita uma lista de valores. os '...' servem pra extrair os valores de um array (equivalente a * do python)
    const maxValue = Math.max(...Object.values(productsDict))
    let resultArray = []
    // caso haja mais de um produto com a mesma quantidade
    for (let product in productsDict) {
        if (productsDict[product] == maxValue) {
            resultArray.push(product)
        }
    }
    // printa os resultados
    resultArray.forEach((result) => console.log(`O produto mais pedido foi ${result} com um total de ${maxValue} unidades.`))

}
// chama a função
main()