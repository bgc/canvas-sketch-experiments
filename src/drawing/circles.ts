import { DrawingFNProps } from '../../types/index'
type rand = { value: () => number; }
import Grid from '../helpers/Grid/Grid'
import { GridElement } from '../helpers/Grid/GridElement'

export const circles = (props: DrawingFNProps, rInstance: rand, grid: Grid) => {
  const { context, DRAW_PROPERTIES } = props

  context.strokeStyle = 'black'
  context.lineWidth = DRAW_PROPERTIES.pensize
  context.lineJoin = 'round'

  /* grid.gridContents.forEach((row: GridElement[]) => {
    row.forEach((col:GridElement ) => {
      const { /* startPoint, * size, midPoint } = col
      const myRand = DRAW_PROPERTIES.units === 'px'
        ? rInstance.value() * 2
        : rInstance.value()
      context.beginPath()
      context.ellipse(
        midPoint.x + myRand,
        midPoint.y + myRand,
        size.width > size.height ? size.height / 2 - 1 : size.width / 2 - 1,
        size.width > size.height ? size.height / 2 - 1 : size.width / 2 - 1,
        0,
        0, 2 * Math.PI
      )
      context.stroke()
    })
  }) */
}
