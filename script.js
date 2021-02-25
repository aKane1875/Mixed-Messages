const intro = ['lovely', 'pretty', 'stupid', 'ugly', 'darling', 'dumbass']
const action = ['wake up', 'relax', 'get a grip of yourself', 'take it easy']
const end = ['Be kind to yourself', 'You could always go jump off a bridge?', 'You deserve to be happy', 'You deserve a kick in the ass']

const msg1 = intro[Math.floor(Math.random() * intro.length)];
const msg2 = action[Math.floor(Math.random() * action.length)];
const msg3 = end[Math.floor(Math.random() * end.length)];

const randomMessage = `Hello ${msg1}, you really need to ${msg2}. Remember this today : ${msg3}`;

console.log(randomMessage);
