import { FLOP_SHUFFLE } from '@foba/util';
import { tableShuffle } from '@analys/table-select';
import { flopKey } from '@aryth/rand';
import { pair } from '@vect/object-init';

const BistroDutyRoster = {
  head: ['day', 'name', 'served', 'sold', 'adt'],
  rows: [[1, 'Joyce', 70, 7, ''], [1, 'Joyce', 66, 15, ''], [2, 'Joyce', 86, 10, ''], [2, 'Joyce', NaN, NaN, ''], [3, 'Joyce', 96, 2, ''], [1, 'Lance', 98, 15, ''], [1, 'Lance', 66, 15, ''], [2, 'Lance', 85, 12, ''], [2, 'Lance', 63, 12, ''], [3, 'Lance', NaN, NaN, ''], [1, 'Naomi', 90, 14, ''], [1, 'Naomi', 66, 9, ''], [2, 'Naomi', NaN, NaN, ''], [2, 'Naomi', 93, 16, ''], [3, 'Naomi', 78, 8, '']]
};

const ChinaConceptFirms = {
  'head': ['symbol', 'companyName', 'industry', 'ceo', 'sector', 'price', 'mktCap'],
  'rows': [['JD', 'JD.com Inc.', 'Online Media', 'Qiangdong Richard Liu', 'Technology', 38.84, '56712614000'], ['BABA', 'Alibaba Group Holding Limited', 'Retail - Apparel & Specialty', 'Yong Daniel Zhang', 'Consumer Cyclical', 205.61, '563679790000'], ['NTES', 'NetEase Inc.', 'Online Media', 'William Lei Ding', 'Technology', 337.91, '43239301000'], ['BIDU', 'Baidu Inc.', 'Online Media', 'Yanhong Robin Li', 'Technology', 124.43, '43114873000'], ['EDU', 'New Oriental Education', 'Education', 'Chenggang Zhou', 'Consumer Defensive', 134.47, '21303947300'], ['PDD', 'Pinduoduo Inc.', 'Internet Retail', null, 'Consumer Cyclical', 32.8, '38125408000'], ['YUMC', 'Yum China Holdings Inc.', 'Restaurants', 'Muktesh Pant', 'Consumer Cyclical', 43.81, '16468573200'], ['TME', 'Tencent Music Entertainment', 'Internet Content & Information', null, 'Communication Services', 12.32, '20760062000'], ['IQ', 'iQIYI, Inc.', 'Internet Content & Information', null, 'Communication Services', 23.98, '17434419200'], ['BILI', 'Bilibili Inc.', 'Electronic Gaming & Multimedia', null, 'Communication Services', 26.72, '8714006500'], ['LK', 'Luckin Coffee Inc.', 'Restaurants', null, 'Consumer Cyclical', 38.33, '8964160500']],
  'title': ''
};

const USTechFirms = {
  'head': ['symbol', 'companyName', 'industry', 'ceo', 'sector', 'price', 'mktCap'],
  'rows': [['AAPL', 'Apple Inc.', 'Computer Hardware', 'Timothy D. Cook', 'Technology', 288.08, '1260488230000'], ['MSFT', 'Microsoft Corporation', 'Application Software', 'Satya Nadella', 'Technology', 168.07, '1223232060000'], ['FB', 'Facebook Inc.', 'Online Media', 'Mark Zuckerberg', 'Technology', 196.77, '560883040000'], ['NVDA', 'NVIDIA Corporation', 'Semiconductors', 'Jen-Hsun Huang', 'Technology', 262.05, '160374587000'], ['AMZN', 'Amazon.com Inc.', 'Online Media', 'Jeffrey P. Bezos', 'Technology', 1972.74, '982049690000'], ['GOOG', 'Alphabet Inc.', 'Online Media', 'Larry Page', 'Technology', 1388.45, '953677710000'], ['AMD', 'Advanced Micro Devices Inc.', 'Semiconductors', 'Lisa T. Su', 'Technology', 47.57, '55640728000'], ['QCOM', 'QUALCOMM Incorporated', 'Semiconductors', 'Steven M. Mollenkopf', 'Technology', 80.22, '88466620000'], ['CRM', 'Salesforce.com Inc', 'Application Software', 'Marc Benioff', 'Technology', 181.27, '160786498000'], ['INTC', 'Intel Corporation', 'Semiconductors', 'Brian M. Krzanich', 'Technology', 59.73, '245220917000'], ['TSM', 'Taiwan Semiconductor Manufacturing Company Ltd.', 'Semiconductors', 'Mark Liu / C.C Wei', 'Technology', 53.86, '271774351000']],
  'title': ''
};

const TopBoxOffice = {
  'head': ['name', 'boxoffice', 'budget', 'year', 'director', 'producer', 'writer', 'based_on'],
  'rows': [['Avatar', '2,788', 244, '2009', 'James Cameron', ['James Cameron', 'Jon Landau'], 'James Cameron', ''], ['Titanic', '2,187', 200, '1997', 'James Cameron', ['James Cameron', 'Jon Landau'], 'James Cameron', ''], ['Star Wars: The Force Awakens', '2,068', 306, '2015', 'J. J. Abrams', ['Kathleen Kennedy', 'J. J. Abrams', 'Bryan Burk'], ['Lawrence Kasdan', 'J. J. Abrams', 'Michael Arndt'], 'George Lucas'], ['Avengers: Infinity War', '2,048', 400, '2018', ['Anthony Russo', 'Joe Russo'], 'Kevin Feige', ['Christopher Markus', 'Stephen McFeely'], ['Stan Lee', 'Jack Kirby']], ['Jurassic World', '1,672', 150, '2015', 'Colin Trevorrow', ['Frank Marshall', 'Patrick Crowley'], ['Rick Jaffa', 'Amanda Silver', 'Derek Connolly', 'Colin Trevorrow'], 'Michael Crichton'], ['The Avengers', '1,519', 220, '2012', 'Joss Whedon', 'Kevin Feige', ['Joss Whedon', 'Zak Penn'], ['Stan Lee', 'Jack Kirby']], ['Furious 7', '1,516', 190, '2015', 'James Wan', ['Neal H. Moritz', 'Vin Diesel', 'Michael Fottrell'], 'Chris Morgan', 'Gary Scott Thompson'], ['Avengers: Age of Ultron', '1,405', 495, '2015', 'Joss Whedon', 'Kevin Feige', 'Joss Whedon', ['Stan Lee', 'Jack Kirby']], ['Black Panther', '1,347', 210, '2018', 'Ryan Coogler', 'Kevin Feige', ['Ryan Coogler', 'Joe Robert Cole'], ['Stan Lee', 'Jack Kirby']], ['Harry Potter & Deathly Hallows II', '1,342', 250, '2011', 'David Yates', ['David Heyman', 'David Barron', 'J. K. Rowling'], 'Steve Kloves', 'J. K. Rowling'], ['Star Wars: The Last Jedi', '1,333', 317, '2017', 'Rian Johnson', ['Kathleen Kennedy', 'Ram Bergman'], 'Rian Johnson', 'George Lucas'], ['Jurassic World: Fallen Kingdom', '1,309', 187, '2018', 'J. A. Bayona', ['Frank Marshall', 'Patrick Crowley', 'Belén Atienza'], ['Derek Connolly', 'Colin Trevorrow'], 'Michael Crichton'], ['Frozen', '1,290', 150, '2013', ['Chris Buck', 'Jennifer Lee'], 'Peter Del Vecho', ['Chris Buck', 'Jennifer Lee', 'Shane Morris'], ''], ['Beauty and the Beast', '1,263', 255, '2017', 'Bill Condon', ['David Hoberman', 'Todd Lieberman'], ['Stephen Chbosky', 'Evan Spiliotopoulos'], 'Disney\'s'], ['Incredibles 2', '1,242', 200, '2018', 'Brad Bird', ['John Walker', 'Nicole Paradis Grindle'], 'Brad Bird', ''], ['The Fate of the Furious', '1,239', 250, '2017', 'F. Gary Gray', ['Neal H. Moritz', 'Vin Diesel', 'Michael Fottrell', 'Chris Morgan'], 'Chris Morgan', 'Gary Scott Thompson'], ['Iron Man 3', '1,215', 200, '2013', 'Shane Black', 'Kevin Feige', ['Drew Pearce', 'Shane Black'], ['Stan Lee', 'Don Heck', 'Larry Lieber', 'Jack Kirby']], ['Minions', '1,159', 74, '2015', ['Pierre Coffin', 'Kyle Balda'], ['Chris Meledandri', 'Janet Healy'], 'Brian Lynch', 'Sergio Pablos'], ['Captain America: Civil War', '1,153', 250, '2016', ['Anthony Russo', 'Joe Russo'], 'Kevin Feige', ['Christopher Markus', 'Stephen McFeely'], ['Joe Simon', 'Jack Kirby']], ['Aquaman', '1,139', 200, '2018', 'James Wan', ['Peter Safran', 'Rob Cowan'], ['David Leslie Johnson-McGoldrick', 'Will Beall', 'Geoff Johns', 'James Wan'], 'Mort Weisinger']]
};

const AeroEngineSpecs = {
  head: ['sku', 'plant', 'country', 'l', 'd', 'dryw', 'maxt', 'maxtwa', 'ttwrwa', 'bypass', 'app'],
  rows: [['F100-PW-220', 'PW', 'US', '490', '118', '1467', '65', '106', '7.40', '0.63', ['F-16C/D']], ['F100-PW-229', 'PW', 'US', '490', '118', '1700', '79', '130', '7.80', '0.36', ['F-16E+', 'F-15E']], ['F119', 'PW', 'US', '516', '120', '1800', '116', '156', '9.00', '0.30', ['F-22']], ['F135-PW-100', 'PW', 'US', '559', '117', '1700', '125', '190', '7.47', '0.57', ['F-35A(CTOL)']], ['F135-PW-600', 'PW', 'US', '937', '117', '1700', '120', '182', '11.47', '0.51', ['F-35C(STOVL)']], ['WS-10', 'Shenyang', 'CN', '505', '102', '1494', '79', '155', '9.50', '0.78', ['J6B', 'J11B']], ['WS-13', 'Guizhou', 'CN', '414', '102', '1135', '51', '86', '7.80', '0.57', ['JF-17', 'J-31']], ['WS-15', 'Xi\'an', 'CN', '505', '102', '1633', '105', '197', '10.87', '0.38', ['J-20']], ['AL-31F', 'NPOSaturn', 'RU', '499', '128', '1570', '75', '123', '8.22', '0.56', ['Su-30MKI', 'Su-27', 'J-10', 'J-11']], ['AL-41F', 'NPOSaturn', 'RU', '494', '128', '1604', '86', '142', '9.04', '0.56', ['PAK FA', 'Su-35S']], ['F404', 'GE', 'US', '391', '89', '1036', '49', '89', '7.80', '0.34', ['F/A-18', 'F-117']], ['F110', 'GE', 'US', '500', '118', '1850', '74', '142', '7.50', '0.76', ['F-16', 'F-14', 'F-15E']], ['EJ200', 'EuroJet', 'DE', '400', '74', '988', '60', '90', '9.31', '0.40', ['EuroTyphoon']], ['M88', 'Snecma', 'FR', '354', '70', '897', '50', '75', '8.50', '0.30', ['Rafaele']], ['Trent 900', 'RR', 'UK', '548', '295', '6246', '334', '360', '6.11', '8.70', ['A-380']], ['GEnx-1B64', 'GE', 'US', '469', '282', '5816', '284', '330', '5.00', '9.00', ['Boeing 747-8', 'Boeing 787']], ['Trent 1000', 'RR', 'UK', '473', '285', '5770', '240', '350', '6.20', '10.00', ['Boeing 787']]]
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
