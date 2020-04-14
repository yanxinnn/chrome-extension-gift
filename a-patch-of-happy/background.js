// reference: https://medium.com/@ryanfarney/creating-a-chrome-extension-that-will-open-in-a-new-tab-bc06b7eb54aa
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({'url':"chrome://newtab"})
})

let early1 = "You're up early!";
let early2 = "I'll be awake soon I promise";
let early3 = "Five more minutes...zzz";
let early4 = "zzzgobacktobedzz";
let early5 = "It was Bella wasn't it";
let early6 = "Call me if you need me!";
let early7 = "What's up buttercup!";
let early = [early1, early2, early3, early4, early5, early6, early7];

let morning1 = "Good morning, Nicknackpattywack!";
let morning2 = "Rise and grind!";
let morning3 = "Hii! Did you sleep well?";
let morning4 = "Don't forget to eat breakfast!";
let morning5 = "Breakfast is the most important meal of the day";
let morning6 = "Captain Bert, on duty!";
let morning7 = "Hi favorite ADC player!";
let morning8 = "Hewwoooo!";
let morning9 = "Bert!";
let morning10 = "You mean so much to me!";
let morning11 = "I believe in you, redstone nerd!";
let morning12 = "Straighten your posture!";
let morning13 = "Drink more water!";
let morning14 = "I think you're just so incredible";
let morning15 = "All dolled up and yeti to go!";
let morning16 = "Let's be productive today!";
let morning = [morning1, morning2, morning3, morning4, morning5, morning6, morning7, morning8, morning9, morning10, morning11, morning12, morning13, morning14, morning15, morning16];

let noon1 = "Good afternoon Nick!";
let noon2 = "Don't forget to stay hydrated!";
let noon3 = "You have a nice face";
let noon4 = "Yup, that tasted purple!";
let noon5 = "Hut, two, three, four";
let noon6 = "Lunch time!";
let noon7 = "hungry. want food.";
let noon8 = "I hope your day is going well!";
let noon9 = "Be productive!";
let noon10 = "Bzzt!";
let noon11 = "Hi best friend!";
let noon12 = "I love you so much!";
let noon13 = "You make me happier than Lily";
let noon14 = "Your jokes are so funny bro";
let noon = [noon1, noon2, noon3, noon4, noon5, noon6, noon7, noon8, noon9, noon10, noon11, noon12, noon13, noon14];

let night1 = "How'd your day go?";
let night2 = "Procrastination is bad";
let night3 = "ARAM ARAM ARAM!";
let night4 = "Ori support is broken I promise";
let night5 = "Your Yasuo is so clean bro";
let night6 = "You make me happier than Lily";
let night7 = "Do the filo thing!";
let night8 = "Heyyy you come here often?";
let night = [night1, night2, night3, night4, night5, night6, night7, night8];

let dinner1 = "Did you eat yet?";
let dinner2 = "Dindin time!";
let dinner3 = "Feed meeee";
let dinner4 = "I love you more I love eggs";
let dinner5 = "Really craving some fiesta lime chicken right now";
let dinner = [dinner1, dinner2, dinner3, dinner4, dinner5];

let sleep1 = "You should sleep soon!";
let sleep2 = "Can't wait to see you again tomorrow!";
let sleep3 = "Nighty night!";
let sleep4 = "Rest well!";
let sleep5 = "Sweet dreams!";
let sleep6 = "I love you so much!";
sleep = [sleep1, sleep2, sleep3, sleep4, sleep5, sleep6];

let late1 = "You should be sleeping!";
let late2 = "What's keeping you up?";
let late3 = "What's up, person who's still up?";
let late4 = "It's really late but I'm still here for you!";
let late5 = "Aww you missed me didn't you";
let late6 = "I promise I'll be here tomorrow, get some rest!";
let late7 = "Give me a call if you need me!";
let late8 = "I love you so much!";
let late9 = "You make me happier than Lily";
let late10 = "Quit playin games bro";
let late11 = "Shleepy";
late = [late1, late2, late3, late4, late5, late6, late7, late8, late9, late10, late11];

function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function setup() {
  createCanvas(screen.width, screen.height);

  let time = hour();
  let greeting = "";

  if (time >= 4 && time < 7) { // 4am - 7am
    greeting = early[getRandom(early.length)]
  }
  else if (time >= 7 && time < 11) { // 7am - 11am
    greeting = morning[getRandom(morning.length)]
  }
  else if (time >= 11 && time < 14) { // 11am - 1pm
    greeting = noon[getRandom(noon.length)]
  }
  else if (time >= 14 && time < 18) { // 1pm - 6pm
    greeting = night[getRandom(night.length)]
  }
  else if (time >= 18 && time < 20) { // 6pm - 8pm
    greeting = dinner[getRandom(dinner.length)]
  }
  else if (time >= 20 && time < 22) { // 8pm - 10pm
    greeting = night[getRandom(night.legnth)]
  }
  else if (time >= 22 && time < 24) { // 10pm - 4pm
    greeting = sleep[getRandom(sleep.legnth)]
  }

  let background1 = "images/otter1.jpg";
  let background2 = "images/otter2.jpg";
  let background = [background1, background2];

  document.getElementById("greeting").innerHTML = greeting;
  document.body.style.backgroundImage = "url('" + background[getRandom(background.length)] + "')";

}

function draw() {

  let minutes = minute();

  if (minute() == 0) {
    minutes = "00";
  }
  else if (minute() == 1) {
    minutes = "01";
  }
  else if (minute() == 2) {
    minutes = "02";
  }
  else if (minute() == 3) {
    minutes = "03";
  }
  else if (minute() == 4) {
    minutes = "04";
  }
  else if (minute() == 5) {
    minutes = "05";
  }
  else if (minute() == 6) {
    minutes = "06";
  }
  else if (minute() == 7) {
    minutes = "07";
  }
  else if (minute() == 8) {
    minutes = "08";
  }
  else if (minute() == 9) {
    minutes = "09";
  }

  document.getElementById("time").innerHTML = hour() + ":" + minutes;


}
