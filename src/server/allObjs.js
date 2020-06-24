// // CREATING THE BOARD
// // property: constructor(name,price,poh,rents,color,pos
// // railroad:  constructor(name,position)
// var board = [];
// var colors = [];
// colors.push(new Color("Purple"));
// colors.push(new Color("Light Blue"));
// colors.push(new Color("Pink"));
// colors.push(new Color("Orange"));
// colors.push(new Color("Red"));
// colors.push(new Color("Yellow"));
// colors.push(new Color("Green"));
// colors.push(new Color("Blue"));
//
// board.push(new Location("Go!",0)); //0
// board.push(new Property("Spive Lair",60,50,[2,10,30,90,160,250], colors[0],1)); //1
// board.push(new CommunityChest(2));//2
// board.push(new Property("Peer Tutoring Room",60,50,[4,20,60,180,320,450],colors[0],3));
// board.push(new Tax("Textbook Tax",100,4));//4
// board.push(new RailRoad("Bateman's Pond",5)); //5
// board.push(new Property("Smokestack",100,50,[6,30,90,270,400,550],colors[1],6)); //6
// board.push(new Chance(7)); //7
// board.push(new Property("Rockstar Rabb's Recording Room",100,50,[6,30,90,270,400,550],colors[1],8));
// board.push(new Property("Recital Hall",120,50,[8,40,100,300,450,600],colors[1],9)); //9
// board.push(new Location("Writing Workshop",10));
// board.push(new Property("Pillai's Programming Palace",140,100,[10,50,150,450,625,750],colors[2],11));
// board.push(new Utility("D.J. Beare's Dominion",12,4));
// board.push(new Property("The Rotunda",140,100,[10,50,150,450,625,750],colors[2],13));
// board.push(new Property("The Observatory",160,100,[12,60,180,500,700,900],colors[2],14));
// board.push(new RailRoad("Estabrook Woods",15)); //15
// board.push(new Property("The Cage",180,100,[14,70,200,550,750,950],colors[3],16));
// board.push(new CommunityChest(17));
// board.push(new Property("The Dance Studio",180,100,[14,70,200,550,750,950],colors[3],18));
// board.push(new Property("Fitness Center",200,100,[16,80,220,600,800,1000],colors[3],19));
// board.push(new Location("Acorn Lot",20));
// board.push(new Property("Tech Center",220,150,[18,90,250,700,875,1050],colors[4],21));
// board.push(new Chance(22));
// board.push(new Property("Terry Room",220,150,[18,90,250,700,875,1050],colors[4],23));
// board.push(new Property("Third Floor of Eliot",240,150,[20,100,300,750,925,1100],colors[4],24));
// board.push(new RailRoad("Turf Fields",25)); //25
// board.push(new Property("Health Center",260,150,[22,110,330,800,975,1150],colors[5],26));
// board.push(new Property("Stufac",240,150,[22,110,330,800,975,1150],colors[5],27));
// board.push(new Utility("Deans' Office",28,4));
// board.push(new Property("Dining Hall",240,150,[24,120,360,850,1025,1200],colors[5],29));
// board.push(new Location("Go To Writing Workshop",30));
// board.push(new Property("Kaye Theater",280,200,[26,130,390,900,1100,1275],colors[6],31));
// board.push(new Property("Ishibashi Gallery",280,200,[26,130,390,900,1100,1275],colors[6],32));
// board.push(new Chance(33));
// board.push(new Property("BAP Conference Room",300,200,[28,150,450,1000,1200,1400],colors[6],34));
// board.push(new RailRoad("Soccer Fields",35)); //35
// board.push(new CommunityChest(36));
// board.push(new Property("Chapel Bells",350,200,[35,175,500,1100,1300,1500],colors[7],37));
// board.push(new Property("Chapel Podium",400,200,[40,200,600,1400,1700,2000],colors[7],39));
//
// // TESTING
// var purple = new Color("Purple");
// var property = new Property("Spive Lair",60,50, [2,50,120,439,1029],purple,1);
// console.log(property.getName());
// purple.addProperty(property);
//
// var player = new Player("Shreya");
// var chance1 = new Chance(6);
// console.log(chance1.executeFortune(player));
// console.log(player.getWealth());
// player.updateWealth(-30);
// console.log(player.getWealth());
// player.updateWealth(50);
// console.log(player.getWealth());
