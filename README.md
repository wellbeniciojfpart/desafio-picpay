# PicPay - Frontend Challenge

O desafio consistia em desenvolver uma aplicação com um login, e um dashboard com um CRUD com paginação, filtro e ordenação de colunas (ASC/DESC).

## Índice

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Os principais objetivos do projeto eram: 
> - Autenticação do usuário na aplicação (via API Rest); 
> - O usuário conseguir verificar se digitou a senha corretamente;
> - O usuário ser capaz de:
	> --  Listar pagamentos no dashboard;
	> -- Adicionar pagamentos no dashboard;
	> -- Editar  pagamentos no dashboard;
	> -- Deletar pagamentos no dashboard; 
	> -- Pesquisar os itens cadastrados no dashboard;
	> -- Navegar entre as páginas (avançar/retornar).
> -- consumir os endpoints propostos na documentação back-end disponibilizada.

## Deploy
> O projeto pode ser acessado [clicando aqui](https://desafio-picpay.vercel.app/login). Mas, caso tenha interesse em contribuir com o projeto e executá-lo localmente, siga o passo a passo a seguir.

## Requisitos para instalação do projeto

- [Node.js](https://nodejs.org) 
- [Angular CLI](https://angular.io/cli)

## Instalação

> 1. Certifique-se de ter o Node.js instalado em sua máquina.
> 
> 2. Abra um terminal e execute o seguinte comando para instalar o Angular CLI globalmente:
> >`npm install -g @angular/cli`
> 
> 3. Clone este repositório para o seu ambiente local:
> 
> >`git clone https://github.com/wellbeniciojfpart/desafio-picpay.git`
> 
> 4. Acesse o diretório do projeto:
> 
> >`cd desafio-picpay`
> 
> 5. Instale as dependências do projeto:
> 
> > `npm install`

## Executando o Projeto

1. No diretório do projeto, execute o seguinte comando para iniciar o servidor de desenvolvimento:

   >  ng serve

2. Abra um navegador e acesse `http://localhost:4200` para visualizar o projeto em execução.

## Estrutura do Projeto

![image](https://github.com/wellbeniciojfpart/desafio-picpay/assets/134807206/bdb76f2a-0fe3-41d4-a05f-5075d2dc187a)

- O diretório `modules/` contém os módulos de Login e Dashboard e seus componentes.
- O diretório `shared/` contém as models e services utilizadas no projeto.
- O diretório `assets/` armazena arquivos complementares, como
- O diretório `src/app/components/` contém os componentes Angular.
- O arquivo `angular.json` contém configurações do projeto Angular.
- O arquivo `package.json` contém as dependências e scripts do projeto.


## Contribuição

É sempre relevante receber contribuições da comunidade! Para contribuir com o projeto, siga as etapas abaixo:

1. Faça um fork do repositório e clone-o para o seu ambiente local.
2. Instale as dependências do projeto executando o comando `npm install`.
3. Execute o projeto localmente com o comando `ng serve` e verifique se tudo está funcionando corretamente.
4. Crie uma nova branch para a sua contribuição: `git checkout -b feature/nova-contribuicao`.
5. Faça as alterações necessárias e adicione os commits com uma mensagem descritiva.
6. Envie as alterações para o seu repositório remoto: `git push origin feature/nova-contribuicao`.
7. Abra um pull request no repositório original, descrevendo as alterações que você fez e fornecendo qualquer contexto relevante.
8. Aguarde a revisão e o feedback da equipe de desenvolvimento. Será um prazer colaborar com você!

## Licença

Este projeto está licenciado sob a [Licença MIT](https://choosealicense.com/licenses/mit/). Você pode consultar o arquivo LICENSE para obter mais informações sobre os direitos e restrições concedidos por esta licença.


