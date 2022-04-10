const alimentation = [
  {
    age: {
      from: 0,
      to: 0.5,
    },
    for: ["men", "woman"],
    tag: "baby",
    info: [
      "Breast milk is an essential food for the baby's health, since it is the only thing capable of satisfying all the nutritional needs demanded by the first months of life.",
      "It is a reliable source of hydration for the newborn and reduces the risk of diarrhea and other infections.",
      "It is not necessary to give them water since it generates satiety and the baby may reject the milk. This can lead to malnutrition. ",
    ],
    shouldEat: ["Breast milk"],
  },
  {
    age: {
      from: 0.5,
      to: 1,
    },
    for: ["men", "woman"],
    tag: "baby",
    info: [
      "After the first six months of life it is necessary for them to start receiving complementary feeding since they are able to eat and digest other foods and breast milk alone can no longer provide all the nutrients they need.",
      "At this age, parents are advised to start giving one or two teaspoons of porridge or thick cereal and vegetable soup and gradually increase the amount. In addition to adding a greater variety of foods such as pureed fruits and fat-free meats.",
      "No debes olvidar que el pediatra es quien debe decirte qué tipo de alimentos y qué cantidad hay que incluir.",
    ],
    shouldEat: [
      "thick cereal and vegetable porridge or soup",
      "fruit puree",
      "fat-free meats.",
    ],
    shouldNotEat: ["strawberries", "egg", "chocolate", "nuts ", "fish"],
  },
  {
    age: {
      from: 3,
      to: 10,
    },
    for: ["men", "woman"],
    tag: "child",
    info: ["At this age, children should eat a little bit of everything."],
    shouldEat: [
      "fruits",
      "vegetables",
      "cereals",
      "meats",
      "fish",
      "dairy products",
    ],
  },
  {
    age: {
      from: 11,
      to: 18,
    },
    for: ["men", "woman"],
    tag: "young",
    info: [
      "They are in early adolescence and need to maintain a healthy and balanced diet.",
      "It is also necessary for girls to have a good diet so that in their adulthood they will have good reproductive health and procreate healthy children if they wish to do so.",
    ],
    shouldEat: [
      "fruits",
      "vegetables",
      "cereals ",
      "tubers",
      "legumes ",
      "foods of animal origin",
    ],
  },
  {
    age: {
      from: 19,
      to: 40,
    },
    for: ["men"],
    tag: "adult",
    info: [
      "Men have a slightly higher energy requirement than women, especially those who perform activities that require great physical effort.",
      "It is recommended that they consume foods rich in protein and calcium.",
    ],
    shouldEat: [
      "milk and milk products",
      "meats",
      "fish",
      "eggs",
      "cereals",
      "legumes",
      "vegetables",
    ],
    shouldReduceEat: ["red meat"],
  },
  {
    age: {
      from: 19,
      to: 40,
    },
    for: ["woman"],
    tag: "adult",
    info: [
      "Women of childbearing age who are not pregnant or breastfeeding have lower energy requirements than men, but need to consume twice as much iron, since iron is lost during menstruation.",
      "Slightly less cereals and fats and more iron-rich foods are recommended.",
    ],
    shouldEat: [
      "meat",
      "offal",
      "poultry",
      "fish",
      "green leafy vegetables",
      "spinach",
      "watercress",
      "chard",
    ],
  },
  {
    age: {
      from: 19,
      to: 40,
    },
    for: ["pregnant"],
    tag: "adult",
    info: [
      "Pregnant women need extra protein, zinc, vitamin A, vitamin C and iron.",
      "Approximately 280 kilocalories more per day are recommended for pregnant women and 450 kilocalories more per day for lactating women.",
    ],
    shouldEat: ["milk", "fruit", "bread", "meat", "chicken", "fish"],
  },
  {
    age: {
      from: 41,
      to: 65,
    },
    for: ["men", "woman"],
    tag: "adult",
    info: [
      "Adults who eat healthily can stay healthy longer.",
      "Their energy needs are less than that of young adults. However, their protein and micronutrient needs may remain the same or even increase.",
    ],
    shouldEat: [
      "milk",
      "cottage cheese",
      "fresh cheeses",
      "meats",
      "fish",
      "ham",
      "eggs",
      "chicken",
      "whole wheat bread",
      "rice",
      "legumes",
      "fruits",
      "vegetables in general",
    ],
  },
  {
    age: {
      from: 66,
      to: 200,
    },
    for: ["men", "woman"],
    tag: "old",
    info: ["lorem ipsum dolor sit amet"],
    shouldEat: ["lorem", "ipsum", "dolor"],
  },
];

export default alimentation;
