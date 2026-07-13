# COMPONENTS.md

# Catálogo Oficial de Componentes — AutoNova

---

# Objetivo

Este documento descreve todos os componentes reutilizáveis da interface do AutoNova.

Todo novo componente criado deverá seguir exatamente os padrões definidos aqui.

Antes de desenvolver qualquer componente novo, verificar se já existe um equivalente.

A reutilização é obrigatória.

---

# Estrutura

Todos os componentes ficam em:

```text
src/components
```

Organizados por responsabilidade:

```text
actions/
dashboard/
forms/
layout/
modules/
navigation/
table/
ui/
```

Cada pasta possui uma responsabilidade única.

Nunca mover componentes para outra categoria sem necessidade.

---

# Regras Gerais

Todo componente deve:

- possuir apenas uma responsabilidade;
- ser reutilizável;
- não conter chamadas HTTP;
- não conter regras de negócio;
- receber dados via props;
- possuir tipagem TypeScript;
- respeitar o UI Specification.

Nunca utilizar:

- any
- estilos inline
- cores arbitrárias
- componentes HTML quando existir equivalente próprio

---

# UI

Os componentes de UI são os componentes base do sistema.

São utilizados por toda a aplicação.

---

# Button

Arquivo

```text
components/ui/Button.tsx
```

Responsável por todas as ações.

Variantes

Primary

```tsx
<Button>
Salvar
</Button>
```

Secondary

```tsx
<Button variant="secondary">
Cancelar
</Button>
```

Danger

```tsx
<Button variant="danger">
Excluir
</Button>
```

Ghost

```tsx
<Button variant="ghost">
Detalhes
</Button>
```

Loading

```tsx
<Button loading>
Salvar
</Button>
```

Nunca utilizar

```tsx
<button>
```

---

# Input

Arquivo

```text
components/ui/Input.tsx
```

Utilizado para entradas simples.

Exemplo

```tsx
<Input
placeholder="Nome"
/>
```

Nunca utilizar

```tsx
<input>
```

---

# Textarea

Arquivo

```text
components/ui/Textarea.tsx
```

Campos multilinha.

---

# Select

Arquivo

```text
components/ui/Select.tsx
```

Sempre utilizado para listas.

---

# Checkbox

Arquivo

```text
components/ui/Checkbox.tsx
```

---

# Switch

Arquivo

```text
components/ui/Switch.tsx
```

Utilizado para ativar/desativar recursos.

---

# Label

Arquivo

```text
components/ui/Label.tsx
```

Sempre acima dos campos.

---

# Card

Arquivo

```text
components/ui/Card.tsx
```

Responsável pelos containers.

Nunca criar containers próprios.

---

# Modal

Arquivo

```text
components/ui/Modal.tsx
```

Sempre utilizado para:

- criação
- edição
- confirmação

Controle

```tsx
const [open,setOpen]=useState(false);

<Modal open={open}>

</Modal>
```

---

# Badge

Arquivo

```text
components/ui/Badge.tsx
```

Tipos

- Success
- Danger
- Warning
- Info
- Neutral

---

# StatusBadge

Arquivo

```text
components/ui/StatusBadge.tsx
```

Especializado para status.

---

# Avatar

Arquivo

```text
components/ui/Avatar.tsx
```

---

# Spinner

Arquivo

```text
components/ui/Spinner.tsx
```

Nunca utilizar GIF.

---

# Loading

Arquivo

```text
components/ui/Loading.tsx
```

Utilizado para carregamentos completos.

---

# EmptyState

Arquivo

```text
components/ui/EmptyState.tsx
```

Toda listagem deve possuir EmptyState.

---

# Pagination

Arquivo

```text
components/ui/Pagination.tsx
```

Responsável pela navegação de páginas.

---

# SearchInput

Arquivo

```text
components/ui/SearchInput.tsx
```

Utilizado em filtros.

---

# Tooltip

Arquivo

```text
components/ui/Tooltip.tsx
```

Informações auxiliares.

---

# Logo

Arquivo

```text
components/ui/Logo.tsx
```

Responsável pela identidade visual.

Nunca recriar a logo.

---

# Table

Arquivo

```text
components/ui/Table.tsx
```

Responsável por todas as tabelas.

Sempre utilizar

```tsx
<Table>

<thead/>

<tbody/>

</Table>
```

Nunca utilizar tabelas diferentes.

---

# Container

Arquivo

```text
components/ui/Container.tsx
```

Centraliza conteúdo.

---

# Layout

Responsável pela estrutura da aplicação.

---

# MainLayout

Layout principal.

Utilizado em todas as páginas autenticadas.

---

# AuthLayout

Layout das páginas públicas.

Utilizado em:

- Login
- Cadastro
- Recuperação

---

# Sidebar

Menu lateral.

Nunca alterar sua estrutura.

---

# Header

Cabeçalho principal.

---

# Topbar

Barra superior.

---

# Footer

Rodapé.

---

# Content

Área principal.

---

# Section

Organização de blocos internos.

---

# Divider

Separador visual.

---

# Breadcrumb

Navegação.

---

# PageHeader

Cabeçalho das páginas.

Exemplo

```tsx
<PageHeader

title="Empresas"

description="Gerencie empresas"

/>
```

---

# ProtectedRoute

Protege páginas autenticadas.

---

# UserMenu

Menu do usuário.

---

# Dashboard

Componentes específicos do Dashboard.

---

DashboardHero

Tela inicial.

---

MetricCard

Indicadores.

---

StatCard

Estatísticas.

---

InfoCard

Informações rápidas.

---

ChartCard

Gráficos.

---

CompanyCard

Empresa.

---

UserCard

Usuário.

---

ServiceCard

Serviço.

---

AppointmentCard

Agendamento.

---

ActivityCard

Atividades.

---

# Navigation

---

NavMenu

Menu principal.

---

NavGroup

Agrupamento.

---

NavItem

Item individual.

---

# Actions

---

PageActions

Ações da página.

Exemplo

Novo

Exportar

Importar

Filtros

---

# Table Components

---

TableHead

Cabeçalho.

---

TableRow

Linha.

---

TableCell

Célula.

---

# Forms

---

LoginForm

Responsável pelo login.

---

# Modules

Cada entidade possui exatamente quatro componentes principais.

---

Empresa

```text
EmpresaCard

EmpresaForm

EmpresaFilter

EmpresaTable
```

---

Cliente

```text
ClienteCard

ClienteForm

ClienteFilter

ClienteTable
```

---

Serviço

```text
ServicoCard

ServicoForm

ServicoFilter

ServicoTable
```

---

Usuário

```text
UsuarioCard

UsuarioForm

UsuarioFilter

UsuarioTable
```

---

Agendamento

```text
AgendamentoCard

AgendamentoForm

AgendamentoFilter

AgendamentoTable
```

---

Configuração

```text
ConfiguracaoCard

ConfiguracaoForm

ConfiguracaoFilter

ConfiguracaoTable
```

---

# Estrutura dos Modules

Card

Exibe informações resumidas.

Não contém edição.

---

Form

Responsável apenas pelo formulário.

Nunca busca dados.

Nunca faz chamadas HTTP.

---

Filter

Responsável pelos filtros.

Nunca renderiza tabelas.

---

Table

Responsável apenas pela tabela.

Não contém lógica.

Recebe dados via props.

---

# Fluxo

Sempre seguir

```text
Page

↓

Hook

↓

Service

↓

API
```

Componentes nunca chamam Services.

Modules nunca chamam API.

---

# Convenções

Todos os componentes

PascalCase

Exemplo

```text
EmpresaCard

ClienteTable

MetricCard

UserMenu
```

---

# Responsabilidades

Cada componente possui apenas uma responsabilidade.

Nunca criar componentes gigantes.

Sempre dividir.

---

# Estilos

Todos os componentes seguem

UI Specification

Nunca definir:

cores

fontes

radius

espaçamentos

manualmente.

---

# Responsividade

Todo componente deve funcionar em:

Desktop

Tablet

Mobile

---

# Performance

Os componentes devem ser desenvolvidos priorizando simplicidade.

Não utilizar otimizações prematuramente.

Utilize:

- React.memo() apenas quando houver renderizações desnecessárias comprovadas.
- useMemo() apenas para cálculos pesados ou listas derivadas.
- useCallback() apenas quando necessário para evitar recriação de funções passadas como props.

Evite:

- React.memo() em todos os componentes.
- useMemo() para valores simples.
- useCallback() sem necessidade.

A prioridade é:

1. Código legível.
2. Componentes reutilizáveis.
3. Boa arquitetura.
4. Otimização somente quando realmente necessária.

---

# Checklist

Antes de criar componente novo

☐ Existe equivalente?

☐ Posso reutilizar?

☐ Está seguindo UI Specification?

☐ Está tipado?

☐ Não possui lógica?

☐ Não chama API?

☐ Está responsivo?

☐ Está documentado?

Se qualquer resposta for negativa, revisar antes de implementar.