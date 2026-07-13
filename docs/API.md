# API.md

# API Oficial do AutoNova

---

# Objetivo

Este documento centraliza toda a documentação da API utilizada pelo AutoNova.

Nenhum endpoint deverá ser criado sem ser documentado aqui.

Toda alteração na API deve atualizar este documento imediatamente.

Este documento é a referência oficial entre Front-end e Back-end.

---

# Arquitetura

Fluxo oficial

```

Pages

↓

Hooks

↓

Services

↓

API

↓

MongoDB

```

Nenhum componente deverá consumir endpoints diretamente.

Toda comunicação acontece através dos Services.

---

# URL Base

Desenvolvimento

```

http://localhost:3000

```

Produção

```

A definir

```

---

# Autenticação

Toda rota protegida utiliza:

```

Bearer Token (JWT)

```

Header

```

Authorization

Bearer {TOKEN}

```

---

# Padrão de Response

Toda resposta da API deverá seguir o mesmo padrão.

Sucesso

```json
{
    "success": true,
    "data": {}
}
```

Erro

```json
{
    "success": false,
    "message": "Mensagem do erro"
}
```

---

# Códigos HTTP

200

Sucesso

---

201

Criado

---

400

Requisição inválida

---

401

Não autenticado

---

403

Sem permissão

---

404

Não encontrado

---

409

Conflito

---

422

Erro de validação

---

500

Erro interno

---

# Endpoints

---

# Auth

## Login

POST

```

/auth/login

```

Body

```json
{
    "email": "",
    "password": ""
}
```

Response

```json
{
    "token": "",
    "usuario": {}
}
```

---

## Register

POST

```

/auth/register

```

---

## Logout

POST

```

/auth/logout

```

---

## Recuperar senha

POST

```

/auth/forget-password

```

---

# Empresas

---

## Listar

GET

```

/empresa

```

---

## Buscar por ID

GET

```

/empresa/:id

```

---

## Criar

POST

```

/empresa

```

Body

```json
{
    "nome":"",
    "email":"",
    "telefone":"",
    "cnpj":"",
    "segmento":"",
    "ativo":true
}
```

---

## Atualizar

PUT

```

/empresa/:id

```

---

## Excluir

DELETE

```

/empresa/:id

```

---

# Clientes

---

GET

```

/cliente

```

---

GET

```

/cliente/:id

```

---

POST

```

/cliente

```

---

PUT

```

/cliente/:id

```

---

DELETE

```

/cliente/:id

```

---

# Serviços

---

GET

```

/servico

```

---

GET

```

/servico/:id

```

---

POST

```

/servico

```

---

PUT

```

/servico/:id

```

---

DELETE

```

/servico/:id

```

---

# Usuários

---

GET

```

/usuario

```

---

GET

```

/usuario/:id

```

---

POST

```

/usuario

```

---

PUT

```

/usuario/:id

```

---

DELETE

```

/usuario/:id

```

---

# Agendamentos

---

GET

```

/agendamento

```

---

GET

```

/agendamento/:id

```

---

POST

```

/agendamento

```

---

PUT

```

/agendamento/:id

```

---

DELETE

```

/agendamento/:id

```

---

# Financeiro

Planejado

```

GET /financeiro

POST /financeiro

PUT /financeiro/:id

DELETE /financeiro/:id
```

---

# Configurações

Planejado

```

GET /configuracao

PUT /configuracao
```

---

# IA

Planejado

```

POST /ia/chat

POST /ia/report

POST /ia/analytics
```

---

# Convenções

Todos os endpoints

✔ retornam JSON

✔ utilizam JWT

✔ retornam códigos HTTP corretos

✔ utilizam validação

✔ utilizam Services

---

# Services Correspondentes

```

empresa.service.ts

cliente.service.ts

servico.service.ts

usuario.service.ts

agendamento.service.ts

auth.service.ts

```

Cada Service representa exatamente uma entidade.

Nunca misturar responsabilidades.

---

# Erros

Todos os erros devem retornar

```json
{
    "success": false,
    "message": "Descrição do erro"
}
```

Nunca retornar stacktrace.

Nunca retornar erros internos do MongoDB.

---

# Evolução

Toda vez que um endpoint novo for criado:

1. Implementar

2. Testar

3. Atualizar este documento

4. Atualizar o Service correspondente

5. Atualizar os Types

Este documento deve permanecer sincronizado com a API durante todo o ciclo de vida do AutoNova.