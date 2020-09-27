import { AVERAGE, INCRE } from '@analys/enum-pivot-mode'
import { roundD1 }        from '@aryth/math'
import { esvar }          from '@flua/utils'
import { Vinylize }       from '@flua/vinylize'
import { says, Xr }       from '@spare/logger'
import { Verse }          from '@spare/verse'
import { time }           from '@valjoux/timestamp-pretty'
import { rawIndicators }  from '@volks/worldbank-indicator'
import gulp               from 'gulp'

const DEST = 'packages/tabulars/table/static/worldbank'

const logger = says['saveWorldbankTable'].attach(time)
export const IndicatorCollection = {
  GDPinBnUsd: {
    indicator: {
      'NY.GDP.MKTP.CD': 'GDP', // 'GDP (current US$)', // ['Econ']
      'NV.AGR.TOTL.CD': 'AgricultureVA', // 'Agriculture, forestry, and fishing, value added (current US$)', // ['AgriRural', 'Econ']
      'NV.IND.TOTL.CD': 'IndustryVA', // 'Industry (including construction), value added (current US$)', // ['Econ']
      'NY.GNS.ICTR.CD': 'GrossSavings', // 'Gross savings (current US$)', // ['Econ']
      'NE.EXP.GNFS.CD': 'Exports', // 'Exports of goods and services (current US$)', // ['Econ', 'Trade']
      'NE.IMP.GNFS.CD': 'Imports', // 'Imports of goods and services (current US$)', // ['Econ', 'Trade']
    },
    country: ['USA', 'CHN', 'RUS', 'FRA', 'GBR', 'DEU', 'JPN', 'IND', 'SSF'],
    year: [1986, 1993, 2000, 2007, 2014, 2018, 2019],
    spec: {
      name: 'CountryGDPByYear',
      side: 'year',
      banner: 'country',
      field: { value: INCRE },
      filter: { indicator: x => x === 'NY.GDP.MKTP.CD' },
      formula: x => roundD1(x / 1E+9)
    }
  },
  Military: {
    indicator: {
      'MS.MIL.XPND.CN': 'Expenditure', // 'Military expenditure (current LCU)', // ['Public']
      'MS.MIL.TOTL.P1': 'Personnel', // 'Armed forces personnel, total', // ['Public']
      'MS.MIL.MPRT.KD': 'ArmsImports', // 'Arms imports (SIPRI trend indicator values)', // ['Public', 'Trade']
      'MS.MIL.XPRT.KD': 'ArmsExports', // 'Arms exports (SIPRI trend indicator values)', // ['Public', 'Trade']
    },
    country: ['USA', 'CHN', 'RUS', 'FRA', 'GBR', 'DEU', 'JPN', 'IND', 'SSF'],
    year: [1986, 1993, 2000, 2007, 2014, 2018, 2019],
    spec: {
      name: 'MilitaryByCountry2019',
      side: 'country',
      banner: 'indicatorName',
      field: { value: INCRE },
      filter: { year: y => y === 2018 },
      formula: x => roundD1(x / 1E+6)
    }
  },
  TeachersCountK: {
    indicator: {
      'UIS.T.1': 'Primary', // 'Teachers in primary education, both sexes (number)', // ['Edu']
      'UIS.T.2': 'L.Sec', // 'Teachers in lower secondary education, both sexes (number)', // ['Edu']
      'UIS.T.3': 'U.Sec', // 'Teachers in upper secondary education, both sexes (number)', // ['Edu']
      'SE.TER.TCHR': 'Tertiary', // 'Teachers in tertiary education programmes, both sexes (number)', // ['Edu']
    },
    country: ['USA', 'CHN', 'RUS', 'FRA', 'GBR', 'DEU', 'JPN', 'IND', 'SSF'],
    year: [1986, 2019],
    to: x => (+x !== 0) ? roundD1(x / 1000) : null,
    spec: {
      name: 'TeachersCountByYear',
      side: {
        indicatorName: x => x,
        year: year => ~~(year / 5) * 5
      },
      banner: ['country'],
      field: { value: AVERAGE },
      formula: x => roundD1(x.value)
    }
  },
  NationalIncomeShare: {
    indicator: {
      'SI.DST.10TH.10': 'Top10', // 'Income share held by highest 10%', // ['Poverty']
      'SI.DST.05TH.20': 'Top20', // 'Income share held by highest 20%', // ['Poverty']
      'SI.DST.04TH.20': 'U.Mid20', // 'Income share held by fourth 20%', // ['Poverty']
      'SI.DST.03RD.20': 'Mid20', // 'Income share held by third 20%', // ['Poverty']
      'SI.DST.02ND.20': 'L.Mid20', // 'Income share held by second 20%', // ['Poverty']
      'SI.DST.FRST.20': 'Bottom20', // 'Income share held by lowest 20%', // ['Poverty', 'Aid']
      'SI.DST.FRST.10': 'Bottom10', // 'Income share held by lowest 10%', // ['Poverty']
    },
    country: ['USA', 'CHN', 'RUS', 'FRA', 'GBR', 'DEU', 'JPN', 'IND', 'SSF'],
    year: [1986, 1993, 2000, 2007, 2014, 2018, 2019],
  },
  LandAreasKSqKm: {
    indicator: {
      'AG.LND.TOTL.K2': 'Land', // 'Land area (sq. km)', // ['AgriRural', 'Env']
      'AG.LND.FRST.K2': 'Forest', // 'Forest area (sq. km)', // ['AgriRural', 'Climate', 'Env']
      'AG.LND.ARBL.K2': 'Arable', // 'Arable land (sq. km)', // ['AgriRural']
      'AG.LND.AGRI.K2': 'Agricultural', // 'Agricultural land (sq. km)', // ['AgriRural', 'Climate']
    },
    country: ['USA', 'CHN', 'RUS', 'FRA', 'GBR', 'DEU', 'JPN', 'IND', 'SSF'],
    year: [1986, 1993, 2000, 2007, 2014, 2018, 2019],
    to: x => roundD1(x / 1000),
    spec: {
      name: 'AreaByCountry',
      side: 'country',
      banner: 'indicatorName',
      field: { value: INCRE },
      filter: { year: y => y === 2014 },
    }
  },
  FinancialAssetsToGDP: {
    indicator: {
      'CM.MKT.LCAP.GD.ZS': 'domesticMarketCap', // 'Market capitalization of listed domestic companies (% of GDP)', // ['Fin']
      'GFDD.DM.01': 'stockMarketCap', // 'Stock market capitalization to GDP (%)', // ['Fin']
      'FS.AST.PRVT.GD.ZS': 'domesticCredit', // 'Domestic credit to private sector (% of GDP)', // ['Fin', 'Private']
      'GFDD.DI.11': 'insuranceAssets', // 'Insurance company assets to GDP (%)', // ['Fin']
      'GFDD.DM.02': 'valTraded', // 'Stock market total value traded to GDP (%)', // ['Fin']
    },
    country: ['USA', 'CHN', 'RUS', 'FRA', 'GBR', 'DEU', 'JPN', 'IND'],
    year: [1986, 2020],
    spec: {
      name: 'FinancialAssetsToGDPByYear',
      side: ['country', 'year'],
      banner: 'indicatorName',
      field: { value: INCRE },
      formula: roundD1
    }
  }
}

export const saveWorldbankTable = async () => {
  for (let key in IndicatorCollection) {
    const { indicator, country, year, to } = IndicatorCollection[key]
    const table = await rawIndicators({ country, indicator, year, spin: true })
    table.proliferateColumn(
      { key: 'indicator', to: x => indicator[x], as: 'indicatorName' },
      { nextTo: 'indicator', mutate: true }
    )
    if (to) table.mutateColumn('value', to)
    await Vinylize(key + '.js')
      .p(esvar(key))
      .p(Verse.table(table))
      .asyncPipe(gulp.dest(DEST))
    Xr().written(key + '.js') |> logger
  }
}