import Grid from './Grid/Grid'

const gridMaker = (
  cols: number,
  rows: number,
  paperWidth: number,
  paperHeight: number,
  paperMargins: number
): Grid => {
  const availableWidth = paperWidth - paperMargins * 2
  const availableHeight = paperHeight - paperMargins * 2

  const availableRowSize = Math.floor(availableHeight / rows)
  const availableColSize = Math.floor(availableWidth / cols)

  return new Grid(
    cols,
    rows,
    availableColSize,
    availableRowSize,
    availableWidth,
    availableHeight,
    paperMargins,
    { paperWidth, paperHeight }
  )
}

export default gridMaker
