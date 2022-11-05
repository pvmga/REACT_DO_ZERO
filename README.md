### DESAFIO
1. Primeiro projeto criado com react + bootstrap + Spring Boot + MySQL

### INFORMAÇÕES IMPORTANTES
1. JDK<br>
2. NODE JS<br>
3. VS Code -> EXTENSION PACK FOR JAVA | SPRING BOOT EXTENSION PACK | MYSQL | LOMBOKANNOTATIONS SUPPORT FOR VS CODE <br>

### PASSOS RESUMIDOS <br >
1. Criar projeto <br >
2. Criar arquivos Formulario.js e Tabela.js <br >
3. Adicionar bootstrap public -> index.html <br >
4. Limpar estrutura do src -> App.css <br >
5. Criar constante para gerenciar quando ou não exibir o botão. Inicia-la com true por exemplo <br >
6. Enviar a condição do botão para validação no formulário <br >
7. Criar const com useEffect chamando API de listagem. <br >
8. Passar os produtos para o componente de listagem e exibi-los. <br >
9. Criar objeto para gerenciar produto. <br >
10. Criar UseState para manipular Produto. <br >
11. Obter informações do formulário. <br > 
12. Cadastrar produto, caso de certo, atualizar lista e limpar formulário.<br >
13. Selecionar produto.<br >
14. Cancelando alteração e exclusão. <br >
15. Remover cadastro. <br >
16. Alterar cadastro. <br >


### 1. Criar Projeto React<br >
1. npx create-react-app front <br >
2. npm start <br >

### 2. Criar arquivos <br>
1. src -> Formulario.js (É um componente)<br >
2. src -> Tabela.js (É um componente)<br >

### 3. Adicionando bootstrap <br >
1. public -> index.html <br >

### 4. Apagar estrutura dentro do arquivo e adicionar a nova <br >
1. src -> App.css <br >

### 5. Visibilidade dos botões <br>
1. src -> App.js criar constante para trabalhar com essa visibilidade<br >
2. passar o btnCadastrar criado como const, no formulário <Formulario botao={btnCadastrar} /> <br >
3. Formulario.js -> receber na função o nome da propriedade aplicad no App.js {botao} <br >
4. Criar condicional para verificar quando exibir os botões. Quando for true exibirá apenas o botão Cadastrar<br>

### 6. Obtendo produtos <br >
1. criar um const [produtos, setProdutos] = useState([]); produtos irá receber um vetor de dados. <br >
2. App.js useEffect() <br >
3. Para testar podemos ir em nosso return utilizar o comando {JSON.stringify(produtos)} dentro de uma tag p por exemplo <br />

### 7. Exibindo os produtos na tabela <br />
1. App.js -> Criar uma propriedade onde queremos enviar os produtos e passa através por parametro. <br />
2. Receber a propriedade no arquivo de tabela. <br />
3. Criar um map para fazer laço enquanto tiver registros. <br />

### 8. Criando objeto produto <br />
1. Objeto servira pra ajudar selecionar -> cadastrar, alterar, excluir  e selecionar produto...<br />

### 9. UseState para manipular <br >
1. Criar const para conseguir de forma dinamica manipular o objeto produto. const [objProduto, setObjProduto] = useState(produto); <br >
2. Para verificar se está tudo certo, podemos ir return e passar o objProduto dentro do stringify <br >

### 10. Obtendo dados do formulário <br >
1. Criar código para escutar o que está sendo digitado e passar para o componente formulário.<br >
2. Utilizar onChange e name, o name necessita que seja igual ao nome do objeto produto criado no App.js<br >

### 11. Cadastrar produto <br >
1. Criar método chamando API de cadastramento <br >
2. Passar para o formulário o método cadastrar. E utilizar no botão. <br >
3. Atualizar lista. <br >
4. Limpar formulário. <br 
5. Passar objProduto para o formulário. <br >

### 12. Selecionar produto <br >
1. Passar a função selecionarProduto para a tabela.<br >
2. Receber a função e coloca-la no onClick. <br >
3. Retornar o index para o App. <br >

### 13. Cancelando alteração e exclusão <br >
1. Passar a função limparFormulario para o formulário<br >
2. Ao clicar limpa e retorna o botão de cadastrar. <br >

### 14. Remover cadastro <br >
1. Criar const recebendo função de remover. <br >
2. Passar a função para o fomrulário. <br >

### 15. Alterar produto <br >
1. Criar const recebendo função de alterar. <br >
2. Passar a função para o formulário. <br >


https://www.youtube.com/watch?v=3WdRR0sfgzM&list=PLWXw8Gu52TRKouXUo3Abu33_ODPXZTz64&index=34