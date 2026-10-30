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
window.renderFeatures = function (lang) {
  var root = document.getElementById('feature-content');
  if (!root || !window.FEATURES) return;

  var code = lang === 'br' ? 'pt' : lang;
  var data = window.FEATURES[code] || window.FEATURES.en || window.FEATURES.pt;
  root.textContent = '';

  function addText(parent, tag, value, className) {
    if (!value) return;
    var el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = value;
    parent.appendChild(el);
  }

  (data.intro || []).forEach(function (text) {
    addText(root, 'p', text, 'feature-intro');
  });

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

    var grid = document.createElement('div');
    grid.className = 'grid feature-card-grid';
    (group.cards || []).forEach(function (card) {
      var article = document.createElement('article');
      article.className = 'card feature-card';
      var title = document.createElement('h3');
      title.textContent = (card.icon ? card.icon + ' ' : '') + (card.title || '');
      article.appendChild(title);
      if (card.items && card.items.length) {
        var list = document.createElement('ul');
        card.items.forEach(function (item) { addText(list, 'li', item); });
        article.appendChild(list);
      }
      addText(article, 'p', card.text, 'feature-card-text');
      grid.appendChild(article);
    });
    section.appendChild(grid);
    addText(section, 'p', group.note, 'note');
    root.appendChild(section);
  });
};