export type Wine = {
  name: string;
  price: string;
};

export type WineGroup = {
  id: string;
  title: string;
  subtitle?: string;
  wines: Wine[];
};

export const winePageTitle = "Vini Rossi – Red Wines";

export const wineGroups: WineGroup[] = [
  {
    id: "italy-regions",
    title: "From the Northern, Central and Southern Regions of Italy",
    wines: [
      { name: 'Arnad Montjovet, Nebbiolo "La Kiuva" 2018 (Val D\'Aosta)', price: "68" },
      { name: 'Conte Brandolini, Merlot "Stomo" 2018 (Friuli)', price: "39" },
      { name: 'Tommaso Bussola, Valpolicella "Ripasso" 2019 (Veneto)', price: "55" },
      { name: "Anno Domini, Cabernet di Cabernet 2018 (Veneto)", price: "85" },
      { name: "Buglioni, Valpolicella Classico Superiore 2021 (Veneto)", price: "45" },
      { name: "Le Ragose, Amarone Classico 2009 (Veneto)", price: "140" },
      { name: "Zeni, Amarone Classico 2019 (Veneto)", price: "85" },
      { name: "Buglioni, Amarone Classico 2017 (Veneto)", price: "125" },
      { name: "Val d'Isarco, Lagrein 2022 (Alto Adige)", price: "45" },
      { name: "Kaltern, Schiava Gentile 2021 (Alto Adige)", price: "45" },
      { name: 'Vini del Re\', Lambrusco "Grasparossa" (Emilia, chilled)', price: "39" },
      {
        name: "Fontezoppa, Vernaccia di Serrapetrona (Marche, organic sparkling red)",
        price: "45",
      },
      { name: "Trerè, Sangiovese di Romagna 2022 (chilled)", price: "34" },
      { name: "Paolo Bea, San Valentino 2015 (Umbria)", price: "120" },
      { name: "Torre in Pietra, Roma Rosso DOCG 2019 (Lazio)", price: "36" },
      { name: "Colpetrone, Sagrantino di Montefalco 2015 (Umbria)", price: "72" },
      { name: 'Fontezoppa, "Pepato" di Serrapetrona 2022 (Marche, organic)', price: "55" },
      { name: "Pasetti, Montepulciano d'Abruzzo 2021 (Abruzzo)", price: "48" },
      { name: "Castorani, Montepulciano d'Abruzzo Riserva 2017 (Abruzzo)", price: "80" },
      { name: "Tombacco, Aglianico di Benevento 2020 (Campania)", price: "38" },
      {
        name: 'Tenuta Capaldo, "Guglielmus" Taurasi Riserva 2017 (Campania)',
        price: "100",
      },
      { name: 'Tombacco, "Azzurra" Rosso di Puglia 2020 (Primitivo)', price: "55" },
      { name: "San Marzano, Negroamaro 2019 (Puglia)", price: "68" },
      {
        name: 'San Marzano, "Sessantanni" Primitivo di Manduria 2017 (Puglia)',
        price: "80",
      },
      {
        name: 'Poderi Parpinello, "San Costantino" Cannonau di Sardegna 2021 (Sardinia)',
        price: "45",
      },
      { name: "Melovivo, Frappato 2022 (Sicily, organic)", price: "42" },
      { name: "Cottanera, Etna Rosso 2022 (Sicily)", price: "55" },
      { name: "Feudo Montoni, Nero d'Avola 2020 (Sicily)", price: "50" },
    ],
  },
  {
    id: "piedmont",
    title: "Piedmont",
    wines: [
      { name: 'Amistà, "Nizza Vigna" Barbera 2019', price: "100" },
      { name: "La Miraja, Grignolino d'Asti 2022", price: "39" },
      {
        name: 'Luigi Oddero, "Convento" (Barbera-Dolcetto-Nebbiolo) 2021',
        price: "48",
      },
      { name: "Vietti, Dolcetto d'Alba 2022", price: "48" },
      { name: "Giovanni Rosso, Barbera d'Alba 2022", price: "55" },
      { name: 'Cordero di Montezemolo, Nebbiolo "Langhe" 2021', price: "65" },
      { name: "Cantina del Nebbiolo, Barbaresco 2016", price: "70" },
      { name: "Pio Cesare, Barbaresco 2018", price: "160" },
      { name: 'Boasso, Barolo "Gabutti" 2017', price: "120" },
      { name: 'G.D. Vajra, Barolo "Albe" 2018', price: "100" },
      { name: "Arnaldo Rivera, Barolo 2015", price: "110" },
    ],
  },
  {
    id: "traditional-tuscan",
    title: "Traditional Tuscan",
    wines: [
      {
        name: "Il Palazzone, Rosso del Palazzone 2021 (Montalcino, Sangiovese)",
        price: "48",
      },
      {
        name: 'Avignonesi, "DADI" Sangiovese 2021 (organic, Montepulciano)',
        price: "55",
      },
      {
        name: "Fattoria le Pupille, Morellino di Scansano 2020 (Sangiovese blend)",
        price: "45",
      },
      { name: "Giusti & Zanza, Nemorino 2019 (Tuscan Blend)", price: "42" },
      { name: "Agostina Pieri, Rosso di Montalcino 2021", price: "58" },
      { name: "Ambra, Barco Reale di Carmignano 2022 (Sangiovese)", price: "42" },
      {
        name: "Ciacci Piccolomini di Aragona, Toscana Rosso 2020 (Mostly Sangiovese)",
        price: "45",
      },
      {
        name: "La Spinetta, Il Gentile di Casanova 2020 (Prugnolo Gentile)",
        price: "60",
      },
      { name: "Avignonesi, Vino Nobile di Montepulciano 2019", price: "68" },
      {
        name: "Isole e Olena, Cepparello 2016/19 (100% Sangiovese)",
        price: "160",
      },
    ],
  },
  {
    id: "supertuscan",
    title: "Supertuscan",
    wines: [
      {
        name: "Banfi, Cum Laude 2021 (Sangiovese-Cabernet-Merlot-Sirah)",
        price: "100",
      },
      { name: "Carpineto, Farnito 2015 (Cabernet Sauvignon)", price: "90" },
      {
        name: "Tenuta San Guido, Guidalberto Toscana IGT 2020 (Cabernet-Merlot)",
        price: "125",
      },
      { name: "Giusti & Zanza, Belcore 2019 (Sangiovese-Merlot)", price: "48" },
      { name: 'Antinori, "Il Bruciato" Guado al Tasso 2021', price: "78" },
      { name: "Tenuta Luce, Lucente 2021 (Merlot-Sangiovese)", price: "68" },
      { name: "Ludovico Antinori, Insoglio del Cinghiale 2020", price: "80" },
      {
        name: "Colle Massari, Grattamacco Bolgheri 2018 (Organic Cabernet Blend)",
        price: "100",
      },
      {
        name: 'Campo alla Sughera, "ADEO" Bolgheri Rosso 2020 (Cabernet-Merlot)',
        price: "60",
      },
      {
        name: "Castellare, I Sodi di San Niccolò 2019 (Chianti Blend)",
        price: "200",
      },
      { name: 'Bibi Graetz, "Grilli" Toscana Rosso 2019', price: "78" },
      {
        name: "Giusti & Zanza, Dulcamara 2019 (Merlot-Cabernet-Petit Verdot)",
        price: "100",
      },
      { name: "Ruffino, Modus 2019 (Sangiovese-Merlot-Cabernet)", price: "60" },
      { name: "Antinori, Tignanello 2019", price: "360" },
      {
        name: "Tenuta Setteponti, Oreno 2017 (Merlot-Cabernet-Petit Verdot)",
        price: "200",
      },
    ],
  },
  {
    id: "chianti",
    title: "Chianti",
    wines: [
      { name: "Santa Cristina, Chianti Superiore 2020", price: "42" },
      { name: 'Bindi Sergardi, Chianti Classico "La Boncia" 2021', price: "45" },
      { name: 'Petrognano, Chianti Superiore "Meme" 2022', price: "48" },
      {
        name: 'Castello di Ama, Chianti Classico Gran Selezione "San Lorenzo"',
        price: "150",
      },
      { name: "Castellani, Chianti Classico 2017", price: "60" },
      {
        name: "Tenuta di Capraia, Chianti Classico Gran Selezione 2018",
        price: "80",
      },
    ],
  },
  {
    id: "brunello",
    title: "Brunello di Montalcino",
    wines: [
      { name: "Mastroianni, Brunello di Montalcino 2019", price: "130" },
      { name: "Altesino, Brunello di Montalcino 2018", price: "175" },
      { name: "Banfi, Brunello di Montalcino (Various Vintages)", price: "150" },
      { name: 'Ruffino, Brunello "Tenuta il Greppone" 2017', price: "120" },
      { name: 'La Lecciaia, Brunello "Manapetra" 2016', price: "100" },
    ],
  },
  {
    id: "international",
    title: "International Reds",
    wines: [
      { name: "Tetramithos, Agiorgitiko 2021 (Greece)", price: "36" },
      { name: "Baron del Rey, Tempranillo 2019 (Spain)", price: "39" },
      { name: "Marques De Borba, Alentejo DOC 2022 (Portugal)", price: "39" },
      {
        name: "Baron Philippe de Rothschild, Escudo Rojo Gran Reserva 2021 (Chile)",
        price: "48",
      },
      { name: "Altosur, Malbec 2021 (Argentina)", price: "36" },
      { name: 'Ben Marco, Malbec "Valle de Uco" 2020 (Argentina)', price: "39" },
    ],
  },
  {
    id: "cabernet-merlot",
    title: "Cabernet, Merlot & Blends (USA & Italy)",
    wines: [
      { name: "Duckhorn, Napa Merlot 2019 (California)", price: "90" },
      { name: "Castle Rock, Merlot 2020 (California)", price: "36" },
      { name: 'Cosentino, "The Franc" Cabernet Franc 2021', price: "45" },
      { name: "Giapoza, Cabernet Sauvignon 2020", price: "45" },
      { name: 'Duckhorn, "Decoy" Cabernet Sauvignon 2021', price: "60" },
      { name: "Juggernaut, Cabernet Sauvignon 2021", price: "55" },
      {
        name: 'Canvasback, "Red Mountain" Cabernet 2017 (Washington)',
        price: "85",
      },
      { name: "Bacchus, Cabernet Sauvignon 2021 Canvasback", price: "34" },
      { name: "Redentore, Cabernet Sauvignon 2022 (Italy)", price: "42" },
      { name: "Le Ragose, Cabernet Sauvignon 2017 (Italy)", price: "120" },
      { name: 'Swanson, "Napa" Cabernet 2018', price: "100" },
    ],
  },
  {
    id: "blends-zin-syrah",
    title: "Red blends, Zinfandel, Syrah & More",
    wines: [
      {
        name: 'The Prisoner Wine Company "THE PRISONER" Red Blend 2021',
        price: "85",
      },
      { name: "Caymus, Conundrum 2021 (Syrah-Cab-Merlot-Zin)", price: "48" },
      { name: "Qupe, Syrah 2021", price: "45" },
      { name: "Bedrock, Old Vine Zinfandel 2022", price: "45" },
      { name: "Gehricke, Russian River Valley Zinfandel 2021", price: "60" },
      { name: "Rombauer, Napa Zinfandel 2019", price: "80" },
    ],
  },
  {
    id: "other-grapes",
    title: "Other Grapes – California & Italy",
    wines: [
      { name: "Ferrari Carano SIENA 2021 Sangiovese", price: "48" },
      { name: "Spellbound PETIT SIRAH 2022", price: "36" },
      { name: "Bacchus PINOT NOIR \"Ginger`s Cuvee 2022", price: "34" },
      { name: "Angel`s Ink PINOT NOIR 2020", price: "38" },
      { name: "Tunella, Pinot Noir 2021 (Italy)", price: "48" },
      { name: 'Belle Glos PINOT NOIR "Las Alturas" 2021', price: "85" },
      {
        name: 'Sonoma Cutrer, Pinot Noir "Russian River Valley" 2022',
        price: "75",
      },
    ],
  },
];

export const wineCount = wineGroups.reduce((n, g) => n + g.wines.length, 0);

export const featuredWineRegions = wineGroups.slice(0, 4);
