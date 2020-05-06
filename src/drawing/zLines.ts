import { DrawingFNProps } from '../../types/index'
type rand = { value: () => number; }
import Grid from '../helpers/Grid/Grid'
import { GridElement } from '../helpers/Grid/GridElement'


export const zLines = (props: DrawingFNProps, rInstance: rand, grid: Grid) => {
  const { context, DRAW_PROPERTIES } = props
  const flattenedArray: GridElement[] = [].concat(...grid.gridContents)
  context.strokeStyle = 'black'
  context.lineWidth = DRAW_PROPERTIES.pensize
  context.lineJoin = 'round'
  context.beginPath()

  let prevRand = DRAW_PROPERTIES.units === 'px'
    ? rInstance.value() * 2
    : rInstance.value()

  flattenedArray.forEach((point: GridElement, index: number, theArray: GridElement[]) => {
    const { midPoint } = point
    const myRand = DRAW_PROPERTIES.units === 'px'
      ? rInstance.value() * 2
      : rInstance.value()
    if (index !== theArray.length - 1) {
      const nextPoint = theArray[index + 1].midPoint
      context.moveTo(midPoint.x + prevRand, midPoint.y + prevRand)
      context.lineTo(nextPoint.x + myRand, nextPoint.y + myRand)
    }
    prevRand = myRand
  })

  context.stroke()
}
