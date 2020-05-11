import { DrawingFNProps } from '../../types/index'
type rand = {
  value: () => number
  noise2D: (
    x: number,
    y: number,
    frequency?: number,
    amplitude?: number
  ) => number
  pick: (arr: any[]) => any
}
import Grid from '../helpers/Grid/Grid'
import { GridElement } from '../helpers/Grid/GridElement'
import { Palette } from '../helpers/Color/Palette'
const colors = Palette[0]

//for pixels is ok
const AMPLITUDE = 36
//for mm
//const AMPLITUDE = 1

export const middleLines = (
  props: DrawingFNProps,
  rInstance: rand,
  grid: Grid
) => {
  const { context, DRAW_PROPERTIES } = props

  context.strokeStyle = 'black'
  context.lineWidth = DRAW_PROPERTIES.pensize
  context.lineJoin = 'round'

  let lines = new Array(grid.cols) as any
  lines.fill(null)
  const flattenedArray: GridElement[] = [].concat(...grid.gridContents)
  lines.forEach((value: any, index: number, linearr: any) => {
    linearr[index] = flattenedArray.filter((element) => element.col === index)
  })

  // TODO test with 3D noise
  // arrange the output to look better
  lines.forEach((rowLines: GridElement[]) => {
    context.beginPath()
    context.strokeStyle = rInstance.pick(colors)
    const col = rowLines
    col.forEach((point: GridElement, idx: number, arrrgh: any) => {
      const currPoint = point.midPoint

      if (idx >= arrrgh.length - 3) {
        //do nothing
      } else if (idx % 2 === 0) {
        const ctrlPoint = arrrgh[idx + 1].midPoint
        const endPoint = arrrgh[idx + 2].midPoint

        const noise = rInstance.noise2D(
          currPoint.u,
          currPoint.v,
          12,
          2 * Math.PI
        )
        const ctrlNoise = rInstance.noise2D(
          ctrlPoint.u,
          ctrlPoint.v,
          12,
          2 * Math.PI
        )
        const endNoise = rInstance.noise2D(
          endPoint.u,
          endPoint.v,
          12,
          2 * Math.PI
        )

        context.moveTo(DRAW_PROPERTIES.mid.x + AMPLITUDE * Math.cos(noise)*currPoint.v, currPoint.y)
        context.quadraticCurveTo(
          DRAW_PROPERTIES.mid.x + AMPLITUDE * Math.cos(ctrlNoise)*ctrlPoint.v,
          ctrlPoint.y,
          DRAW_PROPERTIES.mid.x + AMPLITUDE * Math.cos(endNoise)*endPoint.v,
          endPoint.y
        )
      }

      context.stroke()
    })
  })
}
