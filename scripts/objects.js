const STARTERS = [
  {
    name: "Frischer Gartensalat",
    price: 4.9,
    description: "Knackiger Mix aus Blattsalaten, Tomaten, Gurken und Karotten, serviert mit leichter Zitronen-Vinaigrette. Erfrischend und perfekt als leichter Start ins Menü.",
  },
  {
    name: "Gurkensalat in Sesam-Dressing",
    price: 3.9,
    description: "Dünn geschnittene Gurkenscheiben in einem milden Sesam-Reisessig-Dressing mit geröstetem Sesam. Kühl, aromatisch und besonders beliebt zu asiatischen Gerichten.",
  },
  {
    name: "Wakame-Algensalat",
    price: 5.5,
    description: "Marinierter japanischer Algensalat mit leicht süß-saurer Note, Sesam und feiner Chiliwürzung. Perfekt als traditionelle Vorspeise oder Beilage.",
  },
  {
    name: "Mini-Frühlingsrollen (6 Stück)",
    price: 4.5,
    description: "Knusprige Mini-Frühlingsrollen mit Gemüsefüllung, serviert mit süß-saurer Sauce. Perfekt zum Teilen oder als Snack für zwischendurch.",
  },
  {
    name: "Miso-Suppe",
    price: 3.5,
    description: "Klassische japanische Suppe mit Miso-Paste, Tofu, Wakame und Frühlingszwiebeln. Warm, herzhaft und ideal als leichter Einstieg.",
  },
  {
    name: "Saté-Erdnusssauce",
    price: 2.9,
    description: "Cremige, hausgemachte Erdnusssauce mit feiner Kokosnote. Perfekt als Dip zu Vorspeisen oder als Zusatz zu Hauptgerichten.",
  },
];

const MAINDISHES = [
  {
    name: "Argentinisches Rindersteak",
    price: 24.9,
    description:
      "Zartes Rumpsteak vom Angus-Rind, serviert mit Rosmarinkartoffeln und Kräuterbutter.",
  },
  {
    name: "Gegrilltes Lachsfilet",
    price: 19.5,
    description:
      "Saftiges Lachsfilet auf Zitronen-Dill-Sauce, dazu Gemüse der Saison und Basmatireis.",
  },
  {
    name: "Hausgemachte Pasta Alfredo",
    price: 13.9,
    description: "Cremige Alfredo-Sauce mit Parmesan und frischen Tagliatelle.",
  },
  {
    name: "Mediterranes Hähnchen",
    price: 16.4,
    description:
      "In Olivenöl und Kräutern mariniertes Hähnchen, serviert mit Grillgemüse.",
  },
  {
    name: "Veganes Curry",
    price: 14.2,
    description:
      "Kokos-Curry mit Kichererbsen, Süßkartoffeln und Spinat, dazu Jasminreis.",
  },
  {
    name: "BBQ Spare Ribs",
    price: 18.9,
    description:
      "Langsam gegarte Schweinerippchen mit rauchiger BBQ-Glasur und Krautsalat.",
  },
  {
    name: "Ofenfrische Lasagne",
    price: 12.8,
    description:
      "Klassische Lasagne mit Tomatenragout, Béchamel und frisch geriebenem Parmesan.",
  },
  {
    name: "Gebratene Garnelenpfanne",
    price: 17.5,
    description: "Garnelen in Knoblauch-Chili-Öl, dazu knuspriges Baguette.",
  },
];

const DESSERTS = [
  {
    name: "Tiramisu",
    price: 6.5,
    description:
      "Klassisches italienisches Tiramisu mit Espresso und Mascarpone.",
  },
  {
    name: "Schokolava-Küchlein",
    price: 7.2,
    description:
      "Warmer Schokokernkuchen mit flüssigem Kern, serviert mit Vanilleeis.",
  },
  {
    name: "Panna Cotta",
    price: 5.9,
    description: "Vanille-Panna-Cotta mit fruchtigem Erdbeer-Coulis.",
  },
  {
    name: "Hausgemachtes Sorbet",
    price: 4.8,
    description:
      "Erfrischendes Zitronen- und Mangosorbet, perfekt nach einem schweren Hauptgang.",
  },
  {
    name: "Crème Brûlée",
    price: 6.2,
    description: "Knusprige Karamellkruste auf samtiger Vanillecreme.",
  },
];

let cart = [];