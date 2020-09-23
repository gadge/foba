'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var crostab = require('@analys/crostab');
var crostabSelect = require('@analys/crostab-select');
var rand = require('@aryth/rand');
var util = require('@foba/util');
var entriesInit = require('@vect/entries-init');
var objectInit = require('@vect/object-init');
var vectorSelect = require('@vect/vector-select');

var side = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix = [
	[
		978453,
		30343,
		276339,
		45055,
		18021,
		396987,
		null,
		32118,
		null
	],
	[
		918795,
		30404,
		266060,
		40133,
		17431,
		414266,
		57797,
		30020,
		178580
	],
	[
		905097,
		24209,
		236463,
		35515,
		16289,
		372191,
		59666,
		27272,
		175923
	],
	[
		927733,
		22979,
		238646,
		39149,
		18200,
		340245,
		48895,
		28831,
		189947
	],
	[
		905464,
		35132,
		285176,
		44390,
		20435,
		342409,
		51233,
		29973,
		208273
	],
	[
		855872,
		35186,
		283661,
		41003,
		18727,
		318399,
		56929,
		27800,
		223828
	],
	[
		777601,
		29909,
		265028,
		43795,
		17853,
		307872,
		70828,
		27320,
		187696
	],
	[
		693050,
		34075,
		286072,
		47221,
		17028,
		313418,
		66218,
		27478,
		189074
	],
	[
		567638,
		27296,
		252666,
		42388,
		15388,
		285299,
		62830,
		24477,
		156289
	],
	[
		491609,
		23626,
		239807,
		35596,
		16742,
		224689,
		56636,
		21171,
		139948
	],
	[
		467197,
		31270,
		288393,
		44220,
		18708,
		201306,
		53322,
		22670,
		156807
	],
	[
		363774,
		26647,
		268297,
		42861,
		17539,
		203805,
		47903,
		27460,
		154176
	],
	[
		292435,
		22070,
		228232,
		35208,
		15928,
		158052,
		49576,
		27269,
		138240
	],
	[
		266121,
		20688,
		224939,
		36897,
		14498,
		144553,
		53516,
		25510,
		148912
	],
	[
		252565,
		26717,
		248775,
		38563,
		19454,
		126333,
		59820,
		24357,
		153729
	],
	[
		205029,
		20774,
		215971,
		34052,
		17536,
		118991,
		58452,
		21391,
		127789
	],
	[
		195605,
		18628,
		182845,
		30048,
		16157,
		100602,
		57287,
		20432,
		106130
	],
	[
		187294,
		21063,
		178352,
		29002,
		13833,
		104955,
		59501,
		19676,
		119503
	],
	[
		177780,
		19330,
		174052,
		28585,
		14196,
		101215,
		75072,
		22149,
		117949
	],
	[
		175748,
		21029,
		194269,
		33380,
		15745,
		105478,
		73018,
		20936,
		110867
	],
	[
		176574,
		21837,
		207846,
		35510,
		16388,
		102721,
		65832,
		16004,
		110022
	]
];
var AgricultureForestryFishingVA = {
	side: side,
	banner: banner,
	matrix: matrix
};

const AOEIIUnitsAttackByStages = {
  side: ['Imperial', 'Castle', 'Feudal', 'Dark'],
  head: ['Barracks', 'Archery Range', 'Stable', 'Siege Workshop'],
  rows: [[9.8, 10, 10, 31.3], [6.7, 4.7, 7.3, 18], [4.5, 3, 5, NaN], [4, NaN, NaN, NaN]]
};

const AOEIIUnitsHpByStages = {
  side: ['Imperial', 'Castle', 'Feudal', 'Dark'],
  head: ['Barracks', 'Archery Range', 'Stable', 'Siege Workshop'],
  rows: [[62.5, 45, 118.8, 121.7], [53.3, 40, 86.7, 88.3], [45, 17, 45, NaN], [40, NaN, NaN, NaN]]
};

var side$1 = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$1 = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$1 = [
	[
		1040,
		1277,
		6311,
		1768,
		741,
		46,
		3,
		1083,
		10508
	],
	[
		1227,
		1980,
		8721,
		2302,
		1235,
		56,
		2,
		751,
		12485
	],
	[
		2360,
		2518,
		8447,
		2218,
		1367,
		37,
		null,
		479,
		9955
	],
	[
		1845,
		1759,
		7729,
		2017,
		1179,
		42,
		null,
		101,
		9931
	],
	[
		1160,
		1790,
		8007,
		1643,
		1651,
		36,
		null,
		163,
		9601
	],
	[
		2047,
		799,
		6768,
		1469,
		1610,
		14,
		null,
		347,
		7571
	],
	[
		1515,
		834,
		5768,
		1009,
		929,
		null,
		null,
		218,
		9086
	],
	[
		1252,
		1339,
		7997,
		1731,
		1055,
		3,
		null,
		345,
		9022
	],
	[
		1478,
		2725,
		6764,
		865,
		1157,
		5,
		null,
		197,
		8074
	],
	[
		1140,
		2521,
		8392,
		1888,
		1080,
		27,
		null,
		224,
		6913
	],
	[
		644,
		2380,
		7825,
		1966,
		987,
		15,
		null,
		109,
		6800
	],
	[
		509,
		3311,
		10059,
		2369,
		984,
		23,
		40,
		279,
		7850
	],
	[
		668,
		2764,
		9020,
		1665,
		997,
		33,
		null,
		158,
		7523
	],
	[
		286,
		2068,
		7407,
		1801,
		1060,
		19,
		null,
		108,
		6772
	],
	[
		413,
		1126,
		5667,
		2283,
		1216,
		27,
		null,
		73,
		6845
	],
	[
		700,
		1660,
		5402,
		1400,
		754,
		4,
		null,
		96,
		5665
	],
	[
		525,
		902,
		4709,
		1433,
		1100,
		null,
		null,
		null,
		4953
	],
	[
		515,
		895,
		5385,
		1416,
		1387,
		2,
		null,
		228,
		5615
	],
	[
		299,
		1610,
		5479,
		1081,
		1633,
		21,
		null,
		10,
		7576
	],
	[
		332,
		1857,
		6866,
		1818,
		1368,
		null,
		null,
		null,
		11555
	],
	[
		353,
		1808,
		8131,
		3168,
		1412,
		null,
		null,
		32,
		15725
	]
];
var ArmsExports = {
	side: side$1,
	banner: banner$1,
	matrix: matrix$1
};

var side$2 = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$2 = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$2 = [
	[
		1566,
		14,
		1982,
		196,
		533,
		1539,
		696,
		1317,
		613
	],
	[
		1190,
		43,
		2704,
		75,
		952,
		2917,
		454,
		1068,
		524
	],
	[
		1041,
		55,
		2408,
		45,
		259,
		3021,
		328,
		1113,
		446
	],
	[
		1169,
		89,
		2385,
		42,
		397,
		3065,
		329,
		272,
		516
	],
	[
		1137,
		102,
		1663,
		17,
		211,
		3334,
		293,
		721,
		548
	],
	[
		1372,
		108,
		2076,
		107,
		494,
		5376,
		276,
		184,
		787
	],
	[
		1675,
		136,
		2435,
		91,
		578,
		4395,
		222,
		1078,
		1196
	],
	[
		1102,
		84,
		2019,
		48,
		360,
		3596,
		304,
		1574,
		995
	],
	[
		1034,
		282,
		3615,
		103,
		491,
		2909,
		402,
		1282,
		1077
	],
	[
		1381,
		339,
		4096,
		76,
		376,
		1863,
		621,
		796,
		968
	],
	[
		1856,
		285,
		3855,
		5,
		490,
		1845,
		691,
		1683,
		951
	],
	[
		1654,
		75,
		6020,
		74,
		776,
		2267,
		517,
		1755,
		820
	],
	[
		2862,
		409,
		4123,
		67,
		308,
		1488,
		479,
		1651,
		631
	],
	[
		3566,
		199,
		3119,
		2,
		27,
		1204,
		398,
		805,
		522
	],
	[
		3284,
		238,
		3774,
		93,
		217,
		2225,
		403,
		1059,
		563
	],
	[
		2342,
		64,
		5006,
		57,
		775,
		2758,
		483,
		752,
		593
	],
	[
		2875,
		71,
		2633,
		43,
		720,
		2031,
		446,
		528,
		499
	],
	[
		2819,
		133,
		3605,
		66,
		1277,
		1200,
		442,
		773,
		493
	],
	[
		2521,
		113,
		3523,
		107,
		871,
		995,
		493,
		1396,
		334
	],
	[
		1749,
		129,
		3477,
		110,
		125,
		1216,
		1268,
		1644,
		222
	],
	[
		403,
		543,
		5104,
		174,
		741,
		758,
		1475,
		1431,
		264
	]
];
var ArmsImports = {
	side: side$2,
	banner: banner$2,
	matrix: matrix$2
};

var side$3 = [
	"2020-01-14",
	"2019-07-09",
	"2018-07-01",
	"2017-07-01",
	"2016-07-01",
	"2015-07-01",
	"2014-07-01",
	"2013-07-01",
	"2012-07-01",
	"2011-07-01",
	"2010-07-01",
	"2009-07-01",
	"2008-06-01",
	"2007-06-01",
	"2006-05-01",
	"2005-06-01",
	"2004-05-01",
	"2003-04-01",
	"2002-04-01",
	"2001-04-01",
	"2000-04-01"
];
var banner$3 = [
	"BRA",
	"GBR",
	"CHN",
	"EUZ",
	"HKG",
	"JPN",
	"RUS",
	"SGP",
	"KOR",
	"TWN",
	"USA"
];
var matrix$3 = [
	[
		"4.80",
		"4.41",
		"3.12",
		"4.58",
		"2.64",
		"3.54",
		"2.20",
		"4.38",
		"3.89",
		"2.41",
		"5.67"
	],
	[
		"4.60",
		"4.10",
		"3.05",
		"4.57",
		"2.62",
		"3.59",
		"2.04",
		"4.26",
		"3.81",
		"2.31",
		"5.74"
	],
	[
		"4.40",
		"4.23",
		"3.10",
		"4.74",
		"2.55",
		"3.51",
		"2.09",
		"4.28",
		"4.03",
		"2.27",
		"5.51"
	],
	[
		"5.10",
		"4.11",
		"2.92",
		"4.47",
		"2.46",
		"3.36",
		"2.28",
		"4.06",
		"3.84",
		"2.26",
		"5.30"
	],
	[
		"4.78",
		"3.94",
		"2.79",
		"4.21",
		"2.48",
		"3.47",
		"2.05",
		"4.01",
		"3.86",
		"2.15",
		"5.04"
	],
	[
		"4.28",
		"4.51",
		"2.74",
		"4.05",
		"2.48",
		"2.99",
		"1.88",
		"3.44",
		"3.76",
		"2.55",
		"4.79"
	],
	[
		"5.86",
		"4.93",
		"2.73",
		"4.95",
		"2.43",
		"3.64",
		"2.55",
		"3.80",
		"4.00",
		"2.63",
		"4.80"
	],
	[
		"5.28",
		"4.02",
		"2.61",
		"4.66",
		"2.19",
		"3.20",
		"2.64",
		"3.69",
		"3.43",
		"2.63",
		"4.56"
	],
	[
		"4.94",
		"4.16",
		"2.45",
		"4.34",
		"2.13",
		"4.09",
		"2.29",
		"3.50",
		"3.21",
		"2.48",
		"4.33"
	],
	[
		"6.16",
		"3.89",
		"2.27",
		"4.93",
		"1.94",
		"4.08",
		"2.70",
		"3.65",
		"3.50",
		"2.60",
		"4.07"
	],
	[
		"4.91",
		"3.48",
		"1.95",
		"4.33",
		"1.90",
		"3.67",
		"2.33",
		"3.08",
		"2.82",
		"2.34",
		"3.73"
	],
	[
		"4.02",
		"3.69",
		"1.83",
		"4.62",
		"1.72",
		"3.46",
		"2.04",
		"2.88",
		"2.59",
		"2.26",
		"3.57"
	],
	[
		"4.73",
		"4.57",
		"1.83",
		"5.34",
		"1.71",
		"2.62",
		"2.54",
		"2.92",
		"3.14",
		"2.47",
		"3.57"
	],
	[
		"3.61",
		"4.01",
		"1.45",
		"4.17",
		"1.54",
		"2.29",
		"2.03",
		"2.59",
		"3.14",
		"2.29",
		"3.41"
	],
	[
		"2.78",
		"3.65",
		"1.31",
		"3.77",
		"1.55",
		"2.23",
		"1.77",
		"2.27",
		"2.62",
		"2.33",
		"3.10"
	],
	[
		"2.39",
		"3.44",
		"1.27",
		"3.58",
		"1.54",
		"2.34",
		"1.48",
		"2.17",
		"2.49",
		"2.41",
		"3.06"
	],
	[
		"1.70",
		"3.37",
		"1.26",
		"3.29",
		"1.54",
		"2.32",
		"1.45",
		"1.93",
		"2.72",
		"2.25",
		"2.90"
	],
	[
		"1.48",
		"3.14",
		"1.20",
		"2.98",
		"1.47",
		"2.18",
		"1.32",
		"1.85",
		"2.70",
		"2.01",
		"2.71"
	],
	[
		"1.54",
		"2.89",
		"1.27",
		"2.38",
		"1.40",
		"2.02",
		"1.25",
		"1.81",
		"2.38",
		"2.01",
		"2.49"
	],
	[
		"1.64",
		"2.85",
		"1.20",
		"2.26",
		"1.37",
		"2.37",
		"1.21",
		"1.82",
		"2.26",
		"2.13",
		"2.54"
	],
	[
		"1.65",
		"3.00",
		"1.20",
		"2.38",
		"1.31",
		"2.77",
		"1.39",
		"1.88",
		"2.71",
		"2.29",
		"2.51"
	]
];
var title = "";
var BigMacIndex = {
	side: side$3,
	banner: banner$3,
	matrix: matrix$3,
	title: title
};

var side$4 = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$4 = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$4 = [
	[
		7260334,
		2843863,
		14166647,
		2147538,
		2398783,
		1919921,
		3744972,
		1048353,
		16902980
	],
	[
		6467886,
		2638396,
		13137450,
		2009351,
		2231050,
		1856916,
		3652843,
		970946,
		16069274
	],
	[
		6018664,
		2510755,
		12622162,
		1927496,
		2269099,
		1595164,
		3724681,
		903021,
		15419906
	],
	[
		5817206,
		2434333,
		12592259,
		1898245,
		2459047,
		1460638,
		3353402,
		889359,
		14900526
	],
	[
		5344152,
		2835700,
		14449140,
		2237113,
		2582300,
		1398201,
		3809955,
		923990,
		14388171
	],
	[
		4847442,
		2769239,
		14080723,
		2213650,
		2367452,
		1261474,
		4079503,
		860634,
		13849216
	],
	[
		4294993,
		2616719,
		13551751,
		2111348,
		2308165,
		1227164,
		4893851,
		809553,
		13522794
	],
	[
		3730126,
		2750516,
		14322303,
		2252702,
		2267025,
		1226761,
		4829893,
		788170,
		13152863
	],
	[
		2939280,
		2536122,
		13360031,
		2096777,
		2126428,
		1101423,
		4402870,
		709150,
		12695979
	],
	[
		2528446,
		2597014,
		13524388,
		2137604,
		2089276,
		904694,
		4087037,
		602687,
		12272811
	],
	[
		2266126,
		2703533,
		14673716,
		2247986,
		2474961,
		805841,
		3778588,
		672208,
		12328725
	],
	[
		1790726,
		2458118,
		13512211,
		2034082,
		2587153,
		798454,
		3324311,
		744401,
		11905251
	],
	[
		1438891,
		2214620,
		11828097,
		1785214,
		2275695,
		619748,
		3345110,
		673873,
		11333686
	],
	[
		1238029,
		2143301,
		11183136,
		1701162,
		2146916,
		555766,
		3506694,
		588161,
		10709823
	],
	[
		1076334,
		2105778,
		10671440,
		1631188,
		2052248,
		487584,
		3545379,
		490710,
		10065348
	],
	[
		960651,
		1891793,
		9270544,
		1424307,
		1731445,
		439853,
		3285666,
		449784,
		9470095
	],
	[
		894867,
		1550917,
		7587189,
		1146033,
		1502338,
		382824,
		3044926,
		412133,
		8987727
	],
	[
		828148,
		1466109,
		6954428,
		1049730,
		1374989,
		368490,
		3132094,
		356833,
		8603027
	],
	[
		769082,
		1464039,
		6866633,
		1037805,
		1380667,
		354513,
		3483020,
		365584,
		8200138
	],
	[
		683977,
		1655394,
		7397732,
		1138055,
		1399537,
		349552,
		3253976,
		307986,
		7630960
	],
	[
		621570,
		1673661,
		7376289,
		1150978,
		1359821,
		319042,
		2809364,
		230800,
		7144856
	]
];
var ConsumptionExpenditure = {
	side: side$4,
	banner: banner$4,
	matrix: matrix$4
};

var side$5 = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$5 = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$5 = [
	[
		13608152,
		3947620,
		18768076,
		2777535,
		2855297,
		2718732,
		4971323,
		1619424,
		20544343
	],
	[
		12143491,
		3656749,
		17367374,
		2586285,
		2666229,
		2652243,
		4859951,
		1530751,
		19485394
	],
	[
		11137946,
		3466790,
		16576328,
		2471286,
		2694283,
		2290432,
		4926667,
		1414804,
		18707188
	],
	[
		11015542,
		3360550,
		16473793,
		2438208,
		2928591,
		2103588,
		4389476,
		1382764,
		18219298
	],
	[
		10438529,
		3883920,
		18695045,
		2852166,
		3063803,
		2039127,
		4850414,
		1411334,
		17521747
	],
	[
		9570406,
		3732743,
		18077361,
		2811078,
		2786023,
		1856722,
		5155717,
		1305605,
		16784849
	],
	[
		8532231,
		3527345,
		17339358,
		2683825,
		2704888,
		1827638,
		6203213,
		1222807,
		16197007
	],
	[
		7551500,
		3744409,
		18399561,
		2861408,
		2659310,
		1823050,
		6157460,
		1202464,
		15542581
	],
	[
		6087165,
		3396354,
		17015367,
		2642610,
		2475244,
		1675615,
		5700098,
		1094499,
		14992053
	],
	[
		5101702,
		3397791,
		17118299,
		2690222,
		2410910,
		1341887,
		5231383,
		901935,
		14448933
	],
	[
		4594307,
		3730028,
		19157104,
		2918383,
		2922667,
		1198896,
		5037908,
		1002219,
		14712844
	],
	[
		3550342,
		3421229,
		17808017,
		2657213,
		3100882,
		1216735,
		4515265,
		1122679,
		14451859
	],
	[
		2752132,
		2992197,
		15413557,
		2318594,
		2713750,
		940260,
		4530377,
		1011797,
		13814611
	],
	[
		2285966,
		2845803,
		14440862,
		2196126,
		2538680,
		820382,
		4755411,
		898137,
		13036640
	],
	[
		1955347,
		2809188,
		13813051,
		2115742,
		2416932,
		709149,
		4815149,
		764881,
		12213729
	],
	[
		1660288,
		2496129,
		11962189,
		1840481,
		2053019,
		607699,
		4445658,
		680521,
		11458244
	],
	[
		1470550,
		2068624,
		9832174,
		1494287,
		1784474,
		514938,
		4115116,
		609020,
		10936419
	],
	[
		1339396,
		1944107,
		9026190,
		1376465,
		1640246,
		485441,
		4303544,
		533052,
		10581821
	],
	[
		1211347,
		1943145,
		8915877,
		1362249,
		1657817,
		468395,
		4887520,
		561633,
		10252345
	],
	[
		1093997,
		2194204,
		9603170,
		1492648,
		1682399,
		458820,
		4562079,
		485248,
		9630664
	],
	[
		1029043,
		2238991,
		9616863,
		1503109,
		1650172,
		421351,
		4032510,
		374241,
		9062818
	]
];
var Gdp = {
	side: side$5,
	banner: banner$5,
	matrix: matrix$5
};

var side$6 = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$6 = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$6 = [
	[
		5532093,
		1084085,
		4128511,
		469347,
		499942,
		727163,
		null,
		568795,
		null
	],
	[
		4923103,
		1003491,
		3813177,
		444996,
		468260,
		702796,
		1416389,
		549069,
		3547889
	],
	[
		4463055,
		953252,
		3636824,
		430847,
		473686,
		610221,
		1424064,
		497018,
		3358857
	],
	[
		4528949,
		909518,
		3612764,
		431068,
		531294,
		575276,
		1273809,
		482461,
		3374968
	],
	[
		4518212,
		1049086,
		4062298,
		506144,
		562498,
		563949,
		1342985,
		489734,
		3381100
	],
	[
		4227962,
		999726,
		3954257,
		505201,
		524247,
		527400,
		1388828,
		457246,
		3232460
	],
	[
		3875660,
		962400,
		3835025,
		479561,
		503820,
		537299,
		1659239,
		422937,
		3102696
	],
	[
		3513717,
		1013573,
		4116706,
		514429,
		496176,
		549863,
		1655230,
		419014,
		3017888
	],
	[
		2830447,
		911883,
		3801811,
		471593,
		466991,
		514834,
		1621371,
		379077,
		2901756
	],
	[
		2344640,
		840471,
		3793180,
		492441,
		451734,
		417614,
		1426727,
		300040,
		2792112
	],
	[
		2158052,
		1001463,
		4507776,
		549060,
		585581,
		373297,
		1461260,
		327950,
		3069208
	],
	[
		1664589,
		931823,
		4206838,
		508504,
		610208,
		376011,
		1349274,
		375124,
		3099364
	],
	[
		1308874,
		807127,
		3650622,
		447120,
		548326,
		290796,
		1358325,
		336283,
		2983107
	],
	[
		1074947,
		749963,
		3392355,
		430652,
		513076,
		242290,
		1436105,
		303916,
		2766830
	],
	[
		897532,
		741762,
		3260977,
		422250,
		489735,
		207207,
		1458923,
		261937,
		2560040
	],
	[
		757489,
		653656,
		2844526,
		371626,
		432333,
		166960,
		1352165,
		222822,
		2376360
	],
	[
		653685,
		545677,
		2374873,
		308562,
		387633,
		142435,
		1256742,
		197500,
		2257415
	],
	[
		599977,
		526254,
		2214555,
		288209,
		361870,
		128583,
		1345712,
		175598,
		2272339
	],
	[
		551614,
		538492,
		2224808,
		290076,
		383760,
		127993,
		1601066,
		192060,
		2302101
	],
	[
		496248,
		606794,
		2395995,
		316467,
		387873,
		121676,
		1507287,
		165251,
		2171714
	],
	[
		471289,
		635526,
		2442621,
		322339,
		385918,
		115042,
		1352802,
		129931,
		2054591
	]
];
var IndustryVA = {
	side: side$6,
	banner: banner$6,
	matrix: matrix$6
};

var side$7 = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$7 = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$7 = [
	[
		4002753,
		805458,
		2684985,
		269584,
		252529,
		403047,
		null,
		440941,
		null
	],
	[
		3558404,
		751905,
		2498606,
		258470,
		239433,
		394398,
		1007331,
		422065,
		2173320
	],
	[
		3225063,
		719141,
		2386660,
		254123,
		245126,
		348143,
		1018601,
		378910,
		2080661
	],
	[
		3250423,
		684786,
		2344242,
		254394,
		272371,
		327820,
		913596,
		374529,
		2116236
	],
	[
		3184235,
		785499,
		2586667,
		293215,
		287297,
		307206,
		957050,
		387963,
		2039369
	],
	[
		2935340,
		743756,
		2483061,
		291069,
		266949,
		283206,
		1002078,
		368686,
		1981754
	],
	[
		2690091,
		710987,
		2386995,
		278087,
		253343,
		289076,
		1223989,
		344448,
		1919703
	],
	[
		2421373,
		757606,
		2576059,
		297472,
		251708,
		294228,
		1210909,
		342438,
		1857682
	],
	[
		1924324,
		668919,
		2340719,
		272906,
		236409,
		285356,
		1187502,
		304284,
		1788954
	],
	[
		1611946,
		600843,
		2262175,
		284892,
		220651,
		230047,
		1001608,
		234967,
		1695073
	],
	[
		1475664,
		747854,
		2759516,
		324074,
		281165,
		204995,
		1079537,
		258555,
		1803162
	],
	[
		1149720,
		713468,
		2632874,
		309025,
		301653,
		205197,
		996792,
		285849,
		1847305
	],
	[
		893131,
		618181,
		2285633,
		271906,
		278372,
		162699,
		979191,
		253765,
		1795087
	],
	[
		733656,
		571145,
		2154509,
		269010,
		269365,
		131040,
		1029302,
		229170,
		1693860
	],
	[
		625224,
		562789,
		2103511,
		268376,
		268158,
		112239,
		1027189,
		196738,
		1609793
	],
	[
		null,
		495221,
		1855367,
		240991,
		240851,
		94724,
		938495,
		162427,
		1525789
	],
	[
		null,
		409379,
		1564551,
		203000,
		220114,
		80118,
		859389,
		147534,
		1470447
	],
	[
		null,
		395454,
		1474378,
		193124,
		206879,
		74307,
		914666,
		131480,
		1473246
	],
	[
		null,
		399238,
		1491950,
		197220,
		223609,
		74601,
		1102537,
		146096,
		1549835
	],
	[
		null,
		438723,
		1608995,
		215589,
		234891,
		69651,
		1025159,
		122317,
		1488256
	],
	[
		null,
		456975,
		1652223,
		220458,
		240616,
		66234,
		923460,
		93594,
		1429598
	]
];
var ManufacturingVA = {
	side: side$7,
	banner: banner$7,
	matrix: matrix$7
};

var side$8 = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$8 = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$8 = [
	[
		6324880,
		1755173,
		null,
		2365950,
		null,
		2083483,
		5296811,
		1413717,
		30436313
	],
	[
		8711267,
		2262223,
		null,
		2749315,
		null,
		2331567,
		6222825,
		1771768,
		32120703
	],
	[
		7320738,
		1716042,
		null,
		2159047,
		null,
		1566680,
		4955300,
		1254541,
		27352201
	],
	[
		8188019,
		1715800,
		null,
		2088317,
		null,
		1516217,
		4894919,
		1231200,
		25067540
	],
	[
		6004948,
		1738539,
		null,
		2085896,
		null,
		1558300,
		4377994,
		1212759,
		26330589
	],
	[
		3949143,
		1936106,
		null,
		2301085,
		null,
		1138834,
		4543169,
		1234549,
		24034854
	],
	[
		3697376,
		1486315,
		null,
		1808189,
		null,
		1263336,
		3478832,
		1179419,
		18668333
	],
	[
		3412108,
		1184500,
		null,
		1553957,
		null,
		1007183,
		3325388,
		996140,
		15640707
	],
	[
		4027840,
		1429719,
		null,
		1911515,
		null,
		1631830,
		3827774,
		1091911,
		17283452
	],
	[
		3573152,
		1292355,
		null,
		1946185,
		null,
		1306520,
		3306082,
		834597,
		15077286
	],
	[
		1778784,
		1110580,
		7059082,
		1472407,
		1868153,
		647205,
		3115804,
		470798,
		11590278
	],
	[
		4478867,
		2105198,
		14357628,
		2740341,
		3846462,
		1819101,
		4330922,
		1122606,
		19922280
	],
	[
		1145455,
		1637610,
		12454183,
		2428252,
		3781359,
		818879,
		4614069,
		834404,
		19568973
	],
	[
		401852,
		1202136,
		9371594,
		1758513,
		3058182,
		553074,
		4572901,
		718011,
		17000864
	],
	[
		447720,
		1194517,
		9059976,
		1559110,
		2815928,
		387851,
		3557674,
		428326,
		16323726
	],
	[
		512979,
		1079026,
		7880477,
		1355925,
		2425822,
		279093,
		2953098,
		329457,
		14266266
	],
	[
		null,
		686014,
		5670180,
		967015,
		1856194,
		null,
		2069299,
		250707,
		11054430
	],
	[
		null,
		1071749,
		6870708,
		1174663,
		2149501,
		null,
		2264528,
		233921,
		13983666
	],
	[
		null,
		1270243,
		8379518,
		1446634,
		2576991,
		null,
		3157222,
		171262,
		15107751
	],
	[
		null,
		1432167,
		8999671,
		1502952,
		2954815,
		null,
		4455348,
		306128,
		14777387
	],
	[
		null,
		1094253,
		6370298,
		985227,
		2297651,
		null,
		2439549,
		114593,
		12922580
	]
];
var MarketCapListedDomestic = {
	side: side$8,
	banner: banner$8,
	matrix: matrix$8
};

var side$9 = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$9 = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$9 = [
	[
		249997,
		49471,
		280960,
		63800,
		49997,
		66510,
		46618,
		43070,
		648798
	],
	[
		227829,
		45382,
		257217,
		60417,
		46433,
		64559,
		45387,
		39171,
		605803
	],
	[
		216031,
		41579,
		244506,
		57358,
		48119,
		56638,
		46471,
		36885,
		600106
	],
	[
		214093,
		39813,
		243833,
		55342,
		53862,
		51295,
		42106,
		36571,
		596105
	],
	[
		200772,
		46103,
		279465,
		63614,
		59183,
		50914,
		46881,
		37552,
		609914
	],
	[
		179880,
		45931,
		277913,
		62417,
		56862,
		47404,
		49024,
		34311,
		639704
	],
	[
		157390,
		46471,
		277866,
		60035,
		58496,
		47217,
		60012,
		31952,
		684780
	],
	[
		137967,
		48140,
		296640,
		64601,
		60270,
		49634,
		60762,
		30992,
		711338
	],
	[
		115712,
		46256,
		286072,
		61782,
		58083,
		46090,
		54655,
		28175,
		698180
	],
	[
		105644,
		47470,
		298458,
		66884,
		57915,
		38722,
		51465,
		24576,
		668567
	],
	[
		86362,
		48081,
		317023,
		66009,
		65619,
		33002,
		46361,
		26072,
		621131
	],
	[
		68012,
		42552,
		291087,
		60595,
		65986,
		28255,
		40530,
		27726,
		556961
	],
	[
		55337,
		38092,
		257175,
		54516,
		57483,
		23952,
		41553,
		25177,
		527660
	],
	[
		45919,
		38054,
		248794,
		52909,
		55152,
		23072,
		44301,
		22160,
		503353
	],
	[
		40353,
		38008,
		243691,
		53007,
		53970,
		20239,
		45340,
		17830,
		464676
	],
	[
		35126,
		35055,
		214425,
		45917,
		46943,
		16334,
		42486,
		15847,
		415223
	],
	[
		32138,
		29333,
		176080,
		36404,
		39660,
		14750,
		39334,
		14102,
		356720
	],
	[
		27875,
		27425,
		161661,
		33277,
		35332,
		14601,
		40758,
		12942,
		312743
	],
	[
		22930,
		28150,
		162917,
		33814,
		35255,
		14288,
		45510,
		13801,
		301697
	],
	[
		21027,
		32604,
		179363,
		38897,
		36453,
		13896,
		43123,
		12095,
		280969
	],
	[
		17528,
		33146,
		181585,
		40041,
		36866,
		11921,
		37849,
		10458,
		274278
	]
];
var MilitaryExpenditure = {
	side: side$9,
	banner: banner$9,
	matrix: matrix$9
};

var side$a = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$a = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$a = [
	[
		1393,
		83,
		513,
		67,
		66,
		1353,
		127,
		52,
		327
	],
	[
		1386,
		83,
		512,
		67,
		66,
		1339,
		127,
		51,
		325
	],
	[
		1379,
		82,
		511,
		67,
		66,
		1325,
		127,
		51,
		323
	],
	[
		1371,
		82,
		510,
		67,
		65,
		1310,
		127,
		51,
		321
	],
	[
		1364,
		81,
		508,
		66,
		65,
		1296,
		127,
		51,
		318
	],
	[
		1357,
		81,
		507,
		66,
		64,
		1281,
		127,
		50,
		316
	],
	[
		1351,
		80,
		505,
		66,
		64,
		1266,
		128,
		50,
		314
	],
	[
		1344,
		80,
		504,
		65,
		63,
		1250,
		128,
		50,
		312
	],
	[
		1338,
		82,
		504,
		65,
		63,
		1234,
		128,
		50,
		309
	],
	[
		1331,
		82,
		503,
		65,
		62,
		1218,
		128,
		49,
		307
	],
	[
		1325,
		82,
		502,
		64,
		62,
		1201,
		128,
		49,
		304
	],
	[
		1318,
		82,
		500,
		64,
		61,
		1183,
		128,
		49,
		301
	],
	[
		1311,
		82,
		498,
		64,
		61,
		1165,
		128,
		48,
		298
	],
	[
		1304,
		82,
		496,
		63,
		60,
		1148,
		128,
		48,
		296
	],
	[
		1296,
		83,
		494,
		63,
		60,
		1130,
		128,
		48,
		293
	],
	[
		1288,
		83,
		492,
		62,
		60,
		1112,
		128,
		48,
		290
	],
	[
		1280,
		82,
		490,
		62,
		59,
		1093,
		127,
		48,
		288
	],
	[
		1272,
		82,
		489,
		61,
		59,
		1075,
		127,
		47,
		285
	],
	[
		1263,
		82,
		488,
		61,
		59,
		1057,
		127,
		47,
		282
	],
	[
		1253,
		82,
		487,
		60,
		59,
		1038,
		127,
		47,
		279
	],
	[
		1242,
		82,
		487,
		60,
		58,
		1019,
		126,
		46,
		276
	]
];
var Population = {
	side: side$a,
	banner: banner$a,
	matrix: matrix$a
};

var side$b = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$b = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$b = [
	[
		569,
		19,
		125,
		13,
		11,
		892,
		11,
		10,
		58
	],
	[
		583,
		19,
		126,
		13,
		11,
		889,
		11,
		10,
		58
	],
	[
		596,
		19,
		127,
		13,
		11,
		885,
		11,
		9,
		59
	],
	[
		610,
		19,
		127,
		14,
		11,
		881,
		11,
		9,
		59
	],
	[
		624,
		18,
		128,
		14,
		11,
		876,
		11,
		9,
		59
	],
	[
		638,
		18,
		129,
		14,
		11,
		871,
		11,
		9,
		59
	],
	[
		652,
		18,
		129,
		14,
		12,
		865,
		11,
		9,
		59
	],
	[
		665,
		18,
		130,
		14,
		12,
		859,
		11,
		9,
		59
	],
	[
		679,
		19,
		131,
		14,
		12,
		853,
		12,
		9,
		59
	],
	[
		694,
		19,
		132,
		14,
		12,
		845,
		13,
		9,
		59
	],
	[
		708,
		19,
		133,
		14,
		12,
		838,
		14,
		9,
		59
	],
	[
		722,
		19,
		133,
		14,
		12,
		829,
		15,
		9,
		59
	],
	[
		736,
		20,
		134,
		14,
		12,
		821,
		16,
		9,
		59
	],
	[
		749,
		20,
		135,
		14,
		12,
		812,
		18,
		9,
		59
	],
	[
		763,
		20,
		135,
		14,
		12,
		803,
		20,
		9,
		59
	],
	[
		776,
		20,
		136,
		15,
		12,
		794,
		21,
		9,
		59
	],
	[
		788,
		20,
		136,
		15,
		12,
		785,
		23,
		9,
		59
	],
	[
		800,
		20,
		137,
		15,
		13,
		775,
		25,
		10,
		59
	],
	[
		810,
		21,
		138,
		15,
		13,
		764,
		27,
		10,
		59
	],
	[
		816,
		21,
		138,
		15,
		13,
		753,
		27,
		10,
		59
	],
	[
		821,
		21,
		139,
		15,
		13,
		742,
		27,
		10,
		60
	]
];
var RuralPopulation = {
	side: side$b,
	banner: banner$b,
	matrix: matrix$b
};

var side$c = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$c = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$c = [
	[
		13070642,
		1616150,
		null,
		null,
		null,
		1259499,
		6304085,
		2455740,
		33027246
	],
	[
		17171575,
		1558599,
		null,
		null,
		null,
		1186011,
		5778429,
		2011934,
		39785881
	],
	[
		18241294,
		1124112,
		null,
		null,
		null,
		801875,
		5230238,
		1600850,
		42071330
	],
	[
		39326017,
		1444613,
		null,
		null,
		null,
		771998,
		5571527,
		1843731,
		41398502
	],
	[
		11959329,
		1269067,
		null,
		1168618,
		null,
		730704,
		4844710,
		1283700,
		38976647
	],
	[
		7695981,
		1312612,
		null,
		1105517,
		null,
		537777,
		6083166,
		1329852,
		33247253
	],
	[
		5027199,
		1249945,
		null,
		1074477,
		null,
		616074,
		3346413,
		1584674,
		32349465
	],
	[
		6673985,
		1573604,
		null,
		1329957,
		null,
		645445,
		4310282,
		1934405,
		41045547
	],
	[
		8257742,
		1494657,
		null,
		1350175,
		null,
		1081056,
		4270297,
		1629754,
		36025378
	],
	[
		7830777,
		1787794,
		5298056,
		1284110,
		null,
		1090556,
		3868144,
		1685458,
		34306381
	],
	[
		3905058,
		4189639,
		13999929,
		2405976,
		2735563,
		925455,
		6208708,
		1187222,
		47245496
	],
	[
		6305448,
		3254837,
		16972985,
		2895762,
		3947700,
		1143384,
		6585830,
		1917886,
		42852575
	],
	[
		1158991,
		1950838,
		10843996,
		2015577,
		2763296,
		651783,
		5498545,
		1339272,
		30581777
	],
	[
		392367,
		1288068,
		7249971,
		1271455,
		1729902,
		463860,
		4337680,
		1199717,
		25792192
	],
	[
		511496,
		1181299,
		7322398,
		1323735,
		1621275,
		392769,
		3457686,
		525823,
		19103124
	],
	[
		388002,
		1017281,
		5786474,
		1103022,
		1245706,
		272033,
		2327856,
		457214,
		16045083
	],
	[
		338208,
		871757,
		4982193,
		1032545,
		1047575,
		null,
		1732590,
		580979,
		17052861
	],
	[
		462780,
		1301050,
		7418660,
		980888,
		1893938,
		null,
		1701945,
		374014,
		20883580
	],
	[
		752583,
		1827237,
		8894296,
		1080301,
		1833384,
		null,
		2481024,
		495366,
		29782046
	],
	[
		null,
		1308494,
		6166506,
		723606,
		1423786,
		null,
		2028693,
		764684,
		18815725
	],
	[
		284390,
		1468732,
		4954076,
		603976,
		1044696,
		null,
		1045480,
		160370,
		12305237
	]
];
var StocksTradedValue = {
	side: side$c,
	banner: banner$c,
	matrix: matrix$c
};

var side$d = [
	"2018",
	"2017",
	"2016",
	"2015",
	"2014",
	"2013",
	"2012",
	"2011",
	"2010",
	"2009",
	"2008",
	"2007",
	"2006",
	"2005",
	"2004",
	"2003",
	"2002",
	"2001",
	"2000",
	"1999",
	"1998"
];
var banner$d = [
	"CHN",
	"DEU",
	"EUU",
	"FRA",
	"GBR",
	"IND",
	"JPN",
	"KOR",
	"USA"
];
var matrix$d = [
	[
		824,
		64,
		388,
		54,
		55,
		460,
		116,
		42,
		269
	],
	[
		804,
		64,
		386,
		54,
		55,
		450,
		116,
		42,
		267
	],
	[
		782,
		64,
		385,
		53,
		54,
		439,
		116,
		42,
		264
	],
	[
		761,
		63,
		382,
		53,
		54,
		429,
		116,
		42,
		262
	],
	[
		740,
		63,
		380,
		53,
		53,
		420,
		116,
		41,
		259
	],
	[
		720,
		62,
		378,
		52,
		53,
		410,
		116,
		41,
		257
	],
	[
		699,
		62,
		376,
		52,
		52,
		400,
		116,
		41,
		255
	],
	[
		679,
		62,
		374,
		51,
		52,
		391,
		116,
		41,
		252
	],
	[
		658,
		63,
		373,
		51,
		51,
		382,
		116,
		41,
		250
	],
	[
		637,
		63,
		371,
		51,
		50,
		372,
		115,
		40,
		247
	],
	[
		616,
		63,
		369,
		50,
		50,
		363,
		114,
		40,
		245
	],
	[
		596,
		63,
		367,
		50,
		49,
		354,
		113,
		40,
		242
	],
	[
		575,
		63,
		364,
		49,
		49,
		345,
		111,
		39,
		239
	],
	[
		554,
		63,
		361,
		49,
		48,
		336,
		110,
		39,
		236
	],
	[
		533,
		63,
		359,
		48,
		48,
		326,
		108,
		39,
		234
	],
	[
		512,
		62,
		356,
		48,
		47,
		318,
		106,
		39,
		231
	],
	[
		492,
		62,
		354,
		47,
		47,
		309,
		104,
		38,
		228
	],
	[
		472,
		62,
		352,
		47,
		47,
		300,
		102,
		38,
		226
	],
	[
		453,
		62,
		350,
		46,
		46,
		292,
		100,
		37,
		223
	],
	[
		437,
		61,
		349,
		46,
		46,
		285,
		99,
		37,
		220
	],
	[
		421,
		61,
		348,
		45,
		46,
		278,
		99,
		37,
		216
	]
];
var UrbanPopulation = {
	side: side$d,
	banner: banner$d,
	matrix: matrix$d
};

/**
 * @property {Function|function(Object):*[]} flopHLookUp
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */

const CrostabCollection = {
  get AOEIIUnitsAttackByStages() {
    return AOEIIUnitsAttackByStages;
  },

  get AOEIIUnitsHpByStages() {
    return AOEIIUnitsHpByStages;
  },

  get BigMacIndex() {
    return BigMacIndex;
  },

  get Gdp() {
    return Gdp;
  },

  get Population() {
    return Population;
  },

  get RuralPopulation() {
    return RuralPopulation;
  },

  get UrbanPopulation() {
    return UrbanPopulation;
  },

  get ArmsImports() {
    return ArmsImports;
  },

  get ArmsExports() {
    return ArmsExports;
  },

  get MilitaryExpenditure() {
    return MilitaryExpenditure;
  },

  get ConsumptionExpenditure() {
    return ConsumptionExpenditure;
  },

  get IndustryVA() {
    return IndustryVA;
  },

  get ManufacturingVA() {
    return ManufacturingVA;
  },

  get AgricultureForestryFishingVA() {
    return AgricultureForestryFishingVA;
  },

  get StocksTradedValue() {
    return StocksTradedValue;
  },

  get MarketCapListedDomestic() {
    return MarketCapListedDomestic;
  }

};
Reflect.defineProperty(CrostabCollection, util.FLOP_SHUFFLE, {
  value(options = {}) {
    options.oscillate = options.oscillate || true;
    const key = options.p || rand.flopKey(this);
    const crostab = crostabSelect.crostabShuffle(this[key], options);
    return options.keyed ? objectInit.pair(key, crostab) : crostab;
  },

  enumerable: false
});
Reflect.defineProperty(CrostabCollection, 'flopHLookUp', {
  value(options = {}) {
    var _crostab$side;

    const key = options.p || rand.flopKey(this);
    const size = options.size || rand.randBetw(4, 7);
    const crostab$1 = crostab.CrosTab.from(this[key]);
    const label = (_crostab$side = crostab$1.side, rand.flop(_crostab$side));
    const entries = entriesInit.wind(crostab$1.head, crostab$1.row(label));
    return options.keyed ? objectInit.pair(`${key}_${label}`, vectorSelect.shuffle(entries, size)) : vectorSelect.shuffle(entries, size);
  },

  enumerable: false
});

exports.CrostabCollection = CrostabCollection;
exports.Foba = CrostabCollection;
