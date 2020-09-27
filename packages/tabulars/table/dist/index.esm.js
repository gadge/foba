import { tableShuffle } from '@analys/table-select';
import { flopKey } from '@aryth/rand';
import { FLOP_SHUFFLE } from '@foba/util';
import { pair } from '@vect/object-init';

const AeroEngineSpecs = {
  head: ['sku', 'plant', 'country', 'l', 'd', 'dryw', 'maxt', 'maxtwa', 'ttwrwa', 'bypass', 'app'],
  rows: [['F100-PW-220', 'PW', 'US', 490, 118, 1467, 65, 106, 7.40, 0.63, ['F-16C/D']], ['F100-PW-229', 'PW', 'US', 490, 118, 1700, 79, 130, 7.80, 0.36, ['F-16E+', 'F-15E']], ['F119', 'PW', 'US', 516, 120, 1800, 116, 156, 9.00, 0.30, ['F-22']], ['F135-PW-100', 'PW', 'US', 559, 117, 1700, 125, 190, 7.47, 0.57, ['F-35A(CTOL)']], ['F135-PW-600', 'PW', 'US', 937, 117, 1700, 120, 182, 11.47, 0.51, ['F-35C(STOVL)']], ['WS-10', 'Shenyang', 'CN', 505, 102, 1494, 79, 155, 9.50, 0.78, ['J6B', 'J11B']], ['WS-13', 'Guizhou', 'CN', 414, 102, 1135, 51, 86, 7.80, 0.57, ['JF-17', 'J-31']], ['WS-15', 'Xi\'an', 'CN', 505, 102, 1633, 125, 180, 10.87, 0.38, ['J-10', 'J-20']], ['RD-33', 'Klimov', 'RU', 423, 104, 1055, 50, 81, 7.9, 0.49, ['Mig-29', 'Mig-35', 'JF-17', 'FC-32']], ['AL-31F', 'NPOSaturn', 'RU', 499, 128, 1570, 75, 123, 8.22, 0.56, ['Su-30MKI', 'Su-27', 'J-10', 'J-11']], ['AL-41F', 'NPOSaturn', 'RU', 494, 128, 1604, 86, 142, 9.04, 0.56, ['PAK FA', 'Su-35S']], ['F404', 'GE', 'US', 391, 89, 1036, 49, 89, 7.80, 0.34, ['F/A-18A/D', 'F-117']], ['F414', 'GE', 'US', 391, 89, 1110, 58, 98, 9.00, 0.25, ['F/A-18E/F']], ['F110', 'GE', 'US', 500, 118, 1850, 74, 142, 7.50, 0.76, ['F-16', 'F-14', 'F-15E']], ['EJ200', 'EuroJet', 'DE', 399, 74, 989, 60, 90, 9.31, 0.40, ['EuroTyphoon']], ['M88', 'Snecma', 'FR', 354, 70, 897, 50, 75, 8.50, 0.30, ['Rafaele']], ['GEnx-1B64', 'GE', 'US', 469, 282, 5816, 284, 330, 5.00, 9.00, ['Boeing 747-8', 'Boeing 787']], ['Trent 900', 'RR', 'UK', 548, 295, 6246, 334, 360, 6.11, 8.70, ['A-380']], ['Trent 1000', 'RR', 'UK', 473, 285, 5770, 240, 350, 6.20, 10.00, ['Boeing 787']]]
};

const AoEIIUnits = {
  head: ['id', 'name', 'building', 'cost', 'buildTime', 'hp', 'attack', 'maxRange', 'los', 'armor', 'accuracy', 'moveRate', 'attackDelay', 'age'],
  rows: [[1, 'Archer', 'Archery Range', {
    Wood: 25,
    Gold: 45
  }, 35, 4, 4, 30, 6, '0/0', 80, 0.96, 0.35, 'Feudal'], [2, 'Crossbowman', 'Archery Range', {
    Wood: 25,
    Gold: 45
  }, 27, 35, 5, 5, 7, '0/0', 85, 0.96, 0.35, 'Castle'], [3, 'Arbalest', 'Archery Range', {
    Wood: 25,
    Gold: 45
  }, 27, 40, 6, 5, 7, '0/0', 90, 0.96, 0.35, 'Imperial'], [4, 'Cavalry Archer', 'Archery Range', {
    Wood: 40,
    Gold: 70
  }, 34, 50, 6, 4, 5, '0/0', 50, 1.4, 1, 'Castle'], [5, 'Heavy Cavalry Archer', 'Archery Range', {
    Wood: 40,
    Gold: 70
  }, 27, 60, 7, 4, 6, '1/0', 50, 1.4, 1, 'Imperial'], [6, 'Hand Cannoneer', 'Archery Range', {
    Food: 45,
    Gold: 50
  }, 34, 35, 17, 7, 9, '1/0', 65, 0.96, 0.45, 'Imperial'], [7, 'Skirmisher', 'Archery Range', {
    Food: 25,
    Wood: 35
  }, 22, 30, 2, 4, 6, '0/3', 90, 0.96, 0.5, 'Feudal'], [8, 'Elite Skirmisher', 'Archery Range', {
    Food: 25,
    Wood: 35
  }, 22, 35, 3, 5, 7, '0/4', 90, 0.96, 0.5, 'Castle'], [10, 'Eagle Warrior', 'Barracks', {
    Food: 20,
    Gold: 50
  }, 35, 50, 7, null, 6, '0/2', null, 1.1, null, 'Castle'], [11, 'Elite Eagle Warrior', 'Barracks', {
    Food: 20,
    Gold: 50
  }, 20, 60, 9, null, 6, '0/4', null, 1.3, null, 'Imperial'], [12, 'Spearman', 'Barracks', {
    Food: 35,
    Wood: 15
  }, 22, 45, 3, null, 4, '0/0', null, 1, null, 'Feudal'], [13, 'Pikeman', 'Barracks', {
    Food: 35,
    Wood: 25
  }, 22, 55, 4, null, 4, '0/0', null, 1, null, 'Castle'], [14, 'Halberdier', 'Barracks', {
    Food: 35,
    Wood: 25
  }, 22, 60, 6, null, 4, '0/0', null, 1, null, 'Imperial'], [15, 'Militia', 'Barracks', {
    Food: 60,
    Gold: 20
  }, 21, 40, 4, null, 4, '0/1', null, 0.9, null, 'Dark'], [16, 'Man At Arms', 'Barracks', {
    Food: 60,
    Gold: 20
  }, 21, 45, 6, null, 4, '0/1', null, 0.9, null, 'Feudal'], [17, 'Long Swordman', 'Barracks', {
    Food: 60,
    Gold: 20
  }, 21, 55, 9, null, 4, '0/1', null, 0.9, null, 'Castle'], [18, 'Two Handed Swordsman', 'Barracks', {
    Food: 60,
    Gold: 20
  }, 21, 60, 11, null, 5, '0/1', null, 0.9, null, 'Imperial'], [19, 'Champion', 'Barracks', {
    Food: 60,
    Gold: 20
  }, 21, 70, 13, null, 5, '1/1', null, 0.9, null, 'Imperial'], [50, 'Bombard Cannon', 'Siege Workshop', {
    Wood: 225,
    Gold: 225
  }, 56, 80, 40, 12, 14, '2/5', 92, 0.7, 0.21, 'Imperial'], [51, 'Mangonel', 'Siege Workshop', {
    Wood: 160,
    Gold: 135
  }, 46, 50, 40, 7, 9, '0/6', null, 0.6, null, 'Castle'], [52, 'Onager', 'Siege Workshop', {
    Wood: 160,
    Gold: 135
  }, 46, 60, 50, 8, 10, '0/7', null, 0.6, null, 'Imperial'], [53, 'Siege Onager', 'Siege Workshop', {
    Wood: 160,
    Gold: 135
  }, 46, 70, 75, 8, 10, '0/8', null, 0.6, null, 'Imperial'], [54, 'Battering Ram', 'Siege Workshop', {
    Wood: 160,
    Gold: 75
  }, 36, 175, 2, null, 3, '0/180', null, 0.5, null, 'Castle'], [55, 'Capped Ram', 'Siege Workshop', {
    Wood: 160,
    Gold: 75
  }, 36, 200, 3, null, 3, '0/190', null, 0.5, null, 'Imperial'], [56, 'Siege Ram', 'Siege Workshop', {
    Wood: 160,
    Gold: 75
  }, 36, 270, 4, null, 3, '0/195', null, 0.6, null, 'Imperial'], [57, 'Scorpion', 'Siege Workshop', {
    Wood: 75,
    Gold: 75
  }, 30, 40, 12, 7, 9, '0/6', 100, 0.65, 0.21, 'Castle'], [58, 'Heavy Scorpion', 'Siege Workshop', {
    Wood: 75,
    Gold: 75
  }, 30, 50, 16, 7, 9, '0/7', 100, 0.65, 0.21, 'Imperial'], [59, 'Camel', 'Stable', {
    Food: 55,
    Gold: 60
  }, 22, 100, 5, null, 4, '0/0', null, 1.45, null, 'Castle'], [60, 'Heavy Camel', 'Stable', {
    Food: 55,
    Gold: 60
  }, 22, 120, 7, null, 5, '0/0', null, 1.45, null, 'Imperial'], [61, 'Knight', 'Stable', {
    Food: 60,
    Gold: 75
  }, 30, 100, 10, null, 4, '2/2', null, 1.35, null, 'Castle'], [62, 'Cavalier', 'Stable', {
    Food: 60,
    Gold: 75
  }, 30, 120, 12, null, 4, '2/2', null, 1.35, null, 'Imperial'], [63, 'Paladin', 'Stable', {
    Food: 60,
    Gold: 75
  }, 30, 160, 14, null, 5, '2/3', null, 1.35, null, 'Imperial'], [65, 'Scout Cavalry', 'Stable', {
    Food: 80
  }, 30, 45, 5, null, 6, '0/2', null, 1.55, null, 'Feudal'], [66, 'Light Cavalry', 'Stable', {
    Food: 80
  }, 30, 60, 7, null, 8, '0/2', null, 1.5, null, 'Castle'], [67, 'Hussar', 'Stable', {
    Food: 80
  }, 30, 75, 7, null, 10, '0/2', null, 1.5, null, 'Imperial']]
};

const BigMacAdjustedIndexes = {
  head: ['date', 'country', 'currency', 'name', 'priceLocal', 'localToUSD', 'priceUSD', 'GDPinUSD', 'priceAdjusted', 'USD', 'EUR', 'GBP', 'JPY', 'CNY'],
  rows: [['2020-07-01', 'CHE', 'CHF', 'Switzerland', 6.5, 0.94, 6.91, 0, 6, 0.043, 0.022, 0.17, 0.334, 0.115], ['2020-07-01', 'SWE', 'SEK', 'Sweden', 52.6, 9.14, 5.76, 0, 4.83, 0.08, 0.059, 0.212, 0.382, 0.156], ['2020-07-01', 'USA', 'USD', 'United States', 5.71, 1, 5.71, 0, 5.17, 0, -0.019, 0.122, 0.279, 0.07], ['2020-07-01', 'NOR', 'NOK', 'Norway', 52, 9.37, 5.55, 0, 5.94, -0.153, -0.169, -0.05, 0.084, -0.094], ['2020-07-01', 'CAN', 'CAD', 'Canada', 6.88, 1.36, 5.08, 0, 4.5, 0.023, 0.003, 0.147, 0.308, 0.094], ['2020-07-01', 'ISR', 'ILS', 'Israel', 17, 3.44, 4.95, 0, 4.31, 0.039, 0.019, 0.166, 0.329, 0.112], ['2020-07-01', 'EUZ', 'EUR', 'Euro area', 4.21, 0.88, 4.79, 0, 4.25, 0.02, 0, 0.144, 0.305, 0.091], ['2020-07-01', 'DNK', 'DKK', 'Denmark', 30, 6.55, 4.58, 0, 5.09, -0.185, -0.201, -0.086, 0.042, -0.128], ['2020-07-01', 'AUS', 'AUD', 'Australia', 6.55, 1.43, 4.58, 0, 4.91, -0.155, -0.172, -0.052, 0.081, -0.096], ['2020-07-01', 'NZL', 'NZD', 'New Zealand', 6.6, 1.52, 4.35, 0, 4.29, -0.082, -0.1, 0.03, 0.175, -0.018], ['2020-07-01', 'GBR', 'GBP', 'Britain', 3.39, 0.79, 4.28, 0, 4.35, -0.108, -0.126, 0, 0.14, -0.046], ['2020-07-01', 'SGP', 'SGD', 'Singapore', 5.9, 1.39, 4.25, 0, 5.24, -0.265, -0.28, -0.176, -0.06, -0.214], ['2020-07-01', 'THA', 'THB', 'Thailand', 128, 31.39, 4.08, 0, 2.92, 0.267, 0.243, 0.421, 0.621, 0.355], ['2020-07-01', 'BRA', 'BRL', 'Brazil', 20.9, 5.34, 3.91, 0, 2.98, 0.191, 0.168, 0.336, 0.523, 0.274], ['2020-07-01', 'CZE', 'CZK', 'Czech Republic', 89, 23.41, 3.8, 0, 3.55, -0.031, -0.05, 0.087, 0.24, 0.037], ['2020-07-01', 'KOR', 'KRW', 'South Korea', 4500, 1200.95, 3.75, 0, 3.97, -0.145, -0.161, -0.041, 0.094, -0.085], ['2020-07-01', 'SAU', 'SAR', 'Saudi Arabia', 14, 3.75, 3.73, 0, 3.57, -0.053, -0.072, 0.062, 0.211, 0.013], ['2020-07-01', 'JPN', 'JPY', 'Japan', 390, 107.28, 3.64, 0, 4.21, -0.218, -0.233, -0.123, 0, -0.164], ['2020-07-01', 'ARG', 'ARS', 'Argentina', 250, 71.24, 3.51, 0, 3.09, 0.03, 0.01, 0.155, 0.317, 0.102], ['2020-07-01', 'CHL', 'CLP', 'Chile', 2740, 787.7, 3.48, 0, 3.26, -0.033, -0.052, 0.084, 0.237, 0.034], ['2020-07-01', 'PER', 'PEN', 'Peru', 11.9, 3.5, 3.4, 0, 2.9, 0.064, 0.043, 0.193, 0.361, 0.138], ['2020-07-01', 'PAK', 'PKR', 'Pakistan', 550, 166.5, 3.3, 0, 2.68, 0.118, 0.097, 0.254, 0.431, 0.196], ['2020-07-01', 'COL', 'COP', 'Colombia', 11900, 3617.01, 3.29, 0, 2.88, 0.034, 0.014, 0.16, 0.323, 0.106], ['2020-07-01', 'CHN', 'CNY', 'China', 21.7, 7, 3.1, 0, 3, -0.065, -0.083, 0.049, 0.196, 0], ['2020-07-01', 'HUN', 'HUF', 'Hungary', 900, 311.38, 2.89, 0, 3.28, -0.203, -0.218, -0.106, 0.02, -0.147], ['2020-07-01', 'PHL', 'PHP', 'Philippines', 142, 49.43, 2.87, 0, 2.74, -0.05, -0.068, 0.066, 0.216, 0.017], ['2020-07-01', 'POL', 'PLN', 'Poland', 11, 3.94, 2.79, 0, 3.24, -0.22, -0.235, -0.125, -0.002, -0.166], ['2020-07-01', 'HKG', 'HKD', 'Hong Kong', 20.5, 7.75, 2.64, 0, 4.59, -0.477, -0.488, -0.414, -0.332, -0.441], ['2020-07-01', 'EGY', 'EGP', 'Egypt', 42, 15.95, 2.63, 0, 2.72, -0.122, -0.139, -0.015, 0.123, -0.061], ['2020-07-01', 'IND', 'INR', 'India', 190, 75.2, 2.53, 0, 2.7, -0.151, -0.167, -0.047, 0.086, -0.092], ['2020-07-01', 'TWN', 'TWD', 'Taiwan', 72, 29.46, 2.44, 0, 3.63, -0.39, -0.402, -0.316, -0.22, -0.348], ['2020-07-01', 'IDN', 'IDR', 'Indonesia', 34000, 14435, 2.36, 0, 2.77, -0.23, -0.245, -0.136, -0.015, -0.176], ['2020-07-01', 'MYS', 'MYR', 'Malaysia', 9.99, 4.27, 2.34, 0, 3.06, -0.307, -0.321, -0.223, -0.114, -0.259], ['2020-07-01', 'MEX', 'MXN', 'Mexico', 50, 22.44, 2.23, 0, 3.01, -0.33, -0.343, -0.248, -0.142, -0.283], ['2020-07-01', 'TUR', 'TRY', 'Turkey', 13.99, 6.86, 2.04, 0, 3, -0.383, -0.395, -0.308, -0.211, -0.34], ['2020-07-01', 'RUS', 'RUB', 'Russia', 135, 70.58, 1.91, 0, 3.07, -0.436, -0.447, -0.367, -0.279, -0.397], ['2020-07-01', 'ZAF', 'ZAR', 'South Africa', 31, 16.67, 1.86, 0, 2.87, -0.413, -0.425, -0.342, -0.249, -0.372]]
};

const ChinaConceptFirms = {
  'head': ['symbol', 'companyName', 'industry', 'ceo', 'sector', 'price', 'mktCap'],
  'rows': [['JD', 'JD.com Inc.', 'Online Media', 'Qiangdong Richard Liu', 'Technology', 38.84, '56712614000'], ['BABA', 'Alibaba Group Holding Limited', 'Retail - Apparel & Specialty', 'Yong Daniel Zhang', 'Consumer Cyclical', 205.61, '563679790000'], ['NTES', 'NetEase Inc.', 'Online Media', 'William Lei Ding', 'Technology', 337.91, '43239301000'], ['BIDU', 'Baidu Inc.', 'Online Media', 'Yanhong Robin Li', 'Technology', 124.43, '43114873000'], ['EDU', 'New Oriental Education', 'Education', 'Chenggang Zhou', 'Consumer Defensive', 134.47, '21303947300'], ['PDD', 'Pinduoduo Inc.', 'Internet Retail', null, 'Consumer Cyclical', 32.8, '38125408000'], ['YUMC', 'Yum China Holdings Inc.', 'Restaurants', 'Muktesh Pant', 'Consumer Cyclical', 43.81, '16468573200'], ['TME', 'Tencent Music Entertainment', 'Internet Content & Information', null, 'Communication Services', 12.32, '20760062000'], ['IQ', 'iQIYI, Inc.', 'Internet Content & Information', null, 'Communication Services', 23.98, '17434419200'], ['BILI', 'Bilibili Inc.', 'Electronic Gaming & Multimedia', null, 'Communication Services', 26.72, '8714006500'], ['LK', 'Luckin Coffee Inc.', 'Restaurants', null, 'Consumer Cyclical', 38.33, '8964160500']],
  'title': ''
};

// copyright: hbr.org
// link: https://hbr.org/2016/12/mapping-frontier-economies
const FrontierEconomies = {
  head: ['no', 'country', 'cagr', 'frontier', 'corruption', 'arbitary', 'income', 'sig drop in gdppc'],
  rows: [[1, 'Bhutan', '8.47%', false, null, null, null, null], [2, 'Libya', '8.04%', true, true, true, null, true], [3, 'Myanmar', '7.88%', true, true, true, true, null], [4, 'Cote D\'ivore', '7.71%', true, true, null, true, null], [5, 'India', '7.58%', false, null, null, null, null], [6, 'Lao P.D.R.', '7.37%', true, true, null, null, null], [7, 'Mozambique', '7.16%', true, true, null, true, null], [8, 'Cambodia', '6.94%', true, true, null, true, null], [9, 'Senegal', '6.92%', true, null, null, true, null], [10, 'Rwanda', '6.86%', true, null, null, true, null], [11, 'Bangladesh', '6.84%', true, true, null, true, null], [12, 'Ethiopia', '6.80%', true, true, null, true, null], [13, 'Niger', '6.75%', true, true, null, true, null], [14, 'Tanzania', '6.72%', true, true, null, true, null], [15, 'Djibouti', '6.70%', true, true, null, null, true], [16, 'Kenya', '6.31%', true, true, null, true, null], [17, 'Panama', '6.30%', false, null, null, null, null], [18, 'Philippines', '6.28%', false, null, null, null, null], [19, 'Vietnam', '6.22%', true, true, null, null, null], [20, 'China', '6.14%', false, null, null, null, null], [21, 'Brunei', '6.11%', false, null, null, null, null], [22, 'Ghana', '5.94%', true, true, null, true, null], [23, 'Uganda', '5.85%', true, true, null, true, null], [24, 'Burkina Faso', '5.74%', true, true, null, true, null], [25, 'UzbekistanZ', '5.71%', true, true, true, null, null]]
};

const TopBoxOffice = {
  'head': ['name', 'boxoffice', 'budget', 'year', 'director', 'producer', 'writer', 'based_on'],
  'rows': [['Avatar', '2,788', 244, '2009', 'James Cameron', ['James Cameron', 'Jon Landau'], 'James Cameron', ''], ['Titanic', '2,187', 200, '1997', 'James Cameron', ['James Cameron', 'Jon Landau'], 'James Cameron', ''], ['Star Wars: The Force Awakens', '2,068', 306, '2015', 'J. J. Abrams', ['Kathleen Kennedy', 'J. J. Abrams', 'Bryan Burk'], ['Lawrence Kasdan', 'J. J. Abrams', 'Michael Arndt'], 'George Lucas'], ['Avengers: Infinity War', '2,048', 400, '2018', ['Anthony Russo', 'Joe Russo'], 'Kevin Feige', ['Christopher Markus', 'Stephen McFeely'], ['Stan Lee', 'Jack Kirby']], ['Jurassic World', '1,672', 150, '2015', 'Colin Trevorrow', ['Frank Marshall', 'Patrick Crowley'], ['Rick Jaffa', 'Amanda Silver', 'Derek Connolly', 'Colin Trevorrow'], 'Michael Crichton'], ['The Avengers', '1,519', 220, '2012', 'Joss Whedon', 'Kevin Feige', ['Joss Whedon', 'Zak Penn'], ['Stan Lee', 'Jack Kirby']], ['Furious 7', '1,516', 190, '2015', 'James Wan', ['Neal H. Moritz', 'Vin Diesel', 'Michael Fottrell'], 'Chris Morgan', 'Gary Scott Thompson'], ['Avengers: Age of Ultron', '1,405', 495, '2015', 'Joss Whedon', 'Kevin Feige', 'Joss Whedon', ['Stan Lee', 'Jack Kirby']], ['Black Panther', '1,347', 210, '2018', 'Ryan Coogler', 'Kevin Feige', ['Ryan Coogler', 'Joe Robert Cole'], ['Stan Lee', 'Jack Kirby']], ['Harry Potter & Deathly Hallows II', '1,342', 250, '2011', 'David Yates', ['David Heyman', 'David Barron', 'J. K. Rowling'], 'Steve Kloves', 'J. K. Rowling'], ['Star Wars: The Last Jedi', '1,333', 317, '2017', 'Rian Johnson', ['Kathleen Kennedy', 'Ram Bergman'], 'Rian Johnson', 'George Lucas'], ['Jurassic World: Fallen Kingdom', '1,309', 187, '2018', 'J. A. Bayona', ['Frank Marshall', 'Patrick Crowley', 'Belén Atienza'], ['Derek Connolly', 'Colin Trevorrow'], 'Michael Crichton'], ['Frozen', '1,290', 150, '2013', ['Chris Buck', 'Jennifer Lee'], 'Peter Del Vecho', ['Chris Buck', 'Jennifer Lee', 'Shane Morris'], ''], ['Beauty and the Beast', '1,263', 255, '2017', 'Bill Condon', ['David Hoberman', 'Todd Lieberman'], ['Stephen Chbosky', 'Evan Spiliotopoulos'], 'Disney\'s'], ['Incredibles 2', '1,242', 200, '2018', 'Brad Bird', ['John Walker', 'Nicole Paradis Grindle'], 'Brad Bird', ''], ['The Fate of the Furious', '1,239', 250, '2017', 'F. Gary Gray', ['Neal H. Moritz', 'Vin Diesel', 'Michael Fottrell', 'Chris Morgan'], 'Chris Morgan', 'Gary Scott Thompson'], ['Iron Man 3', '1,215', 200, '2013', 'Shane Black', 'Kevin Feige', ['Drew Pearce', 'Shane Black'], ['Stan Lee', 'Don Heck', 'Larry Lieber', 'Jack Kirby']], ['Minions', '1,159', 74, '2015', ['Pierre Coffin', 'Kyle Balda'], ['Chris Meledandri', 'Janet Healy'], 'Brian Lynch', 'Sergio Pablos'], ['Captain America: Civil War', '1,153', 250, '2016', ['Anthony Russo', 'Joe Russo'], 'Kevin Feige', ['Christopher Markus', 'Stephen McFeely'], ['Joe Simon', 'Jack Kirby']], ['Aquaman', '1,139', 200, '2018', 'James Wan', ['Peter Safran', 'Rob Cowan'], ['David Leslie Johnson-McGoldrick', 'Will Beall', 'Geoff Johns', 'James Wan'], 'Mort Weisinger']]
};

const USTechFirms = {
  'head': ['symbol', 'companyName', 'industry', 'ceo', 'sector', 'price', 'mktCap'],
  'rows': [['AAPL', 'Apple Inc.', 'Computer Hardware', 'Timothy D. Cook', 'Technology', 288.08, '1260488230000'], ['MSFT', 'Microsoft Corporation', 'Application Software', 'Satya Nadella', 'Technology', 168.07, '1223232060000'], ['FB', 'Facebook Inc.', 'Online Media', 'Mark Zuckerberg', 'Technology', 196.77, '560883040000'], ['NVDA', 'NVIDIA Corporation', 'Semiconductors', 'Jen-Hsun Huang', 'Technology', 262.05, '160374587000'], ['AMZN', 'Amazon.com Inc.', 'Online Media', 'Jeffrey P. Bezos', 'Technology', 1972.74, '982049690000'], ['GOOG', 'Alphabet Inc.', 'Online Media', 'Larry Page', 'Technology', 1388.45, '953677710000'], ['AMD', 'Advanced Micro Devices Inc.', 'Semiconductors', 'Lisa T. Su', 'Technology', 47.57, '55640728000'], ['QCOM', 'QUALCOMM Incorporated', 'Semiconductors', 'Steven M. Mollenkopf', 'Technology', 80.22, '88466620000'], ['CRM', 'Salesforce.com Inc', 'Application Software', 'Marc Benioff', 'Technology', 181.27, '160786498000'], ['INTC', 'Intel Corporation', 'Semiconductors', 'Brian M. Krzanich', 'Technology', 59.73, '245220917000'], ['TSM', 'Taiwan Semiconductor Manufacturing Company Ltd.', 'Semiconductors', 'Mark Liu / C.C Wei', 'Technology', 53.86, '271774351000']],
  'title': ''
};

const BistroDutyRoster = {
  head: ['day', 'name', 'served', 'sold', 'adt'],
  rows: [[1, 'Joyce', 70, 7, ''], [1, 'Joyce', 66, 15, ''], [2, 'Joyce', 86, 10, ''], [2, 'Joyce', NaN, NaN, ''], [3, 'Joyce', 96, 2, ''], [1, 'Lance', 98, 15, ''], [1, 'Lance', 66, 15, ''], [2, 'Lance', 85, 12, ''], [2, 'Lance', 63, 12, ''], [3, 'Lance', NaN, NaN, ''], [1, 'Naomi', 90, 14, ''], [1, 'Naomi', 66, 9, ''], [2, 'Naomi', NaN, NaN, ''], [2, 'Naomi', 93, 16, ''], [3, 'Naomi', 78, 8, '']]
};

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.h
 * @param flopShuffle.w
 * @param flopShuffle.keyed
 * @param flopShuffle.oscillate
 */

const TableCollection = {
  get AeroEngineSpecs() {
    return AeroEngineSpecs;
  },

  get BistroDutyRoster() {
    return BistroDutyRoster;
  },

  get ChinaConceptFirms() {
    return ChinaConceptFirms;
  },

  get TopBoxOffice() {
    return TopBoxOffice;
  },

  get USTechFirms() {
    return USTechFirms;
  },

  get BigMaAdjustedIndexes() {
    return BigMacAdjustedIndexes;
  },

  get AgeOfEmpiresIIUnits() {
    return AoEIIUnits;
  },

  get FrontierEconomies() {
    return FrontierEconomies;
  }

};
Reflect.defineProperty(TableCollection, FLOP_SHUFFLE, {
  value({
    p,
    h,
    w,
    keyed,
    oscillate = true
  } = {}) {
    const key = p !== null && p !== void 0 ? p : flopKey(this);
    const rs = tableShuffle(this[key], {
      h,
      w,
      oscillate
    });
    return keyed ? pair(key, rs) : rs;
  },

  enumerable: false
});
/**
 * @typedef {{head:*[],rows:*[][]}} TableObject
 */

export { TableCollection as Foba, TableCollection };
