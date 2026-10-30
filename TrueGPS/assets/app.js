/* =========================================================
   TrueGPS Speed – comportamento do site
   1) Atalhos   2) Línguas   3) Tema   4) Galeria e carrosseis   5) Vídeo
   ========================================================= */
(function () {

  /* ---------- 1) ATALHOS ---------- */
  var $  = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return [].slice.call(document.querySelectorAll(sel)); };

  // localStorage pode falhar (modo privado), por isso usamos try/catch
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k)    { try { return localStorage.getItem(k); } catch (e) { return null; } }


  /* ---------- 2) LÍNGUAS ----------
     As 13 da página de privacidade. O código (en, br, ...) é o que
     aparece no endereço: .../TrueGPS/#br                              */
  var LANGS = {
    en: 'English',
    pt: 'Português',
    br: 'Português (Brasil)',
    fr: 'Français',
    es: 'Español',
    de: 'Deutsch',
    it: 'Italiano',
    ru: 'Русский',
    hi: 'हिन्दी',
    id: 'Bahasa Indonesia',
    tr: 'Türkçe',
    ja: '日本語',
    ko: '한국어'
  };

  /* Traduções. A chave (nav_home, ...) liga-se ao data-i18n="..." do HTML.
     Para acrescentar uma língua: copia o bloco T.pt, muda o código
     e traduz os textos. O que faltar aparece em inglês.                */
  var T = {};

  T.pt = {
    nav_home: 'Início', nav_features: 'Funcionalidades', nav_media: 'Multimédia',
    nav_premium: 'Premium', nav_fame: 'Hall of Fame', nav_changelog: 'Novidades',
    nav_faq: 'FAQ', nav_links: 'Links', nav_download: 'Descarregar',
    hero_title: 'A tua velocidade.<br>O teu HUD.<br>À tua maneira.',
    hero_sub: 'Um velocímetro GPS profissional e HUD para Android. Não é só mais um velocímetro: tens controlo total sobre o aspeto da tua velocidade.',
    cta_play: 'Descarregar na Google Play', cta_watch: 'Ver vídeo',
    t_features: 'Funcionalidades', t_media: 'Imagens e vídeo', t_premium: 'Premium',
    t_fame: 'Hall of Fame',
    fame_lead: 'Comentários que gostaríamos de merecer. São exemplos da experiência que queremos proporcionar, não opiniões reais de utilizadores. Os reais vão substituí-los.',
    t_changelog: 'Novidades e roadmap', t_faq: 'FAQ',
    t_links: 'Apoio e produtos recomendados', t_support: 'Apoia o projeto',
    t_products: 'Produtos recomendados (afiliados)',
    affil_note: 'Links de afiliado: se comprares através deles, ganho uma pequena comissão, sem custo extra para ti. Como Associado da Amazon, obtenho receitas de compras elegíveis.',
    tag_example: 'Exemplo', tag_motto: 'Lema',
    t_fame2: 'Hall of Fame · Play Store',
    fame2_lead: 'Palavras que descrevem a TrueGPS Speed. As reviews reais da Play Store vão sendo acrescentadas aqui, com estrelas e autor.',
    video_playlist: 'Ver a playlist completa no YouTube',
    t_download: 'Descarregar', f_privacy: 'Privacidade', f_contact: 'Contacto',
    feat_title1: 'A TrueGPS', feat_body1: '<ul><li>Velocímetro GPS e HUD para vários tipos de veículos: carro, moto, bicicleta, barco, avião e outros.</li><li>Pensada para quem quer controlo total, personalização e uma aplicação em constante evolução.</li></ul>',
    feat_title2: 'Personalização total do HUD', feat_body2: '<ul><li>Cores de fundo para três intervalos de velocidade e milhares de cores à escolha.</li><li>Dezenas de tipos de letra e ajuste livre do tamanho.</li><li>Layouts HUD infinitos e totalmente configuráveis.</li></ul>',
    feat_title3: 'Perfis de veículo', feat_body3: '<ul><li>Perfis independentes por veículo.</li><li>Custos visíveis por perfil e cálculo instantâneo do custo da viagem.</li><li>Offsets de velocidade diferentes e ajuste fácil da velocidade GPS à velocidade real do velocímetro.</li></ul>',
    feat_title4: 'Dados, alertas e efeitos', feat_body4: '<ul><li>Gráficos de aceleração e aceleração lateral.</li><li>Alertas visuais e sonoros de limite de velocidade.</li><li>Efeitos gráficos dependentes da velocidade e várias unidades de medida.</li><li>Odómetro e três viagens totalmente configuráveis.</li></ul>',
    feat_title5: 'Extras que fazem a diferença', feat_body5: '<ul><li>Alterna entre todos os HUDs com um swipe rápido.</li><li>Modo ScreenSaver com frases épicas.</li><li>Exporta e importa HUDs entre amigos.</li></ul>',
    feat_title6: 'Informação à tua maneira', feat_body6: '<ul><li>Mostra ou oculta hora, viagens, velocidade máxima/média, custos, créditos, limites, GPS, bússola e muito mais.</li><li>Mostra ou oculta widgets individualmente ou todos de uma vez.</li></ul>',
    feat_title7: 'Interação rápida e inteligente', feat_body7: '<ul><li>Zonas de toque e clique longo configuráveis e visíveis.</li><li>Cria, duplica, apaga e troca HUDs com um toque ou swipe.</li><li>Inverte o HUD para o para-brisas com um swipe.</li></ul>',
    feat_title8: 'Definições avançadas do HUD', feat_body8: '<ul><li>Controla comportamento geral, tempos de ocultação automática, Safe Mode, brilho, opacidade, temas e idioma da aplicação.</li><li>Personaliza cores, fundos por intervalo de velocidade, estados, alertas, ícones e imagens.</li><li>Configura limites de velocidade, alertas visuais e sonoros e efeitos gráficos, ou desativa-os.</li><li>Configura sons de interação e alertas, ou silencia-os todos.</li><li>Modo Não Incomodar e ScreenSaver opcionais.</li></ul>',
    feat_title9: 'Créditos e Premium', feat_body9: '<ul><li>Funcionalidades avançadas disponíveis através de Premium ou créditos.</li><li>Algumas alterações críticas podem consumir créditos; podes obter créditos adicionais opcionalmente.</li><li>O custo é sempre mostrado antes da confirmação.</li></ul>',
    feat_title10: 'Controlos de clique longo', feat_body10: '<ul><li>Bloqueia HUDs para evitar alterações acidentais; os HUDs bloqueados não podem ser editados nem removidos.</li><li>É pedida confirmação explícita para bloquear ou desbloquear.</li><li>Duplica HUDs, cria novos quando permitido ou remove-os permanentemente com confirmação.</li><li>Ações críticas dão feedback visual e sonoro, conforme as definições globais de som.</li></ul>',
    feat_title11: 'Segurança e controlo do utilizador', feat_body11: '<ul><li>Ações críticas exigem confirmação explícita; nenhuma alteração irreversível é feita silenciosamente.</li><li>O utilizador mantém sempre o controlo final.</li><li>É um auxílio visual e informativo, não substitui os sistemas do veículo e depende dos sensores e permissões do dispositivo.</li><li>Recomenda-se configurar com o veículo parado. O excesso de efeitos pode causar distrações.</li></ul>',
    feat_title12: 'Nota importante', feat_body12: '<ul><li>A utilização da aplicação é da responsabilidade do utilizador.</li><li>O desenvolvedor não é responsável por multas, incidentes, acidentes, uso indevido ou alterações confirmadas voluntariamente pelo utilizador.</li><li>A aplicação fornece ferramentas, não toma decisões. Utiliza-a por tua conta e risco.</li><li>Para dúvidas, contacta o desenvolvedor por email ou pela página da aplicação na Google Play.</li></ul>',
    premium_monthly: '🟢 Premium Mensal', premium_monthly_desc: 'Ideal para experimentares todas as funcionalidades.',
    premium_yearly: '🔵 Premium Anual', premium_yearly_desc: 'Poupa dinheiro face ao plano mensal.',
    premium_lifetime: '🟠 Premium Vitalício', premium_lifetime_desc: 'Pagamento único. Tudo desbloqueado e todas as futuras funcionalidades Premium incluídas.'
  };

  // Português do Brasil: parte do pt e troca só o que é diferente
  T.br = Object.assign({}, T.pt, {
    nav_changelog: 'Novidades', nav_download: 'Baixar', t_download: 'Baixar',
    hero_title: 'Sua velocidade.<br>Seu HUD.<br>Do seu jeito.',
    hero_sub: 'Um velocímetro GPS profissional e HUD para Android. Não é só mais um velocímetro: você tem controle total sobre a aparência da sua velocidade.',
    cta_play: 'Baixar no Google Play',
    fame_lead: 'Comentários que gostaríamos de merecer. São exemplos da experiência que queremos oferecer, não avaliações reais de usuários. As reais vão substituí-los.',
    t_support: 'Apoie o projeto',
    affil_note: 'Links de afiliado: se você comprar por eles, ganho uma pequena comissão, sem custo extra. Como Associado da Amazon, obtenho receitas de compras elegíveis.',
    f_contact: 'Contato'
  });

  // Descobre a língua: #br no endereço > a guardada > a do browser > inglês
  function detectLang() {
    var h = location.hash.slice(1).toLowerCase();
    if (LANGS[h]) return h;

    var saved = load('lang');
    if (LANGS[saved]) return saved;

    var n = (navigator.language || 'en').toLowerCase();
    if (n === 'pt-br') return 'br';
    n = n.slice(0, 2);
    return LANGS[n] ? n : 'en';
  }

  // Aplica a língua a todos os elementos com data-i18n
  function setLang(l) {
    if (!LANGS[l]) l = 'en';
    sel.value = l;
    document.documentElement.lang = (l === 'br') ? 'pt-BR' : l;

    $$('[data-i18n]').forEach(function (el) {
      // guarda o texto original (inglês) na primeira vez
      if (el.dataset.en == null) el.dataset.en = el.innerHTML;
      var texto = (T[l] || {})[el.dataset.i18n];
      el.innerHTML = texto || el.dataset.en;
    });
    save('lang', l);
  }

  var sel = $('#lang');
  Object.keys(LANGS).forEach(function (code) {
    var o = document.createElement('option');
    o.value = code;
    o.textContent = LANGS[code];
    sel.appendChild(o);
  });
  sel.onchange = function () { setLang(sel.value); };
  setLang(detectLang());


  /* ---------- 3) TEMA CLARO / ESCURO (escuro por defeito) ---------- */
  var root = document.documentElement;
  root.dataset.theme = load('theme') || 'dark';

  $('#theme').onclick = function () {
    root.dataset.theme = (root.dataset.theme === 'dark') ? 'light' : 'dark';
    save('theme', root.dataset.theme);
  };


  /* ---------- 4) GALERIA DE SCREENSHOTS ----------
     Imagem grande + miniaturas. Muda com: clique na miniatura, setas,
     swipe (telemóvel), teclas ← → e autoplay lento.
     Para acrescentar um screenshot basta acrescentar um <button class="thumb">
     no HTML: o resto ajusta-se sozinho.                                      */
  function iniciarGaleria(box) {
    var principal = box.querySelector('.stage img');
    var barra     = box.querySelector('.thumbs');
    var thumbs    = [].slice.call(box.querySelectorAll('.thumb'));
    var atual     = 0;
    var timer;

    // mostra o screenshot número i (volta ao início no fim)
    function mostrar(i) {
      atual = (i + thumbs.length) % thumbs.length;
      var origem = thumbs[atual].querySelector('img');

      principal.src = origem.src;
      principal.alt = origem.alt;
      principal.classList.remove('fade');       // reinicia a animação de fade
      void principal.offsetWidth;
      principal.classList.add('fade');

      thumbs.forEach(function (t, k) { t.classList.toggle('on', k === atual); });

      // mantém a miniatura ativa centrada na barra
      var t = thumbs[atual];
      barra.scrollTo({ left: t.offsetLeft - (barra.clientWidth - t.clientWidth) / 2, behavior: 'smooth' });
    }

    function parar() { clearInterval(timer); }

    // clique manual: mostra e pára o autoplay
    function manual(i) { parar(); mostrar(i); }

    box.querySelector('.prev').onclick = function () { manual(atual - 1); };
    box.querySelector('.next').onclick = function () { manual(atual + 1); };
    thumbs.forEach(function (t, i) { t.onclick = function () { manual(i); }; });

    // swipe na imagem grande
    var x0 = null;
    principal.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; parar(); }, { passive: true });
    principal.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) mostrar(atual + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });

    // teclas ← → (quando o rato está sobre a galeria ou ela tem o foco)
    var ativa = false;
    box.addEventListener('mouseenter', function () { ativa = true; parar(); });
    box.addEventListener('mouseleave', function () { ativa = false; });
    box.addEventListener('focusin',    function () { ativa = true; parar(); });
    box.addEventListener('focusout',   function () { ativa = false; });
    document.addEventListener('keydown', function (e) {
      if (!ativa) return;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); manual(atual - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); manual(atual + 1); }
    });

    // autoplay lento (se o sistema não pedir menos animações)
    var ms = parseInt(box.dataset.autoplay, 10);
    if (ms && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = setInterval(function () { mostrar(atual + 1); }, ms);
    }

    mostrar(0);
  }
  $$('.gallery').forEach(iniciarGaleria);


  /* ---------- 4b) CARROSSEIS DE COMENTÁRIOS (Hall of Fame) ----------
     Cada <div class="carousel"> tem setas e swipe. As setas andam um cartão
     de cada vez e voltam ao início/fim quando chegam ao limite.             */
  function iniciarCarrossel(box) {
    var track = box.querySelector('.track');

    function passo() {
      var primeiro = track.children[0];
      return primeiro.getBoundingClientRect().width + 24;   // largura do cartão + espaço
    }
    function mover(dir) {
      var fim = track.scrollWidth - track.clientWidth - 4;
      if (dir > 0 && track.scrollLeft >= fim) { track.scrollTo({ left: 0, behavior: 'smooth' }); return; }
      if (dir < 0 && track.scrollLeft <= 4)   { track.scrollTo({ left: fim, behavior: 'smooth' }); return; }
      track.scrollBy({ left: dir * passo(), behavior: 'smooth' });
    }

    box.querySelector('.prev').onclick = function () { mover(-1); };
    box.querySelector('.next').onclick = function () { mover(1); };
  }
  $$('.carousel').forEach(iniciarCarrossel);

  // permite ler os comentários compridos com o teclado (Tab + setas ↑ ↓)
  $$('.track blockquote p').forEach(function (p) { p.tabIndex = 0; });


  /* ---------- 5) VÍDEO: o YouTube só carrega ao clicar ---------- */
  var video = $('#video');

  function carregarVideo() {
    var f = document.createElement('iframe');
    var src = 'https://www.youtube-nocookie.com/embed/' + video.dataset.yt + '?autoplay=1&rel=0';
    if (video.dataset.list) src += '&list=' + video.dataset.list;   // abre o vídeo dentro da playlist
    f.src = src;
    f.allow = 'autoplay; encrypted-media; picture-in-picture';
    f.allowFullscreen = true;
    f.title = 'TrueGPS Speed';
    video.innerHTML = '';
    video.appendChild(f);
    video.removeAttribute('role');
    video.removeAttribute('tabindex');
  }

  video.onclick = carregarVideo;
  video.onkeydown = function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); carregarVideo(); }
  };

})();
