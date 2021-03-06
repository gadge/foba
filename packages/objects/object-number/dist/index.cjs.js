'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@foba/util');

// https://www.sipri.org/databases/armsindustry
// in millions USD
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

const MegaCities = {
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
};

// https://en.wikipedia.org/wiki/List_of_causes_of_death_by_rate
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
};

// https://en.wikipedia.org/wiki/List_of_recessions_in_the_United_States
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
  MegaCities,
  MortalityRates,
  PowerCars,
  Recessions
};
util.FlopShuffleMaker.defineForObject(ObjectCollection);

exports.ArmSales = ArmSales;
exports.BrentPrices = BrentPrices;
exports.Foba = ObjectCollection;
exports.MegaCities = MegaCities;
exports.MortalityRates = MortalityRates;
exports.ObjectCollection = ObjectCollection;
exports.PowerCars = PowerCars;
exports.Recessions = Recessions;
