// its help to generate random name

var nameList = [
  "Vikram Timekeeper",
  "Arjun Pastwalker",
  "Rohan Futureseeker",
  "Devendra Skyflyer",
  "Rishi Flyingwings",
  "Soham Soaringmind",
  "Parth Powerbearer",
  "Rahul Fallingstar",
  "Siddharth Fallsong",
  "Akash Jumplight",
  "Cliffraj Mountainclimb",
  "Vimal Redrend",
  "Neel Blueheart",
  "Harish Greenleaf",
  "Amar Yellowflame",
  "Mohan Goldsoul",
  "Shiva Demonhunter",
  "Shakti Demonheart",
  "Aditya Pandabear",
  "Suraj Catprowler",
  "Anand Kittensoul",
  "Vivek Kittenpaw",
  "Pranav Zerohero",
  "Prem Memoryminder",
  "Veer Trooperspirit",
  "Rohit XXwarrior",
  "Arnav Banditblade",
  "Sandeep Fearlessmind",
  "Tarun Lightchaser",
  "Atul Glowkeeper",
  "Rajat Treadrider",
  "Alok Deeplight",
  "Varun Deeperseeker",
  "Ravi Deepestdive",
  "Rajan Mindmine",
  "Ashish Yourpower",
  "Gaurav Worstnightmare",
  "Nitin Enemyslayer",
  "Raju Hostileheart",
  "Vineet Forcebreaker",
  "Mohit Videogamer",
  "Ajay Gameplayer",
  "Amar Donkeyrider",
  "Anil Mulewalker",
  "Arun Coltkeeper",
  "Alok Cultseeker",
  "Ankit Cultistmind",
  "Deepak Gunmaster",
  "Vishal Assaultbringer",
  "Manoj Reconrunner",
  "Sanjay Trapperhunter",
  "Vikas Codecracker",
  "Rakesh Scriptscribe",
  "Prakash Writertale",
  "Satish Nearwanderer",
  "Pankaj Closewatcher",
  "Suresh Openseeker",
  "Vinod Cubecrafter",
  "Dinesh Circlefinder",
  "Rajesh Geoexplorer",
  "Rahul Genomemind",
  "Arvind Germseeker",
  "Rajesh Spazdancer",
  "Raman Shotshooter",
  "Sunil Echohearer",
  "Anuj Betaexplorer",
  "Pradeep Alphaadventurer",
  "Vikas Gammawanderer",
  "Ashok Omegatraveler",
  "Naveen Sealkeeper",
  "Sandeep Squidhunter",
  "Sameer Moneycollector",
  "Mukesh Cashbringer",
  "Vivek Lordseeker",
  "Tarun Kingfinder",
  "Pradeep Dukestrider",
  "Sandeep Restseeker",
  "Abhishek Firebringer",
  "Rohan Flamebearer",
  "Ajit Morrowseeker",
  "Vijay Breakerbreaker",
  "Vinay Breakseeker",
  "Gopal Numbmind",
  "Santosh Icebringer",
  "Anil Coldkeeper",
  "Arjun Rottensoul",
  "Vicky Sickminder",
  "Ravi Sicklysoul",
  "Ram Janitorcleaner",
  "Rakesh Camelrider",
  "Ashish Roosterkeeper",
  "Yogesh Sandsoul",
  "Vishnu Desertwanderer",
  "Rohit Dessertseeker",
  "Amit Hurdlerunner",
  "Rahul Racechaser",
  "Surya Eraserseeker",
  "Kunal Eraserfinder",
  "Abhay Erasebreaker",
  "Mohan Bigseeker",
  "Ashok Smallstrider",
  "Vijay Shortseeker",
  "Amit Tallwalker",
  "Anuj Sithseeker",
  "Arun Bountyhunter",
  "Vinod Crackedseeker",
  "Vivek Brokenwanderer",
  "Raj Happywanderer",
  "Rajesh Joybringer",
  "Deepak Joyfulsoul",
  "Arjun Crimsonseeker",
  "Sanjay Destinyminder",
  "Rahul Deceitseeker",
  "Amit Liesbreaker",
  "Anand Lieminder",
  "Vikas Honestseeker",
  "Vinay Destinedbringer",
  "Ankit Bloxxerbreaker",
  "Rajesh Hawkeyespy",
  "Suresh Eaglerunner",
  "Ajay Hawkerwanderer",
  "Raju Walkertrekker",
  "Praveen Zombieslayer",
  "Ramesh Sargeslayer",
  "Anil Captbringer",
  "Raju Captainbringer",
  "Santosh Punchwalker",
  "Amit Onewalker",
  "Rahul Tworunner",
  "Arjun Unoseeker",
  "Ashish Sliceseeker",
  "Prakash Slashminder",
  "Vikas Meltsoul",
  "Abhishek Meltedbringer",
  "Rohit Meltingheart",
  "Vinay Fellseeker",
  "Gaurav Wolfrider",
  "Pradeep Houndbringer",
  "Rohan Legacykeeper",
  "Raju Sharpseeker",
  "Ramesh Deadbringer",
  "Anuj Mewseeker",
  "Deepak Chucklebringer",
  "Amit Bubblerider",
  "Abhay Sandwichseeker",
  "Vikas Smasherbringer",
  "Rohit Extremeseeker",
  "Ravi Multisoul",
  "Ajay Universebringer",
  "Gopal Ultimatefinder",
  "Tarun Deathseeker",
  "Rajesh Readysoul",
  "Raju Monkeyrunner",
  "Suresh Elevatorseeker",
  "Abhishek Wrenchbringer",
  "Ashok Greasekeeper",
  "Vikas Headhunter",
  "Ramesh Theme",
];
export const generateRandomName = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const generateRandomMessage = (length) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomText = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomText += charset[randomIndex];
  }

  return randomText;
};
