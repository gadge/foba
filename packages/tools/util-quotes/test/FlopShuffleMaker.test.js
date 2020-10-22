import { delogger }         from '@spare/deco'
import { FlopShuffleMaker } from '../src/FlopShuffleMaker'

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  static build(x, y) {
    return new Point(x, y)
  }
}

const collection = {
  foo: [Point.build(1, 2), Point.build(3, 4)],
  bar: [Point.build(1, -2), Point.build(3, -4)],
  kha: [Point.build(-1, 2), Point.build(-3, 4)],
  zen: [Point.build(-1, -2), Point.build(-3, -4)]
}

FlopShuffleMaker.defineFlop(collection)
FlopShuffleMaker.defineFlopShuffle(collection)
collection.flop() |> delogger
collection.flopShuffle() |> delogger

