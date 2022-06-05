# Sobre o Script.js

O papel do script é fazer o carrossel da página funcionar, de modo que cada imagem se altere após determinado intervalo de tempo e quando o usuário interagir com as setas.

No **cabeçalho** há a declaração das variáveis e constantes. As constantes são usadas para guardar os elementos do HTML pelo seu ID com o `getElementById`. A **tagImg** será usada para manipular a imagem principal da página (logo abaixo do _header_) e as constantes **buttonProx** (botão próximo) e **buttonAnt** (botão anterior/voltar) são usados para gerenciar os botões que permitirão ao usuário alterar entre as imagens do carrossel.

As variáveis vão manipular elementos do próprio algoritmo, com atenção especial para o vetor **arrayImgs[]**: todas as imagens estão armazenadas nele.

## 1. Função init()
A funcão principal é a init(). É a primeira a ser inicializada e que chamará as demais. Dentro dela a função **start()** é iniciada. Também **dois eventos** podem ser acionados: quando o usuário clicar no elemento identificado pelo ID = "proximo" (`buttonProx.onclick`), a função imgProx é chamada; quando clicar na tag com ID "anterior" (`buttonAnt.onclick`).

## 2. Função start()
Essa função usa um método (conceito de orientação a objeto) do JavaScript que executa uma função após determinado intervalo de tempo (`setInterval`). Os parâmetros passados são: update (chama a função **update()**) e o tempo em milisegundos (1000). Logo, a cada 1s a função update() é executada.

## 3. Função update()
É uma das mais importantes. Primeiramente ela incrementa a variável **count** em +1 sempre que é chamada (lembrando que isso acontece a cada 1s). Após 3 segundos (`count == 3`), a condição _if_ é executada e a função **alterImage()** é iniciada e count é zerada (`count = 0`) para reiniciar a contagem.

## 4. Função alterImage()

Ela altera as imagens do carrossel. Primeiramente, é bom esclarecer que o papel da variável **index** é justamente acessar o índex do vetor **arrayImgs[]**. Sabendo que os índices de um vetor são contados a partir do 0 e que, neste projeto, há 4 imagens diferentes (portanto os índices do vetor são 0, 1, 2 e 3), a condição _if_ analisa se a imagem que está aprecendo é a última (`index == 3`). Se essa condição for verdadeira, é preciso voltar o carrossel para a primeira imagem (`index = 0`). Então o índex é zerado e o conteúdo da tag identificada por **tagImg** é alterado para o elemento do array de posição 0 (a posição é definida pelo valor do índex; `tagImg.src = arrayImgs[index]`).

Se a condição for falsa (a imagem que está aprecendo não é a última do carrossel), o índex é incrementado em +1 e a próxima imagem é mostrada.

## 5. Função imgProx()

Essa função faz o mesmo papel de **alterImage()**, porém é executada quando o usuário clicar no elemento de ID = "proximo" (seta para a direita). Detalhe importante é que a primeira linha é também um método do próprio JavaScript que vai **interromper o contador timer** para que a função **update()** não seja chamada novamente (isso ocasionaria um _bug_ no tempo de alteração entre as imagens).

No final, a função **start()** é chamada novamente para que a contagem continue após a imagem ser alterada pelo clique do usuário.

## 6. Função imgAnt()

Segue a mesma ideia da função **imgProx()**, mas com um detalhe: caso a imagem na tela seja a primeira do carrossel (`index == 0`), então a imagem anterior deve ser a última imagem do vetor (`index = 3`). Por isso esses valores são alterados nessa função (ela faz o inverso). Além disso, na cláusula _else_, evidentemente, a imagem apresentada será a de **índex - 1** (escrito como `index --`).
