import { DrawingFNProps } from '../../types/index'
type rand = { value: () => number; }
import Grid from '../helpers/Grid/Grid'
import { GridElement } from '../helpers/Grid/GridElement'

export const betterLines = (props: DrawingFNProps, rInstance: rand, grid: Grid) => {
  const { context, DRAW_PROPERTIES } = props

  context.strokeStyle = 'black'
  context.lineWidth = DRAW_PROPERTIES.pensize
  context.lineJoin = 'round'

  /* grid.gridContents.forEach((row: GridElement[]) => {
    row.forEach((col: GridElement, index: number) => {
      const { /* startPoint, * midPoint } = col
      const myRand = DRAW_PROPERTIES.units === 'px'
        ? rInstance.value() * 5
        : rInstance.value()
      if (index === 0) {
        context.moveTo(
          midPoint.x + myRand,
          midPoint.y + myRand
        )
      } else {
        context.lineTo(
          midPoint.x + myRand,
          midPoint.y + myRand
        )
      }
      context.stroke()
    })
  }) */
}
