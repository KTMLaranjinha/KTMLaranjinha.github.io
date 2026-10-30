/* =========================================================
   TrueGPS Speed – comportamento do site
   1) Atalhos   2) Línguas   3) Tema   4) Carrosseis e imagem grande   5) Vídeo
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
    t_download: 'Descarregar', f_privacy: 'Privacidade', f_contact: 'Contacto'
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


  /* ---------- 4) CARROSSEIS (screenshots, Hall of Fame, ...) ----------
     Funciona para qualquer <div class="carousel"> do HTML: setas, swipe,
     bolinhas (se existir <div class="dots"> logo a seguir) e autoplay
     (se tiver data-autoplay="5000", em milissegundos).                  */
  function iniciarCarrossel(box) {
    var track  = box.querySelector('.track');
    var slides = [].slice.call(track.children).filter(function (el) { return el.nodeType === 1; });
    var dots   = box.nextElementSibling;
    if (dots && !dots.classList.contains('dots')) dots = null;
    var atual  = 0;

    // uma bolinha por slide
    if (dots) slides.forEach(function () { dots.appendChild(document.createElement('i')); });

    // posição do slide i relativamente ao track
    function centroDe(s) {
      return s.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft + s.clientWidth / 2;
    }

    // desliza até ao slide i (volta ao início no fim)
    function go(i) {
      atual = (i + slides.length) % slides.length;
      track.scrollTo({ left: centroDe(slides[atual]) - track.clientWidth / 2, behavior: 'smooth' });
    }

    // descobre qual o slide mais ao centro e destaca a bolinha
    function marcar() {
      var centro = track.scrollLeft + track.clientWidth / 2, melhor = 0, menor = 1e9;
      slides.forEach(function (s, i) {
        var d = Math.abs(centroDe(s) - centro);
        if (d < menor) { menor = d; melhor = i; }
      });
      atual = melhor;
      if (dots) [].slice.call(dots.children).forEach(function (d, i) { d.classList.toggle('on', i === melhor); });
    }

    track.addEventListener('scroll', marcar, { passive: true });
    marcar();

    box.querySelector('.prev').onclick = function () { go(atual - 1); };
    box.querySelector('.next').onclick = function () { go(atual + 1); };
    if (dots) [].slice.call(dots.children).forEach(function (d, i) { d.onclick = function () { go(i); }; });

    // Autoplay lento. Pára com rato/toque e se o sistema pede menos animações.
    var ms = parseInt(box.dataset.autoplay, 10);
    var menosMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (ms && !menosMovimento) {
      var timer = setInterval(function () { go(atual + 1); }, ms);
      ['mouseenter', 'touchstart', 'focusin'].forEach(function (ev) {
        box.addEventListener(ev, function () { clearInterval(timer); }, { passive: true });
      });
    }
  }
  $$('.carousel').forEach(iniciarCarrossel);


  /* ---------- 4b) JANELA DA IMAGEM GRANDE (lightbox) ---------- */
  var lb    = $('#lightbox');
  var lbImg = lb.querySelector('img');
  var fotos = $$('#shots img');
  var lbAtual = 0;

  function abrirFoto(i) {
    lbAtual = (i + fotos.length) % fotos.length;
    lbImg.src = fotos[lbAtual].src;
    lbImg.alt = fotos[lbAtual].alt;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';   // impede o scroll da página por trás
  }
  function fecharFoto() { lb.hidden = true; document.body.style.overflow = ''; }

  fotos.forEach(function (f, i) { f.onclick = function () { abrirFoto(i); }; });
  lb.querySelector('.lb-close').onclick = fecharFoto;
  lb.querySelector('.lb-prev').onclick  = function () { abrirFoto(lbAtual - 1); };
  lb.querySelector('.lb-next').onclick  = function () { abrirFoto(lbAtual + 1); };
  lb.onclick = function (e) { if (e.target === lb) fecharFoto(); };   // clicar no fundo fecha

  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape')     fecharFoto();
    if (e.key === 'ArrowLeft')  abrirFoto(lbAtual - 1);
    if (e.key === 'ArrowRight') abrirFoto(lbAtual + 1);
  });

  // swipe no telemóvel
  var x0 = null;
  lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) abrirFoto(lbAtual + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });


  /* ---------- 5) VÍDEO: o YouTube só carrega ao clicar ---------- */
  var video = $('#video');

  function carregarVideo() {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + video.dataset.yt + '?autoplay=1&rel=0';
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
