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
    en: '🇬🇧 English',
    pt: '🇵🇹 Português (Portugal)',
    br: '🇧🇷 Português (Brasil)',
    fr: '🇫🇷 Français',
    es: '🇪🇸 Español',
    de: '🇩🇪 Deutsch',
    it: '🇮🇹 Italiano',
    ru: '🇷🇺 Russo Русский',
    tr: '🇹🇷 Türkçe',
    id: '🇮🇩 Bahasa Indonesia',
    hi: '🇮🇳 हिन्दी (Hindi)',
    ja: '🇯🇵 Japonês 日本語',
    ko: '🇰🇷 Coreano 한국어'
  };

  /* Traduções. A chave (nav_home, ...) liga-se ao data-i18n="..." do HTML.
     Para acrescentar uma língua: copia o bloco T.pt, muda o código
     e traduz os textos. O que faltar aparece em inglês.                */
  var T = {};

  T.pt = {
    nav_home: 'Início', nav_about: 'TrueGPS: O que é?', nav_action: 'TrueGPS em Ação', nav_huds: 'HUDs', nav_features2: 'Funcionalidades', nav_features_detail: 'Em Detalhe', nav_playstore: 'Imagens Playstore',
    nav_premium: 'Subscri\u00e7\u00e3o', nav_fame: 'Hall of Fame', nav_changelog: 'Novidades',
    nav_faq: 'FAQ', nav_links: 'Links', nav_download: 'Descarregar',
    hero_title: 'A tua velocidade.<br>O teu HUD.<br>À tua maneira.',
    hero_sub: 'Um velocímetro GPS profissional e HUD para Android. Não é só mais um velocímetro: tens controlo total sobre o aspeto da tua velocidade.',
    cta_play: 'Descarregar na Google Play', cta_watch: 'Ver vídeo',
    t_about: 'TrueGPS: O que é?', t_action: 'TrueGPS em Ação', t_huds: 'HUDs', t_features2: 'Funcionalidades', t_features_detail: 'Funcionalidades em Detalhe', t_playstore: 'Imagens Playstore', t_premium: 'Subscri\u00e7\u00e3o e Premium',
    t_fame: 'Hall of Fame',
    fame_lead: 'Comentários que gostaríamos de merecer. São exemplos da experiência que queremos proporcionar, não opiniões reais de utilizadores. Os reais vão substituí-los.',
    t_changelog: 'Novidades e Roadmap', t_faq: 'FAQ',
    t_links: 'Apoio e produtos recomendados', t_support: 'Apoio ao Projeto',
    t_products: 'Produtos Recomendados (Afiliados)',
    affil_note: 'Links de afiliado: se comprares através deles, ganho uma pequena comissão, sem custo extra para ti. Como Associado da Amazon, obtenho receitas de compras elegíveis.',
    tag_example: 'Exemplo', tag_motto: 'Lema',
    t_fame2: 'Hall of Fame · Play Store',
    fame2_lead: 'Palavras que descrevem a TrueGPS Speed. As reviews reais da Play Store vão sendo acrescentadas aqui, com estrelas e autor.',
    video_playlist: 'Ver a playlist completa no YouTube', copy_video_url: 'Copiar link do vídeo', copy_video_success: 'Link do vídeo copiado.', copy_video_failed: 'Não foi possível copiar. Abre o vídeo no YouTube.', copy_video_prompt: 'Copia o endereço apresentado para abrir o vídeo.',
    t_download: 'Descarregar', f_privacy: 'Pol\u00edtica de Privacidade', f_contact: 'Entrar em contacto',
    premium_free: '⚪ Gratuito', premium_free_desc: 'Velocímetro e HUD essenciais, com anúncios.',
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
    t_support: 'Apoio ao Projeto',
    affil_note: 'Links de afiliado: se você comprar por eles, ganho uma pequena comissão, sem custo extra. Como Associado da Amazon, obtenho receitas de compras elegíveis.',
    f_contact: 'Entrar em contacto'
  });

  var EXTRA_T = {
    en:{copy_video_url:'Copy video link',copy_video_success:'Video link copied.',copy_video_failed:'Could not copy. Open the video on YouTube.',copy_video_prompt:'Copy the URL shown to open the video.',nav_terms:'Terms of Service',nav_support:'Project Support',nav_products:'Recommended Products',nav_premium:'Subscription',f_privacy:'Privacy Policy',t_video_label:'Video',t_images_label:'Images',t_huds_display:'HUD - Head Up Display',t_huds_subtitle:'Use your imagination. Build HUDs your way!'},
    pt:{copy_video_url:'Copiar link do vídeo',copy_video_success:'Link do vídeo copiado.',copy_video_failed:'Não foi possível copiar. Abre o vídeo no YouTube.',copy_video_prompt:'Copia o endereço apresentado para abrir o vídeo.',nav_terms:'Termos de Serviço',nav_support:'Apoio ao Projeto',nav_products:'Produtos Recomendados',nav_premium:'Subscri\u00e7\u00e3o',f_privacy:'Pol\u00edtica de Privacidade',t_video_label:'Vídeo',t_images_label:'Imagens',t_huds_display:'HUD - Head Up Display',t_huds_subtitle:'Usa a tua imaginação. Constrói HUDs a teu gosto!'},
    br:{copy_video_url:'Copiar link do vídeo',copy_video_success:'Link do vídeo copiado.',copy_video_failed:'Não foi possível copiar. Abre o vídeo no YouTube.',copy_video_prompt:'Copia o endereço apresentado para abrir o vídeo.',nav_terms:'Termos de Serviço',nav_support:'Apoio ao Projeto',nav_products:'Produtos Recomendados',nav_premium:'Subscri\u00e7\u00e3o',f_privacy:'Pol\u00edtica de Privacidade',t_video_label:'Vídeo',t_images_label:'Imagens',t_huds_display:'HUD - Head Up Display',t_huds_subtitle:'Use a sua imaginação. Crie HUDs do seu jeito!'},
    fr:{nav_terms:'Conditions d’utilisation',nav_support:'Soutien au projet',nav_products:'Produits recommandés',nav_premium:'Abonnement',f_privacy:'Politique de confidentialité',t_video_label:'Vidéo',t_images_label:'Images',t_huds_display:'HUD (affichage tête haute)',t_huds_subtitle:'Laissez libre cours à votre imagination. Créez vos HUDs à votre façon !'},
    es:{nav_terms:'Términos del servicio',nav_support:'Apoyo al proyecto',nav_products:'Productos recomendados',nav_premium:'Suscripción',f_privacy:'Política de privacidad',t_video_label:'Vídeo',t_images_label:'Imágenes',t_huds_display:'HUD (pantalla frontal)',t_huds_subtitle:'Usa tu imaginación. ¡Crea HUDs a tu manera!'},
    de:{nav_terms:'Nutzungsbedingungen',nav_support:'Projekt unterstützen',nav_products:'Empfohlene Produkte',nav_premium:'Abonnement',f_privacy:'Datenschutzerklärung',t_video_label:'Video',t_images_label:'Bilder',t_huds_display:'HUD (Head-up-Display)',t_huds_subtitle:'Lass deiner Fantasie freien Lauf. Gestalte HUDs nach deinem Geschmack!'},
    it:{nav_terms:'Termini di servizio',nav_support:'Supporto al progetto',nav_products:'Prodotti consigliati',nav_premium:'Abbonamento',f_privacy:'Informativa sulla privacy',t_video_label:'Video',t_images_label:'Immagini',t_huds_display:'HUD (Head-up Display)',t_huds_subtitle:'Dai spazio alla fantasia. Crea HUD secondo il tuo stile!'},
    ru:{nav_terms:'Условия использования',nav_support:'Поддержка',nav_products:'Рекомендуемые товары',nav_premium:'Подписка',f_privacy:'Политика конфиденциальности',t_video_label:'Видео',t_images_label:'Изображения',t_huds_display:'HUD (проекционный дисплей)',t_huds_subtitle:'Дайте волю воображению. Создавайте HUD по своему вкусу!'},
    hi:{nav_terms:'सेवा की शर्तें',nav_support:'सहायता',nav_products:'Рекомендуемые продукты',nav_premium:'सदस्यство',f_privacy:'गोपनीयता नीति',t_video_label:'वीडियो',t_images_label:'छवियाँ',t_huds_display:'HUD (हेड-अप डिस्प्ले)',t_huds_subtitle:'अपनी कल्पना का उपयोग करें। अपने पसंद के HUD बनाएँ!'},
    id:{nav_terms:'Ketentuan Layanan',nav_support:'Dukungan',nav_products:'Produk Rekomendasi',nav_premium:'Langganan',f_privacy:'Kebijakan Privasi',t_video_label:'Video',t_images_label:'Gambar',t_huds_display:'HUD (Head-Up Display)',t_huds_subtitle:'Gunakan imajinasimu. Buat HUD sesuai gayamu!'},
    tr:{nav_terms:'Hizmet Şartları',nav_support:'Destek',nav_products:'Önerilen Ürünler',nav_premium:'Abonelik',f_privacy:'Gizlilik Politikası',t_video_label:'Video',t_images_label:'Görseller',t_huds_display:'HUD (Head-Up Display)',t_huds_subtitle:'Hayal gücünü kullan. Tarzına uygun HUD’lar oluştur!'},
    ja:{nav_terms:'利用規約',nav_support:'サポート',nav_products:'おすすめ商品',nav_premium:'サブスクリプション',f_privacy:'プライバシーポリシー',t_video_label:'動画',t_images_label:'画像',t_huds_display:'HUD（ヘッドアップディスプレイ）',t_huds_subtitle:'想像力を活かして、自分好みのHUDを作りましょう。'},
    ko:{nav_terms:'서비스 약관',nav_support:'후원',nav_products:'추천 제품',nav_premium:'구독',f_privacy:'개인정보 처리방침',t_video_label:'동영상',t_images_label:'이미지',t_huds_display:'HUD(헤드업 디스플레이)',t_huds_subtitle:'상상력을 발휘해 원하는 HUD를 만들어 보세요!'}
  };
  var REQUESTED_T = {
 en:{
  t_fame_desired:"Hall of Fame we hope for!",fame2_lead_updated:"Your Play Store review could be featured here soon.",fame2_placeholder:"Your review can be here!<br>Updated soon.",roadmap_title:"Roadmap",
  roadmap_items:"<li class=\"done\">Speedometer</li><li class=\"done\">Widgets</li><li class=\"done\">Premium</li><li class=\"done\">Themes</li><li>User requests</li><li>Trips and costs</li><li>App Store - iOS</li><li>OBD readings</li><li>Navigation instructions</li><li>New sounds</li><li>New fonts</li><li>New effects</li><li>Maps, radar alerts, Android Auto, and more</li>",
  quick_manual_title:"Quick manual",
  quick_manual_content:"<ol><li>Swipe to switch HUDs.</li><li>Open Settings using one of these methods:<ol><li>Long-press the clock in the upper-left corner.</li><li>Long-press the screen and select Open Settings.</li><li>Tap the Settings button beside the clock.</li></ol></li><li>Explore the options in each Settings tab. There are many!</li><li>A Premium subscription unlocks features as they are released.</li><li>In the Free version, spend credits to unlock paid features. Earn +5 credits by watching complete videos.</li><li>Long-press the screen for HUD options such as duplicate, delete, and export.</li></ol>"
 },
 pt:{
  t_fame_desired:"Hall of Fame que desejamos!",fame2_lead_updated:"Em breve, a tua avaliação da Play Store poderá aparecer aqui.",fame2_placeholder:"O teu comentário pode ficar aqui!<br>Atualizado brevemente.",roadmap_title:"Roadmap",
  roadmap_items:"<li class=\"done\">Velocímetro</li><li class=\"done\">Widgets</li><li class=\"done\">Premium</li><li class=\"done\">Temas</li><li>Pedidos de Utilizadores</li><li>Viagens e Custos</li><li>App Store - iOS</li><li>Leituras OBD</li><li>Instruções de Navegação</li><li>Novos Sons</li><li>Novas Fontes</li><li>Novos Efeitos</li><li>Mapas, alertas de radar, Android Auto e mais</li>",
  quick_manual_title:"Manual Rápido",
  quick_manual_content:"<ol><li>Podes fazer swipe para trocar de HUDs.</li><li>Acede à Configuração através de uma destas formas:<ol><li>Long-press no relógio do canto superior esquerdo.</li><li>Long-press no ecrã e escolhe Abrir Definições.</li><li>Clica no botão Settings ao lado do relógio.</li></ol></li><li>Na Configuração, explora as opções nos diversos separadores. E são muitas!</li><li>Se tens Subscrição Premium, vais desbloqueando todas as opções.</li><li>Se tens a versão Free, gasta créditos para desbloquear as funções pagas. Ganhas +5 créditos ao veres vídeos completos.</li><li>Com um long-press no ecrã tens opções de HUD, como replicar, apagar e exportar.</li></ol>"
 },
 br:{
  t_fame_desired:"Hall of Fame que queremos!",fame2_lead_updated:"Em breve, sua avaliação na Play Store poderá aparecer aqui.",fame2_placeholder:"Seu comentário pode ficar aqui!<br>Atualizado em breve.",roadmap_title:"Roadmap",
  roadmap_items:"<li class=\"done\">Velocímetro</li><li class=\"done\">Widgets</li><li class=\"done\">Premium</li><li class=\"done\">Temas</li><li>Pedidos dos usuários</li><li>Viagens e custos</li><li>App Store - iOS</li><li>Leituras OBD</li><li>Instruções de navegação</li><li>Novos sons</li><li>Novas fontes</li><li>Novos efeitos</li><li>Mapas, alertas de radar, Android Auto e mais</li>",
  quick_manual_title:"Manual rápido",
  quick_manual_content:"<ol><li>Deslize para trocar de HUD.</li><li>Acesse as Configurações de uma destas formas:<ol><li>Toque e segure o relógio no canto superior esquerdo.</li><li>Toque e segure a tela e escolha Abrir configurações.</li><li>Toque no botão Settings ao lado do relógio.</li></ol></li><li>Explore as opções nas diferentes abas das Configurações. São muitas!</li><li>Com a assinatura Premium, os recursos vão sendo desbloqueados.</li><li>Na versão Free, use créditos para desbloquear recursos pagos. Ganhe +5 créditos assistindo a vídeos completos.</li><li>Toque e segure a tela para ver opções de HUD, como duplicar, apagar e exportar.</li></ol>"
 },
 fr:{
  t_fame_desired:"Le Hall of Fame que nous espérons !",fame2_lead_updated:"Votre avis sur le Play Store pourra bientôt apparaître ici.",fame2_placeholder:"Votre avis peut apparaître ici !<br>Bientôt disponible.",roadmap_title:"Feuille de route",
  roadmap_items:"<li class=\"done\">Compteur de vitesse</li><li class=\"done\">Widgets</li><li class=\"done\">Premium</li><li class=\"done\">Thèmes</li><li>Demandes des utilisateurs</li><li>Trajets et coûts</li><li>App Store - iOS</li><li>Données OBD</li><li>Instructions de navigation</li><li>Nouveaux sons</li><li>Nouvelles polices</li><li>Nouveaux effets</li><li>Cartes, alertes radar, Android Auto et plus</li>",
  quick_manual_title:"Guide rapide",
  quick_manual_content:"<ol><li>Faites glisser l’écran pour changer de HUD.</li><li>Ouvrez les paramètres de l’une de ces façons :<ol><li>Appui long sur l’horloge en haut à gauche.</li><li>Appui long sur l’écran, puis choisissez Ouvrir les paramètres.</li><li>Appuyez sur Settings à côté de l’horloge.</li></ol></li><li>Explorez les options de chaque onglet des paramètres. Elles sont nombreuses !</li><li>L’abonnement Premium débloque les options au fur et à mesure.</li><li>Avec la version gratuite, dépensez des crédits pour les fonctions payantes. Gagnez +5 crédits en regardant des vidéos jusqu’au bout.</li><li>Un appui long sur l’écran affiche les options du HUD : dupliquer, supprimer, exporter, etc.</li></ol>"
 },
 es:{
  t_fame_desired:"¡El Hall of Fame que esperamos!",fame2_lead_updated:"Tu reseña de Play Store podría aparecer aquí próximamente.",fame2_placeholder:"¡Tu comentario puede aparecer aquí!<br>Próximamente.",roadmap_title:"Hoja de ruta",
  roadmap_items:"<li class=\"done\">Velocímetro</li><li class=\"done\">Widgets</li><li class=\"done\">Premium</li><li class=\"done\">Temas</li><li>Peticiones de usuarios</li><li>Viajes y costes</li><li>App Store - iOS</li><li>Lecturas OBD</li><li>Instrucciones de navegación</li><li>Nuevos sonidos</li><li>Nuevas fuentes</li><li>Nuevos efectos</li><li>Mapas, alertas de radar, Android Auto y más</li>",
  quick_manual_title:"Manual rápido",
  quick_manual_content:"<ol><li>Desliza para cambiar de HUD.</li><li>Abre los ajustes de una de estas formas:<ol><li>Mantén pulsado el reloj de la esquina superior izquierda.</li><li>Mantén pulsada la pantalla y elige Abrir ajustes.</li><li>Pulsa Settings junto al reloj.</li></ol></li><li>Explora las opciones de las distintas pestañas de ajustes. ¡Hay muchas!</li><li>La suscripción Premium va desbloqueando todas las opciones.</li><li>En la versión gratuita, usa créditos para las funciones de pago. Gana +5 créditos viendo vídeos completos.</li><li>Mantén pulsada la pantalla para ver opciones del HUD: duplicar, borrar y exportar.</li></ol>"
 },
 de:{
  t_fame_desired:"Die Hall of Fame, die wir uns wünschen!",fame2_lead_updated:"Deine Play-Store-Bewertung könnte bald hier erscheinen.",fame2_placeholder:"Dein Kommentar könnte hier stehen!<br>Demnächst verfügbar.",roadmap_title:"Roadmap",
  roadmap_items:"<li class=\"done\">Tachometer</li><li class=\"done\">Widgets</li><li class=\"done\">Premium</li><li class=\"done\">Designs</li><li>Nutzerwünsche</li><li>Fahrten und Kosten</li><li>App Store - iOS</li><li>OBD-Daten</li><li>Navigationsanweisungen</li><li>Neue Sounds</li><li>Neue Schriftarten</li><li>Neue Effekte</li><li>Karten, Radarwarnungen, Android Auto und mehr</li>",
  quick_manual_title:"Kurzanleitung",
  quick_manual_content:"<ol><li>Wische, um zwischen HUDs zu wechseln.</li><li>Öffne die Einstellungen auf eine dieser Arten:<ol><li>Lange auf die Uhr oben links drücken.</li><li>Lange auf den Bildschirm drücken und Einstellungen öffnen wählen.</li><li>Auf Settings neben der Uhr tippen.</li></ol></li><li>Sieh dir die Optionen in den verschiedenen Einstellungs-Tabs an. Es gibt viele!</li><li>Mit Premium werden nach und nach alle Funktionen freigeschaltet.</li><li>In der kostenlosen Version kannst du Credits für kostenpflichtige Funktionen einsetzen. Für vollständig angesehene Videos erhältst du +5 Credits.</li><li>Ein langer Druck auf den Bildschirm öffnet HUD-Optionen wie Duplizieren, Löschen und Exportieren.</li></ol>"
 },
 it:{
  t_fame_desired:"La Hall of Fame che vorremmo!",fame2_lead_updated:"La tua recensione sul Play Store potrebbe apparire qui presto.",fame2_placeholder:"Il tuo commento può comparire qui!<br>In arrivo.",roadmap_title:"Roadmap",
  roadmap_items:"<li class=\"done\">Tachimetro</li><li class=\"done\">Widget</li><li class=\"done\">Premium</li><li class=\"done\">Temi</li><li>Richieste degli utenti</li><li>Viaggi e costi</li><li>App Store - iOS</li><li>Letture OBD</li><li>Istruzioni di navigazione</li><li>Nuovi suoni</li><li>Nuovi caratteri</li><li>Nuovi effetti</li><li>Mappe, avvisi radar, Android Auto e altro</li>",
  quick_manual_title:"Manuale rapido",
  quick_manual_content:"<ol><li>Scorri per cambiare HUD.</li><li>Apri le impostazioni in uno di questi modi:<ol><li>Tieni premuto l’orologio in alto a sinistra.</li><li>Tieni premuto lo schermo e scegli Apri impostazioni.</li><li>Tocca Settings accanto all’orologio.</li></ol></li><li>Esplora le opzioni nelle varie schede delle impostazioni. Sono tante!</li><li>L’abbonamento Premium sblocca progressivamente tutte le opzioni.</li><li>Nella versione gratuita, usa crediti per le funzioni a pagamento. Ottieni +5 crediti guardando i video fino alla fine.</li><li>Tieni premuto lo schermo per le opzioni HUD: duplicare, eliminare ed esportare.</li></ol>"
 },
 ru:{
  t_fame_desired:"Зал славы, о котором мы мечтаем!",fame2_lead_updated:"Ваша оценка в Play Store скоро может появиться здесь.",fame2_placeholder:"Ваш комментарий может быть здесь!<br>Скоро.",roadmap_title:"Планы развития",
  roadmap_items:"<li class=\"done\">Спидометр</li><li class=\"done\">Виджеты</li><li class=\"done\">Premium</li><li class=\"done\">Темы</li><li>Запросы пользователей</li><li>Поездки и расходы</li><li>App Store - iOS</li><li>Показания OBD</li><li>Навигационные инструкции</li><li>Новые звуки</li><li>Новые шрифты</li><li>Новые эффекты</li><li>Карты, предупреждения радара, Android Auto и другое</li>",
  quick_manual_title:"Краткое руководство",
  quick_manual_content:"<ol><li>Проведите по экрану, чтобы переключить HUD.</li><li>Откройте настройки одним из способов:<ol><li>Нажмите и удерживайте часы в левом верхнем углу.</li><li>Нажмите и удерживайте экран и выберите Открыть настройки.</li><li>Нажмите Settings рядом с часами.</li></ol></li><li>Изучите параметры на разных вкладках настроек — их много!</li><li>Подписка Premium постепенно открывает все функции.</li><li>В бесплатной версии тратьте кредиты на платные функции. Получайте +5 кредитов за просмотр видео до конца.</li><li>Долгое нажатие открывает действия с HUD: копировать, удалить, экспортировать и т. д.</li></ol>"
 },
 hi:{
  t_fame_desired:"वह Hall of Fame जिसकी हम उम्मीद करते हैं!",fame2_lead_updated:"आपकी Play Store समीक्षा जल्द ही यहाँ दिखाई दे सकती है।",fame2_placeholder:"आपकी टिप्पणी यहाँ हो सकती है!<br>जल्द आ रहा है।",roadmap_title:"आगे की योजना",
  roadmap_items:"<li class=\"done\">स्पीडोमीटर</li><li class=\"done\">विजेट</li><li class=\"done\">Premium</li><li class=\"done\">थीम</li><li>उपयोगकर्ता अनुरोध</li><li>यात्राएँ और लागत</li><li>App Store - iOS</li><li>OBD रीडिंग</li><li>नेविगेशन निर्देश</li><li>नई ध्वनियाँ</li><li>नए फ़ॉन्ट</li><li>नए प्रभाव</li><li>मैप, रडार अलर्ट, Android Auto और बहुत कुछ</li>",
  quick_manual_title:"त्वरित मार्गदर्शिका",
  quick_manual_content:"<ol><li>HUD बदलने के लिए स्क्रीन पर स्वाइप करें।</li><li>इनमें से किसी तरीके से सेटिंग खोलें:<ol><li>ऊपर बाएँ कोने की घड़ी को देर तक दबाएँ।</li><li>स्क्रीन को देर तक दबाकर Open Settings चुनें।</li><li>घड़ी के पास Settings बटन दबाएँ।</li></ol></li><li>सेटिंग के अलग-अलग टैब के विकल्प देखें। बहुत सारे विकल्प हैं!</li><li>Premium सदस्यता से विकल्प धीरे-धीरे अनलॉक होते हैं।</li><li>Free संस्करण में भुगतान वाली सुविधाएँ खोलने के लिए क्रेडिट खर्च करें। पूरे वीडियो देखने पर +5 क्रेडिट पाएँ।</li><li>स्क्रीन को देर तक दबाकर HUD कॉपी, हटाने, एक्सपोर्ट करने आदि के विकल्प पाएँ।</li></ol>"
 },
 id:{
  t_fame_desired:"Hall of Fame yang kami harapkan!",fame2_lead_updated:"Ulasan Play Store Anda bisa segera tampil di sini.",fame2_placeholder:"Komentar Anda bisa tampil di sini!<br>Segera hadir.",roadmap_title:"Peta jalan",
  roadmap_items:"<li class=\"done\">Speedometer</li><li class=\"done\">Widget</li><li class=\"done\">Premium</li><li class=\"done\">Tema</li><li>Permintaan pengguna</li><li>Perjalanan dan biaya</li><li>App Store - iOS</li><li>Data OBD</li><li>Petunjuk navigasi</li><li>Suara baru</li><li>Font baru</li><li>Efek baru</li><li>Peta, peringatan radar, Android Auto, dan lainnya</li>",
  quick_manual_title:"Panduan cepat",
  quick_manual_content:"<ol><li>Geser layar untuk berganti HUD.</li><li>Buka Pengaturan dengan salah satu cara berikut:<ol><li>Tekan lama jam di sudut kiri atas.</li><li>Tekan lama layar lalu pilih Buka Pengaturan.</li><li>Ketuk tombol Settings di samping jam.</li></ol></li><li>Jelajahi opsi pada setiap tab Pengaturan. Ada banyak!</li><li>Langganan Premium akan membuka semua opsi secara bertahap.</li><li>Di versi Gratis, gunakan kredit untuk fitur berbayar. Dapatkan +5 kredit dengan menonton video sampai selesai.</li><li>Tekan lama layar untuk opsi HUD seperti menggandakan, menghapus, dan mengekspor.</li></ol>"
 },
 tr:{
  t_fame_desired:"Umut ettiğimiz Hall of Fame!",fame2_lead_updated:"Play Store yorumunuz yakında burada yer alabilir.",fame2_placeholder:"Yorumunuz burada yer alabilir!<br>Yakında.",roadmap_title:"Yol haritası",
  roadmap_items:"<li class=\"done\">Hız göstergesi</li><li class=\"done\">Widget'lar</li><li class=\"done\">Premium</li><li class=\"done\">Temalar</li><li>Kullanıcı istekleri</li><li>Seyahatler ve maliyetler</li><li>App Store - iOS</li><li>OBD verileri</li><li>Navigasyon talimatları</li><li>Yeni sesler</li><li>Yeni yazı tipleri</li><li>Yeni efektler</li><li>Haritalar, radar uyarıları, Android Auto ve daha fazlası</li>",
  quick_manual_title:"Hızlı kılavuz",
  quick_manual_content:"<ol><li>HUD'lar arasında geçmek için ekranı kaydırın.</li><li>Ayarlar'ı şu yöntemlerden biriyle açın:<ol><li>Sol üst köşedeki saate uzun basın.</li><li>Ekrana uzun basıp Ayarları Aç'ı seçin.</li><li>Saatin yanındaki Settings düğmesine dokunun.</li></ol></li><li>Ayarlar sekmelerindeki seçenekleri inceleyin. Çok fazla seçenek var!</li><li>Premium aboneliği seçenekleri kullanıma açar.</li><li>Ücretsiz sürümde ücretli özellikleri açmak için kredi harcayın. Videoları tamamen izleyerek +5 kredi kazanın.</li><li>Ekrana uzun basarak HUD kopyalama, silme ve dışa aktarma seçeneklerine ulaşın.</li></ol>"
 },
 ja:{
  t_fame_desired:"目指したい Hall of Fame",fame2_lead_updated:"Play ストアのレビューを近日ここに掲載します。",fame2_placeholder:"あなたのコメントをここに掲載できます！<br>近日公開。",roadmap_title:"今後の予定",
  roadmap_items:"<li class=\"done\">スピードメーター</li><li class=\"done\">ウィジェット</li><li class=\"done\">Premium</li><li class=\"done\">テーマ</li><li>ユーザーからの要望</li><li>走行と費用</li><li>App Store - iOS</li><li>OBD 読み取り</li><li>ナビゲーション案内</li><li>新しいサウンド</li><li>新しいフォント</li><li>新しいエフェクト</li><li>地図、レーダー警告、Android Auto など</li>",
  quick_manual_title:"クイックマニュアル",
  quick_manual_content:"<ol><li>スワイプしてHUDを切り替えます。</li><li>次のいずれかの方法で設定を開きます:<ol><li>左上の時計を長押しします。</li><li>画面を長押しして設定を開くを選びます。</li><li>時計の横にあるSettingsボタンをタップします。</li></ol></li><li>設定の各タブにある項目を確認しましょう。たくさんあります！</li><li>Premiumサブスクリプションで機能が順次解放されます。</li><li>無料版ではクレジットを使って有料機能を解放します。動画を最後まで見ると+5クレジットを獲得できます。</li><li>画面を長押しすると、HUDの複製、削除、エクスポートなどを選べます。</li></ol>"
 },
 ko:{
  t_fame_desired:"우리가 바라는 Hall of Fame",fame2_lead_updated:"Play 스토어 리뷰가 곧 여기에 소개될 수 있습니다.",fame2_placeholder:"여기에 여러분의 댓글이 올라올 수 있어요!<br>곧 업데이트됩니다.",roadmap_title:"로드맵",
  roadmap_items:"<li class=\"done\">속도계</li><li class=\"done\">위젯</li><li class=\"done\">Premium</li><li class=\"done\">테마</li><li>사용자 요청</li><li>주행 및 비용</li><li>App Store - iOS</li><li>OBD 데이터</li><li>내비게이션 안내</li><li>새로운 사운드</li><li>새로운 글꼴</li><li>새로운 효과</li><li>지도, 레이더 경고, Android Auto 등</li>",
  quick_manual_title:"빠른 사용 설명서",
  quick_manual_content:"<ol><li>스와이프하여 HUD를 전환합니다.</li><li>다음 방법 중 하나로 설정을 엽니다:<ol><li>왼쪽 위 모서리의 시계를 길게 누릅니다.</li><li>화면을 길게 누르고 설정 열기를 선택합니다.</li><li>시계 옆의 Settings 버튼을 누릅니다.</li></ol></li><li>설정의 여러 탭에 있는 옵션을 확인하세요. 정말 많습니다!</li><li>Premium 구독으로 옵션이 차례로 잠금 해제됩니다.</li><li>무료 버전에서는 크레딧을 사용해 유료 기능을 잠금 해제하세요. 동영상을 끝까지 보면 +5 크레딧을 받을 수 있습니다.</li><li>화면을 길게 눌러 HUD 복제, 삭제, 내보내기 등의 옵션을 사용합니다.</li></ol>"
 }
};
Object.keys(REQUESTED_T).forEach(function(code){ EXTRA_T[code]=Object.assign({},EXTRA_T[code]||{},REQUESTED_T[code]); });
  // A língua é escolhida pelo endereço, preferência guardada ou idioma do browser.
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

  function syncTermsLink() {
    var termsLink = document.querySelector('a[data-i18n=nav_terms]');
    if (!termsLink) return;
    var lang = load('lang') || detectLang();
    var theme = load('theme') || document.documentElement.dataset.theme || 'dark';
    termsLink.href = 'terms_of_service.html?lang=' + encodeURIComponent(lang) + '&theme=' + encodeURIComponent(theme);
  }

  // Aplica a língua a todos os elementos com data-i18n
  function setLang(l) {
    if (!LANGS[l]) l = 'en';
    sel.value = l;
    document.documentElement.lang = (l === 'br') ? 'pt-BR' : l;

    $$('[data-i18n]').forEach(function (el) {
      // guarda o texto original (inglês) na primeira vez
      if (el.dataset.en == null) el.dataset.en = el.innerHTML;
      var texto = (T[l] || {})[el.dataset.i18n] || (EXTRA_T[l] || {})[el.dataset.i18n];
      el.innerHTML = texto || el.dataset.en;
    });
    if (window.renderFeatures) window.renderFeatures(l);
    save('lang', l);
    syncTermsLink();
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
  var yearNode = document.getElementById('current-year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();


  /* ---------- 3) TEMA CLARO / ESCURO (escuro por defeito) ---------- */
  var root = document.documentElement;
  root.dataset.theme = load('theme') || 'dark';
  syncTermsLink();

  $('#theme').onclick = function () {
    root.dataset.theme = (root.dataset.theme === 'dark') ? 'light' : 'dark';
    save('theme', root.dataset.theme);
    syncTermsLink();
  };


  /* ---------- 4) GALERIA DE SCREENSHOTS ----------
     Imagem grande + miniaturas. Muda com: clique na miniatura, setas,
     swipe (telemóvel), teclas ← → e autoplay lento.
     Para acrescentar um screenshot basta acrescentar um <button class="thumb">
     no HTML: o resto ajusta-se sozinho.                                      */
  /* Full-screen viewer for all large gallery images */
  var viewer=$('#image-viewer');
  var viewerImage=viewer?viewer.querySelector('.viewer-image'):null;
  var viewerCaption=viewer?viewer.querySelector('.viewer-caption'):null;
  var viewerCount=viewer?viewer.querySelector('.viewer-count'):null;
  var viewerIndex=0,viewerItems=[],viewerFocus=null,viewerScroll=0,viewerOverflow='';
  function showViewerImage(i){
    if(!viewerItems.length)return;
    viewerIndex=(i+viewerItems.length)%viewerItems.length;
    var item=viewerItems[viewerIndex];viewerImage.src=item.src;viewerImage.alt=item.alt;
    viewerCaption.textContent=item.alt;viewerCount.textContent=(viewerIndex+1)+' / '+viewerItems.length;
  }
  function openViewer(source){
    viewerItems=$$('.gallery .thumb img').map(function(img){return{src:img.src,alt:img.alt||''}});
    if(!viewerItems.length)return;
    var activeSrc=source.currentSrc||source.src;
    var i=viewerItems.findIndex(function(item){return item.src===activeSrc});
    viewerIndex=i<0?0:i;viewerFocus=source;viewerScroll=window.scrollY;viewerOverflow=document.body.style.overflow;
    viewer.hidden=false;viewer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';showViewerImage(viewerIndex);
    viewer.querySelector('.viewer-close').focus();
  }
  function closeViewer(){
    if(viewer.hidden)return;
    viewer.hidden=true;viewer.setAttribute('aria-hidden','true');document.body.style.overflow=viewerOverflow;window.scrollTo(0,viewerScroll);
    if(viewerFocus&&viewerFocus.isConnected){try{viewerFocus.focus({preventScroll:true})}catch(e){viewerFocus.focus()}}
  }
  if(viewer){
    viewer.querySelector('.viewer-close').addEventListener('click',closeViewer);
    viewer.querySelector('.viewer-prev').addEventListener('click',function(){showViewerImage(viewerIndex-1)});
    viewer.querySelector('.viewer-next').addEventListener('click',function(){showViewerImage(viewerIndex+1)});
    viewer.addEventListener('click',function(e){if(e.target===viewer)closeViewer()});
    document.addEventListener('keydown',function(e){if(viewer.hidden)return;if(e.key==='Escape')closeViewer();else if(e.key==='ArrowLeft')showViewerImage(viewerIndex-1);else if(e.key==='ArrowRight')showViewerImage(viewerIndex+1)});
    var viewX=null;viewerImage.addEventListener('touchstart',function(e){viewX=e.touches[0].clientX},{passive:true});
    viewerImage.addEventListener('touchend',function(e){if(viewX===null)return;var dx=e.changedTouches[0].clientX-viewX;if(Math.abs(dx)>40)showViewerImage(viewerIndex+(dx<0?1:-1));viewX=null},{passive:true});
  }
  function iniciarGaleria(box) {
    var principal = box.querySelector('.stage img');
    if(principal){principal.tabIndex=0;principal.setAttribute('role','button');principal.addEventListener('click',function(){if(Date.now()<Number(principal.dataset.suppressViewerClick||0))return;openViewer(principal)})}
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
      if (Math.abs(dx) > 40) { principal.dataset.suppressViewerClick=String(Date.now()+500); mostrar(atual + (dx < 0 ? 1 : -1)); }
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
      return primeiro ? primeiro.getBoundingClientRect().width + 24 : track.clientWidth;
    }
    function mover(dir) {
      var fim = track.scrollWidth - track.clientWidth - 4;
      if (dir > 0 && track.scrollLeft >= fim) { track.scrollTo({ left: 0, behavior: 'smooth' }); return; }
      if (dir < 0 && track.scrollLeft <= 4) { track.scrollTo({ left: fim, behavior: 'smooth' }); return; }
      track.scrollBy({ left: dir * passo(), behavior: 'smooth' });
    }
    var down=false,startX=0,startScroll=0,dragged=false,pointerId=null,blockClickUntil=0;
    track.addEventListener('pointerdown',function(e){
      if(!e.isPrimary||(e.pointerType==='mouse'&&e.button!==0))return;
      down=true;dragged=false;pointerId=e.pointerId;startX=e.clientX;startScroll=track.scrollLeft;
      track.classList.add('is-dragging');try{track.setPointerCapture(pointerId)}catch(err){}
    });
    track.addEventListener('pointermove',function(e){
      if(!down||e.pointerId!==pointerId)return;
      var dx=e.clientX-startX;if(Math.abs(dx)>5)dragged=true;
      if(dragged){e.preventDefault();track.scrollLeft=startScroll-dx;}
    });
    function endPointer(e){
      if(!down||(e&&e.pointerId!==pointerId))return;
      down=false;if(dragged)blockClickUntil=Date.now()+250;
      track.classList.remove('is-dragging');
      try{if(pointerId!==null)track.releasePointerCapture(pointerId)}catch(err){}
      pointerId=null;
    }
    track.addEventListener('pointerup',endPointer);
    track.addEventListener('pointercancel',endPointer);
    track.addEventListener('click',function(e){if(Date.now()<blockClickUntil){e.preventDefault();e.stopPropagation()}},true);
    box.querySelector('.prev').onclick=function(){mover(-1)};
    box.querySelector('.next').onclick=function(){mover(1)};
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
    var playerOrigin = (location.protocol === 'http:' || location.protocol === 'https:') ? location.origin : 'https://ktmlaranjinha.github.io';
    src += '&origin=' + encodeURIComponent(playerOrigin) + '&widget_referrer=' + encodeURIComponent('https://ktmlaranjinha.github.io/TrueGPS/');
    f.src = src;
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    f.allow = 'autoplay; encrypted-media; picture-in-picture';
    f.allowFullscreen = true;
    f.title = 'TrueGPS Speed';
    video.innerHTML = '';
    video.appendChild(f);
    video.removeAttribute('role');
    video.removeAttribute('tabindex');
  }

  var copyVideoButton = document.getElementById('copy-video-url');
  if (copyVideoButton) {
    copyVideoButton.onclick = function () {
      var link = 'https://www.youtube.com/watch?v=' + video.dataset.yt;
      function feedback(key) { var status = document.getElementById('copy-video-status'); if (status) status.textContent = (EXTRA_T[sel.value] || {})[key] || (T[sel.value] || {})[key] || ({copy_video_success:'Video link copied.',copy_video_failed:'Could not copy. Open the video on YouTube.',copy_video_prompt:'Copy the URL shown to open the video.'})[key] || key; }
      function fallbackCopy() {
        var field = document.createElement('textarea'); field.value = link; field.setAttribute('readonly', ''); field.style.position = 'fixed'; field.style.opacity = '0'; document.body.appendChild(field); field.select();
        var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} document.body.removeChild(field); if (ok) { feedback('copy_video_success'); } else { window.prompt('Copy video URL:', link); feedback('copy_video_prompt'); }
      }
      if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(link).then(function () { feedback('copy_video_success'); }).catch(fallbackCopy); } else { fallbackCopy(); }
    };
  }

  video.onclick = carregarVideo;
  video.onkeydown = function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); carregarVideo(); }
  };

})();








