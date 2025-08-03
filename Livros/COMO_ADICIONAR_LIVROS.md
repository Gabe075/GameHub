# Como Adicionar Novos Livros ao GameHub

## Instruções Passo a Passo

### 1. Criar o Arquivo do Livro

1. **Copie o arquivo exemplo**: Use o arquivo `exemplo-livro.html` como base
2. **Renomeie o arquivo**: Dê um nome descritivo (ex: `meu-livro-aventura.html`)
3. **Coloque na pasta Livros**: O arquivo deve ficar em `/Livros/`

### 2. Personalizar o Conteúdo

#### Informações do Livro (no `<head>` e `.book-header`):
```html
<title>Título do Seu Livro - GameHub</title>

<h1 class="book-title">Título do Seu Livro</h1>
<p class="book-author">Por: Seu Nome</p>
```

#### Informações Adicionais:
```html
<div class="info-item">
    <i class="fas fa-book"></i>
    <span>Gênero do Livro</span>
</div>
<div class="info-item">
    <i class="fas fa-clock"></i>
    <span>Tempo estimado de leitura</span>
</div>
<div class="info-item">
    <i class="fas fa-star"></i>
    <span>Classificação etária</span>
</div>
```

### 3. Adicionar Capítulos

No JavaScript, modifique o array `chapters`:

```javascript
const chapters = [
    {
        title: "Capítulo 1: Título do Primeiro Capítulo",
        content: `
            <p>Primeiro parágrafo do capítulo...</p>
            <p>Segundo parágrafo do capítulo...</p>
            <!-- Adicione quantos parágrafos precisar -->
        `
    },
    {
        title: "Capítulo 2: Título do Segundo Capítulo",
        content: `
            <p>Conteúdo do segundo capítulo...</p>
        `
    }
    // Adicione quantos capítulos precisar
];
```

### 4. Configurar o Sistema de Progresso

Modifique a chave do localStorage para ser única:

```javascript
// Substitua 'aventura-jovem-explorador' por um identificador único do seu livro
localStorage.setItem('seu-livro-identificador-progress', currentChapter);
```

### 5. Adicionar o Livro ao Menu Principal

No arquivo `/Livros/index.html`, adicione um novo card na seção `.books-grid`:

```html
<div class="book-card" onclick="openBook('seu-livro-arquivo.html')">
    <div class="book-cover">
        <i class="fas fa-book-open"></i>
    </div>
    <div class="book-info">
        <h3>Título do Seu Livro</h3>
        <p class="book-author">Por: Seu Nome</p>
        <p class="book-genre">Gênero</p>
        <div class="book-stats">
            <span><i class="fas fa-file-alt"></i> X capítulos</span>
            <span><i class="fas fa-clock"></i> ~Xh</span>
        </div>
    </div>
</div>
```

## Dicas Importantes

### Formatação do Texto
- Use `<p>` para parágrafos
- Use `text-indent: 2rem` para parágrafos com recuo
- Para diálogos, você pode usar aspas ou formatação especial
- Para ênfase, use `<em>` ou `<strong>`

### Capítulos Especiais
- Para finais de livro, adicione: `<p style="text-align: center; font-style: italic; margin-top: 2rem; color: #FFD700;">Fim da História</p>`
- Para separadores de seção, use: `<hr style="margin: 2rem 0; border: 1px solid rgba(255,255,255,0.3);">`

### Identificadores Únicos
- Cada livro deve ter um identificador único para o localStorage
- Use nomes descritivos e sem espaços (ex: `minha-aventura-epica`)

### Testando seu Livro
1. Abra o arquivo diretamente no navegador
2. Teste a navegação entre capítulos
3. Verifique se o progresso está sendo salvo
4. Teste em dispositivos móveis

## Exemplo de Estrutura Completa

```
/Livros/
├── index.html (menu principal)
├── book.html (template de leitura)
├── exemplo-livro.html (exemplo)
├── meu-primeiro-livro.html (seu livro)
├── meu-segundo-livro.html (outro livro)
└── COMO_ADICIONAR_LIVROS.md (este arquivo)
```

## Recursos Avançados

### Adicionando Imagens
```html
<img src="caminho/para/imagem.jpg" alt="Descrição" style="width: 100%; max-width: 400px; margin: 1rem auto; display: block; border-radius: 10px;">
```

### Adicionando Efeitos Especiais
```html
<p style="text-align: center; font-size: 1.5rem; color: #FFD700; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
    Texto com destaque especial
</p>
```

### Personalizando Cores
Você pode modificar as cores no CSS para dar uma identidade única ao seu livro:

```css
/* Exemplo: tema de terror */
body {
    background: linear-gradient(135deg, #2c1810 0%, #8b0000 100%);
}

.chapter-title {
    color: #ff6b6b;
}
```

---

**Lembre-se**: Após adicionar um novo livro, teste todas as funcionalidades antes de disponibilizar para outros usuários!

