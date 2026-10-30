(function(){
// ⚠ Ajusta esta lista às 13 línguas da página de privacidade
var LANGS={en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch',it:'Italiano',nl:'Nederlands',pl:'Polski',ru:'Русский',tr:'Türkçe',ja:'日本語',zh:'中文',ar:'العربية'};
// Traduções: acrescenta um bloco por língua. O que faltar fica em inglês.
var T={pt:{nav_home:'Início',nav_features:'Funcionalidades',nav_media:'Multimédia',nav_premium:'Premium',nav_fame:'Hall of Fame',nav_changelog:'Novidades',nav_faq:'FAQ',nav_download:'Descarregar',
hero_title:'A tua velocidade.<br>O teu HUD.<br>À tua maneira.',hero_sub:'Um velocímetro GPS profissional e HUD para Android. Não é só mais um velocímetro: tens controlo total sobre o aspeto da tua velocidade.',
cta_play:'Descarregar na Google Play',cta_watch:'Ver vídeo',t_features:'Funcionalidades',t_media:'Imagens e vídeo',t_premium:'Premium',t_fame:'Hall of Fame',
fame_lead:'Comentários que gostaríamos de merecer. São exemplos da experiência que queremos proporcionar, não opiniões reais de utilizadores. Os reais vão substituí-los.',
t_changelog:'Novidades e roadmap',t_faq:'FAQ',t_download:'Descarregar',f_privacy:'Privacidade',f_contact:'Contacto'}};
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
function save(k,v){try{localStorage.setItem(k,v)}catch(e){}}function load(k){try{return localStorage.getItem(k)}catch(e){return null}}

// Língua: #pt na URL > guardada > browser > en (igual à página de privacidade)
var sel=$('#lang');
Object.keys(LANGS).forEach(function(c){var o=document.createElement('option');o.value=c;o.textContent=LANGS[c];sel.appendChild(o)});
function setLang(l){
  if(!LANGS[l])l='en';sel.value=l;document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';
  $$('[data-i18n]').forEach(function(e){if(e.dataset.en==null)e.dataset.en=e.innerHTML;var v=(T[l]||{})[e.dataset.i18n];e.innerHTML=v||e.dataset.en});
  save('lang',l);
}
var h=location.hash.slice(1),first=LANGS[h]?h:(load('lang')||(navigator.language||'en').slice(0,2));
setLang(first);
sel.onchange=function(){setLang(sel.value)};

// Tema (escuro por defeito)
var root=document.documentElement;
root.dataset.theme=load('theme')||'dark';
$('#theme').onclick=function(){root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';save('theme',root.dataset.theme)};

// Carrossel
var tr=$('#shots'),slides=$$('#shots .phone'),dots=$('#dots'),idx=0;
slides.forEach(function(s,i){var d=document.createElement('i');dots.appendChild(d)});
function go(i){idx=(i+slides.length)%slides.length;tr.scrollTo({left:slides[idx].offsetLeft-(tr.clientWidth-slides[idx].clientWidth)/2,behavior:'smooth'})}
function mark(){var c=tr.scrollLeft+tr.clientWidth/2,b=0,m=1e9;slides.forEach(function(s,i){var d=Math.abs(s.offsetLeft+s.clientWidth/2-c);if(d<m){m=d;b=i}});idx=b;$$('#dots i').forEach(function(d,i){d.classList.toggle('on',i===b)})}
tr.addEventListener('scroll',mark,{passive:true});mark();
$('.prev').onclick=function(){go(idx-1)};$('.next').onclick=function(){go(idx+1)};
$$('#dots i').forEach(function(d,i){d.onclick=function(){go(i)}});
var timer,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function play(){if(!reduce)timer=setInterval(function(){go(idx+1)},5000)}
['mouseenter','touchstart','focusin'].forEach(function(e){tr.parentNode.addEventListener(e,function(){clearInterval(timer)},{passive:true})});
play();

// Vídeo: o YouTube só carrega ao clicar
var v=$('#video');
function loadVid(){var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+v.dataset.yt+'?autoplay=1&rel=0';f.allow='autoplay; encrypted-media; picture-in-picture';f.allowFullscreen=true;f.title='TrueGPS Speed';v.innerHTML='';v.appendChild(f);v.removeAttribute('role');v.removeAttribute('tabindex')}
v.onclick=loadVid;v.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();loadVid()}};
})();
