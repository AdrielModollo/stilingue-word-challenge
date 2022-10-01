# Desafio palavras

## Planejamento

![meu planejamento](https://github.com/AdrielModollo/stilingue-word-challenge/blob/main/MyPlanning.drawio.png)

## Dados esperado
![dados](https://github.com/AdrielModollo/stilingue-word-challenge/blob/main/dataModeling.png)

## Mapeamento

![mapeamento](https://github.com/AdrielModollo/stilingue-word-challenge/blob/main/mapping.drawio.png)

## Mapeamento GCP

![mapeamentogcp](https://github.com/AdrielModollo/stilingue-word-challenge/blob/main/GCP.drawio.png)

# Aplicativo online

http://18.231.195.79:3333/word/palavraQueDesejaBuscar

#### Configurando GCP

>Os passos abaixo são necessários para caso optar ir para um ambiente offline, você pode testar aplicação usando o link acima "Aplicativo online".

> Atenção os passos abaixo são somente necessário para enviar a mensagem para o PUBSUB, caso não consiga gerar o arquivo posso fornecer os dados do meu GCP com minhas credenciais.

- 1. https://cloud.google.com/sdk/docs/install?hl=pt-br -> Baixe e configure o SDK GCP

- 2. No GCP crie um novo projeto e um topico com o nome `word`

- 3. Com o terminal instalado dentro da pasta do projeto logue em seu projeto já configurado com o comando `gcloud auth login`

- 4. Após logar selecione o projeto 

- 5. No pesquisar do google busque por `credencias`

- 6. Clique em `Criar Credencias` > `Conta de serviço` > `Configure os dados`

- 7. Clique na `chave gerada` > `chaves` > `Adicionar nova chave` > `JSON`

- 8. Cole esse arquivo dentro da pasta do projeto ./src e renomeio para `myKey.json`

- 9. Execute o comando '`npx deploy` dentro da pasta do sistema

#### Iniciando o sistema

    - 1. Crie o arquivo .env conforme exemplo .env.example
    - 2. Execute o comando npm run dev
    - 3. Digite a palavra que deseja enviar para o pubsub
