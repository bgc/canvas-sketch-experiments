import canvasSketch from 'canvas-sketch'

import random from 'canvas-sketch-util/random'

import sketchBorder from './helpers/sketchBorder'
import gridMaker from './helpers/gridMaker'

import { circles, myLines, betterLines, zLines, multipleArcs, vertLinesRnd, furLike } from './drawing/index'

// eslint-disable-next-line no-unused-vars
import Grid from './helpers/Grid/Grid'
import { DrawingFNProps, SketchProps, DrawProperties, Settings } from '../types/index'

import { DRAW_PROPERTIES, RANDOM_SEED, settings } from './setup'

type rand = {
  value(): number
  setSeed(n: number | string): void
  getSeed(): number | string
  getRandomSeed(): number
  valueNonZero(): number
  noise1D(x: number, frequency?: number, amplitude?: number): number
  noise2D(x: number, y: number, frequency?: number, amplitude?: number): number
  noise3D(x: number, y: number, z: number, frequency?: number, amplitude?: number): [number, number, number]
  noise4D(x: number, y: number, z: number, w: number, frequency?: number, amplitude?: number): [number, number, number, number]
  permuteNoise(): void
  sign(): -1 | 1
  boolean(): boolean
  chance(probability: number): boolean
  range(min: number, max: number): number
  pick(arr: [any]): any
}


// https://github.com/opentypejs/opentype.js

const sketchFn = (
  {
    context,
    width,
    height
  }: {
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  }
) => {
  DRAW_PROPERTIES.mid = {
    x: width / 2,
    y: height / 2
  }

  // sketchBorder(context, DRAW_PROPERTIES.margins, width, height)

  const grid = gridMaker(
    DRAW_PROPERTIES.cols,
    DRAW_PROPERTIES.rows,
    width,
    height,
    DRAW_PROPERTIES.margins
  )

  // grid.drawGrid(context)

  const randInstance: rand = random.createRandom(RANDOM_SEED)

context.fillStyle = "#ffffff"
  context.fillRect(
    0,
    0,
    width,
    height
  )


  false && circles({
    context,
    DRAW_PROPERTIES
  }, randInstance, grid)

  false && zLines({
    context,
    DRAW_PROPERTIES
  }, randInstance, grid)

  false && myLines({
    context,
    DRAW_PROPERTIES
  }, randInstance, grid)

  false && betterLines({
    context,
    DRAW_PROPERTIES
  }, randInstance, grid)

  false && vertLinesRnd({
    context,
    DRAW_PROPERTIES
  }, randInstance, grid)

  furLike({
    context,
    DRAW_PROPERTIES
  }, randInstance, grid)

  false && multipleArcs({
    context,
    DRAW_PROPERTIES
  }, randInstance, 120, 130)
}

const sketch = () => sketchFn

canvasSketch(sketch, settings)