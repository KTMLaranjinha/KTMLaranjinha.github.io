/* =========================================================
   TrueGPS Speed – TEXTOS DAS FUNCIONALIDADES (por língua)

   COMO ACRESCENTAR UMA LÍNGUA:
   1) copia o bloco  FEATURES.en = { ... };  inteiro
   2) muda o código (fr, es, de, it, ru, hi, id, tr, ja, ko)
   3) traduz os textos (mantém os emojis e a estrutura)
   Sem tradução, a língua mostra o inglês. "br" usa o bloco "pt".

   ESTRUTURA:
   intro  = parágrafos antes dos cartões
   groups = blocos de cartões. Cada grupo tem:
            title / icon / lead (opcionais) e cards
   card   = icon, title e depois items (lista) OU text (parágrafo)
   ========================================================= */

window.FEATURES = {};


/* ------------------------- PORTUGUÊS ------------------------- */
FEATURES.pt = {

  intro: [
    "🎯 A aplicação TrueGPS tem como objetivo ser a MELHOR e MAIS PERSONALIZÁVEL app GPS/HUD da Play Store.",
    "E porquê❓ Porque foi pensada para quem quer CONTROLO total e não soluções fechadas."
  ],

  groups: [

    /* ----- Funcionalidades principais ----- */
    { cards: [
      { icon: "🚀", title: "O que torna a TrueGPS diferente❓", items: [
        "Dezenas de opções avançadas de configuração",
        "Um sistema simples e transparente de 💰Créditos, que permite desbloquear TODAS as opções SEM subscrição obrigatória",
        "Pode ser usada em qualquer tipo de veículo: Carro, Moto, Bicicleta, Barco, Avião, etc.",
        "Uma aplicação completa, simples e rápida",
        "E continuará a crescer e evoluir com novas funcionalidades"
      ]},
      { icon: "🎨", title: "Personalização Total do HUD", items: [
        "Cores de fundo para 3 intervalos de velocidade",
        "Milhares de cores à escolha",
        "Dezenas de fontes para o velocímetro e outras informações",
        "Ajuste livre do tamanho da fonte",
        "Layouts HUD infinitos e totalmente configuráveis"
      ]},
      { icon: "🚗", title: "Perfis de Veículo", items: [
        "Perfis independentes por veículo",
        "Custos visíveis por perfil e cálculo instantâneo dos custos da viagem",
        "Offsets de velocidade diferentes por veículo",
        "Ajuste fácil da velocidade GPS à velocidade real do velocímetro"
      ]},
      { icon: "📊", title: "Dados, Alertas e Efeitos Gráficos", items: [
        "Gráficos de aceleração e aceleração lateral",
        "Alertas visuais e sonoros de limite de velocidade",
        "Efeitos gráficos dependentes da velocidade",
        "Diferentes unidades de medida",
        "Odómetro e 3 Trips totalmente configuráveis"
      ]},
      { icon: "🌙", title: "Extras que fazem a diferença", items: [
        "Swipe rápido para alternar entre todos os teus HUDs",
        "Modo ScreenSaver com frases épicas",
        "Exportar e importar HUDs entre amigos"
      ]},
      { icon: "🧩", title: "Informação Visível à Tua Maneira", items: [
        "Mostrar ou ocultar qualquer informação no ecrã: Hora, Trips, Velocidade Máx/Média, Custos, Créditos, Limites, GPS, Bússola, etc.",
        "Ocultar ou mostrar widgets individualmente ou todos de uma vez"
      ]},
      { icon: "🖱️", title: "Interação Rápida e Inteligente", items: [
        "Zonas de clique e clique longo configuráveis e visíveis",
        "Criar, duplicar, apagar e trocar HUDs com um simples clique ou swipe",
        "Inverter o HUD para o vidro com um simples swipe"
      ]}
    ]},

    /* ----- Definições avançadas ----- */
    { icon: "⚙️", title: "Definições Avançadas do HUD",
      lead: "Esta aplicação permite uma configuração detalhada do comportamento e aparência do HUD (Head-Up Display), oferecendo controlo total sobre como a informação é apresentada durante a condução.",
      cards: [
      { icon: "🔹", title: "Definições Gerais", items: [
        "Ajustar o comportamento global do HUD",
        "Definir tempos de ocultação automática",
        "Ativar modos de segurança (Safe Mode)",
        "Controlar brilho, opacidade e temas visuais",
        "Seleção do idioma da aplicação"
      ]},
      { icon: "🎨", title: "Aparência e Cores", items: [
        "Personalização total das cores do HUD",
        "Definir cores de fundo por intervalos de velocidade",
        "Atribuir cores a estados e alertas",
        "Personalizar ícones e imagens"
      ]},
      { icon: "🚗", title: "Alertas e Velocidade", items: [
        "Definir limites de velocidade",
        "Alertas visuais e sonoros configuráveis",
        "Efeitos gráficos dependentes da velocidade",
        "Opção para desativar efeitos e alertas"
      ]},
      { icon: "🔊", title: "Sons e Feedback", items: [
        "Sons para interações do HUD, alertas e estados",
        "Feedback sonoro opcional e totalmente configurável",
        "Opção para silenciar todos os sons"
      ]},
      { icon: "🛑", title: "Segurança e Sistema", items: [
        "Modo “Não Incomodar” (DND) opcional",
        "ScreenSaver para reduzir distrações",
        "Configuração recomendada com o veículo parado"
      ]},
      { icon: "💰", title: "Sistema de Créditos e Premium", items: [
        "Funcionalidades avançadas disponíveis via subscrição ou créditos",
        "Alterações críticas podem consumir créditos",
        "Créditos adicionais podem ser obtidos opcionalmente"
      ]}
    ]},

    /* ----- Clique longo ----- */
    { icon: "📦", title: "Opções de Clique Longo – Controlo Direto do HUD",
      lead: "Existem também opções de clique longo que complementam o painel de controlo central da aplicação, permitindo interação direta com o HUD ativo e gestão de ações sensíveis.",
      cards: [
      { icon: "🔒", title: "Bloqueio e Proteção", items: [
        "Possibilidade de bloquear HUDs para evitar alterações acidentais",
        "HUDs bloqueados não podem ser editados nem removidos",
        "Confirmação explícita antes de bloquear ou desbloquear"
      ]},
      { icon: "🔁", title: "Gestão de HUDs", items: [
        "Replicação de HUDs existentes",
        "Criação automática de novos HUDs (quando permitido)",
        "Remoção permanente de HUDs com confirmação"
      ]},
      { icon: "💰", title: "Créditos e Subscrição", items: [
        "Algumas ações requerem subscrição Premium ou uso de créditos",
        "O custo é sempre mostrado antes da confirmação",
        "A aplicação impede ações inválidas ou não autorizadas"
      ]},
      { icon: "🔊", title: "Feedback Visual e Sonoro", items: [
        "Sons específicos para ações críticas",
        "Feedback visual para HUD bloqueado ou ações indisponíveis",
        "Sons dependem das definições globais da aplicação"
      ]},
      { icon: "⚠️", title: "Salvaguardas", items: [
        "Ações críticas requerem confirmação explícita",
        "Nenhuma alteração irreversível é feita silenciosamente",
        "O utilizador mantém sempre o controlo final"
      ]}
    ]},

    /* ----- Informação importante ----- */
    { icon: "ℹ️", title: "Informação importante", cards: [
      { icon: "🧩", title: "Resumo Importante",
        text: "Esta aplicação foi criada para oferecer o máximo de personalização e controlo do HUD durante a condução, respeitando sempre as limitações do sistema e a responsabilidade do utilizador." },
      { icon: "ℹ️", title: "A aplicação", items: [
        "É um auxílio visual e informativo",
        "Não substitui os sistemas do veículo",
        "Depende dos sensores e permissões do sistema"
      ]},
      { icon: "⚠️", title: "Responsabilidade", items: [
        "A utilização é totalmente da responsabilidade do utilizador",
        "Recomenda-se configurar a aplicação com o veículo parado",
        "O uso excessivo de efeitos pode causar distrações"
      ]},
      { icon: "❌", title: "O desenvolvedor não é responsável por", items: [
        "Multas, incidentes ou acidentes",
        "Uso indevido da aplicação",
        "Alterações confirmadas voluntariamente pelo utilizador"
      ]},
      { icon: "✅", title: "Nota Importante",
        text: "Esta aplicação apenas fornece ferramentas — não toma decisões. Utilize por sua conta e risco." }
    ],
    note: "Se tiveres dúvidas, podes contactar o desenvolvedor por email ou através da página da app na Google Play." }

  ]
};


/* ------------------------- ENGLISH ------------------------- */
FEATURES.en = {

  intro: [
    "🎯 TrueGPS aims to be the BEST and most CUSTOMIZABLE GPS/HUD app on the Play Store.",
    "And why❓ Because it was designed for people who want total CONTROL, not closed solutions."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "What makes TrueGPS different❓", items: [
        "Dozens of advanced configuration options",
        "A simple, transparent 💰Credits system that unlocks ALL options with NO mandatory subscription",
        "Works with any type of vehicle: car, motorbike, bicycle, boat, aircraft, etc.",
        "A complete, simple and fast app",
        "And it will keep growing and evolving with new features"
      ]},
      { icon: "🎨", title: "Total HUD Customization", items: [
        "Background colors for 3 speed ranges",
        "Thousands of colors to choose from",
        "Dozens of fonts for the speedometer and other information",
        "Free font size adjustment",
        "Endless, fully configurable HUD layouts"
      ]},
      { icon: "🚗", title: "Vehicle Profiles", items: [
        "Independent profiles for each vehicle",
        "Costs shown per profile, with instant trip cost calculation",
        "Different speed offsets for each vehicle",
        "Easily match the GPS speed to your real speedometer"
      ]},
      { icon: "📊", title: "Data, Alerts and Graphic Effects", items: [
        "Acceleration and lateral acceleration charts",
        "Visual and audible speed limit alerts",
        "Speed-dependent graphic effects",
        "Different units of measurement",
        "Fully configurable odometer and 3 trip counters"
      ]},
      { icon: "🌙", title: "Extras that make the difference", items: [
        "Quick swipe to switch between all your HUDs",
        "ScreenSaver mode with epic quotes",
        "Export and import HUDs with friends"
      ]},
      { icon: "🧩", title: "Information Shown Your Way", items: [
        "Show or hide any information on screen: time, trips, max/average speed, costs, credits, limits, GPS, compass, etc.",
        "Show or hide widgets individually or all at once"
      ]},
      { icon: "🖱️", title: "Quick and Smart Interaction", items: [
        "Configurable, visible tap and long-press zones",
        "Create, duplicate, delete and switch HUDs with a simple tap or swipe",
        "Flip the HUD for the windshield with a simple swipe"
      ]}
    ]},

    { icon: "⚙️", title: "Advanced HUD Settings",
      lead: "This app allows detailed configuration of the behavior and appearance of the HUD (Head-Up Display), giving you total control over how information is shown while driving.",
      cards: [
      { icon: "🔹", title: "General Settings", items: [
        "Adjust the global HUD behavior",
        "Set automatic hide times",
        "Enable safety modes (Safe Mode)",
        "Control brightness, opacity and visual themes",
        "Choose the app language"
      ]},
      { icon: "🎨", title: "Appearance and Colors", items: [
        "Total HUD color customization",
        "Set background colors by speed range",
        "Assign colors to states and alerts",
        "Customize icons and images"
      ]},
      { icon: "🚗", title: "Alerts and Speed", items: [
        "Set speed limits",
        "Configurable visual and audible alerts",
        "Speed-dependent graphic effects",
        "Option to disable effects and alerts"
      ]},
      { icon: "🔊", title: "Sounds and Feedback", items: [
        "Sounds for HUD interactions, alerts and states",
        "Optional, fully configurable audio feedback",
        "Option to mute all sounds"
      ]},
      { icon: "🛑", title: "Safety and System", items: [
        "Optional “Do Not Disturb” (DND) mode",
        "ScreenSaver to reduce distractions",
        "Recommended setup with the vehicle stopped"
      ]},
      { icon: "💰", title: "Credits and Premium System", items: [
        "Advanced features available through subscription or credits",
        "Critical changes may consume credits",
        "Additional credits can optionally be obtained"
      ]}
    ]},

    { icon: "📦", title: "Long-Press Options – Direct HUD Control",
      lead: "There are also long-press options that complement the app’s central control panel, allowing direct interaction with the active HUD and management of sensitive actions.",
      cards: [
      { icon: "🔒", title: "Locking and Protection", items: [
        "Lock HUDs to prevent accidental changes",
        "Locked HUDs cannot be edited or removed",
        "Explicit confirmation before locking or unlocking"
      ]},
      { icon: "🔁", title: "HUD Management", items: [
        "Duplicate existing HUDs",
        "Automatic creation of new HUDs (when allowed)",
        "Permanent removal of HUDs with confirmation"
      ]},
      { icon: "💰", title: "Credits and Subscription", items: [
        "Some actions require a Premium subscription or credits",
        "The cost is always shown before confirmation",
        "The app prevents invalid or unauthorized actions"
      ]},
      { icon: "🔊", title: "Visual and Audio Feedback", items: [
        "Specific sounds for critical actions",
        "Visual feedback for locked HUDs or unavailable actions",
        "Sounds depend on the app’s global settings"
      ]},
      { icon: "⚠️", title: "Safeguards", items: [
        "Critical actions require explicit confirmation",
        "No irreversible change is made silently",
        "The user always keeps final control"
      ]}
    ]},

    { icon: "ℹ️", title: "Important information", cards: [
      { icon: "🧩", title: "Important Summary",
        text: "This app was created to offer maximum HUD customization and control while driving, always respecting system limitations and the user’s responsibility." },
      { icon: "ℹ️", title: "The app", items: [
        "It is a visual and informational aid",
        "It does not replace the vehicle’s systems",
        "It depends on system sensors and permissions"
      ]},
      { icon: "⚠️", title: "Responsibility", items: [
        "Use is entirely the user’s responsibility",
        "Configuring the app with the vehicle stopped is recommended",
        "Excessive use of effects may cause distraction"
      ]},
      { icon: "❌", title: "The developer is not responsible for", items: [
        "Fines, incidents or accidents",
        "Misuse of the app",
        "Changes voluntarily confirmed by the user"
      ]},
      { icon: "✅", title: "Important Note",
        text: "This app only provides tools — it does not make decisions. Use at your own risk." }
    ],
    note: "If you have questions, you can contact the developer by email or through the app’s Google Play page." }

  ]
};

/* Renderiza os textos dos cartões a partir de FEATURES.pt / FEATURES.en. */
/* Conteúdo das novas secções. Acrescenta aqui os outros idiomas; sem tradução usa EN. */
window.ABOUT = {
  pt: {
        label: "🎯 O que é o TrueGPS?",
subtitle: "Velocímetro GPS e HUD com widgets, alertas, efeitos visuais e perfis de veículos",
    paragraphs: [
      "O TrueGPS é um poderoso Velocímetro GPS e HUD (Head-Up Display), desenvolvido para condutores que pretendem ter controlo total sobre a sua experiência de condução, em vez de soluções fechadas e limitadas.",
      "Personalize todos os detalhes, crie HUDs ilimitados, calibre a velocidade GPS para cada veículo através de perfis dedicados e desfrute de widgets, efeitos e alertas avançados.",
      "Ao contrário das aplicações GPS tradicionais, o TrueGPS permite-lhe controlar totalmente a forma como a velocidade, as viagens, os alertas e os dados do veículo são apresentados."
    ]
  },
  en: {
        label: "🎯 What is TrueGPS?",
subtitle: "GPS speedometer and HUD with widgets, alerts, visual effects and vehicle profiles",
    paragraphs: [
      "TrueGPS is a powerful GPS speedometer and HUD (Head-Up Display), built for drivers who want full control over their driving experience instead of closed, limited solutions.",
      "Customize every detail, create unlimited HUDs, calibrate GPS speed for each vehicle with dedicated profiles, and use advanced widgets, effects and alerts.",
      "Unlike traditional GPS apps, TrueGPS lets you control exactly how speed, trips, alerts and vehicle data are displayed."
    ]
  }
};

window.FEATURES2 = {
  pt: {
    groups: [
      { icon: "🚀", title: "Principais funcionalidades", cards: [{ items: [
        "Crie um número ilimitado de layouts HUD totalmente personalizáveis com widgets independentes",
        "Crie vários perfis de veículo com configurações independentes",
        "Calibração da velocidade GPS e compensações de velocidade individuais para cada perfil de veículo",
        "Cálculo instantâneo do custo da viagem para cada perfil de veículo",
        "Dê vida aos seus HUDs com cores e intervalos de velocidade configuráveis, barras de aceleração, efeitos visuais e alertas inteligentes",
        "Crie, duplique, proteja, elimine e alterne entre HUDs com um simples toque, toque prolongado ou gesto de deslizar",
        "Exporte, importe e partilhe HUDs com amigos",
        "Alertas visuais e sonoros",
        "Espelhe o HUD para projeção no para-brisas com um simples gesto de deslizar",
        "Pré-visualização do HUD em tempo real durante a personalização",
        "Barras de aceleração em tempo real e gráficos de força G lateral",
        "Compatível com automóveis, motas, camiões, barcos, bicicletas, aeronaves e praticamente qualquer veículo",
        "Suporte para várias unidades de velocidade (km/h, mph, nós...)",
        "Odómetro e 3 contadores de viagem totalmente configuráveis",
        "Suporte para vários idiomas",
        "Atualizações regulares com novas funcionalidades e melhorias",
        "Rápido, leve e fácil de utilizar"
      ]}]},
      { icon: "🎨", title: "Ajuste Todos os Detalhes", cards: [{ items: [
        "Crie HUDs ilimitados para qualquer veículo e estilo de condução",
        "Controlo total sobre todos os aspetos do seu HUD",
        "Milhares de cores e dezenas de tipos de letra",
        "Tamanhos de letra e layouts ajustáveis",
        "Idiomas e unidades de velocidade configuráveis",
        "Intervalos de velocidade, avisos, efeitos, sons e barras de aceleração configuráveis",
        "Mostre ou oculte widgets individualmente com simples toques, como Velocidade, Viagens, Custos, GPS, Bússola, Relógio e muito mais",
        "Layouts HUD totalmente configuráveis e ilimitados",
        "Gestos de deslizar para alternar rapidamente entre HUDs",
        "Modo de proteção de ecrã com cores aleatórias e frases épicas",
        "Zonas de toque e toque prolongado configuráveis e visíveis",
        "Opções rápidas para silenciar todos os sons, efeitos e alertas",
        "Modo Não Incomodar (DND) opcional durante a condução"
      ]}]},
      { icon: "🛡️", title: "Segurança e Responsabilidade", lead: "O TrueGPS é um auxiliar visual de condução. Não substitui os sistemas do veículo. Por razões de segurança:", cards: [{ items: [
        "Configure a aplicação com o veículo imobilizado",
        "As ações críticas requerem sempre confirmação",
        "Nunca são efetuadas alterações irreversíveis sem o seu consentimento"
      ]}]},
      { icon: "💰", title: "Créditos e Premium", lead: "As funcionalidades avançadas podem ser desbloqueadas através de Créditos ou Premium. Não é necessária qualquer subscrição. Os custos são sempre apresentados antes da confirmação." },
      { icon: "ℹ️", title: "Nota Importante", lead: "O TrueGPS fornece ferramentas — não toma decisões. Utilize a aplicação de forma responsável e por sua conta e risco." },
      { icon: "👉", title: "Ideal para", cards: [{ items: [
        "Dar ao seu veículo um visual retro ou futurista único",
        "Quem procura uma indicação de velocidade GPS mais precisa",
        "Restaurar o painel de veículos clássicos ou antigos sem instrumentação moderna",
        "Substituir um velocímetro avariado ou impreciso",
        "Automóveis, motas, camiões, barcos e muito mais",
        "Veículos sem velocímetro incorporado",
        "Condutores que pretendem um HUD totalmente personalizável",
        "Viagens longas ou utilização diária",
        "Projeção do HUD no para-brisas",
        "Verificar a precisão da velocidade do veículo",
        "Comparar a velocidade indicada no painel com a velocidade GPS",
        "Condutores profissionais e entusiastas da condução"
      ]}]}
    ],
    ending: [
      "Quer conduza um veículo elétrico moderno, um clássico, uma mota, um camião ou até um barco, o TrueGPS adapta-se ao seu veículo — e não o contrário.",
      "Não existem dois condutores iguais. O seu HUD também não deveria ser.",
      "TrueGPS Speed. Uma aplicação. HUDs ilimitados. Qualquer veículo."
    ]
  },
  en: {
    groups: [
      { icon: "🚀", title: "Key Features", cards: [{ items: [
        "Create unlimited, fully customizable HUD layouts with independent widgets",
        "Create multiple vehicle profiles with independent settings",
        "Calibrate GPS speed and set individual speed offsets for each vehicle profile",
        "Instant trip cost calculation for each vehicle profile",
        "Bring your HUDs to life with configurable colors and speed ranges, acceleration bars, visual effects and smart alerts",
        "Create, duplicate, protect, delete and switch HUDs with a tap, long press or swipe",
        "Export, import and share HUDs with friends",
        "Visual and audible alerts",
        "Mirror the HUD for windshield projection with a simple swipe",
        "Preview the HUD in real time while customizing it",
        "Real-time acceleration bars and lateral G-force graphs",
        "Works with cars, motorcycles, trucks, boats, bicycles, aircraft and almost any vehicle",
        "Supports multiple speed units (km/h, mph, knots...)",
        "Fully configurable odometer and 3 trip counters",
        "Support for multiple languages",
        "Regular updates with new features and improvements",
        "Fast, lightweight and easy to use"
      ]}]},
      { icon: "🎨", title: "Customize Every Detail", cards: [{ items: [
        "Create unlimited HUDs for any vehicle and driving style",
        "Full control over every aspect of your HUD",
        "Thousands of colors and dozens of fonts",
        "Adjustable font sizes and layouts",
        "Configurable languages and speed units",
        "Configurable speed ranges, warnings, effects, sounds and acceleration bars",
        "Show or hide widgets individually with a tap, including Speed, Trips, Costs, GPS, Compass, Clock and more",
        "Fully configurable, unlimited HUD layouts",
        "Swipe gestures to quickly switch between HUDs",
        "Screensaver mode with random colors and epic phrases",
        "Configurable, visible tap and long-press zones",
        "Quick options to mute all sounds, effects and alerts",
        "Optional Do Not Disturb (DND) mode while driving"
      ]}]},
      { icon: "🛡️", title: "Safety and Responsibility", lead: "TrueGPS is a visual driving aid. It does not replace vehicle systems. For safety:", cards: [{ items: [
        "Set up the app while the vehicle is stationary",
        "Critical actions always require confirmation",
        "Irreversible changes are never made without your consent"
      ]}]},
      { icon: "💰", title: "Credits and Premium", lead: "Advanced features can be unlocked with Credits or Premium. No subscription is required. Costs are always shown before confirmation." },
      { icon: "ℹ️", title: "Important Note", lead: "TrueGPS provides tools — it does not make decisions. Use the app responsibly and at your own risk." },
      { icon: "👉", title: "Ideal for", cards: [{ items: [
        "Giving your vehicle a unique retro or futuristic look",
        "Anyone looking for a more accurate GPS speed reading",
        "Restoring a classic or older vehicle dashboard without modern instrumentation",
        "Replacing a broken or inaccurate speedometer",
        "Cars, motorcycles, trucks, boats and much more",
        "Vehicles without a built-in speedometer",
        "Drivers who want a fully customizable HUD",
        "Long trips or everyday use",
        "Windshield HUD projection",
        "Checking vehicle speed accuracy",
        "Comparing dashboard speed with GPS speed",
        "Professional drivers and driving enthusiasts"
      ]}]}
    ],
    ending: [
      "Whether you drive a modern electric vehicle, a classic car, a motorcycle, a truck or even a boat, TrueGPS adapts to your vehicle — not the other way around.",
      "No two drivers are the same. Your HUD should not be either.",
      "TrueGPS Speed. One app. Unlimited HUDs. Any vehicle."
    ]
  }
};
window.renderFeatures = function (lang) {
  var code = lang === 'br' ? 'pt' : lang;

  function addText(parent, tag, value, className) {
    if (!value) return;
    var el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = value;
    parent.appendChild(el);
  }

  function renderGroups(rootId, data) {
    var root = document.getElementById(rootId);
    if (!root || !data) return;
    root.textContent = '';
    addText(root, 'p', data.label, 'about-label');
    addText(root, 'p', data.subtitle, 'feature-subtitle');
    (data.intro || []).forEach(function (text) { addText(root, 'p', text, 'feature-intro'); });
    (data.paragraphs || []).forEach(function (text) { addText(root, 'p', text, 'about-copy'); });

    (data.groups || []).forEach(function (group) {
      var section = document.createElement('div');
      section.className = 'feature-group';
      if (group.title) {
        var heading = document.createElement('h3');
        heading.className = 'feature-group-title';
        heading.textContent = (group.icon ? group.icon + ' ' : '') + group.title;
        section.appendChild(heading);
      }
      addText(section, 'p', group.lead, 'feature-lead');
      if (group.cards && group.cards.length) {
        var grid = document.createElement('div');
        grid.className = 'grid feature-card-grid';
        group.cards.forEach(function (card) {
          var article = document.createElement('article');
          article.className = 'card feature-card';
          if (card.title) {
            var title = document.createElement('h3');
            title.textContent = (card.icon ? card.icon + ' ' : '') + card.title;
            article.appendChild(title);
          }
          if (card.items && card.items.length) {
            var list = document.createElement('ul');
            card.items.forEach(function (item) { addText(list, 'li', item); });
            article.appendChild(list);
          }
          addText(article, 'p', card.text, 'feature-card-text');
          grid.appendChild(article);
        });
        section.appendChild(grid);
      }
      addText(section, 'p', group.note, 'note');
      root.appendChild(section);
    });
    (data.ending || []).forEach(function (text) { addText(root, 'p', text, 'feature-ending'); });
  }

  renderGroups('feature-content', window.FEATURES[code] || window.FEATURES.en || window.FEATURES.pt);
  renderGroups('about-content', window.ABOUT[code] || window.ABOUT.en || window.ABOUT.pt);
  renderGroups('feature-content-2', window.FEATURES2[code] || window.FEATURES2.en || window.FEATURES2.pt);
};