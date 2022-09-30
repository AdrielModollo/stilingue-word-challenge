# Desafio palavras

#### Configurando GCP

> Atenção os passos abaixo são somente necessário para enviar a mensagem para o PUBSUB, caso não consiga gerar o arquivo posso fornecer os dados do meu GCP com minhas credenciais.

- 1. https://cloud.google.com/sdk/docs/install?hl=pt-br -> Baixe e configure o SDK GCP

- 2. No GCP crie um novo projeto e um topico com o nome 'word'

- 3. Com o terminal instalado 

- 4. Dentro da pasta do projeto logue em seu projeto já configurado com o comando 'gcloud auth login'

- 5. Após logar selecione o projeto 

- 6. No pesquisar do google busque por 'credencias'

- 7. Clique em 'Criar Credencias' > 'Conta de serviço' > 'Configure os dados'

- 8. Clique na chave gerada > 'chaves' > 'Adicionar nova chave' > 'JSON'

- 9. Cole esse arquivo dentro da pasta do projeto ./src e renomeio para 'myKey.json'

- 10. Execute o comando 'npx deploy' dentro da pasta do sistema

#### Iniciando o sistema

    - 1. Após criar um arquivo .env selecione a palavra que deseja buscar na variavél 'searchWord'
    - 2. Execute o comando npm run start
