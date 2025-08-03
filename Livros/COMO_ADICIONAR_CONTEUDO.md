# Como Adicionar Livros e Manhwas ao GameHub

## Estrutura de Pastas

Para adicionar conteúdo à biblioteca, organize seus arquivos seguindo esta estrutura:

```
Livros/
├── livros/
│   ├── nome-do-livro/
│   │   ├── index.html
│   │   ├── capa.jpg
│   │   └── capitulos/
│   │       ├── capitulo-1.html
│   │       ├── capitulo-2.html
│   │       └── ...
│   └── outro-livro/
└── manhwas/
    ├── nome-do-manhwa/
    │   ├── index.html
    │   ├── capa.jpg
    │   └── capitulos/
    │       ├── capitulo-1.html
    │       ├── capitulo-2.html
    │       └── ...
    └── outro-manhwa/
```

## Criando um Livro

### 1. Crie a pasta do livro
```bash
mkdir -p Livros/livros/meu-livro/capitulos
```

### 2. Crie o arquivo index.html principal
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Livro - GameHub</title>
    <link rel="stylesheet" href="../../style.css">
</head>
<body>
    <div class="book-reader">
        <header class="book-header">
            <button onclick="window.location.href='../index.html'">← Voltar</button>
            <h1>Meu Livro</h1>
        </header>
        
        <div class="book-content">
            <div class="book-info">
                <img src="capa.jpg" alt="Capa do Livro" class="book-cover">
                <h2>Meu Livro</h2>
                <p><strong>Autor:</strong> Seu Nome</p>
                <p><strong>Gênero:</strong> Fantasia</p>
                <p><strong>Descrição:</strong> Uma história incrível sobre...</p>
            </div>
            
            <div class="chapters-list">
                <h3>Capítulos</h3>
                <ul>
                    <li><a href="capitulos/capitulo-1.html">Capítulo 1: O Início</a></li>
                    <li><a href="capitulos/capitulo-2.html">Capítulo 2: A Jornada</a></li>
                    <!-- Adicione mais capítulos aqui -->
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
```

### 3. Crie os capítulos
Cada capítulo deve ser um arquivo HTML separado na pasta `capitulos/`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capítulo 1 - Meu Livro</title>
    <link rel="stylesheet" href="../../../style.css">
</head>
<body>
    <div class="chapter-reader">
        <header class="chapter-header">
            <button onclick="window.location.href='../index.html'">← Voltar ao Livro</button>
            <h1>Capítulo 1: O Início</h1>
        </header>
        
        <div class="chapter-content">
            <p>Era uma vez, em um reino muito distante...</p>
            <p>Seu conteúdo do capítulo aqui...</p>
        </div>
        
        <div class="chapter-navigation">
            <button onclick="window.location.href='../index.html'">← Índice</button>
            <button onclick="window.location.href='capitulo-2.html'">Próximo →</button>
        </div>
    </div>
</body>
</html>
```

## Criando um Manhwa

### 1. Crie a pasta do manhwa
```bash
mkdir -p Livros/manhwas/meu-manhwa/capitulos
```

### 2. Estrutura similar aos livros
A estrutura é a mesma dos livros, mas você pode adicionar imagens nos capítulos:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capítulo 1 - Meu Manhwa</title>
    <link rel="stylesheet" href="../../../style.css">
</head>
<body>
    <div class="manhwa-reader">
        <header class="chapter-header">
            <button onclick="window.location.href='../index.html'">← Voltar ao Manhwa</button>
            <h1>Capítulo 1: O Despertar</h1>
        </header>
        
        <div class="manhwa-content">
            <img src="pagina-1.jpg" alt="Página 1" class="manhwa-page">
            <img src="pagina-2.jpg" alt="Página 2" class="manhwa-page">
            <img src="pagina-3.jpg" alt="Página 3" class="manhwa-page">
            <!-- Adicione mais páginas aqui -->
        </div>
        
        <div class="chapter-navigation">
            <button onclick="window.location.href='../index.html'">← Índice</button>
            <button onclick="window.location.href='capitulo-2.html'">Próximo →</button>
        </div>
    </div>
</body>
</html>
```

## Adicionando à Lista Principal

Para que seu conteúdo apareça na biblioteca principal, você precisa editar o arquivo `Livros/index.html` e adicionar seus dados ao array `contentData`:

```javascript
const contentData = [
    {
        id: "meu-livro",
        title: "Meu Livro",
        author: "Seu Nome",
        description: "Uma história incrível sobre...",
        type: "livro", // ou "manhwa"
        genre: "fantasia", // fantasia, aventura, romance, acao, etc.
        cover: "livros/meu-livro/capa.jpg",
        chapters: 10,
        rating: 4.5,
        folder: "meu-livro"
    },
    // Adicione mais conteúdo aqui...
];
```

## Dicas Importantes

1. **Nomes de Pastas**: Use apenas letras minúsculas, números e hífens
2. **Imagens**: Use formatos JPG ou PNG para as capas
3. **Tamanho**: Mantenha as imagens em tamanho razoável (máximo 2MB)
4. **Navegação**: Sempre inclua botões de voltar e próximo
5. **Responsivo**: Teste em dispositivos móveis

## Exemplo Completo

Veja o arquivo `exemplo-livro.html` para um exemplo funcional de como estruturar seu conteúdo.

---

**Divirta-se criando suas histórias!** 📚✨

