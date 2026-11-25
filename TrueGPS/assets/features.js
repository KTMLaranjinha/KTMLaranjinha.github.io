/* =========================================================
   TrueGPS Speed – TEXTOS DAS FUNCIONALIDADES (por língua)

   COMO ACRESCENTAR UMA LÍNGUA:
   1) copia o bloco  FEATURES.en = { ... };  inteiro
   2) muda o código (fr, es, de, it, ru, hi, id, tr, ja, ko)
   3) traduz os textos (mantém os emojis e a estrutura)
   Sem tradução, a língua mostra o inglês. "br" tem bloco próprio em português do Brasil.

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



/* ------------------------- FR ------------------------- */
FEATURES.fr = {

  intro: [
    "🎯 TrueGPS vise à être la MEILLEURE et la plus personnalisable application GPS/HUD sur le Play Store.",
    "Et pourquoi❓ Parce qu'il a été conçu pour les personnes qui veulent un CONTRÔLE total, et non des solutions fermées."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "Qu'est-ce qui différencie TrueGPS❓", items: [
        "Des dizaines d'options de configuration avancées",
        "Un système de 💰Crédits simple et transparent qui débloque TOUTES les options SANS abonnement obligatoire",
        "Fonctionne avec tout type de véhicule : voiture, moto, vélo, bateau, avion, etc.",
        "Une application complète, simple et rapide",
        "Et il continuera de croître et d'évoluer avec de nouvelles fonctionnalités"
      ]},
      { icon: "🎨", title: "Personnalisation totale du HUD", items: [
        "Couleurs de fond pour 3 plages de vitesse",
        "Des milliers de couleurs à choisir",
        "Des dizaines de polices pour le compteur de vitesse et d'autres informations",
        "Ajustement gratuit de la taille de la police",
        "Dispositions HUD infinies et entièrement configurables"
      ]},
      { icon: "🚗", title: "Profils de véhicules", items: [
        "Profils indépendants pour chaque véhicule",
        "Coûts affichés par profil, avec calcul instantané du coût du trajet",
        "Différents décalages de vitesse pour chaque véhicule",
        "Adaptez facilement la vitesse GPS à votre compteur de vitesse réel"
      ]},
      { icon: "📊", title: "Données, alertes et effets graphiques", items: [
        "Courbes d'accélération et d'accélération latérale",
        "Alertes visuelles et sonores de limitation de vitesse",
        "Effets graphiques dépendant de la vitesse",
        "Différentes unités de mesure",
        "Compteur kilométrique entièrement configurable et 3 compteurs journaliers"
      ]},
      { icon: "🌙", title: "Des plus qui font la différence", items: [
        "Balayage rapide pour basculer entre tous vos HUD",
        "Mode économiseur d'écran avec des citations épiques",
        "Exportez et importez des HUD avec des amis"
      ]},
      { icon: "🧩", title: "Informations présentées à votre manière", items: [
        "Afficher ou masquer toutes les informations à l'écran : temps, trajets, vitesse maximale/moyenne, coûts, crédits, limites, GPS, boussole, etc.",
        "Afficher ou masquer les widgets individuellement ou tous à la fois"
      ]},
      { icon: "🖱️", title: "Interaction rapide et intelligente", items: [
        "Zones de pression et d'appui long configurables et visibles",
        "Créez, dupliquez, supprimez et changez de HUD d'un simple toucher ou glisser",
        "Retournez le HUD pour le pare-brise d'un simple glissement"
      ]}
    ]},

    { icon: "⚙️", title: "Paramètres avancés du HUD",
      lead: "Cette application permet une configuration détaillée du comportement et de l'apparence du HUD (Head-Up Display), vous donnant un contrôle total sur la façon dont les informations sont affichées pendant la conduite.",
      cards: [
      { icon: "🔹", title: "Paramètres généraux", items: [
        "Ajuster le comportement global du HUD",
        "Définir des temps de masquage automatiques",
        "Activer les modes de sécurité (mode sans échec)",
        "Contrôlez la luminosité, l'opacité et les thèmes visuels",
        "Choisissez la langue de l'application"
      ]},
      { icon: "🎨", title: "Apparence et couleurs", items: [
        "Personnalisation totale des couleurs du HUD",
        "Définir les couleurs d'arrière-plan par plage de vitesse",
        "Attribuer des couleurs aux états et aux alertes",
        "Personnaliser les icônes et les images"
      ]},
      { icon: "🚗", title: "Alertes et vitesse", items: [
        "Fixer des limites de vitesse",
        "Alertes visuelles et sonores configurables",
        "Effets graphiques dépendant de la vitesse",
        "Option pour désactiver les effets et les alertes"
      ]},
      { icon: "🔊", title: "Sons et commentaires", items: [
        "Sons pour les interactions, les alertes et les états du HUD",
        "Retour audio en option entièrement configurable",
        "Option pour couper tous les sons"
      ]},
      { icon: "🛑", title: "Sécurité et système", items: [
        "Mode optionnel « Ne pas déranger » (NPD)",
        "Économiseur d'écran pour réduire les distractions",
        "Configuration recommandée avec le véhicule arrêté"
      ]},
      { icon: "💰", title: "Crédits et système premium", items: [
        "Fonctionnalités avancées disponibles via abonnement ou crédits",
        "Des changements critiques peuvent consommer des crédits",
        "Des crédits supplémentaires peuvent éventuellement être obtenus"
      ]}
    ]},

    { icon: "📦", title: "Options d'appui long – Contrôle direct du HUD",
      lead: "Il existe également des options d’appui long qui complètent le panneau de contrôle central de l’application, permettant une interaction directe avec le HUD actif et la gestion des actions sensibles.",
      cards: [
      { icon: "🔒", title: "Verrouillage et protection", items: [
        "Verrouillez les HUD pour éviter les modifications accidentelles",
        "Les HUD verrouillés ne peuvent pas être modifiés ou supprimés",
        "Confirmation explicite avant de verrouiller ou de déverrouiller"
      ]},
      { icon: "🔁", title: "Gestion du HUD", items: [
        "Dupliquer les HUD existants",
        "Création automatique de nouveaux HUD (si autorisé)",
        "Suppression définitive des HUD avec confirmation"
      ]},
      { icon: "💰", title: "Crédits et abonnement", items: [
        "Certaines actions nécessitent un abonnement Premium ou des crédits",
        "Le coût est toujours affiché avant la confirmation",
        "L'application empêche les actions invalides ou non autorisées"
      ]},
      { icon: "🔊", title: "Commentaires visuels et audio", items: [
        "Des sons spécifiques pour les actions critiques",
        "Retour visuel pour les HUD verrouillés ou les actions indisponibles",
        "Les sons dépendent des paramètres globaux de l’application"
      ]},
      { icon: "⚠️", title: "Sauvegardes", items: [
        "Les actions critiques nécessitent une confirmation explicite",
        "Aucun changement irréversible n'est effectué en silence",
        "L'utilisateur garde toujours le contrôle final"
      ]}
    ]},

    { icon: "ℹ️", title: "Informations importantes", cards: [
      { icon: "🧩", title: "Résumé important",
        text: "Cette application a été créée pour offrir une personnalisation et un contrôle maximum du HUD pendant la conduite, en respectant toujours les limitations du système et la responsabilité de l'utilisateur." },
      { icon: "ℹ️", title: "L'application", items: [
        "Il s'agit d'une aide visuelle et informative",
        "Il ne remplace pas les systèmes du véhicule",
        "Cela dépend des capteurs et des autorisations du système"
      ]},
      { icon: "⚠️", title: "Responsabilité", items: [
        "L’utilisation relève de l’entière responsabilité de l’utilisateur",
        "Il est recommandé de configurer l'application avec le véhicule à l'arrêt",
        "Une utilisation excessive des effets peut provoquer une distraction"
      ]},
      { icon: "❌", title: "Le développeur n'est pas responsable de", items: [
        "Amendes, incidents ou accidents",
        "Utilisation abusive de l'application",
        "Modifications volontairement confirmées par l'utilisateur"
      ]},
      { icon: "✅", title: "Remarque importante",
        text: "Cette application ne fournit que des outils : elle ne prend pas de décisions. Utilisez à vos propres risques." }
    ],
    note: "Si vous avez des questions, vous pouvez contacter le développeur par e-mail ou via la page Google Play de l'application." }

  ]
};


/* ------------------------- ES ------------------------- */
FEATURES.es = {

  intro: [
    "🎯 TrueGPS pretende ser la MEJOR y más PERSONALIZABLE aplicación de GPS/HUD en Play Store.",
    "Y por qué❓ Porque fue diseñado para personas que quieren CONTROL total, no soluciones cerradas."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "Qué hace que TrueGPS sea diferente❓", items: [
        "Docenas de opciones de configuración avanzadas",
        "Un sistema de 💰Créditos simple y transparente que desbloquea TODAS las opciones SIN suscripción obligatoria",
        "Funciona con cualquier tipo de vehículo: coche, moto, bicicleta, barco, avión, etc.",
        "Una aplicación completa, sencilla y rápida",
        "Y seguirá creciendo y evolucionando con nuevas funciones"
      ]},
      { icon: "🎨", title: "Personalización total del HUD", items: [
        "Colores de fondo para 3 rangos de velocidad",
        "Miles de colores para elegir",
        "Docenas de fuentes para el velocímetro y otra información",
        "Ajuste gratuito del tamaño de fuente",
        "Diseños HUD infinitos y totalmente configurables"
      ]},
      { icon: "🚗", title: "Perfiles de vehículos", items: [
        "Perfiles independientes para cada vehículo",
        "Costos mostrados por perfil, con cálculo instantáneo del costo del viaje",
        "Diferentes compensaciones de velocidad para cada vehículo.",
        "Haga coincidir fácilmente la velocidad del GPS con su velocímetro real"
      ]},
      { icon: "📊", title: "Datos, Alertas y Efectos Gráficos", items: [
        "Gráficos de aceleración y aceleración lateral",
        "Alertas visuales y sonoras de límite de velocidad",
        "Efectos gráficos que dependen de la velocidad",
        "Diferentes unidades de medida",
        "Odómetro totalmente configurable y 3 contadores de viaje"
      ]},
      { icon: "🌙", title: "Extras que marcan la diferencia", items: [
        "Desliza rápidamente para cambiar entre todos tus HUD",
        "Modo ScreenSaver con citas épicas",
        "Exportar e importar HUD con amigos"
      ]},
      { icon: "🧩", title: "Información mostrada a su manera", items: [
        "Mostrar u ocultar cualquier información en pantalla: tiempo, viajes, velocidad máxima/media, costes, créditos, límites, GPS, brújula, etc.",
        "Mostrar u ocultar widgets individualmente o todos a la vez"
      ]},
      { icon: "🖱️", title: "Interacción rápida e inteligente", items: [
        "Zonas de pulsación larga y pulsación visibles y configurables",
        "Cree, duplique, elimine y cambie HUD con un simple toque o deslice",
        "Gira el HUD del parabrisas con un simple deslizamiento"
      ]}
    ]},

    { icon: "⚙️", title: "Configuración avanzada de HUD",
      lead: "Esta aplicación permite una configuración detallada del comportamiento y apariencia del HUD (Head-Up Display), brindándote control total sobre cómo se muestra la información mientras conduces.",
      cards: [
      { icon: "🔹", title: "Configuración general", items: [
        "Ajustar el comportamiento global del HUD",
        "Establecer tiempos de ocultación automática",
        "Habilitar modos de seguridad (Modo seguro)",
        "Controlar el brillo, la opacidad y los temas visuales",
        "Elige el idioma de la aplicación"
      ]},
      { icon: "🎨", title: "Apariencia y colores", items: [
        "Personalización total del color del HUD",
        "Establecer colores de fondo por rango de velocidad",
        "Asignar colores a estados y alertas",
        "Personaliza iconos e imágenes"
      ]},
      { icon: "🚗", title: "Alertas y Velocidad", items: [
        "Establecer límites de velocidad",
        "Alertas visuales y audibles configurables",
        "Efectos gráficos que dependen de la velocidad",
        "Opción para desactivar efectos y alertas"
      ]},
      { icon: "🔊", title: "Sonidos y comentarios", items: [
        "Sonidos para interacciones, alertas y estados de HUD",
        "Comentarios de audio opcionales y totalmente configurables",
        "Opción para silenciar todos los sonidos"
      ]},
      { icon: "🛑", title: "Seguridad y Sistema", items: [
        "Modo opcional “No molestar” (DND)",
        "ScreenSaver para reducir las distracciones",
        "Configuración recomendada con el vehículo parado"
      ]},
      { icon: "💰", title: "Sistema de Créditos y Premium", items: [
        "Funciones avanzadas disponibles mediante suscripción o créditos",
        "Los cambios críticos pueden consumir créditos",
        "Opcionalmente se pueden obtener créditos adicionales"
      ]}
    ]},

    { icon: "📦", title: "Opciones de pulsación larga: control directo del HUD",
      lead: "También hay opciones de pulsación larga que complementan el panel de control central de la aplicación, permitiendo la interacción directa con el HUD activo y la gestión de acciones sensibles.",
      cards: [
      { icon: "🔒", title: "Bloqueo y Protección", items: [
        "Bloquear HUD para evitar cambios accidentales",
        "Los HUD bloqueados no se pueden editar ni eliminar",
        "Confirmación explícita antes de bloquear o desbloquear"
      ]},
      { icon: "🔁", title: "Gestión de HUD", items: [
        "Duplicar HUD existentes",
        "Creación automática de nuevos HUD (cuando esté permitido)",
        "Eliminación permanente de HUD con confirmación"
      ]},
      { icon: "💰", title: "Créditos y suscripción", items: [
        "Algunas acciones requieren una suscripción Premium o créditos",
        "El coste siempre se muestra antes de la confirmación",
        "La aplicación evita acciones no válidas o no autorizadas"
      ]},
      { icon: "🔊", title: "Comentarios visuales y de audio", items: [
        "Sonidos específicos para acciones críticas.",
        "Comentarios visuales para HUD bloqueados o acciones no disponibles",
        "Los sonidos dependen de la configuración global de la aplicación"
      ]},
      { icon: "⚠️", title: "Salvaguardias", items: [
        "Las acciones críticas requieren confirmación explícita",
        "Ningún cambio irreversible se realiza en silencio",
        "El usuario siempre mantiene el control final"
      ]}
    ]},

    { icon: "ℹ️", title: "Información importante", cards: [
      { icon: "🧩", title: "Resumen importante",
        text: "Esta aplicación fue creada para ofrecer la máxima personalización y control del HUD durante la conducción, respetando siempre las limitaciones del sistema y la responsabilidad del usuario." },
      { icon: "ℹ️", title: "La aplicación", items: [
        "Es una ayuda visual e informativa",
        "No sustituye los sistemas del vehículo",
        "Depende de los sensores y permisos del sistema"
      ]},
      { icon: "⚠️", title: "Responsabilidad", items: [
        "El uso es entera responsabilidad del usuario",
        "Se recomienda configurar la app con el vehículo parado",
        "El uso excesivo de efectos puede causar distracción"
      ]},
      { icon: "❌", title: "El desarrollador no es responsable de", items: [
        "Multas, incidentes o accidentes",
        "Mal uso de la aplicación",
        "Cambios confirmados voluntariamente por el usuario"
      ]},
      { icon: "✅", title: "Nota importante",
        text: "Esta aplicación sólo proporciona herramientas, no toma decisiones. Úselo bajo su propio riesgo." }
    ],
    note: "Si tiene preguntas, puede comunicarse con el desarrollador por correo electrónico o mediante la página de Google Play de la aplicación." }

  ]
};


/* ------------------------- DE ------------------------- */
FEATURES.de = {

  intro: [
    "🎯 TrueGPS möchte die BESTE und ANPASSBARSTE GPS/HUD-App im Play Store sein.",
    "Und warum❓ Weil es für Menschen entwickelt wurde, die die vollständige KONTROLLE und keine geschlossenen Lösungen wünschen."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "Was TrueGPS anders macht❓", items: [
        "Dutzende erweiterte Konfigurationsoptionen",
        "Ein einfaches, transparentes 💰Credits-System, das ALLE Optionen ohne obligatorisches Abonnement freischaltet",
        "Funktioniert mit jedem Fahrzeugtyp: Auto, Motorrad, Fahrrad, Boot, Flugzeug usw.",
        "Eine vollständige, einfache und schnelle App",
        "Und es wird mit neuen Funktionen weiter wachsen und sich weiterentwickeln"
      ]},
      { icon: "🎨", title: "Totale HUD-Anpassung", items: [
        "Hintergrundfarben für 3 Geschwindigkeitsbereiche",
        "Tausende Farben zur Auswahl",
        "Dutzende Schriftarten für den Tacho und andere Informationen",
        "Kostenlose Anpassung der Schriftgröße",
        "Endlose, vollständig konfigurierbare HUD-Layouts"
      ]},
      { icon: "🚗", title: "Fahrzeugprofile", items: [
        "Unabhängige Profile für jedes Fahrzeug",
        "Kosten pro Profil angezeigt, mit sofortiger Fahrtkostenberechnung",
        "Unterschiedliche Geschwindigkeitsversätze für jedes Fahrzeug",
        "Passen Sie die GPS-Geschwindigkeit ganz einfach an Ihren echten Tachometer an"
      ]},
      { icon: "📊", title: "Daten, Warnungen und grafische Effekte", items: [
        "Beschleunigungs- und Querbeschleunigungsdiagramme",
        "Visuelle und akustische Geschwindigkeitswarnungen",
        "Geschwindigkeitsabhängige Grafikeffekte",
        "Verschiedene Maßeinheiten",
        "Vollständig konfigurierbarer Kilometerzähler und 3 Tageskilometerzähler"
      ]},
      { icon: "🌙", title: "Extras, die den Unterschied machen", items: [
        "Wischen Sie schnell, um zwischen allen Ihren HUDs zu wechseln",
        "Bildschirmschonermodus mit epischen Zitaten",
        "HUDs mit Freunden exportieren und importieren"
      ]},
      { icon: "🧩", title: "Informationen, die Ihnen angezeigt werden", items: [
        "Alle Informationen auf dem Bildschirm ein- oder ausblenden: Zeit, Fahrten, Höchst-/Durchschnittsgeschwindigkeit, Kosten, Credits, Limits, GPS, Kompass usw.",
        "Widgets einzeln oder alle auf einmal ein- oder ausblenden"
      ]},
      { icon: "🖱️", title: "Schnelle und intelligente Interaktion", items: [
        "Konfigurierbare, sichtbare Tipp- und Langdruckzonen",
        "Erstellen, duplizieren, löschen und wechseln Sie HUDs mit einem einfachen Tippen oder Wischen",
        "Drehen Sie das HUD für die Windschutzscheibe mit einem einfachen Wischen um"
      ]}
    ]},

    { icon: "⚙️", title: "Erweiterte HUD-Einstellungen",
      lead: "Diese App ermöglicht eine detaillierte Konfiguration des Verhaltens und Erscheinungsbilds des HUD (Head-Up Display) und gibt Ihnen so die vollständige Kontrolle darüber, wie Informationen während der Fahrt angezeigt werden.",
      cards: [
      { icon: "🔹", title: "Allgemeine Einstellungen", items: [
        "Passen Sie das globale HUD-Verhalten an",
        "Automatische Ausblendzeiten festlegen",
        "Sicherheitsmodi aktivieren (Abgesicherter Modus)",
        "Steuern Sie Helligkeit, Deckkraft und visuelle Themen",
        "Wählen Sie die App-Sprache"
      ]},
      { icon: "🎨", title: "Aussehen und Farben", items: [
        "Vollständige HUD-Farbanpassung",
        "Hintergrundfarben nach Geschwindigkeitsbereich festlegen",
        "Weisen Sie Zuständen und Warnungen Farben zu",
        "Passen Sie Symbole und Bilder an"
      ]},
      { icon: "🚗", title: "Warnungen und Geschwindigkeit", items: [
        "Geschwindigkeitsbegrenzungen festlegen",
        "Konfigurierbare visuelle und akustische Warnungen",
        "Geschwindigkeitsabhängige Grafikeffekte",
        "Option zum Deaktivieren von Effekten und Warnungen"
      ]},
      { icon: "🔊", title: "Sounds und Feedback", items: [
        "Töne für HUD-Interaktionen, Warnungen und Zustände",
        "Optionales, vollständig konfigurierbares Audio-Feedback",
        "Option zum Stummschalten aller Töne"
      ]},
      { icon: "🛑", title: "Sicherheit und System", items: [
        "Optionaler Modus „Bitte nicht stören“ (DND)",
        "Bildschirmschoner zur Reduzierung von Ablenkungen",
        "Empfohlenes Setup bei stehendem Fahrzeug"
      ]},
      { icon: "💰", title: "Credits und Premium-System", items: [
        "Erweiterte Funktionen über Abonnement oder Credits verfügbar",
        "Kritische Änderungen können Credits",
        "verbrauchen Zusätzliche Credits können optional erworben werden"
      ]}
    ]},

    { icon: "📦", title: "Optionen für langes Drücken – Direkte HUD-Steuerung",
      lead: "Es gibt auch Optionen für langes Drücken, die das zentrale Bedienfeld der App ergänzen und eine direkte Interaktion mit dem aktiven HUD und die Verwaltung sensibler Aktionen ermöglichen.",
      cards: [
      { icon: "🔒", title: "Verriegelung und Schutz", items: [
        "HUDs sperren, um versehentliche Änderungen zu verhindern",
        "Gesperrte HUDs können nicht bearbeitet oder entfernt werden",
        "Explizite Bestätigung vor dem Sperren oder Entsperren"
      ]},
      { icon: "🔁", title: "HUD-Management", items: [
        "Vorhandene HUDs duplizieren",
        "Automatische Erstellung neuer HUDs (sofern zulässig)",
        "Dauerhafte Entfernung von HUDs mit Bestätigung"
      ]},
      { icon: "💰", title: "Credits und Abonnement", items: [
        "Für einige Aktionen sind ein Premium-Abonnement oder Credits erforderlich",
        "Die Kosten werden immer vor der Bestätigung angezeigt",
        "Die App verhindert ungültige oder nicht autorisierte Aktionen"
      ]},
      { icon: "🔊", title: "Visuelles und akustisches Feedback", items: [
        "Spezifische Geräusche für kritische Aktionen",
        "Visuelles Feedback für gesperrte HUDs oder nicht verfügbare Aktionen",
        "Töne hängen von den globalen Einstellungen der App ab"
      ]},
      { icon: "⚠️", title: "Schutzmaßnahmen", items: [
        "Kritische Aktionen erfordern eine explizite Bestätigung",
        "Keine irreversible Änderung wird stillschweigend vorgenommen",
        "Der Benutzer behält immer die letzte Kontrolle"
      ]}
    ]},

    { icon: "ℹ️", title: "Wichtige Informationen", cards: [
      { icon: "🧩", title: "Wichtige Zusammenfassung",
        text: "Diese App wurde entwickelt, um maximale HUD-Anpassung und Kontrolle während der Fahrt zu bieten, wobei stets die Systembeschränkungen und die Verantwortung des Benutzers berücksichtigt werden." },
      { icon: "ℹ️", title: "Die App", items: [
        "Es ist eine visuelle und informative Hilfe",
        "Es ersetzt nicht die Systeme des Fahrzeugs",
        "Es hängt von Systemsensoren und Berechtigungen ab"
      ]},
      { icon: "⚠️", title: "Verantwortung", items: [
        "Die Nutzung liegt ausschließlich in der Verantwortung des Benutzers",
        "Es wird empfohlen, die App bei stehendem Fahrzeug zu konfigurieren",
        "Übermäßiger Einsatz von Effekten kann zu Ablenkung führen"
      ]},
      { icon: "❌", title: "Der Entwickler ist nicht verantwortlich für", items: [
        "Bußgelder, Zwischenfälle oder Unfälle",
        "Missbrauch der App",
        "Vom Nutzer freiwillig bestätigte Änderungen"
      ]},
      { icon: "✅", title: "Wichtiger Hinweis",
        text: "Diese App stellt nur Werkzeuge zur Verfügung – sie trifft keine Entscheidungen. Die Nutzung erfolgt auf eigene Gefahr." }
    ],
    note: "Bei Fragen können Sie den Entwickler per E-Mail oder über die Google Play-Seite der App kontaktieren." }

  ]
};


/* ------------------------- IT ------------------------- */
FEATURES.it = {

  intro: [
    "🎯 TrueGPS mira a essere l'app GPS/HUD MIGLIORE e PIÙ PERSONALIZZABILE sul Play Store.",
    "E perché❓ Perché è stato progettato per le persone che desiderano il CONTROLLO totale, non soluzioni chiuse."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "Cosa rende TrueGPS diverso❓", items: [
        "Decine di opzioni di configurazione avanzate",
        "Un sistema di 💰Crediti semplice e trasparente che sblocca TUTTE le opzioni SENZA abbonamento obbligatorio",
        "Funziona con qualsiasi tipo di veicolo: auto, moto, bicicletta, barca, aereo, ecc.",
        "Un'app completa, semplice e veloce",
        "E continuerà a crescere ed evolversi con nuove funzionalità"
      ]},
      { icon: "🎨", title: "Personalizzazione totale dell'HUD", items: [
        "Colori di sfondo per 3 gamme di velocità",
        "Migliaia di colori tra cui scegliere",
        "Decine di caratteri per il tachimetro e altre informazioni",
        "Regolazione gratuita della dimensione del carattere",
        "Layout HUD infiniti e completamente configurabili"
      ]},
      { icon: "🚗", title: "Profili dei veicoli", items: [
        "Profili indipendenti per ogni veicolo",
        "Costi visualizzati per profilo, con calcolo istantaneo del costo del viaggio",
        "Compensazioni di velocità diverse per ciascun veicolo",
        "Abbina facilmente la velocità GPS al tuo tachimetro reale"
      ]},
      { icon: "📊", title: "Dati, avvisi ed effetti grafici", items: [
        "Grafici di accelerazione e accelerazione laterale",
        "Avvisi visivi e acustici sui limiti di velocità",
        "Effetti grafici dipendenti dalla velocità",
        "Unità di misura diverse",
        "Contachilometri completamente configurabile e 3 contatori parziali"
      ]},
      { icon: "🌙", title: "Gli extra che fanno la differenza", items: [
        "Scorri rapidamente per passare da un HUD all'altro",
        "Modalità salvaschermo con virgolette epiche",
        "Esporta e importa HUD con gli amici"
      ]},
      { icon: "🧩", title: "Informazioni mostrate a modo tuo", items: [
        "Mostra o nascondi qualsiasi informazione sullo schermo: tempo, viaggi, velocità massima/media, costi, crediti, limiti, GPS, bussola, ecc.",
        "Mostra o nascondi i widget individualmente o tutti in una volta"
      ]},
      { icon: "🖱️", title: "Interazione rapida e intelligente", items: [
        "Zone configurabili e visibili per tocco e pressione prolungata",
        "Crea, duplica, elimina e cambia HUD con un semplice tocco o scorrimento",
        "Capovolgi l'HUD del parabrezza con un semplice tocco"
      ]}
    ]},

    { icon: "⚙️", title: "Impostazioni avanzate dell'HUD",
      lead: "Questa app consente la configurazione dettagliata del comportamento e dell'aspetto dell'HUD (Head-Up Display), offrendoti il ​​controllo totale su come vengono visualizzate le informazioni durante la guida.",
      cards: [
      { icon: "🔹", title: "Impostazioni generali", items: [
        "Regola il comportamento globale dell'HUD",
        "Imposta tempi di nascondimento automatico",
        "Abilita modalità di sicurezza (Modalità provvisoria)",
        "Controlla luminosità, opacità e temi visivi",
        "Scegli la lingua dell'app"
      ]},
      { icon: "🎨", title: "Aspetto e colori", items: [
        "Personalizzazione totale del colore dell'HUD",
        "Imposta i colori di sfondo in base all'intervallo di velocità",
        "Assegna colori a stati e avvisi",
        "Personalizza icone e immagini"
      ]},
      { icon: "🚗", title: "Avvisi e velocità", items: [
        "Imposta i limiti di velocità",
        "Avvisi visivi e acustici configurabili",
        "Effetti grafici dipendenti dalla velocità",
        "Opzione per disabilitare effetti e avvisi"
      ]},
      { icon: "🔊", title: "Suoni e feedback", items: [
        "Suoni per interazioni, avvisi e stati dell'HUD",
        "Feedback audio opzionale e completamente configurabile",
        "Opzione per disattivare tutti i suoni"
      ]},
      { icon: "🛑", title: "Sicurezza e Sistema", items: [
        "Modalità opzionale “Non disturbare” (DND)",
        "ScreenSaver per ridurre le distrazioni",
        "Configurazione consigliata con veicolo fermo"
      ]},
      { icon: "💰", title: "Crediti e Sistema Premium", items: [
        "Funzionalità avanzate disponibili tramite abbonamento o crediti",
        "Modifiche critiche possono consumare crediti",
        "Crediti aggiuntivi possono essere ottenuti facoltativamente"
      ]}
    ]},

    { icon: "📦", title: "Opzioni pressione prolungata – Controllo diretto dell'HUD",
      lead: "Sono inoltre disponibili opzioni di pressione prolungata che completano il pannello di controllo centrale dell'app, consentendo l'interazione diretta con l'HUD attivo e la gestione delle azioni sensibili.",
      cards: [
      { icon: "🔒", title: "Chiusura e protezione", items: [
        "Blocca gli HUD per evitare modifiche accidentali",
        "Gli HUD bloccati non possono essere modificati o rimossi",
        "Conferma esplicita prima del blocco o dello sblocco"
      ]},
      { icon: "🔁", title: "Gestione HUD", items: [
        "Duplica gli HUD esistenti",
        "Creazione automatica di nuovi HUD (quando consentito)",
        "Rimozione permanente degli HUD con conferma"
      ]},
      { icon: "💰", title: "Crediti e abbonamento", items: [
        "Alcune azioni richiedono un abbonamento Premium o crediti",
        "Il costo è sempre mostrato prima della conferma",
        "L'app impedisce azioni non valide o non autorizzate"
      ]},
      { icon: "🔊", title: "Feedback visivo e audio", items: [
        "Suoni specifici per azioni critiche",
        "Feedback visivo per HUD bloccati o azioni non disponibili",
        "I suoni dipendono dalle impostazioni globali dell'app"
      ]},
      { icon: "⚠️", title: "Tutele", items: [
        "Le azioni critiche richiedono una conferma esplicita",
        "Nessuna modifica irreversibile viene apportata silenziosamente",
        "L'utente mantiene sempre il controllo finale"
      ]}
    ]},

    { icon: "ℹ️", title: "Informazioni importanti", cards: [
      { icon: "🧩", title: "Riepilogo importante",
        text: "Questa app è stata creata per offrire la massima personalizzazione e controllo dell'HUD durante la guida, sempre rispettando le limitazioni del sistema e la responsabilità dell'utente." },
      { icon: "ℹ️", title: "L'applicazione", items: [
        "È un aiuto visivo e informativo",
        "Non sostituisce i sistemi del veicolo",
        "Dipende dai sensori e dai permessi del sistema"
      ]},
      { icon: "⚠️", title: "Responsabilità", items: [
        "L’utilizzo è interamente a carico dell’utente",
        "Si consiglia di configurare l'app con il veicolo fermo",
        "L'uso eccessivo degli effetti può causare distrazione"
      ]},
      { icon: "❌", title: "Lo sviluppatore non è responsabile per", items: [
        "Multe, incidenti o incidenti",
        "Uso improprio dell'app",
        "Modifiche confermate volontariamente dall'utente"
      ]},
      { icon: "✅", title: "Nota importante",
        text: "Questa app fornisce solo strumenti, non prende decisioni. Utilizzare a proprio rischio." }
    ],
    note: "In caso di domande, puoi contattare lo sviluppatore via email o tramite la pagina Google Play dell'app." }

  ]
};


/* ------------------------- RU ------------------------- */
FEATURES.ru = {

  intro: [
    "🎯 TrueGPS стремится стать ЛУЧШИМ и НАСТРАИВАЕМЫМ приложением GPS/HUD в магазине Play Store.",
    "И почему❓ Потому что он был разработан для людей, которым нужен полный КОНТРОЛЬ, а не закрытые решения."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "Чем отличается TrueGPS❓", items: [
        "Десятки расширенных возможностей конфигурации",
        "Простая и прозрачная система 💰Кредитов, которая открывает ВСЕ опции БЕЗ обязательной подписки",
        "Работает с любым типом транспортных средств: автомобилем, мотоциклом, велосипедом, лодкой, самолетом и т. д.",
        "Полноценное, простое и быстрое приложение",
        "И он будет продолжать расти и развиваться с появлением новых функций"
      ]},
      { icon: "🎨", title: "Полная настройка HUD", items: [
        "Цвета фона для 3 диапазонов скоростей",
        "Тысячи цветов на выбор",
        "Десятки шрифтов для спидометра и другой информации",
        "Бесплатная регулировка размера шрифта",
        "Бесконечные, полностью настраиваемые макеты HUD"
      ]},
      { icon: "🚗", title: "Профили транспортных средств", items: [
        "Независимые профили для каждого автомобиля",
        "Затраты показаны для каждого профиля с мгновенным расчетом стоимости поездки",
        "Различные смещения скорости для каждого автомобиля",
        "Легко сопоставьте скорость GPS с реальным спидометром"
      ]},
      { icon: "📊", title: "Данные, оповещения и графические эффекты", items: [
        "Диаграммы ускорения и поперечного ускорения",
        "Визуальные и звуковые оповещения об ограничении скорости",
        "Графические эффекты, зависящие от скорости",
        "Различные единицы измерения",
        "Полностью настраиваемый одометр и 3 счетчика поездок"
      ]},
      { icon: "🌙", title: "Дополнительные преимущества, которые имеют значение", items: [
        "Быстрое пролистывание для переключения между всеми вашими HUD",
        "Режим ScreenSaver с эпическими цитатами",
        "Экспортируйте и импортируйте HUD с друзьями"
      ]},
      { icon: "🧩", title: "Информация указана на вашем пути", items: [
        "Показать или скрыть любую информацию на экране: время, поездки, максимальную/среднюю скорость, стоимость, кредиты, лимиты, GPS, компас и т. д.",
        "Показать или скрыть виджеты по отдельности или все сразу"
      ]},
      { icon: "🖱️", title: "Быстрое и умное взаимодействие", items: [
        "Настраиваемые, видимые зоны касания и длительного нажатия",
        "Создавайте, дублируйте, удаляйте и переключайте HUD простым касанием или смахиванием",
        "Переверните HUD на лобовое стекло простым смахиванием"
      ]}
    ]},

    { icon: "⚙️", title: "Расширенные настройки HUD",
      lead: "Это приложение позволяет детально настраивать поведение и внешний вид HUD (проекционного дисплея), предоставляя вам полный контроль над отображением информации во время вождения.",
      cards: [
      { icon: "🔹", title: "Общие настройки", items: [
        "Настройте глобальное поведение HUD",
        "Установить время автоматического скрытия",
        "Включить безопасные режимы (Safe Mode)",
        "Управление яркостью, непрозрачностью и визуальными темами",
        "Выберите язык приложения"
      ]},
      { icon: "🎨", title: "Внешний вид и цвета", items: [
        "Полная настройка цвета HUD",
        "Установить цвета фона в зависимости от диапазона скорости",
        "Назначайте цвета состояниям и оповещениям",
        "Настройка значков и изображений"
      ]},
      { icon: "🚗", title: "Оповещения и скорость", items: [
        "Установить ограничения скорости",
        "Настраиваемые визуальные и звуковые оповещения",
        "Графические эффекты, зависящие от скорости",
        "Возможность отключения эффектов и оповещений"
      ]},
      { icon: "🔊", title: "Звуки и обратная связь", items: [
        "Звуки для взаимодействия, оповещений и состояний HUD",
        "Дополнительная, полностью настраиваемая звуковая обратная связь",
        "Возможность отключить все звуки"
      ]},
      { icon: "🛑", title: "Безопасность и система", items: [
        "Дополнительный режим «Не беспокоить» (DND)",
        "ScreenSaver, чтобы не отвлекаться",
        "Рекомендуемая настройка при остановленном автомобиле"
      ]},
      { icon: "💰", title: "Кредиты и система премий", items: [
        "Расширенные функции доступны по подписке или кредитам",
        "Критические изменения могут потребовать кредитов",
        "При желании можно получить дополнительные кредиты"
      ]}
    ]},

    { icon: "📦", title: "Опции длительного нажатия – прямое управление HUD",
      lead: "Существуют также опции длительного нажатия, которые дополняют центральную панель управления приложением, позволяя напрямую взаимодействовать с активным HUD и управлять важными действиями.",
      cards: [
      { icon: "🔒", title: "Блокировка и защита", items: [
        "Заблокируйте HUD, чтобы предотвратить случайные изменения",
        "Заблокированные HUD нельзя редактировать или удалять",
        "Явное подтверждение перед блокировкой или разблокировкой"
      ]},
      { icon: "🔁", title: "Управление HUD", items: [
        "Дублировать существующие HUD",
        "Автоматическое создание новых HUD (если разрешено)",
        "Постоянное удаление HUD с подтверждением"
      ]},
      { icon: "💰", title: "Кредиты и подписка", items: [
        "Для некоторых действий требуется Премиум-подписка или кредиты",
        "Стоимость всегда отображается до подтверждения",
        "Приложение предотвращает недопустимые или несанкционированные действия"
      ]},
      { icon: "🔊", title: "Визуальная и аудио обратная связь", items: [
        "Специальные звуки для критических действий",
        "Визуальная обратная связь для заблокированных HUD или недоступных действий",
        "Звуки зависят от глобальных настроек приложения"
      ]},
      { icon: "⚠️", title: "Гарантии", items: [
        "Критические действия требуют явного подтверждения",
        "Ни одно необратимое изменение не происходит молча",
        "Пользователь всегда сохраняет окончательный контроль"
      ]}
    ]},

    { icon: "ℹ️", title: "Важная информация", cards: [
      { icon: "🧩", title: "Важная сводка",
        text: "Это приложение было создано, чтобы предложить максимальную настройку и контроль HUD во время вождения, всегда соблюдая ограничения системы и ответственность пользователя." },
      { icon: "ℹ️", title: "Приложение", items: [
        "Это наглядное и информационное пособие",
        "Не заменяет системы автомобиля",
        "Это зависит от системных датчиков и разрешений"
      ]},
      { icon: "⚠️", title: "Ответственность", items: [
        "Использование полностью лежит на пользователе",
        "Рекомендуется настраивать приложение при остановленном автомобиле",
        "Чрезмерное использование эффектов может отвлечь внимание"
      ]},
      { icon: "❌", title: "Разработчик не несет ответственности за", items: [
        "Штрафы, инциденты или несчастные случаи",
        "Неправильное использование приложения",
        "Изменения добровольно подтверждены пользователем"
      ]},
      { icon: "✅", title: "Важное примечание",
        text: "Это приложение только предоставляет инструменты, но не принимает решения. Используйте на свой страх и риск." }
    ],
    note: "Если у вас есть вопросы, вы можете связаться с разработчиком по электронной почте или через страницу приложения в Google Play." }

  ]
};


/* ------------------------- TR ------------------------- */
FEATURES.tr = {

  intro: [
    "🎯 TrueGPS, Play Store'daki EN İYİ ve en ÖZELLEŞTİRİLEBİLİR GPS/HUD uygulaması olmayı hedeflemektedir.",
    "Ve nedeni❓ Çünkü kapalı çözümler değil, tam KONTROL isteyen insanlar için tasarlandı."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "TrueGPS'i farklı kılan şey nedir❓", items: [
        "Onlarca gelişmiş konfigürasyon seçeneği",
        "Zorunlu abonelik OLMADAN TÜM seçeneklerin kilidini açan basit, şeffaf bir 💰Kredi sistemi",
        "Her türlü araçla çalışır: araba, motosiklet, bisiklet, tekne, uçak vb.",
        "Eksiksiz, basit ve hızlı bir uygulama",
        "Ve yeni özelliklerle büyümeye ve gelişmeye devam edecek"
      ]},
      { icon: "🎨", title: "Toplam HUD Özelleştirmesi", items: [
        "3 hız aralığı için arka plan renkleri",
        "Binlerce renk seçeneği",
        "Hız göstergesi ve diğer bilgiler için düzinelerce yazı tipi",
        "Ücretsiz yazı tipi boyutu ayarı",
        "Sonsuz, tamamen yapılandırılabilir HUD düzenleri"
      ]},
      { icon: "🚗", title: "Araç Profilleri", items: [
        "Her araç için bağımsız profiller",
        "Anında yolculuk maliyeti hesaplamasıyla profil başına gösterilen maliyetler",
        "Her araç için farklı hız ofsetleri",
        "GPS hızını gerçek hız göstergenizle kolayca eşleştirin"
      ]},
      { icon: "📊", title: "Veriler, Uyarılar ve Grafik Efektleri", items: [
        "İvme ve yanal ivme çizelgeleri",
        "Görsel ve sesli hız limiti uyarıları",
        "Hıza bağlı grafik efektleri",
        "Farklı ölçü birimleri",
        "Tamamen yapılandırılabilir kilometre sayacı ve 3 günlük sayaç"
      ]},
      { icon: "🌙", title: "Fark yaratan ekstralar", items: [
        "Tüm HUD'larınız arasında geçiş yapmak için hızlıca kaydırın",
        "Destansı alıntılarla Ekran Koruyucu modu",
        "Arkadaşlarınızla HUD'ları içe ve dışa aktarın"
      ]},
      { icon: "🧩", title: "Size Gösterilen Bilgiler", items: [
        "Ekranda herhangi bir bilgiyi gösterin veya gizleyin: süre, yolculuklar, maksimum/ortalama hız, maliyetler, krediler, limitler, GPS, pusula vb.",
        "Widget'ları tek tek veya tümünü aynı anda gösterin veya gizleyin"
      ]},
      { icon: "🖱️", title: "Hızlı ve Akıllı Etkileşim", items: [
        "Yapılandırılabilir, görünür dokunma ve uzun basma bölgeleri",
        "Basit bir dokunuşla veya kaydırmayla HUD'lar oluşturun, çoğaltın, silin ve değiştirin",
        "Basit bir kaydırma hareketi ile ön cam için HUD'yi çevirin"
      ]}
    ]},

    { icon: "⚙️", title: "Gelişmiş HUD Ayarları",
      lead: "Bu uygulama, HUD'un (Head-Up Display) davranışının ve görünümünün ayrıntılı yapılandırılmasına olanak tanıyarak, sürüş sırasında bilgilerin nasıl gösterildiği konusunda tam kontrol sahibi olmanızı sağlar.",
      cards: [
      { icon: "🔹", title: "Genel Ayarlar", items: [
        "Genel HUD davranışını ayarlayın",
        "Otomatik gizleme sürelerini ayarlayın",
        "Güvenlik modlarını etkinleştirin (Güvenli Mod)",
        "Parlaklığı, opaklığı ve görsel temaları kontrol edin",
        "Uygulama dilini seçin"
      ]},
      { icon: "🎨", title: "Görünüm ve Renkler", items: [
        "Toplam HUD renk özelleştirmesi",
        "Arka plan renklerini hız aralığına göre ayarlayın",
        "Durumlara ve uyarılara renk atama",
        "Simgeleri ve görselleri özelleştirin"
      ]},
      { icon: "🚗", title: "Uyarılar ve Hız", items: [
        "Hız sınırlarını ayarlayın",
        "Yapılandırılabilir görsel ve işitsel uyarılar",
        "Hıza bağlı grafik efektleri",
        "Efektleri ve uyarıları devre dışı bırakma seçeneği"
      ]},
      { icon: "🔊", title: "Sesler ve Geri Bildirim", items: [
        "HUD etkileşimleri, uyarıları ve durumları için sesler",
        "İsteğe bağlı, tamamen yapılandırılabilir sesli geri bildirim",
        "Tüm sesleri kapatma seçeneği"
      ]},
      { icon: "🛑", title: "Güvenlik ve Sistem", items: [
        "İsteğe bağlı “Rahatsız Etmeyin” (DND) modu",
        "Dikkat dağıtıcı unsurları azaltmak için Ekran Koruyucu",
        "Araç dururken önerilen kurulum"
      ]},
      { icon: "💰", title: "Kredi ve Prim Sistemi", items: [
        "Abonelik veya kredi yoluyla sunulan gelişmiş özellikler",
        "Kritik değişiklikler kredi tüketebilir",
        "İsteğe bağlı olarak ek krediler alınabilir"
      ]}
    ]},

    { icon: "📦", title: "Uzun Basma Seçenekleri – Doğrudan HUD Kontrolü",
      lead: "Ayrıca uygulamanın merkezi kontrol panelini tamamlayan, aktif HUD ile doğrudan etkileşime ve hassas eylemlerin yönetimine olanak tanıyan uzun basma seçenekleri de bulunmaktadır.",
      cards: [
      { icon: "🔒", title: "Kilitleme ve Koruma", items: [
        "Yanlışlıkla yapılan değişiklikleri önlemek için HUD'ları kilitleyin",
        "Kilitli HUD'lar düzenlenemez veya kaldırılamaz",
        "Kilitlemeden veya kilidi açmadan önce açık onay"
      ]},
      { icon: "🔁", title: "HUD Yönetimi", items: [
        "Mevcut HUD'ları çoğaltın",
        "Yeni HUD'ların otomatik olarak oluşturulması (izin verildiğinde)",
        "Onay ile HUD'ların kalıcı olarak kaldırılması"
      ]},
      { icon: "💰", title: "Krediler ve Abonelik", items: [
        "Bazı eylemler Premium abonelik veya kredi gerektirir",
        "Maliyet her zaman onaydan önce gösterilir",
        "Uygulama geçersiz veya yetkisiz işlemleri önler"
      ]},
      { icon: "🔊", title: "Görsel ve Sesli Geri Bildirim", items: [
        "Kritik eylemler için özel sesler",
        "Kilitli HUD'lar veya kullanılamayan eylemler için görsel geri bildirim",
        "Sesler uygulamanın genel ayarlarına bağlıdır"
      ]},
      { icon: "⚠️", title: "Korumalar", items: [
        "Kritik eylemler açık onay gerektirir",
        "Geri dönüşü olmayan hiçbir değişiklik sessizce yapılmaz",
        "Kullanıcı her zaman son kontrolü elinde tutar"
      ]}
    ]},

    { icon: "ℹ️", title: "Önemli bilgi", cards: [
      { icon: "🧩", title: "Önemli Özet",
        text: "Bu uygulama, sürüş sırasında maksimum HUD özelleştirmesi ve kontrolü sunmak, her zaman sistem sınırlamalarına ve kullanıcının sorumluluğuna saygı göstermek için oluşturuldu." },
      { icon: "ℹ️", title: "Uygulama", items: [
        "Görsel ve bilgilendirme amaçlıdır",
        "Aracın sistemlerinin yerini almaz",
        "Sistem sensörlerine ve izinlere bağlıdır"
      ]},
      { icon: "⚠️", title: "Sorumluluk", items: [
        "Kullanımı tamamen kullanıcının sorumluluğundadır",
        "Uygulamanın araç dururken yapılandırılması önerilir",
        "Efektlerin aşırı kullanımı dikkatin dağılmasına neden olabilir"
      ]},
      { icon: "❌", title: "Geliştirici", items: [
        "'den sorumlu değildir. Para cezaları, olaylar veya kazalar",
        "Uygulamanın kötüye kullanılması",
        "Kullanıcı tarafından gönüllü olarak onaylanan değişiklikler"
      ]},
      { icon: "✅", title: "Önemli Not",
        text: "Bu uygulama yalnızca araçlar sağlar; karar vermez. Riski size ait olmak üzere kullanın." }
    ],
    note: "Sorularınız varsa geliştiriciyle e-posta yoluyla veya uygulamanın Google Play sayfası aracılığıyla iletişime geçebilirsiniz." }

  ]
};


/* ------------------------- ID ------------------------- */
FEATURES.id = {

  intro: [
    "🎯 TrueGPS bertujuan untuk menjadi aplikasi GPS/HUD TERBAIK dan paling DAPAT DISESUAIKAN di Play Store.",
    "Dan alasannya❓ Karena ini dirancang untuk orang-orang yang menginginkan KONTROL total, bukan solusi tertutup."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "Apa yang membuat TrueGPS berbeda❓", items: [
        "Lusinan opsi konfigurasi lanjutan",
        "Sistem 💰Kredit sederhana dan transparan yang membuka SEMUA opsi tanpa berlangganan wajib",
        "Dapat digunakan dengan semua jenis kendaraan: mobil, sepeda motor, sepeda, perahu, pesawat terbang, dll.",
        "Aplikasi yang lengkap, sederhana dan cepat",
        "Dan itu akan terus tumbuh dan berkembang dengan fitur-fitur baru"
      ]},
      { icon: "🎨", title: "Total Kustomisasi HUD", items: [
        "Warna latar belakang untuk 3 rentang kecepatan",
        "Ribuan warna untuk dipilih",
        "Puluhan font untuk speedometer dan informasi lainnya",
        "Penyesuaian ukuran font gratis",
        "Tata letak HUD yang tak ada habisnya dan dapat dikonfigurasi sepenuhnya"
      ]},
      { icon: "🚗", title: "Profil Kendaraan", items: [
        "Profil independen untuk setiap kendaraan",
        "Biaya ditampilkan per profil, dengan perhitungan biaya perjalanan instan",
        "Offset kecepatan yang berbeda untuk setiap kendaraan",
        "Sesuaikan kecepatan GPS dengan mudah dengan speedometer asli Anda"
      ]},
      { icon: "📊", title: "Data, Peringatan dan Efek Grafis", items: [
        "Grafik percepatan dan percepatan lateral",
        "Peringatan batas kecepatan visual dan suara",
        "Efek grafis yang bergantung pada kecepatan",
        "Satuan pengukuran yang berbeda",
        "Odometer yang dapat dikonfigurasi sepenuhnya dan 3 penghitung perjalanan"
      ]},
      { icon: "🌙", title: "Ekstra yang membuat perbedaan", items: [
        "Gesek cepat untuk beralih di antara semua HUD Anda",
        "Mode ScreenSaver dengan kutipan epik",
        "Ekspor dan impor HUD dengan teman"
      ]},
      { icon: "🧩", title: "Informasi Ditunjukkan Kepada Anda", items: [
        "Tampilkan atau sembunyikan informasi apa pun di layar: waktu, perjalanan, kecepatan maks/rata-rata, biaya, kredit, batas, GPS, kompas, dll.",
        "Menampilkan atau menyembunyikan widget satu per satu atau sekaligus"
      ]},
      { icon: "🖱️", title: "Interaksi Cepat dan Cerdas", items: [
        "Zona ketuk dan tekan lama yang dapat dikonfigurasi dan terlihat",
        "Buat, duplikasi, hapus, dan alihkan HUD dengan satu ketukan atau gesek",
        "Balikkan HUD untuk kaca depan dengan gesekan sederhana"
      ]}
    ]},

    { icon: "⚙️", title: "Pengaturan HUD Tingkat Lanjut",
      lead: "Aplikasi ini memungkinkan konfigurasi mendetail tentang perilaku dan tampilan HUD (Tampilan Head-Up), memberi Anda kendali penuh atas bagaimana informasi ditampilkan saat mengemudi.",
      cards: [
      { icon: "🔹", title: "Pengaturan Umum", items: [
        "Sesuaikan perilaku HUD global",
        "Atur waktu sembunyi otomatis",
        "Aktifkan mode keamanan (Mode Aman)",
        "Kontrol kecerahan, opasitas, dan tema visual",
        "Pilih bahasa aplikasi"
      ]},
      { icon: "🎨", title: "Penampilan dan Warna", items: [
        "Total kustomisasi warna HUD",
        "Atur warna latar belakang berdasarkan rentang kecepatan",
        "Tetapkan warna ke negara bagian dan peringatan",
        "Sesuaikan ikon dan gambar"
      ]},
      { icon: "🚗", title: "Peringatan dan Kecepatan", items: [
        "Tetapkan batas kecepatan",
        "Peringatan visual dan suara yang dapat dikonfigurasi",
        "Efek grafis yang bergantung pada kecepatan",
        "Pilihan untuk menonaktifkan efek dan peringatan"
      ]},
      { icon: "🔊", title: "Suara dan Masukan", items: [
        "Suara untuk interaksi, peringatan, dan status HUD",
        "Umpan balik audio opsional yang dapat dikonfigurasi sepenuhnya",
        "Pilihan untuk mematikan semua suara"
      ]},
      { icon: "🛑", title: "Keamanan dan Sistem", items: [
        "Mode opsional “Jangan Ganggu” (DND)",
        "ScreenSaver untuk mengurangi gangguan",
        "Pengaturan yang disarankan dengan kendaraan berhenti"
      ]},
      { icon: "💰", title: "Kredit dan Sistem Premium", items: [
        "Fitur lanjutan tersedia melalui langganan atau kredit",
        "Perubahan penting dapat menghabiskan kredit",
        "Kredit tambahan secara opsional dapat diperoleh"
      ]}
    ]},

    { icon: "📦", title: "Opsi Tekan Lama – Kontrol HUD Langsung",
      lead: "Ada juga opsi tekan lama yang melengkapi panel kontrol pusat aplikasi, memungkinkan interaksi langsung dengan HUD aktif dan pengelolaan tindakan sensitif.",
      cards: [
      { icon: "🔒", title: "Penguncian dan Perlindungan", items: [
        "Kunci HUD untuk mencegah perubahan yang tidak disengaja",
        "HUD yang terkunci tidak dapat diedit atau dihapus",
        "Konfirmasi eksplisit sebelum mengunci atau membuka kunci"
      ]},
      { icon: "🔁", title: "Manajemen HUD", items: [
        "Gandakan HUD yang ada",
        "Pembuatan HUD baru secara otomatis (jika diizinkan)",
        "Penghapusan HUD secara permanen dengan konfirmasi"
      ]},
      { icon: "💰", title: "Kredit dan Langganan", items: [
        "Beberapa tindakan memerlukan langganan Premium atau kredit",
        "Biaya selalu ditampilkan sebelum konfirmasi",
        "Aplikasi ini mencegah tindakan tidak valid atau tidak sah"
      ]},
      { icon: "🔊", title: "Umpan Balik Visual dan Audio", items: [
        "Suara khusus untuk tindakan kritis",
        "Umpan balik visual untuk HUD yang terkunci atau tindakan yang tidak tersedia",
        "Suara bergantung pada pengaturan global aplikasi"
      ]},
      { icon: "⚠️", title: "Perlindungan", items: [
        "Tindakan kritis memerlukan konfirmasi eksplisit",
        "Tidak ada perubahan permanen yang dilakukan secara diam-diam",
        "Pengguna selalu memegang kendali akhir"
      ]}
    ]},

    { icon: "ℹ️", title: "Informasi penting", cards: [
      { icon: "🧩", title: "Ringkasan Penting",
        text: "Aplikasi ini dibuat untuk menawarkan penyesuaian dan kontrol HUD maksimal saat mengemudi, selalu menghormati batasan sistem dan tanggung jawab pengguna." },
      { icon: "ℹ️", title: "Aplikasi", items: [
        "Ini adalah bantuan visual dan informasi",
        "Itu tidak menggantikan sistem kendaraan",
        "Itu tergantung pada sensor sistem dan izin"
      ]},
      { icon: "⚠️", title: "Tanggung jawab", items: [
        "Penggunaan sepenuhnya menjadi tanggung jawab pengguna",
        "Disarankan untuk mengonfigurasi aplikasi dengan kendaraan berhenti",
        "Penggunaan efek yang berlebihan dapat menyebabkan gangguan"
      ]},
      { icon: "❌", title: "Pengembang tidak bertanggung jawab atas", items: [
        "Denda, insiden atau kecelakaan",
        "Penyalahgunaan aplikasi",
        "Perubahan dikonfirmasi secara sukarela oleh pengguna"
      ]},
      { icon: "✅", title: "Catatan Penting",
        text: "Aplikasi ini hanya menyediakan alat — tidak membuat keputusan. Gunakan dengan risiko Anda sendiri." }
    ],
    note: "Jika Anda memiliki pertanyaan, Anda dapat menghubungi pengembang melalui email atau melalui halaman Google Play aplikasi." }

  ]
};


/* ------------------------- HI ------------------------- */
FEATURES.hi = {

  intro: [
    "🎯 ट्रूजीपीएस का लक्ष्य प्ले स्टोर पर सबसे अच्छा और सबसे अनुकूलन योग्य जीपीएस/एचयूडी ऐप बनना है।",
    "और क्यों❓ क्योंकि यह उन लोगों के लिए डिज़ाइन किया गया था जो पूर्ण नियंत्रण चाहते हैं, बंद समाधान नहीं।"
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "TrueGPS को क्या अलग बनाता है❓", items: [
        "दर्जनों उन्नत कॉन्फ़िगरेशन विकल्प",
        "एक सरल, पारदर्शी 💰क्रेडिट प्रणाली जो बिना किसी अनिवार्य सदस्यता के सभी विकल्पों को अनलॉक करती है",
        "किसी भी प्रकार के वाहन के साथ काम करता है: कार, मोटरसाइकिल, साइकिल, नाव, विमान, आदि।",
        "एक संपूर्ण, सरल और तेज़ ऐप",
        "और यह नई सुविधाओं के साथ बढ़ता और विकसित होता रहेगा"
      ]},
      { icon: "🎨", title: "कुल HUD अनुकूलन", items: [
        "3 गति श्रेणियों के लिए पृष्ठभूमि रंग",
        "चुनने के लिए हज़ारों रंग",
        "स्पीडोमीटर और अन्य जानकारी के लिए दर्जनों फ़ॉन्ट",
        "नि:शुल्क फ़ॉन्ट आकार समायोजन",
        "अंतहीन, पूरी तरह से कॉन्फ़िगर करने योग्य HUD लेआउट"
      ]},
      { icon: "🚗", title: "वाहन प्रोफाइल", items: [
        "प्रत्येक वाहन के लिए स्वतंत्र प्रोफ़ाइल",
        "तत्काल यात्रा लागत गणना के साथ, प्रति प्रोफ़ाइल लागत दर्शाई गई है",
        "प्रत्येक वाहन के लिए अलग-अलग गति ऑफसेट",
        "जीपीएस गति को आसानी से अपने वास्तविक स्पीडोमीटर से मिलाएं"
      ]},
      { icon: "📊", title: "डेटा, अलर्ट और ग्राफ़िक प्रभाव", items: [
        "त्वरण और पार्श्व त्वरण चार्ट",
        "दृश्य और श्रव्य गति सीमा अलर्ट",
        "गति-निर्भर ग्राफ़िक प्रभाव",
        "माप की विभिन्न इकाइयाँ",
        "पूरी तरह से कॉन्फ़िगर करने योग्य ओडोमीटर और 3 ट्रिप काउंटर"
      ]},
      { icon: "🌙", title: "अतिरिक्त चीज़ें जो फर्क लाती हैं", items: [
        "अपने सभी HUDs के बीच स्विच करने के लिए त्वरित स्वाइप करें",
        "महाकाव्य उद्धरण के साथ स्क्रीनसेवर मोड",
        "दोस्तों के साथ HUDs का निर्यात और आयात करें"
      ]},
      { icon: "🧩", title: "सूचना ने आपका रास्ता दिखाया", items: [
        "स्क्रीन पर कोई भी जानकारी दिखाएँ या छिपाएँ: समय, यात्राएँ, अधिकतम/औसत गति, लागत, क्रेडिट, सीमाएँ, जीपीएस, कंपास, आदि।",
        "विजेट्स को अलग-अलग या सभी को एक साथ दिखाएँ या छिपाएँ"
      ]},
      { icon: "🖱️", title: "त्वरित और स्मार्ट इंटरैक्शन", items: [
        "कॉन्फ़िगर करने योग्य, दृश्यमान टैप और लंबे समय तक प्रेस करने वाले क्षेत्र",
        "एक साधारण टैप या स्वाइप से HUD बनाएं, डुप्लिकेट करें, हटाएं और स्विच करें",
        "एक साधारण स्वाइप से विंडशील्ड के लिए HUD को पलटें"
      ]}
    ]},

    { icon: "⚙️", title: "उन्नत HUD सेटिंग्स",
      lead: "यह ऐप HUD (हेड-अप डिस्प्ले) के व्यवहार और स्वरूप की विस्तृत कॉन्फ़िगरेशन की अनुमति देता है, जिससे आपको ड्राइविंग के दौरान जानकारी कैसे दिखाई जाती है, इस पर पूरा नियंत्रण मिलता है।",
      cards: [
      { icon: "🔹", title: "सामान्य सेटिंग्स", items: [
        "वैश्विक HUD व्यवहार को समायोजित करें",
        "स्वचालित छिपाने का समय सेट करें",
        "सुरक्षा मोड सक्षम करें (सुरक्षित मोड)",
        "चमक, अस्पष्टता और दृश्य विषयों को नियंत्रित करें",
        "ऐप भाषा चुनें"
      ]},
      { icon: "🎨", title: "रूप और रंग", items: [
        "कुल HUD रंग अनुकूलन",
        "गति सीमा के अनुसार पृष्ठभूमि रंग सेट करें",
        "राज्यों और अलर्टों को रंग निर्दिष्ट करें",
        "चिह्न और छवियाँ अनुकूलित करें"
      ]},
      { icon: "🚗", title: "अलर्ट और स्पीड", items: [
        "गति सीमा निर्धारित करें",
        "कॉन्फ़िगर करने योग्य दृश्य और श्रव्य अलर्ट",
        "गति-निर्भर ग्राफ़िक प्रभाव",
        "प्रभाव और अलर्ट अक्षम करने का विकल्प"
      ]},
      { icon: "🔊", title: "ध्वनियाँ और प्रतिक्रिया", items: [
        "HUD इंटरैक्शन, अलर्ट और स्थितियों के लिए ध्वनियाँ",
        "वैकल्पिक, पूरी तरह से कॉन्फ़िगर करने योग्य ऑडियो फीडबैक",
        "सभी ध्वनियों को म्यूट करने का विकल्प"
      ]},
      { icon: "🛑", title: "सुरक्षा एवं व्यवस्था", items: [
        "वैकल्पिक \"परेशान न करें\" (डीएनडी) मोड",
        "विकर्षणों को कम करने के लिए स्क्रीनसेवर",
        "वाहन रुकने के साथ अनुशंसित सेटअप"
      ]},
      { icon: "💰", title: "क्रेडिट और प्रीमियम प्रणाली", items: [
        "सदस्यता या क्रेडिट के माध्यम से उपलब्ध उन्नत सुविधाएँ",
        "महत्वपूर्ण परिवर्तन क्रेडिट का उपभोग कर सकते हैं",
        "अतिरिक्त क्रेडिट वैकल्पिक रूप से प्राप्त किया जा सकता है"
      ]}
    ]},

    { icon: "📦", title: "लंबे समय तक प्रेस करने के विकल्प - प्रत्यक्ष HUD नियंत्रण",
      lead: "लंबे समय तक प्रेस करने के विकल्प भी हैं जो ऐप के केंद्रीय नियंत्रण पैनल को पूरक करते हैं, जिससे सक्रिय एचयूडी के साथ सीधे संपर्क और संवेदनशील कार्यों के प्रबंधन की अनुमति मिलती है।",
      cards: [
      { icon: "🔒", title: "लॉकिंग और सुरक्षा", items: [
        "आकस्मिक परिवर्तनों को रोकने के लिए HUD को लॉक करें",
        "लॉक किए गए HUDs को संपादित या हटाया नहीं जा सकता",
        "लॉक या अनलॉक करने से पहले स्पष्ट पुष्टि"
      ]},
      { icon: "🔁", title: "एचयूडी प्रबंधन", items: [
        "मौजूदा HUDs को डुप्लिकेट करें",
        "नए HUD का स्वचालित निर्माण (जब अनुमति हो)",
        "पुष्टिकरण के साथ HUD का स्थायी निष्कासन"
      ]},
      { icon: "💰", title: "क्रेडिट और सदस्यता", items: [
        "कुछ कार्यों के लिए प्रीमियम सदस्यता या क्रेडिट की आवश्यकता होती है",
        "लागत हमेशा पुष्टि से पहले दिखाई जाती है",
        "ऐप अमान्य या अनधिकृत कार्यों को रोकता है"
      ]},
      { icon: "🔊", title: "दृश्य और श्रव्य प्रतिक्रिया", items: [
        "महत्वपूर्ण क्रियाओं के लिए विशिष्ट ध्वनियाँ",
        "लॉक किए गए HUD या अनुपलब्ध कार्यों के लिए दृश्य प्रतिक्रिया",
        "ध्वनियाँ ऐप की वैश्विक सेटिंग्स पर निर्भर करती हैं"
      ]},
      { icon: "⚠️", title: "सुरक्षा उपाय", items: [
        "महत्वपूर्ण कार्यों के लिए स्पष्ट पुष्टि की आवश्यकता होती है",
        "कोई भी अपरिवर्तनीय परिवर्तन चुपचाप नहीं किया जाता",
        "उपयोगकर्ता हमेशा अंतिम नियंत्रण रखता है"
      ]}
    ]},

    { icon: "ℹ️", title: "महत्वपूर्ण जानकारी", cards: [
      { icon: "🧩", title: "महत्वपूर्ण सारांश",
        text: "यह ऐप ड्राइविंग के दौरान अधिकतम HUD अनुकूलन और नियंत्रण प्रदान करने के लिए बनाया गया था, जो हमेशा सिस्टम की सीमाओं और उपयोगकर्ता की जिम्मेदारी का सम्मान करता है।" },
      { icon: "ℹ️", title: "ऐप", items: [
        "यह एक दृश्य और सूचनात्मक सहायता है",
        "यह वाहन के सिस्टम को प्रतिस्थापित नहीं करता है",
        "यह सिस्टम सेंसर और अनुमतियों पर निर्भर करता है"
      ]},
      { icon: "⚠️", title: "जिम्मेदारी", items: [
        "उपयोग पूरी तरह से उपयोगकर्ता की जिम्मेदारी है",
        "वाहन रुकने के साथ ऐप को कॉन्फ़िगर करने की अनुशंसा की जाती है",
        "प्रभावों के अत्यधिक उपयोग से ध्यान भटक सकता है"
      ]},
      { icon: "❌", title: "डेवलपर", items: [
        "के लिए ज़िम्मेदार नहीं है जुर्माना, घटनाएँ या दुर्घटनाएँ",
        "ऐप का दुरुपयोग",
        "परिवर्तन की उपयोगकर्ता द्वारा स्वेच्छा से पुष्टि की गई"
      ]},
      { icon: "✅", title: "महत्वपूर्ण नोट",
        text: "यह ऐप केवल उपकरण प्रदान करता है - यह निर्णय नहीं लेता है। अपने जोखिम पर उपयोग करें।" }
    ],
    note: "यदि आपके कोई प्रश्न हैं, तो आप डेवलपर से ईमेल या ऐप के Google Play पृष्ठ के माध्यम से संपर्क कर सकते हैं।" }

  ]
};


/* ------------------------- JA ------------------------- */
FEATURES.ja = {

  intro: [
    "🎯 TrueGPS は、Play ストアで最もカスタマイズ可能な GPS/HUD アプリになることを目指しています。",
    "その理由は、閉じられたソリューションではなく、トータルなコントロールを求める人々のために設計されたからです。"
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "TrueGPS の違い❓", items: [
        "Dozens of advanced configuration options",
        "シンプルで透過的な 💰クレジット システムにより、必須のサブスクリプションなしですべてのオプションのロックが解除されます",
        "車、バイク、自転車、ボート、飛行機など、あらゆるタイプの乗り物に使用できます。",
        "A complete, simple and fast app",
        "そして、新しい機能を追加して成長し、進化し続けます"
      ]},
      { icon: "🎨", title: "Total HUD Customization", items: [
        "Background colors for 3 speed ranges",
        "Thousands of colors to choose from",
        "スピードメーターやその他の情報用の数十のフォント",
        "Free font size adjustment",
        "Endless, fully configurable HUD layouts"
      ]},
      { icon: "🚗", title: "車両プロファイル", items: [
        "Independent profiles for each vehicle",
        "プロフィールごとにコストが表示され、出張コストが即時に計算されます",
        "車両ごとに異なる速度オフセット",
        "GPS 速度を実際の速度計に簡単に一致させます"
      ]},
      { icon: "📊", title: "データ、アラート、グラフィック効果", items: [
        "加速度と横加速度のグラフ",
        "視覚的および聴覚的な制限速度警告",
        "速度依存のグラフィック効果",
        "異なる測定単位",
        "完全に設定可能な走行距離計と 3 つのトリップカウンター"
      ]},
      { icon: "🌙", title: "違いを生む追加機能", items: [
        "素早いスワイプですべての HUD を切り替えます",
        "壮大な引用符付きのスクリーンセーバー モード",
        "友達と一緒に HUD をエクスポートおよびインポートする"
      ]},
      { icon: "🧩", title: "情報をあなたの方法で表示", items: [
        "画面上の情報を表示または非表示にします: 時間、旅行、最高/平均速度、コスト、クレジット、制限、GPS、コンパスなど。",
        "ウィジェットを個別にまたは一度に表示または非表示にする"
      ]},
      { icon: "🖱️", title: "迅速かつスマートなインタラクション", items: [
        "設定可能な、表示されるタップおよび長押しゾーン",
        "単純なタップまたはスワイプで HUD を作成、複製、削除、切り替え",
        "簡単なスワイプでフロントガラスの HUD を反転します"
      ]}
    ]},

    { icon: "⚙️", title: "高度な HUD 設定",
      lead: "このアプリを使用すると、HUD (ヘッドアップ ディスプレイ) の動作と外観を詳細に設定できるため、運転中の情報の表示方法を完全に制御できます。",
      cards: [
      { icon: "🔹", title: "一般設定", items: [
        "グローバル HUD 動作を調整する",
        "自動非表示時間を設定する",
        "セーフティ モードを有効にする (セーフ モード)",
        "明るさ、不透明度、視覚テーマを制御します",
        "アプリの言語を選択します"
      ]},
      { icon: "🎨", title: "外観と色", items: [
        "HUD カラーのトータルカスタマイズ",
        "速度範囲ごとに背景色を設定する",
        "状態とアラートに色を割り当てる",
        "アイコンと画像をカスタマイズする"
      ]},
      { icon: "🚗", title: "アラートと速度", items: [
        "速度制限を設定する",
        "構成可能な視覚的および聴覚的なアラート",
        "速度依存のグラフィック効果",
        "エフェクトとアラートを無効にするオプション"
      ]},
      { icon: "🔊", title: "サウンドとフィードバック", items: [
        "HUD のインタラクション、アラート、状態の音",
        "オプションの完全に構成可能なオーディオ フィードバック",
        "すべての音をミュートするオプション"
      ]},
      { icon: "🛑", title: "安全性とシステム", items: [
        "オプションの「応答不可」(DND) モード",
        "気を散らすものを減らすスクリーンセーバー",
        "車両停止時の推奨セットアップ"
      ]},
      { icon: "💰", title: "クレジットとプレミアム システム", items: [
        "サブスクリプションまたはクレジットを通じて高度な機能を利用可能",
        "重要な変更はクレジットを消費する可能性があります",
        "オプションで追加のクレジットを取得できます"
      ]}
    ]},

    { icon: "📦", title: "長押しオプション – 直接 HUD コントロール",
      lead: "アプリの中央コントロール パネルを補完する長押しオプションもあり、アクティブな HUD との直接対話や機密性の高いアクションの管理が可能になります。",
      cards: [
      { icon: "🔒", title: "ロックと保護", items: [
        "偶発的な変更を防ぐために HUD をロックする",
        "ロックされた HUD は編集または削除できません",
        "ロックまたはロック解除前の明示的な確認"
      ]},
      { icon: "🔁", title: "HUD 管理", items: [
        "既存の HUD を複製します",
        "新しい HUD の自動作成 (許可されている場合)",
        "確認付きの HUD の永久的な削除"
      ]},
      { icon: "💰", title: "クレジットとサブスクリプション", items: [
        "一部のアクションにはプレミアム サブスクリプションまたはクレジットが必要です",
        "コストは常に確認前に表示されます",
        "アプリは無効または不正な操作を防止します"
      ]},
      { icon: "🔊", title: "視覚と音声のフィードバック", items: [
        "重要なアクションに対する特定のサウンド",
        "ロックされた HUD または使用できないアクションに対する視覚的なフィードバック",
        "サウンドはアプリのグローバル設定によって異なります"
      ]},
      { icon: "⚠️", title: "安全対策", items: [
        "重要なアクションには明示的な確認が必要です",
        "不可逆的な変更はサイレントに行われません",
        "ユーザーは常に最終的な制御を維持します"
      ]}
    ]},

    { icon: "ℹ️", title: "重要な情報", cards: [
      { icon: "🧩", title: "重要な概要",
        text: "このアプリは、システムの制限とユーザーの責任を常に尊重しながら、運転中に最大限の HUD カスタマイズと制御を提供するために作成されました。" },
      { icon: "ℹ️", title: "アプリ", items: [
        "これは視覚的かつ情報的な補助です",
        "車両のシステムを置き換えるものではありません",
        "システムのセンサーと権限に依存します"
      ]},
      { icon: "⚠️", title: "責任", items: [
        "使用はすべてユーザーの責任です",
        "車両を停止した状態でアプリを設定することをお勧めします",
        "エフェクトを過度に使用すると、気が散ってしまう可能性があります"
      ]},
      { icon: "❌", title: "開発者は", items: [
        "について責任を負いません。罰金、事件または事故",
        "アプリの悪用",
        "ユーザーが自発的に確認した変更"
      ]},
      { icon: "✅", title: "重要な注意事項",
        text: "このアプリはツールを提供するだけであり、意思決定は行いません。ご自身の責任でご使用ください。" }
    ],
    note: "ご質問がある場合は、電子メールまたはアプリの Google Play ページを通じて開発者にお問い合わせください。" }

  ]
};


/* ------------------------- KO ------------------------- */
FEATURES.ko = {

  intro: [
    "🎯 TrueGPS는 Play 스토어에서 최고의 맞춤 설정이 가능한 GPS/HUD 앱을 목표로 합니다.",
    "그리고 그 이유는❓ 폐쇄형 솔루션이 아닌 완전한 제어를 원하는 사람들을 위해 설계되었기 때문입니다."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "TrueGPS의 차별점❓", items: [
        "수십 가지 고급 구성 옵션",
        "필수 가입 없이 모든 옵션을 잠금 해제하는 간단하고 투명한 💰크레딧 시스템",
        "자동차, 오토바이, 자전거, 보트, 항공기 등 모든 유형의 차량과 함께 작동합니다.",
        "완전하고 간단하며 빠른 앱",
        "그리고 새로운 기능을 통해 계속해서 성장하고 발전할 것입니다"
      ]},
      { icon: "🎨", title: "전체 HUD 사용자 정의", items: [
        "3가지 속도 범위의 배경색",
        "선택할 수 있는 수천 가지 색상",
        "속도계 및 기타 정보를 위한 수십 가지 글꼴",
        "무료 글꼴 크기 조정",
        "끝없이 완벽하게 구성 가능한 HUD 레이아웃"
      ]},
      { icon: "🚗", title: "차량 프로필", items: [
        "각 차량에 대한 독립적인 프로필",
        "즉각적인 여행 비용 계산과 함께 프로필당 비용 표시",
        "차량마다 다른 속도 오프셋",
        "GPS 속도를 실제 속도계와 쉽게 일치시키세요"
      ]},
      { icon: "📊", title: "데이터, 경고 및 그래픽 효과", items: [
        "가속도 및 측면 가속도 차트",
        "시각적 및 청각적 속도 제한 경고",
        "속도에 따른 그래픽 효과",
        "다양한 측정 단위",
        "완전히 구성 가능한 주행 거리계 및 3개의 트립 카운터"
      ]},
      { icon: "🌙", title: "차이를 만드는 추가 기능", items: [
        "모든 HUD 사이를 전환하려면 빠르게 스와이프하세요",
        "멋진 인용문이 포함된 화면 보호기 모드",
        "친구들과 함께 HUD 내보내기 및 가져오기"
      ]},
      { icon: "🧩", title: "원하는 대로 정보를 표시", items: [
        "시간, 여행, 최대/평균 속도, 비용, 크레딧, 한도, GPS, 나침반 등 정보를 화면에 표시하거나 숨깁니다.",
        "위젯을 개별적으로 또는 한꺼번에 표시하거나 숨기기"
      ]},
      { icon: "🖱️", title: "빠르고 스마트한 상호작용", items: [
        "구성 가능하고 눈에 보이는 탭 및 길게 누르기 영역",
        "간단한 탭이나 스와이프로 HUD 생성, 복제, 삭제 및 전환",
        "간단한 스와이프로 앞유리 HUD를 뒤집으세요"
      ]}
    ]},

    { icon: "⚙️", title: "고급 HUD 설정",
      lead: "이 앱을 사용하면 HUD(헤드업 디스플레이)의 동작과 모양을 세부적으로 구성할 수 있어 운전 중에 정보가 표시되는 방식을 완벽하게 제어할 수 있습니다.",
      cards: [
      { icon: "🔹", title: "일반 설정", items: [
        "전역 HUD 동작 조정",
        "자동 숨기기 시간 설정",
        "안전 모드 활성화(안전 모드)",
        "밝기, 불투명도 및 시각적 테마 제어",
        "앱 언어를 선택하세요"
      ]},
      { icon: "🎨", title: "모양과 색상", items: [
        "전체 HUD 색상 사용자 정의",
        "속도 범위별로 배경색 설정",
        "상태 및 경고에 색상 지정",
        "아이콘과 이미지를 사용자 정의하세요"
      ]},
      { icon: "🚗", title: "경고 및 속도", items: [
        "속도 제한 설정",
        "구성 가능한 시각적 및 청각적 경고",
        "속도에 따른 그래픽 효과",
        "효과 및 경고를 비활성화하는 옵션"
      ]},
      { icon: "🔊", title: "소리와 피드백", items: [
        "HUD 상호 작용, 경고 및 상태에 대한 소리",
        "선택 사항이며 완전히 구성 가능한 오디오 피드백",
        "모든 소리를 음소거하는 옵션"
      ]},
      { icon: "🛑", title: "안전 및 시스템", items: [
        "선택적 \"방해 금지\"(DND) 모드",
        "방해 요소를 줄이기 위한 화면 보호기",
        "차량이 정지된 상태에서 권장 설정"
      ]},
      { icon: "💰", title: "크레딧과 프리미엄 시스템", items: [
        "구독이나 크레딧을 통해 사용할 수 있는 고급 기능",
        "중요한 변경에는 크레딧이 소모될 수 있습니다",
        "선택적으로 추가 학점을 얻을 수 있습니다"
      ]}
    ]},

    { icon: "📦", title: "길게 누르기 옵션 - 직접 HUD 제어",
      lead: "앱의 중앙 제어판을 보완하는 길게 누르기 옵션도 있어 활성 HUD와 직접 상호 작용하고 민감한 작업을 관리할 수 있습니다.",
      cards: [
      { icon: "🔒", title: "잠금 및 보호", items: [
        "우발적인 변경을 방지하기 위해 HUD를 잠그세요",
        "잠긴 HUD는 편집하거나 제거할 수 없습니다",
        "잠금 또는 잠금 해제 전 명시적 확인"
      ]},
      { icon: "🔁", title: "HUD 관리", items: [
        "기존 HUD 복제",
        "새로운 HUD 자동 생성(허용되는 경우)",
        "확인 후 HUD 영구 제거"
      ]},
      { icon: "💰", title: "크레딧 및 구독", items: [
        "일부 작업에는 프리미엄 구독이나 크레딧이 필요합니다",
        "비용은 항상 확인 전에 표시됩니다",
        "이 앱은 유효하지 않거나 승인되지 않은 작업을 방지합니다"
      ]},
      { icon: "🔊", title: "시각 및 청각 피드백", items: [
        "중요한 작업에 대한 특정 소리",
        "잠긴 HUD 또는 사용할 수 없는 작업에 대한 시각적 피드백",
        "소리는 앱의 전체 설정에 따라 달라집니다"
      ]},
      { icon: "⚠️", title: "안전 장치", items: [
        "중요한 조치에는 명시적인 확인이 필요합니다",
        "되돌릴 수 없는 변경은 자동으로 이루어지지 않습니다",
        "사용자는 항상 최종 제어권을 유지합니다"
      ]}
    ]},

    { icon: "ℹ️", title: "중요한 정보", cards: [
      { icon: "🧩", title: "중요한 요약",
        text: "이 앱은 항상 시스템 제한과 사용자의 책임을 존중하면서 운전 중에 최대한의 HUD 사용자 정의 및 제어를 제공하기 위해 만들어졌습니다." },
      { icon: "ℹ️", title: "앱", items: [
        "시각 및 정보 제공 자료입니다",
        "차량 시스템을 대체하지 않습니다",
        "시스템 센서와 권한에 따라 달라집니다"
      ]},
      { icon: "⚠️", title: "책임", items: [
        "사용은 전적으로 사용자의 책임입니다",
        "차량이 정지된 상태에서 앱을 구성하는 것이 좋습니다",
        "효과를 과도하게 사용하면 주의가 산만해질 수 있습니다"
      ]},
      { icon: "❌", title: "개발자는", items: [
        "에 대해 책임을 지지 않습니다. 벌금, 사건 또는 사고",
        "앱 오용",
        "사용자가 자발적으로 확인한 변경사항"
      ]},
      { icon: "✅", title: "중요사항",
        text: "이 앱은 도구만 제공하며 결정을 내리지는 않습니다. 자신의 책임하에 사용하십시오." }
    ],
    note: "질문이 있는 경우 이메일이나 앱의 Google Play 페이지를 통해 개발자에게 문의할 수 있습니다." }

  ]
};


/* ------------------------- BR ------------------------- */
FEATURES.br = {

  intro: [
    "🎯 TrueGPS pretende ser o MELHOR e mais PERSONALIZÁVEL aplicativo GPS/HUD na Play Store.",
    "E porquê❓ Porque foi pensado para pessoas que pretendem CONTROLO total e não soluções fechadas."
  ],

  groups: [

    { cards: [
      { icon: "🚀", title: "O que torna o TrueGPS diferente❓", items: [
        "Dezenas de opções de configuração avançada",
        "Um sistema de 💰Credits simples e transparente que desbloqueia TODAS as opções SEM assinatura obrigatória",
        "Funciona com qualquer tipo de veículo: carro, moto, bicicleta, barco, avião, etc.",
        "Um aplicativo completo, simples e rápido",
        "E continuará crescendo e evoluindo com novos recursos"
      ]},
      { icon: "🎨", title: "Personalização total do HUD", items: [
        "Cores de fundo para 3 faixas de velocidade",
        "Milhares de cores para escolher",
        "Dezenas de fontes para velocímetro e outras informações",
        "Ajuste gratuito do tamanho da fonte",
        "Layouts de HUD infinitos e totalmente configuráveis ​​"
      ]},
      { icon: "🚗", title: "Perfis de veículos", items: [
        "Perfis independentes para cada veículo",
        "Custos apresentados por perfil, com cálculo instantâneo do custo da viagem",
        "Diferentes compensações de velocidade para cada veículo",
        "Combine facilmente a velocidade do GPS com o seu velocímetro real"
      ]},
      { icon: "📊", title: "Dados, alertas e efeitos gráficos", items: [
        "Gráficos de aceleração e aceleração lateral",
        "Alertas visuais e sonoros de limite de velocidade",
        "Efeitos gráficos dependentes da velocidade",
        "Diferentes unidades de medida",
        "Conta-quilómetros totalmente configurável e 3 contadores de viagem"
      ]},
      { icon: "🌙", title: "Extras que fazem a diferença", items: [
        "Deslize rapidamente para alternar entre todos os seus HUDs",
        "Modo ScreenSaver com citações épicas",
        "Exporte e importe HUDs com amigos"
      ]},
      { icon: "🧩", title: "Informações mostradas do seu jeito", items: [
        "Mostrar ou ocultar qualquer informação na tela: tempo, viagens, velocidade máxima/média, custos, créditos, limites, GPS, bússola, etc.",
        "Mostrar ou ocultar widgets individualmente ou todos de uma vez"
      ]},
      { icon: "🖱️", title: "Interação Rápida e Inteligente", items: [
        "Zonas de toque e toque longo configuráveis ​​e visíveis",
        "Crie, duplique, exclua e troque HUDs com um simples toque ou deslize",
        "Vire o HUD do para-brisa com um simples toque"
      ]}
    ]},

    { icon: "⚙️", title: "Configurações avançadas de HUD",
      lead: "Este aplicativo permite a configuração detalhada do comportamento e aparência do HUD (Head-Up Display), proporcionando total controle sobre como as informações são mostradas durante a condução.",
      cards: [
      { icon: "🔹", title: "Configurações Gerais", items: [
        "Ajustar o comportamento global do HUD",
        "Definir tempos de ocultação automática",
        "Habilitar modos de segurança (Modo Seguro)",
        "Controlar brilho, opacidade e temas visuais",
        "Escolha o idioma do aplicativo"
      ]},
      { icon: "🎨", title: "Aparência e Cores", items: [
        "Personalização total de cores do HUD",
        "Definir cores de fundo por faixa de velocidade",
        "Atribuir cores aos estados e alertas",
        "Personalize ícones e imagens"
      ]},
      { icon: "🚗", title: "Alertas e Velocidade", items: [
        "Definir limites de velocidade",
        "Alertas visuais e sonoros configuráveis ​​",
        "Efeitos gráficos dependentes da velocidade",
        "Opção para desativar efeitos e alertas"
      ]},
      { icon: "🔊", title: "Sons e Feedback", items: [
        "Sons para interações, alertas e estados do HUD",
        "Feedback de áudio opcional e totalmente configurável",
        "Opção para silenciar todos os sons"
      ]},
      { icon: "🛑", title: "Segurança e Sistema", items: [
        "Modo opcional “Não perturbe” (DND)",
        "ScreenSaver para reduzir distrações",
        "Configuração recomendada com o veículo parado"
      ]},
      { icon: "💰", title: "Sistema de Créditos e Prêmio", items: [
        "Recursos avançados disponíveis por meio de assinatura ou créditos",
        "Mudanças críticas podem consumir créditos",
        "Créditos adicionais podem ser obtidos opcionalmente"
      ]}
    ]},

    { icon: "📦", title: "Opções de toque longo – Controle direto do HUD",
      lead: "Existem também opções de toque longo que complementam o painel de controle central do app, permitindo interação direta com o HUD ativo e gerenciamento de ações sensíveis.",
      cards: [
      { icon: "🔒", title: "Bloqueio e Proteção", items: [
        "Bloqueie HUDs para evitar alterações acidentais",
        "HUDs bloqueados não podem ser editados ou removidos",
        "Confirmação explícita antes de bloquear ou desbloquear"
      ]},
      { icon: "🔁", title: "Gerenciamento de HUD", items: [
        "Duplicar HUDs existentes",
        "Criação automática de novos HUDs (quando permitido)",
        "Remoção permanente de HUDs com confirmação"
      ]},
      { icon: "💰", title: "Créditos e Assinatura", items: [
        "Algumas ações exigem uma assinatura Premium ou créditos",
        "O custo é sempre mostrado antes da confirmação",
        "O aplicativo evita ações inválidas ou não autorizadas"
      ]},
      { icon: "🔊", title: "Feedback visual e sonoro", items: [
        "Sons específicos para ações críticas",
        "Feedback visual para HUDs bloqueados ou ações indisponíveis",
        "Os sons dependem das configurações globais do aplicativo"
      ]},
      { icon: "⚠️", title: "Salvaguardas", items: [
        "Ações críticas requerem confirmação explícita",
        "Nenhuma mudança irreversível é feita silenciosamente",
        "O usuário sempre mantém o controle final"
      ]}
    ]},

    { icon: "ℹ️", title: "Informações importantes", cards: [
      { icon: "🧩", title: "Resumo importante",
        text: "Este aplicativo foi criado para oferecer o máximo de personalização e controle do HUD durante a condução, sempre respeitando as limitações do sistema e a responsabilidade do usuário." },
      { icon: "ℹ️", title: "O aplicativo", items: [
        "É um auxílio visual e informativo",
        "Não substitui os sistemas do veículo",
        "Depende dos sensores e permissões do sistema"
      ]},
      { icon: "⚠️", title: "Responsabilidade", items: [
        "O uso é de inteira responsabilidade do usuário",
        "É recomendado configurar o app com o veículo parado",
        "O uso excessivo de efeitos pode causar distração"
      ]},
      { icon: "❌", title: "O desenvolvedor não é responsável por", items: [
        "Multas, incidentes ou acidentes",
        "Uso indevido do aplicativo",
        "Alterações confirmadas voluntariamente pelo usuário"
      ]},
      { icon: "✅", title: "Nota importante",
        text: "Este aplicativo fornece apenas ferramentas – ele não toma decisões. Use por sua conta e risco." }
    ],
    note: "Se você tiver dúvidas, entre em contato com o desenvolvedor por e-mail ou pela página do aplicativo no Google Play." }

  ]
};
/* Renderiza os textos dos cartões a partir de FEATURES.pt / FEATURES.en. */
/* Conteúdo das novas secções. Acrescenta aqui os outros idiomas; sem tradução usa EN. */
window.ABOUT = {
  pt: {
    label: "🎯 O que é o TrueGPS?",
    subtitle: "Velocímetro GPS e HUD com widgets, alertas, efeitos visuais e perfis de veículos com custos",
    paragraphs: [
      "O TrueGPS é um poderoso Velocímetro GPS e HUD (Head-Up Display), desenvolvido para condutores que pretendem ter controlo total sobre a sua experiência de condução, em vez de soluções fechadas e limitadas.",
      "Personalize todos os detalhes, crie HUDs ilimitados, calibre a velocidade GPS para cada veículo através de perfis dedicados e desfrute de widgets, efeitos e alertas avançados.",
      "Ao contrário das aplicações GPS tradicionais, o TrueGPS permite-lhe controlar totalmente a forma como a velocidade, as viagens, os alertas, os dados do veículo e os custos são apresentados."
    ],
    ending: ["Feito para utilizadores avançados. Simples para todos."]
  },
  br: {
    label: "🎯 O que é o TrueGPS?",
    subtitle: "Velocímetro GPS e HUD com widgets, alertas, efeitos visuais e perfis de veículos com custos",
    paragraphs: [
      "O TrueGPS é um poderoso velocímetro GPS e HUD (Head-Up Display), desenvolvido para motoristas que querem ter controle total sobre a experiência ao dirigir, em vez de soluções fechadas e limitadas.",
      "Personalize cada detalhe, crie HUDs ilimitados, calibre a velocidade GPS para cada veículo com perfis dedicados e aproveite widgets, efeitos e alertas avançados.",
      "Ao contrário dos aplicativos GPS tradicionais, o TrueGPS permite controlar totalmente como a velocidade, as viagens, os alertas, os dados do veículo e os custos são apresentados."
    ],
    ending: ["Feito para usuários avançados. Simples para todos."]
  },
  en: {
    label: "🎯 What is TrueGPS?",
    subtitle: "GPS speedometer and HUD with widgets, alerts, visual effects, and vehicle profiles with costs",
    paragraphs: [
      "TrueGPS is a powerful GPS speedometer and HUD (Head-Up Display), built for drivers who want full control over their driving experience instead of closed, limited solutions.",
      "Customize every detail, create unlimited HUDs, calibrate GPS speed for each vehicle with dedicated profiles, and enjoy advanced widgets, effects, and alerts.",
      "Unlike traditional GPS apps, TrueGPS gives you full control over how speed, trips, alerts, vehicle data, and costs are displayed."
    ],
    ending: ["Built for power users. Simple enough for everyone."]
  },
  fr: {
    label: "🎯 Qu’est-ce que TrueGPS ?",
    subtitle: "Compteur de vitesse GPS et HUD avec widgets, alertes, effets visuels et profils de véhicules avec coûts",
    paragraphs: [
      "TrueGPS est un puissant compteur de vitesse GPS et HUD (affichage tête haute), conçu pour les conducteurs qui veulent garder le contrôle total de leur expérience de conduite, plutôt que d’utiliser des solutions fermées et limitées.",
      "Personnalisez chaque détail, créez des HUD illimités, calibrez la vitesse GPS pour chaque véhicule grâce à des profils dédiés et profitez de widgets, d’effets et d’alertes avancés.",
      "Contrairement aux applications GPS traditionnelles, TrueGPS vous permet de contrôler entièrement l’affichage de la vitesse, des trajets, des alertes, des données du véhicule et des coûts."
    ],
    ending: ["Conçu pour les utilisateurs exigeants. Simple pour tous."]
  },
  es: {
    label: "🎯 ¿Qué es TrueGPS?",
    subtitle: "Velocímetro GPS y HUD con widgets, alertas, efectos visuales y perfiles de vehículos con costes",
    paragraphs: [
      "TrueGPS es un potente velocímetro GPS y HUD (Head-Up Display), creado para conductores que quieren controlar por completo su experiencia al volante, en lugar de usar soluciones cerradas y limitadas.",
      "Personaliza cada detalle, crea HUD ilimitados, calibra la velocidad GPS de cada vehículo con perfiles específicos y disfruta de widgets, efectos y alertas avanzados.",
      "A diferencia de las aplicaciones GPS tradicionales, TrueGPS te permite controlar totalmente cómo se muestran la velocidad, los viajes, las alertas, los datos del vehículo y los costes."
    ],
    ending: ["Creado para usuarios avanzados. Sencillo para todos."]
  },
  de: {
    label: "🎯 Was ist TrueGPS?",
    subtitle: "GPS-Tacho und HUD mit Widgets, Warnungen, visuellen Effekten und Fahrzeugprofilen mit Kosten",
    paragraphs: [
      "TrueGPS ist ein leistungsstarker GPS-Tacho und ein HUD (Head-up-Display) für Fahrer, die ihr Fahrerlebnis vollständig selbst bestimmen möchten, statt auf geschlossene und eingeschränkte Lösungen angewiesen zu sein.",
      "Passe jedes Detail an, erstelle unbegrenzt viele HUDs, kalibriere die GPS-Geschwindigkeit für jedes Fahrzeug mit eigenen Profilen und nutze erweiterte Widgets, Effekte und Warnungen.",
      "Anders als herkömmliche GPS-Apps lässt dich TrueGPS vollständig bestimmen, wie Geschwindigkeit, Fahrten, Warnungen, Fahrzeugdaten und Kosten angezeigt werden."
    ],
    ending: ["Für anspruchsvolle Nutzer entwickelt. Einfach für alle."]
  },
  it: {
    label: "🎯 Che cos’è TrueGPS?",
    subtitle: "Tachimetro GPS e HUD con widget, avvisi, effetti visivi e profili veicolo con costi",
    paragraphs: [
      "TrueGPS è un potente tachimetro GPS e HUD (Head-Up Display), sviluppato per chi vuole avere il pieno controllo della propria esperienza di guida, invece di usare soluzioni chiuse e limitate.",
      "Personalizza ogni dettaglio, crea HUD illimitati, calibra la velocità GPS per ogni veicolo con profili dedicati e sfrutta widget, effetti e avvisi avanzati.",
      "A differenza delle tradizionali app GPS, TrueGPS ti permette di controllare completamente come vengono visualizzati velocità, viaggi, avvisi, dati del veicolo e costi."
    ],
    ending: ["Creato per gli utenti più esigenti. Semplice per tutti."]
  },
  ru: {
    label: "🎯 Что такое TrueGPS?",
    subtitle: "GPS-спидометр и HUD с виджетами, предупреждениями, визуальными эффектами и профилями транспорта с расходами",
    paragraphs: [
      "TrueGPS — это мощный GPS-спидометр и HUD (проекционный дисплей) для водителей, которые хотят полностью управлять своим опытом вождения, а не пользоваться закрытыми и ограниченными решениями.",
      "Настраивайте каждую деталь, создавайте неограниченное количество HUD, калибруйте GPS-скорость для каждого транспорта с помощью отдельных профилей и используйте расширенные виджеты, эффекты и предупреждения.",
      "В отличие от обычных GPS-приложений, TrueGPS позволяет полностью управлять отображением скорости, поездок, предупреждений, данных транспорта и расходов."
    ],
    ending: ["Для опытных пользователей. Просто для каждого."]
  },
  tr: {
    label: "🎯 TrueGPS nedir?",
    subtitle: "Widget’lar, uyarılar, görsel efektler ve maliyet içeren araç profilleriyle GPS hız göstergesi ve HUD",
    paragraphs: [
      "TrueGPS, kapalı ve kısıtlı çözümler yerine sürüş deneyimi üzerinde tam kontrol isteyen sürücüler için geliştirilmiş güçlü bir GPS hız göstergesi ve HUD (Head-Up Display) uygulamasıdır.",
      "Her ayrıntıyı kişiselleştirin, sınırsız HUD oluşturun, özel profillerle her araç için GPS hızını kalibre edin; gelişmiş widget’ların, efektlerin ve uyarıların keyfini çıkarın.",
      "Geleneksel GPS uygulamalarının aksine TrueGPS; hızın, yolculukların, uyarıların, araç verilerinin ve maliyetlerin nasıl gösterileceğini tamamen kontrol etmenizi sağlar."
    ],
    ending: ["İleri düzey kullanıcılar için tasarlandı. Herkes için kolay."]
  },
  id: {
    label: "🎯 Apa itu TrueGPS?",
    subtitle: "Speedometer GPS dan HUD dengan widget, peringatan, efek visual, serta profil kendaraan dan biaya",
    paragraphs: [
      "TrueGPS adalah speedometer GPS dan HUD (Head-Up Display) yang canggih, dibuat untuk pengemudi yang ingin mengendalikan pengalaman berkendara sepenuhnya, bukan memakai solusi tertutup dan terbatas.",
      "Sesuaikan setiap detail, buat HUD tanpa batas, kalibrasikan kecepatan GPS untuk setiap kendaraan melalui profil khusus, dan nikmati widget, efek, serta peringatan tingkat lanjut.",
      "Berbeda dari aplikasi GPS biasa, TrueGPS memberi Anda kendali penuh atas tampilan kecepatan, perjalanan, peringatan, data kendaraan, dan biaya."
    ],
    ending: ["Dirancang untuk pengguna tingkat lanjut. Mudah untuk semua orang."]
  },
  hi: {
    label: "🎯 TrueGPS क्या है?",
    subtitle: "विजेट, अलर्ट, दृश्य प्रभाव और खर्च सहित वाहन प्रोफ़ाइल वाला GPS स्पीडोमीटर और HUD",
    paragraphs: [
      "TrueGPS एक शक्तिशाली GPS स्पीडोमीटर और HUD (Head-Up Display) है, जिसे उन चालकों के लिए बनाया गया है जो सीमित और बंद समाधानों के बजाय अपने ड्राइविंग अनुभव पर पूरा नियंत्रण चाहते हैं।",
      "हर विवरण को अनुकूलित करें, असीमित HUD बनाएँ, अलग-अलग वाहन प्रोफ़ाइल से GPS गति कैलिब्रेट करें और उन्नत विजेट, प्रभाव तथा अलर्ट का उपयोग करें।",
      "पारंपरिक GPS ऐप्स से अलग, TrueGPS आपको गति, यात्राओं, अलर्ट, वाहन डेटा और खर्चों के प्रदर्शन पर पूरा नियंत्रण देता है।"
    ],
    ending: ["अनुभवी उपयोगकर्ताओं के लिए बनाया गया। सभी के लिए आसान।"]
  },
  ja: {
    label: "🎯 TrueGPSとは？",
    subtitle: "ウィジェット、警告、視覚効果、車両別の費用プロフィールを備えたGPS速度計とHUD",
    paragraphs: [
      "TrueGPSは、制限の多い固定的なアプリではなく、運転体験を自分で自在に管理したいドライバーのために開発された、高機能なGPS速度計とHUD（ヘッドアップディスプレイ）です。",
      "細部までカスタマイズし、HUDを無制限に作成できます。車両ごとの専用プロフィールでGPS速度を調整し、高度なウィジェット、視覚効果、警告を活用できます。",
      "従来のGPSアプリとは異なり、速度、走行、警告、車両データ、費用の表示方法を自由に管理できます。"
    ],
    ending: ["上級ユーザーのために。誰にでも使いやすく。"]
  },
  ko: {
    label: "🎯 TrueGPS란 무엇인가요?",
    subtitle: "위젯, 알림, 시각 효과와 비용이 포함된 차량 프로필을 갖춘 GPS 속도계 및 HUD",
    paragraphs: [
      "TrueGPS는 제한적이고 닫힌 방식의 솔루션 대신 운전 경험을 완전히 제어하고 싶은 운전자를 위해 개발된 강력한 GPS 속도계 및 HUD(헤드업 디스플레이)입니다.",
      "세부 항목을 모두 설정하고 HUD를 무제한으로 만들 수 있습니다. 차량별 프로필로 GPS 속도를 보정하고 고급 위젯, 효과, 알림을 활용하세요.",
      "기존 GPS 앱과 달리 속도, 주행, 알림, 차량 데이터와 비용이 표시되는 방식을 직접 완전히 제어할 수 있습니다."
    ],
    ending: ["고급 사용자를 위해 만들었습니다. 누구나 쉽게 사용할 수 있습니다."]
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
  },
  fr: {
    groups: [
      { icon: "🚀", title: "Principales fonctionnalités", cards: [{ items: [
        "Créez des mises en page HUD illimitées et entièrement personnalisables avec des widgets indépendants",
        "Créez plusieurs profils de véhicules avec des paramètres indépendants",
        "Calibrez la vitesse du GPS et définissez des décalages de vitesse individuels pour chaque profil de véhicule",
        "Calcul instantané du coût du trajet pour chaque profil de véhicule",
        "Donnez vie à vos HUD avec des couleurs et des plages de vitesse configurables, des barres d'accélération, des effets visuels et des alertes intelligentes",
        "Créez, dupliquez, protégez, supprimez et changez de HUD d'un simple toucher, d'un appui long ou d'un glissement",
        "Exportez, importez et partagez des HUD avec des amis",
        "Alertes visuelles et sonores",
        "Mettez en miroir le HUD pour la projection sur le pare-brise d'un simple glissement",
        "Prévisualisez le HUD en temps réel tout en le personnalisant",
        "Barres d'accélération en temps réel et graphiques de force G latérale",
        "Fonctionne avec les voitures, motos, camions, bateaux, vélos, avions et presque tous les véhicules",
        "Prend en charge plusieurs unités de vitesse (km/h, mph, nœuds...)",
        "Compteur kilométrique entièrement configurable et 3 compteurs journaliers",
        "Prise en charge de plusieurs langues",
        "Mises à jour régulières avec de nouvelles fonctionnalités et améliorations",
        "Rapide, léger et facile à utiliser"
      ]}]},
      { icon: "🎨", title: "Personnalisez chaque détail", cards: [{ items: [
        "Créez des HUD illimités pour n'importe quel véhicule et style de conduite",
        "Contrôle total sur tous les aspects de votre HUD",
        "Des milliers de couleurs et des dizaines de polices",
        "Tailles et mises en page de police réglables",
        "Langues et unités de vitesse configurables",
        "Plages de vitesse configurables, avertissements, effets, sons et barres d'accélération",
        "Affichez ou masquez les widgets individuellement d'un simple toucher, notamment la vitesse, les trajets, les coûts, le GPS, la boussole, l'horloge et plus encore",
        "Dispositions HUD entièrement configurables et illimitées",
        "Faites des gestes de balayage pour basculer rapidement entre les HUD",
        "Mode économiseur d'écran avec des couleurs aléatoires et des phrases épiques",
        "Zones de pression et d'appui long configurables et visibles",
        "Options rapides pour désactiver tous les sons, effets et alertes",
        "Mode Ne pas déranger (NPD) en option pendant la conduite"
      ]}]},
      { icon: "🛡️", title: "Sécurité et responsabilité", lead: "TrueGPS est une aide visuelle à la conduite. Il ne remplace pas les systèmes du véhicule. Pour la sécurité :", cards: [{ items: [
        "Configurer l'application lorsque le véhicule est à l'arrêt",
        "Les actions critiques nécessitent toujours une confirmation",
        "Les modifications irréversibles ne sont jamais apportées sans votre consentement"
      ]}]},
      { icon: "💰", title: "Crédits et primes", lead: "Les fonctionnalités avancées peuvent être débloquées avec des crédits ou Premium. Aucun abonnement n'est requis. Les coûts sont toujours affichés avant confirmation." },
      { icon: "ℹ️", title: "Remarque importante", lead: "TrueGPS fournit des outils – il ne prend pas de décisions. Utilisez l'application de manière responsable et à vos propres risques." },
      { icon: "👉", title: "Idéal pour", cards: [{ items: [
        "Donner à votre véhicule un look rétro ou futuriste unique",
        "Toute personne recherchant une lecture de vitesse GPS plus précise",
        "Restauration d'un tableau de bord de véhicule classique ou ancien sans instrumentation moderne",
        "Remplacement d'un compteur de vitesse cassé ou inexact",
        "Voitures, motos, camions, bateaux et bien plus encore",
        "Véhicules sans compteur de vitesse intégré",
        "Pilotes qui souhaitent un HUD entièrement personnalisable",
        "Longs voyages ou utilisation quotidienne",
        "Projection HUD du pare-brise",
        "Vérification de la précision de la vitesse du véhicule",
        "Comparaison de la vitesse du tableau de bord avec la vitesse du GPS",
        "Chauffeurs professionnels et passionnés de conduite"
      ]}]}
    ],
    ending: [
      "Que vous conduisiez un véhicule électrique moderne, une voiture classique, une moto, un camion ou même un bateau, TrueGPS s'adapte à votre véhicule, et non l'inverse.",
      "Il n’y a pas deux pilotes identiques. Votre HUD ne devrait pas l’être non plus.",
      "Vitesse TrueGPS. Une application. HUD illimités. N'importe quel véhicule."
    ]
  },
  es: {
    groups: [
      { icon: "🚀", title: "Características clave", cards: [{ items: [
        "Cree diseños de HUD ilimitados y totalmente personalizables con widgets independientes",
        "Crea múltiples perfiles de vehículos con configuraciones independientes",
        "Calibre la velocidad del GPS y establezca compensaciones de velocidad individuales para cada perfil de vehículo",
        "Cálculo instantáneo del coste del viaje para cada perfil de vehículo",
        "Da vida a tus HUD con colores y rangos de velocidad configurables, barras de aceleración, efectos visuales y alertas inteligentes",
        "Cree, duplique, proteja, elimine y cambie HUD con solo tocar, mantener presionado o deslizar el dedo",
        "Exporta, importa y comparte HUD con amigos",
        "Alertas visuales y sonoras",
        "Refleje el HUD para proyectarlo en el parabrisas con un simple deslizamiento",
        "Obtenga una vista previa del HUD en tiempo real mientras lo personaliza",
        "Barras de aceleración en tiempo real y gráficos de fuerza G lateral",
        "Funciona con automóviles, motocicletas, camiones, barcos, bicicletas, aviones y casi cualquier vehículo",
        "Soporta múltiples unidades de velocidad (km/h, mph, nudos...)",
        "Odómetro totalmente configurable y 3 contadores de viaje",
        "Soporte para múltiples idiomas",
        "Actualizaciones periódicas con nuevas funciones y mejoras",
        "Rápido, ligero y fácil de usar"
      ]}]},
      { icon: "🎨", title: "Personaliza cada detalle", cards: [{ items: [
        "Crea HUD ilimitados para cualquier vehículo y estilo de conducción",
        "Control total sobre cada aspecto de tu HUD",
        "Miles de colores y decenas de fuentes",
        "Tamaños y diseños de fuente ajustables",
        "Idiomas y unidades de velocidad configurables",
        "Rangos de velocidad configurables, advertencias, efectos, sonidos y barras de aceleración",
        "Muestre u oculte widgets individualmente con un toque, incluidos Velocidad, Viajes, Costos, GPS, Brújula, Reloj y más",
        "Diseños de HUD ilimitados y totalmente configurables",
        "Desliza gestos para cambiar rápidamente entre HUD",
        "Modo salvapantallas con colores aleatorios y frases épicas",
        "Zonas de pulsación larga y pulsación visibles y configurables",
        "Opciones rápidas para silenciar todos los sonidos, efectos y alertas",
        "Modo opcional No molestar (DND) mientras se conduce"
      ]}]},
      { icon: "🛡️", title: "Seguridad y Responsabilidad", lead: "TrueGPS es una ayuda visual a la conducción. No reemplaza los sistemas del vehículo. Por seguridad:", cards: [{ items: [
        "Configurar la aplicación mientras el vehículo está parado",
        "Las acciones críticas siempre requieren confirmación",
        "Nunca se realizan cambios irreversibles sin su consentimiento"
      ]}]},
      { icon: "💰", title: "Créditos y Prima", lead: "Las funciones avanzadas se pueden desbloquear con Créditos o Premium. No se requiere suscripción. Los costos siempre se muestran antes de la confirmación." },
      { icon: "ℹ️", title: "Nota importante", lead: "TrueGPS proporciona herramientas, no toma decisiones. Utilice la aplicación de forma responsable y bajo su propia responsabilidad." },
      { icon: "👉", title: "Ideal para", cards: [{ items: [
        "Dándole a su vehículo un aspecto retro o futurista único",
        "Cualquiera que busque una lectura de velocidad GPS más precisa",
        "Restauración del salpicadero de un vehículo clásico o antiguo sin instrumentación moderna",
        "Reemplazo de un velocímetro roto o inexacto",
        "Coches, motos, camiones, barcos y mucho más",
        "Vehículos sin velocímetro incorporado",
        "Conductores que desean un HUD totalmente personalizable",
        "Viajes largos o uso diario",
        "Proyección HUD del parabrisas",
        "Comprobación de la precisión de la velocidad del vehículo",
        "Comparación de la velocidad del tablero con la velocidad del GPS",
        "Conductores profesionales y entusiastas de la conducción"
      ]}]}
    ],
    ending: [
      "Ya sea que conduzca un vehículo eléctrico moderno, un automóvil clásico, una motocicleta, un camión o incluso un barco, TrueGPS se adapta a su vehículo, y no al revés.",
      "No hay dos conductores iguales. Tu HUD tampoco debería serlo.",
      "Velocidad TrueGPS. Una aplicación. HUD ilimitados. Cualquier vehículo."
    ]
  },
  de: {
    groups: [
      { icon: "🚀", title: "Hauptmerkmale", cards: [{ items: [
        "Erstellen Sie unbegrenzte, vollständig anpassbare HUD-Layouts mit unabhängigen Widgets",
        "Erstellen Sie mehrere Fahrzeugprofile mit unabhängigen Einstellungen",
        "Kalibrieren Sie die GPS-Geschwindigkeit und legen Sie individuelle Geschwindigkeitsversätze für jedes Fahrzeugprofil fest",
        "Sofortige Berechnung der Fahrtkosten für jedes Fahrzeugprofil",
        "Erwecken Sie Ihre HUDs mit konfigurierbaren Farben und Geschwindigkeitsbereichen, Beschleunigungsbalken, visuellen Effekten und intelligenten Warnungen zum Leben",
        "Erstellen, duplizieren, schützen, löschen und wechseln Sie HUDs durch Tippen, langes Drücken oder Wischen über",
        "HUDs exportieren, importieren und mit Freunden teilen",
        "Visuelle und akustische Warnungen",
        "Spiegeln Sie das HUD für die Windschutzscheibenprojektion mit einem einfachen Wischen",
        "Vorschau des HUD in Echtzeit, während Sie es anpassen",
        "Echtzeit-Beschleunigungsbalken und seitliche G-Kraft-Diagramme",
        "Funktioniert mit Autos, Motorrädern, Lastwagen, Booten, Fahrrädern, Flugzeugen und fast jedem Fahrzeug",
        "Unterstützt mehrere Geschwindigkeitseinheiten (km/h, mph, Knoten...)",
        "Vollständig konfigurierbarer Kilometerzähler und 3 Tageskilometerzähler",
        "Unterstützung für mehrere Sprachen",
        "Regelmäßige Updates mit neuen Funktionen und Verbesserungen",
        "Schnell, leicht und einfach zu bedienen"
      ]}]},
      { icon: "🎨", title: "Passen Sie jedes Detail an", cards: [{ items: [
        "Erstellen Sie unbegrenzte HUDs für jedes Fahrzeug und jeden Fahrstil",
        "Volle Kontrolle über jeden Aspekt Ihres HUD",
        "Tausende Farben und Dutzende Schriftarten",
        "Anpassbare Schriftgrößen und Layouts",
        "Konfigurierbare Sprachen und Geschwindigkeitseinheiten",
        "Konfigurierbare Geschwindigkeitsbereiche, Warnungen, Effekte, Sounds und Beschleunigungsbalken",
        "Widgets einzeln mit einem Fingertipp ein- oder ausblenden, darunter Geschwindigkeit, Fahrten, Kosten, GPS, Kompass, Uhr und mehr",
        "Vollständig konfigurierbare, unbegrenzte HUD-Layouts",
        "Wischgesten, um schnell zwischen HUDs zu wechseln",
        "Bildschirmschonermodus mit zufälligen Farben und epischen Phrasen",
        "Konfigurierbare, sichtbare Tipp- und Langdruckzonen",
        "Schnelle Optionen zum Stummschalten aller Töne, Effekte und Warnungen",
        "Optionaler Modus „Bitte nicht stören“ (DND) während der Fahrt"
      ]}]},
      { icon: "🛡️", title: "Sicherheit und Verantwortung", lead: "TrueGPS ist eine visuelle Fahrhilfe. Es ersetzt keine Fahrzeugsysteme. Zur Sicherheit:", cards: [{ items: [
        "Richten Sie die App bei stehendem Fahrzeug ein",
        "Kritische Aktionen erfordern immer eine Bestätigung",
        "Ohne Ihre Zustimmung werden niemals irreversible Änderungen vorgenommen"
      ]}]},
      { icon: "💰", title: "Credits und Premium", lead: "Erweiterte Funktionen können mit Credits oder Premium freigeschaltet werden. Es ist kein Abonnement erforderlich. Die Kosten werden immer vor der Bestätigung angezeigt." },
      { icon: "ℹ️", title: "Wichtiger Hinweis", lead: "TrueGPS stellt Werkzeuge bereit – es trifft keine Entscheidungen. Nutzen Sie die App verantwortungsbewusst und auf eigenes Risiko." },
      { icon: "👉", title: "Ideal für", cards: [{ items: [
        "Verleihen Sie Ihrem Fahrzeug einen einzigartigen Retro- oder futuristischen Look",
        "Wer eine genauere GPS-Geschwindigkeitsmessung sucht",
        "Restaurierung des Armaturenbretts eines klassischen oder älteren Fahrzeugs ohne moderne Instrumentierung",
        "Austausch eines defekten oder ungenauen Tachometers",
        "Autos, Motorräder, Lastwagen, Boote und vieles mehr",
        "Fahrzeuge ohne eingebauten Tacho",
        "Fahrer, die ein vollständig anpassbares HUD wünschen",
        "Lange Reisen oder alltäglicher Gebrauch",
        "Windschutzscheiben-HUD-Projektion",
        "Überprüfung der Genauigkeit der Fahrzeuggeschwindigkeit",
        "Vergleich der Dashboard-Geschwindigkeit mit der GPS-Geschwindigkeit",
        "Berufskraftfahrer und Fahrbegeisterte"
      ]}]}
    ],
    ending: [
      "Egal, ob Sie ein modernes Elektrofahrzeug, einen Oldtimer, ein Motorrad, einen LKW oder sogar ein Boot fahren, TrueGPS passt sich Ihrem Fahrzeug an – nicht umgekehrt.",
      "Kein Fahrer gleicht dem anderen. Ihr HUD sollte es auch nicht sein.",
      "TrueGPS-Geschwindigkeit. Eine App. Unbegrenzte HUDs. Jedes Fahrzeug."
    ]
  },
  it: {
    groups: [
      { icon: "🚀", title: "Caratteristiche principali", cards: [{ items: [
        "Crea layout HUD illimitati e completamente personalizzabili con widget indipendenti",
        "Crea più profili di veicoli con impostazioni indipendenti",
        "Calibra la velocità GPS e imposta offset di velocità individuali per ciascun profilo di veicolo",
        "Calcolo istantaneo del costo del viaggio per ciascun profilo del veicolo",
        "Dai vita ai tuoi HUD con colori e intervalli di velocità configurabili, barre di accelerazione, effetti visivi e avvisi intelligenti",
        "Crea, duplica, proteggi, elimina e cambia HUD con un tocco, premi a lungo o scorri",
        "Esporta, importa e condividi HUD con gli amici",
        "Avvisi visivi e acustici",
        "Specchia l'HUD per la proiezione del parabrezza con un semplice tocco",
        "Visualizza l'anteprima dell'HUD in tempo reale mentre lo personalizzi",
        "Barre di accelerazione in tempo reale e grafici della forza G laterale",
        "Funziona con auto, moto, camion, barche, biciclette, aerei e quasi tutti i veicoli",
        "Supporta più unità di velocità (km/h, mph, nodi...)",
        "Contachilometri completamente configurabile e 3 contatori parziali",
        "Supporto per più lingue",
        "Aggiornamenti regolari con nuove funzionalità e miglioramenti",
        "Veloce, leggero e facile da usare"
      ]}]},
      { icon: "🎨", title: "Personalizza ogni dettaglio", cards: [{ items: [
        "Crea HUD illimitati per qualsiasi veicolo e stile di guida",
        "Pieno controllo su ogni aspetto del tuo HUD",
        "Migliaia di colori e decine di caratteri",
        "Dimensioni e layout dei caratteri regolabili",
        "Lingue e unità di velocità configurabili",
        "Gamme di velocità, avvisi, effetti, suoni e barre di accelerazione configurabili",
        "Mostra o nascondi i widget individualmente con un tocco, inclusi Velocità, Viaggi, Costi, GPS, Bussola, Orologio e altro",
        "Layout HUD illimitati e completamente configurabili",
        "Scorri i gesti per passare rapidamente da un HUD all'altro",
        "Modalità salvaschermo con colori casuali e frasi epiche",
        "Zone configurabili e visibili per tocco e pressione prolungata",
        "Opzioni rapide per disattivare tutti i suoni, gli effetti e gli avvisi",
        "Modalità opzionale Non disturbare (DND) durante la guida"
      ]}]},
      { icon: "🛡️", title: "Sicurezza e responsabilità", lead: "TrueGPS è un aiuto visivo alla guida. Non sostituisce i sistemi del veicolo. Per sicurezza:", cards: [{ items: [
        "Configurazione dell'app a veicolo fermo",
        "Le azioni critiche richiedono sempre conferma",
        "Non vengono mai apportate modifiche irreversibili senza il tuo consenso"
      ]}]},
      { icon: "💰", title: "Crediti e Premium", lead: "Le funzionalità avanzate possono essere sbloccate con Crediti o Premium. Non è richiesto alcun abbonamento. I costi sono sempre visualizzati prima della conferma." },
      { icon: "ℹ️", title: "Nota importante", lead: "TrueGPS fornisce strumenti: non prende decisioni. Utilizza l'app in modo responsabile e a tuo rischio e pericolo." },
      { icon: "👉", title: "Ideale per", cards: [{ items: [
        "Dai al tuo veicolo un look retrò o futuristico unico",
        "Chiunque cerchi una lettura della velocità GPS più accurata",
        "Ripristino del cruscotto di un veicolo d'epoca o più vecchio senza strumentazione moderna",
        "Sostituzione di un tachimetro rotto o impreciso",
        "Auto, moto, camion, barche e molto altro",
        "Veicoli senza tachimetro incorporato",
        "Piloti che desiderano un HUD completamente personalizzabile",
        "Viaggi lunghi o uso quotidiano",
        "Proiezione HUD del parabrezza",
        "Controllo della precisione della velocità del veicolo",
        "Confronto della velocità sul cruscotto con la velocità del GPS",
        "Autisti professionisti e appassionati di guida"
      ]}]}
    ],
    ending: [
      "Che tu guidi un moderno veicolo elettrico, un'auto d'epoca, una moto, un camion o anche una barca, TrueGPS si adatta al tuo veicolo, non viceversa.",
      "Non esistono due conducenti uguali. Nemmeno il tuo HUD dovrebbe esserlo.",
      "Vera velocità GPS. Un'applicazione. HUD illimitati. Qualsiasi veicolo."
    ]
  },
  ru: {
    groups: [
      { icon: "🚀", title: "Ключевые особенности", cards: [{ items: [
        "Создавайте неограниченные, полностью настраиваемые макеты HUD с независимыми виджетами",
        "Создание нескольких профилей транспортных средств с независимыми настройками",
        "Калибровка скорости GPS и установка индивидуальных смещений скорости для каждого профиля транспортного средства",
        "Мгновенный расчет стоимости поездки для каждого профиля транспортного средства",
        "Оживите свои HUD с помощью настраиваемых цветов и диапазонов скорости, полос ускорения, визуальных эффектов и интеллектуальных оповещений",
        "Создавайте, дублируйте, защищайте, удаляйте и переключайте HUD одним касанием, длительным нажатием или пролистыванием",
        "Экспортируйте, импортируйте и делитесь HUD с друзьями",
        "Визуальные и звуковые оповещения",
        "Отразите HUD для проецирования на лобовое стекло простым движением",
        "Предварительный просмотр HUD в реальном времени при его настройке",
        "Индикаторы ускорения и графики поперечной перегрузки в реальном времени.",
        "Работает с автомобилями, мотоциклами, грузовиками, лодками, велосипедами, самолетами и практически любыми транспортными средствами",
        "Поддерживает несколько единиц измерения скорости (км/ч, мили в час, узлы...)",
        "Полностью настраиваемый одометр и 3 счетчика поездок",
        "Поддержка нескольких языков",
        "Регулярные обновления с новыми функциями и улучшениями",
        "Быстрый, легкий и простой в использовании"
      ]}]},
      { icon: "🎨", title: "Настройте каждую деталь", cards: [{ items: [
        "Создавайте неограниченное количество HUD для любого автомобиля и стиля вождения",
        "Полный контроль над каждым аспектом вашего HUD",
        "Тысячи цветов и десятки шрифтов",
        "Регулируемые размеры и макеты шрифтов",
        "Настраиваемые языки и единицы измерения скорости",
        "Настраиваемые диапазоны скорости, предупреждения, эффекты, звуки и полосы ускорения",
        "Покажите или скройте виджеты по отдельности одним касанием, включая скорость, поездки, расходы, GPS, компас, часы и многое другое",
        "Полностью настраиваемые, неограниченные макеты HUD",
        "Проведите жестами для быстрого переключения между HUD",
        "Режим заставки со случайными цветами и эпическими фразами",
        "Настраиваемые, видимые зоны касания и длительного нажатия",
        "Быстрые варианты отключения всех звуков, эффектов и оповещений",
        "Дополнительный режим «Не беспокоить» (DND) во время вождения"
      ]}]},
      { icon: "🛡️", title: "Безопасность и ответственность", lead: "TrueGPS — это визуальная помощь при вождении. Он не заменяет системы автомобиля. В целях безопасности:", cards: [{ items: [
        "Настройте приложение, пока автомобиль стоит",
        "Критические действия всегда требуют подтверждения",
        "Необратимые изменения никогда не вносятся без вашего согласия"
      ]}]},
      { icon: "💰", title: "Кредиты и премии", lead: "Расширенные функции можно разблокировать с помощью кредитов или премиум-класса. Никакой подписки не требуется. Стоимость всегда отображается до подтверждения." },
      { icon: "ℹ️", title: "Важное примечание", lead: "TrueGPS предоставляет инструменты, а не принимает решения. Используйте приложение ответственно и на свой страх и риск." },
      { icon: "👉", title: "Идеально подходит для", cards: [{ items: [
        "Придайте вашему автомобилю уникальный ретро или футуристический вид",
        "Любой, кто ищет более точные показания скорости GPS",
        "Восстановление классической или старой приборной панели автомобиля без современных приборов",
        "Замена сломанного или неточного спидометра",
        "Автомобили, мотоциклы, грузовики, лодки и многое другое",
        "Автомобили без встроенного спидометра",
        "Водители, которым нужен полностью настраиваемый HUD",
        "Длительные поездки или повседневное использование",
        "Проекция HUD на лобовое стекло",
        "Проверка точности скорости автомобиля",
        "Сравнение скорости приборной панели со скоростью GPS",
        "Профессиональные водители и любители вождения"
      ]}]}
    ],
    ending: [
      "Независимо от того, водите ли вы современный электромобиль, классический автомобиль, мотоцикл, грузовик или даже лодку, TrueGPS адаптируется к вашему автомобилю, а не наоборот.",
      "Нет двух одинаковых водителей. Ваш HUD тоже не должен быть таким.",
      "Скорость TrueGPS. Одно приложение. Неограниченное количество HUD. Любое транспортное средство."
    ]
  },
  tr: {
    groups: [
      { icon: "🚀", title: "Temel Özellikler", cards: [{ items: [
        "Bağımsız widget'larla sınırsız, tamamen özelleştirilebilir HUD düzenleri oluşturun",
        "Bağımsız ayarlarla birden fazla araç profili oluşturun",
        "GPS hızını kalibre edin ve her araç profili için ayrı hız farklarını ayarlayın",
        "Her araç profili için anlık yolculuk maliyeti hesaplaması",
        "Yapılandırılabilir renkler ve hız aralıkları, hızlanma çubukları, görsel efektler ve akıllı uyarılarla HUD'larınıza hayat verin",
        "Tek dokunuşla, uzun basışla veya kaydırmayla HUD'lar oluşturun, çoğaltın, koruyun, silin ve değiştirin",
        "HUD'ları dışa aktarın, içe aktarın ve arkadaşlarınızla paylaşın",
        "Görsel ve sesli uyarılar",
        "Basit bir kaydırma hareketi ile ön cam projeksiyonu için HUD'u yansıtın",
        "Özelleştirirken HUD'u gerçek zamanlı olarak önizleyin",
        "Gerçek zamanlı hızlanma çubukları ve yanal G kuvveti grafikleri",
        "Arabalar, motosikletler, kamyonlar, tekneler, bisikletler, uçaklar ve neredeyse her türlü araçla çalışır",
        "Çoklu hız birimlerini destekler (km/saat, mil/saat, deniz mili...)",
        "Tamamen yapılandırılabilir kilometre sayacı ve 3 günlük sayaç",
        "Çoklu dil desteği",
        "Yeni özellikler ve iyileştirmelerle düzenli güncellemeler",
        "Hızlı, hafif ve kullanımı kolay"
      ]}]},
      { icon: "🎨", title: "Her Detayı Kişiselleştirin", cards: [{ items: [
        "Her araç ve sürüş stili için sınırsız HUD oluşturun",
        "HUD'nizin her yönü üzerinde tam kontrol",
        "Binlerce renk ve onlarca yazı tipi",
        "Ayarlanabilir yazı tipi boyutları ve düzenleri",
        "Yapılandırılabilir diller ve hız birimleri",
        "Yapılandırılabilir hız aralıkları, uyarılar, efektler, sesler ve hızlanma çubukları",
        "Hız, Yolculuklar, Maliyetler, GPS, Pusula, Saat ve daha fazlası dahil olmak üzere widget'ları tek bir dokunuşla ayrı ayrı gösterin veya gizleyin",
        "Tamamen yapılandırılabilir, sınırsız HUD düzenleri",
        "HUD'lar arasında hızla geçiş yapmak için hareketleri kaydırın",
        "Rastgele renkler ve destansı ifadelerle ekran koruyucu modu",
        "Yapılandırılabilir, görünür dokunma ve uzun basma bölgeleri",
        "Tüm sesleri, efektleri ve uyarıları kapatmak için hızlı seçenekler",
        "Sürüş sırasında isteğe bağlı Rahatsız Etmeyin (DND) modu"
      ]}]},
      { icon: "🛡️", title: "Güvenlik ve Sorumluluk", lead: "TrueGPS görsel bir sürüş yardımcısıdır. Araç sistemlerinin yerini almaz. Güvenlik için:", cards: [{ items: [
        "Uygulamayı araç dururken kurun",
        "Kritik eylemler her zaman onay gerektirir",
        "İzniniz olmadan asla geri dönüşü olmayan değişiklikler yapılmaz"
      ]}]},
      { icon: "💰", title: "Krediler ve Prim", lead: "Gelişmiş özelliklerin kilidi Kredi veya Premium ile açılabilir. Abonelik gerekmez. Maliyetler her zaman onaylanmadan önce gösterilir." },
      { icon: "ℹ️", title: "Önemli Not", lead: "TrueGPS araçlar sağlar; karar vermez. Uygulamayı sorumlu bir şekilde ve risk size ait olmak üzere kullanın." },
      { icon: "👉", title: "Şunlar için idealdir:", cards: [{ items: [
        "Aracınıza benzersiz bir retro veya fütüristik görünüm kazandırır",
        "Daha doğru bir GPS hızlı okuma arayan herkes",
        "Klasik veya eski bir araç kontrol panelinin modern enstrümantasyon olmadan onarılması",
        "Kırık veya hatalı hız göstergesinin değiştirilmesi",
        "Arabalar, motosikletler, kamyonlar, tekneler ve çok daha fazlası",
        "Dahili hız göstergesi olmayan araçlar",
        "Tamamen özelleştirilebilir bir HUD isteyen sürücüler",
        "Uzun yolculuklar veya günlük kullanım",
        "Ön cam HUD projeksiyonu",
        "Araç hızı doğruluğunun kontrol edilmesi",
        "Kontrol paneli hızının GPS hızıyla karşılaştırılması",
        "Profesyonel sürücüler ve sürüş tutkunları"
      ]}]}
    ],
    ending: [
      "İster modern bir elektrikli araç, ister klasik bir araba, ister motosiklet, ister kamyon, ister tekne kullanıyor olun, TrueGPS aracınıza uyum sağlar; tam tersi değil.",
      "Hiçbir iki sürücü aynı değildir. HUD'niz de olmamalıdır.",
      "TrueGPS Hızı. Bir uygulama. Sınırsız HUD. Herhangi bir araç."
    ]
  },
  id: {
    groups: [
      { icon: "🚀", title: "Fitur Utama", cards: [{ items: [
        "Buat tata letak HUD tanpa batas dan dapat disesuaikan sepenuhnya dengan widget independen",
        "Buat beberapa profil kendaraan dengan pengaturan independen",
        "Kalibrasi kecepatan GPS dan atur offset kecepatan individual untuk setiap profil kendaraan",
        "Perhitungan biaya perjalanan instan untuk setiap profil kendaraan",
        "Hidupkan HUD Anda dengan warna dan rentang kecepatan yang dapat dikonfigurasi, bilah akselerasi, efek visual, dan peringatan cerdas",
        "Buat, duplikat, lindungi, hapus, dan alihkan HUD dengan satu ketukan, tekan lama, atau geser",
        "Ekspor, impor, dan bagikan HUD dengan teman",
        "Peringatan visual dan suara",
        "Cerminkan HUD untuk proyeksi kaca depan dengan gesekan sederhana",
        "Pratinjau HUD secara real time sambil menyesuaikannya",
        "Batang percepatan waktu nyata dan grafik gaya G lateral",
        "Dapat digunakan dengan mobil, sepeda motor, truk, perahu, sepeda, pesawat terbang, dan hampir semua kendaraan",
        "Mendukung beberapa satuan kecepatan (km/jam, mph, knot...)",
        "Odometer yang dapat dikonfigurasi sepenuhnya dan 3 penghitung perjalanan",
        "Dukungan untuk berbagai bahasa",
        "Pembaruan rutin dengan fitur dan peningkatan baru",
        "Cepat, ringan dan mudah digunakan"
      ]}]},
      { icon: "🎨", title: "Sesuaikan Setiap Detail", cards: [{ items: [
        "Buat HUD tanpa batas untuk kendaraan dan gaya mengemudi apa pun",
        "Kontrol penuh atas setiap aspek HUD Anda",
        "Ribuan warna dan puluhan font",
        "Ukuran dan tata letak font yang dapat disesuaikan",
        "Bahasa dan unit kecepatan yang dapat dikonfigurasi",
        "Rentang kecepatan, peringatan, efek, suara, dan bilah akselerasi yang dapat dikonfigurasi",
        "Tampilkan atau sembunyikan widget satu per satu dengan satu ketukan, termasuk Kecepatan, Perjalanan, Biaya, GPS, Kompas, Jam, dan lainnya",
        "Tata letak HUD tak terbatas yang dapat dikonfigurasi sepenuhnya",
        "Gesek gerakan untuk beralih antar HUD dengan cepat",
        "Mode screensaver dengan warna acak dan frasa epik",
        "Zona ketuk dan tekan lama yang dapat dikonfigurasi dan terlihat",
        "Opsi cepat untuk menonaktifkan semua suara, efek, dan peringatan",
        "Mode Jangan Ganggu (DND) opsional saat mengemudi"
      ]}]},
      { icon: "🛡️", title: "Keamanan dan Tanggung Jawab", lead: "TrueGPS adalah alat bantu berkendara visual. Itu tidak menggantikan sistem kendaraan. Untuk keamanan:", cards: [{ items: [
        "Siapkan aplikasi saat kendaraan tidak bergerak",
        "Tindakan kritis selalu memerlukan konfirmasi",
        "Perubahan yang tidak dapat diubah tidak pernah dilakukan tanpa persetujuan Anda"
      ]}]},
      { icon: "💰", title: "Kredit dan Premium", lead: "Fitur lanjutan dapat dibuka dengan Kredit atau Premium. Tidak diperlukan langganan. Biaya selalu ditampilkan sebelum konfirmasi." },
      { icon: "ℹ️", title: "Catatan Penting", lead: "TrueGPS menyediakan alat — ia tidak membuat keputusan. Gunakan aplikasi secara bertanggung jawab dan risiko Anda sendiri." },
      { icon: "👉", title: "Ideal untuk", cards: [{ items: [
        "Memberikan kendaraan Anda tampilan retro atau futuristik yang unik",
        "Siapa pun yang mencari pembacaan kecepatan GPS yang lebih akurat",
        "Mengembalikan dashboard kendaraan klasik atau lawas tanpa instrumentasi modern",
        "Mengganti speedometer yang rusak atau tidak akurat",
        "Mobil, sepeda motor, truk, perahu dan masih banyak lagi",
        "Kendaraan tanpa speedometer bawaan",
        "Pengemudi yang menginginkan HUD yang dapat disesuaikan sepenuhnya",
        "Perjalanan jauh atau penggunaan sehari-hari",
        "Proyeksi HUD kaca depan",
        "Mengecek keakuratan kecepatan kendaraan",
        "Membandingkan kecepatan dashboard dengan kecepatan GPS",
        "Pengemudi profesional dan penggemar mengemudi"
      ]}]}
    ],
    ending: [
      "Baik Anda mengendarai kendaraan listrik modern, mobil klasik, sepeda motor, truk, atau bahkan perahu, TrueGPS beradaptasi dengan kendaraan Anda — bukan sebaliknya.",
      "Tidak ada dua pengemudi yang sama. HUD Anda juga tidak seharusnya.",
      "Kecepatan GPS Sejati. Satu aplikasi. HUD tidak terbatas. Kendaraan apa pun."
    ]
  },
  hi: {
    groups: [
      { icon: "🚀", title: "मुख्य विशेषताएं", cards: [{ items: [
        "स्वतंत्र विजेट के साथ असीमित, पूरी तरह से अनुकूलन योग्य HUD लेआउट बनाएं",
        "स्वतंत्र सेटिंग्स के साथ एकाधिक वाहन प्रोफ़ाइल बनाएं",
        "जीपीएस गति को कैलिब्रेट करें और प्रत्येक वाहन प्रोफ़ाइल के लिए अलग-अलग गति ऑफसेट सेट करें",
        "प्रत्येक वाहन प्रोफ़ाइल के लिए त्वरित यात्रा लागत गणना",
        "कॉन्फ़िगर करने योग्य रंगों और गति सीमाओं, त्वरण पट्टियों, दृश्य प्रभावों और स्मार्ट अलर्ट के साथ अपने HUD को जीवंत बनाएं",
        "एक टैप से HUD बनाएं, डुप्लिकेट बनाएं, सुरक्षित रखें, हटाएं और स्विच करें, देर तक दबाएं या स्वाइप करें",
        "मित्रों के साथ HUD निर्यात, आयात और साझा करें",
        "दृश्य और श्रव्य अलर्ट",
        "एक साधारण स्वाइप के साथ विंडशील्ड प्रक्षेपण के लिए HUD को मिरर करें",
        "HUD को अनुकूलित करते समय वास्तविक समय में उसका पूर्वावलोकन करें",
        "वास्तविक समय त्वरण बार और पार्श्व जी-बल ग्राफ़",
        "कार, ​​मोटरसाइकिल, ट्रक, नाव, साइकिल, विमान और लगभग किसी भी वाहन के साथ काम करता है",
        "एकाधिक गति इकाइयों (किमी/घंटा, मील प्रति घंटे, समुद्री मील...) का समर्थन करता है",
        "पूरी तरह से कॉन्फ़िगर करने योग्य ओडोमीटर और 3 ट्रिप काउंटर",
        "अनेक भाषाओं के लिए समर्थन",
        "नई सुविधाओं और सुधारों के साथ नियमित अपडेट",
        "तेज़, हल्का और उपयोग में आसान"
      ]}]},
      { icon: "🎨", title: "प्रत्येक विवरण को अनुकूलित करें", cards: [{ items: [
        "किसी भी वाहन और ड्राइविंग शैली के लिए असीमित HUD बनाएं",
        "आपके HUD के हर पहलू पर पूर्ण नियंत्रण",
        "हजारों रंग और दर्जनों फ़ॉन्ट",
        "समायोज्य फ़ॉन्ट आकार और लेआउट",
        "विन्यास योग्य भाषाएँ और गति इकाइयाँ",
        "विन्यास योग्य गति सीमाएँ, चेतावनियाँ, प्रभाव, ध्वनियाँ और त्वरण पट्टियाँ",
        "गति, यात्राएं, लागत, जीपीएस, कम्पास, घड़ी और अधिक सहित एक टैप से विजेट को व्यक्तिगत रूप से दिखाएं या छिपाएं",
        "पूरी तरह से कॉन्फ़िगर करने योग्य, असीमित HUD लेआउट",
        "HUDs के बीच शीघ्रता से स्विच करने के लिए जेस्चर स्वाइप करें",
        "यादृच्छिक रंगों और महाकाव्य वाक्यांशों के साथ स्क्रीनसेवर मोड",
        "कॉन्फ़िगर करने योग्य, दृश्यमान टैप और लंबे समय तक प्रेस करने वाले क्षेत्र",
        "सभी ध्वनियों, प्रभावों और अलर्ट को म्यूट करने के त्वरित विकल्प",
        "गाड़ी चलाते समय वैकल्पिक डू नॉट डिस्टर्ब (डीएनडी) मोड"
      ]}]},
      { icon: "🛡️", title: "सुरक्षा और जिम्मेदारी", lead: "TrueGPS एक विज़ुअल ड्राइविंग सहायता है। यह वाहन प्रणालियों को प्रतिस्थापित नहीं करता है. सुरक्षा के लिए:", cards: [{ items: [
        "वाहन स्थिर होने पर ऐप सेट करें",
        "महत्वपूर्ण कार्यों को हमेशा पुष्टि की आवश्यकता होती है",
        "आपकी सहमति के बिना अपरिवर्तनीय परिवर्तन कभी नहीं किए जाते"
      ]}]},
      { icon: "💰", title: "क्रेडिट और प्रीमियम", lead: "उन्नत सुविधाओं को क्रेडिट या प्रीमियम के साथ अनलॉक किया जा सकता है। किसी सदस्यता की आवश्यकता नहीं है. लागत हमेशा पुष्टि से पहले दिखाई जाती है।" },
      { icon: "ℹ️", title: "महत्वपूर्ण नोट", lead: "ट्रूजीपीएस उपकरण प्रदान करता है - यह निर्णय नहीं लेता है। ऐप का उपयोग जिम्मेदारी से और अपने जोखिम पर करें।" },
      { icon: "👉", title: "के लिए आदर्श", cards: [{ items: [
        "के लिए आदर्श अपने वाहन को एक अनोखा रेट्रो या भविष्यवादी लुक देना",
        "कोई भी अधिक सटीक जीपीएस स्पीड रीडिंग की तलाश में है",
        "आधुनिक उपकरण के बिना एक क्लासिक या पुराने वाहन डैशबोर्ड को पुनर्स्थापित करना",
        "टूटे हुए या ग़लत स्पीडोमीटर को बदलना",
        "कार, ​​मोटरसाइकिल, ट्रक, नावें और भी बहुत कुछ",
        "बिना बिल्ट-इन स्पीडोमीटर वाले वाहन",
        "ड्राइवर जो पूरी तरह से अनुकूलन योग्य HUD चाहते हैं",
        "लंबी यात्राएं या रोजमर्रा का उपयोग",
        "विंडशील्ड HUD प्रक्षेपण",
        "वाहन की गति सटीकता की जाँच करना",
        "जीपीएस स्पीड के साथ डैशबोर्ड स्पीड की तुलना",
        "पेशेवर ड्राइवर और ड्राइविंग के शौकीन"
      ]}]}
    ],
    ending: [
      "चाहे आप आधुनिक इलेक्ट्रिक वाहन, क्लासिक कार, मोटरसाइकिल, ट्रक या यहां तक ​​कि नाव चलाते हों, TrueGPS आपके वाहन के अनुकूल हो जाता है - इसके विपरीत नहीं।",
      "कोई भी दो ड्राइवर एक जैसे नहीं होते. आपका HUD भी नहीं होना चाहिए.",
      "ट्रूजीपीएस स्पीड। एक ऐप. असीमित एचयूडी. कोई भी वाहन."
    ]
  },
  ja: {
    groups: [
      { icon: "🚀", title: "主な機能", cards: [{ items: [
        "独立したウィジェットを使用して、無制限で完全にカスタマイズ可能な HUD レイアウトを作成",
        "独立した設定で複数の車両プロファイルを作成",
        "GPS 速度を調整し、車両プロファイルごとに個別の速度オフセットを設定します",
        "各車両プロファイルの即時旅行コスト計算",
        "設定可能な色と速度範囲、加速バー、視覚効果、スマート アラートを使用して HUD に命を吹き込みます",
        "タップ、長押し、またはスワイプで HUD を作成、複製、保護、削除、切り替え",
        "HUD をエクスポート、インポートし、友人と共有します",
        "視覚的および聴覚的なアラート",
        "簡単なスワイプで HUD をミラーリングしてフロントガラスに投影",
        "HUD をカスタマイズしながらリアルタイムでプレビューする",
        "リアルタイムの加速度バーと横Gフォースグラフ",
        "車、オートバイ、トラック、ボート、自転車、航空機など、ほぼすべての乗り物に使用可能",
        "複数の速度単位をサポート (km/h、mph、ノットなど)",
        "完全に設定可能な走行距離計と 3 つのトリップカウンター",
        "複数の言語のサポート",
        "新機能や改善点を含む定期的なアップデート",
        "高速、軽量、使いやすい"
      ]}]},
      { icon: "🎨", title: "細部までカスタマイズ", cards: [{ items: [
        "あらゆる車両や運転スタイルに合わせて無制限の HUD を作成",
        "HUD のあらゆる側面を完全に制御",
        "数千の色と数十のフォント",
        "調整可能なフォント サイズとレイアウト",
        "構成可能な言語と速度単位",
        "設定可能な速度範囲、警告、効果、サウンド、加速バー",
        "速度、旅行、コスト、GPS、コンパス、時計などを含むウィジェットをタップで個別に表示または非表示にします",
        "完全に構成可能な無制限の HUD レイアウト",
        "スワイプ ジェスチャで HUD をすばやく切り替える",
        "ランダムな色と壮大なフレーズを備えたスクリーンセーバー モード",
        "設定可能な、表示されるタップおよび長押しゾーン",
        "すべてのサウンド、エフェクト、アラートをミュートするクイック オプション",
        "運転中のオプションのサイレント (DND) モード"
      ]}]},
      { icon: "🛡️", title: "安全と責任", lead: "TrueGPS は視覚的な運転支援装置です。車両システムを置き換えるものではありません。安全のため:", cards: [{ items: [
        "車両が停止しているときにアプリをセットアップします",
        "重要なアクションには常に確認が必要です",
        "不可逆的な変更はユーザーの同意なしに行われることはありません"
      ]}]},
      { icon: "💰", title: "クレジットとプレミアム", lead: "高度な機能は、クレジットまたはプレミアムでロックを解除できます。購読は必要ありません。コストは常に確認前に表示されます。" },
      { icon: "ℹ️", title: "重要な注意事項", lead: "TrueGPS はツールを提供しますが、意思決定を行うわけではありません。アプリはご自身の責任で責任を持ってご使用ください。" },
      { icon: "👉", title: "に最適", cards: [{ items: [
        "に最適あなたの車にユニークなレトロまたは未来的な外観を与えます",
        "より正確な GPS 速度測定を探している人",
        "最新の計装を使用せずにクラシックまたは古い車両のダッシュボードを復元する",
        "壊れた、または不正確なスピードメーターの交換",
        "車、オートバイ、トラック、ボートなど",
        "スピードメーターが内蔵されていない車両",
        "完全にカスタマイズ可能な HUD を必要とするドライバー",
        "長期旅行や日常使いに",
        "フロントガラス HUD 投影",
        "車速の精度を確認しています",
        "ダッシュボードの速度と GPS の速度を比較する",
        "プロのドライバーと運転愛好家"
      ]}]}
    ],
    ending: [
      "最新の電気自動車、クラシックカー、オートバイ、トラック、さらにはボートを運転する場合でも、TrueGPS はあなたの車両に適応します。その逆はありません。",
      "同じドライバーは 2 人もいません。あなたの HUD はどちらであってはなりません。",
      "TrueGPS の速度。アプリは 1 つ。無制限の HUD。あらゆる車両。"
    ]
  },
  ko: {
    groups: [
      { icon: "🚀", title: "주요 기능", cards: [{ items: [
        "독립적인 위젯으로 무제한의 완전 사용자 정의 가능한 HUD 레이아웃 생성",
        "독립적인 설정으로 여러 차량 프로필 생성",
        "GPS 속도를 보정하고 각 차량 프로필에 대한 개별 속도 오프셋 설정",
        "각 차량 프로필에 대한 즉각적인 이동 비용 계산",
        "구성 가능한 색상과 속도 범위, 가속 바, 시각 효과 및 스마트 알림을 통해 HUD에 생기를 불어넣으세요",
        "탭, 길게 누르기 또는 스와이프로 HUD 생성, 복제, 보호, 삭제 및 전환",
        "HUD 내보내기, 가져오기 및 친구와 공유",
        "시각적 및 청각적 경고",
        "간단한 스와이프로 앞유리 프로젝션을 위해 HUD를 미러링하세요",
        "HUD를 맞춤설정하면서 실시간으로 미리보기",
        "실시간 가속 막대 및 측면 G-포스 그래프",
        "자동차, 오토바이, 트럭, 보트, 자전거, 항공기 및 거의 모든 차량에서 작동",
        "다양한 속도 단위(km/h, mph, 노트...) 지원",
        "완전히 구성 가능한 주행 거리계 및 3개의 트립 카운터",
        "다국어 지원",
        "새로운 기능과 개선 사항이 포함된 정기 업데이트",
        "빠르고 가벼우며 사용하기 쉽습니다"
      ]}]},
      { icon: "🎨", title: "모든 세부사항을 맞춤화하세요", cards: [{ items: [
        "모든 차량 및 운전 스타일에 맞는 무제한 HUD 생성",
        "HUD의 모든 측면을 완벽하게 제어",
        "수천 가지 색상과 수십 가지 글꼴",
        "조정 가능한 글꼴 크기 및 레이아웃",
        "구성 가능한 언어 및 속도 단위",
        "구성 가능한 속도 범위, 경고, 효과, 소리 및 가속 막대",
        "탭 한 번으로 속도, 이동 경로, 비용, GPS, 나침반, 시계 등을 포함한 위젯을 개별적으로 표시하거나 숨길 수 있습니다.",
        "완전히 구성 가능한 무제한 HUD 레이아웃",
        "스와이프 동작으로 HUD 간 빠르게 전환",
        "임의의 색상과 멋진 문구가 포함된 화면 보호기 모드",
        "구성 가능하고 눈에 보이는 탭 및 길게 누르기 영역",
        "모든 소리, 효과 및 알림을 음소거하는 빠른 옵션",
        "운전 중 방해 금지(DND) 모드 옵션"
      ]}]},
      { icon: "🛡️", title: "안전과 책임", lead: "TrueGPS는 시각적인 운전 보조 장치입니다. 이는 차량 시스템을 대체하지 않습니다. 안전을 위해:", cards: [{ items: [
        "차량이 정지해 있는 동안 앱을 설정하세요",
        "중요한 작업에는 항상 확인이 필요합니다",
        "귀하의 동의 없이는 되돌릴 수 없는 변경이 절대 이루어지지 않습니다"
      ]}]},
      { icon: "💰", title: "크레딧과 프리미엄", lead: "고급 기능은 크레딧이나 프리미엄으로 잠금 해제할 수 있습니다. 구독이 필요하지 않습니다. 비용은 항상 확인 전에 표시됩니다." },
      { icon: "ℹ️", title: "중요사항", lead: "TrueGPS는 도구를 제공하지만 결정을 내리지는 않습니다. 책임감 있게 앱을 사용하고 위험을 감수하십시오." },
      { icon: "👉", title: "다음에 이상적입니다.", cards: [{ items: [
        "에 적합 귀하의 차량에 독특한 복고풍 또는 미래 지향적인 모습을 더해 보세요",
        "보다 정확한 GPS 속도 판독을 원하는 사람",
        "최신 장비 없이 클래식 또는 구형 차량 대시보드 복원",
        "고장나거나 부정확한 속도계 교체",
        "자동차, 오토바이, 트럭, 보트 등",
        "속도계가 내장되지 않은 차량",
        "완전히 맞춤화된 HUD를 원하는 운전자",
        "장거리 여행이나 일상적인 사용",
        "앞유리 HUD 투영",
        "차량 속도 정확도 확인 중",
        "대시보드 속도와 GPS 속도 비교",
        "전문 운전자 및 운전 매니아"
      ]}]}
    ],
    ending: [
      "최신 전기 자동차, 클래식 자동차, 오토바이, 트럭 또는 보트를 운전하든 TrueGPS는 차량에 적응합니다.",
      "두 명의 운전자가 동일하지 않습니다. 귀하의 HUD도 그렇지 않아야 합니다.",
      "TrueGPS 속도. 하나의 앱. 무제한 HUD. 모든 차량."
    ]
  },
  br: {
    groups: [
      { icon: "🚀", title: "Principais recursos", cards: [{ items: [
        "Crie layouts de HUD ilimitados e totalmente personalizáveis ​​com widgets independentes",
        "Crie vários perfis de veículos com configurações independentes",
        "Calibrar a velocidade do GPS e definir compensações de velocidade individuais para cada perfil de veículo",
        "Cálculo instantâneo do custo da viagem para cada perfil de veículo",
        "Dê vida aos seus HUDs com cores e faixas de velocidade configuráveis, barras de aceleração, efeitos visuais e alertas inteligentes",
        "Crie, duplique, proteja, exclua e troque HUDs com um toque, toque longo ou deslize",
        "Exporte, importe e compartilhe HUDs com amigos",
        "Alertas visuais e sonoros",
        "Espelhe o HUD para projeção do para-brisa com um simples toque",
        "Visualize o HUD em tempo real enquanto o personaliza",
        "Barras de aceleração em tempo real e gráficos de força G lateral",
        "Funciona com carros, motos, caminhões, barcos, bicicletas, aeronaves e quase todos os veículos",
        "Suporta múltiplas unidades de velocidade (km/h, mph, nós...)",
        "Conta-quilómetros totalmente configurável e 3 contadores de viagem",
        "Suporte para vários idiomas",
        "Atualizações regulares com novos recursos e melhorias",
        "Rápido, leve e fácil de usar"
      ]}]},
      { icon: "🎨", title: "Personalize cada detalhe", cards: [{ items: [
        "Crie HUDs ilimitados para qualquer veículo e estilo de direção",
        "Controle total sobre todos os aspectos do seu HUD",
        "Milhares de cores e dezenas de fontes",
        "Tamanhos de fonte e layouts ajustáveis ​​",
        "Linguagens configuráveis ​​e unidades de velocidade",
        "Faixas de velocidade configuráveis, avisos, efeitos, sons e barras de aceleração",
        "Mostre ou oculte widgets individualmente com um toque, incluindo Velocidade, Viagens, Custos, GPS, Bússola, Relógio e muito mais",
        "Layouts de HUD ilimitados e totalmente configuráveis ​​",
        "Gestos de deslize para alternar rapidamente entre HUDs",
        "Modo protetor de tela com cores aleatórias e frases épicas",
        "Zonas de toque e toque longo configuráveis ​​e visíveis",
        "Opções rápidas para silenciar todos os sons, efeitos e alertas",
        "Modo opcional Não perturbe (DND) durante a condução"
      ]}]},
      { icon: "🛡️", title: "Segurança e Responsabilidade", lead: "TrueGPS é um auxílio visual à direção. Não substitui os sistemas do veículo. Por segurança:", cards: [{ items: [
        "Configure o aplicativo enquanto o veículo está parado",
        "Ações críticas sempre exigem confirmação",
        "Mudanças irreversíveis nunca são feitas sem o seu consentimento"
      ]}]},
      { icon: "💰", title: "Créditos e Prêmio", lead: "Recursos avançados podem ser desbloqueados com Créditos ou Premium. Nenhuma assinatura é necessária. Os custos são sempre apresentados antes da confirmação." },
      { icon: "ℹ️", title: "Nota importante", lead: "TrueGPS fornece ferramentas – não toma decisões. Use o aplicativo com responsabilidade e por sua conta e risco." },
      { icon: "👉", title: "Ideal para", cards: [{ items: [
        "Dando ao seu veículo um visual retro ou futurista único",
        "Quem procura uma leitura de velocidade do GPS mais precisa",
        "Restaurar o painel de um veículo clássico ou antigo sem instrumentação moderna",
        "Substituir um velocímetro quebrado ou impreciso",
        "Carros, motos, caminhões, barcos e muito mais",
        "Veículos sem velocímetro integrado",
        "Drivers que desejam um HUD totalmente personalizável",
        "Viagens longas ou uso diário",
        "Projeção HUD do para-brisa",
        "Verificação da precisão da velocidade do veículo",
        "Comparando a velocidade do painel com a velocidade do GPS",
        "Motoristas profissionais e entusiastas da condução"
      ]}]}
    ],
    ending: [
      "Quer você dirija um veículo elétrico moderno, um carro clássico, uma motocicleta, um caminhão ou até mesmo um barco, o TrueGPS se adapta ao seu veículo – e não o contrário.",
      "Não existem dois pilotos iguais. Seu HUD também não deveria ser.",
      "Velocidade TrueGPS. Um aplicativo. HUDs ilimitados. Qualquer veículo."
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
    (data.ending || []).forEach(function (text) { addText(root, 'p', text, rootId === 'about-content' ? 'feature-ending about-ending' : 'feature-ending'); });
  }

  renderGroups('feature-content', window.FEATURES[lang] || window.FEATURES[code] || window.FEATURES.en || window.FEATURES.pt);
  renderGroups('about-content', window.ABOUT[lang] || window.ABOUT[code] || window.ABOUT.en || window.ABOUT.pt);
  renderGroups('feature-content-2', window.FEATURES2[lang] || window.FEATURES2[code] || window.FEATURES2.en || window.FEATURES2.pt);
};
