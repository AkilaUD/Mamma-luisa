export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  note?: string;
  variants?: { name: string; description: string }[];
  asterisk?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
  footnotes?: string[];
};

export const menuIntro =
  "We have gluten free pasta and many of the dishes besides the pasta can be made gluten free";

export const menuCategories: MenuCategory[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    items: [
      {
        name: "Zuppa del Giorno",
        description: "Soup of the day",
        price: "12.50",
      },
      {
        name: "Insalata Esotica",
        description:
          "Radicchio, arugola, dates, walnuts, goat cheese, grapes, dressed with honey mustard vinaigrette",
        price: "14.50",
      },
      {
        name: "Mista di Campo",
        description: "Mixed field greens and fresh vegetables with house dressing",
        price: "11.50",
      },
      {
        name: "Caprese al Pesto",
        description:
          "Fresh mozzarella, vine ripened tomatoes with pesto sauce, basil and olives",
        price: "17.50",
      },
      {
        name: "Bruschette",
        price: "17.50",
        variants: [
          {
            name: "Fava",
            description: "Mashed Fava Beans, Shaved Pecorino Cheese, Prosciutto",
          },
          {
            name: "Caprese",
            description: "Cherry Tomatoes, Fresh Mozzarella, Black Olives, Basil",
          },
          {
            name: "Goat Cheese",
            description: "Goat Cheese, Roasted Tomatoes, Capers",
          },
          {
            name: "Funghi",
            description: "Flavorful Porcini Mushroom Sauce",
          },
        ],
      },
      {
        name: "Formaggie Assortiti",
        description: "Daily selection of Italian cheeses",
        price: "26",
        note: "enough for two",
      },
      {
        name: "Zuppa di frutti di mare",
        description:
          "Simmered small Mediterranean clams and mussels with Sardinian couscous, crushed red pepper, roasted garlic, fresh parsley and tomatoes",
        price: "26",
      },
      {
        name: "Prosciutto e Melone",
        description: "Fresh cantaloupe, prosciutto di Parma, mozzarella and olives",
        price: "18.50",
      },
      {
        name: "Carpaccio di Bresaola",
        description:
          "Thin slices of cured beef tenderloin with parmigiano, fresh mushrooms, capers, arugola and marinated artichokes",
        price: "19.50",
      },
      {
        name: "Antipasto Misto all'Italiana",
        description:
          "Prosciutto di Parma, salame, mortadella, assorted Italian cheeses and marinated vegetables",
        price: "26",
        note: "enough for two",
      },
    ],
    footnotes: [
      "Additional basket of bread (for two) $2",
      "$2 is added for splitting orders",
      "Please advise your server of any food allergy in your party",
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      {
        name: "Bombette Pomodoro e Rucola",
        description:
          "Homemade ricotta and spinach gnocchi with our family's marinara sauce and arugola",
        price: "26",
      },
      {
        name: "Tagliatelle al Ragu Bolognese",
        description:
          "Egg ribbon pasta with hearty meat sauce in the traditional style of Northern Italy",
        price: "26",
      },
      {
        name: "Penne Arrabbiata",
        description: "Spicy marinara sauce with garlic and fresh parsley",
        price: "24",
      },
      {
        name: "Spaghetti Carbonara",
        description:
          "Spaghetti with pancetta, eggs, pecorino cheese, a touch of cream and black pepper",
        price: "25",
      },
      {
        name: "Garganelli Boscaiola",
        description:
          "Short rolled egg pasta with porcini mushroom, peas, pancetta in a tomato-cream sauce",
        price: "28",
      },
      {
        name: "Spaghetti alle Vongole",
        description:
          "Spicy classic Italian red clam sauce with roasted garlic and fresh parsley",
        price: "29",
      },
      {
        name: "Tagliatelle al Pesce",
        description:
          "Egg ribbon pasta with sautéed shrimp and sea scallops with extra virgin olive oil, garlic and basil",
        price: "31",
      },
      {
        name: "Ravioli alle Fave",
        description:
          "Cheese ravioli, fava beans and a flavorful vegetarian tomato sauce rich in garlic",
        price: "28",
      },
      {
        name: "Garganelli al Ragu' Vegetariano",
        description: "Short rolled egg pasta with vegetarian Ragu' Bolognese sauce",
        price: "26",
      },
      {
        name: "Penne del Pastore",
        description:
          "Penne with roasted peppers, sun dried tomatoes, aged ricotta, capers, olives and spicy marinara sauce",
        price: "26.50",
      },
      {
        name: "Ravioli di Zucca",
        description:
          "Butternut squash ravioli with roasted peppers, sage, pine nuts and a touch of cream",
        price: "28",
      },
      {
        name: "Spaghetti Aglio, Olio e Peperoncino",
        description:
          "Spaghetti sautéed with extra virgin olive oil, garlic, crushed red peppers, mushrooms and olives",
        price: "25",
      },
    ],
  },
  {
    id: "secondi",
    title: "Secondi",
    intro: "(a la carte)",
    items: [
      {
        name: "Picatine di Vitello",
        description:
          "Sautéed veal scaloppine with artichokes, capers, fresh lemon juice and white wine",
        price: "34.50",
      },
      {
        name: "Cotoletta di Pollo",
        description:
          "Breaded chicken breast placed on marinara sauce then topped with prosciutto and provolone",
        price: "30",
      },
      {
        name: "Costata ai Porcini",
        description:
          "Grilled veal chop with porcini mushroom sauce served with rosemary potatoes",
        price: "48",
        asterisk: true,
      },
      {
        name: "Maialino Ripieno",
        description:
          "Baked thin pork tenderloin stuffed with prosciutto and parmesan cheese, served with mushroom and spinach cream sauce",
        price: "31.50",
      },
      {
        name: "Tagliata di Manzo",
        description:
          "Sliced grilled Black Angus sirloin steak drizzled with extra virgin olive oil, topped with arugola and shaved Parmigiano",
        price: "48",
        asterisk: true,
      },
      {
        name: "Sogliola al Timo",
        description: "Sautéed filet of sole with fresh thyme, lemon and white wine",
        price: "32.50",
      },
      {
        name: "Tonno alla Puttanesca",
        description:
          "Seared tuna steak in a spicy tomato sauce with peppers, olives anchovies, and sun dried tomatoes",
        price: "32.50",
        asterisk: true,
      },
      {
        name: "Spezzatino Vegetariano con Patate",
        description:
          "Seitan stew with onions, peas, bell peppers and tomato sauce served with rosemary potatoes",
        price: "31.50",
      },
    ],
    footnotes: [
      "Consumers are advised of the danger of eating raw or partially cooked meat, poultry, seafood and eggs. Thoroughly cooking food reduces the danger of illness.",
      "A vegetable garnish will be served with meat and fish entrees",
    ],
  },
  {
    id: "verdure",
    title: "Verdure",
    items: [
      {
        name: "Patate al Forno",
        description: "Oven roasted potatoes with garlic and rosemary",
        price: "10",
      },
      {
        name: "Spinaci al Burro",
        description: "Sautéed spinach with butter and parmigiano",
        price: "10",
      },
      {
        name: "Cipolle al Forno",
        description: "Baked onions with balsamic vinegar",
        price: "10",
      },
      {
        name: "Vegetable Medley",
        description: "All three vegetables",
        price: "sm. 14 / lg. 24",
      },
    ],
  },
  {
    id: "vegetariano",
    title: "Menu Vegetariano",
    items: [
      {
        name: "Zuppa del Giorno",
        price: "12.50",
      },
      {
        name: "Formaggi Assortiti",
        description: "Daily selection of Italian cheeses",
        price: "26",
        note: "enough for two",
      },
      {
        name: "Insalata Esotica",
        description:
          "Radicchio, arugola, dates, walnuts, goat cheese, grapes, dressed with honey mustard vinaigrette",
        price: "14.50",
      },
      {
        name: "Mista di Campo",
        description: "Mixed field and fresh vegetables with house dressing",
        price: "11.50",
      },
      {
        name: "Caprese al Pesto",
        description:
          "Fresh mozzarella, vine ripened tomatoes with pesto sauce, basil and olives",
        price: "17.50",
      },
      {
        name: "Bruschetta Caprese",
        description: "Cherry Tomatoes, Fresh Mozzarella, Black olives, Basil",
        price: "17.50",
      },
      {
        name: "Bruschetta Funghi",
        description: "Flavorful Porcini Mushroom Sauce",
        price: "17.50",
      },
      {
        name: "Bruschetta Goat Cheese",
        description: "Goat Cheese, Roasted Tomatoes, Capers",
        price: "17.50",
      },
      {
        name: "Spezzatino Vegetariano con Patate",
        description:
          "Seitan stew with onions, peas, bell peppers and tomatoes served with rosemary potatoes",
        price: "31.50",
      },
      {
        name: "Bombette Pomodoro e Arugola",
        description:
          "Homemade ricotta and spinach gnocchi with our family's marinara sauce and arugola",
        price: "26",
      },
      {
        name: "Penne Arrabbiata",
        description: "Spicy marinara sauce with garlic and fresh parsley",
        price: "24",
      },
      {
        name: "Ravioli alle Fave",
        description:
          "Ricotta and basil filled ravioli, fava beans and flavorful vegetarian tomato sauce rich in garlic",
        price: "28",
      },
      {
        name: "Ravioli di Zucca",
        description:
          "Butternut squash ravioli with roasted peppers, sage, pine nuts and a touch of cream",
        price: "28",
      },
      {
        name: "Garganelli al Ragu' Vegetariano",
        description: "Short rolled egg pasta with vegetarian Ragu' Bolognese sauce",
        price: "26",
      },
      {
        name: "Penne del Pastore",
        description:
          "Penne with roasted peppers, sun dried tomatoes, aged ricotta, capers, olives and spicy marinara sauce",
        price: "26.50",
      },
      {
        name: "Spaghetti Aglio, Olio e Peperoncino",
        description:
          "Spaghetti sautéed with extra virgin olive oil, garlic, crushed red peppers, mushrooms and olives",
        price: "25",
      },
      {
        name: "Patate al Forno",
        description: "Oven roasted potatoes with rosemary",
        price: "10",
      },
      {
        name: "Spinaci al Burro",
        description: "Sautéed spinach with butter and parmigiano",
        price: "10",
      },
      {
        name: "Cipolle al Forno",
        description: "Baked onions with balsamic vinegar",
        price: "10",
      },
      {
        name: "Vegetable Medley",
        description: "All three vegetables",
        price: "sm. 14 / lg. 24",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    items: [
      {
        name: "Sparkling Mineral Water",
        price: "Small 5 / Large 8",
      },
      {
        name: "Italian Sodas (S.Pellegrino)",
        description: "Chinotto – Lemon – Orange",
        price: "6",
      },
      {
        name: "Ice Tea",
        description: "summer only",
        price: "5",
      },
      {
        name: "Still Mineral Water",
        price: "Small 5 / Large 8",
      },
      {
        name: "Sparkling Apple Cider",
        price: "Glass 5 / Bottle 13.50",
      },
      {
        name: "Virgin Bellini",
        description: "Sprite, peach and raspberry",
        price: "6",
      },
      {
        name: "Soft Drinks & Tea",
        description:
          "Coca-Cola · Ginger Ale · Sprite · Diet Coke · Coffee · Decaf · Tea · Herbal Tea · Iced Tea",
        price: "5",
      },
      {
        name: "Espresso",
        description: "Regular or Decaf",
        price: "5 / Double 7",
      },
      {
        name: "Hot water",
        price: "1",
      },
      {
        name: "Cappuccino",
        price: "6 / Jumbo 8 / Iced 7.50",
      },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    items: [
      {
        name: "Biscotti e Vin Santo",
        price: "",
      },
      {
        name: "Tartufo al Cioccolato",
        price: "",
      },
      {
        name: "Daily selection of sorbetti",
        description: "Fruit Sorbet",
        price: "",
      },
      {
        name: "Ask for our daily selection of desserts on the Tray",
        price: "12.50",
      },
    ],
  },
];

export const featuredPasta = [
  menuCategories[1].items[0],
  menuCategories[1].items[1],
  menuCategories[1].items[6],
  menuCategories[1].items[10],
];

export const featuredSecondi = [
  menuCategories[2].items[0],
  menuCategories[2].items[4],
  menuCategories[2].items[6],
  menuCategories[2].items[7],
];
