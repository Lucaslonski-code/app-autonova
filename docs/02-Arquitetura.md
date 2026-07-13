# Arquitetura do Projeto

# Objetivo

Este documento define oficialmente toda a arquitetura utilizada no AutoNova.

Toda implementação futura deve seguir exatamente estas regras.

Caso alguma alteração estrutural seja necessária, este documento deverá ser atualizado antes da implementação.

---

# Filosofia

O AutoNova utiliza uma arquitetura baseada em separação de responsabilidades.

Cada camada possui apenas uma função.

Essa separação torna o projeto:

- escalável
- organizado
- fácil de testar
- fácil de manter
- previsível

---

# Fluxo Oficial da Aplicação

Toda funcionalidade deve seguir exatamente este fluxo.

```

Pages
↓
Components
↓
Hooks
↓
Services
↓
API
↓
MongoDB

```

Jamais inverter esse fluxo.

---

# Camadas

## 1. App

Local:

```

src/app

```

Responsável por:

- páginas
- layouts
- rotas
- agrupamentos

Nunca:

- fazer chamadas HTTP
- acessar axios
- escrever regras de negócio
- acessar MongoDB

As páginas apenas organizam componentes.

Exemplo:

```

DashboardPage

↓

<PageHeader/>

<DashboardHero/>

<MetricCard/>

<ChartCard/>

```

Toda lógica deve sair da página.

---

## 2. Components

Local:

```

src/components

```

Responsável exclusivamente pela interface.

Um componente deve apenas renderizar.

Ele recebe propriedades.

Renderiza.

Fim.

Nunca:

- utilizar axios
- fazer fetch
- acessar services
- criar regras complexas

Exemplo correto:

```

EmpresaCard

↓

recebe empresa

↓

renderiza

```

Exemplo incorreto:

```

EmpresaCard

↓

faz GET /empresa

↓

renderiza

```

Isso nunca deve acontecer.

---

# Organização dos Components

## UI

```

components/ui

```

Componentes completamente reutilizáveis.

Exemplos

Button

Input

Card

Modal

Badge

Spinner

Table

Tooltip

Avatar

Não conhecem nenhuma entidade.

---

## Layout

```

components/layout

```

Estrutura da aplicação.

Header

Sidebar

Footer

PageHeader

Content

ProtectedRoute

---

## Dashboard

```

components/dashboard

```

Componentes exclusivos do Dashboard.

MetricCard

ChartCard

DashboardHero

ActivityCard

---

## Modules

```

components/modules

```

Cada módulo possui seus próprios componentes.

Exemplo

```

empresa/

EmpresaForm

EmpresaTable

EmpresaCard

EmpresaFilter

```

Todos seguem o mesmo padrão.

---

# Hooks

Local

```

src/hooks

```

Toda lógica reutilizável deve ficar aqui.

Os hooks são responsáveis por:

- estados
- loading
- paginação
- filtros
- busca
- cache
- integração com services

Nunca:

renderizar interface.

Exemplo

```

useEmpresas()

↓

empresas

loading

erro

criarEmpresa()

editarEmpresa()

```

---

# Services

Local

```

src/services

```

Toda comunicação HTTP fica aqui.

Nunca utilizar axios fora desta pasta.

Cada entidade possui seu próprio service.

```

empresa.service.ts

cliente.service.ts

usuario.service.ts

```

Os services apenas conversam com a API.

Não conhecem componentes.

Não conhecem páginas.

---

# Types

Local

```

src/types

```

Todas as interfaces devem ficar aqui.

Nunca declarar interfaces dentro de componentes.

Errado

```

interface Empresa {}

```

Dentro de EmpresaCard.tsx

Correto

```

types/empresa.ts

```

Importar onde necessário.

---

# Lib

Local

```

src/lib

```

Infraestrutura.

Exemplos

api.ts

axios

interceptors

cookies

storage

validators

utils

Toda configuração compartilhada pertence aqui.

---

# Providers

Local

```

src/providers

```

Responsável por Providers globais.

Exemplos

ThemeProvider

SidebarProvider

QueryProvider

---

# Contexts

Local

```

src/contexts

```

Utilizado apenas quando estados realmente precisam ser globais.

Exemplo

AuthContext

Nunca utilizar Context sem necessidade.

Preferir hooks.

---

# Config

Local

```

src/config

```

Arquivos de configuração.

env.ts

routes.ts

Nunca colocar lógica.

---

# Constants

Local

```

src/constants

```

Valores fixos.

navigation.ts

permissions.ts

routes.ts

Nunca alterar durante execução.

---

# Styles

Local

```

src/styles

```

CSS global.

Separado por responsabilidade.

Exemplo

layout.css

dashboard.css

animations.css

variables.css

Nunca utilizar CSS inline.

---

# Assets

Local

```

src/assets

```

Imagens

ícones

logos

svg

fontes

---

# Regra de Dependência

Cada camada conhece apenas a camada abaixo.

Exemplo

Pages

↓

Components

↓

Hooks

↓

Services

↓

API

Nunca o contrário.

---

# Componentização

Todo componente possui apenas uma responsabilidade.

Exemplo

EmpresaTable

↓

Tabela

EmpresaForm

↓

Formulário

EmpresaFilter

↓

Filtros

EmpresaCard

↓

Card

Nunca misturar.

---

# Reutilização

Antes de criar um componente novo perguntar:

Já existe?

Pode ser adaptado?

É realmente necessário?

Duplicação é proibida.

---

# Responsabilidade

Page

Organiza.

Component

Renderiza.

Hook

Controla.

Service

Comunica.

API

Entrega.

Banco

Armazena.

Cada camada possui apenas uma responsabilidade.

---

# Padrões de Nome

Componentes

PascalCase

```

EmpresaCard.tsx

```

Hooks

camelCase iniciado com use

```

useEmpresas.ts

```

Services

```

empresa.service.ts

```

Types

```

empresa.ts

```

Providers

```

ThemeProvider.tsx

```

Contexts

```

AuthContext.tsx

```

---

# Antes de Criar Código

Verificar

☐ Existe componente parecido?

☐ Existe hook parecido?

☐ Existe service parecido?

☐ Estou respeitando a arquitetura?

☐ Estou reutilizando?

☐ Estou separando responsabilidades?

---

# Regra de Ouro

Toda implementação nova deve parecer que sempre fez parte do projeto.

Nenhuma funcionalidade deve "quebrar" o padrão arquitetônico existente.

Consistência é mais importante que velocidade.