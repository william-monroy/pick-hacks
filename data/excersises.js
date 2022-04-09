const exercises = [
  {
    age: {
      from: 5,
      to: 19,
    },
    tag: "child",
    benefits: [
      "control body weight",
      "contributes to bone health",
      "stimulates self-confidence",
      "establece patrones de sueño saludables",
    ],
    sugesstions: [
      "Children should try various sports and develop different skills, such as swimming and kicking a ball.",
      "Unscheduled physical activity, such as playground games, is also helpful.",
      "Some teenagers do not like these types of sports. For them, swimming or running may be options to consider to stay in good shape.",
    ],
    toAvoid: ["stress", "anxiety"],
  },
  {
    age: {
      from: 20,
      to: 30,
    },
    tag: "young",
    benefits: [
      "May slow the reduction of VO2 (the maximum rate at which the body can pump oxygen to the muscles) as age increases.",
      "Increasing lean muscle mass and bone density during this vital stage helps to retain them years later.",
    ],
    sugesstions: [
      "Have fun training and try various disciplines. You can try tag rugby (non-contact rugby with ribbons), rowing or intense outdoor training (with instructor).",
      'If you exercise regularly, consult a sports professional and incorporate "periodization" into your training regimen. This concept involves dividing exercise into progressive cycles that manipulate different aspects of training, such as intensity, quantity and type of exercise, with the goal of optimizing your performance and making it possible to practice a planned activity, such as a triathlon.',
    ],
    toAvoid: ["stress", "anxiety", "aging"],
  },
  {
    age: {
      from: 31,
      to: 40,
    },
    tag: "adult",
    benefits: [
      "Maintains strength and cardiovascular health to slow physical decline",
    ],
    sugesstions: [
      "If you have a sedentary job, make sure you maintain proper postural hygiene and do not sit for long periods of time.",
      "Train smart. Try high-intensity interval training, with sets of high-intensity activity (up to 80% of your maximum heart rate) combined with periods of reduced-intensity exercise. Sports such as sprinting or cycling are perfect for people who are short on time, as they can be done in 20 minutes.",
      "Women, especially after childbirth, may benefit from pelvic floor exercises (known as Kegel exercises) to prevent incontinence.",
      "Maintain interest by diversifying your exercise routine. Try boot camp, spinning or yoga.",
    ],
    toAvoid: ["stress", "anxiety", "aging"],
  },
  {
    age: {
      from: 41,
      to: 50,
    },
    tag: "old",
    benefits: [
      "Optimizing calorie burning and counteracting fat accumulation",
      "Ten weeks of resistance-focused training could increase lean weight by 1.4 kilograms, increase resting metabolic rate (RMR) by 7% and decrease fat weight by 1.8 kilograms.",
    ],
    sugesstions: [
      "Try kettlebells or kettlebells, or start a weight lifting workout at the gym.",
      ,
      "Start running (if you don't already) and don't be afraid to get into a higher intensity exercise program. It's a no-brainer, but you get more out of running than walking.",
      "Pilates can be extremely helpful in strengthening the core and preventing back pain, which often occurs in this decade.",
    ],
    toAvoid: ["stress", "anxiety", "aging"],
  },
  {
    age: {
      from: 51,
      to: 60,
    },
    tag: "old",
    benefits: ["Prevents diabetes and heart disease"],
    sugesstions: [
      "Practice strength activities twice a week to maintain your muscle mass.",
      "Weight-bearing exercises, such as walking, are highly recommended. Walk at a brisk pace to increase your respiratory rate and break a sweat.",
      "Try something different. Tai chi is great for balance and relaxation.",
    ],
    toAvoid: ["stress", "anxiety", "aging", "diabetes", "heart disease"],
  },
  {
    age: {
      from: 61,
      to: 70,
    },
    tag: "old",
    benefits: [
      "Maintaining a high level of physical activity can help prevent different tumors, such as breast cancer after menopause, colon cancer or uterine cancer, while reducing the risk of developing chronic diseases, such as heart disease and type 2 diabetes.",
    ],
    sugesstions: [
      "Physical activity tends to decrease with age, so try to stay active and try to break the trend.",
      "Try ballroom dancing or any other type of dance; it's a fun and sociable way to exercise.",
      "Train strength and flexibility twice a week. Aqua aerobics, an activity in which water offers great resistance, can be a good option for strength development.",
      "Continue to do cardiovascular exercise, such as walking at a brisk pace.",
    ],
    toAvoid: [
      "stress",
      "anxiety",
      "aging",
      "diabetes",
      "heart disease",
      "tumors",
      "cancer after menopause",
      "colon cancer",
      "uterine cancer",
      "risk of developing chronic diseases",
    ],
  },
  {
    from: 71,
    to: 200,
    tag: "old",
    benefits: [
      "Exercise at age 70 and older helps prevent frailty and falls",
      "It is beneficial for maintaining cognitive skills.",
      "It is also important to try to maintain activity as much as possible when going through an illness.",
    ],
    sugesstions: [
      "Walk and talk. Instead of passively receiving visits from family and friends, go for a walk together. It will motivate you and benefit your health more than exercising alone.",
      "Supplement your exercise routine with cardiovascular, strength and balance activities, always consulting a physical therapist or other sports professional, especially if you have a chronic illness.",
    ],
    toAvoid: ["stress", "anxiety", "aging", "fragility"],
  },
];

export default exercises;
