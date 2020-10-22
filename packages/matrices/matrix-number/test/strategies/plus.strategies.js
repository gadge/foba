import { makeEmbedded }              from '@foba/util'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 2E+7,
    candidates: {
      alpha: 1,
      beta: 2,
      gamma: 3
    } |> makeEmbedded,
    methods: {
      arch: x => x++,
      dev: x => (x += 2, x),
      edge: x => (x++, x++),
      bench: x => x,
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
}
test()