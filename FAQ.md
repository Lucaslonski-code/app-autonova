# FAQ — Perguntas Frequentes

# Objetivo

Este documento responde às dúvidas mais comuns dos desenvolvedores do AutoNova.

Antes de perguntar algo para outro membro da equipe, consulte este documento.

Caso a resposta não esteja aqui, ela deverá ser adicionada futuramente para manter o conhecimento centralizado.

---

# Índice

1. Sobre o Projeto
2. Arquitetura
3. Estrutura de Pastas
4. Componentes
5. Pages
6. Hooks
7. Services
8. Types
9. API
10. Estilos
11. Git
12. Desenvolvimento
13. Deploy

---

# Sobre o Projeto

## O que é o AutoNova?

O AutoNova é uma plataforma SaaS desenvolvida para gerenciamento empresarial.

Seu objetivo é centralizar todas as operações administrativas em um único sistema moderno, organizado e escalável.

---

## Quais empresas poderão utilizar o sistema?

Inicialmente:

- Restaurantes
- Pizzarias
- Barbearias
- Clínicas
- Oficinas

No futuro:

Qualquer empresa.

---

## O projeto possui arquitetura definida?

Sim.

Ela nunca deve ser alterada sem discussão prévia.

Consulte:

```
02-ARQUITETURA.md
```

---

# Estrutura

## Onde ficam as páginas?

```
src/app
```

---

## Onde ficam os componentes?

```
src/components
```

---

## Onde ficam os hooks?

```
src/hooks
```

---

## Onde ficam os services?

```
src/services
```

---

## Onde ficam os types?

```
src/types
```

---

## Onde ficam os estilos?

```
src/styles
```

---

## Onde ficam os providers?

```
src/providers
```

---

## Onde ficam os contexts?

```
src/contexts
```

---

# Pages

## Posso colocar lógica dentro da página?

Não.

A Page apenas monta a interface.

Toda lógica deve ficar em:

```
Hooks
```

---

## Posso chamar axios dentro da Page?

Nunca.

A comunicação deve passar por:

```
Page

↓

Hook

↓

Service

↓

API
```

---

## Posso colocar validação na Page?

Não.

A validação pertence ao formulário.

---

# Componentes

## Posso criar um componente novo?

Sim.

Mas primeiro verifique se ele já existe.

Sempre reutilize.

---

## Posso criar um botão personalizado?

Não.

Sempre utilizar

```
Button
```

---

## Posso usar input HTML?

Não.

Sempre utilizar

```
Input
```

---

## Posso criar um modal diferente?

Não.

Sempre utilizar

```
Modal
```

---

## Posso criar uma tabela diferente?

Não.

Sempre utilizar

```
Table
```

---

# Modules

## O que é um Module?

É um conjunto de componentes relacionados a uma entidade.

Exemplo:

```
Empresa

↓

EmpresaCard

EmpresaForm

EmpresaFilter

EmpresaTable
```

---

## Posso adicionar componentes extras?

Somente quando realmente necessário.

Sempre manter responsabilidade única.

---

# Hooks

## O que um Hook deve fazer?

Controlar estado.

Exemplo:

- carregar dados

- filtros

- paginação

- CRUD

---

## Um Hook pode chamar API?

Não diretamente.

Ele utiliza:

```
Services
```

---

## Posso compartilhar estados entre páginas?

Sim.

Criando hooks reutilizáveis.

---

# Services

## Onde ficam as chamadas HTTP?

Sempre em:

```
services
```

---

## Posso utilizar axios dentro de componentes?

Nunca.

---

## Posso utilizar fetch?

Não.

Toda comunicação utiliza a infraestrutura definida em:

```
lib/api.ts
```

---

# Types

## Posso declarar interfaces dentro dos componentes?

Não.

Sempre criar arquivos em:

```
types
```

---

## Onde criar novos tipos?

Sempre:

```
types/

entidade.ts
```

---

# Estilos

## Posso utilizar CSS inline?

Nunca.

---

## Posso utilizar style={{}}?

Nunca.

---

## Posso utilizar cores diferentes?

Não.

Sempre seguir

```
UI Specification
```

---

## Posso alterar fontes?

Não.

---

## Posso alterar radius?

Não.

---

## Posso alterar espaçamentos?

Não.

---

# Tailwind

## Posso utilizar valores arbitrários?

Evite.

Errado

```
mt-[37px]
```

Correto

```
mt-8

mt-6

mt-4
```

---

# Git

## Posso desenvolver na main?

Nunca.

---

## Sempre criar branch?

Sim.

---

## Posso fazer force push?

Nunca.

---

## Como nomear uma branch?

```
feature/nome

fix/nome

docs/nome

refactor/nome
```

---

# Código

## Posso utilizar any?

Nunca.

---

## Posso deixar console.log?

Nunca.

---

## Posso deixar TODO?

Nunca.

---

## Posso comentar código?

Somente quando realmente necessário.

---

# UI

## Existe um padrão visual?

Sim.

Todo layout deve seguir:

```
UI Specification
```

---

## Posso criar componentes visualmente diferentes?

Não.

Toda aplicação deve parecer um único produto.

---

# Formulários

## Qual biblioteca utilizar?

Sempre:

```
React Hook Form
```

---

## Como validar?

Sempre:

```
Zod
```

---

## Posso validar manualmente?

Não.

---

# Performance

## Posso usar useMemo em tudo?

Não.

Somente quando necessário.

---

## Posso usar useCallback em tudo?

Não.

---

## Posso criar componentes enormes?

Não.

Divida em componentes menores.

---

# Build

## Antes de enviar código devo executar?

Sempre.

```
pnpm lint

pnpm tsc --noEmit

pnpm build
```

---

# Responsividade

## Todas as páginas precisam ser responsivas?

Sim.

Sem exceções.

---

# Deploy

## Posso alterar variáveis do .env?

Sim.

Mas nunca enviar para o GitHub.

---

## Posso subir tokens?

Nunca.

---

# IA

## Posso utilizar outra IA além da definida?

Somente após aprovação.

---

# Arquitetura

## Posso alterar a estrutura de pastas?

Não.

---

## Posso mover arquivos?

Somente quando houver necessidade real.

---

## Posso renomear componentes?

Somente quando aprovado.

---

# Antes de começar qualquer tarefa

Verifique sempre:

☐ UI Specification

☐ Arquitetura

☐ Padrões

☐ Git Workflow

☐ Qualidade

---

# Antes de abrir uma Pull Request

Verifique:

☐ Sem erros TypeScript

☐ Sem warnings

☐ Build funcionando

☐ Componentes reutilizados

☐ Responsivo

☐ Sem console.log

☐ Sem any

☐ Sem TODO

☐ UI Specification respeitada

☐ Arquitetura respeitada

---

# Não encontrou sua dúvida?

Consulte primeiro:

```
README.md

↓

01-PROJETO.md

↓

02-ARQUITETURA.md

↓

03-DESENVOLVIMENTO.md

↓

04-GIT-WORKFLOW.md

↓

05-PADROES.md

↓

06-QUALIDADE.md
```

Se ainda não houver resposta, pergunte ao responsável pelo projeto.

Depois que a dúvida for resolvida, atualize este FAQ para que o conhecimento permaneça documentado.