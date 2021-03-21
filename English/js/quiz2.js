// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: 'In cities throughout the country, there is a new direction in local campaign coverage. Frequently in local elections, journalists are not giving voters enough information to understand the issues and evaluate the candidates. The local news media devotes too much time to scandal and not enough time to policy.<br><br>Question : This paragraph best supports the statement that the local news media ?',
  answer: "is not doing an adequate job when it comes to covering local campaigns.",
  options: [
    "is not doing an adequate job when it comes to covering local campaigns.",
    "should learn how to cover politics by watching the national news media.",
    "has no interest in covering stories about local political events.",
    "does not understand either campaign issues or politics."
  ]
},
{
  numb: 2,
  question: 'Many animals hibernate during parts of the year, entering a state that is similar to a very deep sleep. But hibernation is more than simply a deep sleep. The animal’s body temperature drops well below its normal range, the animal does not wake up for a long period of time, and its metabolism slows to the point that the animal does not need to eat or relieve itself during that period. In order to prepare for hibernation, the animal must build up its body weight and increase its body fat. This is important, since the animal will be living off its own body fat during the months of hibernation. Of course, once the period of hibernation is over, the animal “wakes up” to find itself slim and trim once again!<br><br>Question :  How does an animal prepare for hibernation?',
  answer: "It eats more food than usual",
  options: [
    "It eats more food than usual",
    "It gradually increases its sleeping habits",
    "It exercises for two months.",
    "It grows extra fur."
  ]
},
{
  numb: 3,
  question: 'Many animals hibernate during parts of the year, entering a state that is similar to a very deep sleep. But hibernation is more than simply a deep sleep. The animal’s body temperature drops well below its normal range, the animal does not wake up for a long period of time, and its metabolism slows to the point that the animal does not need to eat or relieve itself during that period. In order to prepare for hibernation, the animal must build up its body weight and increase its body fat. This is important, since the animal will be living off its own body fat during the months of hibernation. Of course, once the period of hibernation is over, the animal “wakes up” to find itself slim and trim once again!<br><br>Question :  This passage best supports the statement that ?',
  answer: "hibernation is very different from normal sleep.",
  options: [
    "hibernation is very different from normal sleep.",
    "food is scarce in the winter.",
    "all animals hibernate to some degree.",
    "bears hibernate every year."
  ]
},
{
  numb: 4,
  question: 'The use of desktop computer equipment and software to create highquality documents such as newsletters, business cards, letterhead,and brochures is called Desktop Publishing, or DTP. The most important part of any DTP project is planning. Before you begin,you should know your intended audience, the message you want to communicate, and what form your message will take. Question : The paragraph best supports the statement that ? ',
  answer: "the first stage of any proposed DTP project should be organization and design.",
  options: [
    "Desktop Publishing is one way to become acquainted with a new business audience.",
    "the first stage of any proposed DTP project should be organization and design.",
    "computer software is continually being refined to produce highquality printing",
    "the planning stage of any DTP project should include talking with the intended audience."
  ]
},
{
  numb: 5,
  question: 'Patrick Henry is considered one of the great patriots of America’s early history. He was a leader in every protest against British tyranny and in every movement for colonial rights, openly speaking against the unfair taxation and overly burdensome regulations imposed upon the American colonists by the British Parliament. In March 1775, Patrick Henry urged his fellow Virginians to arm themselves in self-defense. He spoke boldly in Richmond,Virginia, during the meeting of the state legislature. He closed that famous speech with the immortal words, “I know not what course others may take; but as for me, give me liberty or give me death.” <br><br> question : This passage best supports the statement that ?',
  answer: "Patrick Henry was willing to lay down his life for his country.",
  options: [
    "Patrick Henry later became a governor of West Virginia",
    "People in Colonial times faced harsh living conditions",
    "the Virginia legislature was not listening to Henry’s speech.",
    "Patrick Henry was willing to lay down his life for his country."
  ]
},
{
  numb: 6,
  question: 'Patrick Henry is considered one of the great patriots of America’s early history. He was a leader in every protest against British tyranny and in every movement for colonial rights, openly speaking against the unfair taxation and overly burdensome regulations imposed upon the American colonists by the British Parliament. In March 1775, Patrick Henry urged his fellow Virginians to arm themselves in self-defense. He spoke boldly in Richmond,Virginia, during the meeting of the state legislature. He closed that famous speech with the immortal words, “I know not what course others may take; but as for me, give me liberty or give me death.”<br><br>question : Which of the following would be the most appropriate title for this passage?',
  answer: "Patrick Henry, American Patriot",
  options: [
    "Early American Patriots",
    "Patrick Henry, American Patriot",
    "History of the Virginia Legislature",
    "The Speeches of Patrick Henry"
  ]
},

{
  numb: 7,
  question: 'The entire low-carbohydrate versus low-fat diet argument is so prevalent that one would think that these are the only two options available for losing weight and staying healthy. Some experts even feel that the low-carb/low-fat debate distracts us from an even more important issue—our culture’s reliance on processed and manufactured foods.<br><br>Question : The paragraph best supports the statement that ?',
  answer: "important health concerns get overlooked when we focus exclusively on the low-fat versus low-carb question.",
  options: [
    "important health concerns get overlooked when we focus exclusively on the low-fat versus low-carb question.",
    "experts state that not all fats are equal, so we need not reduce our intake of all fats; just those that contain partially hydrogenated oils",
    "processed foods can lead to many adverse health problems including heart disease, cancer, diabetes, and obesity",
    "low-carbohydrate diets lead to significant and sustained weight loss."
  ]
},
{
  numb: 8,
  question: 'Ratatouille is a dish that has grown in popularity over the last few years. It features eggplant, zucchini, tomatoes, peppers, and garlic chopped, mixed, sautéed, and finally, cooked slowly over low heat. As the vegetables cook slowly, they make their own broth, which may be extended with a little tomato paste. The name ratatouille comes from the French word touiller, meaning to stir or mix together.<br><br> question : Which of the following is the correct order of steps for making ratatouille?',
  answer: "mix the vegetables together, sauté them, and add tomato paste",
  options: [
    "mix the vegetables together, sauté them, and add tomato paste",
    "chop vegetables, add tomato paste, stir or mix together",
    "add tomato paste to extend the broth and cook slowly over low heat",
    "cook the vegetables slowly, mix them together, add tomato paste"
  ]
},
{
  numb: 9,
  question: 'Ratatouille is a dish that has grown in popularity over the last few years. It features eggplant, zucchini, tomatoes, peppers, and garlic chopped, mixed, sautéed, and finally, cooked slowly over low heat. As the vegetables cook slowly, they make their own broth, which may be extended with a little tomato paste. The name ratatouille comes from the French word touiller, meaning to stir or mix together.<br><br>question : Ratatouille can best be described as a ?',
  answer: "vegetable stew.",
  options: [
    "pasta dish extended with tomato paste.",
    "French pastry.",
    "sauce to put over vegetables.",
    "vegetable stew."
  ]
},
{
  numb: 10,
  question: 'Opera refers to a dramatic art form, originating in Europe, in which the emotional content is conveyed to the audience as much through music, both vocal and instrumental, as it is through the lyrics. By contrast, in musical theater an actor\'s dramatic performance is primary, and the music plays a lesser role. The drama in opera is presented using the primary elements of theater such as scenery, costumes, and acting. However, the words of the opera, or libretto, are sung rather than spoken. The singers are accompanied by a musical ensemble ranging from a small instrumental ensemble to a full symphonic orchestra. <br> <br> Question : It is pointed out in the reading that opera ----.',
  answer: " is a drama sung with the accompaniment of an orchestra",
  options: [
    "is not a high-budget production",
    " is a drama sung with the accompaniment of an orchestra",
    "is the most complex of all the performing arts",
    "has developed under the influence of musical theater"
  ]
},
{
  numb: 11,
  question: 'Opera refers to a dramatic art form, originating in Europe, in which the emotional content is conveyed to the audience as much through music, both vocal and instrumental, as it is through the lyrics. By contrast, in musical theater an actor\'s dramatic performance is primary, and the music plays a lesser role. The drama in opera is presented using the primary elements of theater such as scenery, costumes, and acting. However, the words of the opera, or libretto, are sung rather than spoken. The singers are accompanied by a musical ensemble ranging from a small instrumental ensemble to a full symphonic orchestra. <br> <br>question: We can understand from the reading that ----.',
  answer: "orchestras in operas can vary considerably in size",
  options: [
    "drama in opera is more important than the music",
    "people are captivated more by opera than musical theater",
    "orchestras in operas can vary considerably in size",
    "musical theater relies above all on music"
  ]
},
{
  numb: 12,
  question: 'Erosion of America\'s farmland by wind and water has been a problem since settlers first put the prairies and grasslands under the plow in the nineteenth century. By the 1930s, more than 282 million acres of farmland were damaged by erosion. After 40 years of conservation efforts, soil erosion has accelerated due to new demands placed on the land by heavy crop production. In the years ahead, soil erosion and the pollution problems it causes are likely to replace petroleum scarcity as the nation\'s most critical natural resource problem.<br><br>Question: As we understand from the reading, today, soil erosion in America ----.',
  answer: "is worse than it was in the nineteenth century",
  options: [
    "is worse than it was in the nineteenth century",
    "is the most critical problem that the nation faces",
    "causes humans to place new demands on the land",
    "happens so slowly that it is hardly noticed"
  ]
},
{
  numb: 13,
  question: 'Dolphins are regarded as the friendliest creatures in the sea and stories of them helping drowning sailors have been common since Roman times. The more we learn about dolphins, the more we realize that their society is more complex than people previously imagined. They look after other dolphins when they are ill, care for pregnant mothers and protect the weakest in the community, as we do. Some scientists have suggested that dolphins have a language but it is much more probable that they communicate with each other without needing words. Could any of these mammals be more intelligent than man? Certainly the most common argument in favor of man\'s superiority over them that we can kill them more easily than they can kill us is the least satisfactory. On the contrary, the more we discover about these remarkable creatures, the less we appear superior when we destroy them. <br><br>Question : It is clear from the passage that dolphins ----.</br>',
  answer: "have a reputation for being friendly to humans",
  options: [
    "are the most powerful creatures that live in the oceans",
    "have a reputation for being friendly to humans",
    "don't want to be with us as much as we want to be with them",
    "are proven to be less intelligent than once thought"
  ]
},
{
  numb: 14,
  question: 'Naval architects never claim that a ship is unsinkable, but the sinking of the passenger-and-car ferry Estonia in the Baltic surely should have never have happened. It was well designed and carefully maintained. It carried the proper number of lifeboats. It had been thoroughly inspected the day of its fatal voyage. Yet hours later, the Estonia rolled over and sank in a cold, stormy night. It went down so quickly that most of those on board, caught in their dark, flooding cabins, had no chance to save themselves: Of those who managed to scramble overboard, only 139 survived. The rest died of hypothermia before the rescuers could pluck them from the cold sea. The final death toll amounted to 912 souls. However, there were an unpleasant number of questions about why the Estonia sank and why so many survivors were men in the prime of life, while most of the dead were women, children and the elderly.<br><br>Question : One can understand from the reading that ----.',
  answer: "most victims were trapped inside the boat as they were in their cabins",
  options: [
    "139 people managed to leave the vessel but died in freezing water",
    "the lifesaving equipment did not work well and lifeboats could not be lowered ",
    "design faults and incompetent crew contributed to the sinking of the Estonia Ferry",
    "most victims were trapped inside the boat as they were in their cabins"
  ]
},
{
  numb: 15,
  question: 'Naval architects never claim that a ship is unsinkable, but the sinking of the passenger-and-car ferry Estonia in the Baltic surely should have never have happened. It was well designed and carefully maintained. It carried the proper number of lifeboats. It had been thoroughly inspected the day of its fatal voyage. Yet hours later, the Estonia rolled over and sank in a cold, stormy night. It went down so quickly that most of those on board, caught in their dark, flooding cabins, had no chance to save themselves: Of those who managed to scramble overboard, only 139 survived. The rest died of hypothermia before the rescuers could pluck them from the cold sea. The final death toll amounted to 912 souls. However, there were an unpleasant number of questions about why the Estonia sank and why so many survivors were men in the prime of life, while most of the dead were women, children and the elderly.<br><br>Question : It is clear from the passage that the survivors of the accident ----.',
  answer: "were mostly young men but women, children and the elderly stood little chance",
  options: [
    "are still suffering from severe post-traumatic stress disorder",
    "helped one another to overcome the tragedy that had affected them all",
    " told the investigators nothing about the accident",
    "were mostly young men but women, children and the elderly stood little chance"
  ]
},
];
