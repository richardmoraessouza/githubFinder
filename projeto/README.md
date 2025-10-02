# 🔍 GitHub Finder

Uma aplicação web moderna e elegante para buscar usuários do GitHub e explorar seus repositórios mais populares. Desenvolvida com React, TypeScript e Vite, oferece uma experiência de usuário fluida e responsiva.

![GitHub Finder](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple?style=for-the-badge&logo=vite)

## ✨ Funcionalidades

- 🔍 **Busca de Usuários**: Pesquise qualquer usuário do GitHub por nome
- 👤 **Perfil Detalhado**: Visualize informações do usuário incluindo avatar, localização e estatísticas
- 📊 **Estatísticas**: Veja número de seguidores e seguindo
- 🏆 **Repositórios Top**: Explore os 5 repositórios mais populares do usuário
- 📱 **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- 🎨 **UI Moderna**: Design com gradientes, animações e efeitos visuais
- ⚡ **Performance**: Carregamento rápido com Vite e otimizações

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca para interface de usuário
- **TypeScript 5.8.3** - Tipagem estática para JavaScript
- **Vite 7.1.7** - Build tool e servidor de desenvolvimento
- **React Router DOM 7.9.3** - Roteamento para aplicações React
- **React Icons 5.5.0** - Ícones SVG populares

### Estilização
- **CSS Modules** - Estilos com escopo local
- **CSS Gradients** - Gradientes modernos e atraentes
- **CSS Animations** - Animações suaves e interativas
- **Responsive Design** - Layout adaptável para todos os dispositivos

### APIs
- **GitHub API** - Integração com a API oficial do GitHub

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/github-finder.git
   cd github-finder
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra o navegador**
   Acesse `http://localhost:5173` para visualizar a aplicação

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Cria build de produção

# Preview
npm run preview      # Visualiza o build de produção

# Linting
npm run lint         # Executa o ESLint
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── BackBtn/         # Botão de voltar
│   ├── Error/           # Componente de erro
│   ├── Loader/          # Indicador de carregamento
│   ├── Repo/            # Card de repositório
│   ├── Search/           # Campo de busca
│   └── User/            # Card de usuário
├── routes/              # Páginas da aplicação
│   └── Home/
│       ├── Home.tsx     # Página principal
│       └── Repos/       # Página de repositórios
├── types/               # Definições TypeScript
│   ├── repo.ts          # Tipos para repositórios
│   └── user.ts          # Tipos para usuários
├── App.tsx              # Componente principal
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🎨 Design System

### Cores Principais
- **Primary**: `#644aff` (Roxo vibrante)
- **Secondary**: `#4ed8c7` (Turquesa)
- **Accent**: `#ff6b6b` (Coral)
- **Background**: Gradiente escuro com tons de azul
- **Text**: Branco com diferentes opacidades

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Componentes
- **Cards**: Bordas arredondadas com sombras e efeitos de hover
- **Botões**: Gradientes com animações de hover
- **Inputs**: Campos com foco destacado e validação visual
- **Loading**: Spinner animado com efeitos visuais

## 🔧 Funcionalidades Detalhadas

### Busca de Usuários
- Campo de busca com validação em tempo real
- Busca por Enter ou clique no botão
- Feedback visual durante o carregamento
- Tratamento de erros para usuários não encontrados

### Perfil do Usuário
- Avatar com borda gradiente
- Informações básicas (nome, localização)
- Estatísticas de seguidores e seguindo
- Botão para acessar repositórios

### Repositórios
- Lista dos 5 repositórios mais populares
- Ordenação por número de estrelas
- Informações: nome, linguagem, estrelas, forks
- Link direto para o repositório no GitHub

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:

- **Desktop** (1200px+): Layout completo com múltiplas colunas
- **Tablet** (768px - 1199px): Layout adaptado com ajustes de espaçamento
- **Mobile** (até 767px): Layout em coluna única com navegação otimizada

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Conecte o repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

### GitHub Pages
1. Execute `npm run build`
2. Configure o GitHub Actions para deploy automático
3. Publique na branch `gh-pages`

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome]

## 🔗 Links Úteis

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub API Documentation](https://docs.github.com/en/rest)

## 📊 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/seu-usuario/github-finder?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/github-finder?style=social)
![GitHub issues](https://img.shields.io/github/issues/seu-usuario/github-finder)
![GitHub pull requests](https://img.shields.io/github/issues-pr/seu-usuario/github-finder)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!