var randomNumber = Math.floor(Math.random() * 20);

var topics = [
    'Where is your life headed?',
    'How do you think you will die?',
    'What are the highest and lowest points of your life?',
    'What is holding you back from being the person you want to be?',
    'How have your strengths help you to succeed? How have your faults hindered you?',
    'What are your biggest goals for your life? What progress have you made in attaining them?',
    'Who are you really? Who is behind the mask that you show to the rest of the world?',
    'How would you react if there was irrefutable proof that God doesn’t exist? How about if there was irrefutable proof that God does exist?',
    'Are humans better at creation or destruction?',
    'What are the best and worst parts of human nature?',
    'What aspects of humans have made us a successful species?',
    'What makes people believe absurd conspiracy theories?',
    'What is something terrifying that we have all come to accept as a fact of life?',
    'Are some lives more valuable than others?',
    'What does the ideal life look like?',
    'What does it mean to die well?',
    'Who do you know who is living life to the fullest?',
    'If you died today, what regrets would you have about your life?',
    'If you were given an envelope with the time and date of your death inside, would you open it?',
    'How would you like to die? Comfortably in bed surrounded by family, doing something you love, or some other way?',
    'Is taking a life ever justified? If so, where is the line? When is a person’s life considered forfeit?'
]

function newTopic() {
    var randomNumber = Math.floor(Math.random() * topics.length);
    document.getElementById('topicDisplay').innerHTML = topics [randomNumber];
}

