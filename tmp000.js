import canvasSketch from 'canvas-sketch'

/* const createUVGrid = () => {
  const points = []
  const countX = 30
  const countY = 50
  for (let x = 0; x < countX; x++) {
    for (let y = 0; y < countY; y++) {
      const u = x / (countX)
      const v = y / (countY)
      const uf = (x + 1) / countX
      const vf = (y + 1) / countY
      const mu = (x + 0.5) / countX
      const mv = (y + 0.5) / countY
      points.push({ u, v, uf, vf, mu, mv })
    }
  }
  return points
} */

/* const sketchBorder = (
  context,
  paperMargin,
  paperWidth,
  paperHeight
) => {
  context.strokeStyle = 'black'
  context.lineWidth = 0.275
  context.strokeRect(
    paperMargin,
    paperMargin,
    paperWidth - paperMargin * 2,
    paperHeight - paperMargin * 2
  )
} */

const DRAW_PROPERTIES = {
  pensize: 0.05,
  cols: 40,
  rows: 20,
  margins: 12,
  units: 'mm',
  dimensions: 'a4',
  mid: {
    x: null,
    y: null
  }
}

const settings = {
  // dimensions: [1920, 1080],
  // dimensions: 'a4',
  dimensions: DRAW_PROPERTIES.dimensions,
  pixelsPerInch: 300,
  // units: 'mm',
  units: DRAW_PROPERTIES.units,
  scaleToFit: false
}

const sketchFn = (
  {
    context,
    width,
    height
  }
) => {


  DRAW_PROPERTIES.mid = {
    x: width / 2,
    y: height / 2
  }


  context.strokeStyle = 'black'
  context.lineWidth = 20
  context.lineCap = "butt"
  context.miterLimit = 0.01
  context.moveTo(100,100)
  context.lineTo(10,10)
  context.stroke()


  // sketchBorder(context, DRAW_PROPERTIES.margins, width, height)

  // const points = createUVGrid()

  /* points.forEach((point) => {
    const x = point.u * width
    const y = point.v * height
    const xf = point.uf * width
    const yf = point.vf * height
    const xm = point.mu * width
    const ym = point.mv * height
    context.fillStyle = 'white'
    context.beginPath()
    context.arc(x, y, 0.3, 0, Math.PI * 2, false)
    context.strokeStyle = 'black'
    context.stroke()
    context.beginPath()
    context.arc(xf, yf, 0.3, 0, Math.PI * 2, false)
    context.strokeStyle = 'red'
    context.stroke()
    context.beginPath()
    context.arc(xm, ym, 0.2, 0, Math.PI * 2, false)
    context.strokeStyle = 'green'
    context.stroke()
  }) */

  // const grid = gridMaker(
  //   DRAW_PROPERTIES.cols,
  //   DRAW_PROPERTIES.rows,
  //   width,
  //   height,
  //   DRAW_PROPERTIES.margins
  // )

  // grid.drawGrid(context)
}

const sketch = () => sketchFn

canvasSketch(sketch, settings)

/*
const points = createUVGrid()

points.forEach((point) => {
  const x = point[0] * width;
  const y = point[1] * height;
})
*/
