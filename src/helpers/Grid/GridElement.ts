export type GridElement = {
  col: number
  row: number
  startPoint: {
    x: number
    y: number
    u: number
    v: number
  }
  endPoint: {
    x: number
    y: number
    u: number
    v: number
  }
  midPoint: {
    x: number
    y: number
    u: number
    v: number
  }
  size: {
    width: number
    height: number
    widthU: number
    heightV: number
  }
}
