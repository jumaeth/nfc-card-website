// Central place for brand + marketing copy. Change BRAND here to rename everything.
// User-facing strings are wrapped in l(EN, DE, FR, IT) — see src/lib/locale.ts.
// Non-translated values (names, prices, hrefs, keys) stay as plain strings.
//
// NOTE: DE/FR/IT copy below was revised for a professional launch tone. Please
// have a native speaker proofread before going live, especially Swiss phrasing.
import { l, type L } from "@/lib/locale";

export const BRAND = "Taplino";

export const site = {
  brand: BRAND,
  tagline: l(
    "One tap. Every connection.",
    "Ein Tap. Jede Verbindung.",
    "Un tap. Toutes les connexions.",
    "Un tap. Ogni connessione.",
  ),
  email: "hello@taplino.ch",
  phone: "+41 44 000 00 00",
  city: l(
    "Switzerland",
    "Schweiz",
    "Suisse",
    "Svizzera",
  ),
  languages: ["EN", "DE", "FR", "IT"] as const,
};

export const nav = [
  { label: l("Products", "Produkte", "Produits", "Prodotti"), href: "#products" },
  { label: l("Pricing", "Preise", "Tarifs", "Prezzi"), href: "#pricing" },
  { label: l("Design your card", "Karte gestalten", "Concevez votre carte", "Progetta la tua carta"), href: "/editor" },
];

export const heroStats = [
  { value: "0", label: l("Apps to install", "Apps zu installieren", "Applis à installer", "App da installare") },
  { value: "1 tap", label: l("To reviews, menu or links", "Zu Bewertungen, Menü oder Links", "Vers avis, menu ou liens", "Verso recensioni, menu o link") },
];

export const destinations = [
  {
    key: "reviews",
    label: l("Google Reviews", "Google-Bewertungen", "Avis Google", "Recensioni Google"),
    title: l("Rate your visit", "Bewerten Sie Ihren Besuch", "Évaluez votre visite", "Valuta la tua visita"),
    subtitle: "Café Bellevue",
    accent: "#f0431f",
  },
  {
    key: "menu",
    label: l("Digital Menu", "Digitales Menü", "Menu digital", "Menu digitale"),
    title: l("Today's menu", "Menü des Tages", "Menu du jour", "Menu di oggi"),
    subtitle: "Ristorante Da Marco",
    accent: "#1c7d5c",
  },
  {
    key: "links",
    label: l("Link Hub", "Link-Hub", "Hub de liens", "Hub di link"),
    title: l("Stay connected", "Bleiben Sie in Kontakt", "Restez connecté", "Restiamo in contatto"),
    subtitle: "Boutique Nord",
    accent: "#2f6df0",
  },
];

export const steps = [
  {
    n: "01",
    title: l("Design & customise", "Gestalten & anpassen", "Concevez & personnalisez", "Progetta e personalizza"),
    body: l(
      "Pick your card, add your logo and choose where a tap leads: reviews, menu or a link page.",
      "Wählen Sie Ihre Karte, fügen Sie Ihr Logo hinzu und legen Sie fest, wohin ein Tap führt: zu Bewertungen, zum Menü oder zu einer Linkseite.",
      "Choisissez votre carte, ajoutez votre logo et décidez où mène un tap : avis, menu ou page de liens.",
      "Scegli la tua carta, aggiungi il tuo logo e decidi dove porta un tap: recensioni, menu o pagina di link.",
    ),
  },
  {
    n: "02",
    title: l("Personalised & shipped", "Personalisiert & versendet", "Personnalisé & expédié", "Personalizzato e spedito"),
    body: l(
      "We personalise, encode and quality-check every piece in Switzerland, then ship it to your door within a few days.",
      "Wir personalisieren, codieren und prüfen jedes Stück in der Schweiz und liefern es innert weniger Tage zu Ihnen.",
      "Nous personnalisons, encodons et contrôlons chaque pièce en Suisse, puis l'expédions chez vous en quelques jours.",
      "Personalizziamo, codifichiamo e controlliamo ogni pezzo in Svizzera, poi te lo spediamo in pochi giorni.",
    ),
  },
  {
    n: "03",
    title: l("Tap & grow", "Tippen & wachsen", "Tapez & progressez", "Tappa e cresci"),
    body: l(
      "Customers tap their phone. No app, no scanning. You watch clicks, reviews and followers climb in your dashboard.",
      "Kunden halten ihr Handy an die Karte. Keine App, kein umständliches Scannen. Im Dashboard sehen Sie, wie Klicks, Bewertungen und Follower wachsen.",
      "Les clients approchent leur téléphone. Sans application, sans scan compliqué. Vous voyez les clics, les avis et les abonnés grimper dans votre tableau de bord.",
      "I clienti avvicinano il telefono. Niente app, niente scansioni complicate. Nella dashboard vedi crescere clic, recensioni e follower.",
    ),
  },
];

export const useCases = [
  {
    key: "reviews",
    label: l("Google Reviews", "Google-Bewertungen", "Avis Google", "Recensioni Google"),
    heading: l(
      "Turn every table into a five-star review",
      "Machen Sie aus jedem Tisch eine Fünf-Sterne-Bewertung",
      "Transformez chaque table en avis cinq étoiles",
      "Trasforma ogni tavolo in una recensione a cinque stelle",
    ),
    body: l(
      "Place a card on the counter or table. One tap opens your Google review form directly, with no searching and no typing. Restaurants see three to five times more reviews in the first month.",
      "Legen Sie eine Karte auf die Theke oder den Tisch. Ein Tap öffnet Ihr Google-Bewertungsformular direkt, ohne Suchen und ohne Tippen. Restaurants erhalten im ersten Monat drei bis fünf Mal mehr Bewertungen.",
      "Posez une carte sur le comptoir ou la table. Un tap ouvre directement votre formulaire d'avis Google, sans recherche ni saisie. Les restaurants voient trois à cinq fois plus d'avis le premier mois.",
      "Metti una carta sul bancone o sul tavolo. Un tap apre direttamente il modulo di recensione Google, senza cercare né digitare. I ristoranti ottengono da tre a cinque volte più recensioni nel primo mese.",
    ),
    points: [
      l(
        "A direct link to your review form, with no searching",
        "Ein Direktlink zu Ihrem Bewertungsformular, ganz ohne Suchen",
        "Un lien direct vers votre formulaire d'avis, sans aucune recherche",
        "Un link diretto al modulo di recensione, senza alcuna ricerca",
      ),
      l(
        "Smart routing to catch feedback before it goes public",
        "Intelligentes Routing fängt Feedback ab, bevor es öffentlich wird",
        "Routage intelligent pour capter les retours avant qu'ils ne soient publics",
        "Instradamento intelligente per intercettare i feedback prima che diventino pubblici",
      ),
      l(
        "Climb the local ranking as reviews roll in",
        "Steigen Sie im lokalen Ranking, je mehr Bewertungen eintreffen",
        "Grimpez dans le classement local à mesure que les avis arrivent",
        "Sali nella classifica locale man mano che arrivano le recensioni",
      ),
    ],
  },
  {
    key: "menu",
    label: l("Digital Menu", "Digitales Menü", "Menu digital", "Menu digitale"),
    heading: l(
      "A menu you update, never reprint",
      "Ein Menü, das Sie aktualisieren statt neu zu drucken",
      "Un menu que vous mettez à jour, jamais à réimprimer",
      "Un menu che aggiorni, mai da ristampare",
    ),
    body: l(
      "Tap to open your live menu in any language. Change a price or add a special from your phone and it goes live instantly on every card in the room.",
      "Ein Tap öffnet Ihr Live-Menü in jeder Sprache. Ändern Sie einen Preis oder ergänzen Sie ein Tagesangebot bequem vom Handy, und es ist sofort auf jeder Karte im Raum aktuell.",
      "Un tap ouvre votre menu en direct, dans toutes les langues. Modifiez un prix ou ajoutez une suggestion depuis votre téléphone : la mise à jour est instantanée sur chaque carte de la salle.",
      "Un tap apre il tuo menu live in ogni lingua. Cambia un prezzo o aggiungi un piatto del giorno dal telefono e l'aggiornamento è immediato su ogni carta della sala.",
    ),
    points: [
      l(
        "Multilingual: EN · DE · FR · IT",
        "Mehrsprachig: EN · DE · FR · IT",
        "Multilingue : EN · DE · FR · IT",
        "Multilingue: EN · DE · FR · IT",
      ),
      l(
        "Allergens, photos and daily specials",
        "Allergene, Fotos und Tagesangebote",
        "Allergènes, photos et suggestions du jour",
        "Allergeni, foto e piatti del giorno",
      ),
      l(
        "Zero reprint costs, ever",
        "Nie wieder Druckkosten",
        "Zéro frais de réimpression, jamais",
        "Zero costi di ristampa, per sempre",
      ),
    ],
  },
  {
    key: "links",
    label: l("Link Hub", "Link-Hub", "Hub de liens", "Hub di link"),
    heading: l(
      "Instagram, WiFi & booking in one tap",
      "Instagram, WLAN & Buchung mit einem Tap",
      "Instagram, WiFi & réservation en un tap",
      "Instagram, WiFi e prenotazioni con un tap",
    ),
    body: l(
      "A beautiful link page that holds everything: social profiles, WiFi access, table booking, loyalty and your webshop. One card, endless destinations.",
      "Eine elegante Linkseite, die alles vereint: Social-Media-Profile, WLAN-Zugang, Tischreservation, Treueprogramm und Ihren Webshop. Eine Karte, unendlich viele Ziele.",
      "Une belle page de liens qui réunit tout : profils sociaux, accès WiFi, réservation de table, fidélité et votre boutique en ligne. Une carte, une infinité de destinations.",
      "Una bella pagina di link che racchiude tutto: profili social, accesso WiFi, prenotazione tavoli, fidelizzazione e il tuo negozio online. Una carta, infinite destinazioni.",
    ),
    points: [
      l(
        "Instagram, TikTok & newsletter sign-up",
        "Instagram, TikTok & Newsletter-Anmeldung",
        "Instagram, TikTok & inscription newsletter",
        "Instagram, TikTok e iscrizione alla newsletter",
      ),
      l(
        "One-tap WiFi connect",
        "WLAN-Verbindung mit einem Tap",
        "Connexion WiFi en un tap",
        "Connessione WiFi con un tap",
      ),
      l(
        "Booking, loyalty and shop links",
        "Links zu Buchung, Treue und Shop",
        "Liens réservation, fidélité et boutique",
        "Link a prenotazioni, fidelizzazione e shop",
      ),
    ],
  },
];

export const features = [
  {
    key: "no-app",
    title: l("No app required", "Keine App nötig", "Aucune appli requise", "Nessuna app richiesta"),
    body: l(
      "Works straight out of the box on any modern phone. Customers just tap.",
      "Funktioniert sofort auf jedem modernen Handy. Kunden tippen einfach.",
      "Fonctionne d'emblée sur tout téléphone récent. Les clients tapent, c'est tout.",
      "Funziona subito su ogni telefono moderno. I clienti tappano e basta.",
    ),
  },
  {
    key: "compat",
    title: l("iPhone & Android", "iPhone & Android", "iPhone & Android", "iPhone & Android"),
    body: l(
      "Compatible with iPhone XR and newer, and all NFC-enabled Android phones.",
      "Kompatibel mit iPhone XR und neuer sowie allen NFC-fähigen Android-Handys.",
      "Compatible avec iPhone XR et plus récents, et tous les Android équipés NFC.",
      "Compatibile con iPhone XR e successivi e con tutti gli Android dotati di NFC.",
    ),
  },
  {
    key: "durable",
    title: l("Waterproof & durable", "Wasserfest & robust", "Étanche & durable", "Impermeabile e resistente"),
    body: l(
      "Built to survive spills, sun and daily handling in a busy venue.",
      "Gemacht für verschüttete Getränke, Sonne und den täglichen Betrieb.",
      "Conçu pour résister aux éclaboussures, au soleil et à un usage quotidien intense.",
      "Costruito per resistere a schizzi, sole e uso quotidiano intenso.",
    ),
  },
  {
    key: "dashboard",
    title: l("Live dashboard", "Live-Dashboard", "Tableau de bord en direct", "Dashboard in tempo reale"),
    body: l(
      "Track taps, reviews and menu views. Change destinations anytime.",
      "Verfolgen Sie Taps, Bewertungen und Menüaufrufe. Das Ziel ändern Sie jederzeit.",
      "Suivez taps, avis et vues du menu. Changez de destination à tout moment.",
      "Monitora tap, recensioni e visualizzazioni del menu. Cambia destinazione quando vuoi.",
    ),
  },
  {
    key: "swiss",
    title: l("Swiss software", "Swiss Software", "Logiciel suisse", "Software svizzero"),
    body: l(
      "Built and run by a Swiss team, with local support you can actually reach.",
      "Von einem Schweizer Team entwickelt und betrieben, mit lokalem Support, den Sie wirklich erreichen.",
      "Développé et exploité par une équipe suisse, avec un support local vraiment joignable.",
      "Sviluppato e gestito da un team svizzero, con un supporto locale davvero raggiungibile.",
    ),
  },
  {
    key: "privacy",
    title: l("Privacy first", "Datenschutz zuerst", "Confidentialité d'abord", "Privacy al primo posto"),
    body: l(
      "Fully compliant with the Swiss nFADP and EU GDPR. No hidden tracking.",
      "Voll konform mit dem Schweizer revDSG und der EU-DSGVO. Kein verstecktes Tracking.",
      "Pleinement conforme à la nLPD suisse et au RGPD de l'UE. Aucun pistage caché.",
      "Pienamente conforme alla nLPD svizzera e al GDPR dell'UE. Nessun tracciamento nascosto.",
    ),
  },
];

// ── Our range: customisable NFC cards ─────────────────────────────────
// Premium, bank-card-styled NFC cards, fully customised with your brand
// and destination. One tap, no app, for any business.
export const products = [
  {
    name: "NFC Business Card",
    material: l("Anodised aluminium", "Eloxiertes Aluminium", "Aluminium anodisé", "Alluminio anodizzato"),
    price: "89",
    blurb: l(
      "Our flagship. A premium metal NFC card that shares your contact details, socials and links with a single tap, fully customised with your brand.",
      "Unser Flaggschiff. Eine hochwertige NFC-Karte aus Metall, die mit einem Tap Ihre Kontaktdaten, Social Media und Links teilt, individuell gestaltet mit Ihrer Marke.",
      "Notre produit phare. Une carte NFC en métal premium qui partage vos coordonnées, réseaux et liens d'un simple tap, entièrement personnalisée à votre marque.",
      "Il nostro prodotto di punta. Una carta NFC in metallo premium che con un tap condivide contatti, social e link, personalizzata con il tuo marchio.",
    ),
    accent: true,
  },
  {
    name: "Menu Card",
    material: l("Recycled PVC", "Recyceltes PVC", "PVC recyclé", "PVC riciclato"),
    price: "50",
    blurb: l(
      "Tap to open your live digital menu in any language. Update prices and specials from your phone and never reprint again.",
      "Ein Tap öffnet Ihr digitales Live-Menü in jeder Sprache. Preise und Angebote aktualisieren Sie bequem vom Handy und drucken nie wieder nach.",
      "Un tap ouvre votre menu numérique en direct, dans toutes les langues. Modifiez prix et suggestions depuis votre téléphone et oubliez les réimpressions.",
      "Un tap apre il tuo menu digitale live in ogni lingua. Aggiorna prezzi e offerte dal telefono e non ristampi mai più.",
    ),
    accent: false,
  },
  {
    name: "Link Card",
    material: l("Matte PVC", "Mattes PVC", "PVC mat", "PVC opaco"),
    price: "29",
    blurb: l(
      "One tap to your link hub with Instagram, WiFi, booking and webshop, all in one place. Hand it over or leave it on the table.",
      "Ein Tap zu Ihrem Link-Hub mit Instagram, WLAN, Buchung und Webshop an einem Ort. Überreichen Sie sie oder lassen Sie sie auf dem Tisch liegen.",
      "Un tap vers votre hub de liens : Instagram, WiFi, réservation et boutique, au même endroit. À remettre en main propre ou à laisser sur la table.",
      "Un tap al tuo hub di link con Instagram, WiFi, prenotazioni e shop, tutto in un posto. Consegnala o lasciala sul tavolo.",
    ),
    accent: false,
  },
];

// ── Separate line: the Google Reviews card ────────────────────────────
// A single, no-frills product just for collecting Google reviews.
export const reviewCards = [
  {
    name: "Google Review Card",
    material: l("Recycled PVC", "Recyceltes PVC", "PVC recyclé", "PVC riciclato"),
    price: "50",
    blurb: l(
      "Credit-card sized and printed with your five-star Google review link, so one tap opens the review form. Hand it over or leave it on the table.",
      "Im Kreditkartenformat, bedruckt mit dem Link zu Ihren Google-Bewertungen. Ein Tap öffnet das Bewertungsformular. Überreichen Sie sie oder lassen Sie sie auf dem Tisch liegen.",
      "Au format carte bancaire, imprimée avec le lien vers vos avis Google cinq étoiles. Un tap ouvre le formulaire d'avis. À remettre en main propre ou à laisser sur la table.",
      "In formato carta di credito, stampata con il link alle tue recensioni Google a cinque stelle. Un tap apre il modulo di recensione. Consegnala o lasciala sul tavolo.",
    ),
    accent: true,
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "50",
    unit: l("one-time / card", "einmalig / Karte", "unique / carte", "una tantum / carta"),
    monthly: false,
    tagline: l(
      "Buy cards, manage them yourself.",
      "Karten kaufen, selbst verwalten.",
      "Achetez vos cartes, gérez-les vous-même.",
      "Compra le carte, gestiscile da solo.",
    ),
    features: [
      l("Custom-printed NFC cards", "Individuell bedruckte NFC-Karten", "Cartes NFC personnalisées", "Carte NFC personalizzate"),
      l("Self-serve dashboard", "Dashboard zur Selbstverwaltung", "Tableau de bord en libre-service", "Dashboard self-service"),
      l("One destination per card", "Ein Ziel pro Karte", "Une destination par carte", "Una destinazione per carta"),
      l("Free QR code as backup", "Kostenloser QR-Code als Reserve", "QR de secours gratuit", "QR di riserva gratuito"),
      l("Email support", "Support per E-Mail", "Support par e-mail", "Supporto via e-mail"),
    ],
    cta: l("Order cards", "Karten bestellen", "Commander des cartes", "Ordina le carte"),
    featured: false,
  },
  {
    name: "Pro",
    price: "39",
    unit: l("per month", "pro Monat", "par mois", "al mese"),
    monthly: true,
    tagline: l(
      "For growing venues & small chains.",
      "Für wachsende Betriebe & kleine Ketten.",
      "Pour établissements en croissance & petites chaînes.",
      "Per attività in crescita e piccole catene.",
    ),
    features: [
      l("Everything in Starter", "Alles aus Starter", "Tout de Starter", "Tutto di Starter"),
      l("Unlimited destination changes", "Unbegrenzte Zieländerungen", "Changements de destination illimités", "Cambi di destinazione illimitati"),
      l("Analytics & review insights", "Analytics und Einblicke in Bewertungen", "Analytics & analyse des avis", "Analisi e insight sulle recensioni"),
      l("Multiple locations", "Mehrere Standorte", "Plusieurs établissements", "Più sedi"),
      l("Priority support", "Priorisierter Support", "Support prioritaire", "Supporto prioritario"),
    ],
    cta: l("Start free trial", "Gratis testen", "Essai gratuit", "Prova gratuita"),
    featured: true,
  },
  {
    name: "Managed",
    price: "250",
    unit: l("per month", "pro Monat", "par mois", "al mese"),
    monthly: true,
    tagline: l(
      "We run your menu & reviews for you.",
      "Wir übernehmen Menü & Bewertungen für Sie.",
      "Nous gérons votre menu & vos avis pour vous.",
      "Gestiamo menu e recensioni per te.",
    ),
    features: [
      l("Everything in Pro", "Alles aus Pro", "Tout de Pro", "Tutto di Pro"),
      l("10 personalised NFC cards", "10 personalisierte NFC-Karten", "10 cartes NFC personnalisées", "10 carte NFC personalizzate"),
      l("Menu translation & updates", "Übersetzung und Updates des Menüs", "Traduction & mises à jour du menu", "Traduzione e aggiornamenti del menu"),
      l("We reply to every Google review", "Wir beantworten jede Google-Bewertung", "Nous répondons à chaque avis Google", "Rispondiamo a ogni recensione Google"),
      l("Dedicated account manager", "Persönlicher Account Manager", "Gestionnaire de compte dédié", "Account manager dedicato"),
    ],
    cta: l("Talk to us", "Kontaktieren Sie uns", "Contactez-nous", "Parla con noi"),
    featured: false,
  },
];

// PLACEHOLDER testimonials — deliberately obvious. Replace each with a real
// customer quote, name and venue once we have them.
export const testimonials = [
  {
    quote: l(
      "[Placeholder] Your customer's words will appear here once we're live.",
      "[Platzhalter] Die Worte Ihres Kunden erscheinen hier, sobald wir live sind.",
      "[Exemple] Les mots de votre client apparaîtront ici dès notre lancement.",
      "[Segnaposto] Le parole del tuo cliente appariranno qui una volta online.",
    ),
    name: "Your customer",
    role: l("Your venue, City", "Ihr Betrieb, Ort", "Votre établissement, Ville", "La tua attività, Città"),
  },
  {
    quote: l(
      "[Placeholder] A real review from a happy business will go right here.",
      "[Platzhalter] Eine echte Bewertung eines zufriedenen Betriebs kommt hierher.",
      "[Exemple] Un vrai avis d'un établissement satisfait viendra ici.",
      "[Segnaposto] Una vera recensione di un'attività soddisfatta andrà qui.",
    ),
    name: "Your customer",
    role: l("Your venue, City", "Ihr Betrieb, Ort", "Votre établissement, Ville", "La tua attività, Città"),
  },
  {
    quote: l(
      "[Placeholder] We'll swap this sample for a genuine customer quote soon.",
      "[Platzhalter] Dieses Muster ersetzen wir bald durch ein echtes Kundenzitat.",
      "[Exemple] Nous remplacerons bientôt cet exemple par un vrai témoignage.",
      "[Segnaposto] Presto sostituiremo questo esempio con una vera testimonianza.",
    ),
    name: "Your customer",
    role: l("Your venue, City", "Ihr Betrieb, Ort", "Votre établissement, Ville", "La tua attività, Città"),
  },
];

export const faqs = [
  {
    q: l(
      "Do my customers need to install an app?",
      "Müssen meine Kunden eine App installieren?",
      "Mes clients doivent-ils installer une appli ?",
      "I miei clienti devono installare un'app?",
    ),
    a: l(
      "No. NFC is built into every modern smartphone. Customers simply hold their phone near the card and the destination opens in their browser, with no app, no account and no friction.",
      "Nein. NFC ist in jedem modernen Smartphone eingebaut. Kunden halten ihr Handy einfach an die Karte, und das Ziel öffnet sich im Browser, ganz ohne App, ohne Konto und ohne Aufwand.",
      "Non. Le NFC est intégré à tout smartphone récent. Les clients approchent simplement leur téléphone de la carte, et la destination s'ouvre dans leur navigateur, sans appli, sans compte et sans friction.",
      "No. L'NFC è integrato in ogni smartphone moderno. I clienti avvicinano semplicemente il telefono alla carta e la destinazione si apre nel browser, senza app, senza account e senza ostacoli.",
    ),
  },
  {
    q: l(
      "Which phones are compatible?",
      "Welche Handys sind kompatibel?",
      "Quels téléphones sont compatibles ?",
      "Quali telefoni sono compatibili?",
    ),
    a: l(
      "All iPhones from the XR (2018) onward and virtually every NFC-enabled Android phone. For older devices, every product also carries a printed QR code as a backup.",
      "Alle iPhones ab dem XR (2018) und praktisch jedes NFC-fähige Android-Handy. Für ältere Geräte trägt jedes Produkt zusätzlich einen gedruckten QR-Code als Reserve.",
      "Tous les iPhone depuis le XR (2018) et pratiquement tout Android équipé NFC. Pour les appareils plus anciens, chaque produit porte aussi un QR code imprimé en secours.",
      "Tutti gli iPhone dall'XR (2018) in poi e praticamente ogni Android dotato di NFC. Per i dispositivi più vecchi, ogni prodotto riporta anche un QR code stampato come riserva.",
    ),
  },
  {
    q: l(
      "Can I change where a card points to later?",
      "Kann ich das Ziel einer Karte später ändern?",
      "Puis-je changer la destination d'une carte plus tard ?",
      "Posso cambiare la destinazione di una carta in seguito?",
    ),
    a: l(
      "Yes. On the Pro and Managed plans you can repoint any card to a new URL from your dashboard at any time, without reordering.",
      "Ja. Mit den Plänen Pro und Managed leiten Sie jede Karte jederzeit im Dashboard auf eine neue URL um, ohne neu zu bestellen.",
      "Oui. Avec les forfaits Pro et Managed, vous pouvez rediriger n'importe quelle carte vers une nouvelle URL depuis votre tableau de bord, à tout moment, sans recommander.",
      "Sì. Con i piani Pro e Managed puoi reindirizzare qualsiasi carta a un nuovo URL dalla dashboard, in qualsiasi momento, senza riordinare.",
    ),
  },
  {
    q: l(
      "Where are the cards made?",
      "Wo werden die Karten hergestellt?",
      "Où les cartes sont-elles fabriquées ?",
      "Dove vengono prodotte le carte?",
    ),
    a: l(
      "We're a Swiss company. We design your cards, program them and run the whole platform ourselves. The NFC hardware itself is produced by trusted partners to our specifications, using premium, durable materials, then quality-checked by our team.",
      "Wir sind ein Schweizer Unternehmen. Wir gestalten Ihre Karten, programmieren sie und betreiben die gesamte Plattform selbst. Die NFC-Hardware wird von vertrauenswürdigen Partnern nach unseren Vorgaben aus hochwertigen, langlebigen Materialien gefertigt und anschliessend von unserem Team geprüft.",
      "Nous sommes une entreprise suisse. Nous concevons vos cartes, les programmons et exploitons toute la plateforme nous-mêmes. Le matériel NFC est produit par des partenaires de confiance selon nos spécifications, avec des matériaux premium et durables, puis contrôlé par notre équipe.",
      "Siamo un'azienda svizzera. Progettiamo le tue carte, le programmiamo e gestiamo noi l'intera piattaforma. L'hardware NFC è prodotto da partner affidabili secondo le nostre specifiche, con materiali di qualità e durevoli, e controllato dal nostro team.",
    ),
  },
  {
    q: l(
      "Is it privacy compliant?",
      "Ist es datenschutzkonform?",
      "Est-ce conforme à la protection des données ?",
      "È conforme alla privacy?",
    ),
    a: l(
      "Absolutely. Taplino is fully compliant with the revised Swiss Federal Act on Data Protection (nFADP) and the EU GDPR. We never sell data.",
      "Absolut. Taplino ist vollständig konform mit dem revidierten Schweizer Datenschutzgesetz (revDSG) und der EU-DSGVO. Wir verkaufen niemals Daten.",
      "Absolument. Taplino est pleinement conforme à la loi fédérale suisse révisée sur la protection des données (nLPD) et au RGPD de l'UE. Nous ne vendons jamais de données.",
      "Assolutamente. Taplino è pienamente conforme alla legge svizzera sulla protezione dei dati riveduta (nLPD) e al GDPR dell'UE. Non vendiamo mai i dati.",
    ),
  },
  {
    q: l(
      "What if a card gets damaged?",
      "Was, wenn eine Karte beschädigt wird?",
      "Que se passe-t-il si une carte est endommagée ?",
      "Cosa succede se una carta si danneggia?",
    ),
    a: l(
      "Our cards are waterproof and built for daily use, but accidents happen. Replacements are quick and affordable, and included on the Managed plan.",
      "Unsere Karten sind wasserfest und für den täglichen Einsatz gemacht, doch Missgeschicke passieren. Ersatz ist schnell und günstig und im Managed-Plan inbegriffen.",
      "Nos cartes sont étanches et conçues pour un usage quotidien, mais les accidents arrivent. Le remplacement est rapide et abordable, et inclus dans le forfait Managed.",
      "Le nostre carte sono impermeabili e pensate per l'uso quotidiano, ma gli incidenti capitano. La sostituzione è rapida ed economica, e inclusa nel piano Managed.",
    ),
  },
];

// Customer marquee (proper nouns — not translated). Items with a `logo` render
// the real logo image; the rest are placeholders inviting the next customers.
export type CustomerLogo = { name: string; logo?: string };
export const logoNames: CustomerLogo[] = [
  { name: "Pizza Bella", logo: "/customers/pizza-bella-logo.svg" },
  { name: "Your venue" },
  { name: "Your café" },
  { name: "Your shop" },
  { name: "Your logo here" },
];

// ── UI strings that live inside components (headings, labels, buttons) ──
export const ui = {
  nav: {
    orderCards: l("Order cards", "Karten bestellen", "Commander des cartes", "Ordina le carte"),
  },
  hero: {
    badge: l(
      "Swiss company · Ships in 3 to 5 days",
      "Schweizer Unternehmen · Versand in 3 bis 5 Tagen",
      "Entreprise suisse · Expédié en 3 à 5 jours",
      "Azienda svizzera · Spedizione in 3 a 5 giorni",
    ),
    headPre: l("One tap between you and", "Ein Tap zwischen Ihnen und", "Un tap entre vous et", "Un tap tra te e"),
    headHighlight: l("everything", "allem", "tout", "tutto"),
    // Leading separator is part of the string so each language can punctuate
    // correctly after the highlighted word (e.g. German needs a comma).
    headPost: l(" you share.", ", was Sie teilen.", " ce que vous partagez.", " ciò che condividi."),
    body: l(
      "Premium, fully customisable NFC cards for any business. Customers tap their phone, with no app and no scanning, and land wherever you want: your links, socials, menu, booking or Google reviews.",
      "Hochwertige, voll anpassbare NFC-Karten für jedes Business. Kunden halten ihr Handy an die Karte, ganz ohne App und ohne Scannen, und landen genau dort, wo Sie es möchten: bei Ihren Links, Social Media, dem Menü, der Buchung oder den Google-Bewertungen.",
      "Des cartes NFC premium et entièrement personnalisables pour toute entreprise. Les clients approchent leur téléphone, sans application ni scan, et arrivent où vous voulez : vos liens, réseaux, menu, réservation ou avis Google.",
      "Carte NFC premium e totalmente personalizzabili per qualsiasi attività. I clienti avvicinano il telefono, senza app e senza scansioni, e arrivano dove vuoi: link, social, menu, prenotazioni o recensioni Google.",
    ),
    ctaPrimary: l("Order your cards", "Karten bestellen", "Commander vos cartes", "Ordina le tue carte"),
    ctaSecondary: l("See how it works", "So funktioniert's", "Voir comment ça marche", "Scopri come funziona"),
  },
  logos: {
    trusted: l(
      "Built for venues across Switzerland",
      "Gemacht für Betriebe in der ganzen Schweiz",
      "Conçu pour les établissements de toute la Suisse",
      "Pensato per le attività di tutta la Svizzera",
    ),
  },
  how: {
    eyebrow: l("How it works", "So funktioniert's", "Comment ça marche", "Come funziona"),
    title: l(
      "From order to live in three steps",
      "In drei Schritten von der Bestellung zum Start",
      "De la commande au lancement en trois étapes",
      "Dall'ordine all'attivazione in tre passi",
    ),
    intro: l(
      "No technical setup. No app for your customers. Just a beautifully made card that does one thing brilliantly.",
      "Kein technisches Setup. Keine App für Ihre Kunden. Nur eine schön gemachte Karte, die eine Sache brillant macht.",
      "Aucune configuration technique. Aucune appli pour vos clients. Juste une carte superbement conçue qui fait une chose à merveille.",
      "Nessuna configurazione tecnica. Nessuna app per i tuoi clienti. Solo una carta ben fatta che fa una cosa in modo eccellente.",
    ),
  },
  useCases: {
    eyebrow: l("Use cases", "Anwendungen", "Cas d'usage", "Casi d'uso"),
    title: l(
      "One card, whatever you need it to do",
      "Eine Karte für alles, was Sie brauchen",
      "Une carte, pour tout ce dont vous avez besoin",
      "Una carta, per tutto ciò che ti serve",
    ),
    intro: l(
      "Point a tap anywhere. Switch the destination whenever your goals change, and the card stays the same.",
      "Verweisen Sie einen Tap auf ein beliebiges Ziel und ändern Sie es, wann immer sich Ihre Pläne ändern. Die Karte bleibt dieselbe.",
      "Dirigez un tap où vous voulez. Changez de destination quand vos objectifs évoluent, et la carte reste la même.",
      "Indirizza un tap ovunque. Cambia la destinazione quando cambiano i tuoi obiettivi: la carta resta la stessa.",
    ),
    // Big stat shown per active tab (reviews / menu / links).
    stats: [
      {
        value: l("+380%", "+380%", "+380%", "+380%"),
        desc: l(
          "more reviews in the first month",
          "mehr Bewertungen im ersten Monat",
          "d'avis en plus le premier mois",
          "recensioni in più nel primo mese",
        ),
      },
      {
        value: l("0", "0", "0", "0"),
        desc: l(
          "reprints, updated from your phone",
          "Nachdrucke, aktualisiert vom Handy",
          "réimpressions, mis à jour depuis le téléphone",
          "ristampe, aggiorni dal telefono",
        ),
      },
      {
        value: l("1 tap", "1 Tap", "1 tap", "1 tap"),
        desc: l(
          "to every profile, link and WiFi",
          "zu jedem Profil, Link und WLAN",
          "vers chaque profil, lien et WiFi",
          "verso ogni profilo, link e WiFi",
        ),
      },
    ],
  },
  features: {
    eyebrow: l("Built for real venues", "Für den echten Betrieb gemacht", "Conçu pour de vrais établissements", "Pensato per attività reali"),
    title: l(
      "Premium hardware, effortless software",
      "Premium-Hardware, mühelose Software",
      "Matériel premium, logiciel sans effort",
      "Hardware premium, software senza sforzo",
    ),
    intro: l(
      "Everything is engineered to just work, for you and for every guest who taps.",
      "Alles ist so gebaut, dass es einfach funktioniert, für Sie und für jeden Gast, der tippt.",
      "Tout est pensé pour fonctionner sans effort, pour vous et pour chaque client qui tape.",
      "Tutto è progettato per funzionare e basta: per te e per ogni cliente che tappa.",
    ),
  },
  products: {
    range: {
      eyebrow: l("Our products", "Unsere Produkte", "Nos produits", "I nostri prodotti"),
      title: l(
        "Customisable NFC cards, endless destinations",
        "Anpassbare NFC-Karten, unendlich viele Ziele",
        "Des cartes NFC personnalisables, une infinité de destinations",
        "Carte NFC personalizzabili, infinite destinazioni",
      ),
      intro: l(
        "Business cards, menu cards, link cards and more, each customised with your brand and whatever a tap should open, all powered by our Swiss-built platform.",
        "Visitenkarten, Menükarten, Linkkarten und mehr, jede individuell gestaltet mit Ihrer Marke und dem gewünschten Tap-Ziel, betrieben von unserer in der Schweiz entwickelten Plattform.",
        "Cartes de visite, cartes menu, cartes de liens et plus encore, chacune personnalisée à votre marque et à la destination de votre choix, le tout propulsé par notre plateforme conçue en Suisse.",
        "Biglietti da visita, carte menu, carte link e altro ancora, ognuna personalizzata con il tuo marchio e la destinazione che preferisci, tutto gestito dalla nostra piattaforma sviluppata in Svizzera.",
      ),
      cta: l("See bundles", "Pakete ansehen", "Voir les offres", "Vedi i pacchetti"),
      badge: l("Most popular", "Am beliebtesten", "Le plus populaire", "Più popolare"),
    },
    review: {
      eyebrow: l("Google Reviews cards", "Google-Bewertungskarten", "Cartes d'avis Google", "Carte recensioni Google"),
      title: l(
        "Just here for more reviews?",
        "Nur an mehr Bewertungen interessiert?",
        "Juste envie de plus d'avis ?",
        "Ti interessano solo più recensioni?",
      ),
      intro: l(
        "A separate, no-frills line dedicated to one job: sending customers straight to your Google review form. Perfect on their own or alongside the rest of the range.",
        "Eine separate, schnörkellose Linie für einen Zweck: Kunden direkt zu Ihrem Google-Bewertungsformular zu schicken. Perfekt allein oder ergänzend zu unseren übrigen Karten.",
        "Une gamme distincte et épurée dédiée à une seule mission : envoyer les clients directement vers votre formulaire d'avis Google. Parfaite seule ou en complément du reste de la gamme.",
        "Una linea separata ed essenziale dedicata a un solo compito: portare i clienti direttamente al tuo modulo di recensione Google. Perfetta da sola o insieme al resto della gamma.",
      ),
      cta: l("See pricing", "Preise ansehen", "Voir les tarifs", "Vedi i prezzi"),
      editorCta: l(
        "Design your card",
        "Karte gestalten",
        "Concevez votre carte",
        "Progetta la tua carta",
      ),
      badge: l("Best value", "Bestes Angebot", "Meilleur rapport", "Miglior valore"),
    },
    order: l("Order", "Bestellen", "Commander", "Ordina"),
    from: l("from", "ab", "dès", "da"),
  },
  pricing: {
    eyebrow: l("Pricing", "Preise", "Tarifs", "Prezzi"),
    title: l(
      "Simple pricing, no surprises",
      "Einfache Preise, keine Überraschungen",
      "Des tarifs simples, sans surprise",
      "Prezzi semplici, nessuna sorpresa",
    ),
    intro: l(
      "Buy cards outright, or let us run the whole thing. Cancel monthly plans anytime, with no lock-in beyond the first 3 months on Managed.",
      "Karten direkt kaufen oder alles von uns betreiben lassen. Monatspläne sind jederzeit kündbar. Ausser den ersten 3 Monaten beim Managed-Plan gibt es keine Vertragsbindung.",
      "Achetez vos cartes ou confiez-nous toute la gestion. Résiliez les forfaits mensuels à tout moment, sans engagement au-delà des 3 premiers mois pour Managed.",
      "Compra le carte a titolo definitivo o lascia gestire tutto a noi. Disdici i piani mensili quando vuoi: nessun vincolo oltre i primi 3 mesi con Managed.",
    ),
    badge: l("Best value", "Bestes Angebot", "Meilleur rapport", "Miglior valore"),
    perMonth: l("mo", "Mt.", "mois", "mese"),
    perCard: l("card", "Karte", "carte", "carta"),
    footnotePre: l(
      "Need 50+ cards or a multi-location rollout?",
      "Brauchen Sie 50+ Karten oder einen Rollout an mehreren Standorten?",
      "Besoin de 50+ cartes ou d'un déploiement multi-sites ?",
      "Ti servono 50+ carte o un rollout multi-sede?",
    ),
    footnoteLink: l("Talk to our team →", "Sprechen Sie mit unserem Team →", "Parlez à notre équipe →", "Parla con il nostro team →"),
  },
  testimonials: {
    eyebrow: l("Loved by owners", "Von Inhabern geliebt", "Adoré par les gérants", "Amato dai titolari"),
    title: l("Small cards, real results", "Kleine Karten, echte Resultate", "Petites cartes, vrais résultats", "Piccole carte, risultati reali"),
  },
  faq: {
    eyebrow: l("FAQ", "FAQ", "FAQ", "FAQ"),
    title: l("Questions, answered", "Fragen, beantwortet", "Vos questions, nos réponses", "Domande, con risposta"),
    intro: l(
      "Still unsure? Write to us and we usually reply within a few hours.",
      "Noch unsicher? Schreiben Sie uns, wir antworten meist innert weniger Stunden.",
      "Encore un doute ? Écrivez-nous, nous répondons généralement en quelques heures.",
      "Ancora dubbi? Scrivici: di solito rispondiamo in poche ore.",
    ),
  },
  cta: {
    eyebrow: l("Get started", "Loslegen", "Commencer", "Inizia"),
    title: l(
      "Ready to turn taps into reviews?",
      "Bereit, Taps in Bewertungen zu verwandeln?",
      "Prêt à transformer les taps en avis ?",
      "Pronto a trasformare i tap in recensioni?",
    ),
    body: l(
      "Tell us about your venue and we'll send a sample design within 24 hours. Cards ship across Switzerland in 3 to 5 days.",
      "Erzählen Sie uns von Ihrem Betrieb, und wir senden innert 24 Stunden ein Musterdesign. Versand in der ganzen Schweiz in 3 bis 5 Tagen.",
      "Parlez-nous de votre établissement et nous vous enverrons une maquette sous 24 heures. Expédition dans toute la Suisse en 3 à 5 jours.",
      "Raccontaci della tua attività e ti invieremo una bozza entro 24 ore. Spedizione in tutta la Svizzera in 3 a 5 giorni.",
    ),
    primary: l("Order your cards", "Karten bestellen", "Commander vos cartes", "Ordina le tue carte"),
  },
  editor: {
    // ── Card editor page ────────────────────────────────────────────
    badge: l(
      "Design studio",
      "Design-Studio",
      "Studio de design",
      "Studio di design",
    ),
    title: l(
      "Design your card, order in minutes",
      "Gestalten Sie Ihre Karte, in Minuten bestellt",
      "Concevez votre carte, commandez en minutes",
      "Progetta la tua carta, ordina in pochi minuti",
    ),
    intro: l(
      "Pick a style, drop in your logo, choose your colours and set where a tap should lead. Your card updates live, so order it when it looks right.",
      "Wählen Sie einen Stil, laden Sie Ihr Logo hoch, bestimmen Sie Farben und das Tap-Ziel. Ihre Karte aktualisiert sich live, bestellen Sie einfach, sobald sie passt.",
      "Choisissez un style, ajoutez votre logo, définissez vos couleurs et la destination d'un tap. Votre carte se met à jour en direct, commandez quand elle vous convient.",
      "Scegli uno stile, aggiungi il tuo logo, definisci i colori e la destinazione del tap. La tua carta si aggiorna in tempo reale: ordina quando è pronta.",
    ),
    // Step / section headings
    stepTemplate: l("Template", "Vorlage", "Modèle", "Modello"),
    stepLogo: l("Your logo", "Ihr Logo", "Votre logo", "Il tuo logo"),
    stepColors: l("Colours", "Farben", "Couleurs", "Colori"),
    stepContent: l("Content", "Inhalt", "Contenu", "Contenuto"),
    stepLink: l("Destination", "Ziel", "Destination", "Destinazione"),
    stepOrder: l("Order", "Bestellung", "Commande", "Ordine"),
    // Template picker
    templateHint: l(
      "Start from an industry style and keep everything editable.",
      "Starten Sie mit einem Branchen-Stil, alles bleibt anpassbar.",
      "Partez d'un style sectoriel, tout reste modifiable.",
      "Parti da uno stile di settore, tutto resta modificabile.",
    ),
    presetRestaurant: l("Restaurant", "Restaurant", "Restaurant", "Ristorante"),
    presetElectronics: l("Electronics", "Elektronik", "Électronique", "Elettronica"),
    presetFitness: l("Fitness & Club", "Fitness & Club", "Fitness & Club", "Fitness & Club"),
    presetBeauty: l("Beauty & Salon", "Beauty & Salon", "Beauté & Salon", "Bellezza & Salone"),
    // Logo upload
    uploadLogo: l("Upload your logo", "Logo hochladen", "Téléverser votre logo", "Carica il tuo logo"),
    uploadHint: l(
      "PNG, SVG or JPG. A transparent PNG looks best.",
      "PNG, SVG oder JPG. Ein transparentes PNG wirkt am besten.",
      "PNG, SVG ou JPG. Un PNG transparent est idéal.",
      "PNG, SVG o JPG. Un PNG trasparente rende meglio.",
    ),
    removeLogo: l("Remove logo", "Logo entfernen", "Retirer le logo", "Rimuovi logo"),
    replaceLogo: l("Replace", "Ersetzen", "Remplacer", "Sostituisci"),
    // Colour labels
    colorHeader: l("Header", "Kopfzeile", "En-tête", "Intestazione"),
    colorHeaderText: l("Header text", "Kopftext", "Texte d'en-tête", "Testo intestazione"),
    colorBody: l("Background", "Hintergrund", "Fond", "Sfondo"),
    colorStars: l("Stars", "Sterne", "Étoiles", "Stelle"),
    colorAccent: l("Accent", "Akzent", "Accent", "Accento"),
    // Content fields
    fieldCategory: l("Category label", "Branchen-Label", "Étiquette secteur", "Etichetta categoria"),
    fieldCategoryPh: l("e.g. Fast food & restaurant", "z. B. Schnellrestaurant", "p. ex. Restauration rapide", "es. Ristorazione veloce"),
    fieldHeadline: l("Headline", "Überschrift", "Titre", "Titolo"),
    fieldLogoText: l("Logo label", "Logo-Text", "Texte logo", "Testo logo"),
    fieldLogoHint: l("Logo caption", "Logo-Untertitel", "Légende logo", "Didascalia logo"),
    fontStyle: l("Font style", "Schriftstil", "Style de police", "Stile carattere"),
    fontSans: l("Modern", "Modern", "Moderne", "Moderno"),
    fontSerif: l("Elegant", "Elegant", "Élégant", "Elegante"),
    fontRounded: l("Friendly", "Freundlich", "Convivial", "Amichevole"),
    fontDisplay: l("Bold", "Kräftig", "Impactant", "Deciso"),
    // ── Layout & style section ──────────────────────────────────────
    stepStyle: l("Layout & style", "Layout & Stil", "Mise en page & style", "Layout e stile"),
    styleHint: l(
      "Pick what the card leads with, then fine-tune the look. No big logo? Lead with a message or a short list instead.",
      "Bestimmen Sie, was die Karte in den Mittelpunkt stellt, und verfeinern Sie den Look. Kein grosses Logo? Setzen Sie stattdessen auf eine Botschaft oder eine kurze Liste.",
      "Choisissez l'élément principal de la carte, puis affinez le style. Pas de grand logo ? Misez plutôt sur un message ou une courte liste.",
      "Scegli l'elemento principale della carta, poi rifinisci lo stile. Niente logo grande? Punta invece su un messaggio o un breve elenco.",
    ),
    layoutLabel: l("Layout", "Layout", "Mise en page", "Layout"),
    layoutLogo: l("Logo", "Logo", "Logo", "Logo"),
    layoutLogoHint: l("Big logo in the centre", "Grosses Logo in der Mitte", "Grand logo au centre", "Logo grande al centro"),
    layoutText: l("Message", "Botschaft", "Message", "Messaggio"),
    layoutTextHint: l("A bold custom text", "Ein kräftiger eigener Text", "Un texte fort personnalisé", "Un testo forte personalizzato"),
    layoutList: l("List / menu", "Liste / Menü", "Liste / menu", "Elenco / menù"),
    layoutListHint: l("Menu items or services", "Menüpunkte oder Leistungen", "Plats ou services", "Voci di menù o servizi"),
    headerEdge: l("Header edge", "Kopf-Kante", "Bord d'en-tête", "Bordo intestazione"),
    edgeStraight: l("Straight", "Gerade", "Droit", "Dritto"),
    edgeWave: l("Wave", "Welle", "Vague", "Onda"),
    edgeRound: l("Arch", "Bogen", "Arche", "Arco"),
    edgeScallop: l("Scallop", "Wellenrand", "Feston", "Smerlo"),
    showStars: l("Star rating", "Sterne-Bewertung", "Note en étoiles", "Valutazione a stelle"),
    showStarsHint: l("Show five gold stars in the header", "Fünf goldene Sterne im Kopf anzeigen", "Afficher cinq étoiles dorées dans l'en-tête", "Mostra cinque stelle dorate nell'intestazione"),
    showQr: l("Backup QR code", "Backup-QR-Code", "QR code de secours", "QR code di riserva"),
    showQrHint: l("Add a scannable code for phones without NFC", "Scanbaren Code für Handys ohne NFC hinzufügen", "Ajouter un code scannable pour les téléphones sans NFC", "Aggiungi un codice scansionabile per telefoni senza NFC"),
    // Layout-specific content fields
    fieldBodyText: l("Card message", "Karten-Botschaft", "Message de la carte", "Messaggio della carta"),
    fieldBodyTextPh: l("Loved your visit? Tell the world in 30 seconds.", "Hat es Ihnen gefallen? Erzählen Sie es in 30 Sekunden.", "Vous avez aimé ? Dites-le en 30 secondes.", "Ti è piaciuto? Raccontalo in 30 secondi."),
    fieldListTitle: l("List title", "Listen-Titel", "Titre de la liste", "Titolo elenco"),
    fieldListTitlePh: l("e.g. Today's favourites", "z. B. Beliebt heute", "p. ex. Les favoris du jour", "es. I preferiti di oggi"),
    fieldListItems: l("List items (one per line)", "Listenpunkte (einer pro Zeile)", "Éléments (un par ligne)", "Voci (una per riga)"),
    fieldListItemsPh: l("Signature burger\nHand-cut fries\nHomemade lemonade", "Signature-Burger\nHausgemachte Pommes\nHausgemachte Limonade", "Burger signature\nFrites maison\nLimonade maison", "Burger d'autore\nPatatine fatte in casa\nLimonata fatta in casa"),
    // Destination
    reviewUrl: l("Google review link", "Google-Bewertungslink", "Lien d'avis Google", "Link recensione Google"),
    reviewUrlPh: l("https://g.page/r/…", "https://g.page/r/…", "https://g.page/r/…", "https://g.page/r/…"),
    reviewUrlHint: l(
      "Where a tap sends your customers. Paste your Google review link, or leave it blank and we'll help you set it up.",
      "Wohin ein Tap Ihre Kunden schickt. Fügen Sie Ihren Google-Bewertungslink ein, oder lassen Sie es leer, wir helfen bei der Einrichtung.",
      "Où un tap envoie vos clients. Collez votre lien d'avis Google, ou laissez vide, nous vous aidons à le configurer.",
      "Dove un tap invia i tuoi clienti. Incolla il link di recensione Google, o lascia vuoto, ti aiutiamo a configurarlo.",
    ),
    // Card footer labels (printed on the card)
    cardGoogleReview: l("Google review", "Google-Bewertung", "Avis Google", "Recensione Google"),
    cardTap: l("Tap", "Antippen", "Approcher", "Avvicina"),
    cardPoweredBy: l("Powered by", "Powered by", "Propulsé par", "Powered by"),
    cardSize: l("Card · 120 × 120 mm", "Karte · 120 × 120 mm", "Carte · 120 × 120 mm", "Carta · 120 × 120 mm"),
    cardQrTitle: l("No NFC?", "Kein NFC?", "Pas de NFC ?", "Niente NFC?"),
    cardQrHint: l("Scan to leave a review", "Zum Bewerten scannen", "Scannez pour laisser un avis", "Scansiona per recensire"),
    defaultBodyText: l(
      "Loved your visit? Tap and tell us in 30 seconds.",
      "Hat es Ihnen gefallen? Antippen und in 30 Sekunden erzählen.",
      "Vous avez aimé ? Tapez et dites-le en 30 secondes.",
      "Ti è piaciuto? Tappa e raccontalo in 30 secondi.",
    ),
    defaultListTitle: l("Today's favourites", "Beliebt heute", "Les favoris du jour", "I preferiti di oggi"),
    defaultListItems: l(
      "Signature burger\nHand-cut fries\nHomemade lemonade\nDaily fresh salads",
      "Signature-Burger\nHausgemachte Pommes\nHausgemachte Limonade\nTäglich frische Salate",
      "Burger signature\nFrites maison\nLimonade maison\nSalades fraîches du jour",
      "Burger d'autore\nPatatine fatte in casa\nLimonata fatta in casa\nInsalate fresche del giorno",
    ),
    // Defaults printed on a fresh card
    defaultHeadline: l(
      "We'd love your review!",
      "Wir freuen uns über Ihre Bewertung!",
      "Votre avis nous ferait plaisir !",
      "Ci farebbe piacere una tua recensione!",
    ),
    defaultLogoText: l("YOUR LOGO", "IHR LOGO", "VOTRE LOGO", "IL TUO LOGO"),
    defaultLogoHint: l("Add your logo here", "Firmenlogo hier einfügen", "Ajoutez votre logo ici", "Inserisci qui il tuo logo"),
    // Order panel
    quantity: l("Quantity", "Menge", "Quantité", "Quantità"),
    unitPrice: l("per card", "pro Karte", "par carte", "a carta"),
    total: l("Total", "Total", "Total", "Totale"),
    orderNote: l(
      "Incl. personalisation & Swiss QA. Free shipping in Switzerland, delivery in 3 to 5 days.",
      "Inkl. Personalisierung & Schweizer Qualitätsprüfung. Kostenloser Versand in der Schweiz, Lieferung in 3 bis 5 Tagen.",
      "Personnalisation & contrôle qualité suisse inclus. Livraison gratuite en Suisse, en 3 à 5 jours.",
      "Personalizzazione e controllo qualità svizzero inclusi. Spedizione gratuita in Svizzera, consegna in 3 a 5 giorni.",
    ),
    placeOrder: l("Place order", "Bestellung aufgeben", "Passer commande", "Ordina ora"),
    resetDesign: l("Reset design", "Design zurücksetzen", "Réinitialiser", "Reimposta"),
    // Confirmation
    orderThanks: l(
      "Your design is ready to send",
      "Ihr Design ist bereit zum Absenden",
      "Votre design est prêt à être envoyé",
      "Il tuo design è pronto per l'invio",
    ),
    orderThanksBody: l(
      "We've opened an email with your card specification. Send it and we'll reply with a proof within 24 hours.",
      "Wir haben eine E-Mail mit Ihrer Kartenspezifikation geöffnet. Senden Sie sie ab, wir antworten innert 24 Stunden mit einem Entwurf.",
      "Nous avons ouvert un e-mail avec la spécification de votre carte. Envoyez-le et nous répondrons avec une épreuve sous 24 heures.",
      "Abbiamo aperto un'email con la specifica della tua carta. Inviala e ti risponderemo con una bozza entro 24 ore.",
    ),
    orderClose: l("Keep editing", "Weiter bearbeiten", "Continuer l'édition", "Continua a modificare"),
  },
  footer: {
    description: l(
      "NFC cards for any business, from a Swiss company.",
      "NFC-Karten für jedes Business, von einem Schweizer Unternehmen.",
      "Cartes NFC pour toute entreprise, par une société suisse.",
      "Carte NFC per ogni attività, da un'azienda svizzera.",
    ),
    productHeading: l("Product", "Produkt", "Produit", "Prodotto"),
    companyHeading: l("Company", "Unternehmen", "Entreprise", "Azienda"),
    contactHeading: l("Contact", "Kontakt", "Contact", "Contatto"),
    companyLinks: [
      { href: "/about", label: l("About", "Über uns", "À propos", "Chi siamo") },
    ],
    privacy: { href: "/privacy", label: l("Privacy", "Datenschutz", "Confidentialité", "Privacy") },
    terms: { href: "/terms", label: l("Terms", "AGB", "Conditions", "Termini") },
    imprint: { href: "/imprint", label: l("Imprint", "Impressum", "Mentions légales", "Note legali") },
  },
  tapCard: {
    tapToOpen: l("Tap to open · no app needed", "Tippen zum Öffnen · keine App nötig", "Tapez pour ouvrir · sans appli", "Tappa per aprire · nessuna app"),
    tellUs: l("Tell us how it went…", "Wie war Ihr Besuch?…", "Dites-nous comment c'était…", "Com'è andata?…"),
    postToGoogle: l("Post to Google", "Auf Google posten", "Publier sur Google", "Pubblica su Google"),
    links: [
      l("Instagram", "Instagram", "Instagram", "Instagram"),
      l("Connect to WiFi", "Mit WLAN verbinden", "Se connecter au WiFi", "Connetti al WiFi"),
      l("Book a table", "Tisch reservieren", "Réserver une table", "Prenota un tavolo"),
      l("Our webshop", "Unser Webshop", "Notre boutique", "Il nostro shop"),
    ],
  },
};

// ── Static content pages (About, Privacy, Terms, Imprint) ─────────────
// Reached from the footer. Each renders through <ContentPage>. A section's
// `body` may contain blank lines to separate paragraphs; single line breaks
// are preserved (used for the imprint address block).
//
// NOTE: The legal copy below is a professional-tone starting point, NOT a
// substitute for legal advice. Have the privacy policy and terms reviewed
// before launch, and fill in the real company details in the imprint.
export type ContentSection = { heading: L; body: L };
export type ContentPageData = {
  eyebrow: L;
  title: L;
  intro: L;
  sections: ContentSection[];
};

export const pages: Record<"about" | "privacy" | "terms" | "imprint", ContentPageData> = {
  about: {
    eyebrow: l("About", "Über uns", "À propos", "Chi siamo"),
    title: l(
      "The team behind Taplino",
      "Das Team hinter Taplino",
      "L'équipe derrière Taplino",
      "Il team dietro Taplino",
    ),
    intro: l(
      "We build premium NFC cards for Swiss businesses — one tap between you and everything you share.",
      "Wir bauen hochwertige NFC-Karten für Schweizer Unternehmen — ein Tap zwischen Ihnen und allem, was Sie teilen.",
      "Nous concevons des cartes NFC premium pour les entreprises suisses — un tap entre vous et tout ce que vous partagez.",
      "Realizziamo carte NFC premium per le aziende svizzere — un tap tra te e tutto ciò che condividi.",
    ),
    sections: [
      {
        heading: l("Our mission", "Unsere Mission", "Notre mission", "La nostra missione"),
        body: l(
          "Every business deserves a simple, elegant way to connect with its customers. We turn a single tap into more reviews, live menus and link hubs — with no app to install and no friction for your guests.",
          "Jedes Unternehmen verdient eine einfache, elegante Art, mit seinen Kunden in Kontakt zu treten. Wir verwandeln einen einzigen Tap in mehr Bewertungen, Live-Menüs und Link-Hubs — ohne App-Installation und ohne Hürden für Ihre Gäste.",
          "Chaque entreprise mérite un moyen simple et élégant de rester en lien avec ses clients. Nous transformons un simple tap en plus d'avis, de menus en direct et de hubs de liens — sans application à installer, sans friction pour vos clients.",
          "Ogni attività merita un modo semplice ed elegante per connettersi con i propri clienti. Trasformiamo un singolo tap in più recensioni, menu live e hub di link — senza app da installare e senza ostacoli per i tuoi clienti.",
        ),
      },
      {
        heading: l("Built in Switzerland", "In der Schweiz entwickelt", "Conçu en Suisse", "Sviluppato in Svizzera"),
        body: l(
          "We design the cards, program them and run the whole platform ourselves. The NFC hardware is produced by trusted partners to our specifications, using premium, durable materials, then quality-checked by our team before it ships to your door.",
          "Wir gestalten die Karten, programmieren sie und betreiben die gesamte Plattform selbst. Die NFC-Hardware wird von vertrauenswürdigen Partnern nach unseren Vorgaben aus hochwertigen, langlebigen Materialien gefertigt und von unserem Team geprüft, bevor sie zu Ihnen geliefert wird.",
          "Nous concevons les cartes, les programmons et exploitons toute la plateforme nous-mêmes. Le matériel NFC est produit par des partenaires de confiance selon nos spécifications, avec des matériaux premium et durables, puis contrôlé par notre équipe avant d'être expédié.",
          "Progettiamo le carte, le programmiamo e gestiamo noi l'intera piattaforma. L'hardware NFC è prodotto da partner affidabili secondo le nostre specifiche, con materiali premium e durevoli, e controllato dal nostro team prima della spedizione.",
        ),
      },
      {
        heading: l("Get in touch", "Kontakt aufnehmen", "Nous contacter", "Contattaci"),
        body: l(
          "Questions, ideas or a bulk order? Write to us at hello@taplino.ch and we usually reply within a few hours.",
          "Fragen, Ideen oder eine Grossbestellung? Schreiben Sie uns an hello@taplino.ch, wir antworten meist innert weniger Stunden.",
          "Des questions, des idées ou une commande en gros ? Écrivez-nous à hello@taplino.ch, nous répondons généralement en quelques heures.",
          "Domande, idee o un ordine all'ingrosso? Scrivici a hello@taplino.ch, di solito rispondiamo in poche ore.",
        ),
      },
    ],
  },
  privacy: {
    eyebrow: l("Privacy", "Datenschutz", "Confidentialité", "Privacy"),
    title: l(
      "Privacy policy",
      "Datenschutzerklärung",
      "Politique de confidentialité",
      "Informativa sulla privacy",
    ),
    intro: l(
      "We take your privacy seriously. This policy explains what we collect, why, and the rights you have over your data.",
      "Wir nehmen Ihren Datenschutz ernst. Diese Erklärung beschreibt, welche Daten wir erheben, warum, und welche Rechte Sie an Ihren Daten haben.",
      "Nous prenons votre confidentialité au sérieux. Cette politique explique ce que nous collectons, pourquoi, et les droits dont vous disposez sur vos données.",
      "Prendiamo sul serio la tua privacy. Questa informativa spiega quali dati raccogliamo, perché e quali diritti hai sui tuoi dati.",
    ),
    sections: [
      {
        heading: l("Who is responsible", "Verantwortliche Stelle", "Responsable du traitement", "Titolare del trattamento"),
        body: l(
          "Taplino is the controller responsible for the personal data processed through this website. You can reach us at hello@taplino.ch. Full company details are listed in our imprint.",
          "Taplino ist die für die über diese Website verarbeiteten Personendaten verantwortliche Stelle. Sie erreichen uns unter hello@taplino.ch. Die vollständigen Firmenangaben finden Sie in unserem Impressum.",
          "Taplino est le responsable du traitement des données personnelles traitées via ce site. Vous pouvez nous joindre à hello@taplino.ch. Les coordonnées complètes figurent dans nos mentions légales.",
          "Taplino è il titolare del trattamento dei dati personali gestiti tramite questo sito. Puoi contattarci a hello@taplino.ch. I dati completi dell'azienda sono nelle note legali.",
        ),
      },
      {
        heading: l("What we collect", "Welche Daten wir erheben", "Ce que nous collectons", "Quali dati raccogliamo"),
        body: l(
          "When you contact us or place an order, we process the details you provide — such as your name, email address and order information. When you visit the site, we may process technical data such as your IP address and browser type to keep the service secure and reliable.",
          "Wenn Sie uns kontaktieren oder eine Bestellung aufgeben, verarbeiten wir die von Ihnen angegebenen Daten — etwa Name, E-Mail-Adresse und Bestellinformationen. Beim Besuch der Website können wir technische Daten wie Ihre IP-Adresse und den Browsertyp verarbeiten, um den Dienst sicher und zuverlässig zu betreiben.",
          "Lorsque vous nous contactez ou passez commande, nous traitons les informations que vous fournissez — nom, adresse e-mail et détails de commande. Lors de votre visite, nous pouvons traiter des données techniques telles que votre adresse IP et votre navigateur pour assurer la sécurité et la fiabilité du service.",
          "Quando ci contatti o effettui un ordine, trattiamo i dati che fornisci — nome, indirizzo email e informazioni sull'ordine. Durante la visita al sito, possiamo trattare dati tecnici come l'indirizzo IP e il tipo di browser per mantenere il servizio sicuro e affidabile.",
        ),
      },
      {
        heading: l("How we use your data", "Wie wir Ihre Daten verwenden", "Utilisation de vos données", "Come usiamo i tuoi dati"),
        body: l(
          "We use your data only to fulfil your order, respond to your enquiries, provide our service and meet our legal obligations. We never sell your data, and we share it with service providers only as far as necessary to deliver our service.",
          "Wir verwenden Ihre Daten ausschliesslich, um Ihre Bestellung zu erfüllen, Ihre Anfragen zu beantworten, unseren Dienst bereitzustellen und unsere gesetzlichen Pflichten zu erfüllen. Wir verkaufen Ihre Daten niemals und geben sie nur so weit an Dienstleister weiter, wie es für die Erbringung unseres Dienstes nötig ist.",
          "Nous utilisons vos données uniquement pour traiter votre commande, répondre à vos demandes, fournir notre service et respecter nos obligations légales. Nous ne vendons jamais vos données et ne les partageons avec des prestataires que dans la mesure nécessaire à la fourniture du service.",
          "Utilizziamo i tuoi dati solo per evadere il tuo ordine, rispondere alle tue richieste, fornire il nostro servizio e adempiere agli obblighi di legge. Non vendiamo mai i tuoi dati e li condividiamo con i fornitori di servizi solo nella misura necessaria a erogare il servizio.",
        ),
      },
      {
        heading: l("Your rights", "Ihre Rechte", "Vos droits", "I tuoi diritti"),
        body: l(
          "You have the right to access, correct or delete your personal data, and to object to or restrict its processing. To exercise these rights, contact us at hello@taplino.ch. We comply with the Swiss Federal Act on Data Protection (nFADP) and, where applicable, the EU GDPR.",
          "Sie haben das Recht, auf Ihre Personendaten zuzugreifen, sie zu berichtigen oder zu löschen sowie der Verarbeitung zu widersprechen oder sie einzuschränken. Zur Ausübung dieser Rechte kontaktieren Sie uns unter hello@taplino.ch. Wir halten das Schweizer Datenschutzgesetz (revDSG) und, soweit anwendbar, die EU-DSGVO ein.",
          "Vous avez le droit d'accéder à vos données personnelles, de les corriger ou de les supprimer, et de vous opposer à leur traitement ou de le limiter. Pour exercer ces droits, contactez-nous à hello@taplino.ch. Nous respectons la loi suisse sur la protection des données (nLPD) et, le cas échéant, le RGPD de l'UE.",
          "Hai il diritto di accedere ai tuoi dati personali, correggerli o cancellarli, e di opporti al trattamento o limitarlo. Per esercitare questi diritti, contattaci a hello@taplino.ch. Rispettiamo la legge svizzera sulla protezione dei dati (nLPD) e, ove applicabile, il GDPR dell'UE.",
        ),
      },
    ],
  },
  terms: {
    eyebrow: l("Terms", "AGB", "Conditions", "Termini"),
    title: l(
      "Terms and conditions",
      "Allgemeine Geschäftsbedingungen",
      "Conditions générales",
      "Termini e condizioni",
    ),
    intro: l(
      "These terms govern your use of the Taplino website and the purchase of our products and services.",
      "Diese Bedingungen regeln die Nutzung der Taplino-Website sowie den Kauf unserer Produkte und Dienstleistungen.",
      "Ces conditions régissent l'utilisation du site Taplino ainsi que l'achat de nos produits et services.",
      "Questi termini regolano l'uso del sito Taplino e l'acquisto dei nostri prodotti e servizi.",
    ),
    sections: [
      {
        heading: l("Scope", "Geltungsbereich", "Champ d'application", "Ambito di applicazione"),
        body: l(
          "These terms apply to all orders placed with Taplino and to the use of our website. By placing an order, you accept these terms in full.",
          "Diese Bedingungen gelten für alle bei Taplino aufgegebenen Bestellungen und für die Nutzung unserer Website. Mit der Bestellung akzeptieren Sie diese Bedingungen vollumfänglich.",
          "Ces conditions s'appliquent à toutes les commandes passées auprès de Taplino et à l'utilisation de notre site. En passant commande, vous acceptez pleinement ces conditions.",
          "Questi termini si applicano a tutti gli ordini effettuati presso Taplino e all'uso del nostro sito. Effettuando un ordine, accetti integralmente questi termini.",
        ),
      },
      {
        heading: l("Orders and pricing", "Bestellungen und Preise", "Commandes et prix", "Ordini e prezzi"),
        body: l(
          "All prices are in Swiss francs (CHF) and include applicable VAT unless stated otherwise. An order becomes binding once we confirm it. We reserve the right to correct obvious errors in prices or product descriptions.",
          "Alle Preise verstehen sich in Schweizer Franken (CHF) und inklusive allfälliger MwSt., sofern nicht anders angegeben. Eine Bestellung wird verbindlich, sobald wir sie bestätigen. Offensichtliche Fehler in Preisen oder Produktbeschreibungen dürfen wir korrigieren.",
          "Tous les prix sont en francs suisses (CHF) et incluent la TVA applicable, sauf indication contraire. Une commande devient ferme dès que nous la confirmons. Nous nous réservons le droit de corriger les erreurs manifestes de prix ou de description.",
          "Tutti i prezzi sono in franchi svizzeri (CHF) e includono l'IVA applicabile, salvo diversa indicazione. Un ordine diventa vincolante non appena lo confermiamo. Ci riserviamo il diritto di correggere errori evidenti nei prezzi o nelle descrizioni.",
        ),
      },
      {
        heading: l("Delivery", "Lieferung", "Livraison", "Consegna"),
        body: l(
          "We ship across Switzerland, typically within 3 to 5 business days after your design is approved. Delivery times are estimates and not guaranteed.",
          "Wir liefern in die ganze Schweiz, in der Regel innert 3 bis 5 Werktagen nach Freigabe Ihres Designs. Lieferfristen sind Richtwerte und nicht garantiert.",
          "Nous livrons dans toute la Suisse, généralement sous 3 à 5 jours ouvrables après validation de votre design. Les délais de livraison sont indicatifs et non garantis.",
          "Spediamo in tutta la Svizzera, di norma entro 3 a 5 giorni lavorativi dall'approvazione del tuo design. I tempi di consegna sono indicativi e non garantiti.",
        ),
      },
      {
        heading: l("Cancellation and returns", "Widerruf und Rückgabe", "Annulation et retours", "Recesso e resi"),
        body: l(
          "Because our cards are personalised to your brand, they are made to order and generally cannot be returned once production has started. If a product is defective, contact us and we will arrange a replacement.",
          "Da unsere Karten individuell auf Ihre Marke abgestimmt sind, werden sie auf Bestellung gefertigt und können nach Produktionsbeginn in der Regel nicht zurückgegeben werden. Ist ein Produkt fehlerhaft, kontaktieren Sie uns, und wir sorgen für Ersatz.",
          "Comme nos cartes sont personnalisées à votre marque, elles sont fabriquées sur commande et ne peuvent généralement pas être retournées une fois la production lancée. En cas de produit défectueux, contactez-nous et nous organiserons un remplacement.",
          "Poiché le nostre carte sono personalizzate con il tuo marchio, sono realizzate su ordinazione e in genere non possono essere restituite una volta avviata la produzione. Se un prodotto è difettoso, contattaci e provvederemo alla sostituzione.",
        ),
      },
      {
        heading: l("Liability and governing law", "Haftung und anwendbares Recht", "Responsabilité et droit applicable", "Responsabilità e legge applicabile"),
        body: l(
          "We provide our products and services with due care, but to the extent permitted by law we exclude liability for indirect or consequential damages. These terms are governed by Swiss law, and the exclusive place of jurisdiction is our registered seat in Switzerland.",
          "Wir erbringen unsere Produkte und Dienstleistungen mit der gebotenen Sorgfalt, schliessen jedoch im gesetzlich zulässigen Rahmen die Haftung für indirekte Schäden und Folgeschäden aus. Es gilt Schweizer Recht; ausschliesslicher Gerichtsstand ist unser Sitz in der Schweiz.",
          "Nous fournissons nos produits et services avec le soin requis, mais dans la mesure permise par la loi, nous excluons toute responsabilité pour les dommages indirects ou consécutifs. Ces conditions sont régies par le droit suisse et le for exclusif est notre siège en Suisse.",
          "Forniamo i nostri prodotti e servizi con la dovuta diligenza, ma nei limiti consentiti dalla legge escludiamo la responsabilità per danni indiretti o consequenziali. Questi termini sono regolati dal diritto svizzero e il foro esclusivo è la nostra sede in Svizzera.",
        ),
      },
    ],
  },
  imprint: {
    eyebrow: l("Imprint", "Impressum", "Mentions légales", "Note legali"),
    title: l("Imprint", "Impressum", "Mentions légales", "Note legali"),
    intro: l(
      "Information pursuant to Swiss law.",
      "Angaben gemäss schweizerischem Recht.",
      "Informations conformément au droit suisse.",
      "Informazioni ai sensi del diritto svizzero.",
    ),
    sections: [
      {
        heading: l("Responsible for this website", "Verantwortlich für diese Website", "Responsable de ce site", "Responsabile di questo sito"),
        body: l(
          "Taplino\n[Your full name]\n[Street and number]\n[Postcode and city]\nSwitzerland",
          "Taplino\n[Ihr vollständiger Name]\n[Strasse und Nummer]\n[PLZ und Ort]\nSchweiz",
          "Taplino\n[Votre nom complet]\n[Rue et numéro]\n[Code postal et ville]\nSuisse",
          "Taplino\n[Il tuo nome completo]\n[Via e numero]\n[CAP e città]\nSvizzera",
        ),
      },
      {
        heading: l("Contact", "Kontakt", "Contact", "Contatto"),
        body: l(
          "Email: hello@taplino.ch",
          "E-Mail: hello@taplino.ch",
          "E-mail : hello@taplino.ch",
          "Email: hello@taplino.ch",
        ),
      },
      {
        heading: l("Disclaimer", "Haftungsausschluss", "Clause de non-responsabilité", "Esclusione di responsabilità"),
        body: l(
          "The content of this website has been prepared with the greatest possible care. However, we assume no liability for the accuracy, completeness or timeliness of the content. Liability for links to external websites lies solely with their operators.",
          "Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Für Links zu externen Websites sind ausschliesslich deren Betreiber verantwortlich.",
          "Le contenu de ce site a été élaboré avec le plus grand soin. Nous déclinons toutefois toute responsabilité quant à l'exactitude, l'exhaustivité et l'actualité du contenu. La responsabilité des liens vers des sites externes incombe exclusivement à leurs exploitants.",
          "I contenuti di questo sito sono stati redatti con la massima cura. Tuttavia non ci assumiamo alcuna responsabilità per l'esattezza, la completezza e l'attualità dei contenuti. La responsabilità per i link a siti esterni è esclusivamente dei rispettivi gestori.",
        ),
      },
    ],
  },
};
