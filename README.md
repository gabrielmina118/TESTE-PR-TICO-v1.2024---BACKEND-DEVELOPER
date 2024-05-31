# API de Opções de Caldos e Proteínas

Esta documentação descreve os endpoints da API para fornecer as opções disponíveis de caldos e proteínas, e realizar pedidos. A API é projetada para retornar dados que serão utilizados para popular listas de seleção para o usuário, permitindo que o mesmo selecione apenas uma opção de cada lista para montar seu pedido.


## 🚀 Começando

É possivel ler mais sobre a API na documentação online [aqui](https://documenter.getpostman.com/view/15065875/2sA3QwaUa6)

## 🛠️ Construído com

* Node  
* typescript

## Instalação

```bash
$ npm install
```

## Rodar a aplicação

```bash
# development
$ npm run start
```

## ⚙️ Executando os testes

Para executar os testes , rode o comando:
```bash
# unit tests
$ npm run test
```

## 🎉 Estrutura do projeto

```
__tests__\          # Pasta de testes
 |--options.test.ts # arquivo de teste
src\
 |--controllers\    # Controladores que contêm a lógica de negócios
 |--data\           # Dados e modelos do aplicativo
 |--routes\         # Definições de rotas e endpoints
 |--utils\          # Funções utilitárias 
 |--app.ts          # Configuração das rotas dos endpoints
 |--server.ts       # Configuração e inicialização do servidor da aplicação
```

## ✅ Variaveis de ambiente

As variáveis ​​de ambiente podem ser encontradas e modificadas no arquivo `.env`.

```bash
# Chave de acesso a api
API_KEY = "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"
```


### 🎲 API Endpoints

Lista de rodas:

**API**:\
`GET /api/broths` - Retorna todos os caldos\
`GET /api/proteins` - Retorna todas as proteínas\
`POST /api/orders` - Realiza o pedido \


## 🏁 Endpoints exemplos

### 1. Retorna todos os caldos

- **Endpoint:** `/api/broths`
- **Método:** GET
- **Descrição:** Este endpoint retorna uma lista de todos os caldos disponíveis.
- **URL Completa:** `https://teste-pr-tico-v1-2024-backend-developer-c8b5lrcpr.vercel.app/api/broths`

**Exemplo de resposta:**
```json
[
  {
    "id": "1",
    "imageInactive": "https://tech.redventures.com.br/icons/salt/inactive.svg",
    "imageActive": "https://tech.redventures.com.br/icons/salt/active.svg",
    "name": "Salt",
    "description": "Simple like the seawater, nothing more",
    "price": 10
  },
  {
    "id": "2",
    "imageInactive": "https://tech.redventures.com.br/icons/shoyu/inactive.svg",
    "imageActive": "https://tech.redventures.com.br/icons/shoyu/active.svg",
    "name": "Shoyu",
    "description": "The good old and traditional soy sauce",
    "price": 10
  },
  {
    "id": "3",
    "imageInactive": "https://tech.redventures.com.br/icons/miso/inactive.svg",
    "imageActive": "https://tech.redventures.com.br/icons/miso/active.svg",
    "name": "Miso",
    "description": "Paste made of fermented soybeans",
    "price": 12
  }
]
````
### 2. Retorna todas as proteínas

- **Endpoint:** `/api/proteins`
- **Método:** GET
- **Descrição:** Este endpoint retorna uma lista de todas as proteínas disponíveis..
- **URL Completa:** `https://teste-pr-tico-v1-2024-backend-developer-c8b5lrcpr.vercel.app/api/proteins`

**Exemplo de resposta:**
```json
[
  {
    "id": "1",
    "imageInactive": "https://tech.redventures.com.br/icons/pork/inactive.svg",
    "imageActive": "https://tech.redventures.com.br/icons/pork/active.svg",
    "name": "Chasu",
    "description": "A sliced flavourful pork meat with a selection of season vegetables.",
    "price": 10
  },
  {
    "id": "2",
    "imageInactive": "https://tech.redventures.com.br/icons/yasai/inactive.svg",
    "imageActive": "https://tech.redventures.com.br/icons/yasai/active.svg",
    "name": "Yasai Vegetarian",
    "description": "A delicious vegetarian lamen with a selection of season vegetables.",
    "price": 10
  },
  {
    "id": "3",
    "imageInactive": "https://tech.redventures.com.br/icons/chicken/inactive.svg",
    "imageActive": "https://tech.redventures.com.br/icons/chicken/active.svg",
    "name": "Karaague",
    "description": "Three units of fried chicken, moyashi, ajitama egg and other vegetables.",
    "price": 12
  }
]
````

### 2. Realiza o pedido

- **Endpoint:** `/api/orders`
- **Método:** POST
- **Descrição:** Este endpoint é utilizado para realizar um pedido com a seleção de caldo e proteína.
- **URL Completa:** `https://teste-pr-tico-v1-2024-backend-developer-c8b5lrcpr.vercel.app/api/orders`

**Corpo da requisição:**
```json
{
  "broth_id": 1,
  "protein_id": 2
}
````

**Exemplo de resposta:**
```json
{
    "orderId": {
        "id": "64261",
        "description": "Salt and Chasu Ramen",
        "image": "https://tech.redventures.com.br/icons/ramen/ramenChasu.png"
    }
}
````
## 🪄 Sobre o desenvolvedor

Feito por [gabrielmina118](https://github.com/gabrielmina118)

# portifolio

