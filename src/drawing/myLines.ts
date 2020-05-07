import { DrawingFNProps } from '../../types/index'
type rand = { value: () => number }
import Grid from '../helpers/Grid/Grid'
import { GridElement } from '../helpers/Grid/GridElement'

export const myLines = (props: DrawingFNProps, rInstance: rand, grid: Grid) => {
  const { context, DRAW_PROPERTIES } = props

  context.strokeStyle = 'black'
  context.lineWidth = DRAW_PROPERTIES.pensize
  context.lineJoin = 'round'
  grid.gridContents.forEach((row: GridElement[]) => {
    let prevRand =
      DRAW_PROPERTIES.units === 'px' ? rInstance.value() * 2 : rInstance.value()
    row.forEach((col: GridElement, index: number, array: GridElement[]) => {
      const { midPoint } = col
      if (index !== array.length - 1) {
        const myRand =
          DRAW_PROPERTIES.units === 'px'
            ? rInstance.value() * 2
            : rInstance.value()
        const nextPoint = array[index + 1].midPoint
        context.moveTo(midPoint.x + prevRand, midPoint.y + prevRand)
        context.lineTo(nextPoint.x + myRand, nextPoint.y + myRand)
        prevRand = myRand
      }

      context.stroke()
    })
  })
}
