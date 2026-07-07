
# UI Specification — Autonova

## Objetivo

Este documento define todas as regras visuais e comportamentais da interface da Autonova.

Ele serve como referência oficial para qualquer desenvolvimento Front-end.

Nenhum componente, tela ou fluxo deverá ser criado sem seguir estas especificações.

---

# Escopo

Este documento cobre:

- Site institucional
- App (app.autonovasoftware.com)
- Dashboard
- Painéis administrativos
- CRM
- Agenda
- Produtos
- Pedidos
- IA
- Configurações
- Futuro aplicativo mobile

Todos compartilham o mesmo Design System.

---

# Filosofia da Interface

A interface da Autonova deve transmitir imediatamente:

- tecnologia
- inteligência
- automação
- confiança
- estabilidade
- organização
- alto valor

Nunca deve parecer um painel administrativo genérico.

O usuário deve perceber que está utilizando uma plataforma premium.

---

# Princípios

## Minimalismo

Cada elemento deve possuir uma função.

Se um componente não agrega informação ou ação, ele não deve existir.

Nunca adicionar elementos apenas para preencher espaço.

---

## Clareza

O usuário nunca deve precisar "descobrir" onde clicar.

A hierarquia visual deve conduzir naturalmente o olhar.

---

## Consistência

Todo componente deve possuir comportamento previsível.

Botões iguais.

Inputs iguais.

Cards iguais.

Tabelas iguais.

Nenhuma tela deve parecer pertencer a outro sistema.

---

## Escalabilidade

Toda decisão visual deve considerar que o sistema continuará crescendo durante anos.

O objetivo não é apenas atender às telas atuais.

O objetivo é suportar dezenas de módulos futuros sem necessidade de refatoração visual.

---

## Movimento

Animações existem para orientar.

Nunca para chamar atenção.

Toda animação deve melhorar a experiência.

Jamais competir com o conteúdo.

---

# Linguagem Visual

A Autonova utiliza uma linguagem baseada em:

- superfícies escuras
- alto contraste
- tipografia forte
- espaços amplos
- poucos elementos por tela
- profundidade discreta
- animações suaves

O usuário deve sentir organização antes mesmo de ler qualquer informação.

---

# Experiência

A plataforma deve transmitir a sensação de:

"Estou utilizando uma ferramenta extremamente inteligente."

Nunca:

"Estou utilizando um sistema complicado."

---

# Regras Gerais

Toda tela deve responder às seguintes perguntas:

✔ Qual é o objetivo principal desta tela?

✔ Qual é a ação principal?

✔ Qual informação precisa chamar atenção primeiro?

✔ Existe espaço suficiente entre os elementos?

✔ Existe consistência com o restante da plataforma?

Se qualquer resposta for "não", a interface deve ser revisada.

---

# Regra da Equipe

Nenhuma decisão visual deve ser tomada baseada em preferência pessoal.

Toda alteração deve respeitar este documento.

Caso uma nova necessidade surja, primeiro este documento é atualizado.

Somente depois o código é alterado.

---

# Paleta Oficial

A Autonova utiliza uma paleta escura.

Todo novo componente deverá utilizar exclusivamente estas cores.

Nunca utilizar cores aleatórias.

---

# PARTE 1

## Background Principal

HEX

```text
#09090B
```

Uso:

- fundo da aplicação
- login
- dashboard
- páginas internas

---

## Background Secundário

HEX

```text
#111827
```

Uso:

- sidebar
- blocos
- painéis

---

## Surface

HEX

```text
#18181B
```

Uso:

- cards
- modais
- widgets

---

## Border

HEX

```text
#27272A
```

Uso:

- bordas
- divisores
- inputs

---

## Texto Principal

HEX

```text
#FFFFFF
```

Uso:

Títulos

Conteúdo principal

---

## Texto Secundário

HEX

```text
#A1A1AA
```

Uso:

Descrições

Legendas

Informações auxiliares

---

## Texto Fraco

HEX

```text
#71717A
```

Uso:

Placeholder

Informações menos importantes

---

# Cor Primária

HEX

```text
#22C55E
```

Representa:

- confirmação
- IA
- automação
- sucesso

É a cor principal da marca.

---

## Hover Primário

HEX

```text
#16A34A
```

---

## Verde Claro

HEX

```text
#4ADE80
```

Uso:

Indicadores positivos.

Nunca utilizar em botões.

---

# Erro

HEX

```text
#DC2626
```

Uso:

Mensagens de erro.

Campos inválidos.

Ações destrutivas.

---

# Aviso

HEX

```text
#F59E0B
```

Uso:

Alertas.

Confirmações intermediárias.

---

# Informação

HEX

```text
#2563EB
```

Uso:

Informações.

Links.

Avisos neutros.

---

# Glass

Opacidade

12%

Blur

24px

Nunca utilizar opacidade maior que 18%.

---

# Sombras

As sombras sempre serão discretas.

Nunca utilizar sombras extremamente escuras.

Preferir profundidade através de blur.

---

# Gradientes

A plataforma utiliza gradientes apenas em:

Landing Page

Hero Section

Elementos promocionais

Nunca utilizar gradientes em:

Botões

Inputs

Cards

Dashboard

Modais

---

# Estados

Hover

Sempre 200ms.

---

Active

Escurecer aproximadamente 8%.

---

Disabled

Opacidade 50%.

Cursor:

not-allowed

---

Loading

Nunca substituir componentes.

Sempre utilizar indicador interno.

---

# Regra

Toda nova cor deverá ser adicionada primeiro neste documento.

Somente depois poderá ser utilizada no CSS.

# PARTE 2 - Layout, Tipografia e Espaçamentoss

---

# Tipografia

A Autonova utiliza apenas duas famílias tipográficas.

Nunca utilizar outras fontes.

---

## Fonte Principal

Orbitron

Uso:

- Logo
- Títulos
- Métricas
- KPIs
- Cabeçalhos

---

## Fonte Secundária

System UI

Fallback:

- Inter
- Segoe UI
- Arial
- sans-serif

Uso:

- textos
- formulários
- tabelas
- descrições

---

# Hierarquia Tipográfica

## H1

Uso:

Título principal da página.

Exemplo:

Dashboard

Clientes

Agenda

Tamanho:

48px

Peso:

700

Line-height:

56px

---

## H2

Uso:

Título de seção.

Exemplo:

Resumo Financeiro

Últimos Agendamentos

Produtos

Tamanho:

36px

Peso:

700

Line-height:

44px

---

## H3

Uso:

Título de Cards.

Tamanho:

28px

Peso:

600

Line-height:

36px

---

## H4

Uso:

Título de Widgets.

Tamanho:

22px

Peso:

600

---

## Texto Principal

16px

Peso:

400

Line-height:

28px

---

## Texto Pequeno

14px

Peso:

400

---

## Legenda

12px

Peso:

400

Cor:

Texto Fraco

---

# Espaçamentos

Nenhum componente poderá utilizar espaçamentos arbitrários.

Toda interface utilizará apenas esta escala.

4px

8px

12px

16px

24px

32px

48px

64px

96px

128px

Nunca utilizar:

13px

17px

21px

etc.

---

# Radius

Todos os componentes utilizam radius consistente.

Input

12px

---

Botão

12px

---

Badge

10px

---

Card

20px

---

Modal

24px

---

Sidebar

24px

---

# Alturas

Input

44px

---

Botão

44px

---

Select

44px

---

Header

72px

---

Sidebar

100vh

---

# Grid

Desktop

12 colunas

---

Tablet

8 colunas

---

Mobile

4 colunas

---

# Containers

Página padrão

max-width:

1440px

---

Formulários

max-width:

480px

---

Login

max-width:

460px

---

Cadastro

max-width:

520px

---

Dashboard

width:

100%

---

# Breakpoints

Mobile

0 → 639px

---

Small Tablet

640px

---

Tablet

768px

---

Notebook

1024px

---

Desktop

1280px

---

Large Desktop

1536px

---

# Padding Global

Páginas

32px

---

Cards

24px

---

Inputs

16px

---

Modais

32px

---

# Margens

Entre Cards

24px

---

Entre Seções

48px

---

Entre Blocos Grandes

64px

---

# Responsividade

Todo componente deve ser desenvolvido Mobile First.

Nunca criar telas exclusivas para Desktop.

A interface sempre deve crescer naturalmente.

---

# Regra

Nenhum componente poderá definir tamanhos próprios.

Toda dimensão deverá seguir esta documentação.

Caso seja necessária uma nova medida, primeiro ela deve ser adicionada aqui.
