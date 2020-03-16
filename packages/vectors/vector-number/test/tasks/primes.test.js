import { decoLog } from '@spare/deco'
import { logger } from '@spare/logger'
import { primes } from '../../src/functions/primes'

const ar = primes(30)
ar |> decoLog
ar.length |> logger
