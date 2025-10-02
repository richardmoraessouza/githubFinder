# 🔍 GitHub Finder

Uma aplicação web moderna para buscar e explorar perfis de usuários do GitHub e seus repositórios mais populares.

![GitHub Finder](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## 📋 Sobre o Projeto

O **GitHub Finder** é uma aplicação React que permite aos usuários buscar perfis do GitHub e visualizar informações detalhadas sobre os usuários e seus repositórios mais populares. A aplicação utiliza a API oficial do GitHub para buscar dados em tempo real.

## ✨ Funcionalidades

- 🔍 **Busca de Usuários**: Digite o nome de qualquer usuário do GitHub para encontrar seu perfil
- 👤 **Perfil Detalhado**: Visualize avatar, localização, número de seguidores e seguindo
- 📊 **Repositórios Populares**: Veja os 5 repositórios mais populares do usuário (ordenados por estrelas)
- 🎨 **Interface Moderna**: Design responsivo e intuitivo
- ⚡ **Carregamento Rápido**: Estados de loading e tratamento de erros
- 🔗 **Navegação Fluida**: Roteamento entre páginas com React Router

## 🛠️ Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca principal para interface
- **TypeScript 5.8.3** - Tipagem estática para JavaScript
- **Vite 7.1.7** - Build tool e servidor de desenvolvimento
- **React Router DOM 7.9.3** - Roteamento de páginas
- **React Icons 5.5.0** - Ícones para interface
- **Sass/SCSS** - Pré-processador CSS
- **ESLint** - Linting de código

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/github-finder.git
cd github-finder/projeto
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BackBtn/        # Botão de voltar
│   ├── Error/          # Componente de erro
│   ├── Loader/         # Componente de carregamento
│   ├── Repo/           # Card de repositório
│   ├── Search/         # Barra de busca
│   └── User/           # Card de usuário
├── routes/             # Páginas da aplicação
│   └── Home/
│       ├── Home.tsx    # Página principal
│       └── Repos/      # Página de repositórios
├── types/              # Definições TypeScript
│   ├── user.ts         # Tipos do usuário
│   └── repo.ts         # Tipos do repositório
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🔧 Funcionalidades Detalhadas

### Busca de Usuários
- Digite o nome de usuário do GitHub
- Pressione Enter ou clique no botão de busca
- Visualize informações do perfil instantaneamente

### Visualização de Perfil
- Avatar do usuário
- Nome de usuário
- Localização (se disponível)
- Contadores de seguidores e seguindo
- Link para ver repositórios

### Repositórios Populares
- Lista dos 5 repositórios mais populares
- Ordenados por número de estrelas
- Informações: nome, linguagem, estrelas e forks
- Links diretos para o GitHub

## 🎨 Design e UX

- **Responsivo**: Funciona em desktop, tablet e mobile
- **Estados de Loading**: Feedback visual durante carregamento
- **Tratamento de Erros**: Mensagens claras para usuários não encontrados
- **Navegação Intuitiva**: Botão de voltar e roteamento claro
- **Design Moderno**: Interface limpa e profissional

## 🌐 API Utilizada

A aplicação utiliza a [API oficial do GitHub](https://docs.github.com/en/rest):

- `GET /users/{username}` - Busca informações do usuário
- `GET /users/{username}/repos` - Lista repositórios do usuário

## 📱 Responsividade

O projeto foi desenvolvido com foco na responsividade, garantindo uma experiência otimizada em:

- 📱 Dispositivos móveis
- 📟 Tablets
- 💻 Desktops

## 🔮 Próximas Funcionalidades

- [ ] Histórico de buscas
- [ ] Favoritar usuários
- [ ] Busca por repositórios
- [ ] Modo escuro
- [ ] Compartilhamento de perfis
- [ ] Estatísticas detalhadas

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome]

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!