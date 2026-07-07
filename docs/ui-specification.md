
# UI Specification

## Objetivo

Este documento define todas as regras visuais da Autonova.

Todo novo componente, tela ou funcionalidade deverá seguir estas especificações.

Caso seja necessário alterar algum padrão visual, este documento deverá ser atualizado antes da implementação.

---

# Identidade Visual

A Autonova transmite:

• tecnologia
• inteligência
• automação
• organização
• confiabilidade
• sofisticação

A interface deve parecer limpa, moderna e premium.

Nunca exagerada.

Nunca poluída.

---

# Paleta Oficial

Todas as cores da plataforma são definidas aqui.

Nenhum componente poderá utilizar cores diferentes sem atualização deste documento.

---

## Background Principal

Usado em:

• fundo da aplicação
• login
• dashboard
• páginas internas

HEX

```text
#09090B
```

---

## Background Secundário

Usado em:

• sidebar
• menus
• áreas secundárias

HEX

```text
#111827
```

---

## Surface

Usado em:

• card
• modais
• widgets
• containers

HEX

```text
#18181B
```

---

## Border

Usado em:

• bordas
• divisores
• inputs

HEX

```text
#27272A
```

---

## Texto Principal

Usado em:

• títulos
• KPIs
• conteúdo principal

HEX

```text
#FFFFFF
```

---

## Texto Secundário

Usado em:

• descrições
• subtítulos
• legendas

HEX

```text
#A1A1AA
```

---

## Texto Fraco

Usado em:

• placeholders
• informações auxiliares

HEX

```text
#71717A
```

---

# Cor da Marca

A cor principal representa a identidade da Autonova.

Ela deve aparecer apenas em elementos de destaque.

Nunca deve dominar a interface.

---

## Primary

Usado em:

• botão principal
• links importantes
• foco
• switches ativos

HEX

```text
#22C55E
```

---

## Primary Hover

Usado em:

• hover do botão principal
• estados ativos

HEX

```text
#16A34A
```

---

# Estados

## Success

Usado em:

• confirmações
• status positivos

HEX

```text
#22C55E
```

---

## Danger

Usado em:

• erros
• exclusões
• ações destrutivas

HEX

```text
#DC2626
```

---

## Warning

Usado em:

• alertas
• atenção

HEX

```text
#F59E0B
```

---

## Info

Usado em:

• informações
• notificaçõe
• links

HEX

```text
#2563EB
```

# Tipografia

Define a hierarquia visual da plataforma.

## Fonte Principal
Usado em: Logo, títulos, métricas
Fonte: Orbitron

## Fonte Secundária
Usado em: textos, inputs, tabelas
Fonte: System UI (fallback: Inter, Segoe UI, Arial)

## Escala
H1: 48px • 700
H2: 36px • 700
H3: 28px • 600
H4: 22px • 600
Body: 16px • 400
Small: 14px • 400
Caption: 12px • 400

---

# Espaçamentos

Todos os componentes seguem a mesma escala.

Escala oficial:
4 • 8 • 12 • 16 • 24 • 32 • 48 • 64 • 96 • 128

Nunca utilizar medidas arbitrárias.

---

# Radius

Padroniza todos os componentes.

Input: 12px
Button: 12px
Badge: 10px
Card: 20px
Modal: 24px
Sidebar: 24px

---

# Botões

Todos possuem altura fixa de 44px.

Primary
Usado em: ação principal
Background: Primary
Hover: Primary Hover

Secondary
Usado em: ações secundárias
Background: Surface
Border: Border

Danger
Usado em: excluir, remover
Background: Danger

Ghost
Usado em: links internos
Sem background

Estados
Hover: escurecer 8%
Active: escurecer novamente
Disabled: opacity 50%
Loading: spinner interno

---

# Inputs

Todos seguem o mesmo padrão.

Altura: 44px
Radius: 12px
Padding: 16px
Border: Border

Placeholder
Texto Fraco

Focus
Border: Primary

Erro
Border: Danger
Mensagem abaixo do campo

Readonly
Background Surface

---

# Select

Mesmo padrão visual do Input.

---

# Textarea

Mesmo padrão do Input.
Altura mínima: 120px
Resize: vertical

---

# Checkbox

Radius: 6px
Cor: Primary

---

# Switch

Off: Border
On: Primary
Transition: 200ms

---

# Cards

Usado em todo Dashboard.

Background: Surface
Border: Border
Radius: 20px
Padding: 24px

---

# Modais

Background: Surface
Radius: 24px
Padding: 32px
Overlay: 60%
Blur: 24px

---

# Badges

Altura: 28px
Radius: 10px
Padding: 4px 10px

Tipos:
Success
Danger
Warning
Info
Neutral

---

# Toasts

Posição: topo direito
Largura: 360px
Radius: 16px
Duração: 4 segundos
Animação: Slide + Fade

---

# Loading

Sempre utilizar Spinner SVG.
Nunca utilizar GIF.

Cor: Primary

---

# Ícones

Biblioteca oficial:
Lucide React

Tamanho padrão:
20px

Nunca misturar bibliotecas.

---

# Layout

Container padrão:
1440px

Login:
460px

Cadastro:
520px

Dashboard:
100%

Grid
Desktop: 12 colunas
Tablet: 8 colunas
Mobile: 4 colunas

Header:
72px

Sidebar:
100vh

---

# Dashboard

Toda tela administrativa deve seguir esta estrutura.

Header
Sidebar
KPIs
Cards
Gráficos
Tabelas
Filtros
Paginação
Modais

Nunca empilhar informações desnecessariamente.

---

# Formulários

Todos utilizam:

React Hook Form
Zod
Axios

Label acima do campo.
Mensagens abaixo do campo.
Focus verde.
Erro vermelho.

---

# Responsividade

Mobile First.

Breakpoints

640px
768px
1024px
1280px
1536px

---

# Animações

Duração padrão:
200ms

Curva:
ease-in-out

Nunca utilizar:
bounce
shake
flash
elastic

---

# Scrollbar

Scrollbar discreta.

Background: Surface
Thumb: Border
Hover: Primary

---

# Acessibilidade

Todos os componentes devem possuir:

Label
Focus visível
Contraste adequado
Navegação por teclado
ARIA quando necessário

---

# Convenções

Sempre reutilizar componentes.

Nunca duplicar estilos.

Nunca utilizar cores fora da paleta.

Nunca definir tamanhos arbitrários.

Sempre utilizar tokens definidos neste documento.

---

# Checklist

Antes de finalizar qualquer tela verificar:

☐ Responsivo
☐ Dark Theme
☐ Hover
☐ Focus
☐ Loading
☐ Estados de erro
☐ Componentes reutilizados
☐ Espaçamentos corretos
☐ Tipografia correta
☐ Paleta respeitada
☐ Sem estilos inline
☐ Sem cores arbitrárias