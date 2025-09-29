# 🎪 Sri Festival Site

<div align="center">
<img width="1200" height="475" alt="Sri Festival Banner" src="https://www.srifestival.com.br/_nuxt/img/sri-logo.729abab.svg" />

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

**Site oficial do Festival da Inovação - O maior evento de democratização da inovação!**

[🎯 Ver Demo](#) • [📋 Reportar Bug](https://github.com/your-repo/issues) • [💡 Sugerir Funcionalidade](https://github.com/your-repo/issues)

</div>

---

## 📋 Sobre o Projeto

O **Sri Festival Site** é a landing page oficial do Festival da Inovação, um evento gratuito de 2 dias que acontece em Cianorte - PR. O site apresenta informações completas sobre o festival, incluindo programação, palestrantes, organizadores e patrocinadores.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface responsiva e atrativa com Tailwind CSS
- ⚡ **Performance Otimizada**: Construído com Vite para carregamento rápido
- 📱 **Mobile First**: Totalmente responsivo para todos os dispositivos
- 🔧 **TypeScript**: Código type-safe e mais confiável
- 🎭 **Componentes Reutilizáveis**: Arquitetura modular com React
- 📊 **Dados Mockados**: Sistema de mock para desenvolvimento e testes

---

## 🚀 Começando

### 📋 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

### ⚙️ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/your-username/sri-festival-site.git
   cd sri-festival-site
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:5173
   ```

---

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run preview` | Preview do build de produção |

---

## 🏗️ Estrutura do Projeto

```
sri-festival-site/
├── 📁 public/                 # Arquivos públicos
├── 📁 src/                    # Código fonte
│   ├── 📁 assets/            # Imagens, fontes e mídias
│   │   ├── 📁 fonts/         # Fontes customizadas
│   │   ├── 📁 mp4/           # Vídeos
│   │   └── 📁 svg/           # Ícones SVG
│   ├── 📁 components/        # Componentes React
│   │   ├── About.tsx         # Seção sobre o evento
│   │   ├── Header.tsx        # Cabeçalho
│   │   ├── Hero.tsx          # Seção principal
│   │   ├── LineUp.tsx        # Programação
│   │   ├── Organizers.tsx    # Organizadores
│   │   └── 📁 icons/         # Componentes de ícones
│   ├── 📁 mock/              # Dados mockados
│   │   ├── lineup.ts         # Mock da programação
│   │   ├── organizers.ts     # Mock dos organizadores
│   │   └── sponsors.ts       # Mock dos patrocinadores
│   └── style.css             # Estilos globais
├── App.tsx                   # Componente principal
├── index.tsx                 # Ponto de entrada
├── package.json              # Dependências e scripts
├── tailwind.config.js        # Configuração do Tailwind
├── tsconfig.json             # Configuração do TypeScript
└── vite.config.ts            # Configuração do Vite
```

---

## 🎨 Tecnologias Utilizadas

### Frontend Core
- **[React](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool moderna e rápida

### Estilização
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário

### Utilitários
- **[date-fns](https://date-fns.org/)** - Manipulação de datas
- **[React Router DOM](https://reactrouter.com/)** - Roteamento

---

## 📊 Componentes Principais

### 🏠 **Hero Section**
- Banner principal com informações do evento
- Call-to-action para inscrições
- Vídeo/imagem de fundo dinâmica

### ℹ️ **About Section**
- Informações detalhadas sobre o festival
- Localização com link para Google Maps
- Descrição dos objetivos do evento

### 📅 **LineUp Section**
- Programação completa dos palestrantes
- Cards interativos com informações dos speakers
- Filtros por data e categoria

### 🏢 **Organizers Section**
- Informações dos organizadores
- Logos e links das instituições
- Descrições das parcerias

---

## 🔧 Configuração e Customização

### 🎨 Personalizando Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'festival-blue': '#0CE8F6',
        'festival-pink': '#E40088',
        // Adicione suas cores aqui
      }
    }
  }
}
```

### 📊 Modificando Dados
Os dados do evento estão centralizados na pasta `src/mock/`:

- **lineup.ts**: Palestrantes e programação
- **organizers.ts**: Organizadores e parceiros
- **sponsors.ts**: Patrocinadores por categoria

---

## 🤝 Como Contribuir

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra** um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato & Suporte

- 🌐 **Website**: [srifestival.com.br](#)
- 📱 **Instagram**: [@srifestival](#)

---

<div align="center">

**Feito com ❤️ para democratizar a inovação**

⭐ **Se este projeto te ajudou, deixe uma estrela!**

</div>
