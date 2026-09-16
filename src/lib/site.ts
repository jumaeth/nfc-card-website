// Central place for brand + marketing copy. Change BRAND here to rename everything.
// User-facing strings are wrapped in l(EN, DE, FR, IT) — see src/lib/locale.ts.
// Non-translated values (names, prices, hrefs, keys) stay as plain strings.
//
// NOTE: DE/FR/IT copy below was authored for launch and should be proofread by a
// native speaker before going live — especially Swiss-specific phrasing.
import { l } from "@/lib/locale";

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
    "Zürich, Switzerland",
    "Zürich, Schweiz",
    "Zurich, Suisse",
    "Zurigo, Svizzera",
  ),
  languages: ["EN", "DE", "FR", "IT"] as const,
};

export const nav = [
  { label: l("How it works", "So funktioniert's", "Comment ça marche", "Come funziona"), href: "#how" },
  { label: l("Use cases", "Anwendungen", "Cas d'usage", "Casi d'uso"), href: "#use-cases" },
  { label: l("The stand", "Der Ständer", "Le présentoir", "L'espositore"), href: "#products" },
  { label: l("Review cards", "Bewertungskarten", "Cartes d'avis", "Carte recensioni"), href: "#review-cards" },
  { label: l("Pricing", "Preise", "Tarifs", "Prezzi"), href: "#pricing" },
  { label: l("FAQ", "FAQ", "FAQ", "FAQ"), href: "#faq" },
];

export const heroStats = [
  { value: "3'200+", label: l("Cards shipped", "Karten verschickt", "Cartes expédiées", "Carte spedite") },
  { value: "4.9★", label: l("Avg. rating", "Ø Bewertung", "Note moyenne", "Voto medio") },
  { value: "0", label: l("Apps to install", "Apps zu installieren", "Applis à installer", "App da installare") },
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
    label: l("Digital Menu", "Digitale Karte", "Menu digital", "Menu digitale"),
    title: l("Today's menu", "Heutige Karte", "Menu du jour", "Menu di oggi"),
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
    title: l("Design & customize", "Gestalten & anpassen", "Concevez & personnalisez", "Progetta e personalizza"),
    body: l(
      "Pick a card, plate or stand, add your logo and choose where a tap should lead — reviews, menu, or a link page.",
      "Wählen Sie Karte, Platte oder Ständer, fügen Sie Ihr Logo hinzu und bestimmen Sie, wohin ein Tap führt – Bewertungen, Karte oder Linkseite.",
      "Choisissez une carte, une plaque ou un présentoir, ajoutez votre logo et décidez où mène un tap – avis, menu ou page de liens.",
      "Scegli una carta, una targa o un espositore, aggiungi il tuo logo e decidi dove porta un tap: recensioni, menu o pagina di link.",
    ),
  },
  {
    n: "02",
    title: l("Made in Switzerland", "In der Schweiz gefertigt", "Fabriqué en Suisse", "Prodotto in Svizzera"),
    body: l(
      "We print, encode and quality-check every piece in our Zürich workshop, then ship it to your door within days.",
      "Wir drucken, codieren und prüfen jedes Stück in unserer Werkstatt in Zürich und liefern es innert Tagen zu Ihnen.",
      "Nous imprimons, encodons et contrôlons chaque pièce dans notre atelier zurichois, puis l'expédions chez vous en quelques jours.",
      "Stampiamo, codifichiamo e controlliamo ogni pezzo nel nostro laboratorio di Zurigo, poi te lo spediamo in pochi giorni.",
    ),
  },
  {
    n: "03",
    title: l("Tap & grow", "Tippen & wachsen", "Tapez & progressez", "Tappa e cresci"),
    body: l(
      "Customers tap their phone — no app, no QR fiddling. You watch clicks, reviews and followers climb in your dashboard.",
      "Kunden halten ihr Handy dran – keine App, kein QR-Gefummel. Sie sehen Klicks, Bewertungen und Follower im Dashboard wachsen.",
      "Les clients approchent leur téléphone – sans appli, sans QR compliqué. Vous voyez clics, avis et abonnés grimper dans votre tableau de bord.",
      "I clienti avvicinano il telefono: niente app, niente QR complicati. Vedi clic, recensioni e follower crescere nella dashboard.",
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
      "Place a plate on the counter or table. One tap opens your Google review form directly — no searching, no typing. Restaurants see 3–5× more reviews in the first month.",
      "Stellen Sie eine Platte auf Theke oder Tisch. Ein Tap öffnet Ihr Google-Bewertungsformular direkt – ohne Suchen, ohne Tippen. Restaurants erhalten im ersten Monat 3–5× mehr Bewertungen.",
      "Posez une plaque sur le comptoir ou la table. Un tap ouvre directement votre formulaire d'avis Google – sans recherche, sans saisie. Les restaurants voient 3 à 5× plus d'avis le premier mois.",
      "Metti una targa sul bancone o sul tavolo. Un tap apre direttamente il modulo di recensione Google, senza cercare né digitare. I ristoranti ottengono 3–5× recensioni in più nel primo mese.",
    ),
    points: [
      l(
        "Skip the search — deep link to your review form",
        "Kein Suchen – Direktlink zu Ihrem Bewertungsformular",
        "Zéro recherche – lien direct vers votre formulaire d'avis",
        "Nessuna ricerca: link diretto al modulo di recensione",
      ),
      l(
        "Smart routing to catch feedback before it goes public",
        "Intelligentes Routing fängt Feedback ab, bevor es öffentlich wird",
        "Routage intelligent pour capter les retours avant qu'ils ne soient publics",
        "Instradamento intelligente per intercettare i feedback prima che diventino pubblici",
      ),
      l(
        "Climb the local ranking as reviews roll in",
        "Steigen Sie im lokalen Ranking, wenn Bewertungen eintreffen",
        "Grimpez dans le classement local à mesure que les avis arrivent",
        "Sali nella classifica locale man mano che arrivano le recensioni",
      ),
    ],
  },
  {
    key: "menu",
    label: l("Digital Menu", "Digitale Karte", "Menu digital", "Menu digitale"),
    heading: l(
      "A menu you update, never reprint",
      "Eine Karte, die Sie aktualisieren – nie neu drucken",
      "Un menu que vous mettez à jour, jamais à réimprimer",
      "Un menu che aggiorni, mai da ristampare",
    ),
    body: l(
      "Tap to open your live menu in any language. Change a price or add a special from your phone and it's live instantly — across every card in the room.",
      "Tap öffnet Ihre Live-Karte in jeder Sprache. Ändern Sie einen Preis oder ergänzen Sie ein Tagesangebot vom Handy – sofort live auf jeder Karte im Raum.",
      "Un tap ouvre votre menu en direct, dans toutes les langues. Modifiez un prix ou ajoutez une suggestion depuis votre téléphone – en ligne instantanément, sur chaque carte de la salle.",
      "Un tap apre il tuo menu live in ogni lingua. Cambia un prezzo o aggiungi un piatto del giorno dal telefono: online all'istante, su ogni carta della sala.",
    ),
    points: [
      l(
        "Multilingual — EN · DE · FR · IT",
        "Mehrsprachig — EN · DE · FR · IT",
        "Multilingue — EN · DE · FR · IT",
        "Multilingue — EN · DE · FR · IT",
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
      "Eine schöne Linkseite für alles: Social-Media-Profile, WLAN-Zugang, Tischreservation, Treueprogramm und Ihren Webshop. Eine Karte, unendlich viele Ziele.",
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
      "Verfolgen Sie Taps, Bewertungen und Menüaufrufe. Ziele jederzeit änderbar.",
      "Suivez taps, avis et vues du menu. Changez de destination à tout moment.",
      "Monitora tap, recensioni e visualizzazioni del menu. Cambia destinazione quando vuoi.",
    ),
  },
  {
    key: "swiss",
    title: l("Swiss made", "Swiss Made", "Fabriqué en Suisse", "Prodotto in Svizzera"),
    body: l(
      "Designed and manufactured in Switzerland with premium materials.",
      "In der Schweiz entworfen und mit hochwertigen Materialien gefertigt.",
      "Conçu et fabriqué en Suisse avec des matériaux premium.",
      "Progettato e realizzato in Svizzera con materiali di qualità.",
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

// ── Flagship: the customisable NFC stand ──────────────────────────────
// A premium, bank-card-styled NFC display that sits on any counter or desk.
// Fully customised with your brand and destination — for any business.
export const standProducts = [
  {
    name: "Signature Stand",
    material: l("Anodised aluminium", "Eloxiertes Aluminium", "Aluminium anodisé", "Alluminio anodizzato"),
    price: "89",
    blurb: l(
      "Our flagship. A bank-card-thin NFC display on a weighted base — fully customised with your brand and whatever a tap should open.",
      "Unser Flaggschiff. Ein bankkartendünnes NFC-Display auf schwerem Standfuss – individuell mit Ihrer Marke und dem gewünschten Tap-Ziel.",
      "Notre produit phare. Un présentoir NFC fin comme une carte bancaire sur socle lesté – entièrement personnalisé à votre marque et à la destination de votre choix.",
      "Il nostro prodotto di punta. Un display NFC sottile come una carta di credito su base appesantita, personalizzato con il tuo marchio e la destinazione che preferisci.",
    ),
    accent: true,
  },
  {
    name: "Compact Plate",
    material: l("Acrylic + steel base", "Acryl + Stahlsockel", "Acrylique + socle acier", "Acrilico + base in acciaio"),
    price: "59",
    blurb: l(
      "A smaller standing plate for tight counters and tabletops. Same one-tap magic, pocket-friendly footprint.",
      "Eine kleinere Standplatte für enge Theken und Tische. Gleiche Ein-Tap-Magie, kompaktes Format.",
      "Une plaque plus compacte pour comptoirs étroits et tables. La même magie en un tap, format réduit.",
      "Una targa da tavolo più piccola per banconi stretti e tavoli. Stessa magia in un tap, ingombro ridotto.",
    ),
    accent: false,
  },
  {
    name: "Wall Mount",
    material: l("Brushed aluminium", "Gebürstetes Aluminium", "Aluminium brossé", "Alluminio spazzolato"),
    price: "69",
    blurb: l(
      "Mount it by the door, till or lift. Ideal for high-traffic spots where a tap should always be in reach.",
      "Montieren Sie ihn an Tür, Kasse oder Lift. Ideal für stark frequentierte Orte, wo ein Tap immer griffbereit sein soll.",
      "Fixez-le près de la porte, de la caisse ou de l'ascenseur. Idéal pour les lieux à fort passage où un tap doit toujours être à portée.",
      "Montalo vicino alla porta, alla cassa o all'ascensore. Ideale per punti ad alto traffico dove un tap deve essere sempre a portata di mano.",
    ),
    accent: false,
  },
];

// ── Separate line: plain Google Reviews cards ─────────────────────────
// A standalone, no-frills product just for collecting Google reviews.
export const reviewCards = [
  {
    name: "Review Card",
    material: l("Recycled PVC", "Recyceltes PVC", "PVC recyclé", "PVC riciclato"),
    price: "29",
    blurb: l(
      "Credit-card sized, printed with your Google review link. Hand it over or leave it on the table.",
      "Kreditkartengross, bedruckt mit Ihrem Google-Bewertungslink. Überreichen oder auf dem Tisch liegen lassen.",
      "Format carte bancaire, imprimée avec votre lien d'avis Google. À remettre en main propre ou à laisser sur la table.",
      "Formato carta di credito, stampata con il tuo link di recensione Google. Consegnala o lasciala sul tavolo.",
    ),
    accent: false,
  },
  {
    name: "Review Stand",
    material: l("Acrylic", "Acryl", "Acrylique", "Acrilico"),
    price: "39",
    blurb: l(
      "A dedicated tabletop stand — one tap straight to your five-star Google review form.",
      "Ein dedizierter Tischständer – ein Tap direkt zu Ihrem Fünf-Sterne-Google-Bewertungsformular.",
      "Un présentoir de table dédié – un tap directement vers votre formulaire d'avis Google cinq étoiles.",
      "Un espositore da tavolo dedicato: un tap direttamente al tuo modulo di recensione Google a cinque stelle.",
    ),
    accent: true,
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "40",
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
      l("Self-serve dashboard", "Self-Service-Dashboard", "Tableau de bord en libre-service", "Dashboard self-service"),
      l("One destination per card", "Ein Ziel pro Karte", "Une destination par carte", "Una destinazione per carta"),
      l("Free QR fallback", "Kostenloser QR-Fallback", "QR de secours gratuit", "QR di riserva gratuito"),
      l("Email support", "E-Mail-Support", "Support par e-mail", "Supporto via e-mail"),
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
      l("Analytics & review insights", "Analytics & Bewertungs-Insights", "Analytics & analyse des avis", "Analisi e insight sulle recensioni"),
      l("Multiple locations", "Mehrere Standorte", "Plusieurs établissements", "Più sedi"),
      l("Priority support", "Prioritäts-Support", "Support prioritaire", "Supporto prioritario"),
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
      "Wir übernehmen Karte & Bewertungen für Sie.",
      "Nous gérons votre menu & vos avis pour vous.",
      "Gestiamo menu e recensioni per te.",
    ),
    features: [
      l("Everything in Pro", "Alles aus Pro", "Tout de Pro", "Tutto di Pro"),
      l("10 personalised NFC plates", "10 personalisierte NFC-Platten", "10 plaques NFC personnalisées", "10 targhe NFC personalizzate"),
      l("Menu translation & updates", "Menü-Übersetzung & -Updates", "Traduction & mises à jour du menu", "Traduzione e aggiornamenti del menu"),
      l("We reply to every Google review", "Wir beantworten jede Google-Bewertung", "Nous répondons à chaque avis Google", "Rispondiamo a ogni recensione Google"),
      l("Dedicated account manager", "Persönlicher Account Manager", "Gestionnaire de compte dédié", "Account manager dedicato"),
    ],
    cta: l("Talk to us", "Kontaktieren Sie uns", "Contactez-nous", "Parla con noi"),
    featured: false,
  },
];

export const testimonials = [
  {
    quote: l(
      "We went from 12 to 80 Google reviews in two months. The plate just sits on the counter and works.",
      "Wir sind in zwei Monaten von 12 auf 80 Google-Bewertungen gekommen. Die Platte steht einfach auf der Theke und funktioniert.",
      "Nous sommes passés de 12 à 80 avis Google en deux mois. La plaque est simplement posée sur le comptoir et fonctionne.",
      "Siamo passati da 12 a 80 recensioni Google in due mesi. La targa sta semplicemente sul bancone e funziona.",
    ),
    name: "Sofia Keller",
    role: l("Owner, Café Bellevue — Zürich", "Inhaberin, Café Bellevue — Zürich", "Propriétaire, Café Bellevue — Zurich", "Titolare, Café Bellevue — Zurigo"),
  },
  {
    quote: l(
      "Changing the menu used to mean a trip to the printer. Now I do it from my phone during the commute.",
      "Früher hiess Kartenänderung ein Gang zur Druckerei. Heute mache ich das vom Handy aus im Pendlerzug.",
      "Changer le menu, c'était un aller-retour chez l'imprimeur. Maintenant je le fais depuis mon téléphone dans les transports.",
      "Cambiare il menu significava un salto in tipografia. Ora lo faccio dal telefono mentre sono in viaggio.",
    ),
    name: "Marco Bianchi",
    role: l("Chef, Ristorante Da Marco — Lugano", "Küchenchef, Ristorante Da Marco — Lugano", "Chef, Ristorante Da Marco — Lugano", "Chef, Ristorante Da Marco — Lugano"),
  },
  {
    quote: l(
      "One tap gives customers our Instagram, WiFi and webshop. It feels genuinely premium — very Swiss.",
      "Ein Tap gibt Kunden unser Instagram, WLAN und den Webshop. Es wirkt richtig hochwertig – sehr schweizerisch.",
      "Un tap donne aux clients notre Instagram, le WiFi et la boutique. Ça fait vraiment premium – très suisse.",
      "Un tap dà ai clienti il nostro Instagram, il WiFi e lo shop online. Sembra davvero premium, molto svizzero.",
    ),
    name: "Camille Favre",
    role: l("Founder, Boutique Nord — Genève", "Gründerin, Boutique Nord — Genf", "Fondatrice, Boutique Nord — Genève", "Fondatrice, Boutique Nord — Ginevra"),
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
      "No. NFC is built into every modern smartphone. Customers simply hold their phone near the stand or card and the destination opens in their browser — no app, no account, no friction.",
      "Nein. NFC ist in jedem modernen Smartphone eingebaut. Kunden halten ihr Handy einfach an den Ständer oder die Karte, und das Ziel öffnet sich im Browser – keine App, kein Konto, kein Aufwand.",
      "Non. Le NFC est intégré à tout smartphone récent. Les clients approchent simplement leur téléphone du présentoir ou de la carte, et la destination s'ouvre dans leur navigateur – sans appli, sans compte, sans friction.",
      "No. L'NFC è integrato in ogni smartphone moderno. I clienti avvicinano semplicemente il telefono all'espositore o alla carta e la destinazione si apre nel browser: niente app, niente account, nessun ostacolo.",
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
      "All iPhones from the XR (2018) onward and virtually every NFC-enabled Android phone. For older devices, every product also carries a printed QR code as a fallback.",
      "Alle iPhones ab dem XR (2018) und praktisch jedes NFC-fähige Android-Handy. Für ältere Geräte trägt jedes Produkt zusätzlich einen gedruckten QR-Code als Fallback.",
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
      "Yes — on the Pro and Managed plans you can repoint any card to a new URL from your dashboard at any time, without reordering.",
      "Ja – mit den Plänen Pro und Managed leiten Sie jede Karte jederzeit im Dashboard auf eine neue URL um, ohne neu zu bestellen.",
      "Oui – avec les forfaits Pro et Managed, vous pouvez rediriger n'importe quelle carte vers une nouvelle URL depuis votre tableau de bord, à tout moment, sans recommander.",
      "Sì: con i piani Pro e Managed puoi reindirizzare qualsiasi carta a un nuovo URL dalla dashboard, in qualsiasi momento, senza riordinare.",
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
      "Everything is designed, printed and encoded in our workshop in Switzerland using premium, durable materials.",
      "Alles wird in unserer Werkstatt in der Schweiz gestaltet, gedruckt und codiert – mit hochwertigen, langlebigen Materialien.",
      "Tout est conçu, imprimé et encodé dans notre atelier en Suisse, avec des matériaux premium et durables.",
      "Tutto è progettato, stampato e codificato nel nostro laboratorio in Svizzera, con materiali di qualità e durevoli.",
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
      "Our cards are waterproof and built for daily use, but accidents happen — replacements are quick and affordable, and included on the Managed plan.",
      "Unsere Karten sind wasserfest und für den täglichen Einsatz gemacht, aber Missgeschicke passieren – Ersatz ist schnell und günstig und im Managed-Plan inbegriffen.",
      "Nos cartes sont étanches et conçues pour un usage quotidien, mais les accidents arrivent – le remplacement est rapide et abordable, et inclus dans le forfait Managed.",
      "Le nostre carte sono impermeabili e pensate per l'uso quotidiano, ma gli incidenti capitano: la sostituzione è rapida ed economica, e inclusa nel piano Managed.",
    ),
  },
];

// Company-name marquee (proper nouns — not translated).
export const logoNames = [
  "Café Bellevue",
  "Da Marco",
  "Boutique Nord",
  "La Santeria",
  "Kaffi Züri",
  "Le Gruyérien",
  "Osteria Sole",
];

// ── UI strings that live inside components (headings, labels, buttons) ──
export const ui = {
  nav: {
    orderCards: l("Order cards", "Karten bestellen", "Commander des cartes", "Ordina le carte"),
  },
  hero: {
    badge: l(
      "Swiss-made · Ships in 3–5 days",
      "Swiss Made · Versand in 3–5 Tagen",
      "Fabriqué en Suisse · Expédié en 3–5 jours",
      "Made in Switzerland · Spedizione in 3–5 giorni",
    ),
    headPre: l("One tap between you and", "Ein Tap zwischen Ihnen und", "Un tap entre vous et", "Un tap tra te e"),
    headHighlight: l("everything", "allem", "tout", "tutto"),
    // Leading separator is part of the string so each language can punctuate
    // correctly after the highlighted word (e.g. German needs a comma).
    headPost: l(" you share.", ", was Sie teilen.", " ce que vous partagez.", " ciò che condividi."),
    body: l(
      "A premium, fully customisable NFC stand for any business. Customers tap their phone — no app, no QR fuss — and land wherever you want: your links, socials, menu, booking or Google reviews.",
      "Ein hochwertiger, voll anpassbarer NFC-Ständer für jedes Business. Kunden halten ihr Handy dran – keine App, kein QR-Aufwand – und landen genau dort, wo Sie wollen: Links, Social Media, Karte, Buchung oder Google-Bewertungen.",
      "Un présentoir NFC premium et entièrement personnalisable pour toute entreprise. Les clients approchent leur téléphone – sans appli, sans QR compliqué – et arrivent où vous voulez : vos liens, réseaux, menu, réservation ou avis Google.",
      "Un espositore NFC premium e totalmente personalizzabile per qualsiasi attività. I clienti avvicinano il telefono – niente app, niente QR complicati – e arrivano dove vuoi: link, social, menu, prenotazioni o recensioni Google.",
    ),
    ctaPrimary: l("Order your cards", "Karten bestellen", "Commander vos cartes", "Ordina le tue carte"),
    ctaSecondary: l("See how it works", "So funktioniert's", "Voir comment ça marche", "Scopri come funziona"),
  },
  logos: {
    trusted: l(
      "Trusted by venues across Switzerland",
      "Vertraut von Betrieben in der ganzen Schweiz",
      "La confiance d'établissements dans toute la Suisse",
      "Scelto da attività in tutta la Svizzera",
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
      "No technical setup. No app for your customers. Just a beautifully made stand that does one thing brilliantly.",
      "Kein technisches Setup. Keine App für Ihre Kunden. Nur ein schön gemachter Ständer, der eine Sache brillant macht.",
      "Aucune configuration technique. Aucune appli pour vos clients. Juste un présentoir superbement conçu qui fait une chose à merveille.",
      "Nessuna configurazione tecnica. Nessuna app per i tuoi clienti. Solo un espositore ben fatto che fa una cosa in modo eccellente.",
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
      "Point a tap anywhere. Switch the destination whenever your goals change — the card stays the same.",
      "Richten Sie einen Tap überallhin. Ändern Sie das Ziel, wann immer sich Ihre Ziele ändern – die Karte bleibt dieselbe.",
      "Dirigez un tap où vous voulez. Changez de destination quand vos objectifs évoluent – la carte reste la même.",
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
          "reprints — update from your phone",
          "Nachdrucke – Update vom Handy",
          "réimpressions – mise à jour depuis le téléphone",
          "ristampe: aggiorni dal telefono",
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
      "Everything is engineered to just work — for you and for every guest who taps.",
      "Alles ist so gebaut, dass es einfach funktioniert – für Sie und für jeden Gast, der tippt.",
      "Tout est pensé pour fonctionner sans effort – pour vous et pour chaque client qui tape.",
      "Tutto è progettato per funzionare e basta: per te e per ogni cliente che tappa.",
    ),
  },
  products: {
    stand: {
      eyebrow: l("The stand", "Der Ständer", "Le présentoir", "L'espositore"),
      title: l(
        "One customisable stand, endless destinations",
        "Ein anpassbarer Ständer, unendlich viele Ziele",
        "Un présentoir personnalisable, une infinité de destinations",
        "Un espositore personalizzabile, infinite destinazioni",
      ),
      intro: l(
        "Our flagship NFC display — customised with your brand and whatever a tap should open. Choose the format that fits your space, all made in Switzerland.",
        "Unser NFC-Flaggschiff – individuell mit Ihrer Marke und dem gewünschten Tap-Ziel. Wählen Sie das Format, das zu Ihrem Raum passt – alles in der Schweiz gefertigt.",
        "Notre présentoir NFC phare – personnalisé à votre marque et à la destination de votre choix. Choisissez le format adapté à votre espace, le tout fabriqué en Suisse.",
        "Il nostro display NFC di punta, personalizzato con il tuo marchio e la destinazione che preferisci. Scegli il formato adatto al tuo spazio, tutto prodotto in Svizzera.",
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
        "A separate, no-frills line dedicated to one job: sending customers straight to your Google review form. Perfect on their own or alongside the stand.",
        "Eine separate, schnörkellose Linie für einen Zweck: Kunden direkt zu Ihrem Google-Bewertungsformular zu schicken. Perfekt allein oder ergänzend zum Ständer.",
        "Une gamme distincte et épurée dédiée à une seule mission : envoyer les clients directement vers votre formulaire d'avis Google. Parfaite seule ou en complément du présentoir.",
        "Una linea separata ed essenziale dedicata a un solo compito: portare i clienti direttamente al tuo modulo di recensione Google. Perfetta da sola o insieme all'espositore.",
      ),
      cta: l("See pricing", "Preise ansehen", "Voir les tarifs", "Vedi i prezzi"),
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
      "Buy cards outright, or let us run the whole thing. Cancel monthly plans anytime — no lock-in beyond the first 3 months on Managed.",
      "Karten direkt kaufen oder alles von uns betreiben lassen. Monatspläne jederzeit kündbar – keine Bindung über die ersten 3 Monate bei Managed hinaus.",
      "Achetez vos cartes ou confiez-nous toute la gestion. Résiliez les forfaits mensuels à tout moment – aucun engagement au-delà des 3 premiers mois pour Managed.",
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
      "Still unsure? Write to us — we usually reply within a few hours.",
      "Noch unsicher? Schreiben Sie uns – wir antworten meist innert weniger Stunden.",
      "Encore un doute ? Écrivez-nous – nous répondons généralement en quelques heures.",
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
      "Tell us about your venue and we'll send a sample design within 24 hours. Cards ship across Switzerland in 3–5 days.",
      "Erzählen Sie uns von Ihrem Betrieb, und wir senden innert 24 Stunden ein Musterdesign. Versand in der ganzen Schweiz in 3–5 Tagen.",
      "Parlez-nous de votre établissement et nous vous enverrons une maquette sous 24 heures. Expédition dans toute la Suisse en 3–5 jours.",
      "Raccontaci della tua attività e ti invieremo una bozza entro 24 ore. Spedizione in tutta la Svizzera in 3–5 giorni.",
    ),
    primary: l("Order your cards", "Karten bestellen", "Commander vos cartes", "Ordina le tue carte"),
  },
  footer: {
    description: l(
      "Swiss-made NFC stands and review cards for any business.",
      "Swiss Made NFC-Ständer und Bewertungskarten für jedes Business.",
      "Présentoirs NFC et cartes d'avis fabriqués en Suisse, pour toute entreprise.",
      "Espositori NFC e carte recensioni Made in Switzerland per ogni attività.",
    ),
    productHeading: l("Product", "Produkt", "Produit", "Prodotto"),
    companyHeading: l("Company", "Unternehmen", "Entreprise", "Azienda"),
    contactHeading: l("Contact", "Kontakt", "Contact", "Contatto"),
    companyLinks: [
      l("About", "Über uns", "À propos", "Chi siamo"),
      l("Sustainability", "Nachhaltigkeit", "Durabilité", "Sostenibilità"),
      l("Careers", "Karriere", "Carrières", "Lavora con noi"),
      l("Blog", "Blog", "Blog", "Blog"),
    ],
    madeIn: l("Made in Switzerland 🇨🇭", "Hergestellt in der Schweiz 🇨🇭", "Fabriqué en Suisse 🇨🇭", "Prodotto in Svizzera 🇨🇭"),
    privacy: l("Privacy", "Datenschutz", "Confidentialité", "Privacy"),
    terms: l("Terms", "AGB", "Conditions", "Termini"),
    imprint: l("Imprint", "Impressum", "Mentions légales", "Note legali"),
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
