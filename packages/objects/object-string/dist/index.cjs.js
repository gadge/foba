'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var objectInit = require('@vect/object-init');
var enumChars = require('@spare/enum-chars');
var util = require('@foba/util');

const CarPlants = {
  SantAgata: 'Lamborghini',
  Angelholm: 'Koenigsegg',
  Molsheim: 'Bugatti',
  Gaydon: 'Aston Martin',
  Maranello: 'Ferrari',
  Stuttgart: 'Porsche',
  Modena: 'Pagani',
  Neckarsulm: 'Audi',
  Crewe: 'Bentley',
  Woking: 'McLaren',
  Hethel: 'Lotus'
};

const FilmActors = {
  'Reversal of Fortune': 'Jeremy Irons',
  'Dances with Wolves': 'Kevin Costner',
  'Awakenings': 'Robert De Niro',
  'Cyrano de Bergerac': 'Gérard Depardieu',
  'The Field': 'Richard Harris',
  'The Silence of the Lambs': 'Anthony Hopkins',
  'Bugsy': 'Warren Beatty',
  'Cape Fear': 'Robert De Niro',
  'The Prince of Tides': 'Nick Nolte',
  'The Fisher King': 'Robin Williams',
  'Scent of a Woman': 'Al Pacino',
  'Chaplin': 'Robert Downey, Jr.',
  'Unforgiven': 'Clint Eastwood',
  'The Crying Game': 'Stephen Rea',
  'Malcolm X': 'Denzel Washington',
  'Philadelphia': 'Tom Hanks',
  'In the Name of the Father': 'Daniel Day-Lewis',
  'What\'s Love Got to Do with It': 'Laurence Fishburne',
  'The Remains of the Day': 'Anthony Hopkins',
  'Schindler\'s List': 'Liam Neeson',
  'Forrest Gump': 'Tom Hanks',
  'The Shawshank Redemption': 'Morgan Freeman',
  'The Madness of King George': 'Nigel Hawthorne',
  'Nobody\'s Fool': 'Paul Newman',
  'Pulp Fiction': 'John Travolta',
  'Leaving Las Vegas': 'Nicolas Cage',
  'Mr. Holland\'s Opus': 'Richard Dreyfuss',
  'Nixon': 'Anthony Hopkins',
  'Dead Man Walking': 'Sean Penn',
  'Il Postino': 'Massimo Troisi',
  'Shine': 'Geoffrey Rush',
  'Jerry Maguire': 'Tom Cruise',
  'The English Patient': 'Ralph Fiennes',
  'The People vs. Larry Flynt': 'Woody Harrelson',
  'Sling Blade': 'Billy Bob Thornton',
  'As Good as It Gets': 'Jack Nicholson',
  'Good Will Hunting': 'Matt Damon',
  'The Apostle': 'Robert Duvall',
  'Ulee\'s Gold': 'Peter Fonda',
  'Wag the Dog': 'Dustin Hoffman',
  'Life Is Beautiful': 'Roberto Benigni',
  'Saving Private Ryan': 'Tom Hanks',
  'Gods and Monsters': 'Ian McKellen',
  'Affliction': 'Nick Nolte',
  'American History X': 'Edward Norton',
  'American Beauty': 'Kevin Spacey',
  'The Insider': 'Russell Crowe',
  'The Straight Story': 'Richard Farnsworth',
  'Sweet and Lowdown': 'Sean Penn',
  'The Hurricane': 'Denzel Washington',
  'Gladiator': 'Russell Crowe',
  'Before Night Falls': 'Javier Bardem',
  'Cast Away': 'Tom Hanks',
  'Pollock': 'Ed Harris',
  'Quills': 'Geoffrey Rush',
  'Training Day': 'Denzel Washington',
  'A Beautiful Mind': 'Russell Crowe',
  'I Am Sam': 'Sean Penn',
  'Ali': 'Will Smith',
  'In the Bedroom': 'Tom Wilkinson',
  'The Pianist': 'Adrien Brody',
  'Adaptation.': 'Nicolas Cage',
  'The Quiet American': 'Michael Caine',
  'Gangs of New York': 'Daniel Day-Lewis',
  'About Schmidt': 'Jack Nicholson',
  'Mystic River': 'Sean Penn',
  'Pirates of the Caribbean: The Curse of the Black Pearl': 'Johnny Depp',
  'House of Sand and Fog': 'Ben Kingsley',
  'Cold Mountain': 'Jude Law',
  'Lost in Translation': 'Bill Murray',
  'Ray': 'Jamie Foxx',
  'Hotel Rwanda': 'Don Cheadle',
  'Finding Neverland': 'Johnny Depp',
  'The Aviator': 'Leonardo DiCaprio',
  'Million Dollar Baby': 'Clint Eastwood',
  'Capote': 'Philip Seymour Hoffman',
  'Hustle & Flow': 'Terrence Howard',
  'Brokeback Mountain': 'Heath Ledger',
  'Walk the Line': 'Joaquin Phoenix',
  'Good Night, and Good Luck': 'David Strathairn',
  'The Last King of Scotland': 'Forest Whitaker',
  'Blood Diamond': 'Leonardo DiCaprio',
  'Half Nelson': 'Ryan Gosling',
  'Venus': 'Peter O\'Toole',
  'The Pursuit of Happyness': 'Will Smith',
  'There Will Be Blood': 'Daniel Day-Lewis',
  'Michael Clayton': 'George Clooney',
  'Sweeney Todd: The Demon Barber of Fleet Street': 'Johnny Depp',
  'In the Valley of Elah': 'Tommy Lee Jones',
  'Eastern Promises': 'Viggo Mortensen',
  'Milk': 'Sean Penn',
  'The Visitor': 'Richard Jenkins',
  'Frost/Nixon': 'Frank Langella',
  'The Curious Case of Benjamin Button': 'Brad Pitt',
  'The Wrestler': 'Mickey Rourke',
  'Crazy Heart': 'Jeff Bridges',
  'Up in the Air': 'George Clooney',
  'A Single Man': 'Colin Firth',
  'Invictus': 'Morgan Freeman',
  'The Hurt Locker': 'Jeremy Renner'
};

const FilmActresses = {
  'Misery': 'Kathy Bates',
  'The Grifters': 'Anjelica Huston',
  'Pretty Woman': 'Julia Roberts',
  'Postcards from the Edge': 'Meryl Streep',
  'Mr. and Mrs. Bridge': 'Joanne Woodward',
  'The Silence of the Lambs': 'Jodie Foster',
  'Thelma & Louise': 'Geena Davis',
  'Rambling Rose': 'Laura Dern',
  'For the Boys': 'Bette Midler',
  'Thelma & Louise_': 'Susan Sarandon',
  'Howards End': 'Emma Thompson',
  'Indochine': 'Catherine Deneuve',
  'Passion Fish': 'Mary McDonnell',
  'Love Field': 'Michelle Pfeiffer',
  'Lorenzo\'s Oil': 'Susan Sarandon',
  'The Piano': 'Holly Hunter',
  'What\'s Love Got to Do with It': 'Angela Bassett',
  'Six Degrees of Separation': 'Stockard Channing',
  'The Remains of the Day': 'Emma Thompson',
  'Shadowlands': 'Debra Winger',
  'Blue Sky': 'Jessica Lange',
  'Nell': 'Jodie Foster',
  'Tom & Viv': 'Miranda Richardson',
  'Little Women': 'Winona Ryder',
  'The Client': 'Susan Sarandon',
  'Dead Man Walking': 'Susan Sarandon',
  'Leaving Las Vegas': 'Elisabeth Shue',
  'Casino': 'Sharon Stone',
  'The Bridges of Madison County': 'Meryl Streep',
  'Sense and Sensibility': 'Emma Thompson',
  'Fargo': 'Frances McDormand',
  'Secrets & Lies': 'Brenda Blethyn',
  'Marvin\'s Room': 'Diane Keaton',
  'The English Patient': 'Kristin Scott Thomas',
  'Breaking the Waves': 'Emily Watson',
  'As Good as It Gets': 'Helen Hunt',
  'The Wings of the Dove': 'Helena Bonham Carter',
  'Afterglow': 'Julie Christie',
  'Mrs. Brown': 'Judi Dench',
  'Titanic': 'Kate Winslet',
  'Shakespeare in Love': 'Gwyneth Paltrow',
  'Elizabeth': 'Cate Blanchett',
  'Central Station': 'Fernanda Montenegro',
  'One True Thing': 'Meryl Streep',
  'Hilary and Jackie': 'Emily Watson',
  'Boys Don\'t Cry': 'Hilary Swank',
  'American Beauty': 'Annette Bening',
  'Tumbleweeds': 'Janet McTeer',
  'The End of the Affair': 'Julianne Moore',
  'Music of the Heart': 'Meryl Streep',
  'Erin Brockovich': 'Julia Roberts',
  'The Contender': 'Joan Allen',
  'Chocolat': 'Juliette Binoche',
  'Requiem for a Dream': 'Ellen Burstyn',
  'You Can Count on Me': 'Laura Linney',
  'Monster\'s Ball': 'Halle Berry',
  'Iris': 'Judi Dench',
  'Moulin Rouge!': 'Nicole Kidman',
  'In the Bedroom': 'Sissy Spacek',
  'Bridget Jones\'s Diary': 'Renée Zellweger',
  'The Hours': 'Nicole Kidman',
  'Frida': 'Salma Hayek',
  'Unfaithful': 'Diane Lane',
  'Far from Heaven': 'Julianne Moore',
  'Chicago': 'Renée Zellweger',
  'Monster': 'Charlize Theron',
  'Whale Rider': 'Keisha Castle-Hughes',
  'Something\'s Gotta Give': 'Diane Keaton',
  'In America': 'Samantha Morton',
  '21 Grams': 'Naomi Watts',
  'Million Dollar Baby': 'Hilary Swank',
  'Being Julia': 'Annette Bening',
  'Maria Full of Grace': 'Catalina Sandino Moreno',
  'Vera Drake': 'Imelda Staunton',
  'Eternal Sunshine of the Spotless Mind': 'Kate Winslet',
  'Walk the Line': 'Reese Witherspoon',
  'Mrs Henderson Presents': 'Judi Dench',
  'Transamerica': 'Felicity Huffman',
  'Pride & Prejudice': 'Keira Knightley',
  'North Country': 'Charlize Theron',
  'The Queen': 'Helen Mirren',
  'Volver': 'Penélope Cruz',
  'Notes on a Scandal': 'Judi Dench',
  'The Devil Wears Prada': 'Meryl Streep',
  'Little Children': 'Kate Winslet',
  'La Vie en Rose': 'Marion Cotillard',
  'Elizabeth: The Golden Age': 'Cate Blanchett',
  'Away from Her': 'Julie Christie',
  'The Savages': 'Laura Linney',
  'Juno': 'Ellen Page',
  'The Reader': 'Kate Winslet',
  'Rachel Getting Married': 'Anne Hathaway',
  'Changeling': 'Angelina Jolie',
  'Frozen River': 'Melissa Leo',
  'Doubt': 'Meryl Streep',
  'The Blind Side': 'Sandra Bullock',
  'The Last Station': 'Helen Mirren',
  'An Education': 'Carey Mulligan',
  'Precious': 'Gabourey Sidibe',
  'Julie & Julia': 'Meryl Streep'
};

const FilmDirectors = {
  'Dances with Wolves': 'Kevin Costner',
  'The Godfather Part III': 'Francis Ford Coppola',
  'The Grifters': 'Stephen Frears',
  'Reversal of Fortune': 'Barbet Schroeder',
  'Goodfellas': 'Martin Scorsese',
  'The Silence of the Lambs': 'Jonathan Demme',
  'Bugsy': 'Barry Levinson',
  'Thelma & Louise': 'Ridley Scott',
  'Boyz n the Hood': 'John Singleton',
  'JFK': 'Oliver Stone',
  'Unforgiven': 'Clint Eastwood',
  'The Player': 'Robert Altman',
  'Scent of a Woman': 'Martin Brest',
  'Howards End': 'James Ivory',
  'The Crying Game': 'Neil Jordan',
  'Schindler\'s List': 'Steven Spielberg',
  'Short Cuts': 'Robert Altman',
  'The Piano': 'Jane Campion',
  'The Remains of the Day': 'James Ivory',
  'In the Name of the Father': 'Jim Sheridan',
  'Forrest Gump': 'Robert Zemeckis',
  'Bullets Over Broadway': 'Woody Allen',
  'Three Colors: Red': 'Krzysztof Kieślowski',
  'Quiz Show': 'Robert Redford',
  'Pulp Fiction': 'Quentin Tarantino',
  'Braveheart': 'Mel Gibson',
  'Leaving Las Vegas': 'Mike Figgis',
  'Babe': 'Chris Noonan',
  'Il Postino': 'Michael Radford',
  'Dead Man Walking': 'Tim Robbins',
  'The English Patient': 'Anthony Minghella',
  'Fargo': 'Joel Coen',
  'The People vs. Larry Flynt': 'Miloš Forman',
  'Shine': 'Scott Hicks',
  'Secrets & Lies': 'Mike Leigh',
  'Titanic': 'James Cameron',
  'The Full Monty': 'Peter Cattaneo',
  'The Sweet Hereafter': 'Atom Egoyan',
  'L.A. Confidential': 'Curtis Hanson',
  'Good Will Hunting': 'Gus Van Sant',
  'Saving Private Ryan': 'Steven Spielberg',
  'Life Is Beautiful': 'Roberto Benigni',
  'Shakespeare in Love': 'John Madden',
  'The Thin Red Line': 'Terrence Malick',
  'The Truman Show': 'Peter Weir',
  'American Beauty': 'Sam Mendes',
  'The Cider House Rules': 'Lasse Hallström',
  'Being John Malkovich': 'Spike Jonze',
  'The Insider': 'Michael Mann',
  'The Sixth Sense': 'M. Night Shyamalan',
  'Traffic': 'Steven Soderbergh',
  'Billy Elliot': 'Stephen Daldry',
  'Crouching Tiger, Hidden Dragon': 'Ang Lee',
  'Gladiator': 'Ridley Scott',
  'Erin Brockovich': 'Steven Soderbergh',
  'A Beautiful Mind': 'Ron Howard',
  'Gosford Park': 'Robert Altman',
  'The Lord of the Rings: The Fellowship of the Ring': 'Peter Jackson',
  'Mulholland Drive': 'David Lynch',
  'The Pianist': 'Roman Polanski',
  'Black Hawk Down': 'Ridley Scott',
  'Talk to Her': 'Pedro Almodóvar',
  'The Hours': 'Stephen Daldry',
  'Chicago': 'Rob Marshall',
  'The Lord of the Rings: The Return of the King': 'Peter Jackson',
  'Gangs of New York': 'Martin Scorsese',
  'Lost in Translation': 'Sofia Coppola',
  'Mystic River': 'Clint Eastwood',
  'City of God': 'Fernando Meirelles',
  'Master and Commander: The Far Side of the World': 'Peter Weir',
  'Million Dollar Baby': 'Clint Eastwood',
  'Ray': 'Taylor Hackford',
  'Vera Drake': 'Mike Leigh',
  'Sideways': 'Alexander Payne',
  'The Aviator': 'Martin Scorsese',
  'Brokeback Mountain': 'Ang Lee',
  'Good Night, and Good Luck.': 'George Clooney',
  'Crash': 'Paul Haggis',
  'Capote': 'Bennett Miller',
  'Munich': 'Steven Spielberg',
  'The Departed': 'Martin Scorsese',
  'Letters from Iwo Jima': 'Clint Eastwood',
  'The Queen': 'Stephen Frears',
  'Babel': 'Alejandro González Iñárritu',
  'United 93': 'Paul Greengrass',
  'No Country for Old Men': 'Joel & Ethan Coen',
  'There Will Be Blood': 'Paul Thomas Anderson',
  'Michael Clayton': 'Tony Gilroy',
  'Juno': 'Jason Reitman',
  'The Diving Bell and the Butterfly': 'Julian Schnabel',
  'Slumdog Millionaire': 'Danny Boyle',
  'The Reader': 'Stephen Daldry',
  'The Curious Case of Benjamin Button': 'David Fincher',
  'Frost/Nixon': 'Ron Howard',
  'Milk': 'Gus Van Sant',
  'Avatar': 'James Cameron',
  'The Hurt Locker': 'Kathryn Bigelow',
  'Precious: Based on the Novel "Push" by Sapphire': 'Lee Daniels',
  'Up in the Air': 'Jason Reitman',
  'Inglourious Basterds': 'Quentin Tarantino'
};

const MilitaryRobots = {
  MechanicalHound: 'Fahrenheit 451',
  AMEE: 'Red Planet',
  SIMON: 'Lara Croft Tomb Raider',
  ED209: 'RoboCop',
  BattleRobotT1: 'Terminator 3 Rise of the Machines',
  Johnny5: 'Short Circuit',
  MARK: 'Hardware',
  EDI: 'Stealth',
  VTOLCraftT1: 'Terminator 3 Rise of the Machines',
  CyberdyneT800: 'Terminator series',
  EosB1: 'Star Wars Ep. I/II/III',
  EosB2: 'Star Wars Ep. II/III',
  HolowanMagnaGuards: 'Star Wars Ep. III',
  Decepticons: 'Transformers',
  HectorModel: 'Saturn 3',
  STAR: 'The Black Hole',
  CylonCenturion: 'Battlestar Galactica',
  Protectron: 'Fallout',
  SentryBot: 'Fallout',
  LibertyPrime: 'Fallout',
  CyberdyneT1000: 'Terminator 2 Judgment Day',
  Terminatrix: 'Terminator 3 Rise of the Machines',
  Synth: 'Fallout',
  Sentinels: 'The Matrix series',
  RobotB9: 'Lost in Space',
  Droideka: 'Star Wars Ep. I,II,III',
  R2D2: 'Star Wars series',
  VINCENT: 'The Black Hole',
  BOB: 'The Black Hole',
  Maximilian: 'The Black Hole',
  MisterGusty: 'Fallout series',
  SuperSentinels: 'Halo 1/2/3',
  Screamers: 'Screamers',
  APU: 'The Matrix Revolutions',
  IronManSuit: 'Iron Man',
  AMP: 'Avatar',
  MANTIS: 'M.A.N.T.I.S.',
  PoweredInfantryArmorT51: 'Fallout series'
};

const Pastas = {
  conchiglie: 'seashell shaped, usually furrowed (rigate)',
  chifferi: 'short and wide macaroni',
  farfalle: 'bow tie or butterfly shaped',
  fusilli: 'long, thick, corkscrew-shaped pasta that may be solid or hollow',
  gnocchi: 'lobed shells. Not to be confused with gnocchi dumplings',
  lasagna: 'square or rectangle sheets of pasta',
  linguine: 'flattened spaghetti',
  pennine: 'medium length tubes with ridges, cut diagonally at both ends',
  ravioli: 'wwo squares of pasta on top of another, stuffed with fill',
  spaghetti: 'long, thin, cylindrical pasta of Italian origin'
};

const MovieQuotes = objectInit.init([['Love Story', `Love means never having to say you're sorry.`], ['Braveheart', `They may take our lives, but they'll never take our freedom!`], ['In the Heat of the Night', `They call me Mister Tibbs!`], ['When Harry Met Sally', `When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.`], ['Taken', `If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.`], ['Jerry Maguire', `You complete me.`], ['Gladiator', `My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next.`], ['There Will Be Blood', `I drink your milkshake!`], ['Planet of the Apes', `Get your stinking paws off me, you damned dirty ape!`], ['As Good as It Gets', `You make me want to be a better man.`], ['Clueless', `As if!`], ['Star Wars Episode VII: The Force Awakens', `Chewie, we're home.`], ['Chinatown', `Forget it, Jake. It's Chinatown.`], ['This Is Spinal Tap', `These go to eleven.`], ['Midnight Cowboy', `I'm walking here! I'm walking here!`], ['King Kong', `It was Beauty killed the Beast.`], ['The Treasure of the Sierra Madre', `Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!`], ['The Devil Wears Prada', `I'm just one stomach flu away from my goal weight.`], ['Pulp Fiction', `They call it a Royale with cheese.`], ['Poltergeist', `They're here!`], ['Snow White and the Seven Dwarves', `Magic Mirror on the wall, who is the fairest one of all?`], ['The Godfather: Part III', `Just when I thought I was out, they pull me back in.`], ['Some Like It Hot', `Nobody's perfect.`], ['Rocky', `Yo, Adrian!`], ['The Karate Kid', `Wax on, wax off.`], ['The Jazz Singer', `You ain't heard nothin' yet!`], ['Dr. Strangelove', `Gentlemen, you can't fight in here! This is the war room!`], ['12 Years a Slave', `I don't want to survive. I want to live.`], ['The Adventures of Sherlock Holmes', `Elementary, my dear Watson.`], ['Babe', `That'll do, pig. That'll do.`], ['Brokeback Mountain', `I wish I knew how to quit you.`], ['Good Morning', `Good morning, Vietnam!`], ['The Lord of the Rings: The Two Towers', `My precious.`], ['Argo', `Argo f— yourself.`], ['Frankenstein', `It's alive! It's alive!`], ['A Streetcar Named Desire', `I have always depended on the kindness of strangers.`], ['Sudden Impact', `Go ahead, make my day.`], ['Goodfellas', `I mean, funny like I'm a clown? I amuse you?`], ['Star Wars', `Help me, Obi-Wan Kenobi. You're my only hope.`], ['To Have and Have Not', `You know how to whistle, don't you, Steve? You just put your lips together and blow.`], ['The Help', `You is kind. You is smart. You is important.`], ['Gone With the Wind', `After all, tomorrow is another day!`], ['A Streetcar Named Desire', `Stella! Hey, Stella!`], ['The Wizard of Oz', `Pay no attention to that man behind the curtain!`], ['Notting Hill', `I'm also just a girl, standing in front of a boy, asking him to love her.`], ['The Big Lebowski', `The Dude abides.`], ['Terminator 2: Judgment Day', `Hasta la vista, baby.`], ['The Wizard of Oz', `I'll get you, my pretty, and your little dog, too!`], ['Casablanca', `Play it, Sam. Play 'As Time Goes By.'`], ['The Silence of the Lambs', `I'm having an old friend for dinner.`], ['Who Framed Roger Rabbit', `I'm not bad. I'm just drawn that way.`], ['Field of Dreams', `If you build it, he will come.`], ['Finding Nemo', `Just keep swimming.`], ['Forrest Gump', `Mama says, 'Stupid is as stupid does.'`], ['Titanic', `I'm the king of the world!`], ['Goldfinger', `Shaken, not stirred.`], ['Cool Hand Luke', `What we've got here is a failure to communicate.`], ['Sunset Boulevard', `I am big! It's the pictures that got small.`], ['It\'s a Wonderful Life', `Every time a bell rings, an angel gets his wings.`], ['The Godfather', `Keep your friends close, but your enemies closer.`], ['The Usual Suspects', `The greatest trick the devil ever pulled was convincing the world he didn't exist.`], ['Network', `I'm as mad as hell, and I'm not going to take this anymore!`], ['On the Waterfront', `You don't understand! I could've had class. I could've been a contender. I could've been somebody, instead of a bum, which is what I am.`], ['Back to the Future', `Roads? Where we're going we don't need roads.`], ['All About Eve', `Fasten your seatbelts. It's going to be a bumpy night.`], ['Apocalypse Now', `I love the smell of napalm in the morning.`], ['Dirty Harry', `You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya punk?`], ['Scarface', `Say hello to my little friend!`], ['Jerry Maguire', `Show me the money!`], ['The Godfather', `Leave the gun. Take the cannoli.`], ['Dead Poets Society', `Carpe diem. Seize the day, boys.`], ['The Graduate', `Mrs. Robinson, you're trying to seduce me, aren't you?`], ['Airplane', `I am serious. And don't call me Shirley.`], ['The Shining', `Here's Johnny!`], ['A League of Their Own', `There's no crying in baseball!`], ['Jerry Maguire', `You had me at hello.`], ['Apollo 13', `Houston, we have a problem.`], ['Toy Story', `To infinity and beyond!`], ['Die Hard', `Yippie-ki-yay, motherf—er!`], ['E.T. the Extra-Terrestrial', `E.T. phone home.`], ['A Few Good Men', `You can't handle the truth!`], ['The Terminator', `I'll be back.`], ['The Sixth Sense', `I see dead people.`], ['Dr. No', `Bond. James Bond.`], ['Casablanca', `We'll always have Paris.`], ['Casablanca', `This is the beginning of a beautiful friendship.`], ['When Harry Met Sally', `I'll have what she's having.`], ['The Dark Knight', `Why so serious?`], ['The Princess Bride', `Hello. My name is Inigo Montoya. You killed my father. Prepare to die.`], ['Star Wars Episode V: The Empire Strikes Back', `I am your father.`], ['Fight Club', `The first rule of Fight Club is: You do not talk about Fight Club.`], ['The Wizard of Oz', `There's no place like home.`], ['Taxi Driver', `You talkin' to me?`], ['Casablanca', `Of all the gin joints in all the towns in all the world, she walks into mine.`], ['The Godfather', `I'm going to make him an offer he can't refuse.`], ['The Wizard of Oz', `Toto, I've a feeling we're not in Kansas anymore.`], ['Star Wars', `May the Force be with you.`], ['Jaws', `You're gonna need a bigger boat.`], ['Casablanca', `Here's looking at you, kid.`], ['Gone With the Wind', `Frankly, my dear, I don't give a damn.`]]);

// (?<=[a-z])(?=[A-Z]) -> '+LF+'

const ShakesQuote = objectInit.init([['Richard, AIS1, Richard III', 'Now is the winter of our discontent' + enumChars.LF + 'Made glorious summer by this sun of York.'], ['The Rape of Lucrece', 'Beauty itself doth of itself persuade' + enumChars.LF + 'The eyes of men without an orator.'], [`Falstaff, AVS4, Henry IV, P1`, 'The better part of valour is discretion; in the which better part I have saved my life.'], ['Hamlet AIIS2', 'What a piece of work is man, How noble in reason, how infinite in faculty, In form and moving how express and admirable, In action how like an Angel, In apprehension how like a god, The beauty of the world, The paragon of animals. And yet to me, what is this quintessence of dust? Man delights not me; no, nor Woman neither;'], ['All\'s Well That Ends Well AIVS3L80', 'web of our life is of a mingled yarn, good and ill together.'], ['Antony and Cleopatra AIS2L32', 'O excellent! I love long life better than figs.'], ['As You Like It AIIS1L15', 'And this **our life, exempt from public haunt,' + enumChars.LF + 'Finds tongues in trees, books in the running brooks,' + enumChars.LF + 'Sermons in stones, and good in everything.**'], ['As You Like It AIIS7L25', 'And so, from hour to hour, we ripe and ripe.' + enumChars.LF + 'And then, from hour to hour, we rot and rot;' + enumChars.LF + 'And thereby hangs a tale.'], ['Hamlet AIS4L66', 'Why, what should be the fear?' + enumChars.LF + 'I do not set my life at a pin\'s fee.'], ['Hamlet AIIIS1', '**To be, or not to be,—that is the question**:—Whether \'tis nobler in the mind to suffer' + enumChars.LF + 'The slings and arrows of outrageous fortune,' + enumChars.LF + 'Or to take arms against a sea of troubles,' + enumChars.LF + 'And by opposing end them?—To die, to sleep,—No more; and by a sleep to say we end' + enumChars.LF + 'The heart-ache, and the thousand natural shocks' + enumChars.LF + 'That flesh is heir to,—\'tis a consummation' + enumChars.LF + 'Devoutly to be wish\'d. To die, to sleep;—To sleep, perchance to dream:—ay, there\'s the rub;' + enumChars.LF + 'For in that sleep of death what dreams may come,' + enumChars.LF + 'When we have shuffled off this mortal coil,' + enumChars.LF + 'Must give us pause: there\'s the respect' + enumChars.LF + 'That makes calamity of so long life;' + enumChars.LF + 'For who would bear the whips and scorns of time,' + enumChars.LF + 'The oppressor\'s wrong, the proud man\'s contumely,' + enumChars.LF + 'The pangs of despis\'d love, the law\'s delay,' + enumChars.LF + 'The insolence of office, and the spurn' + enumChars.LF + 'That patient merit of the unworthy takes,' + enumChars.LF + 'When he himself might his quietus make' + enumChars.LF + 'With a bare bodkin? who would these fardels bear,' + enumChars.LF + 'To grunt and sweat under a weary life,' + enumChars.LF + 'But that the dread of something after death,—The undiscover\'d country, from whose bourn' + enumChars.LF + 'No traveller returns,—puzzles the will,' + enumChars.LF + 'And makes us rather bear those ills we have' + enumChars.LF + 'Than fly to others that we know naught of?' + enumChars.LF + 'Thus conscience does make cowards of us all;' + enumChars.LF + 'And thus the native hue of resolution' + enumChars.LF + 'Is sicklied o\'er with the pale cast of thought;' + enumChars.LF + 'And enterprises of great pith and moment,' + enumChars.LF + 'With this regard, their currents turn awry,' + enumChars.LF + 'And lose the name of action.'], ['Hamlet AVS2L74', 'And a man\'s life\'s no more than to say \'One.\''], ['Henry IV, Part I AVS2L82', 'O gentlemen, the time of life is short!' + enumChars.LF + 'To spend that shortness basely were too long,' + enumChars.LF + 'If life did ride upon a dial\'s point,' + enumChars.LF + 'Still ending at the arrival of an hour.'], ['Henry V AIVS5L23.', 'Let life be short: else shame will be too long.'], ['Henry VI, Part III AIS4L25', 'The sands are number\'d that make up my life;' + enumChars.LF + 'Here must I stay, and here my life must end.'], ['Henry VIII AIIIS2L350', 'So farewell to the little good you bear me.' + enumChars.LF + 'Farewell! a long farewell, to all my greatness!' + enumChars.LF + 'This is the state of man: to-day he puts forth' + enumChars.LF + 'The tender leaves of hopes; to-morrow blossoms,' + enumChars.LF + 'And bears his blushing honours thick upon him;' + enumChars.LF + 'The third day comes a frost, a killing frost,' + enumChars.LF + 'And, when he thinks, good easy man, full surely' + enumChars.LF + 'His greatness is a-ripening, nips his root,' + enumChars.LF + 'And then he falls, as I do. I have ventur\'d,' + enumChars.LF + 'Like little wanton boys that swim on bladders,' + enumChars.LF + 'This many summers in a sea of glory,' + enumChars.LF + 'But far beyond my depth. My high-blown pride' + enumChars.LF + 'At length broke under me, and now has left me,' + enumChars.LF + 'Weary and old with service, to the mercy' + enumChars.LF + 'Of a rude stream that must for ever hide me.' + enumChars.LF + 'Vain pomp and glory of this world, I hate ye!' + enumChars.LF + 'I feel my heart new open\'d. O, how wretched' + enumChars.LF + 'Is that poor man that hangs on princes\' favours!' + enumChars.LF + 'There is, betwixt that smile we would aspire to,' + enumChars.LF + 'That sweet aspect of princes, and their ruin,' + enumChars.LF + 'More pangs and fears than wars or women have;' + enumChars.LF + 'And when he falls, he falls like Lucifer,' + enumChars.LF + 'Never to hope again.'], ['Julius Caesar AIS2L93', 'I cannot tell what you and other men' + enumChars.LF + 'Think of this life; but, for my single self,' + enumChars.LF + 'I had as lief not be as live to be' + enumChars.LF + 'In awe of such a thing as I myself.'], ['Julius Caesar AVS3L23', 'This day I breathed first: time is come round,' + enumChars.LF + 'And where I did begin there shall I end;' + enumChars.LF + 'My life is run his compass.'], ['King John AIIIS4L108', 'Life is as tedious as a twice-told tale,' + enumChars.LF + 'Vexing the dull ear of a drowsy man.'], ['King Lear AIVS6L55', '**Thy life\'s a miracle.**'], ['King Lear AIVS6L186', 'When we are born, we cry, that we are come' + enumChars.LF + 'To this great stage of fools.'], ['Julius Caesar AIS3L93', 'Nor stony tower, nor walls of beaten brass,' + enumChars.LF + 'Nor airless dungeon, nor strong links of iron,' + enumChars.LF + 'Can be retentive to the strength of spirit;' + enumChars.LF + 'But life, being weary of these worldly bars,' + enumChars.LF + 'Never lacks power to dismiss itself.'], ['Macbeth AIS7L4', 'That but this blow' + enumChars.LF + 'Might be the be-all and the end-all here,' + enumChars.LF + 'But here, upon this bank and shoal of time,' + enumChars.LF + 'We\'ld jump the life to come.'], ['Macbeth AIIS3L96', 'Had I but died an hour before this chance,' + enumChars.LF + 'I had liv\'d a blessed time; for, from this instant,' + enumChars.LF + 'There\'s nothing serious in mortality:' + enumChars.LF + 'All is but toys; renown, and grace is dead;' + enumChars.LF + 'The wine of life is drawn, and the mere lees' + enumChars.LF + 'Is left this vault to brag of.'], ['Macbeth AIIIS1L113', 'So weary with disasters, tugg\'d with fortune,' + enumChars.LF + 'That I would set my life on any chance,' + enumChars.LF + 'To mend, or be rid on\'t.'], ['Macbeth AVS5L23', 'Out, out, brief candle!' + enumChars.LF + 'Life\'s but a walking shadow,' + enumChars.LF + 'A poor player that struts and frets his hour upon the stage, and then is heard no more:it is a tale told by an idiot, full of sound and fury, signifying nothing.'], ['Macbeth AVS8L12', 'I bear a charmed life.'], ['Measure for Measure AIIIS1L6', 'Reason thus with life:' + enumChars.LF + 'If I do lose thee, I do lose a thing' + enumChars.LF + 'That none but fools would keep.'], ['Merry Wives of Windsor AVS1L20', 'Life is a shuttle.'], ['Othello AIS3L128', 'Her father lov\'d me; oft invited me;' + enumChars.LF + 'Still question\'d me the story of my life,' + enumChars.LF + 'From year to year, the battles, sieges, fortunes,' + enumChars.LF + 'That I have pass\'d.'], ['Othello AIS3L309', 'It is silliness to live when to live is torment; and then have we a prescription to die when death is our physician.'], ['Henry IV, Part I AIS3L59', 'It was great pity, so it was,' + enumChars.LF + 'That villanous saltpetre should be digg\'d' + enumChars.LF + 'Out of the bowels of the harmless earth,' + enumChars.LF + 'Which many a good tall fellow had destroy\'d' + enumChars.LF + 'So cowardly; and but for these vile guns' + enumChars.LF + 'He would himself have been a soldier.'], ['Henry IV, Part I AIIS3L96', 'We must have bloody noses and crack\'d crowns,' + enumChars.LF + 'And pass them current too. God\'s me, my horse!'], ['Henry IV, Part I AIVS1L114', 'The fire-eyed maid of smoky war' + enumChars.LF + 'All hot and bleeding will we offer them.'], ['Henry IV, Part I AIVS2L71', 'Tut, tut; good enough to toss; food for powder, food for powder; they\'ll fill a pit as well as better.'], ['Henry IV, Part I AVS2L88', 'The arms are fair,' + enumChars.LF + 'When the intent of bearing them is just.'], ['Henry IV, Part II AIVS1L154', 'Our battle is more full of names than yours,' + enumChars.LF + 'Our men more perfect in the use of arms,' + enumChars.LF + 'Our armour all as strong, our cause the best;' + enumChars.LF + 'Then reason will our hearts should be as good.'], ['Henry IV, Part II AIVS3L45', 'That I may truly say with the hook-nosed fellow of Rome, I came, I saw, and overcame.'], ['Henry IV, Part II AVS2L33', 'O war! thou son of hell,' + enumChars.LF + 'Whom angry heavens do make their minister,' + enumChars.LF + 'Throw in the frozen bosoms of our part' + enumChars.LF + 'Hot coals of vengeance! Let no soldier fly.' + enumChars.LF + 'He that is truly dedicate to war' + enumChars.LF + 'Hath no self-love, nor he that loves himself,' + enumChars.LF + 'Hath not essentially but by circumstance' + enumChars.LF + 'The name of valour.'], ['Henry V AIIIS1L1', 'Once more unto the breach, dear friends, once more;' + enumChars.LF + 'Or close the wall up with our English dead.'], ['Henry V AIVChorusL4', 'From camp to camp through the foul womb of night' + enumChars.LF + 'The hum of either army stilly sounds.'], ['Henry V AIVChorusL1', 'The armourers, accomplishing the knights,' + enumChars.LF + 'With busy hammers closing rivets up,' + enumChars.LF + 'Give dreadful note of preparation.'], ['Henry V AIVS1L148', 'There are few die well that die in a battle.'], ['Henry V AIVS3L35', 'He which hath no stomach to this fight,' + enumChars.LF + 'Let him depart; his passport shall be made.'], ['Henry VI, Part III AIS', 'It is war\'s prize to take all vantage.'], ['Henry VI, Part III AIIS2L173', 'Sound trumpets! let our bloody colours wave!' + enumChars.LF + 'And either victory, or else a grave.'], ['Henry VI, Part III AIVS1L114', 'They shall have wars and pay for their presumption.'], ['King John AIIS1L210', 'The cannons have their bowels full of wrath,' + enumChars.LF + 'And ready mounted are they to spit forth' + enumChars.LF + 'Their iron indignation \'gainst your walls.'], ['King John AIVS3L148', 'Now for the bare-pick\'d bone of majesty' + enumChars.LF + 'Doth dogged war bristle his angry crest' + enumChars.LF + 'And snarleth in the gentle eyes of peace.'], ['King John AVS2L83', 'Your breath first kindled the dead coal of wars' + enumChars.LF + 'And brought in matter that should feed this fire;' + enumChars.LF + 'And now \'tis far too huge to be blown out' + enumChars.LF + 'With that same weak wind which enkindled it.'], ['King John AVS2L113', 'I drew this gallant head of war,' + enumChars.LF + 'And cull\'d these fiery spirits from the world,' + enumChars.LF + 'To outlook conquest and to win renown' + enumChars.LF + 'Even in the jaws of danger and of death.'], ['Macbeth AIS1L3', 'When the hurly-burly\'s done,' + enumChars.LF + 'When the battle\'s lost and won.'], ['Macbeth AVS5L1', 'Hang out our banners on the outward walls.'], ['Macbeth AVS5L51', 'Blow, wind! come, wrack!' + enumChars.LF + 'At least we\'ll die with harness on our back.'], ['Macbeth AVS8L33', 'Lay on, Macduff,' + enumChars.LF + 'And damn\'d be him that first cries, \'Hold, enough!\''], ['Richard II AIIS4L8', 'The bay-trees in our country all are wither\'d' + enumChars.LF + 'And meteors fright the fixed stars of heaven;' + enumChars.LF + 'The pale-fac\'d moon looks bloody on the earth' + enumChars.LF + 'And lean-look\'d prophets whisper fearful change;' + enumChars.LF + 'Rich men look sad and ruffians dance and leap,' + enumChars.LF + 'The one in fear to lose what they enjoy,' + enumChars.LF + 'The other to enjoy by rage and war.'], ['Richard II AIIIS3L51', 'Let\'s march without the noise of threat\'ning drum.'], ['Richard II AIIIS3L93', 'He is come to open' + enumChars.LF + 'The purple testament of bleeding war.'], ['Richard III AIS1L9', 'Grim-visag\'d war hath smoothed his wrinkled front.'], ['Richard III AVS2L3', 'Thus far into the bowels of the land' + enumChars.LF + 'Have we march\'d without impediment.'], ['Richard III AVS3L0', 'Conscience avaunt, Richard\'s himself again:' + enumChars.LF + 'Hark! the shrill trumpet sounds, to horse, away,' + enumChars.LF + 'My soul\'s in arms, and eager for the fray.'], ['Richard III AVS3L110', 'Put in their hands thy bruising irons of wrath,' + enumChars.LF + 'That they may crush down with heavy fall' + enumChars.LF + 'The usurping helmets of our adversaries.'], ['Richard III AVS3L338', 'Fight, gentlemen of England! fight, bold yeomen!' + enumChars.LF + 'Draw, archers, draw your arrows to the head!' + enumChars.LF + 'Spur your proud horses hard, and ride in blood;' + enumChars.LF + 'Amaze the welkin with your broken staves!'], ['Antony and Cleopatra AIS3L99', 'And all the gods go with you! upon your sword' + enumChars.LF + 'Sit laurel victory! and smooth success' + enumChars.LF + 'Be strew\'d before your feet!'], ['Cymbeline AVS3L3', 'All was lost,' + enumChars.LF + 'But that the heavens fought.'], ['Hamlet AVS2L285', 'Give me the cups;' + enumChars.LF + 'And let the kettle to the trumpet speak,' + enumChars.LF + 'The trumpet to the cannoneer without,' + enumChars.LF + 'The cannons to heavens, the heavens to earth.'], ['Julius Caesar AIIIS1L270', 'Caesar\'s spirit, ranging for revenge,' + enumChars.LF + 'With Até by his side come hot from hell,' + enumChars.LF + 'Shall in these confines with a monarch\'s voice' + enumChars.LF + 'Cry \'Havoc,\' and let slip the dogs of war.'], ['Timon of Athens AIVS3L58', 'Follow thy drum;' + enumChars.LF + 'With man\'s blood paint the ground, gules, gules;' + enumChars.LF + 'Religious canons, civil laws are cruel;' + enumChars.LF + 'Then what should war be?'], ['Hamlet AIS2L72', 'Thou know\'st \'tis common; all that lives must die,' + enumChars.LF + 'Passing through nature to eternity.'], ['Hamlet AIS2L186', 'He was an man, take him for all in all.' + enumChars.LF + 'I shall not look upon his like again.'], ['Hamlet AIS4L67', 'I do not to set my life at a pin\'s fee;' + enumChars.LF + 'And, for my soul, what can it do to that,' + enumChars.LF + 'Being a thing immortal as itself?'], ['Hamlet AIS5L76', 'Cut off even in the blossoms of my sin,' + enumChars.LF + 'Unhousel\'d, disappointed, unanel\'d;' + enumChars.LF + 'No reckoning made, but sent to my account' + enumChars.LF + 'With all my imperfections on my head.'], ['Hamlet AIIIS1L60', 'To die:—to sleep:' + enumChars.LF + 'No more; and, by a sleep to say we end' + enumChars.LF + 'The heart-ache and the thousand natural shocks' + enumChars.LF + 'That flesh is heir to, \'tis a consummation' + enumChars.LF + 'Devoutly to be wished.'], ['Hamlet AIIIS1L66', 'For in that sleep of death what dreams may come,' + enumChars.LF + 'When we have shuffled off this mortal coil,' + enumChars.LF + 'Must give us pause.'], ['Hamlet AIIIS1L76. ', 'Who would fardels bear,' + enumChars.LF + 'To grunt and sweat under a weary life;' + enumChars.LF + 'But that the dread of something after death,' + enumChars.LF + 'The undiscover\'d country from whose bourn' + enumChars.LF + 'No traveller returns, puzzles the will' + enumChars.LF + 'And makes us rather bear those ills we have' + enumChars.LF + 'Than fly to others that we know not of?'], ['Hamlet AVS1L259', 'We should profane the service of the dead,' + enumChars.LF + 'To sing a requiem and such rest to her' + enumChars.LF + 'As to peace-parted souls.'], ['Hamlet AVS2L375', 'O proud death,' + enumChars.LF + 'What feast is toward in thine eternal cell,' + enumChars.LF + 'That thou so many princes at a shot' + enumChars.LF + 'So bloodily hast, struck?'], ['Julius Caesar AIIS2L30', 'When beggars die, there are no comets seen;' + enumChars.LF + 'The heavens themselves blaze forth the death of princes.'], ['Julius Caesar AIIS2L33', 'Cowards die many times before their deaths;' + enumChars.LF + 'The valiant never taste of death but once.' + enumChars.LF + 'Of all the wonders that I yet have heard,' + enumChars.LF + 'It seems to me most strange that men should fear;' + enumChars.LF + 'Seeing that death, a necessary end,' + enumChars.LF + 'Will come when it will come.'], ['Julius Caesar AIIIS1L99', 'That we shall die we know; \'tis but the time' + enumChars.LF + 'And drawing days out, that men stand upon.'], ['Julius Caesar AIIIS1L101', 'He that cuts off twenty years of life' + enumChars.LF + 'Cuts off so many years of fearing death.'], ['Julius Caesar AIVS3L190', 'We must die, Messala:' + enumChars.LF + 'With meditating that she must die once,' + enumChars.LF + 'I have the patience to endure it now.'], ['Measure for Measure AIIIS1L4', 'Be absolute for death; either death or life' + enumChars.LF + 'Shall thereby be the sweeter.'], ['Measure for Measure AIIIS1L38', 'What\'s yet in this,' + enumChars.LF + 'That bears the name of life? Yet in this life' + enumChars.LF + 'Lie hid more thousand deaths: yet death we fear,' + enumChars.LF + 'That makes these odds all even.'], ['Measure for Measure AIIIS1L77', 'Dar\'st thou die?' + enumChars.LF + 'The sense of death is most in apprehension;' + enumChars.LF + 'And the poor beetle that we tread upon,' + enumChars.LF + 'In corporal sufferance feels a pang as great' + enumChars.LF + 'As when a giant dies.'], ['Measure for Measure AIIIS1L83', 'If I must die' + enumChars.LF + 'I will encounter darkness as a bride,' + enumChars.LF + 'And hug it in mine arms.'], ['Measure for Measure AIIIS1L118', 'Ay, but to die, and go we know not where;' + enumChars.LF + 'To lie in cold obstruction and to rot.'], ['Measure for Measure AIIIS1L124', 'To be imprison\'d in the viewless winds,' + enumChars.LF + 'And blown with restless violence roundabout' + enumChars.LF + 'The pendent world; or to be worse than worst' + enumChars.LF + 'Of those, that lawless and incertain thought' + enumChars.LF + 'Imagine howling; \'tis too horrible!'], ['Measure for Measure AIIIS1L129', 'The weariest and most loathed worldly life' + enumChars.LF + 'That age, ache, penury and imprisonment' + enumChars.LF + 'Can lay on nature, is a paradise' + enumChars.LF + 'To what we fear of death.'], ['Richard II AIIIS2L102', 'Woe, destruction, ruin, and decay;' + enumChars.LF + 'The worst is death, and death will have his day.'], ['Richard II AIIIS2L148', 'Let\'s choose executors and talk of wills:' + enumChars.LF + 'And yet not so, for what can we bequeath,' + enumChars.LF + 'Save our desposed bodies to the ground?'], ['Richard II AIIIS2L152', 'Nothing can we call our own but death' + enumChars.LF + 'And that small model of the barren earth' + enumChars.LF + 'Which serves as paste and cover to our bones.'], ['Richard II AIIIS2L161', 'Within the hollow crown' + enumChars.LF + 'That rounds the mortal temples of a king,' + enumChars.LF + 'Keeps Death his court; and there the antic sits,' + enumChars.LF + 'Scoffing his state and grinning at his pomp.'], ['Richard II AIVS1L97', 'And there at Venice gave' + enumChars.LF + 'His body to that pleasant country\'s earth,' + enumChars.LF + 'And his pure soul unto his captain Christ,' + enumChars.LF + 'Under whose colours he had fought so long.'], ['Richard II AVS5L107', 'Go thou, and fill another room in hell.' + enumChars.LF + 'That hand shall burn in never-quenching fire,' + enumChars.LF + 'That staggers thus my person. Exton, thy fierce hand' + enumChars.LF + 'Hath with thy king\'s blood stain\'d the king\'s own land.' + enumChars.LF + 'Mount, mount, my soul! thy seat is up on high;' + enumChars.LF + 'Whilst my gross flesh sinks downward, here to die.'], ['Romeo and Juliet AIVS5L28', 'Death lies on her, like an untimely frost' + enumChars.LF + 'Upon the sweetest flower of all the field.'], ['Romeo and Juliet AVS3L88', 'How oft, when men are at the point of death,' + enumChars.LF + 'Have they been merry! which their keepers call' + enumChars.LF + 'A lightning before death.'], ['Romeo and Juliet AVS3L92', 'Death, that hath suck\'d the honey of thy breath,' + enumChars.LF + 'Hath had no power yet upon thy beauty;' + enumChars.LF + 'Thou art not conquer\'d; beauty\'s ensign yet' + enumChars.LF + 'Is crimson in thy lips, and in thy cheeks,' + enumChars.LF + 'And death\'s pale flag is not advanced there.'], ['Romeo and Juliet AVS3L112', 'Eyes, look your last!' + enumChars.LF + 'Arms, take your last embrace! and lips, O you' + enumChars.LF + 'The doors of breath, seal with a righteous kiss' + enumChars.LF + 'A dateless bargain to engrossing death.'], ['Cymbeline AIVS2L262', 'Golden lads and girls all must,' + enumChars.LF + 'As chimney-sweepers, come to dust.'], ['Henry IV, Part I AIVS1L133', 'Come, let us take a muster speedily:' + enumChars.LF + 'Doomsday is near; die all, die merrily.'], ['Henry IV, Part I AVS2L14', 'And we shall feed like oxen at a stall,' + enumChars.LF + 'The better cherish\'d, still the nearer death.'], ['Henry IV, Part II AIIIS2L250', 'A man can die but once; we owe God a death.'], ['Henry IV, Part II AVS3L126', 'What, is the old king dead?' + enumChars.LF + 'As nail in door.'], ['Henry V AIIS3L12', 'A\' made a finer end and went away an it had been any christom child; a\' parted even just between twelve and one, e\'en at the turning o\' th\' tide: for after I saw him fumble with the sheets, and play with flowers, and smile upon his fingers\' ends, I knew there was but one way; for his nose was as sharp as a pen, and a\' babbled of green fields. \'How now, Sir John?\' quoth I: \'what, man! be o\' good cheer.\' So a\' cried out—\'God, God, God!\' three or four times. Now I, to comfort him, bid him a\' should not think of God; I hoped there was no need to trouble himself with any such thoughts yet.'], ['Henry VI, Part II AIIIS3L5', 'Ah, what a sign it is of evil life,' + enumChars.LF + 'Where death\'s approach is seen so terrible!'], ['Henry VI, Part II AIIIS3L28', 'He dies, and makes no sign.'], ['Henry VI, Part III AVS2L8', 'My sick heart shows' + enumChars.LF + 'That I must yield my body to the earth,' + enumChars.LF + 'And, by my fall, the conquest to my foe.' + enumChars.LF + 'Thus yields the cedar to the axe\'s edge,' + enumChars.LF + 'Whose arms gave shelter to the princely eagle;' + enumChars.LF + 'Under whose shade the ramping lion slept:' + enumChars.LF + 'Whose top-branch overpeer\'d Jove\'s spreading tree,' + enumChars.LF + 'And kept low shrubs from winter\'s powerful wind.'], ['Henry VI, Part III AVS2L27', 'Why, what is pomp, rule, reign, but earth and dust?' + enumChars.LF + 'And, live we how we can, yet die we must.'], ['Henry VIII AIVS2L29', 'He gave his honours to the world again,' + enumChars.LF + 'His blessed part to heaven, and slept in peace.'], ['King John AIIIS4L34', 'Death, death; oh, amiable, lovely death!' + enumChars.LF + 'Come, grin on me, and I will think thou smilest.'], ['King John AIVS2L82', 'We cannot hold mortality\'s strong hand.'], ['King John AVS4L22', 'Have I not hideous death within my view,' + enumChars.LF + 'Retaining but a quantity of life' + enumChars.LF + 'Which bleeds away, even as a form of wax' + enumChars.LF + 'Resolveth from its figure \'gainst the fire?'], ['King Lear AVS3L184', 'O, our lives\' sweetness!' + enumChars.LF + 'That we the pain of death would hourly die' + enumChars.LF + 'Rather than die at once!'], ['Macbeth AIS4L7', 'Nothing in his life' + enumChars.LF + 'Became him like the leaving it.'], ['Macbeth AIIIS2L23', 'After life\'s fitful fever, he sleeps well;' + enumChars.LF + 'Treason has done his worst: nor steel, nor poison,' + enumChars.LF + 'Malice domestic, foreign levy, nothing,' + enumChars.LF + 'Can touch him further.'], ['The Merchant of Venice AIVS1L114', 'I am a tainted wether of the flock,' + enumChars.LF + 'Meetest for death; the weakest kind of fruit' + enumChars.LF + 'Drops earliest to the ground, and so let me.'], ['Othello AVS2L267', 'Here is my journey\'s end, here is my butt,' + enumChars.LF + 'And very sea-mark of my utmost sail.'], ['Richard III AIS4L45', 'Who pass\'d, methought, the melancholy flood' + enumChars.LF + 'With that grim ferryman which poets write of,' + enumChars.LF + 'Unto the kingdom of perpetual night.'], ['Richard III AIIIS2L64', '\'Tis a vile thing to die, my gracious lord,' + enumChars.LF + 'When men are unprepared and look not for it.'], ['The Tempest AIS1L70', 'The wills above be done! but I would fain die a dry death.'], ['The Tempest AIIIS2L140', 'He that dies pays all debts.'], ['Twelfth Night AIIS4L52', 'Come away, come away, death,' + enumChars.LF + 'And in sad cypress let me be laid;' + enumChars.LF + 'Fly away, fly away, breath:' + enumChars.LF + 'I am slain by a fair cruel maid.' + enumChars.LF + 'My shroud of white, stuck all with yew,' + enumChars.LF + 'Oh, prepare it!' + enumChars.LF + 'My part of death no one so true' + enumChars.LF + 'Did share it.'], ['Twelfth Night AIIIS4L39', 'The youth that you see here' + enumChars.LF + 'I snatch\'d one half out of the jaws of death.'], ['Venus and Adonis L1019', 'For he being dead, with him is beauty slain,' + enumChars.LF + 'And, beauty dead, black chaos comes again.'], ['All\'s Well That Ends Well AIS1', 'Love all, trust a few,' + enumChars.LF + 'Do wrong to none'], ['All\'s Well That Ends Well AVS3L5', 'But love that comes too late,' + enumChars.LF + 'Like a remorseful pardon slowly carried,' + enumChars.LF + 'To the great sender turns a sour offence.'], ['As You Like It AIIS4L34', 'If thou remember\'st not the slightest folly' + enumChars.LF + 'That ever love did make thee run into,' + enumChars.LF + 'Thou hast not lov\'d.'], ['As You Like It AIIS4L53-56', 'We that are true lovers run into strange capers; but as all is mortal in nature, so is all nature in love mortal in folly.'], ['As You Like It AIIIS2L245', 'It is as easy to count atomies as to resolve the propositions of a lover.'], ['As You Like It AIIIS2L418', 'But are you so much in love as your rhymes speak?' + enumChars.LF + 'Neither rhyme nor reason can express how much.'], ['As You Like It AIVS1L208', 'O coz, coz, coz, my pretty little coz, that thou didst know how many fathom deep I am in love! But it cannot be sounded; my affection hath an unknown bottom, like the bay of Portugal.'], ['As You Like It AVS2L36', 'No sooner met but they looked, no sooner looked but they loved, no sooner loved but they sighed, no sooner sighed but they asked one another the reason.'], ['As You Like It AVS2L89', 'Good shepherd, tell this youth what \'tis to love.' + enumChars.LF + 'It is to be all made of sighs and tears;—It is to be all made of faith and service;—It is to be all made of fantasy.'], ['Hamlet AIIS1L102', 'This is the very ecstasy of love' + enumChars.LF + 'Whose violent property foredoes itself,' + enumChars.LF + 'And leads the will to desperate undertakings.'], ['Hamlet AIIS2L115', 'Doubt thou the stars are fire. Doubt that the sun doth move. Doubt truth to be a liar. But never doubt I love.'], ['Hamlet AIIS2L188', 'He is far gone, far gone: and truly in my youth I suffered much extremity for love; very near this.'], ['Hamlet AIIIS2L181', 'Where love is great, the littlest doubts are fear;' + enumChars.LF + 'When little fears grow great, great love grows there.'], ['Hamlet AVS1L292', 'Forty thousand brothers' + enumChars.LF + 'Could not, with all their quantity of love,' + enumChars.LF + 'Make up my sum.'], ['Love\'s Labour\'s Lost AIVS3.' + enumChars.LF + 'Son', 'Love, whose month is ever May,' + enumChars.LF + 'Spied a blossom passing fair,' + enumChars.LF + 'Playing in the wanton air:' + enumChars.LF + 'Through the velvet leaves the wind,' + enumChars.LF + 'All unseen can passage find;' + enumChars.LF + 'That the lover, sick to death,' + enumChars.LF + 'Wish\'d himself the heaven\'s breath.'], ['Love\'s Labour\'s Lost AIVS3L10', 'By heaven, I do love: and it hath taught me to rhyme, and to be melancholy.'], ['Love\'s Labour\'s Lost AIVS3L143', 'You would for paradise break faith and troth,' + enumChars.LF + 'And Jove, for your love, would infringe an oath.'], ['Love\'s Labour\'s Lost AIVS3L334', 'A lover\'s eyes will gaze an eagle blind.' + enumChars.LF + 'A lover\'s ear will hear the lowest sound.'], ['Love\'s Labour\'s Lost AIVS3L339', 'Love\'s tongue proves dainty Bacchus gross in taste:' + enumChars.LF + 'For valour, is not Love a Hercules,' + enumChars.LF + 'Still climbing trees in the Hesperides?'], ['Love\'s Labour\'s Lost AIVS3L344', 'And when Love speaks, the voice of all the gods' + enumChars.LF + 'Makes heaven drowsy with the harmony.'], ['The Merchant of Venice AIIS6L36', 'But love is good, and lovers cannot view themselves unto thee.' + enumChars.LF + 'The pretty follies that themselves commit.'], ['The Merchant of Venice AIIS9L91', 'Yet I have not seen' + enumChars.LF + 'So likely ayeyeye n ambassador of love;' + enumChars.LF + 'A day in April never came so sweet,' + enumChars.LF + 'To show how costly summer was at hand,' + enumChars.LF + 'As this fore-spurrer comes before his lord.'], ['The Merchant of Venice AIIIS2L206', 'And swearing till my very roof was dry' + enumChars.LF + 'With oaths of love.'], ['A Midsummer Night\'s Dream AIIS3', 'Good night, sweet friend: thy love ne\'er alter, till thy sweet life end'], ['A Midsummer Night\'s Dream AIS1, lines 132-34', 'Ay me! for aught that I ever could read,' + enumChars.LF + 'Could ever hear by tale or history,' + enumChars.LF + 'The course of true love never did run smooth.'], ['A Midsummer Night\'s Dream AIS1L234', 'Love looks not with the eyes, but with the mind;' + enumChars.LF + 'And therefore is winged Cupid painted blind.'], ['A Midsummer Night\'s Dream AVS1L104', 'Love, therefore, and tongue-tied simplicity' + enumChars.LF + 'In least speak most, to my capacity.'], ['Much Ado About Nothing AIS1', 'When you depart from me sorrow abides, and happiness takes his leave.'], ['Much Ado About Nothing AIIS1L102', 'Speak low, if you speak love.'], ['Much Ado About Nothing AIIS1L182', 'Friendship is constant in all other things' + enumChars.LF + 'Save in the office and affairs of love:' + enumChars.LF + 'Therefore, all hearts in love use their own tongues;' + enumChars.LF + 'Let every eye negotiate for itself' + enumChars.LF + 'And trust no agent.'], ['Much Ado About Nothing AIIIS1L106', 'Some Cupid kills with arrows, some with traps.'], ['Othello AIS3L166', 'Upon this hint I spake;' + enumChars.LF + 'She lov\'d me for the dangers I had pass\'d,' + enumChars.LF + 'And I lov\'d her, that she did pity them.' + enumChars.LF + 'This only is the witchcraft I have us\'d:' + enumChars.LF + 'Here comes the lady; let her witness it.'], ['Othello AIIIS3L89', 'Perdition catch my soul,' + enumChars.LF + 'But I do love thee! and when I love thee not,' + enumChars.LF + 'Chaos is come again.'], ['Othello AIIIS4L173', 'What! keep a week away? seven days and nights?' + enumChars.LF + 'Eight score eight hours? and lovers\' absent hours,' + enumChars.LF + 'More tedious than the dial eight score times?' + enumChars.LF + 'O, weary reckoning!'], ['Othello AVS2L144', 'If heaven would make me such another world' + enumChars.LF + 'Of one entire and perfect chrysolite,' + enumChars.LF + 'I\'ld not have sold her for it.'], ['Othello AVS2L383. ', 'Speak of me as I am; nothing extenuate' + enumChars.LF + 'Nor set down aught in malice: then must you speak' + enumChars.LF + 'Of one that loved not wisely, but too well;' + enumChars.LF + 'Of one not easily jealous, but, being wrought,' + enumChars.LF + 'Perplexed in the extreme: of one, whose hand' + enumChars.LF + 'Like the base Indian, threw a pearl away,' + enumChars.LF + 'Richer than all his tribe: of one, whose subdued eyes,' + enumChars.LF + 'Albeit unused to the melting mood,' + enumChars.LF + 'Drop tears as fast as the Arabian trees' + enumChars.LF + 'Their medicinal gum.'], ['Romeo and Juliet AIS1 ', 'From love\'s weak childish bow she lives unharmed.'], ['Romeo and Juliet AIS1L184', 'Love is a smoke rais\'d with the fume of sighs;' + enumChars.LF + 'Being purg\'d, a fire sparkling in a lover\'s eyes;' + enumChars.LF + 'Being vex\'d, a sea nourish\'d with lovers\' tears:' + enumChars.LF + 'What is it else? a madness most discreet,' + enumChars.LF + 'A choking gall and a preserving sweet.'], ['Romeo and Juliet AIS5L0', 'Steal love\'s sweet bait from fearful hooks.'], ['Romeo and Juliet AIIS1L9', 'Speak but one rhyme, and I am satisfied;' + enumChars.LF + 'Cry but—\'Ay me!\' pronounce but \'love\' and \'dove.\''], ['Romeo and Juliet AIIS2L23', 'See, how she leans her cheek upon her hand!' + enumChars.LF + 'O, that I were a glove upon that hand,' + enumChars.LF + 'That I might touch that cheek!'], ['Romeo and Juliet AIIS2L33', 'O, Romeo, Romeo! wherefore art thou, Romeo?'], ['Romeo and Juliet AIIS2L67', 'For stony limits cannot hold love out,' + enumChars.LF + 'And what love can do that dares love attempt.'], ['Romeo and Juliet AIIS2L92', 'At lovers\' perjuries,' + enumChars.LF + 'They say, Jove laughs.'], ['Romeo and Juliet AIIS2L133', 'My bounty is as boundless as the sea,' + enumChars.LF + 'My love as deep; the more I give to thee' + enumChars.LF + 'The more I have, for both are infinite.'], ['Romeo and Juliet AIIS2L156', 'Love goes toward love, as school-boys from their books,' + enumChars.LF + 'But love from love, toward school with heavy looks.'], ['Romeo and Juliet AIIS2L165', 'It is my soul that calls upon my name;' + enumChars.LF + 'How silver-sweet sound lovers\' tongues by night,' + enumChars.LF + 'Like soft music to attending ears.'], ['Romeo and Juliet AIIS2L177', '\'Tis almost morning; I would have thee gone:' + enumChars.LF + 'And yet no further than a wanton\'s bird;' + enumChars.LF + 'Who lets it hop a little from her hand,' + enumChars.LF + 'Like a poor prisoner in his twisted gyves,' + enumChars.LF + 'And with a silk thread plucks it back again,' + enumChars.LF + 'So loving-jealous of his liberty.'], ['Romeo and Juliet AIIS2L184', 'Good night, good night! parting is such sweet sorrow,' + enumChars.LF + 'That I shall say good night till it be morrow.'], ['Romeo and Juliet AIIS5L4', 'Love\'s heralds should be thoughts,' + enumChars.LF + 'Which ten times faster glide than the sun\'s beams,' + enumChars.LF + 'Driving back shadows over louring hills;' + enumChars.LF + 'Therefore do nimble-pinion\'d doves draw love,' + enumChars.LF + 'And therefore hath the wind-swift Cupid wings.'], ['Romeo and Juliet AIIS6L14', 'Therefore love moderately; long love doth so;' + enumChars.LF + 'Too swift arrives as tardy as too slow.'], ['Romeo and Juliet AIIIS2L21', 'Give me my Romeo; and, when he shall die,' + enumChars.LF + 'Take him, and cut him out in little stars,' + enumChars.LF + 'And he will make the face of heaven so fine,' + enumChars.LF + 'And all the world will be in love with night,' + enumChars.LF + 'And pay no worship to the garish sun.'], ['Troilus and Cressida AIIIS1L00', 'Sweet, above thought I love thee.'], ['Troilus and Cressida AIIIS2L91', 'They say all lovers swear more performance than they are able, and yet reserve an ability that they never perform.'], ['Troilus and Cressida AIIIS2L163', 'For to be wise, and love' + enumChars.LF + 'Exceeds man\'s might; that dwells with gods above.'], ['Troilus and Cressida AIVS1L33', 'The noblest hateful love that e\'er I heard of.'], ['Twelfth Night AISIL1', 'If music be the food of love, play on;' + enumChars.LF + 'Give me excess of it, that, surfeiting,' + enumChars.LF + 'The appetite may sicken, and so die.'], ['Twelfth Night AIS1L9', 'O spirit of love! how quick and fresh art thou,' + enumChars.LF + 'That notwithstanding thy capacity' + enumChars.LF + 'Receiveth as the sea, nought enters there,' + enumChars.LF + 'Of what validity and pitch soe\'er,' + enumChars.LF + 'But falls into abatement and low price,' + enumChars.LF + 'Even in a minute!'], ['Twelfth Night AIIS3L44', 'Journeys end in lovers meeting,' + enumChars.LF + 'Every wise man\'s son doth know.'], ['Twelfth Night AIIS4L37', 'Then let thy love be younger than thyself,' + enumChars.LF + 'Or thy affection cannot hold the bent.'], ['Twelfth Night AIIS4L114', 'She never told her love,' + enumChars.LF + 'But let concealment, like a [worm] i\' the bud,' + enumChars.LF + 'Feed on her damask cheek; she pin\'d in thought,' + enumChars.LF + 'And with a green and yellow melancholy' + enumChars.LF + 'She sat like patience on a monument,' + enumChars.LF + 'Smiling at grief.'], ['Twelfth Night AIIIS1L167', 'Love sought is good, but giv\'n unsought is better.'], ['The Two Gentlemen of Verona AIS1L23', 'For he was more than over shoes in love.'], ['The Two Gentlemen of Verona AIS1L39', 'Love is your master, for he masters you;' + enumChars.LF + 'And he that is so yoked by a fool,' + enumChars.LF + 'Methinks, should not be chronicled for wise.'], ['The Two Gentlemen of Verona AIS1L45', 'And writers say, as the most forward bud' + enumChars.LF + 'Is eaten by the canker ere it blow,' + enumChars.LF + 'Even so by love the young and tender wit' + enumChars.LF + 'Is turn\'d to folly, blasting in the bud,' + enumChars.LF + 'Losing his verdure even in the prime.'], ['The Two Gentlemen of Verona AIS2L57', 'How wayward is this foolish love,' + enumChars.LF + 'That, like a testy babe, will scratch the nurse' + enumChars.LF + 'And presently, all humbled, kiss the rod.'], ['The Two Gentlemen of Verona AIS3L84', 'O, how this spring of love resembleth' + enumChars.LF + 'Th\' uncertain glory of an April day,' + enumChars.LF + 'Which now shows all the beauty of the sun,' + enumChars.LF + 'And by and by a cloud takes all away!'], ['The Two Gentlemen of Verona AIIS7L18', 'Didst thou but know the inly touch of love,' + enumChars.LF + 'Thou wouldst as soon go kindle fire with snow,' + enumChars.LF + 'As seek to quench the fire of love with words.'], ['The Two Gentlemen of Verona AIIS7L21', 'I do not seek to quench your love\'s hot fire,' + enumChars.LF + 'But qualify the fire\'s extreme rage,' + enumChars.LF + 'Lest it should burn above the bounds of reason.'], ['The Two Gentlemen of Verona AIIIS1L178', 'Except I be by Sylvia in the night,' + enumChars.LF + 'There is no music in the nightingale.'], ['The Two Gentlemen of Verona AIS2', 'They do not love that do not show their love.'], ['Venus and Adonis line 123', 'Love keeps his revels where there are but twain.'], ['Venus and Adonis line 202', 'What \'tis to love? how want of love tormenteth?'], ['Venus and Adonis line 799', 'Love comforteth like sunshine after rain'], ['Venus and Adonis line 781', 'Love\'s gentle spring doth always fresh remain'], ['Antony and Cleopatra AIS1L15', 'There\'s beggary in the love that can be reckoned.'], ['Cymbeline AIVS2L20', 'I know not why' + enumChars.LF + 'I love this youth; and I have heard you say,' + enumChars.LF + 'Love\'s reason\'s without reason.'], ['Henry VI, Part I AIS1', 'I can express no kinder sign of love, than this kind kiss.'], ['Henry VI, Part I AIIIS1', 'Love for thy love, and hand for hand I give.'], ['Henry VI, Part II AIIIS2', 'For where thou art, there is the world itself, and where thou art not, desolation'], ['Henry VIII #Date)), AIIIS2L444', 'Love thyself last: cherish those hearts that hate thee.'], ['Julius Caesar AIIIS2L22', 'Not that I lov\'d Caesar less, but that I lov\'d Rome more.'], ['Julius Caesar AIIIS1L189', 'Though last, not least in love!'], ['King John AIIS1', 'Upon thy cheek I lay this zealous kiss,' + enumChars.LF + 'As seal to the indenture of my love'], ['King Lear AIS1L52', 'Which of you shall we say doth love us most?' + enumChars.LF + 'That we our largest bounty may extend' + enumChars.LF + 'Where nature doth with merit challenge.'], ['Merry Wives of Windsor AIIS2L217', 'Love like a shadow flies when substance love pursues;' + enumChars.LF + 'Pursuing that that flies, and flying what pursues.'], ['Richard III AVS3L200', 'There is no creature loves me,' + enumChars.LF + 'And if I die, no soul shall pity me.']]);

// copyright: hbr.org
// link: https://hbr.org/2017/09/could-your-personality-derail-your-career
const DarkTraits = {
  bold: 'overly self-confident, entitled, with an inflated sense of self-worth',
  cautious: 'unassertive, resistant to change, slow to make dicisions',
  colorful: 'dramatic, attention-seeking, tends to interrupt rather than listen',
  diligent: 'meticulous, precise, detail-oriented',
  dutiful: 'eager to please, reluctant to act independently or express disagreement',
  excitable: 'moody, easily annoyed, hard to please, emotionally unstable',
  imaginative: 'thinks and acts in unusual or eccentric ways',
  leisurely: 'overtly cooperative but privately irritably, stubborn, uncooperative',
  mischievous: 'risk-taking, limit-testing, excitement-seeking',
  reserved: 'aloof, indifferenct to others\' feelings',
  skeptical: 'distrustful, cynical, sensitive to criticism, focused on the negative'
};

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */

const ObjectCollection = {
  get CarPlants() {
    return CarPlants;
  },

  get DarkTraits() {
    return DarkTraits;
  },

  get FilmActors() {
    return FilmActors;
  },

  get FilmActresses() {
    return FilmActresses;
  },

  get FilmDirectors() {
    return FilmDirectors;
  },

  get MilitaryRobots() {
    return MilitaryRobots;
  },

  get Pastas() {
    return Pastas;
  },

  get MovieQuotes() {
    return MovieQuotes;
  },

  get ShakesQuote() {
    return ShakesQuote;
  }

};
util.FlopShuffleMaker.defineForObject(ObjectCollection);

exports.CarPlants = CarPlants;
exports.FilmActors = FilmActors;
exports.FilmActresses = FilmActresses;
exports.FilmDirectors = FilmDirectors;
exports.Foba = ObjectCollection;
exports.MilitaryRobots = MilitaryRobots;
exports.MovieQuotes = MovieQuotes;
exports.ObjectCollection = ObjectCollection;
exports.Pastas = Pastas;
exports.ShakesQuote = ShakesQuote;
