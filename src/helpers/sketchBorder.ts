const sketchBorder = (
  context: CanvasRenderingContext2D,
  paperMargin: number,
  paperWidth: number,
  paperHeight: number
): void => {
  context.strokeStyle = 'black'
  context.lineWidth = 0.275
  context.strokeRect(
    paperMargin,
    paperMargin,
    paperWidth - paperMargin * 2,
    paperHeight - paperMargin * 2
  )
}

export default sketchBorder
