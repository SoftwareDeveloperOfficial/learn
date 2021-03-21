// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: 'Fill in the blanks:<br><br>You will be happy to hear that the company ___________________move to the new location until next month.',
    answer: "Doesn’t have to ",
    options: [
      "Doesn’t have to ",
      "Didn’t need to",
      "Would have to",
      "Should"
    ]
  }, {
    numb: 2,
    question: 'Fill in the blanks:<br><br>______________everyone else is gone, I think we can lock up and go home.',
    answer: "Since",
    options: [
      "Since",
      "While",
      "Therefore",
      "So"
    ]
  },
  {
    numb: 3,
    question: 'Fill in the blanks:<br><br>The last time I ______________her was two months ago.',
    answer: "Saw",
    options: [
      "See",
      "Saw",
      "Seeing",
      "Have seen"
    ]
  },
  {
    numb: 4,
    question: 'Fill in the blanks:<br><br>I lent peter some money, so he___________worry about paying the rent.',
    answer: "Doesn’t have to",
    options: [
      "Should",
      "Doesn’t have to",
      "Must",
      "Would have to"
    ]
  },
  {
    numb: 5,
    question: 'Fill in the blanks:<br><br>______________star wars four times because it’s such a fun movie to watch!',
    answer: "I’ve seen",
    options: [
      "I’ve been seeing",
      "I’d seen",
      "I’ve seen",
      "I’m seeing"
    ]
  },
  {
    numb: 6,
    question: 'Find the mistake:<br><br>What do you thing about the entrees on menu in this restaurant?',
    answer: "The",
    options: [
      "The",
      "Do ",
      "Menu",
      "About"
    ]
  },
  {
    numb: 7,
    question: 'Find the mistake:<br><br>Could you tell me the new intern’s name again? I must try to remember it. I would not do forget it normally. Can you remember it?',
    answer: "Would not do forget it",
    options: [
      "I must try to remember",
      "Would not do forget it",
      "Can you remember it",
      "Could you tell me"
    ]
  },
  {
    numb: 8,
    question: 'Fill in the blanks:<br><br>We need to take some lessons, because my boyfriend doesn’t know how to ski and ___________i.',
    answer: "Neither do ",
    options: [
      "Neither do ",
      "Either do",
      "Not either do",
      "So do"
    ]
  },
  {
    numb: 9,
    question: 'Fill in the blanks:<br><br>I have lived here___________1998.',
    answer: "Since",
    options: [
      "During",
      "For",
      "Since",
      "From"
    ]
  },
  {
    numb: 10,
    question: 'Find the mistake:<br><br>I hope taking a course in information systems next year to improve my skills.',
    answer: "Taking",
    options: [
      "In",
      "Next year",
      "Taking",
      "Systems"
    ]
  },
  {
    numb: 11,
    question: 'Find the mistake:<br><br>Going to Hawaii on vacation sounds as a wonderful idea.',
    answer: "As",
    options: [
      "Sounds ",
      "Going",
      "As",
      "On"
    ]
  },
  {
    numb: 12,
    question: 'Fill in the blanks:<br><br>There are many dark clouds in the sky, so it _______________rain tomorrow.',
    answer: "Might",
    options: [
      "May be",
      "Can",
      "Might",
      "Does"
    ]
  },
  {
    numb: 13,
    question: 'Fill in the blanks:<br><br>Sheila looks awful.she __________to see a doctor.',
    answer: "Ought ",
    options: [
      "Ought ",
      "Must",
      "Should ",
      "Had better"
    ]
  },
  {
    numb: 14,
    question: 'Fill in the blanks:<br><br>Did you know that peter and susan_________since last year?',
    answer: "Have been dating",
    options: [
      "Were dating",
      "Have been dating",
      "Dated",
      "Are dating"
    ]
  },
  {
    numb: 15,
    question: 'Fill in the blanks:<br><br>I have finally finished analyzing the data you requested______________here display the results.',
    answer: "These histograms ",
    options: [
      "This histogram",
      "These histograms ",
      "That histogram",
      "Those histograms "
    ]
  },
  {
    numb: 16,
    question: 'Find the mistake:<br><br>Joe works a lot of overtime and hardly never has time to relax after work.',
    answer: "Hardly never",
    options: [
      "Works ",
      "Hardly never",
      "Time",
      "To relax"
    ]
  },
  {
    numb: 17,
    question: 'Find the mistake:<br><br>I studied really hard, so I’m very happy about pass the mathematics exam.',
    answer: "Pass",
    options: [
      "Pass",
      "About",
      "So",
      "Studied"
    ]
  },
  {
    numb: 18,
    question: 'Fill in the blanks:<br><br>We decided to take a walk on the beach at sunset____________the bad weather.',
    answer: "Despite ",
    options: [
      "Although",
      "Despite ",
      "However",
      "Because"
    ]
  },
  {
    numb: 19,
    question: 'Fill in the blanks:<br><br>Until last night, the basketball team___________a game.',
    answer: "Had never lost ",
    options: [
      "Had been losing",
      "Never loses",
      "Did never lose ",
      "Had never lost "
    ]
  },
  {
    numb: 20,
    question: 'Find the mistake:<br><br>I quit to smoke two years ago. I feel much better.',
    answer: "To smoke",
    options: [
      "Much better",
      "To smoke",
      "Years ago",
      "Quit"
    ]
  },
  {
    numb: 21,
    question: 'Find the mistake:<br><br>She wishes that she has more time to study computer programming.',
    answer: "Has",
    options: [
      "That",
      "To study",
      "Wishes",
      "Has"
    ]
  },
  {
    numb: 22,
    question: 'Fill in the blanks:<br><br>He _________________in that company when he has the chance.',
    answer: "Should have invested.",
    options: [
      "Would have been invested",
      "Should invest",
      "Could be investing ",
      "Should have invested."
    ]
  },
  {
    numb: 23,
    question: 'Fill in the blanks:<br><br>Does anyone have an issue with this policy?<br>B:I ________________about it.',
    answer: "Have ethical questions",
    options: [
      "Propose to publish an article",
      "Enthuse",
      "Have ethical questions",
      "Have to agree"
    ]
  },
  {
    numb: 24,
    question: 'Fill in the blanks:<br><br>A:did erin register her real estate purchase?<br> B:sure, she just stopped by the country _________office.',
    answer: "Registrar’s",
    options: [
      "Registrar’s",
      "Registering",
      "Register",
      "To register"
    ]
  },
  {
    numb: 25,
    question: 'Fill in the blanks:<br><br>Were you aware that alice was terminated because of her pervious employment?<br>B: yes, I was very shocked by the news.___________that kind of injustice.',
    answer: "I am opposed to",
    options: [
      "I am opposed to",
      "I am strongly agreeing with",
      "I can occasionally dispute in",
      "I feel a contrast to"
    ]
  },
  ];
  