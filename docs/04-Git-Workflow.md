# Git Workflow

# Objetivo

Este documento define oficialmente o fluxo de trabalho utilizado no repositório do AutoNova.

Todo colaborador deverá seguir este processo.

O objetivo é garantir:

- estabilidade
- organização
- histórico limpo
- facilidade para revisar código
- facilidade para localizar problemas

Nenhuma alteração deve ser feita diretamente na branch principal.

---

# Branch Principal

A branch principal do projeto é:

```

main

```

Ela representa sempre a versão mais estável do projeto.

Nunca utilizar a branch main para desenvolver funcionalidades.

---

# Fluxo Oficial

Todo desenvolvimento deve seguir exatamente este fluxo.

```

main

↓

pull

↓

nova branch

↓

desenvolvimento

↓

commit

↓

push

↓

Pull Request

↓

Code Review

↓

Aprovação

↓

Merge

↓

Delete Branch

```

Nunca alterar esta sequência.

---

# Atualizando o Projeto

Sempre iniciar o dia atualizando o repositório.

```

git checkout main

git pull origin main

```

Nunca criar uma branch sem atualizar a main primeiro.

---

# Criando uma Branch

Toda funcionalidade deve possuir sua própria branch.

Exemplo

```

git checkout -b feature/dashboard

```

ou

```

git checkout -b feature/clientes

```

Nunca desenvolver duas funcionalidades diferentes na mesma branch.

---

# Padrão Oficial de Branches

## Funcionalidades

```

feature/nome-da-feature

```

Exemplos

```

feature/dashboard

feature/empresas

feature/clientes

feature/servicos

feature/usuarios

feature/financeiro

```

---

## Correções

```

fix/nome-da-correcao

```

Exemplo

```

fix/login

fix/modal

fix/sidebar

```

---

## Refatorações

```

refactor/nome

```

Exemplo

```

refactor/hooks

refactor/layout

```

---

## Documentação

```

docs/nome

```

Exemplo

```

docs/readme

docs/ui

```

---

# Commits

Os commits devem possuir apenas uma responsabilidade.

Nunca misturar várias alterações.

---

# Padrão de Commit

Formato

```

tipo(modulo): descrição

```

Exemplo

```

feat(empresas): adiciona cadastro

feat(clientes): cria filtro

fix(login): corrige autenticação

style(dashboard): melhora layout

docs(ui): atualiza especificação

refactor(hooks): reorganiza lógica

```

---

# Commits Pequenos

Errado

```

Atualizações

```

Errado

```

Correções

```

Errado

```

Mudanças

```

Correto

```

feat(servicos): adiciona formulário

```

---

# Frequência de Commit

Sempre realizar commits pequenos.

Nunca trabalhar horas sem commitar.

Ideal

```

30~60 minutos

```

ou

Sempre que finalizar uma etapa.

---

# Push

Após finalizar uma etapa importante.

```

git push origin feature/dashboard

```

Nunca utilizar force push.

---

# Pull Request

Após finalizar a funcionalidade.

Abrir um Pull Request.

Nunca fazer merge diretamente.

---

# Estrutura da Pull Request

Toda PR deve conter.

## Objetivo

Descrever o que foi desenvolvido.

---

## Alterações

Listar resumidamente.

Exemplo

- adicionada tabela
- criado formulário
- criado hook
- integrado service

---

## Módulos Afetados

Exemplo

Dashboard

Empresas

Hooks

---

## Prints

Sempre adicionar capturas de tela quando houver alterações visuais.

---

## Checklist

```

[ ] Projeto compila

[ ] Sem erros TypeScript

[ ] Responsivo

[ ] UI Specification respeitada

[ ] Componentes reutilizados

[ ] Sem console.log

[ ] Sem any

```

---

# Revisão

Toda Pull Request deve ser revisada.

O revisor deve verificar.

- arquitetura
- organização
- qualidade
- reutilização
- UI
- performance

Nunca aprovar código sem revisar.

---

# Merge

Somente após aprovação.

Sempre utilizar.

```

Squash and Merge

```

ou

```

Rebase and Merge

```

Nunca utilizar Merge Commit.

O histórico deve permanecer linear.

---

# Após o Merge

Atualizar novamente a main.

```

git checkout main

git pull origin main

```

Depois apagar a branch.

Local

```

git branch -d feature/dashboard

```

Remoto

```

git push origin --delete feature/dashboard

```

---

# Sincronização

Caso outra pessoa faça merge antes.

Atualizar.

```

git checkout main

git pull origin main

git checkout feature/dashboard

git merge main

```

Resolver conflitos.

Continuar.

---

# Conflitos

Quando existir conflito.

Nunca apagar código sem entender.

Procedimento.

1.

Ler ambas alterações.

2.

Entender qual implementação deve permanecer.

3.

Resolver manualmente.

4.

Testar.

5.

Commit.

---

# Nunca Fazer

Nunca.

```

git push --force

```

Nunca.

Desenvolver na main.

Nunca.

Excluir arquivos sem confirmação.

Nunca.

Misturar funcionalidades diferentes.

Nunca.

Alterar arquitetura sem discussão.

---

# Organização do Time

Cada colaborador trabalha em sua própria branch.

Nunca dois colaboradores trabalham diretamente na mesma branch.

---

# Exemplo

Lucas

↓

feature/dashboard

Maria

↓

feature/clientes

João

↓

feature/servicos

Cada um abre sua própria Pull Request.

---

# Antes do Push

Sempre verificar.

```

pnpm lint

pnpm tsc --noEmit

pnpm build

```

Se existir erro.

Não fazer push.

---

# Antes do Merge

Confirmar.

☐ Sem conflitos

☐ Build funcionando

☐ Tipagem correta

☐ Componentes reutilizados

☐ Arquitetura respeitada

☐ UI Specification respeitada

☐ Código revisado

---

# Emergências

Caso a branch apresente muitos problemas.

Pode ser descartada.

```

git checkout main

git branch -D feature/dashboard

git checkout -b feature/dashboard

```

É preferível recomeçar uma branch pequena do que manter uma branch corrompida.

---

# Filosofia

O Git não é apenas um sistema de versionamento.

Ele é a documentação viva do projeto.

Um histórico organizado permite:

- localizar bugs rapidamente
- entender decisões antigas
- reverter problemas com segurança
- facilitar onboarding de novos colaboradores

Todo commit conta uma parte da história do AutoNova.

Escreva essa história de forma clara.