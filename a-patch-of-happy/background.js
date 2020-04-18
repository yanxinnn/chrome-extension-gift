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
let morning17 = "I'm here for you!";
let morning18 = "Hop, skip, jump!";
let morning19 = "La la laaaa";
let morning20 = "Let's make today a good one!";
let morning21 = "Do some stretches!";
let morning22 = "Everything will work out in the end!";
let morning23 = "Today is a new day!";
let morning24 = "You can do this!";
let morning25 = "I like it when you do the you thing!";
let morning = [morning1, morning2, morning3, morning4, morning5, morning6, morning7, morning8, morning9, morning10, morning11, morning12, morning13, morning14, morning15, morning16, morning17, morning18, morning19, morning20, morning21, morning22, morning23, morning24, morning25];

let noon1 = "Good afternoon Nick!";
let noon2 = "Don't forget to stay hydrated!";
let noon3 = "You have a nice face";
let noon4 = "Yup, that tasted purple!";
let noon5 = "Hut, two, three, four";
let noon6 = "Lunch time!";
let noon7 = "hungry. want food.";
let noon8 = "I hope your day is going well!";
let noon9 = "Be productive!";
let noon10 = "Bzzzt!";
let noon11 = "Hi best friend!";
let noon12 = "I love you so much!";
let noon13 = "You make me happier than Lily";
let noon14 = "Your jokes are so funny bro";
let noon15 = "You're my otter half!";
let noon16 = "You make me happy!";
let noon17 = "Drink more water!";
let noon18 = "Yuh!";
let noon19 = "Here's a virtual hug!";
let noon20 = "Get up and stretch your legs!";
let noon21 = "7+ billion smiles and yours is my favorite!";
let noon22 = "230 - 220 / 2 = 5!";
let noon23 = "Hey! What's new?";
let noon24 = "Happy national bertday!"
let noon25 = "Take a deep breath................. and let it out";
let noon26 = "Haha fuuuuh";
let noon27 = "I'm here! I'm here! What do you need?";
let noon28 = "You are doing great, keep it up!";
let noon29 = "I could never fer-g-ret (forget) you!... Tell me I'm funny!!";
let noon = [noon1, noon2, noon3, noon4, noon5, noon6, noon7, noon8, noon9, noon10, noon11, noon12, noon13, noon14, noon15, noon16, noon17, noon18, noon19, noon20, noon21, noon22, noon23, noon24, noon25, noon26, noon27, noon28, noon29];

let night1 = "How'd your day go?";
let night2 = "Procrastination is bad";
let night3 = "ARAM ARAM ARAM!";
let night4 = "Ori support is broken I promise";
let night5 = "Your Yasuo is so clean bro";
let night6 = "You make me happier than Lily";
let night7 = "Do the filo thing!";
let night8 = "Heyyy you come here often?";
let night9 = "You make me happy!"
let night10 = "Remember to drink water!"
let night11 = "Slouching is bad for your posture!";
let night12 = "You're my best friend!";
let night13 = "Bert!";
let night14 = "Never look a tulip in the eye...";
let night15 = "I believe in the power that is you!";
let night16 = "You're so strong!";
let night17 = "Yay! It's you!";
let night18 = "You are ranked challenger in my eyes!";
let night19 = "You can do it!";
let night20 = "Breath in... all the way... hold it... and let it out";
let night21 = "Gamer Goop, Ice Cream Soup, Gamer Goop, Ice Cream Soup!";
let night22 = "Don't eat too many 'snacks'!";
let night23 = "There's no one else I'd rather pasta time with!";
let night24 = "Roll your neck you stiff giraffe";
let night25 = "Hi! Give me attention!";
let night = [night1, night2, night3, night4, night5, night6, night7, night8, night9, night10, night11, night12, night13, night14, night15, night16, night17, night18, night19, night20, night21, night22, night23, night24, night25];

let dinner1 = "Did you eat yet?";
let dinner2 = "Dindin time!";
let dinner3 = "Feed meeee";
let dinner4 = "I love you more than I love eggs";
let dinner5 = "Really craving some fiesta lime chicken right now";
let dinner6 = "Let's be productive!";
let dinner7 = "Drink water!";
let dinner8 = "You're the best!";
let dinner9 = "IIIIIIII think you're the bestest!";
let dinner10 = "Roll your neck you stiff giraffe";
let dinner11 = "Hiii! Thanks for taking the time to read me!";
let dinner12 = "Hi again! It's me again! Telling you that I adore you again!";
let dinner = [dinner1, dinner2, dinner3, dinner4, dinner5, dinner6, dinner7, dinner8, dinner9, dinner10, dinner11, dinner12];

let sleep1 = "You should sleep soon!";
let sleep2 = "Can't wait to see you again tomorrow!";
let sleep3 = "Nighty night!";
let sleep4 = "Rest well!";
let sleep5 = "Sweet dreams!";
let sleep6 = "I love you so much!";
let sleep7 = "When was the last time you changed your contacts?";
let sleep8 = "Time to brush brush!";
let sleep9 = "Psstt go to sleep!";
let sleep10 = "Sleepy bert!";
sleep = [sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7, sleep8, sleep9, sleep10];

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

let bg1 = "images/otter1.jpg";
let bg2 = "images/otter2.jpg";
let bg3 = "https://i.pinimg.com/originals/c5/86/94/c58694a79bdaaa4ada3c01149c075746.gif";
let bg4 = "https://data.whicdn.com/images/326547752/original.gif";
let bg5 = "https://404store.com/2017/09/26/wallup-206718.jpg";
let bg6 = "https://i.pinimg.com/originals/75/95/93/759593ef391041243680d0748e16f3a6.jpg";
let bg7 = "https://c1.peakpx.com/wallpaper/1014/413/155/animals-ferret-animal-welfare-wallpaper-preview.jpg";
let bg8 = "http://wallfon.com/walls/animals/beaver.jpg";
let bg9 = "https://wallpapercave.com/wp/wp2120293.jpg";
let bg10 = "https://i.redd.it/o5mm4hb069j31.png";
let bg11 = "https://wallpapercave.com/wp/wp4757320.jpg";
let bg12 = "https://besthqwallpapers.com/Uploads/21-5-2019/93250/running-german-shepherd-puppy-summer-pets-cute-animals.jpg";
let bg13 = "https://i.pinimg.com/originals/6b/09/81/6b0981665af132767a885b0820800d73.jpg";
let bg14 = "https://images.wallpaperscraft.com/image/corgi_dog_funny_160644_1920x1080.jpg";
let bg15 = "images/pic1.JPG";
let bg16 = "images/pic2.JPG";
let bg17 = "images/pic3.JPG";
let bg18 = "images/skyrim1.png";
let bg19 = "https://wallpaperaccess.com/full/696021.jpg";
let bg20 = "https://wallpaperaccess.com/full/537103.jpg";
let bg21 = "https://cdn.suwalls.com/wallpapers/games/minecraft-22929-1920x1080.jpg";
let bg22 = "https://wallpaperplay.com/walls/full/0/4/4/234833.jpg";
let bg23 = "https://i.imgur.com/QGjUSA9.png";
let bg24 = "https://cutewallpaper.org/21/kimi-no-na-wa-backgrounds/Your-Name-Anime-Landscape-Wallpapers-Top-Free-Your-Name-.jpg";
let bg25 = "images/anime1.jpg";
let bg26 = "https://cutewallpaper.org/21/weathering-with-you-wallpaper/Makoto-Shinkais-UNIQLO-Collection-is-Touching-Down-Soon-.png";
let bg27 = "https://wallpapersite.com/images/pages/pic_h/18282.jpg";
let bg28 = "images/pic4.JPG";
let bg29 = "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/p-302-pai0664-teddy.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=f711744fdf3109ac6756c62e7966f0a6";
let bg30 = "https://www.thesprucepets.com/thmb/rCCvIaBYBqMhcBCrDNZOeVhDkvU=/3865x2174/smart/filters:no_upscale()/close-up-of-ferret-sleeping-at-home-899489584-5a9dfd736bf069003694667a.jpg";
let bg31 = "https://i.pinimg.com/originals/cd/76/35/cd763514a812dbb1a3a4c5018c502bb2.jpg";
let bg32 = "https://wallpaperaccess.com/full/1154680.jpg";
let bg33 = "https://wallpapercave.com/wp/9INcvum.jpg";
let bg34 = "https://wallpaperaccess.com/full/1775749.jpg";
let bg35 = "https://wallpaperaccess.com/full/1097504.png";
let bg36 = "https://www.wallpaperflare.com/static/944/260/967/comic-art-your-name-kimi-no-na-wa-white-wallpaper.jpg";
let bg37 = "https://wallpapercave.com/wp/wp1892097.png";
let bg38 = "https://i.pinimg.com/originals/a6/07/cc/a607ccbd1f52ddc543268f1f8e1c9053.jpg";
let bg = [];

function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function setup() {
  createCanvas(screen.width, screen.height);

  let time = hour();
  let greeting = "";
  console.log(hour());

  if (time >= 4 && time < 7) { // 4am - 7am
    greeting = early[getRandom(early.length)]
    bg = [bg1, bg2, bg3, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg17, bg18, bg19, bg21, bg30, bg33, bg34];
  }
  else if (time >= 7 && time < 11) { // 7am - 11am
    greeting = morning[getRandom(morning.length)]
    bg = [bg1, bg2, bg3, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg17, bg20, bg21, bg22, bg29, bg31, bg33, bg34];
  }
  else if (time >= 11 && time < 14) { // 11am - 1pm
    greeting = noon[getRandom(noon.length)]
    bg = [bg1, bg2, bg3, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg17, bg20, bg22, bg31, bg33, bg34];
  }
  else if (time >= 14 && time < 17) { // 1pm - 6pm
    greeting = night[getRandom(night.length)]
    bg = [bg1, bg2, bg3, bg4, bg9, bg10, bg11, bg12, bg13, bg14, bg17, bg20, bg22, bg25, bg31, bg32, bg33, bg34];
  }
  else if (time >= 17 && time < 19) { // 5pm - 7pm
    greeting = dinner[getRandom(dinner.length)]
    bg = [bg1, bg2, bg3, bg4, bg10, bg13, bg14, bg15, bg16, bg24, bg25, bg28, bg32, bg35, bg36, bg38];
  }
  else if (time >= 19 && time < 22) { // 7pm - 10pm
    greeting = night[getRandom(night.length)]
    bg = [bg3, bg10, bg15, bg16, bg18, bg19, bg23, bg25, bg26, bg27, bg35, bg36, bg38];
  }
  else if (time >= 22 && time <= 23) { // 10pm - 12pm
    greeting = sleep[getRandom(sleep.length)]
    bg = [bg3, bg18, bg19, bg23, bg26, bg27, bg30, bg38];
  }
  else if (time >= 0 && time < 4) { // 1am - 4am
    greeting = late[getRandom(late.length)]
    bg = [bg3, bg18, bg19, bg23, bg26, bg27, bg30, bg38];
  }
  if ((hour() == 11 || hour() == 23) && (minute() == 11)) {
    greeting = "Quick! It's 11:11! Make a wish!";
    bg = [bg37];
  }

  document.getElementById("greeting").innerHTML = greeting;
  document.body.style.backgroundImage = "url('" + bg[getRandom(bg.length)] + "')";

}

function draw() {

  let hours = hour();

  if (hour() > 12) {
    hours -= 12;
  }

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

  document.getElementById("time").innerHTML = hours + ":" + minutes;

}
