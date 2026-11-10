/* =========================================================
   TrueGPS Speed – TERMOS DE SERVIÇO (traduções + dropdown)
   Usado por terms_of_service.html

   COMO EDITAR UM TEXTO: procura a língua (ex.: "fr") e muda a frase.
   COMO ACRESCENTAR UMA LÍNGUA:
     1) acrescenta-a em "langs", "copy", "labels" e "privacy"
     2) em "copy" copia o bloco de "en" e traduz
   Cada língua em "copy" tem 4 partes, por esta ordem:
     [0] título   [1] introdução   [2] títulos das 7 secções   [3] textos das 7 secções
   ========================================================= */


/* ---------- Línguas que aparecem na dropdown ---------- */
var langs = {
  "pt":"🇵🇹 Português (Portugal)",
  "br":"🇧🇷 Português (Brasil)",
  "en":"🇬🇧 English",
  "fr":"🇫🇷 Français",
  "es":"🇪🇸 Español",
  "de":"🇩🇪 Deutsch",
  "it":"🇮🇹 Italiano",
  "ru":"🇷🇺 Русский",
  "tr":"🇹🇷 Türkçe",
  "id":"🇮🇩 Bahasa Indonesia",
  "hi":"🇮🇳 हिन्दी (Hindi)",
  "ja":"🇯🇵 日本語",
  "ko":"🇰🇷 한국어"
};


/* ---------- Textos por língua ---------- */
var copy = {

  /* ===== EN: English ===== */
  en: [
    "Terms of Service",
    "Effective 9 November 2026. These terms cover the TrueGPS Speed website and Android app. Mandatory consumer rights remain unaffected.",
    [
      "Service",
      "Safe driving",
      "GPS information",
      "Purchases",
      "Use and ownership",
      "Privacy and third parties",
      "Availability and rights"
    ],
    [
      "TrueGPS Speed is a GPS speedometer and customizable HUD published under the Laranjinha Software name.  Features may change.",
      "The app is an auxiliary visual tool, not a replacement for vehicle instruments, road signs, or driver judgment. Configure it while parked and never handle your phone while driving.",
      "GPS speed and trip data depend on device, signal, settings, and environment and may be inaccurate or delayed. Do not rely on the app alone for critical decisions.",
      "Features, prices, billing periods, renewals, and cancellation terms are shown on Google Play or before purchase. Google Play handles applicable billing; consumer rights remain unaffected.",
      "Use the service lawfully. The app, brand, software, and original content are protected. You receive a personal, limited, non-transferable right to use the app.",
      "See our Privacy Policy for personal-data handling. Google Play, YouTube, and other third-party services have their own terms and privacy notices.",
      "We aim to maintain availability but do not guarantee uninterrupted service or compatibility with every device. Rights and liability that cannot legally be excluded remain. "
    ]
  ],

  /* ===== PT: Português (Portugal) ===== */
  pt: [
    "Termos de Serviço",
    "Em vigor desde 9 de novembro de 2026. Estes termos regulam o site e a aplicação Android TrueGPS Speed. Mantêm-se os direitos obrigatórios do consumidor.",
    [
      "Serviço",
      "Condução segura",
      "Informação GPS",
      "Compras",
      "Utilização e propriedade",
      "Privacidade e terceiros",
      "Disponibilidade e direitos"
    ],
    [
      "A TrueGPS Speed é um velocímetro GPS e HUD personalizável, publicado sob o nome Laranjinha Software.  As funcionalidades podem mudar.",
      "A aplicação é uma ferramenta visual auxiliar, não substitui instrumentos, sinalização ou o julgamento do condutor. Configure-a com o veículo parado e nunca utilize o telemóvel enquanto conduz.",
      "A velocidade GPS e os dados de viagem dependem do dispositivo, sinal, definições e ambiente e podem ser imprecisos ou estar atrasados. Não confie apenas na aplicação para decisões críticas.",
      "Funcionalidades, preços, períodos, renovações e cancelamentos são apresentados na Google Play ou antes da compra. A Google Play processa as cobranças; mantêm-se os direitos do consumidor.",
      "Utilize o serviço legalmente. A aplicação, marca, software e conteúdos originais estão protegidos. É concedido um direito de utilização pessoal, limitado e intransmissível.",
      "Consulte a Política de Privacidade sobre dados pessoais. Google Play, YouTube e outros serviços externos têm termos e avisos próprios.",
      "Procuramos manter o serviço disponível, sem garantir funcionamento contínuo ou compatibilidade universal. Mantêm-se direitos e responsabilidades que a lei não permita excluir. "
    ]
  ],

  /* ===== BR: Português (Brasil) ===== */
  br: [
    "Termos de Serviço",
    "Vigentes desde 9 de novembro de 2026. Estes termos regulam o site e o app Android TrueGPS Speed. Os direitos obrigatórios do consumidor são preservados.",
    [
      "Serviço",
      "Direção segura",
      "Informações GPS",
      "Compras",
      "Uso e propriedade",
      "Privacidade e terceiros",
      "Disponibilidade e direitos"
    ],
    [
      "TrueGPS Speed é um velocímetro GPS e HUD personalizável, publicado como Laranjinha Software.  Os recursos podem mudar.",
      "O app é uma ferramenta visual auxiliar, não substitui instrumentos, placas ou o julgamento do motorista. Configure com o veículo parado e não use o celular ao dirigir.",
      "A velocidade GPS e os dados da viagem dependem do dispositivo, sinal, configurações e ambiente e podem ser imprecisos ou atrasar. Não confie apenas no app para decisões críticas.",
      "Recursos, preços, períodos, renovações e cancelamentos são informados no Google Play ou antes da compra. O Google Play processa cobranças; os direitos do consumidor são preservados.",
      "Use o serviço legalmente. App, marca, software e conteúdo original são protegidos. É concedido direito pessoal, limitado e intransferível de uso.",
      "Consulte a Política de Privacidade sobre dados pessoais. Google Play, YouTube e outros serviços têm termos e avisos próprios.",
      "Buscamos manter o serviço disponível, sem garantir operação contínua ou compatibilidade universal. Direitos e responsabilidades que a lei não permita excluir são preservados. "
    ]
  ],

  /* ===== FR: Français ===== */
  fr: [
    "Conditions d’utilisation",
    "En vigueur le 9 novembre 2026. Ces conditions régissent le site et l’application Android TrueGPS Speed. Les droits impératifs des consommateurs restent applicables.",
    [
      "Service",
      "Conduite sûre",
      "Données GPS",
      "Achats",
      "Usage et propriété",
      "Confidentialité et tiers",
      "Disponibilité et droits"
    ],
    [
      "TrueGPS Speed est un compteur GPS et HUD personnalisable publié sous le nom Laranjinha Software.  Les fonctions peuvent évoluer.",
      "L’application est un outil auxiliaire, pas un remplacement des instruments, panneaux ou du jugement du conducteur. Configurez-la à l’arrêt et ne manipulez pas le téléphone en conduisant.",
      "La vitesse GPS dépend de l’appareil, du signal, des réglages et de l’environnement ; elle peut être inexacte ou retardée. Ne vous y fiez pas seuls pour les décisions critiques.",
      "Fonctions, prix, périodes, renouvellement et résiliation sont indiqués sur Google Play ou avant l’achat. Google Play traite les paiements ; les droits des consommateurs restent applicables.",
      "Utilisez le service légalement. L’application, la marque, le logiciel et les contenus originaux sont protégés. Un droit d’usage personnel, limité et non transférable est accordé.",
      "Consultez notre Politique de confidentialité pour les données. Google Play, YouTube et les tiers ont leurs propres conditions.",
      "Nous visons la disponibilité sans garantir un fonctionnement continu ni la compatibilité universelle. Les droits et responsabilités non excluables restent applicables. "
    ]
  ],

  /* ===== ES: Español ===== */
  es: [
    "Términos del servicio",
    "Vigentes desde el 9 de noviembre de 2026. Estas condiciones regulan el sitio y la aplicación Android TrueGPS Speed. Se respetan los derechos imperativos del consumidor.",
    [
      "Servicio",
      "Conducción segura",
      "Datos GPS",
      "Compras",
      "Uso y propiedad",
      "Privacidad y terceros",
      "Disponibilidad y derechos"
    ],
    [
      "TrueGPS Speed es un velocímetro GPS y HUD personalizable publicado como Laranjinha Software.  Las funciones pueden cambiar.",
      "La aplicación es una herramienta auxiliar, no sustituye instrumentos, señales ni el criterio del conductor. Configúrala con el vehículo parado y no uses el teléfono al conducir.",
      "La velocidad GPS depende del dispositivo, señal, ajustes y entorno; puede ser imprecisa o tardía. No confíes solo en la aplicación para decisiones críticas.",
      "Funciones, precios, periodos, renovaciones y cancelaciones se muestran en Google Play o antes de comprar. Google Play procesa los pagos; se respetan los derechos del consumidor.",
      "Usa el servicio legalmente. La aplicación, marca, software y contenido original están protegidos. Se concede un derecho personal, limitado e intransferible de uso.",
      "Consulta la Política de privacidad sobre datos personales. Google Play, YouTube y otros terceros tienen sus propias condiciones.",
      "Intentamos mantener el servicio, sin garantizar continuidad ni compatibilidad universal. Se respetan los derechos y responsabilidades que la ley no permite excluir. "
    ]
  ],

  /* ===== DE: Deutsch ===== */
  de: [
    "Nutzungsbedingungen",
    "Gültig ab 9. November 2026. Diese Bedingungen regeln die TrueGPS-Speed-Website und Android-App. Zwingende Verbraucherrechte bleiben unberührt.",
    [
      "Dienst",
      "Sicheres Fahren",
      "GPS-Daten",
      "Käufe",
      "Nutzung und Eigentum",
      "Datenschutz und Drittanbieter",
      "Verfügbarkeit und Rechte"
    ],
    [
      "TrueGPS Speed ist ein GPS-Tachometer und anpassbares HUD von Laranjinha Software.  Funktionen können geändert werden.",
      "Die App ist ein visuelles Hilfsmittel und ersetzt weder Instrumente, Verkehrszeichen noch Ihr Urteil. Richten Sie sie im Stand ein und bedienen Sie das Telefon nicht während der Fahrt.",
      "GPS-Daten hängen von Gerät, Signal, Einstellungen und Umgebung ab und können ungenau oder verzögert sein. Verlassen Sie sich bei wichtigen Entscheidungen nicht allein darauf.",
      "Funktionen, Preise, Abrechnungszeiträume, Verlängerung und Kündigung werden in Google Play oder vor dem Kauf angezeigt. Verbraucherrechte bleiben bestehen.",
      "Nutzen Sie den Dienst rechtmäßig. App, Marke, Software und Originalinhalte sind geschützt. Sie erhalten ein persönliches, beschränktes, nicht übertragbares Nutzungsrecht.",
      "Informationen zu Daten finden Sie in der Datenschutzerklärung. Für Google Play, YouTube und andere Drittanbieter gelten deren eigene Bedingungen.",
      "Wir bemühen uns um Verfügbarkeit, garantieren aber keinen ununterbrochenen Betrieb oder Gerätekompatibilität. Gesetzlich nicht ausschließbare Rechte und Haftung bleiben bestehen. "
    ]
  ],

  /* ===== IT: Italiano ===== */
  it: [
    "Termini di servizio",
    "In vigore dal 9 novembre 2026. Queste condizioni regolano il sito e l’app Android TrueGPS Speed. Restano validi i diritti inderogabili dei consumatori.",
    [
      "Servizio",
      "Guida sicura",
      "Dati GPS",
      "Acquisti",
      "Uso e proprietà",
      "Privacy e terze parti",
      "Disponibilità e diritti"
    ],
    [
      "TrueGPS Speed è un tachimetro GPS e HUD personalizzabile pubblicato come Laranjinha Software.  Le funzioni possono cambiare.",
      "L’app è uno strumento ausiliario e non sostituisce strumenti, segnali o giudizio del conducente. Configurala a veicolo fermo e non usare il telefono alla guida.",
      "Velocità GPS e dati dipendono da dispositivo, segnale, impostazioni e ambiente e possono essere imprecisi o in ritardo. Non basarti solo sull’app per decisioni critiche.",
      "Funzioni, prezzi, periodi, rinnovi e cancellazioni sono mostrati su Google Play o prima dell’acquisto. I diritti dei consumatori restano validi.",
      "Usa il servizio legalmente. App, marchio, software e contenuti originali sono protetti. È concesso un diritto d’uso personale, limitato e non trasferibile.",
      "Consulta l’Informativa sulla privacy per i dati. Google Play, YouTube e altri servizi hanno condizioni proprie.",
      "Cerchiamo di mantenere il servizio, senza garantire continuità o compatibilità universale. Restano validi i diritti e le responsabilità non escludibili per legge. "
    ]
  ],

  /* ===== RU: Русский ===== */
  ru: [
    "Условия использования",
    "Действуют с 9 ноября 2026 года. Условия регулируют сайт и приложение TrueGPS Speed. Обязательные права потребителей сохраняются.",
    [
      "Сервис",
      "Безопасное вождение",
      "Данные GPS",
      "Покупки",
      "Использование и права",
      "Конфиденциальность и третьи лица",
      "Доступность и права"
    ],
    [
      "TrueGPS Speed — GPS-спидометр и настраиваемый HUD от Laranjinha Software.  Функции могут меняться.",
      "Приложение — вспомогательный визуальный инструмент, не замена приборам, знакам и решению водителя. Настраивайте его на стоянке и не пользуйтесь телефоном за рулём.",
      "Данные GPS зависят от устройства, сигнала, настроек и условий; возможны задержки и неточности. Не полагайтесь только на приложение при важных решениях.",
      "Функции, цены, периоды оплаты, продление и отмена указаны в Google Play или до покупки. Права потребителей сохраняются.",
      "Используйте сервис законно. Приложение, бренд, ПО и оригинальные материалы защищены. Предоставляется личное, ограниченное и непередаваемое право использования.",
      "Порядок работы с данными указан в Политике конфиденциальности. Для Google Play, YouTube и других сервисов действуют их условия.",
      "Мы поддерживаем работу сервиса, но не гарантируем её непрерывность или совместимость со всеми устройствами. Неисключаемые законом права и ответственность сохраняются. "
    ]
  ],

  /* ===== HI: हिन्दी ===== */
  hi: [
    "सेवा की शर्तें",
    "9 नवंबर 2026 से प्रभावी। ये शर्तें TrueGPS Speed वेबसाइट और Android ऐप पर लागू हैं। उपभोक्ता के अनिवार्य अधिकार सुरक्षित हैं।",
    [
      "सेवा",
      "सुरक्षित ड्राइविंग",
      "GPS जानकारी",
      "खरीद",
      "उपयोग और स्वामित्व",
      "गोपनीयता और तीसरे पक्ष",
      "उपलब्धता और права"
    ],
    [
      "TrueGPS Speed, Laranjinha Software द्वारा प्रकाशित GPS स्पीडोमीटर और अनुकूलन योग्य HUD है।  सुविधाएँ बदल सकती हैं।",
      "ऐप सहायक दृश्य उपकरण है, वाहन मीटर, सड़क संकेत या चालक के निर्णय का विकल्प नहीं। वाहन रोककर सेट करें और ड्राइव करते समय फोन न चलाएँ।",
      "GPS डेटा डिवाइस, सिग्नल, सेटिंग और वातावरण पर निर्भर है; गलत या देर से आ सकता है। महत्वपूर्ण निर्णयों के लिए केवल ऐप पर निर्भर न रहें।",
      "सुविधाएँ, कीमतें, बिलिंग अवधि, नवीनीकरण और रद्द करने की जानकारी Google Play या खरीद से पहले दी जाती है। उपभोक्ता अधिकार सुरक्षित हैं।",
      "सेवा का कानूनी उपयोग करें। ऐप, ब्रांड, सॉफ्टवेयर और मूल सामग्री संरक्षित हैं। व्यक्तिगत, सीमित और अहस्तांतरणीय उपयोग-अधिकार दिया जाता है।",
      "डेटा का विवरण गोपनीयता नीति में है। Google Play, YouTube और अन्य सेवाओं के अपने नियम लागू होते हैं।",
      "हम उपलब्धता का प्रयास करते हैं, पर निरंतर संचालन या सभी उपकरणों के साथ अनुकूलता की गारंटी नहीं। कानूनन सुरक्षित अधिकार और दायित्व बने रहते हैं। "
    ]
  ],

  /* ===== ID: Bahasa Indonesia ===== */
  id: [
    "Ketentuan Layanan",
    "Berlaku sejak 9 November 2026. Ketentuan ini mengatur situs dan aplikasi Android TrueGPS Speed. Hak konsumen tetap berlaku.",
    [
      "Layanan",
      "Berkendara aman",
      "Informasi GPS",
      "Pembelian",
      "Penggunaan dan kepemilikan",
      "Privasi dan pihak ketiga",
      "Ketersediaan dan hak"
    ],
    [
      "TrueGPS Speed adalah speedometer GPS dan HUD yang dapat disesuaikan, diterbitkan oleh Laranjinha Software.  Fitur dapat berubah.",
      "Aplikasi ini alat visual pendukung, bukan pengganti instrumen kendaraan, rambu, atau penilaian pengemudi. Atur saat berhenti dan jangan gunakan ponsel saat berkendara.",
      "Data GPS bergantung pada perangkat, sinyal, pengaturan, dan lingkungan; data dapat terlambat atau tidak akurat. Jangan hanya mengandalkan aplikasi untuk keputusan penting.",
      "Fitur, harga, periode tagihan, perpanjangan, dan pembatalan ditampilkan di Google Play atau sebelum pembelian. Hak konsumen tetap berlaku.",
      "Gunakan layanan secara sah. Aplikasi, merek, perangkat lunak, dan konten asli dilindungi. Hak penggunaan bersifat pribadi, terbatas, dan tidak dapat dialihkan.",
      "Pengelolaan data dijelaskan di Kebijakan Privasi. Google Play, YouTube, dan layanan lain memiliki ketentuan sendiri.",
      "Kami berupaya menjaga layanan tersedia tanpa menjamin operasi tanpa gangguan atau kompatibilitas universal. Hak yang tak dapat dikecualikan tetap berlaku. "
    ]
  ],

  /* ===== TR: Türkçe ===== */
  tr: [
    "Hizmet Şartları",
    "9 Kasım 2026 tarihinde yürürlüğe girer. Bu şartlar TrueGPS Speed sitesi ve Android uygulamasını kapsar. Zorunlu tüketici hakları saklıdır.",
    [
      "Hizmet",
      "Güvenli sürüş",
      "GPS bilgisi",
      "Satın almalar",
      "Kullanım ve mülkiyet",
      "Gizlilik ve üçüncü taraflar",
      "Kullanılabilirlik ve haklar"
    ],
    [
      "TrueGPS Speed, Laranjinha Software tarafından yayımlanan GPS hız göstergesi ve özelleştirilebilir HUD uygulamasıdır.  Özellikler değişebilir.",
      "Uygulama yardımcı görsel araçtır; araç göstergelerinin, trafik işaretlerinin veya sürücü kararının yerini tutmaz. Araç dururken ayarlayın, sürüşte telefonu kullanmayın.",
      "GPS verileri cihaz, sinyal, ayarlar ve çevreye bağlıdır; gecikebilir veya hatalı olabilir. Önemli kararlar için yalnızca uygulamaya güvenmeyin.",
      "Özellikler, fiyatlar, fatura dönemi, yenileme ve iptal bilgileri Google Play’de veya satın alma öncesinde gösterilir. Tüketici hakları saklıdır.",
      "Hizmeti yasal kullanın. Uygulama, marka, yazılım ve özgün içerik korunur. Kişisel, sınırlı ve devredilemez kullanım hakkı verilir.",
      "Veri işleme Gizlilik Politikamızda açıklanır. Google Play, YouTube ve diğer hizmetlerin kendi şartları vardır.",
      "Hizmeti sürdürmeye çalışırız; kesintisiz çalışma veya her cihazla uyumluluk garanti edilmez. Hariç tutulamayan yasal hak ve sorumluluklar saklıdır. "
    ]
  ],

  /* ===== JA: 日本語 ===== */
  ja: [
    "利用規約",
    "2026年11月9日発効。本規約はTrueGPS SpeedのウェブサイトとAndroidアプリに適用されます。強行法上の消費者の権利は影響を受けません。",
    [
      "サービス",
      "安全運転",
      "GPS情報",
      "購入",
      "利用と権利",
      "プライバシーと第三者",
      "提供状況と権利"
    ],
    [
      "TrueGPS SpeedはLaranjinha Softwareが公開するGPS速度計とカスタマイズ可能なHUDです。機能は変更される場合があります。",
      "補助的な視覚ツールであり、車両計器、道路標識、運転者の判断に代わりません。停車中に設定し、運転中は電話を操作しないでください。",
      "GPS情報は端末、信号、設定、環境に依存し、遅延や誤差が生じます。重要な判断をアプリだけに頼らないでください。",
      "機能、価格、請求期間、更新、解約条件はGoogle Playまたは購入前に表示されます。消費者の権利は維持されます。",
      "合法的に利用してください。アプリ、ブランド、ソフトウェア、独自コンテンツは保護されています。個人的、限定的、譲渡不可の利用権が付与されます。",
      "データの取扱いはプライバシーポリシーに記載されています。Google Play、YouTube等には各社の規約が適用されます。",
      "継続提供に努めますが、無停止運用や全端末との互換性は保証しません。法的に除外できない権利と責任は維持されます。"
    ]
  ],

  /* ===== KO: 한국어 ===== */
  ko: [
    "서비스 약관",
    "2026년 11월 9일부터 적용됩니다. 본 약관은 TrueGPS Speed 웹사이트와 Android 앱에 적용됩니다. 강행 소비자 권리는 유지됩니다.",
    [
      "서비스",
      "안전 운전",
      "GPS 정보",
      "구매",
      "이용 및 소유권",
      "개인정보 및 제3자",
      "이용 가능성 및 권리"
    ],
    [
      "TrueGPS Speed는 Laranjinha Software가 제공하는 GPS 속도계 및 맞춤형 HUD입니다.  기능은 변경될 수 있습니다.",
      "보조 시각 도구이며 차량 계기판, 도로 표지 또는 운전자 판단을 대신하지 않습니다. 정차 중 설정하고 운전 중 휴대전화를 조작하지 마세요.",
      "GPS 정보는 기기, 신호, 설정, 환경에 따라 달라지며 지연되거나 부정확할 수 있습니다. 중요한 판단을 앱에만 의존하지 마세요.",
      "기능, 가격, 결제 기간, 갱신 및 취소 조건은 Google Play 또는 구매 전에 표시됩니다. 소비자 권리는 유지됩니다.",
      "서비스를 합법적으로 이용하세요. 앱, 브랜드, 소프트웨어와 원본 콘텐츠는 보호됩니다. 개인적·제한적·양도 불가한 이용권이 부여됩니다.",
      "개인정보 처리는 개인정보 처리방침에 설명되어 있습니다. Google Play, YouTube 등에는 각 서비스의 약관이 적용됩니다.",
      "서비스 유지를 위해 노력하지만 무중단 운영이나 모든 기기 호환성을 보장하지 않습니다. 법적으로 제외할 수 없는 권리와 책임은 유지됩니다. "
    ]
  ]
};





/* =========================================================
   CÓDIGO (não precisas de mexer daqui para baixo)
   ========================================================= */

var sel  = document.getElementById('terms-lang');   // a dropdown
var main = document.getElementById('terms-main');   // onde o texto é desenhado


/* Lê um parâmetro do endereço, ex.: ?lang=fr&theme=dark */
function getParam(name) {
  var q = location.search.replace(/^\?/, '').split('&');
  for (var i = 0; i < q.length; i++) {
    var pair = q[i].split('=');
    if (decodeURIComponent(pair[0].replace(/\+/g, ' ')) === name) {
      return decodeURIComponent((pair.slice(1).join('=') || '').replace(/\+/g, ' '));
    }
  }
  return '';
}


/* Desenha a página na língua escolhida */
function render(lang) {
  var t = copy[lang] || copy.en;                    // sem tradução → inglês

  document.documentElement.lang = (lang === 'br') ? 'pt-BR' : lang;
  document.title = 'TrueGPS Speed — ' + t[0];
  sel.value = lang;

  var sections = '';
  for (var i = 0; i < t[2].length; i++) {
    sections += '<section><h2>' + (i + 1) + '. ' + t[2][i] + '</h2><p>' + t[3][i] + '</p></section>';
  }

  main.innerHTML =
    '<h1>' + t[0] + '</h1>' +
    '<p class="intro">' + t[1] + '</p>' +
    sections;
}

/* Preenche a dropdown, se ainda estiver vazia */
if (sel.options.length === 0) {
  for (var code in langs) {
    if (Object.prototype.hasOwnProperty.call(langs, code)) {
      var option = document.createElement('option');
      option.value = code;
      option.textContent = langs[code];
      sel.appendChild(option);
    }
  }
}


/* Língua inicial: ?lang=... no endereço > a guardada > a do browser > inglês */
var initial = getParam('lang');
if (!copy[initial]) {
  try { initial = localStorage.getItem('lang') || ''; } catch (e) { initial = ''; }
}
if (!copy[initial]) {
  var browser = (navigator.language || 'en').toLowerCase();
  browser = (browser === 'pt-br') ? 'br' : browser.slice(0, 2);
  initial = copy[browser] ? browser : 'en';
}


/* Tema inicial: ?theme=... no endereço > o guardado */
var savedTheme = getParam('theme');
if (savedTheme !== 'light' && savedTheme !== 'dark') {
  try { savedTheme = localStorage.getItem('theme'); } catch (e) { savedTheme = ''; }
}
if (savedTheme === 'light' || savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', savedTheme);
}


render(initial);


/* Ao mudar a língua na dropdown: guarda, atualiza o endereço e desenha de novo */
sel.onchange = function () {
  var lang = sel.value;
  try { localStorage.setItem('lang', lang); } catch (e) {}

  try {
    if (history && history.replaceState) {
      var theme = getParam('theme');
      history.replaceState(null, '', location.pathname + '?lang=' + encodeURIComponent(lang) + (theme ? '&theme=' + encodeURIComponent(theme) : ''));
    }
  } catch (e) {}

  render(lang);
};