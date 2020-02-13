import { logger } from '@spare/logger'

export const absoluteMirror = () => {
  for (let i = 0; i < 10; i++) {
    (2 ** i) - 1 |> logger
  }
}

absoluteMirror() |> logger
