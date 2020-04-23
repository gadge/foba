import { CrostabCollection } from '@foba/crostab';
import { flopKey } from '@aryth/rand';
import { FlopShuffleMaker, sizeOscillator } from '@foba/util';
export { makeEmbedded } from '@foba/util';
import { Ziggurat } from 'roulett';
import { abs } from '@aryth/math';
import { ObjectCollection as ObjectCollection$2 } from '@foba/object-number';
import { ObjectCollection as ObjectCollection$3 } from '@foba/object-string';
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector';

const crosXMatricesRobust = ({
  h,
  w
} = {}) => {
  var _CrostabCollection;

  let key = (_CrostabCollection = CrostabCollection, flopKey(_CrostabCollection));
  const {
    side,
    head,
    rows
  } = CrostabCollection.flopShuffle({
    p: key,
    h,
    w
  });
  return {
    null: null,
    undefined: undefined,
    numeric: key.length,
    string: key,
    emptyVector: [],
    emptyEntry: [,],
    side: side,
    head: head,
    oneRow: [head.slice()],
    oneColumn: side.map(x => [x]),
    rows: rows
  };
};
const CrosXMatricesRobust = crosXMatricesRobust();

const actors = ['Jeremy', 'Kevin', 'Robert', 'Gérard', 'Richard', 'Anthony', 'Warren', 'Robert', 'Nick', 'Robin', 'Al', 'Robert', 'Clint', 'Stephen', 'Denzel', 'Tom', 'Daniel', 'Laurence', 'Anthony', 'Liam', 'Tom', 'Morgan', 'Nigel', 'Paul', 'John', 'Nicolas', 'Richard', 'Anthony', 'Sean', 'Massimo', 'Geoffrey', 'Tom', 'Ralph', 'Woody', 'Billy', 'Jack', 'Matt', 'Robert', 'Peter', 'Dustin', 'Roberto', 'Tom', 'Ian', 'Nick', 'Edward', 'Kevin', 'Russell', 'Richard', 'Sean', 'Denzel', 'Russell', 'Javier', 'Tom', 'Ed', 'Geoffrey', 'Denzel', 'Russell', 'Sean', 'Will', 'Tom', 'Adrien', 'Nicolas', 'Michael', 'Daniel', 'Jack', 'Sean', 'Johnny', 'Ben', 'Jude', 'Bill', 'Jamie', 'Don', 'Johnny', 'Leonardo', 'Clint', 'Philip', 'Terrence', 'Heath', 'Joaquin', 'David', 'Forest', 'Leonardo', 'Ryan', 'Peter', 'Will', 'Daniel', 'George', 'Johnny', 'Tommy', 'Viggo', 'Sean', 'Richard', 'Frank', 'Brad', 'Mickey', 'Jeff', 'George', 'Colin', 'Morgan', 'Jeremy'];
const actresses = ['Kathy', 'Anjelica', 'Julia', 'Meryl', 'Joanne', 'Jodie', 'Geena', 'Laura', 'Bette', 'Susan', 'Emma', 'Catherine', 'Mary', 'Michelle', 'Susan', 'Holly', 'Angela', 'Stockard', 'Emma', 'Debra', 'Jessica', 'Jodie', 'Miranda', 'Winona', 'Susan', 'Susan', 'Elisabeth', 'Sharon', 'Meryl', 'Emma', 'Frances', 'Brenda', 'Diane', 'Kristin', 'Emily', 'Helen', 'Helena', 'Julie', 'Judi', 'Kate', 'Gwyneth', 'Cate', 'Fernanda', 'Meryl', 'Emily', 'Hilary', 'Annette', 'Janet', 'Julianne', 'Meryl', 'Julia', 'Joan', 'Juliette', 'Ellen', 'Laura', 'Halle', 'Judi', 'Nicole', 'Sissy', 'Renée', 'Nicole', 'Salma', 'Diane', 'Julianne', 'Renée', 'Charlize', 'Keisha', 'Diane', 'Samantha', 'Naomi', 'Hilary', 'Annette', 'Catalina', 'Imelda', 'Kate', 'Reese', 'Judi', 'Felicity', 'Keira', 'Charlize', 'Helen', 'Penélope', 'Judi', 'Meryl', 'Kate', 'Marion', 'Cate', 'Julie', 'Laura', 'Ellen', 'Kate', 'Anne', 'Angelina', 'Melissa', 'Meryl', 'Sandra', 'Helen', 'Carey', 'Gabourey', 'Meryl'];
const directors = ['Kevin', 'Francis', 'Stephen', 'Barbet', 'Martin', 'Jonathan', 'Barry', 'Ridley', 'John', 'Oliver', 'Clint', 'Robert', 'Martin', 'James', 'Neil', 'Steven', 'Robert', 'Jane', 'James', 'Jim', 'Robert', 'Woody', 'Krzysztof', 'Robert', 'Quentin', 'Mel', 'Mike', 'Chris', 'Michael', 'Tim', 'Anthony', 'Joel', 'Miloš', 'Scott', 'Mike', 'James', 'Peter', 'Atom', 'Curtis', 'Gus', 'Steven', 'Roberto', 'John', 'Terrence', 'Peter', 'Sam', 'Lasse', 'Spike', 'Michael', 'M', 'Steven', 'Stephen', 'Ang', 'Ridley', 'Steven', 'Ron', 'Robert', 'Peter', 'David', 'Roman', 'Ridley', 'Pedro', 'Stephen', 'Rob', 'Peter', 'Martin', 'Sofia', 'Clint', 'Fernando', 'Peter', 'Clint', 'Taylor', 'Mike', 'Alexander', 'Martin', 'Ang', 'George', 'Paul', 'Bennett', 'Steven', 'Martin', 'Clint', 'Stephen', 'Alejandro', 'Paul', 'Joel', 'Ethan', 'Paul', 'Tony', 'Jason', 'Julian', 'Danny', 'Stephen', 'David', 'Ron', 'Gus', 'James', 'Kathryn', 'Lee', 'Jason', 'Quentin'];

const briefName = name => {
  name = name.split(' ');
  let last = '';

  do {
    last = name.pop() + last;
  } while (last === 'Jr.');

  return name.map(([initial]) => initial + '.').join('') + last;
}; // in millions USD


const ArmSales = {
  LockheedMartin: 47260,
  Boeing: 29150,
  NorthropGrumman: 26190,
  Raytheon: 23440,
  GeneralDynamics: 22000,
  BAESystemsUK: 21210,
  AirbusGroup: 11650,
  BAESystemsUS: 10800,
  Leonardo: 9820,
  AlmazAntey: 9640,
  Thales: 9470,
  UnitedTechnologies: 9310,
  L3Technologies: 8250,
  HuntingtonIngallsInd: 7200,
  HoneywellIntr: 5430,
  UnitedAircraft: 5420,
  Leidos: 5000,
  Harris: 4970,
  UnitedShipbuilding: 4700,
  BoozAllenHamilton: 4680,
  RollsRoyce: 4680,
  NavalGroup: 4220,
  Rheinmetall: 3800,
  MBDA: 3780,
  GeneralElectric: 3650,
  MitsubishiHeavyInd: 3620,
  TacticalMissiles: 3600,
  Textron: 3500,
  ElbitSystems: 3500,
  CACIIntr: 3490,
  Saab: 3240,
  Safran: 3240,
  Sandia: 3200,
  BabcockIntr: 3180,
  UnitedEngine: 2950,
  DassaultAviation: 2930,
  ScienceApplicationsIntr: 2800,
  AECOM: 2770,
  GeneralAtomics: 2750,
  HindustanAeronautics: 2740,
  AirbusHelicoptersInc: 2730,
  IsraelAerospaceInd: 2650,
  HighPrecisionSystems: 2630,
  RockwellCollins: 2630,
  KBR: 2600,
  Perspecta: 2590,
  Rafael: 2540,
  RussianElectronics: 2330,
  HanwhaAerospace: 2320,
  CEA: 2300,
  KawasakiHeavyInd: 2260,
  BellHelicopterTextron: 2030,
  Bechtel: 2000,
  Fincantieri: 1900,
  Oshkosh: 1850,
  RussianHelicopters: 1810,
  KRET: 1770,
  ASELSAN: 1740,
  KraussMaffeiWegmann: 1680,
  IndianOrdnanceFactories: 1650,
  ThyssenKrupp: 1650,
  Cobham: 1590,
  DynCorpIntr: 1560,
  KoreaAerospaceInd: 1550,
  STEngineering: 1540,
  BharatElectronics: 1460,
  ManTechIntr: 1430,
  UralVagonZavod: 1370,
  JacobsEngineering: 1370,
  Fluor: 1350,
  LIGNex1: 1340,
  TransDigm: 1330,
  GKN: 1320,
  MelroseInd: 1320,
  UnitedLaunchAlliance: 1320,
  UkrOboronProm: 1300,
  Fujitsu: 1270,
  SercoGroup: 1260,
  PGZ: 1250,
  TeledyneTechnologies: 1240,
  Navantia: 1240,
  Hensoldt: 1240,
  Vectrus: 1230,
  AerojetRocketdyne: 1220,
  AustalUSA: 1160,
  Austal: 1140,
  SierraNevada: 1100,
  IHI: 1090,
  Nexter: 1080,
  TurkishAerospaceInd: 1070,
  BWXTechnologies: 1070,
  Engility: 1070,
  CAE: 1010,
  MIT: 980,
  Meggitt: 970,
  CurtissWright: 970,
  TheAerospace: 970,
  DevonportRoyalDockyard: 940,
  Ball: 930,
  Moog: 920,
  QinetiQ: 910,
  RUAG: 900,
  ViaSat: 860,
  MitsubishiElectric: 860,
  Arconic: 840,
  NEC: 840,
  Amphenol: 820
};
const BrentPrices = {
  '2020': 61.25,
  '2019': 64.37,
  '2018': 71.34,
  '2017': 54.13,
  '2016': 43.64,
  '2015': 52.32,
  '2014': 98.97,
  '2013': 108.56,
  '2012': 111.63,
  '2011': 111.26,
  '2010': 79.61,
  '2009': 61.74,
  '2008': 96.94,
  '2007': 72.44,
  '2006': 65.16,
  '2005': 54.57,
  '2004': 38.26,
  '2003': 28.85,
  '2002': 24.99,
  '2001': 24.46,
  '2000': 28.66,
  '1999': 17.90,
  '1998': 12.76,
  '1997': 19.11,
  '1996': 20.64,
  '1995': 17.02,
  '1994': 15.86,
  '1993': 17.01,
  '1992': 19.32,
  '1991': 20.04,
  '1990': 23.76,
  '1989': 18.23,
  '1988': 14.91,
  '1987': 18.53
};
const CityPopulations = {
  PearlRiverDelta: 46.7,
  Tokyo: 40.4,
  Shanghai: 33.6,
  Jakarta: 31.3,
  Delhi: 30.3,
  Manila: 25.7,
  Bombay: 25.1,
  Seoul: 24.8,
  MexicoCity: 23.0,
  SãoPaulo: 22.4,
  NewYork: 22.1,
  Cairo: 21.0,
  Dacca: 20.2,
  Beijing: 19.8,
  Lagos: 19.4,
  Bangkok: 18.8,
  Karachi: 17.8,
  LosAngeles: 17.7,
  Osaka: 17.7,
  Moscow: 17.3,
  Calcutta: 16.8,
  BuenosAires: 16.4,
  Istanbul: 16.0,
  Tehran: 15.3,
  London: 14.8,
  Johannesburg: 13.9,
  RiodeJaneiro: 13.2,
  Lahore: 13.0,
  Tientsin: 12.7,
  Kinshasa: 12.4,
  Bangalore: 12.2,
  Paris: 11.4,
  Madras: 11.3,
  Nagoya: 10.5,
  HyderabadIndia: 10.2,
  Lima: 10.1,
  Xiamen: 10.0,
  Chicago: 9.8,
  Bogotá: 9.6,
  Chengtu: 9.6,
  Taipei: 9.2,
  Wuhan: 9.1,
  KualaLumpur: 8.9,
  Saigon: 8.6,
  Washington: 8.6,
  Ahmedabad: 8.5,
  Hangchou: 8.5,
  Chungking: 8.2,
  Luanda: 8.2,
  Riyadh: 8.1,
  Shenyang: 8.0,
  Singapore: 7.9,
  SanFrancisco: 7.9,
  Boston: 7.8,
  Shantou: 7.7,
  HongKong: 7.5,
  Toronto: 7.5,
  Philadelphia: 7.4,
  Santiago: 7.3,
  Dallas: 7.2,
  Baghdad: 7.0,
  Bandung: 7.0,
  Sian: 7.0,
  Poona: 6.9,
  Houston: 6.8,
  Nanking: 6.6,
  Surat: 6.6,
  Madrid: 6.6,
  DaresSalaam: 6.5,
  Miami: 6.4,
  Khartoum: 6.3,
  Milan: 6.2,
  Tsingtao: 6.1,
  Surabaya: 6.1,
  Nairobi: 5.9,
  Atlanta: 5.9,
  Alexandria: 5.8,
  Detroit: 5.8,
  TheRuhr: 5.7,
  SaintPetersburg: 5.7,
  Abidjan: 5.6,
  Amman: 5.6,
  Rangoon: 5.6,
  Dubai: 5.4,
  Guadalajara: 5.4,
  Wenzhou: 5.4,
  Sydney: 5.3,
  Accra: 5.1,
  Harbin: 5.1,
  Ankara: 5.1,
  BeloHorizonte: 5.0,
  CologneDusseldorf: 5.0,
  Monterrey: 5.0,
  MelbourneAus: 5.0,
  Hofei: 5.0,
  Jeddah: 5.0,
  Zhengzhou: 5.0,
  Changsha: 4.9,
  Chittagong: 4.9,
  Barcelona: 4.8,
  KuwaitCity: 4.8,
  Colombo: 4.8,
  Berlin: 4.7,
  Kano: 4.7,
  Phoenix: 4.7,
  Shijiazhuang: 4.6,
  Dairen: 4.6,
  Casablanca: 4.5,
  Jinan: 4.5,
  Seattle: 4.4,
  Tampa: 4.4,
  Kabul: 4.3,
  Kunming: 4.3,
  CapeTown: 4.2,
  Montreal: 4.2,
  Naples: 4.2,
  Pusan: 4.1,
  PortoAlegre: 4.1,
  Taiyuan: 4.1,
  Ürümqi: 4.1,
  Fuzhou: 4.0,
  Medellín: 4.0,
  Brasília: 4.0,
  Medan: 4.0,
  SantoDomingo: 4.0,
  Algiers: 4.0,
  Jaipur: 4.0,
  Nanchang: 3.9,
  Recife: 3.9,
  Damascus: 3.8,
  AddisAbaba: 3.8,
  Hanoi: 3.8,
  Caracas: 3.8,
  Denver: 3.8,
  Dakar: 3.7,
  Lucknow: 3.7,
  Changchun: 3.7,
  Fortaleza: 3.7,
  Faisalabad: 3.7,
  Salvador: 3.6,
  Ibadan: 3.6,
  Rome: 3.6,
  Abuja: 3.5,
  Bamako: 3.5,
  Kampala: 3.5,
  Zibo: 3.5,
  Kanpur: 3.5,
  Kiev: 3.5,
  Nanning: 3.5,
  Orlando: 3.5,
  Rawalpindi: 3.5,
  Yaoundé: 3.5,
  Curitiba: 3.4,
  Durban: 3.4,
  Douala: 3.4,
  Athens: 3.4,
  SanDiego: 3.4,
  Guiyang: 3.3,
  Nagpur: 3.3,
  Ningbo: 3.3,
  FrankfurtamMain: 3.3,
  Rotterdam: 3.3,
  PortAuPrince: 3.2,
  Tashkent: 3.2,
  Campinas: 3.2,
  Isfahan: 3.2,
  Meshed: 3.2,
  Indore: 3.2,
  Minneapolis: 3.2,
  Puebla: 3.2,
  Birmingham: 3.2,
  Brisbane: 3.2,
  GuatemalaCity: 3.2,
  Guayaquil: 3.2,
  Kathmandu: 3.1,
  Cleveland: 3.1,
  Manchester: 3.1,
  Izmir: 3.0,
  Kumasi: 3.0,
  Pyongyang: 3.0,
  Bhilai: 2.9,
  Lanzhou: 2.9,
  Cali: 2.9,
  Hamburg: 2.9,
  Tangshan: 2.9,
  Vancouver: 2.9,
  Xuzhou: 2.9,
  Huizhou: 2.8,
  Sana_a: 2.8,
  Cincinnati: 2.8,
  Kaohsiung: 2.8,
  Gujranwala: 2.8,
  Taegu: 2.8,
  Fukuoka: 2.8,
  Cebu: 2.7,
  Quito: 2.7,
  Brussels: 2.7,
  Coimbatore: 2.7,
  TelAviv_Jaffa: 2.7,
  Lusaka: 2.7,
  Patna: 2.7,
  Tunis: 2.7,
  Anshan: 2.6,
  Budapest: 2.6,
  Maracaibo: 2.6,
  Ouagadougou: 2.6,
  Baku: 2.6,
  Luoyang: 2.6,
  Conakry: 2.5,
  Dammam: 2.5,
  Sapporo: 2.5,
  Amsterdam: 2.5,
  Charlotte: 2.5,
  Jiangyin: 2.5,
  Lisbon: 2.5,
  SaltLakeCity: 2.5,
  Doha: 2.4,
  Bhopal: 2.4,
  Goiânia: 2.4,
  Portland: 2.4,
  Taichung: 2.4,
  Stuttgart: 2.4,
  SanJosé: 2.4,
  Warsaw: 2.4,
  Asunción: 2.4,
  Chandigarh: 2.4,
  Katowice: 2.4,
  Peshawar: 2.4,
  PortHarcourt: 2.4,
  StLouis: 2.4,
  Toluca: 2.3,
  Agra: 2.3,
  Taizhou: 2.3,
  HyderabadPakistan: 2.3,
  LasVegas: 2.3,
  Maputo: 2.3,
  Brazzaville: 2.3,
  Munich: 2.3,
  Semarang: 2.3,
  Vienna: 2.3,
  Baotou: 2.2,
  Belém: 2.2,
  Havana: 2.2,
  SanAntonio: 2.2,
  Stockholm: 2.2,
  Vadodara: 2.2,
  Bucharest: 2.2,
  Lubumbashi: 2.2,
  Manaus: 2.2,
  Okayama: 2.2,
  Vishakhapatnam: 2.2,
  Yantai: 2.2,
  Leeds: 2.2,
  SantaCruz: 2.2,
  GeorgeTown: 2.1,
  LaPaz: 2.1,
  Mecca: 2.1,
  Xinxiang: 2.1,
  Alma_Ata: 2.1,
  Barranquilla: 2.1,
  Lomé: 2.1,
  Multan: 2.1,
  Baoding: 2.1,
  Bursa: 2.1,
  Mbuji_Mayi: 2.1,
  Nasik: 2.1,
  Perth: 2.1,
  PhnomPenh: 2.1,
  Sacramento: 2.1,
  Harare: 2.1,
  Linyi: 2.1,
  Pittsburgh: 2.1,
  Rabat: 2.1,
  Cixi: 2.0,
  Indianapolis: 2.0,
  Kitakyushu: 2.0,
  Liuzhou: 2.0,
  Minsk: 2.0,
  ValenciaVenuezuela: 2.0,
  Vijayawada: 2.0,
  KansasCity: 2.0,
  Nantong: 2.0,
  Weifang: 2.0,
  Huai_an: 2.0,
  Ludhiana: 2.0,
  Lyon: 2.0,
  Tijuana: 2.0,
  Austin: 2.0,
  Gaza: 2.0,
  Yangzhou: 2.0,
  León: 1.9,
  Mogadishu: 1.9,
  Benares: 1.9,
  Yogyakarta: 1.9,
  Huainan: 1.9,
  SanJuan: 1.9,
  Aleppo: 1.9,
  Bhubaneswar: 1.9,
  SanSalvador: 1.9,
  Makassar: 1.9,
  Rajkot: 1.9,
  Hiroshima: 1.9,
  Kaduna: 1.9,
  Liverpool: 1.9,
  Xiangyang: 1.9,
  Hohhot: 1.9,
  Haikou: 1.9,
  Montevideo: 1.9,
  Vitória: 1.9,
  ValenciaSpain: 1.8,
  Cotonou: 1.8,
  Tabriz: 1.8,
  Aurangabad: 1.8,
  Freetown: 1.8,
  Madurai: 1.8,
  Shiraz: 1.8,
  Columbus: 1.8,
  Beirut: 1.8,
  Malang: 1.8,
  Zhuhai: 1.8,
  Adana: 1.7,
  Meerut: 1.7,
  Santos: 1.7,
  NizhnyNovgorod: 1.7,
  Palembang: 1.7,
  Anyang: 1.7,
  Hartford: 1.7,
  Hengyang: 1.7,
  Novosibirsk: 1.7,
  Glasgow: 1.7,
  Copenhagen: 1.7,
  Córdoba: 1.7,
  Gaziantep: 1.7,
  Handan: 1.7,
  Jamshedpur: 1.7,
  Yekaterinburg: 1.7,
  Marseille: 1.7,
  Raleigh: 1.7,
  Yiwu: 1.7,
  BeninCity: 1.7,
  Datong: 1.7,
  Kharkiv: 1.6,
  Turin: 1.6,
  Surakarta: 1.6,
  Daqing: 1.6,
  Āsansol: 1.6,
  VirginiaBeach: 1.6,
  Kwangju: 1.6,
  Srinagar: 1.6,
  Cochin: 1.6,
  Monrovia: 1.6,
  Mannheim: 1.6,
  Davao: 1.6,
  Sheffield: 1.6,
  Guilin: 1.6,
  Mandalay: 1.6,
  Denpasar: 1.6,
  Milwaukee: 1.6,
  Medina: 1.5,
  Bengbu: 1.5,
  PanamaCity: 1.5,
  Taejon: 1.5,
  Jilin: 1.5,
  Porto: 1.5,
  Manama: 1.5,
  Basra: 1.5,
  Huaibei: 1.5,
  Xingtai: 1.5,
  AbuDhabi: 1.5,
  Calgary: 1.5,
  CiudadJuárez: 1.5,
  Ganzhou: 1.5,
  Sendai: 1.5,
  Yerevan: 1.5,
  Angeles: 1.5,
  Jabalpur: 1.5,
  Jodhpur: 1.5,
  Nashville: 1.5,
  Newcastle: 1.5,
  Oran: 1.5,
  Wuhu: 1.5,
  Zhangjiakou: 1.5,
  Jiaozuo: 1.5,
  Yinchuan: 1.5,
  Allahabad: 1.5,
  Xining: 1.5,
  Jacksonville: 1.5,
  Tai_an: 1.5,
  Donetsk: 1.4,
  Prague: 1.4,
  Querétaro: 1.4,
  SãoLuís: 1.4,
  Muscat: 1.4,
  Ranchi: 1.4,
  Zurich: 1.4,
  Belgrade: 1.4,
  Maoming: 1.4,
  Maracay: 1.4,
  Yancheng: 1.4,
  Auckland: 1.4,
  Chelyabinsk: 1.4,
  Cochabamba: 1.4,
  Natal: 1.4,
  Ndjamena: 1.4,
  Volgograd: 1.4,
  Mosul: 1.4,
  Amritsar: 1.4,
  Gwalior: 1.4,
  Tirupur: 1.4,
  UlanBator: 1.4,
  Xiangtan: 1.4,
  Ashgabat: 1.4,
  Batam: 1.4,
  Dnepropetrovsk: 1.4,
  Dublin: 1.4,
  Ahvaz: 1.4,
  Dhanbad: 1.4,
  Nottingham: 1.4,
  Putian: 1.4,
  Yichang: 1.4,
  Edmonton: 1.4,
  Kotā: 1.4,
  Rosario: 1.4,
  Torreón: 1.4,
  Buffalo: 1.4,
  Chonburi: 1.4,
  PortElizabeth: 1.4,
  Tbilisi: 1.4,
  Adelaide: 1.3,
  Tananarive: 1.3,
  Harrisburg: 1.3,
  Qinhuangdao: 1.3,
  Zhuzhou: 1.3,
  Managua: 1.3,
  Bareilly: 1.3,
  Hamamatsu: 1.3,
  Tainan: 1.3,
  Zhanjiang: 1.3,
  Antalya: 1.3,
  Barquisimeto: 1.3,
  Helsinki: 1.3,
  Konya: 1.3,
  McAllen: 1.3,
  Niamey: 1.3,
  Rostov_on_Don: 1.3,
  Samara: 1.3,
  Sofia: 1.3,
  Lille: 1.3,
  Qom: 1.3,
  Sevilla: 1.3,
  Fes: 1.3,
  Nouakchott: 1.3,
  Bucaramanga: 1.3,
  Kazan: 1.3,
  Morādābād: 1.3,
  Nanyang: 1.3,
  Stockton: 1.3,
  Benguela: 1.3,
  Ottawa: 1.3,
  Tripoli: 1.3,
  Zunyi: 1.3,
  Alīgarh: 1.2,
  Jining: 1.2,
  Kananga: 1.2,
  Mianyang: 1.2,
  Mysore: 1.2,
  Rizhao: 1.2,
  SanLuisPotosí: 1.2,
  Antwerp: 1.2,
  Mombasa: 1.2,
  Nanchong: 1.2,
  Pekanbaru: 1.2,
  Fuyang: 1.2,
  Jingzhou: 1.2,
  Maiduguri: 1.2,
  Naha: 1.2,
  SanPedroSula: 1.2,
  Tiruchirappalli: 1.2,
  BandarLampung: 1.2,
  Baoji: 1.2,
  Karawang: 1.2,
  MelbourneUS: 1.2,
  Nuremberg: 1.2,
  Onitsha: 1.2,
  Weihai: 1.2,
  Agadir: 1.2,
  Bangui: 1.2,
  Oslo: 1.2,
  Kigali: 1.2,
  Luzhou: 1.2,
  Ma_anshan: 1.2,
  Pointe_Noire: 1.2,
  Aguascalientes: 1.2,
  Changde: 1.2,
  Kisangani: 1.2,
  Memphis: 1.2,
  Southampton: 1.2,
  Aba: 1.2,
  Hanover: 1.2,
  Kumamoto: 1.2,
  Lianyungang: 1.2,
  Mérida: 1.2,
  Serang: 1.2,
  Tegucigalpa: 1.2,
  Yueyang: 1.2,
  Zhenjiang: 1.2,
  Gauhati: 1.1,
  Hubli_Dharwar: 1.1,
  OklahomaCity: 1.1,
  Quetta: 1.1,
  Shizuoka: 1.1,
  Sousse: 1.1,
  Wanzhou: 1.1,
  Cartagena: 1.1,
  Ulanhad: 1.1,
  Greensboro: 1.1,
  JoãoPessoa: 1.1,
  Krasnoyarsk: 1.1,
  Suzhou: 1.1,
  Ufa: 1.1,
  Cirebon: 1.1,
  Jullundur: 1.1,
  Kaifeng: 1.1,
  Marrakesh: 1.1,
  Nur_Sultan: 1.1,
  Omsk: 1.1,
  Cangnan: 1.1,
  Maceió: 1.1,
  Odessa: 1.1,
  Perm: 1.1,
  Salem: 1.1,
  Tangier: 1.1,
  Ulsan: 1.1,
  Benxi: 1.1,
  Jinzhou: 1.1,
  Khulna: 1.1,
  Erbil: 1.1,
  Bishkek: 1.1,
  CapeCoral: 1.1,
  Kayseri: 1.1,
  Mendoza: 1.1,
  Saratov: 1.1,
  Sholapur: 1.1,
  Arequipa: 1.1,
  Bordeaux: 1.1,
  Touba: 1.1,
  Ilorin: 1.1,
  Qingyuan: 1.1,
  Richmond: 1.1,
  Lilongwe: 1.1,
  Louisville: 1.1,
  Mexicali: 1.1,
  Tengzhou: 1.1,
  Voronezh: 1.1,
  Zaozhuang: 1.1,
  Changshu: 1.1,
  Cuernavaca: 1.1,
  Qiqihar: 1.1,
  Shymkent: 1.1,
  Suqian: 1.1,
  Changwon: 1.0,
  Changzhi: 1.0,
  Diyarbakır: 1.0,
  Pingxiang: 1.0,
  Teresina: 1.0,
  Toulouse: 1.0,
  ElPaso: 1.0,
  Kirkuk: 1.0,
  Málaga: 1.0,
  Panjin: 1.0,
  Yibin: 1.0,
  Zigong: 1.0,
  Jos: 1.0,
  Kermānshāh: 1.0,
  Calicut: 1.0,
  Pingdingshan: 1.0,
  SanMigueldeTucumán: 1.0,
  Shiliguri: 1.0,
  Valparaíso: 1.0,
  DaNang: 1.0,
  Dushanbe: 1.0,
  Florence: 1.0,
  NewOrleans: 1.0,
  Yingkou: 1.0,
  Banjul: 1.0,
  Bremen: 1.0,
  Enugu: 1.0,
  Florianópolis: 1.0,
  Hechuan: 1.0,
  Honolulu: 1.0,
  Jiaxing: 1.0,
  Mersin: 1.0,
  Morelia: 1.0,
  Tucson: 1.0,
  Warri: 1.0,
  Zaria: 1.0
}; // https://en.wikipedia.org/wiki/List_of_causes_of_death_by_rate
// data by deaths per 100,000

const MortalityRates = {
  'Cardiovascular': 268.8,
  'InfectiousAndParasitic': 211.3,
  'CoronaryArtery': 115.8,
  'MalignantNeoplasms': 114.4,
  'Cerebrovascular': 88.5,
  'RespiratoryInfections': 63.7,
  'LowerRespiratoryTractInfections': 62.4,
  'Respiratory': 59.5,
  'UnintentionalInjuries': 57.0,
  'HIV': 44.6,
  'ChronicObstructivePulmonary': 44.1,
  'PerinatalConditions': 39.6,
  'Digestive': 31.6,
  'Diarrhea': 28.9,
  'IntentionalInjuries': 26.0,
  'Tuberculosis': 25.2,
  'Malaria': 20.4,
  'LungCancer': 20.0
};
const PowerCars = {
  Evija: 1471,
  Speedtail: 772,
  Valhalla: 746,
  SF90Stradale: 735,
  SiánFKP37: 603,
  Jesko: 1177,
  Valkyrie: 865,
  Battista: 1408,
  'TSR-S': 878,
  One: 813,
  ChallengerDemon: 626,
  Chiron: 1103,
  Regera: 1103,
  AgeraRS: 1000,
  LaFerrari: 708,
  P1: 673,
  '918Spyder': 652,
  VeyronSuperSport: 883,
  UltimateAeroTT: 960,
  ST1: 812,
  CCR: 601
}; // https://en.wikipedia.org/wiki/List_of_recessions_in_the_United_States

const Recessions = {
  1929: -26.7,
  1937: -18.2,
  1945: -12.7,
  1949: -1.7,
  1953: -2.6,
  1958: -3.7,
  1960: -1.6,
  1969: -0.6,
  1973: -3.2,
  1980: -2.2,
  1981: -2.7,
  1990: -1.4,
  2001: -0.3,
  2008: -5.1
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
  ArmSales,
  BrentPrices,
  CityPopulations,
  MortalityRates,
  PowerCars,
  Recessions
};
FlopShuffleMaker.defineForObject(ObjectCollection);

const init = entries => {
  let o = {};

  for (let [k, v] of entries) o[k] = v;

  return o;
};

const LF = '\n';
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
const MovieQuotes = init([['Love Story', `Love means never having to say you're sorry.`], ['Braveheart', `They may take our lives, but they'll never take our freedom!`], ['In the Heat of the Night', `They call me Mister Tibbs!`], ['When Harry Met Sally', `When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.`], ['Taken', `If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.`], ['Jerry Maguire', `You complete me.`], ['Gladiator', `My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next.`], ['There Will Be Blood', `I drink your milkshake!`], ['Planet of the Apes', `Get your stinking paws off me, you damned dirty ape!`], ['As Good as It Gets', `You make me want to be a better man.`], ['Clueless', `As if!`], ['Star Wars Episode VII: The Force Awakens', `Chewie, we're home.`], ['Chinatown', `Forget it, Jake. It's Chinatown.`], ['This Is Spinal Tap', `These go to eleven.`], ['Midnight Cowboy', `I'm walking here! I'm walking here!`], ['King Kong', `It was Beauty killed the Beast.`], ['The Treasure of the Sierra Madre', `Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!`], ['The Devil Wears Prada', `I'm just one stomach flu away from my goal weight.`], ['Pulp Fiction', `They call it a Royale with cheese.`], ['Poltergeist', `They're here!`], ['Snow White and the Seven Dwarves', `Magic Mirror on the wall, who is the fairest one of all?`], ['The Godfather: Part III', `Just when I thought I was out, they pull me back in.`], ['Some Like It Hot', `Nobody's perfect.`], ['Rocky', `Yo, Adrian!`], ['The Karate Kid', `Wax on, wax off.`], ['The Jazz Singer', `You ain't heard nothin' yet!`], ['Dr. Strangelove', `Gentlemen, you can't fight in here! This is the war room!`], ['12 Years a Slave', `I don't want to survive. I want to live.`], ['The Adventures of Sherlock Holmes', `Elementary, my dear Watson.`], ['Babe', `That'll do, pig. That'll do.`], ['Brokeback Mountain', `I wish I knew how to quit you.`], ['Good Morning', `Good morning, Vietnam!`], ['The Lord of the Rings: The Two Towers', `My precious.`], ['Argo', `Argo f— yourself.`], ['Frankenstein', `It's alive! It's alive!`], ['A Streetcar Named Desire', `I have always depended on the kindness of strangers.`], ['Sudden Impact', `Go ahead, make my day.`], ['Goodfellas', `I mean, funny like I'm a clown? I amuse you?`], ['Star Wars', `Help me, Obi-Wan Kenobi. You're my only hope.`], ['To Have and Have Not', `You know how to whistle, don't you, Steve? You just put your lips together and blow.`], ['The Help', `You is kind. You is smart. You is important.`], ['Gone With the Wind', `After all, tomorrow is another day!`], ['A Streetcar Named Desire', `Stella! Hey, Stella!`], ['The Wizard of Oz', `Pay no attention to that man behind the curtain!`], ['Notting Hill', `I'm also just a girl, standing in front of a boy, asking him to love her.`], ['The Big Lebowski', `The Dude abides.`], ['Terminator 2: Judgment Day', `Hasta la vista, baby.`], ['The Wizard of Oz', `I'll get you, my pretty, and your little dog, too!`], ['Casablanca', `Play it, Sam. Play 'As Time Goes By.'`], ['The Silence of the Lambs', `I'm having an old friend for dinner.`], ['Who Framed Roger Rabbit', `I'm not bad. I'm just drawn that way.`], ['Field of Dreams', `If you build it, he will come.`], ['Finding Nemo', `Just keep swimming.`], ['Forrest Gump', `Mama says, 'Stupid is as stupid does.'`], ['Titanic', `I'm the king of the world!`], ['Goldfinger', `Shaken, not stirred.`], ['Cool Hand Luke', `What we've got here is a failure to communicate.`], ['Sunset Boulevard', `I am big! It's the pictures that got small.`], ['It\'s a Wonderful Life', `Every time a bell rings, an angel gets his wings.`], ['The Godfather', `Keep your friends close, but your enemies closer.`], ['The Usual Suspects', `The greatest trick the devil ever pulled was convincing the world he didn't exist.`], ['Network', `I'm as mad as hell, and I'm not going to take this anymore!`], ['On the Waterfront', `You don't understand! I could've had class. I could've been a contender. I could've been somebody, instead of a bum, which is what I am.`], ['Back to the Future', `Roads? Where we're going we don't need roads.`], ['All About Eve', `Fasten your seatbelts. It's going to be a bumpy night.`], ['Apocalypse Now', `I love the smell of napalm in the morning.`], ['Dirty Harry', `You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya punk?`], ['Scarface', `Say hello to my little friend!`], ['Jerry Maguire', `Show me the money!`], ['The Godfather', `Leave the gun. Take the cannoli.`], ['Dead Poets Society', `Carpe diem. Seize the day, boys.`], ['The Graduate', `Mrs. Robinson, you're trying to seduce me, aren't you?`], ['Airplane', `I am serious. And don't call me Shirley.`], ['The Shining', `Here's Johnny!`], ['A League of Their Own', `There's no crying in baseball!`], ['Jerry Maguire', `You had me at hello.`], ['Apollo 13', `Houston, we have a problem.`], ['Toy Story', `To infinity and beyond!`], ['Die Hard', `Yippie-ki-yay, motherf—er!`], ['E.T. the Extra-Terrestrial', `E.T. phone home.`], ['A Few Good Men', `You can't handle the truth!`], ['The Terminator', `I'll be back.`], ['The Sixth Sense', `I see dead people.`], ['Dr. No', `Bond. James Bond.`], ['Casablanca', `We'll always have Paris.`], ['Casablanca', `This is the beginning of a beautiful friendship.`], ['When Harry Met Sally', `I'll have what she's having.`], ['The Dark Knight', `Why so serious?`], ['The Princess Bride', `Hello. My name is Inigo Montoya. You killed my father. Prepare to die.`], ['Star Wars Episode V: The Empire Strikes Back', `I am your father.`], ['Fight Club', `The first rule of Fight Club is: You do not talk about Fight Club.`], ['The Wizard of Oz', `There's no place like home.`], ['Taxi Driver', `You talkin' to me?`], ['Casablanca', `Of all the gin joints in all the towns in all the world, she walks into mine.`], ['The Godfather', `I'm going to make him an offer he can't refuse.`], ['The Wizard of Oz', `Toto, I've a feeling we're not in Kansas anymore.`], ['Star Wars', `May the Force be with you.`], ['Jaws', `You're gonna need a bigger boat.`], ['Casablanca', `Here's looking at you, kid.`], ['Gone With the Wind', `Frankly, my dear, I don't give a damn.`]]); // (?<=[a-z])(?=[A-Z]) -> '+LF+'

const ShakesQuote = init([['Richard, AIS1, Richard III', 'Now is the winter of our discontent' + LF + 'Made glorious summer by this sun of York.'], ['The Rape of Lucrece', 'Beauty itself doth of itself persuade' + LF + 'The eyes of men without an orator.'], [`Falstaff, AVS4, Henry IV, P1`, 'The better part of valour is discretion; in the which better part I have saved my life.'], ['Hamlet AIIS2', 'What a piece of work is man, How noble in reason, how infinite in faculty, In form and moving how express and admirable, In action how like an Angel, In apprehension how like a god, The beauty of the world, The paragon of animals. And yet to me, what is this quintessence of dust? Man delights not me; no, nor Woman neither;'], ['All\'s Well That Ends Well AIVS3L80', 'web of our life is of a mingled yarn, good and ill together.'], ['Antony and Cleopatra AIS2L32', 'O excellent! I love long life better than figs.'], ['As You Like It AIIS1L15', 'And this **our life, exempt from public haunt,' + LF + 'Finds tongues in trees, books in the running brooks,' + LF + 'Sermons in stones, and good in everything.**'], ['As You Like It AIIS7L25', 'And so, from hour to hour, we ripe and ripe.' + LF + 'And then, from hour to hour, we rot and rot;' + LF + 'And thereby hangs a tale.'], ['Hamlet AIS4L66', 'Why, what should be the fear?' + LF + 'I do not set my life at a pin\'s fee.'], ['Hamlet AIIIS1', '**To be, or not to be,—that is the question**:—Whether \'tis nobler in the mind to suffer' + LF + 'The slings and arrows of outrageous fortune,' + LF + 'Or to take arms against a sea of troubles,' + LF + 'And by opposing end them?—To die, to sleep,—No more; and by a sleep to say we end' + LF + 'The heart-ache, and the thousand natural shocks' + LF + 'That flesh is heir to,—\'tis a consummation' + LF + 'Devoutly to be wish\'d. To die, to sleep;—To sleep, perchance to dream:—ay, there\'s the rub;' + LF + 'For in that sleep of death what dreams may come,' + LF + 'When we have shuffled off this mortal coil,' + LF + 'Must give us pause: there\'s the respect' + LF + 'That makes calamity of so long life;' + LF + 'For who would bear the whips and scorns of time,' + LF + 'The oppressor\'s wrong, the proud man\'s contumely,' + LF + 'The pangs of despis\'d love, the law\'s delay,' + LF + 'The insolence of office, and the spurn' + LF + 'That patient merit of the unworthy takes,' + LF + 'When he himself might his quietus make' + LF + 'With a bare bodkin? who would these fardels bear,' + LF + 'To grunt and sweat under a weary life,' + LF + 'But that the dread of something after death,—The undiscover\'d country, from whose bourn' + LF + 'No traveller returns,—puzzles the will,' + LF + 'And makes us rather bear those ills we have' + LF + 'Than fly to others that we know naught of?' + LF + 'Thus conscience does make cowards of us all;' + LF + 'And thus the native hue of resolution' + LF + 'Is sicklied o\'er with the pale cast of thought;' + LF + 'And enterprises of great pith and moment,' + LF + 'With this regard, their currents turn awry,' + LF + 'And lose the name of action.'], ['Hamlet AVS2L74', 'And a man\'s life\'s no more than to say \'One.\''], ['Henry IV, Part I AVS2L82', 'O gentlemen, the time of life is short!' + LF + 'To spend that shortness basely were too long,' + LF + 'If life did ride upon a dial\'s point,' + LF + 'Still ending at the arrival of an hour.'], ['Henry V AIVS5L23.', 'Let life be short: else shame will be too long.'], ['Henry VI, Part III AIS4L25', 'The sands are number\'d that make up my life;' + LF + 'Here must I stay, and here my life must end.'], ['Henry VIII AIIIS2L350', 'So farewell to the little good you bear me.' + LF + 'Farewell! a long farewell, to all my greatness!' + LF + 'This is the state of man: to-day he puts forth' + LF + 'The tender leaves of hopes; to-morrow blossoms,' + LF + 'And bears his blushing honours thick upon him;' + LF + 'The third day comes a frost, a killing frost,' + LF + 'And, when he thinks, good easy man, full surely' + LF + 'His greatness is a-ripening, nips his root,' + LF + 'And then he falls, as I do. I have ventur\'d,' + LF + 'Like little wanton boys that swim on bladders,' + LF + 'This many summers in a sea of glory,' + LF + 'But far beyond my depth. My high-blown pride' + LF + 'At length broke under me, and now has left me,' + LF + 'Weary and old with service, to the mercy' + LF + 'Of a rude stream that must for ever hide me.' + LF + 'Vain pomp and glory of this world, I hate ye!' + LF + 'I feel my heart new open\'d. O, how wretched' + LF + 'Is that poor man that hangs on princes\' favours!' + LF + 'There is, betwixt that smile we would aspire to,' + LF + 'That sweet aspect of princes, and their ruin,' + LF + 'More pangs and fears than wars or women have;' + LF + 'And when he falls, he falls like Lucifer,' + LF + 'Never to hope again.'], ['Julius Caesar AIS2L93', 'I cannot tell what you and other men' + LF + 'Think of this life; but, for my single self,' + LF + 'I had as lief not be as live to be' + LF + 'In awe of such a thing as I myself.'], ['Julius Caesar AVS3L23', 'This day I breathed first: time is come round,' + LF + 'And where I did begin there shall I end;' + LF + 'My life is run his compass.'], ['King John AIIIS4L108', 'Life is as tedious as a twice-told tale,' + LF + 'Vexing the dull ear of a drowsy man.'], ['King Lear AIVS6L55', '**Thy life\'s a miracle.**'], ['King Lear AIVS6L186', 'When we are born, we cry, that we are come' + LF + 'To this great stage of fools.'], ['Julius Caesar AIS3L93', 'Nor stony tower, nor walls of beaten brass,' + LF + 'Nor airless dungeon, nor strong links of iron,' + LF + 'Can be retentive to the strength of spirit;' + LF + 'But life, being weary of these worldly bars,' + LF + 'Never lacks power to dismiss itself.'], ['Macbeth AIS7L4', 'That but this blow' + LF + 'Might be the be-all and the end-all here,' + LF + 'But here, upon this bank and shoal of time,' + LF + 'We\'ld jump the life to come.'], ['Macbeth AIIS3L96', 'Had I but died an hour before this chance,' + LF + 'I had liv\'d a blessed time; for, from this instant,' + LF + 'There\'s nothing serious in mortality:' + LF + 'All is but toys; renown, and grace is dead;' + LF + 'The wine of life is drawn, and the mere lees' + LF + 'Is left this vault to brag of.'], ['Macbeth AIIIS1L113', 'So weary with disasters, tugg\'d with fortune,' + LF + 'That I would set my life on any chance,' + LF + 'To mend, or be rid on\'t.'], ['Macbeth AVS5L23', 'Out, out, brief candle!' + LF + 'Life\'s but a walking shadow,' + LF + 'A poor player that struts and frets his hour upon the stage, and then is heard no more:it is a tale told by an idiot, full of sound and fury, signifying nothing.'], ['Macbeth AVS8L12', 'I bear a charmed life.'], ['Measure for Measure AIIIS1L6', 'Reason thus with life:' + LF + 'If I do lose thee, I do lose a thing' + LF + 'That none but fools would keep.'], ['Merry Wives of Windsor AVS1L20', 'Life is a shuttle.'], ['Othello AIS3L128', 'Her father lov\'d me; oft invited me;' + LF + 'Still question\'d me the story of my life,' + LF + 'From year to year, the battles, sieges, fortunes,' + LF + 'That I have pass\'d.'], ['Othello AIS3L309', 'It is silliness to live when to live is torment; and then have we a prescription to die when death is our physician.'], ['Henry IV, Part I AIS3L59', 'It was great pity, so it was,' + LF + 'That villanous saltpetre should be digg\'d' + LF + 'Out of the bowels of the harmless earth,' + LF + 'Which many a good tall fellow had destroy\'d' + LF + 'So cowardly; and but for these vile guns' + LF + 'He would himself have been a soldier.'], ['Henry IV, Part I AIIS3L96', 'We must have bloody noses and crack\'d crowns,' + LF + 'And pass them current too. God\'s me, my horse!'], ['Henry IV, Part I AIVS1L114', 'The fire-eyed maid of smoky war' + LF + 'All hot and bleeding will we offer them.'], ['Henry IV, Part I AIVS2L71', 'Tut, tut; good enough to toss; food for powder, food for powder; they\'ll fill a pit as well as better.'], ['Henry IV, Part I AVS2L88', 'The arms are fair,' + LF + 'When the intent of bearing them is just.'], ['Henry IV, Part II AIVS1L154', 'Our battle is more full of names than yours,' + LF + 'Our men more perfect in the use of arms,' + LF + 'Our armour all as strong, our cause the best;' + LF + 'Then reason will our hearts should be as good.'], ['Henry IV, Part II AIVS3L45', 'That I may truly say with the hook-nosed fellow of Rome, I came, I saw, and overcame.'], ['Henry IV, Part II AVS2L33', 'O war! thou son of hell,' + LF + 'Whom angry heavens do make their minister,' + LF + 'Throw in the frozen bosoms of our part' + LF + 'Hot coals of vengeance! Let no soldier fly.' + LF + 'He that is truly dedicate to war' + LF + 'Hath no self-love, nor he that loves himself,' + LF + 'Hath not essentially but by circumstance' + LF + 'The name of valour.'], ['Henry V AIIIS1L1', 'Once more unto the breach, dear friends, once more;' + LF + 'Or close the wall up with our English dead.'], ['Henry V AIVChorusL4', 'From camp to camp through the foul womb of night' + LF + 'The hum of either army stilly sounds.'], ['Henry V AIVChorusL1', 'The armourers, accomplishing the knights,' + LF + 'With busy hammers closing rivets up,' + LF + 'Give dreadful note of preparation.'], ['Henry V AIVS1L148', 'There are few die well that die in a battle.'], ['Henry V AIVS3L35', 'He which hath no stomach to this fight,' + LF + 'Let him depart; his passport shall be made.'], ['Henry VI, Part III AIS', 'It is war\'s prize to take all vantage.'], ['Henry VI, Part III AIIS2L173', 'Sound trumpets! let our bloody colours wave!' + LF + 'And either victory, or else a grave.'], ['Henry VI, Part III AIVS1L114', 'They shall have wars and pay for their presumption.'], ['King John AIIS1L210', 'The cannons have their bowels full of wrath,' + LF + 'And ready mounted are they to spit forth' + LF + 'Their iron indignation \'gainst your walls.'], ['King John AIVS3L148', 'Now for the bare-pick\'d bone of majesty' + LF + 'Doth dogged war bristle his angry crest' + LF + 'And snarleth in the gentle eyes of peace.'], ['King John AVS2L83', 'Your breath first kindled the dead coal of wars' + LF + 'And brought in matter that should feed this fire;' + LF + 'And now \'tis far too huge to be blown out' + LF + 'With that same weak wind which enkindled it.'], ['King John AVS2L113', 'I drew this gallant head of war,' + LF + 'And cull\'d these fiery spirits from the world,' + LF + 'To outlook conquest and to win renown' + LF + 'Even in the jaws of danger and of death.'], ['Macbeth AIS1L3', 'When the hurly-burly\'s done,' + LF + 'When the battle\'s lost and won.'], ['Macbeth AVS5L1', 'Hang out our banners on the outward walls.'], ['Macbeth AVS5L51', 'Blow, wind! come, wrack!' + LF + 'At least we\'ll die with harness on our back.'], ['Macbeth AVS8L33', 'Lay on, Macduff,' + LF + 'And damn\'d be him that first cries, \'Hold, enough!\''], ['Richard II AIIS4L8', 'The bay-trees in our country all are wither\'d' + LF + 'And meteors fright the fixed stars of heaven;' + LF + 'The pale-fac\'d moon looks bloody on the earth' + LF + 'And lean-look\'d prophets whisper fearful change;' + LF + 'Rich men look sad and ruffians dance and leap,' + LF + 'The one in fear to lose what they enjoy,' + LF + 'The other to enjoy by rage and war.'], ['Richard II AIIIS3L51', 'Let\'s march without the noise of threat\'ning drum.'], ['Richard II AIIIS3L93', 'He is come to open' + LF + 'The purple testament of bleeding war.'], ['Richard III AIS1L9', 'Grim-visag\'d war hath smoothed his wrinkled front.'], ['Richard III AVS2L3', 'Thus far into the bowels of the land' + LF + 'Have we march\'d without impediment.'], ['Richard III AVS3L0', 'Conscience avaunt, Richard\'s himself again:' + LF + 'Hark! the shrill trumpet sounds, to horse, away,' + LF + 'My soul\'s in arms, and eager for the fray.'], ['Richard III AVS3L110', 'Put in their hands thy bruising irons of wrath,' + LF + 'That they may crush down with heavy fall' + LF + 'The usurping helmets of our adversaries.'], ['Richard III AVS3L338', 'Fight, gentlemen of England! fight, bold yeomen!' + LF + 'Draw, archers, draw your arrows to the head!' + LF + 'Spur your proud horses hard, and ride in blood;' + LF + 'Amaze the welkin with your broken staves!'], ['Antony and Cleopatra AIS3L99', 'And all the gods go with you! upon your sword' + LF + 'Sit laurel victory! and smooth success' + LF + 'Be strew\'d before your feet!'], ['Cymbeline AVS3L3', 'All was lost,' + LF + 'But that the heavens fought.'], ['Hamlet AVS2L285', 'Give me the cups;' + LF + 'And let the kettle to the trumpet speak,' + LF + 'The trumpet to the cannoneer without,' + LF + 'The cannons to heavens, the heavens to earth.'], ['Julius Caesar AIIIS1L270', 'Caesar\'s spirit, ranging for revenge,' + LF + 'With Até by his side come hot from hell,' + LF + 'Shall in these confines with a monarch\'s voice' + LF + 'Cry \'Havoc,\' and let slip the dogs of war.'], ['Timon of Athens AIVS3L58', 'Follow thy drum;' + LF + 'With man\'s blood paint the ground, gules, gules;' + LF + 'Religious canons, civil laws are cruel;' + LF + 'Then what should war be?'], ['Hamlet AIS2L72', 'Thou know\'st \'tis common; all that lives must die,' + LF + 'Passing through nature to eternity.'], ['Hamlet AIS2L186', 'He was an man, take him for all in all.' + LF + 'I shall not look upon his like again.'], ['Hamlet AIS4L67', 'I do not to set my life at a pin\'s fee;' + LF + 'And, for my soul, what can it do to that,' + LF + 'Being a thing immortal as itself?'], ['Hamlet AIS5L76', 'Cut off even in the blossoms of my sin,' + LF + 'Unhousel\'d, disappointed, unanel\'d;' + LF + 'No reckoning made, but sent to my account' + LF + 'With all my imperfections on my head.'], ['Hamlet AIIIS1L60', 'To die:—to sleep:' + LF + 'No more; and, by a sleep to say we end' + LF + 'The heart-ache and the thousand natural shocks' + LF + 'That flesh is heir to, \'tis a consummation' + LF + 'Devoutly to be wished.'], ['Hamlet AIIIS1L66', 'For in that sleep of death what dreams may come,' + LF + 'When we have shuffled off this mortal coil,' + LF + 'Must give us pause.'], ['Hamlet AIIIS1L76. ', 'Who would fardels bear,' + LF + 'To grunt and sweat under a weary life;' + LF + 'But that the dread of something after death,' + LF + 'The undiscover\'d country from whose bourn' + LF + 'No traveller returns, puzzles the will' + LF + 'And makes us rather bear those ills we have' + LF + 'Than fly to others that we know not of?'], ['Hamlet AVS1L259', 'We should profane the service of the dead,' + LF + 'To sing a requiem and such rest to her' + LF + 'As to peace-parted souls.'], ['Hamlet AVS2L375', 'O proud death,' + LF + 'What feast is toward in thine eternal cell,' + LF + 'That thou so many princes at a shot' + LF + 'So bloodily hast, struck?'], ['Julius Caesar AIIS2L30', 'When beggars die, there are no comets seen;' + LF + 'The heavens themselves blaze forth the death of princes.'], ['Julius Caesar AIIS2L33', 'Cowards die many times before their deaths;' + LF + 'The valiant never taste of death but once.' + LF + 'Of all the wonders that I yet have heard,' + LF + 'It seems to me most strange that men should fear;' + LF + 'Seeing that death, a necessary end,' + LF + 'Will come when it will come.'], ['Julius Caesar AIIIS1L99', 'That we shall die we know; \'tis but the time' + LF + 'And drawing days out, that men stand upon.'], ['Julius Caesar AIIIS1L101', 'He that cuts off twenty years of life' + LF + 'Cuts off so many years of fearing death.'], ['Julius Caesar AIVS3L190', 'We must die, Messala:' + LF + 'With meditating that she must die once,' + LF + 'I have the patience to endure it now.'], ['Measure for Measure AIIIS1L4', 'Be absolute for death; either death or life' + LF + 'Shall thereby be the sweeter.'], ['Measure for Measure AIIIS1L38', 'What\'s yet in this,' + LF + 'That bears the name of life? Yet in this life' + LF + 'Lie hid more thousand deaths: yet death we fear,' + LF + 'That makes these odds all even.'], ['Measure for Measure AIIIS1L77', 'Dar\'st thou die?' + LF + 'The sense of death is most in apprehension;' + LF + 'And the poor beetle that we tread upon,' + LF + 'In corporal sufferance feels a pang as great' + LF + 'As when a giant dies.'], ['Measure for Measure AIIIS1L83', 'If I must die' + LF + 'I will encounter darkness as a bride,' + LF + 'And hug it in mine arms.'], ['Measure for Measure AIIIS1L118', 'Ay, but to die, and go we know not where;' + LF + 'To lie in cold obstruction and to rot.'], ['Measure for Measure AIIIS1L124', 'To be imprison\'d in the viewless winds,' + LF + 'And blown with restless violence roundabout' + LF + 'The pendent world; or to be worse than worst' + LF + 'Of those, that lawless and incertain thought' + LF + 'Imagine howling; \'tis too horrible!'], ['Measure for Measure AIIIS1L129', 'The weariest and most loathed worldly life' + LF + 'That age, ache, penury and imprisonment' + LF + 'Can lay on nature, is a paradise' + LF + 'To what we fear of death.'], ['Richard II AIIIS2L102', 'Woe, destruction, ruin, and decay;' + LF + 'The worst is death, and death will have his day.'], ['Richard II AIIIS2L148', 'Let\'s choose executors and talk of wills:' + LF + 'And yet not so, for what can we bequeath,' + LF + 'Save our desposed bodies to the ground?'], ['Richard II AIIIS2L152', 'Nothing can we call our own but death' + LF + 'And that small model of the barren earth' + LF + 'Which serves as paste and cover to our bones.'], ['Richard II AIIIS2L161', 'Within the hollow crown' + LF + 'That rounds the mortal temples of a king,' + LF + 'Keeps Death his court; and there the antic sits,' + LF + 'Scoffing his state and grinning at his pomp.'], ['Richard II AIVS1L97', 'And there at Venice gave' + LF + 'His body to that pleasant country\'s earth,' + LF + 'And his pure soul unto his captain Christ,' + LF + 'Under whose colours he had fought so long.'], ['Richard II AVS5L107', 'Go thou, and fill another room in hell.' + LF + 'That hand shall burn in never-quenching fire,' + LF + 'That staggers thus my person. Exton, thy fierce hand' + LF + 'Hath with thy king\'s blood stain\'d the king\'s own land.' + LF + 'Mount, mount, my soul! thy seat is up on high;' + LF + 'Whilst my gross flesh sinks downward, here to die.'], ['Romeo and Juliet AIVS5L28', 'Death lies on her, like an untimely frost' + LF + 'Upon the sweetest flower of all the field.'], ['Romeo and Juliet AVS3L88', 'How oft, when men are at the point of death,' + LF + 'Have they been merry! which their keepers call' + LF + 'A lightning before death.'], ['Romeo and Juliet AVS3L92', 'Death, that hath suck\'d the honey of thy breath,' + LF + 'Hath had no power yet upon thy beauty;' + LF + 'Thou art not conquer\'d; beauty\'s ensign yet' + LF + 'Is crimson in thy lips, and in thy cheeks,' + LF + 'And death\'s pale flag is not advanced there.'], ['Romeo and Juliet AVS3L112', 'Eyes, look your last!' + LF + 'Arms, take your last embrace! and lips, O you' + LF + 'The doors of breath, seal with a righteous kiss' + LF + 'A dateless bargain to engrossing death.'], ['Cymbeline AIVS2L262', 'Golden lads and girls all must,' + LF + 'As chimney-sweepers, come to dust.'], ['Henry IV, Part I AIVS1L133', 'Come, let us take a muster speedily:' + LF + 'Doomsday is near; die all, die merrily.'], ['Henry IV, Part I AVS2L14', 'And we shall feed like oxen at a stall,' + LF + 'The better cherish\'d, still the nearer death.'], ['Henry IV, Part II AIIIS2L250', 'A man can die but once; we owe God a death.'], ['Henry IV, Part II AVS3L126', 'What, is the old king dead?' + LF + 'As nail in door.'], ['Henry V AIIS3L12', 'A\' made a finer end and went away an it had been any christom child; a\' parted even just between twelve and one, e\'en at the turning o\' th\' tide: for after I saw him fumble with the sheets, and play with flowers, and smile upon his fingers\' ends, I knew there was but one way; for his nose was as sharp as a pen, and a\' babbled of green fields. \'How now, Sir John?\' quoth I: \'what, man! be o\' good cheer.\' So a\' cried out—\'God, God, God!\' three or four times. Now I, to comfort him, bid him a\' should not think of God; I hoped there was no need to trouble himself with any such thoughts yet.'], ['Henry VI, Part II AIIIS3L5', 'Ah, what a sign it is of evil life,' + LF + 'Where death\'s approach is seen so terrible!'], ['Henry VI, Part II AIIIS3L28', 'He dies, and makes no sign.'], ['Henry VI, Part III AVS2L8', 'My sick heart shows' + LF + 'That I must yield my body to the earth,' + LF + 'And, by my fall, the conquest to my foe.' + LF + 'Thus yields the cedar to the axe\'s edge,' + LF + 'Whose arms gave shelter to the princely eagle;' + LF + 'Under whose shade the ramping lion slept:' + LF + 'Whose top-branch overpeer\'d Jove\'s spreading tree,' + LF + 'And kept low shrubs from winter\'s powerful wind.'], ['Henry VI, Part III AVS2L27', 'Why, what is pomp, rule, reign, but earth and dust?' + LF + 'And, live we how we can, yet die we must.'], ['Henry VIII AIVS2L29', 'He gave his honours to the world again,' + LF + 'His blessed part to heaven, and slept in peace.'], ['King John AIIIS4L34', 'Death, death; oh, amiable, lovely death!' + LF + 'Come, grin on me, and I will think thou smilest.'], ['King John AIVS2L82', 'We cannot hold mortality\'s strong hand.'], ['King John AVS4L22', 'Have I not hideous death within my view,' + LF + 'Retaining but a quantity of life' + LF + 'Which bleeds away, even as a form of wax' + LF + 'Resolveth from its figure \'gainst the fire?'], ['King Lear AVS3L184', 'O, our lives\' sweetness!' + LF + 'That we the pain of death would hourly die' + LF + 'Rather than die at once!'], ['Macbeth AIS4L7', 'Nothing in his life' + LF + 'Became him like the leaving it.'], ['Macbeth AIIIS2L23', 'After life\'s fitful fever, he sleeps well;' + LF + 'Treason has done his worst: nor steel, nor poison,' + LF + 'Malice domestic, foreign levy, nothing,' + LF + 'Can touch him further.'], ['The Merchant of Venice AIVS1L114', 'I am a tainted wether of the flock,' + LF + 'Meetest for death; the weakest kind of fruit' + LF + 'Drops earliest to the ground, and so let me.'], ['Othello AVS2L267', 'Here is my journey\'s end, here is my butt,' + LF + 'And very sea-mark of my utmost sail.'], ['Richard III AIS4L45', 'Who pass\'d, methought, the melancholy flood' + LF + 'With that grim ferryman which poets write of,' + LF + 'Unto the kingdom of perpetual night.'], ['Richard III AIIIS2L64', '\'Tis a vile thing to die, my gracious lord,' + LF + 'When men are unprepared and look not for it.'], ['The Tempest AIS1L70', 'The wills above be done! but I would fain die a dry death.'], ['The Tempest AIIIS2L140', 'He that dies pays all debts.'], ['Twelfth Night AIIS4L52', 'Come away, come away, death,' + LF + 'And in sad cypress let me be laid;' + LF + 'Fly away, fly away, breath:' + LF + 'I am slain by a fair cruel maid.' + LF + 'My shroud of white, stuck all with yew,' + LF + 'Oh, prepare it!' + LF + 'My part of death no one so true' + LF + 'Did share it.'], ['Twelfth Night AIIIS4L39', 'The youth that you see here' + LF + 'I snatch\'d one half out of the jaws of death.'], ['Venus and Adonis L1019', 'For he being dead, with him is beauty slain,' + LF + 'And, beauty dead, black chaos comes again.'], ['All\'s Well That Ends Well AIS1', 'Love all, trust a few,' + LF + 'Do wrong to none'], ['All\'s Well That Ends Well AVS3L5', 'But love that comes too late,' + LF + 'Like a remorseful pardon slowly carried,' + LF + 'To the great sender turns a sour offence.'], ['As You Like It AIIS4L34', 'If thou remember\'st not the slightest folly' + LF + 'That ever love did make thee run into,' + LF + 'Thou hast not lov\'d.'], ['As You Like It AIIS4L53-56', 'We that are true lovers run into strange capers; but as all is mortal in nature, so is all nature in love mortal in folly.'], ['As You Like It AIIIS2L245', 'It is as easy to count atomies as to resolve the propositions of a lover.'], ['As You Like It AIIIS2L418', 'But are you so much in love as your rhymes speak?' + LF + 'Neither rhyme nor reason can express how much.'], ['As You Like It AIVS1L208', 'O coz, coz, coz, my pretty little coz, that thou didst know how many fathom deep I am in love! But it cannot be sounded; my affection hath an unknown bottom, like the bay of Portugal.'], ['As You Like It AVS2L36', 'No sooner met but they looked, no sooner looked but they loved, no sooner loved but they sighed, no sooner sighed but they asked one another the reason.'], ['As You Like It AVS2L89', 'Good shepherd, tell this youth what \'tis to love.' + LF + 'It is to be all made of sighs and tears;—It is to be all made of faith and service;—It is to be all made of fantasy.'], ['Hamlet AIIS1L102', 'This is the very ecstasy of love' + LF + 'Whose violent property foredoes itself,' + LF + 'And leads the will to desperate undertakings.'], ['Hamlet AIIS2L115', 'Doubt thou the stars are fire. Doubt that the sun doth move. Doubt truth to be a liar. But never doubt I love.'], ['Hamlet AIIS2L188', 'He is far gone, far gone: and truly in my youth I suffered much extremity for love; very near this.'], ['Hamlet AIIIS2L181', 'Where love is great, the littlest doubts are fear;' + LF + 'When little fears grow great, great love grows there.'], ['Hamlet AVS1L292', 'Forty thousand brothers' + LF + 'Could not, with all their quantity of love,' + LF + 'Make up my sum.'], ['Love\'s Labour\'s Lost AIVS3.' + LF + 'Son', 'Love, whose month is ever May,' + LF + 'Spied a blossom passing fair,' + LF + 'Playing in the wanton air:' + LF + 'Through the velvet leaves the wind,' + LF + 'All unseen can passage find;' + LF + 'That the lover, sick to death,' + LF + 'Wish\'d himself the heaven\'s breath.'], ['Love\'s Labour\'s Lost AIVS3L10', 'By heaven, I do love: and it hath taught me to rhyme, and to be melancholy.'], ['Love\'s Labour\'s Lost AIVS3L143', 'You would for paradise break faith and troth,' + LF + 'And Jove, for your love, would infringe an oath.'], ['Love\'s Labour\'s Lost AIVS3L334', 'A lover\'s eyes will gaze an eagle blind.' + LF + 'A lover\'s ear will hear the lowest sound.'], ['Love\'s Labour\'s Lost AIVS3L339', 'Love\'s tongue proves dainty Bacchus gross in taste:' + LF + 'For valour, is not Love a Hercules,' + LF + 'Still climbing trees in the Hesperides?'], ['Love\'s Labour\'s Lost AIVS3L344', 'And when Love speaks, the voice of all the gods' + LF + 'Makes heaven drowsy with the harmony.'], ['The Merchant of Venice AIIS6L36', 'But love is good, and lovers cannot view themselves unto thee.' + LF + 'The pretty follies that themselves commit.'], ['The Merchant of Venice AIIS9L91', 'Yet I have not seen' + LF + 'So likely ayeyeye n ambassador of love;' + LF + 'A day in April never came so sweet,' + LF + 'To show how costly summer was at hand,' + LF + 'As this fore-spurrer comes before his lord.'], ['The Merchant of Venice AIIIS2L206', 'And swearing till my very roof was dry' + LF + 'With oaths of love.'], ['A Midsummer Night\'s Dream AIIS3', 'Good night, sweet friend: thy love ne\'er alter, till thy sweet life end'], ['A Midsummer Night\'s Dream AIS1, lines 132-34', 'Ay me! for aught that I ever could read,' + LF + 'Could ever hear by tale or history,' + LF + 'The course of true love never did run smooth.'], ['A Midsummer Night\'s Dream AIS1L234', 'Love looks not with the eyes, but with the mind;' + LF + 'And therefore is winged Cupid painted blind.'], ['A Midsummer Night\'s Dream AVS1L104', 'Love, therefore, and tongue-tied simplicity' + LF + 'In least speak most, to my capacity.'], ['Much Ado About Nothing AIS1', 'When you depart from me sorrow abides, and happiness takes his leave.'], ['Much Ado About Nothing AIIS1L102', 'Speak low, if you speak love.'], ['Much Ado About Nothing AIIS1L182', 'Friendship is constant in all other things' + LF + 'Save in the office and affairs of love:' + LF + 'Therefore, all hearts in love use their own tongues;' + LF + 'Let every eye negotiate for itself' + LF + 'And trust no agent.'], ['Much Ado About Nothing AIIIS1L106', 'Some Cupid kills with arrows, some with traps.'], ['Othello AIS3L166', 'Upon this hint I spake;' + LF + 'She lov\'d me for the dangers I had pass\'d,' + LF + 'And I lov\'d her, that she did pity them.' + LF + 'This only is the witchcraft I have us\'d:' + LF + 'Here comes the lady; let her witness it.'], ['Othello AIIIS3L89', 'Perdition catch my soul,' + LF + 'But I do love thee! and when I love thee not,' + LF + 'Chaos is come again.'], ['Othello AIIIS4L173', 'What! keep a week away? seven days and nights?' + LF + 'Eight score eight hours? and lovers\' absent hours,' + LF + 'More tedious than the dial eight score times?' + LF + 'O, weary reckoning!'], ['Othello AVS2L144', 'If heaven would make me such another world' + LF + 'Of one entire and perfect chrysolite,' + LF + 'I\'ld not have sold her for it.'], ['Othello AVS2L383. ', 'Speak of me as I am; nothing extenuate' + LF + 'Nor set down aught in malice: then must you speak' + LF + 'Of one that loved not wisely, but too well;' + LF + 'Of one not easily jealous, but, being wrought,' + LF + 'Perplexed in the extreme: of one, whose hand' + LF + 'Like the base Indian, threw a pearl away,' + LF + 'Richer than all his tribe: of one, whose subdued eyes,' + LF + 'Albeit unused to the melting mood,' + LF + 'Drop tears as fast as the Arabian trees' + LF + 'Their medicinal gum.'], ['Romeo and Juliet AIS1 ', 'From love\'s weak childish bow she lives unharmed.'], ['Romeo and Juliet AIS1L184', 'Love is a smoke rais\'d with the fume of sighs;' + LF + 'Being purg\'d, a fire sparkling in a lover\'s eyes;' + LF + 'Being vex\'d, a sea nourish\'d with lovers\' tears:' + LF + 'What is it else? a madness most discreet,' + LF + 'A choking gall and a preserving sweet.'], ['Romeo and Juliet AIS5L0', 'Steal love\'s sweet bait from fearful hooks.'], ['Romeo and Juliet AIIS1L9', 'Speak but one rhyme, and I am satisfied;' + LF + 'Cry but—\'Ay me!\' pronounce but \'love\' and \'dove.\''], ['Romeo and Juliet AIIS2L23', 'See, how she leans her cheek upon her hand!' + LF + 'O, that I were a glove upon that hand,' + LF + 'That I might touch that cheek!'], ['Romeo and Juliet AIIS2L33', 'O, Romeo, Romeo! wherefore art thou, Romeo?'], ['Romeo and Juliet AIIS2L67', 'For stony limits cannot hold love out,' + LF + 'And what love can do that dares love attempt.'], ['Romeo and Juliet AIIS2L92', 'At lovers\' perjuries,' + LF + 'They say, Jove laughs.'], ['Romeo and Juliet AIIS2L133', 'My bounty is as boundless as the sea,' + LF + 'My love as deep; the more I give to thee' + LF + 'The more I have, for both are infinite.'], ['Romeo and Juliet AIIS2L156', 'Love goes toward love, as school-boys from their books,' + LF + 'But love from love, toward school with heavy looks.'], ['Romeo and Juliet AIIS2L165', 'It is my soul that calls upon my name;' + LF + 'How silver-sweet sound lovers\' tongues by night,' + LF + 'Like soft music to attending ears.'], ['Romeo and Juliet AIIS2L177', '\'Tis almost morning; I would have thee gone:' + LF + 'And yet no further than a wanton\'s bird;' + LF + 'Who lets it hop a little from her hand,' + LF + 'Like a poor prisoner in his twisted gyves,' + LF + 'And with a silk thread plucks it back again,' + LF + 'So loving-jealous of his liberty.'], ['Romeo and Juliet AIIS2L184', 'Good night, good night! parting is such sweet sorrow,' + LF + 'That I shall say good night till it be morrow.'], ['Romeo and Juliet AIIS5L4', 'Love\'s heralds should be thoughts,' + LF + 'Which ten times faster glide than the sun\'s beams,' + LF + 'Driving back shadows over louring hills;' + LF + 'Therefore do nimble-pinion\'d doves draw love,' + LF + 'And therefore hath the wind-swift Cupid wings.'], ['Romeo and Juliet AIIS6L14', 'Therefore love moderately; long love doth so;' + LF + 'Too swift arrives as tardy as too slow.'], ['Romeo and Juliet AIIIS2L21', 'Give me my Romeo; and, when he shall die,' + LF + 'Take him, and cut him out in little stars,' + LF + 'And he will make the face of heaven so fine,' + LF + 'And all the world will be in love with night,' + LF + 'And pay no worship to the garish sun.'], ['Troilus and Cressida AIIIS1L00', 'Sweet, above thought I love thee.'], ['Troilus and Cressida AIIIS2L91', 'They say all lovers swear more performance than they are able, and yet reserve an ability that they never perform.'], ['Troilus and Cressida AIIIS2L163', 'For to be wise, and love' + LF + 'Exceeds man\'s might; that dwells with gods above.'], ['Troilus and Cressida AIVS1L33', 'The noblest hateful love that e\'er I heard of.'], ['Twelfth Night AISIL1', 'If music be the food of love, play on;' + LF + 'Give me excess of it, that, surfeiting,' + LF + 'The appetite may sicken, and so die.'], ['Twelfth Night AIS1L9', 'O spirit of love! how quick and fresh art thou,' + LF + 'That notwithstanding thy capacity' + LF + 'Receiveth as the sea, nought enters there,' + LF + 'Of what validity and pitch soe\'er,' + LF + 'But falls into abatement and low price,' + LF + 'Even in a minute!'], ['Twelfth Night AIIS3L44', 'Journeys end in lovers meeting,' + LF + 'Every wise man\'s son doth know.'], ['Twelfth Night AIIS4L37', 'Then let thy love be younger than thyself,' + LF + 'Or thy affection cannot hold the bent.'], ['Twelfth Night AIIS4L114', 'She never told her love,' + LF + 'But let concealment, like a [worm] i\' the bud,' + LF + 'Feed on her damask cheek; she pin\'d in thought,' + LF + 'And with a green and yellow melancholy' + LF + 'She sat like patience on a monument,' + LF + 'Smiling at grief.'], ['Twelfth Night AIIISIL167', 'Love sought is good, but giv\'n unsought is better.'], ['The Two Gentlemen of Verona AIS1L23', 'For he was more than over shoes in love.'], ['The Two Gentlemen of Verona AIS1L39', 'Love is your master, for he masters you;' + LF + 'And he that is so yoked by a fool,' + LF + 'Methinks, should not be chronicled for wise.'], ['The Two Gentlemen of Verona AIS1L45', 'And writers say, as the most forward bud' + LF + 'Is eaten by the canker ere it blow,' + LF + 'Even so by love the young and tender wit' + LF + 'Is turn\'d to folly, blasting in the bud,' + LF + 'Losing his verdure even in the prime.'], ['The Two Gentlemen of Verona AIS2L57', 'How wayward is this foolish love,' + LF + 'That, like a testy babe, will scratch the nurse' + LF + 'And presently, all humbled, kiss the rod.'], ['The Two Gentlemen of Verona AIS3L84', 'O, how this spring of love resembleth' + LF + 'Th\' uncertain glory of an April day,' + LF + 'Which now shows all the beauty of the sun,' + LF + 'And by and by a cloud takes all away!'], ['The Two Gentlemen of Verona AIIS7L18', 'Didst thou but know the inly touch of love,' + LF + 'Thou wouldst as soon go kindle fire with snow,' + LF + 'As seek to quench the fire of love with words.'], ['The Two Gentlemen of Verona AIIS7L21', 'I do not seek to quench your love\'s hot fire,' + LF + 'But qualify the fire\'s extreme rage,' + LF + 'Lest it should burn above the bounds of reason.'], ['The Two Gentlemen of Verona AIIIS1L178', 'Except I be by Sylvia in the night,' + LF + 'There is no music in the nightingale.'], ['The Two Gentlemen of Verona AIS2', 'They do not love that do not show their love.'], ['Venus and Adonis line 123', 'Love keeps his revels where there are but twain.'], ['Venus and Adonis line 202', 'What \'tis to love? how want of love tormenteth?'], ['Venus and Adonis line 799', 'Love comforteth like sunshine after rain'], ['Venus and Adonis line 781', 'Love\'s gentle spring doth always fresh remain'], ['Antony and Cleopatra AIS1L15', 'There\'s beggary in the love that can be reckoned.'], ['Cymbeline AIVS2L20', 'I know not why' + LF + 'I love this youth; and I have heard you say,' + LF + 'Love\'s reason\'s without reason.'], ['Henry VI, Part I AIS1', 'I can express no kinder sign of love, than this kind kiss.'], ['Henry VI, Part I AIIIS1', 'Love for thy love, and hand for hand I give.'], ['Henry VI, Part II AIIIS2', 'For where thou art, there is the world itself, and where thou art not, desolation'], ['Henry VIII #Date)), AIIIS2L444', 'Love thyself last: cherish those hearts that hate thee.'], ['Julius Caesar AIIIS2L22', 'Not that I lov\'d Caesar less, but that I lov\'d Rome more.'], ['Julius Caesar AIIIS1L189', 'Though last, not least in love!'], ['King John AIIS1', 'Upon thy cheek I lay this zealous kiss,' + LF + 'As seal to the indenture of my love'], ['King Lear AIS1L52', 'Which of you shall we say doth love us most?' + LF + 'That we our largest bounty may extend' + LF + 'Where nature doth with merit challenge.'], ['Merry Wives of Windsor AIIS2L217', 'Love like a shadow flies when substance love pursues;' + LF + 'Pursuing that that flies, and flying what pursues.'], ['Richard III AVS3L200', 'There is no creature loves me,' + LF + 'And if I die, no soul shall pity me.']]);
/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */

const ObjectCollection$1 = {
  get CarPlants() {
    return CarPlants;
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
FlopShuffleMaker.defineForObject(ObjectCollection$1);
/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */

const VectorCollection = {
  get actors() {
    return actors;
  },

  get actresses() {
    return actresses;
  },

  get directors() {
    return directors;
  },

  get carPlants() {
    return Object.keys(CarPlants);
  },

  get actorBriefs() {
    return Object.values(FilmActors).map(briefName);
  },

  get actressBriefs() {
    return Object.values(FilmActresses).map(briefName);
  },

  get directorBriefs() {
    return Object.values(FilmDirectors).map(briefName);
  },

  get pastas() {
    return Object.keys(Pastas);
  },

  get armDealers() {
    return Object.keys(ArmSales);
  },

  get megaCities() {
    return Object.keys(CityPopulations);
  },

  get deathCauses() {
    return Object.keys(MortalityRates);
  },

  get powerCars() {
    return Object.keys(PowerCars);
  },

  get recessionYears() {
    return Object.keys(Recessions);
  }

};
FlopShuffleMaker.defineForVector(VectorCollection);

const DEFAULT_SIZE = 3;
const randMatrix = ({
  h,
  w,
  fn
} = {}) => {
  let l = (h = h || DEFAULT_SIZE) * (w = w || h);
  let zigg;
  fn = fn || (zigg = new Ziggurat(l, ~~(l * 2 / 3)), () => abs(~~zigg.next()));
  const ar = Array(l),
        mx = Array(h);

  for (--l; l >= 0; l--) ar[l] = fn(l);

  ar.sort((a, b) => a - b);

  for (let i = 0, j, r; i < h; i++) for (mx[i] = r = Array(w), j = 0; j < w; j++) r[j] = ar[++l];

  return mx;
};

const simpleMatrices = ({
  h = 3,
  w = 4,
  fn
} = {}) => {
  let matrix = randMatrix({
    h,
    w,
    fn
  });
  return {
    emptyMatrix: [[]],
    oneRow: [matrix[0].slice()],
    oneColumn: matrix.map(([x]) => [x]),
    simpleMatrix: matrix
  };
};
const SimpleMatrices = simpleMatrices();

const simpleMatricesRobust = ({
  h = 3,
  w = 4,
  fn
} = {}) => {
  var _VectorCollection;

  let key;
  const matrices = simpleMatrices({
    h,
    w,
    fn
  });
  return {
    null: null,
    undefined: undefined,
    numeric: 0xff,
    string: key = (_VectorCollection = VectorCollection, flopKey(_VectorCollection)),
    emptyVector: [],
    emptyEntry: [,],
    stringVector: VectorCollection.flopShuffle({
      p: key,
      size: w
    }),
    numberVector: matrices.oneRow[0].slice(),
    ...matrices
  };
};
const SimpleMatricesRobust = simpleMatricesRobust();

const simpleEntries = ({
  h = 4
} = {}) => {
  var _h, _h2, _h3;

  const ob = {
    numeric: Object.entries(ObjectCollection$2.flopShuffle({
      size: (_h = h, sizeOscillator(_h))
    })),
    string: Object.entries(ObjectCollection$3.flopShuffle({
      size: (_h2 = h, sizeOscillator(_h2))
    }))
  };
  const another = CrostabCollection.flopHLookUp({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed: true
  });
  return Object.assign(ob, another);
};
const SimpleEntries = simpleEntries();

const keyed = true;
const objectify = entriesByBannerInKeyValue => {
  let oneEntry = entriesByBannerInKeyValue;
  const [[k, entries]] = Object.entries(oneEntry),
        o = {};

  for (let [k, v] of entries) o[k] = v;

  return oneEntry = {}, oneEntry[k] = o, oneEntry;
};
const simpleObjects = ({
  h = 4
} = {}) => {
  var _h, _h2, _CrostabCollection$fl, _h3;

  return Object.assign({
    empty: {}
  }, ObjectCollection$2.flopShuffle({
    size: (_h = h, sizeOscillator(_h)),
    keyed
  }), ObjectCollection$3.flopShuffle({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyed
  }), (_CrostabCollection$fl = CrostabCollection.flopHLookUp({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed
  }), objectify(_CrostabCollection$fl)));
};
const SimpleObjects = simpleObjects();

const keyed$1 = true;
const simpleVectors = ({
  h = 7
} = {}) => {
  var _h, _h2, _h3, _h4;

  return Object.assign({
    empty: []
  }, NumberVectorCollection.flopShuffle({
    size: (_h = h, sizeOscillator(_h)),
    keyed: keyed$1
  }), NumberVectorCollection.flopShuffle({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyed: keyed$1
  }), StringVectorCollection.flopShuffle({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed: keyed$1
  }), StringVectorCollection.flopShuffle({
    size: (_h4 = h, sizeOscillator(_h4)),
    keyed: keyed$1
  }));
};
const SimpleVectors = simpleVectors();

export { CrosXMatricesRobust, SimpleEntries, SimpleMatrices, SimpleMatricesRobust, SimpleObjects, SimpleVectors, crosXMatricesRobust, randMatrix, simpleEntries, simpleMatrices, simpleMatricesRobust, simpleObjects, simpleVectors };
