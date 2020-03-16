import { SimpleEntries, SimpleMatrices, SimpleMatricesRobust, SimpleObjects, SimpleVectors } from '..'
import { logger, says } from '@spare/logger'
import { deco } from '@spare/deco'

SimpleVectors |> deco |> says['SimpleVectors']

'' |> logger

SimpleEntries |> deco |> says['SimpleEntries']

'' |> logger

SimpleObjects |> deco |> says['SimpleObjects']

'' |> logger

SimpleMatrices |> deco |> says['SimpleMatrices']

'' |> logger

SimpleMatricesRobust |> deco |> says['SimpleMatricesRobust']

'' |> logger
