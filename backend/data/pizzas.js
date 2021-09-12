const pizzas = [
  {
    name: "PEPPER BARBECUE CHICKEN",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
    description: "Pepper barbecue chicken for that extra zing",
  },
  {
    name: "Non Veg Supreme",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
    description:
      "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
  },
  {
    name: "Golden Corn Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 250,
        large: 360,
      },
    ],
    category: "veg",
    description:
      "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
    image: "https://images.dominos.co.in/new_cheese_n_corn.jpg",
  },
  {
    name: "Jalapeno & Red Paprika Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 300,
        large: 420,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/new_veg_extravaganza.jpg",
    description:
      "This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste.",
  },
  {
    name: "Margerita",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 150,
        medium: 220,
        large: 300,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/new_margherita_2502.jpg",
    description:
      "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding single layer of cheese over it. It is mouth-watering pizza for cheese lovers.",
  },
  {
    name: "Double Cheese Margherita Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/double_cheese_margherita_2502.jpg",
    description:
      "This is a plain pizza which have cheese on it which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding double layer of cheese over it",
  },
  {
    name: "Peppy Panner Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/new_peppy_paneer.jpg",
    description:
      "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
  },
  {
    name: "Chicken Sausage",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 470,
      },
    ],
    category: "nonveg",
    image: "https://images.dominos.co.in/new_chicken_sausage.jpg",
    description: "American classic! Spicy, herbed chicken sausage on pizza",
  },
  {
    name: "The Cheese Dominator",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/PIZ0170.jpg",
    description:
      "Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a Classic Large Pizza topped with extic vegetables",
  },
  {
    name: "Farmhouse",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 220,
        medium: 380,
        large: 500,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/farmhouse.png",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    name: "Veg Extravaganza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 280,
        medium: 450,
        large: 600,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/new_veg_extravaganza.jpg",
    description:
      "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
  },
  {
    name: "Indi Tandoori Paneer",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 280,
        medium: 450,
        large: 600,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/IndianTandooriPaneer.jpg",
    description:
      "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo",
  },
  {
    name: "Creamy Tomato Pasta Pizza - Veg",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 230,
        medium: 350,
        large: 500,
      },
    ],
    category: "veg",
    image: "https://images.dominos.co.in/CreamyTomatoPPVG_N.jpg",
    description:
      "Loaded with a delicious creamy tomato pasta topping , green capsicum, crunchy red and yellow capsicums",
  },
  {
    name: "Chicken Golden Delight",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 450,
        large: 600,
      },
    ],
    category: "nonveg",
    image: "https://images.dominos.co.in/new_chicken_golden_delight.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 300,
        medium: 500,
        large: 780,
      },
    ],
    category: "nonveg",
    image: "https://images.dominos.co.in/cheesepepperoni.png",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Chicken Dominator",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 300,
        medium: 500,
        large: 780,
      },
    ],
    category: "nonveg",
    image: "https://images.dominos.co.in/new_chicken_dominator.jpg",
    description:
      "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken chunks",
  },
  {
    name: "Indi Chicken Tikka",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 280,
        medium: 450,
        large: 650,
      },
    ],
    category: "nonveg",
    image: "https://images.dominos.co.in/IndianTandooriChickenTikka.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
  {
    name: "Creamy Tomato Pasta Pizza - Non Veg",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 350,
        large: 600,
      },
    ],
    category: "nonveg",
    image: "https://images.dominos.co.in/CreamyTomatoPPNV_N.jpg",
    description:
      "Loaded with a delicious creamy tomato pasta topping, BBQ pepper chicken, green capsicum, crunchy red and yellow bell peppers.",
  },
];

module.exports = pizzas;
