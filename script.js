var JokeText = document.getElementById("joke");
var AnswerText = document.getElementById("answer");
var Jokes = ["What do you call an elephant that doesn’t matter?","What kind of tree can fit in one hand?","Did you hear about the mathematician who’s afraid of negative numbers?","How do they keep the basketball arena cool?","Did you hear about the rancher who had 97 cows in his field?","What do you get when you cross a rabbit with shellfish?","Why do bees have sticky hair?"];
var Answers = ["An irrelephant!","A palm tree!","He’ll stop at nothing to avoid them!","They fill it with fans!","When he rounded them up, he had 100!","An oyster bunny!","They use honeycombs."];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
function NewJoke(){
    var r = getRandomInt(0,Jokes.length);
    var answer = Answers[r];
    var joke = Jokes[r];
    console.log(answer);
    JokeText.innerHTML = joke;
    AnswerText.innerHTML = answer;
}