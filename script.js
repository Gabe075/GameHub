const jogos = [
    // Jogos originais modernizados
    {
        nome: "Jogo da Memória",
        pasta: "jogo-da-memoria",
        categoria: "puzzle",
        icone: "fas fa-brain",
        dificuldade: 2,
        descricao: "Teste sua memória encontrando pares de cartas iguais. Um clássico jogo que exercita a mente e melhora a concentração."
    },
    {
        nome: "Quebra Cabeça",
        pasta: "quebra-cabeca",
        categoria: "puzzle",
        icone: "fas fa-puzzle-piece",
        dificuldade: 3,
        descricao: "Monte a imagem movendo as peças para os lugares corretos. Desafie sua lógica e paciência neste puzzle clássico."
    },
    {
        nome: "Quebra Cabeça de Imagem",
        pasta: "quebra-cabeca-t",
        categoria: "puzzle",
        icone: "fas fa-image",
        dificuldade: 3,
        descricao: "Monte quebra-cabeças com imagens reais. Arraste as peças para formar a imagem completa."
    },
    {
        nome: "Damas",
        pasta: "damas",
        categoria: "strategy",
        icone: "fas fa-chess-board",
        dificuldade: 4,
        descricao: "Jogo de estratégia clássico onde você deve capturar todas as peças do adversário. Planeje seus movimentos com cuidado."
    },
    {
        nome: "Forca",
        pasta: "forca",
        categoria: "puzzle",
        icone: "fas fa-spell-check",
        dificuldade: 2,
        descricao: "Adivinhe a palavra secreta antes que o desenho seja completado. Teste seu vocabulário e conhecimento."
    },
    {
        nome: "Jogo da Velha",
        pasta: "jogo-da-velha",
        categoria: "strategy",
        icone: "fas fa-times",
        dificuldade: 1,
        descricao: "O clássico jogo de X e O. Seja o primeiro a formar uma linha de três símbolos iguais para vencer."
    },
    {
        nome: "Palavras Cruzadas",
        pasta: "palavras-cruzadas",
        categoria: "puzzle",
        icone: "fas fa-th",
        dificuldade: 4,
        descricao: "Complete as palavras cruzadas usando as dicas fornecidas. Expanda seu vocabulário e conhecimento geral."
    },
    {
        nome: "Caça Palavras",
        pasta: "caca-palavras",
        categoria: "puzzle",
        icone: "fas fa-search",
        dificuldade: 2,
        descricao: "Encontre palavras escondidas em uma grade de letras. Procure em todas as direções para descobrir todas as palavras."
    },
    {
        nome: "Campo Minado",
        pasta: "campo-minado",
        categoria: "strategy",
        icone: "fas fa-bomb",
        dificuldade: 3,
        descricao: "Descubra todas as células sem explodir as minas. Use a lógica e os números para navegar com segurança."
    },
    {
        nome: "Batalha Naval",
        pasta: "batalha-naval",
        categoria: "strategy",
        icone: "fas fa-ship",
        dificuldade: 3,
        descricao: "Afunde a frota inimiga antes que afundem a sua. Estratégia e sorte se combinam neste jogo naval clássico."
    },
    {
        nome: "Jogo da Cobra",
        pasta: "snake",
        categoria: "arcade",
        icone: "fas fa-snake",
        dificuldade: 2,
        descricao: "Controle a cobra para comer frutas e crescer, mas cuidado para não bater nas paredes ou em si mesma."
    },
    {
        nome: "Pong",
        pasta: "pong",
        categoria: "arcade",
        icone: "fas fa-table-tennis",
        dificuldade: 2,
        descricao: "O primeiro videogame da história! Controle a raquete e não deixe a bola passar. Reflexos rápidos são essenciais."
    },
    {
        nome: "Tetris",
        pasta: "tetris",
        categoria: "puzzle",
        icone: "fas fa-cubes",
        dificuldade: 3,
        descricao: "Encaixe as peças que caem para formar linhas completas. Um dos jogos mais viciantes já criados."
    },
    {
        nome: "Flappy Bird",
        pasta: "flappy-bird",
        categoria: "arcade",
        icone: "fas fa-dove",
        dificuldade: 4,
        descricao: "Ajude o pássaro a voar através dos obstáculos. Timing perfeito é essencial neste desafio frustrante e viciante."
    },
    {
        nome: "Pac-Man",
        pasta: "pac-man",
        categoria: "arcade",
        icone: "fas fa-circle",
        dificuldade: 3,
        descricao: "Colete todos os pontos enquanto foge dos fantasmas. Um clássico dos arcades que nunca sai de moda."
    },
    {
        nome: "Space Invaders",
        pasta: "space-invaders",
        categoria: "arcade",
        icone: "fas fa-rocket",
        dificuldade: 3,
        descricao: "Defenda a Terra dos invasores espaciais. Atire nos alienígenas antes que eles cheguem até você."
    },
    {
        nome: "Sudoku",
        pasta: "sudoku",
        categoria: "puzzle",
        icone: "fas fa-th-large",
        dificuldade: 4,
        descricao: "Complete a grade 9x9 com números de 1 a 9. Cada linha, coluna e quadrado deve ter todos os números."
    },
    {
        nome: "Simon Says",
        pasta: "simon-says",
        categoria: "memory",
        icone: "fas fa-lightbulb",
        dificuldade: 3,
        descricao: "Memorize e repita a sequência de cores e sons. Teste sua memória e concentração neste jogo clássico."
    },
    {
        nome: "2048",
        pasta: "2048",
        categoria: "puzzle",
        icone: "fas fa-calculator",
        dificuldade: 3,
        descricao: "Combine números iguais para chegar ao 2048. Um puzzle matemático viciante e desafiador."
    },
    {
        nome: "Acerte a Toupeira",
        pasta: "acertei-a-toupeira",
        categoria: "arcade",
        icone: "fas fa-hammer",
        dificuldade: 2,
        descricao: "Acerte as toupeiras que aparecem nos buracos. Teste seus reflexos neste jogo divertido e rápido."
    },
    {
        nome: "Breakout Arkanoid",
        pasta: "breakout-arkanoid",
        categoria: "arcade",
        icone: "fas fa-square",
        dificuldade: 3,
        descricao: "Destrua todos os blocos com a bola. Controle a raquete e não deixe a bola cair."
    },
    {
        nome: "Arkanoid Advanced",
        pasta: "arkanoid-advanced",
        categoria: "arcade",
        icone: "fas fa-th-large",
        dificuldade: 4,
        descricao: "Versão avançada do clássico Arkanoid com power-ups e níveis desafiadores."
    },
    {
        nome: "Combinar 3 Emojis",
        pasta: "combinar-3-emojis",
        categoria: "puzzle",
        icone: "fas fa-smile",
        dificuldade: 2,
        descricao: "Combine três ou mais emojis iguais para eliminá-los. Um jogo colorido e divertido para todas as idades."
    },
    
    // Novos jogos adicionados
    {
        nome: "Corrida Infinita",
        pasta: "corrida-infinita",
        categoria: "arcade",
        icone: "fas fa-running",
        dificuldade: 3,
        descricao: "Corra o máximo que puder desviando de obstáculos e coletando moedas. Teste seus reflexos nesta corrida sem fim!"
    },
    {
        nome: "Quiz de Conhecimentos",
        pasta: "quiz-conhecimentos",
        categoria: "educational",
        icone: "fas fa-question-circle",
        dificuldade: 2,
        descricao: "Teste seus conhecimentos gerais com perguntas sobre diversos temas. Aprenda enquanto se diverte!"
    },
    {
        nome: "Piano Virtual",
        pasta: "piano-virtual",
        categoria: "music",
        icone: "fas fa-music",
        dificuldade: 1,
        descricao: "Toque piano virtual com sons realistas. Aprenda músicas ou crie suas próprias melodias!"
    },
    {
        nome: "Labirinto",
        pasta: "labirinto",
        categoria: "puzzle",
        icone: "fas fa-map",
        dificuldade: 3,
        descricao: "Encontre a saída do labirinto navegando pelos corredores. Cada nível é um novo desafio!"
    },
    {
        nome: "Jogo de Cores",
        pasta: "jogo-cores",
        categoria: "arcade",
        icone: "fas fa-palette",
        dificuldade: 2,
        descricao: "Teste sua percepção de cores e reflexos. Identifique rapidamente as cores corretas!"
    },
    {
        nome: "Calculadora Mental",
        pasta: "calculadora-mental",
        categoria: "educational",
        icone: "fas fa-calculator",
        dificuldade: 3,
        descricao: "Treine sua matemática mental com operações rápidas. Melhore suas habilidades de cálculo!"
    },
    {
        nome: "Desenho Livre",
        pasta: "desenho-livre",
        categoria: "creative",
        icone: "fas fa-paint-brush",
        dificuldade: 1,
        descricao: "Solte sua criatividade desenhando livremente. Use diferentes cores e pincéis para criar arte!"
    },
    {
        nome: "Torre de Hanói",
        pasta: "torre-hanoi",
        categoria: "puzzle",
        icone: "fas fa-layer-group",
        dificuldade: 4,
        descricao: "Resolva o clássico puzzle da Torre de Hanói. Mova todos os discos seguindo as regras!"
    },
    {
        nome: "Jogo de Reflexos",
        pasta: "jogo-reflexos",
        categoria: "arcade",
        icone: "fas fa-stopwatch",
        dificuldade: 2,
        descricao: "Teste a velocidade dos seus reflexos. Clique o mais rápido possível quando a cor mudar!"
    },
    {
        nome: "Palavra Secreta",
        pasta: "palavra-secreta",
        categoria: "puzzle",
        icone: "fas fa-key",
        dificuldade: 3,
        descricao: "Descubra a palavra secreta usando as dicas. Um jogo de dedução e vocabulário!"
    },
    {
        nome: "Clicker de Cookies",
        pasta: "clicker-cookies",
        categoria: "idle",
        icone: "fas fa-cookie-bite",
        dificuldade: 1,
        descricao: "Clique para fazer cookies e compre melhorias. Um jogo viciante de cliques infinitos!"
    },
    {
        nome: "Jogo de Matemática",
        pasta: "jogo-matematica",
        categoria: "educational",
        icone: "fas fa-square-root-alt",
        dificuldade: 3,
        descricao: "Resolva problemas matemáticos contra o tempo. Aprimore suas habilidades em matemática!"
    }
];

// Categorias de jogos
const categorias = {
    all: { nome: "Todos", icone: "fas fa-th" },
    puzzle: { nome: "Puzzle", icone: "fas fa-puzzle-piece" },
    arcade: { nome: "Arcade", icone: "fas fa-gamepad" },
    strategy: { nome: "Estratégia", icone: "fas fa-chess" },
    memory: { nome: "Memória", icone: "fas fa-brain" },
    educational: { nome: "Educativo", icone: "fas fa-graduation-cap" },
    music: { nome: "Música", icone: "fas fa-music" },
    creative: { nome: "Criativo", icone: "fas fa-paint-brush" },
    idle: { nome: "Idle", icone: "fas fa-mouse-pointer" }
};

// Variáveis globais
let jogosFiltrados = [...jogos];
let categoriaAtual = 'all';
let termoBusca = '';
let mobileMenuOpen = false;

// Estatísticas
const stats = {
    totalJogos: jogos.length,
    totalLivros: 1, // Será atualizado dinamicamente
    tempoJogo: parseInt(localStorage.getItem('tempoTotalJogo')) || 0,
    jogosJogados: JSON.parse(localStorage.getItem('jogosJogados')) || []
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    inicializarSite();
    atualizarEstatisticas();
    carregarJogos();
    configurarEventListeners();
});

function inicializarSite() {
    // Configurar menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Configurar navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });
}

function configurarEventListeners() {
    // Filtros de categoria
    const filtros = document.querySelectorAll('.filter-btn');
    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            const categoria = filtro.dataset.category;
            filtrarPorCategoria(categoria);
            atualizarFiltroAtivo(filtro);
        });
    });
    
    // Busca
    const campoBusca = document.getElementById('gameSearch');
    if (campoBusca) {
        campoBusca.addEventListener('input', (e) => {
            termoBusca = e.target.value.toLowerCase();
            filtrarJogos();
        });
    }
    
    // Fechar menu mobile ao clicar fora
    document.addEventListener('click', (e) => {
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (mobileMenuOpen && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function carregarJogos() {
    const container = document.getElementById('games-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (jogosFiltrados.length === 0) {
        container.innerHTML = `
            <div class="no-games">
                <i class="fas fa-search"></i>
                <h3>Nenhum jogo encontrado</h3>
                <p>Tente ajustar os filtros ou termo de busca</p>
            </div>
        `;
        return;
    }
    
    jogosFiltrados.forEach(jogo => {
        const jogoCard = criarCardJogo(jogo);
        container.appendChild(jogoCard);
    });
}

function criarCardJogo(jogo) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('data-category', jogo.categoria);
    
    const estrelas = '★'.repeat(jogo.dificuldade) + '☆'.repeat(5 - jogo.dificuldade);
    
    card.innerHTML = `
        <div class="game-icon">
            <i class="${jogo.icone}"></i>
        </div>
        <div class="game-info">
            <h3 class="game-title">${jogo.nome}</h3>
            <p class="game-description">${jogo.descricao}</p>
            <div class="game-meta">
                <span class="game-category">
                    <i class="${categorias[jogo.categoria]?.icone || 'fas fa-tag'}"></i>
                    ${categorias[jogo.categoria]?.nome || jogo.categoria}
                </span>
                <span class="game-difficulty" title="Dificuldade: ${jogo.dificuldade}/5">
                    ${estrelas}
                </span>
            </div>
        </div>
        <button class="play-btn" onclick="abrirJogo('${jogo.pasta}', '${jogo.nome}')">
            <i class="fas fa-play"></i>
            Jogar
        </button>
    `;
    
    return card;
}

function filtrarPorCategoria(categoria) {
    categoriaAtual = categoria;
    filtrarJogos();
}

function filtrarJogos() {
    jogosFiltrados = jogos.filter(jogo => {
        const matchCategoria = categoriaAtual === 'all' || jogo.categoria === categoriaAtual;
        const matchBusca = termoBusca === '' || 
                          jogo.nome.toLowerCase().includes(termoBusca) ||
                          jogo.descricao.toLowerCase().includes(termoBusca);
        
        return matchCategoria && matchBusca;
    });
    
    carregarJogos();
    atualizarContadorJogos();
}

function atualizarFiltroAtivo(filtroAtivo) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    filtroAtivo.classList.add('active');
}

function atualizarContadorJogos() {
    const contador = document.querySelector('.games-count');
    if (contador) {
        contador.textContent = `${jogosFiltrados.length} jogos encontrados`;
    }
}

function abrirJogo(pasta, nome) {
    // Registrar que o jogo foi jogado
    if (!stats.jogosJogados.includes(pasta)) {
        stats.jogosJogados.push(pasta);
        localStorage.setItem('jogosJogados', JSON.stringify(stats.jogosJogados));
    }
    
    // Abrir o jogo
    window.open(`Jogos/${pasta}/index.html`, '_blank');
    
    // Atualizar estatísticas
    atualizarEstatisticas();
}

function atualizarEstatisticas() {
    // Atualizar contadores na página
    const elementos = {
        totalGames: document.getElementById('totalGames'),
        totalBooks: document.getElementById('totalBooks'),
        gamesPlayed: document.getElementById('gamesPlayed'),
        totalTime: document.getElementById('totalTime'),
        footerGames: document.getElementById('footerGames'),
        footerBooks: document.getElementById('footerBooks')
    };
    
    if (elementos.totalGames) elementos.totalGames.textContent = stats.totalJogos;
    if (elementos.totalBooks) elementos.totalBooks.textContent = stats.totalLivros;
    if (elementos.gamesPlayed) elementos.gamesPlayed.textContent = stats.jogosJogados.length;
    if (elementos.totalTime) elementos.totalTime.textContent = formatarTempo(stats.tempoJogo);
    if (elementos.footerGames) elementos.footerGames.textContent = stats.totalJogos;
    if (elementos.footerBooks) elementos.footerBooks.textContent = stats.totalLivros;
}

function formatarTempo(minutos) {
    if (minutos < 60) return `${minutos}min`;
    const horas = Math.floor(minutos / 60);
    const mins = minutos % 60;
    return `${horas}h ${mins}min`;
}

function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.mobile-menu-toggle i');
    
    mobileMenu.classList.toggle('active', mobileMenuOpen);
    icon.className = mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars';
}

function closeMobileMenu() {
    mobileMenuOpen = false;
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.mobile-menu-toggle i');
    
    mobileMenu.classList.remove('active');
    icon.className = 'fas fa-bars';
}

// Função para scroll suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    closeMobileMenu();
}


// Função para mostrar seções
function showSection(sectionId) {
    // Esconder todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar a seção desejada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Atualizar navegação ativa
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.querySelectorAll(`[data-section="${sectionId}"]`).forEach(link => {
        link.classList.add('active');
    });
    
    closeMobileMenu();
}

// Função para scroll para estatísticas
function scrollToStats() {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        statsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para fechar modal de jogo
function closeGameModal() {
    const modal = document.getElementById('gameModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

