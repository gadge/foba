import { deco }         from '@spare/deco'
import { logger, says } from '@spare/logger'
import {
  ModestMatrixCollection,
  SimpleEntriesCollection,
  SimpleMatrixCollection,
  SimpleObjectCollection,
  SimpleVectorCollection
}                       from '..'

SimpleVectorCollection |> deco |> says['SimpleVectorCollection']

'' |> logger

SimpleEntriesCollection |> deco |> says['SimpleEntriesCollection']

'' |> logger

SimpleObjectCollection |> deco |> says['SimpleObjectCollection']

'' |> logger

SimpleMatrixCollection |> deco |> says['SimpleMatrixCollection']

'' |> logger

ModestMatrixCollection |> deco |> says['ModestMatrixCollection']

'' |> logger
