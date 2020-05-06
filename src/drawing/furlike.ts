import { DrawingFNProps } from '../../types/index'
type rand = {
  value: () => number;
  noise2D: (x: number, y: number, frequency?: number, amplitude?: number) => number,
  pick: (arr: any[]) => any
  boolean: () => boolean
  chance: (probability: number) => boolean
  range: (min: number, max: number) => number
}
import Grid from '../helpers/Grid/Grid'
import { GridElement } from '../helpers/Grid/GridElement'
import { Palette } from '../helpers/Color/Palette'
const colors = Palette[0]

//for pixels is ok
// const AMPLITUDE = 10
//for mm
const AMPLITUDE = 5

const PROBABILITY = 0.0732725

const FREQUENCY = 0.246

export const furLike = (props: DrawingFNProps, rInstance: rand, grid: Grid) => {
  const { context, DRAW_PROPERTIES } = props

  // context.strokeStyle = 'black'
  context.lineWidth = DRAW_PROPERTIES.pensize
  context.lineJoin = 'round'

  grid.gridContents.forEach((element) => {

    const { midPoint, startPoint } = element
    const noise = rInstance.noise2D(midPoint.u, midPoint.v, FREQUENCY, 2 * Math.PI)
    if (rInstance.chance(PROBABILITY)) {
      context.beginPath()
      context.strokeStyle = rInstance.pick(colors)
     /*  context.fillStyle = rInstance.pick(colors)
      context.arc(
        midPoint.x + Math.cos(noise) * rInstance.range(0.1, AMPLITUDE),
        midPoint.y + Math.sin(noise) * rInstance.range(0.1, AMPLITUDE),
        rInstance.range(0.1, AMPLITUDE),
        0, Math.PI*2, false) */
      context.moveTo(startPoint.x, startPoint.y)
      context.lineTo(
        midPoint.x + Math.cos(noise) * rInstance.range(0.1, AMPLITUDE),
        midPoint.y + Math.sin(noise) * rInstance.range(0.1, AMPLITUDE)
      )
      context.stroke()
      // context.fill()
    }
  })
}