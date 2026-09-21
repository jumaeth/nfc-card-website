// Shared types + industry presets for the card editor.
import { l, type L } from "@/lib/locale";

export type FontStyle = "sans" | "serif" | "rounded" | "display";

// How the bottom edge of the header band is drawn. "wave" and "scallop" give
// the soft, flowy look of Google's review cards; "round" is a single arch.
export type HeaderShape = "straight" | "wave" | "round" | "scallop";

// What the middle of the card leads with. Not every business has a big logo —
// some are better served by a bold message ("text") or a short menu / service
// list ("list"). "logo" is the classic logo-drop-zone layout.
export type CardLayout = "logo" | "text" | "list";

// The full, serialisable description of a customer's card design.
export type CardConfig = {
  category: string;
  layout: CardLayout;
  headline: string;
  logoText: string;
  logoHint: string;
  logoDataUrl: string | null;
  logoName: string | null;
  // Layout-specific content.
  bodyText: string; // "text" layout — the big message
  listTitle: string; // "list" layout — heading above the items
  listItems: string; // "list" layout — one item per line
  headerColor: string;
  headerTextColor: string;
  bodyColor: string;
  starColor: string;
  accentColor: string;
  font: FontStyle;
  headerShape: HeaderShape;
  showStars: boolean;
  showQr: boolean; // backup QR code for phones without NFC
  reviewUrl: string;
};

export type Preset = {
  key: "restaurant" | "electronics" | "fitness" | "beauty";
  name: L;
  category: L;
  layout: CardLayout;
  headerColor: string;
  headerTextColor: string;
  bodyColor: string;
  starColor: string;
  accentColor: string;
  font: FontStyle;
  headerShape: HeaderShape;
  showStars: boolean;
};

// A ready-made example design (restaurant preset, default text) — used both as
// the editor's starting point and as the marketing preview on the home page.
export function exampleCard(): CardConfig {
  const p = PRESETS[0];
  return {
    category: "",
    layout: p.layout,
    headline: "",
    logoText: "",
    logoHint: "",
    logoDataUrl: null,
    logoName: null,
    bodyText: "",
    listTitle: "",
    listItems: "",
    headerColor: p.headerColor,
    headerTextColor: p.headerTextColor,
    bodyColor: p.bodyColor,
    starColor: p.starColor,
    accentColor: p.accentColor,
    font: p.font,
    headerShape: p.headerShape,
    showStars: p.showStars,
    showQr: false,
    reviewUrl: "",
  };
}

// Industry starting points — mirror the four reference designs. Everything
// stays editable after a preset is applied; picking one only seeds colours,
// font, layout, header edge and a suggested category label.
export const PRESETS: Preset[] = [
  {
    key: "restaurant",
    name: l("Restaurant", "Restaurant", "Restaurant", "Ristorante"),
    category: l("Fast food & restaurant", "Schnellrestaurant", "Restauration rapide", "Ristorazione veloce"),
    layout: "list",
    headerColor: "#e8452a",
    headerTextColor: "#ffffff",
    bodyColor: "#fbede9",
    starColor: "#ffd23f",
    accentColor: "#e8452a",
    font: "sans",
    headerShape: "wave",
    showStars: true,
  },
  {
    key: "electronics",
    name: l("Electronics", "Elektronik", "Électronique", "Elettronica"),
    category: l("Electronics store", "Elektronikmarkt", "Magasin d'électronique", "Negozio di elettronica"),
    layout: "logo",
    headerColor: "#143a5e",
    headerTextColor: "#ffffff",
    bodyColor: "#ffffff",
    starColor: "#f4c542",
    accentColor: "#143a5e",
    font: "sans",
    headerShape: "straight",
    showStars: true,
  },
  {
    key: "fitness",
    name: l("Fitness & Club", "Fitness & Club", "Fitness & Club", "Fitness & Club"),
    category: l("Fitness & nightlife", "Fitnessstudio & Nightlife", "Fitness & vie nocturne", "Fitness & nightlife"),
    layout: "text",
    headerColor: "#101010",
    headerTextColor: "#ffffff",
    bodyColor: "#fff0f6",
    starColor: "#ff2d78",
    accentColor: "#ff2d78",
    font: "display",
    headerShape: "round",
    showStars: true,
  },
  {
    key: "beauty",
    name: l("Beauty & Salon", "Beauty & Salon", "Beauté & Salon", "Bellezza & Salone"),
    category: l("Hair & beauty salon", "Friseur & Kosmetikstudio", "Coiffure & institut de beauté", "Parrucchiere & centro estetico"),
    layout: "logo",
    headerColor: "#c6a24b",
    headerTextColor: "#ffffff",
    bodyColor: "#fbf4e9",
    starColor: "#c6a24b",
    accentColor: "#b8933f",
    font: "serif",
    headerShape: "scallop",
    showStars: false,
  },
];

// Font stacks for the card. One family drives the whole card so the headline,
// logo label and body all share the same voice.
export const FONT_STACKS: Record<FontStyle, string> = {
  sans: "var(--font-body)",
  serif: '"Iowan Old Style", Georgia, "Times New Roman", serif',
  rounded:
    'ui-rounded, "SF Pro Rounded", "Hiragino Maru Gothic ProN", "Quicksand", var(--font-body)',
  display: "var(--font-display)",
};
