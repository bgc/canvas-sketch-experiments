// import { lerp } from 'canvas-sketch-util/math'

import { GridElement } from './GridElement'

class Grid {
  cols: number
  rows: number
  availableColSize: number
  availableRowSize: number
  leftPad: number
  topPad: number
  paperMargins: number
  paperSize: { paperWidth: number, paperHeight: number }
  gridContents: GridElement[][]

  constructor(
    cols: number,
    rows: number,
    availableColSize: number,
    availableRowSize: number,
    availableWidth: number,
    availableHeight: number,
    paperMargins: number,
    paperSize: { paperWidth: number, paperHeight: number }
  ) {
    this.cols = cols
    this.rows = rows
    this.availableColSize = availableColSize
    this.availableRowSize = availableRowSize
    this.leftPad = availableColSize * cols < availableWidth
      ? (availableWidth - availableColSize * cols) / 2
      : 0
    this.topPad = availableRowSize * rows < availableHeight
      ? (availableHeight - availableRowSize * rows) / 2
      : 0
    this.paperMargins = paperMargins
    this.paperSize = paperSize
    // this.gridContents = this.buildTheGridArray()
    this.gridContents = this.buildTheUVGrid()
  }

  // buildTheGridArray(): GridElement[][] {
  //   const gridArray = []

  //   for (let row = 0; row < this.rows; row++) {
  //     const line = []
  //     for (let col = 0; col < this.cols; col++) {
  //       line.push({
  //         col: col,
  //         row: row,
  //         startPoint: {
  //           x: this.paperMargins + this.leftPad + this.availableColSize * col,
  //           y: this.paperMargins + this.topPad + this.availableRowSize * row,
  //           /* u: (this.paperMargins + this.leftPad + this.availableColSize * col) / this.paperSize.paperWidth,
  //           v: (this.paperMargins + this.topPad + this.availableRowSize * row) / this.paperSize.paperHeight */

  //         },
  //         endPoint: {
  //           x: this.paperMargins + this.leftPad +
  //             this.availableColSize * col +
  //             this.availableColSize,
  //           y: this.paperMargins + this.topPad +
  //             this.availableRowSize * row +
  //             this.availableRowSize,
  //           /* u: (this.paperMargins + this.leftPad +
  //             this.availableColSize * col +
  //             this.availableColSize) / this.paperSize.paperWidth,
  //           v: (this.paperMargins + this.topPad +
  //             this.availableRowSize * row +
  //             this.availableRowSize) / this.paperSize.paperHeight */
  //         },
  //         midPoint: {
  //           x: this.availableColSize / 2 +
  //             this.paperMargins +
  //             this.leftPad +
  //             this.availableColSize * col,
  //           y: this.availableRowSize / 2 +
  //             this.paperMargins +
  //             this.topPad +
  //             this.availableRowSize * row
  //         },
  //         size: {
  //           width: this.availableColSize,
  //           height: this.availableRowSize,
  //           /* widthU: 1,
  //           heightV: 1, */
  //         }
  //       })
  //     }
  //     gridArray.push(line)
  //   }
  //   return gridArray
  // }

  buildTheUVGrid(): GridElement[][] {
    const UVGridArray = []
    for (let row = 0; row < this.rows; row++) {
      const line = []
      for (let col = 0; col < this.cols; col++) {

        const u = col / this.cols
        const v = row / this.rows

        const uf = (col + 1) / this.cols
        const vf = (row + 1) / this.rows

        const mu = (col + 0.5) / this.cols
        const mv = (row + 0.5) / this.rows
        const startPoint = {
          u,
          v,
          x: this.paperMargins +
            (u * (this.paperSize.paperWidth - (2 * this.paperMargins))),

          y: this.paperMargins +
            (v * (this.paperSize.paperHeight - (2 * this.paperMargins)))
        }

        const endPoint = {
          u: uf,
          v: vf,
          x: this.paperMargins +
            (uf * (this.paperSize.paperWidth - (2 * this.paperMargins))),

          y: this.paperMargins +
            (vf * (this.paperSize.paperHeight - (2 * this.paperMargins)))
        }

        const midPoint = {
          u: mu,
          v: mv,
          x: this.paperMargins +
            (mu * (this.paperSize.paperWidth - (2 * this.paperMargins))),
          y: this.paperMargins +
            (mv * (this.paperSize.paperHeight - (2 * this.paperMargins)))
        }

        line.push({
          row: row,
          col: col,
          startPoint,
          endPoint,
          midPoint,
          size: {
            // TODO: THIS IS WRONG?
            width: endPoint.x - startPoint.x,
            height: endPoint.y - startPoint.y,
            widthUV: endPoint.u - startPoint.u,
            heightUV: endPoint.v - startPoint.v
          }
        })
      }
      UVGridArray.push(line)
    }
    return UVGridArray
  }

  drawGrid(context: CanvasRenderingContext2D): void {
    context.strokeStyle = 'black'
    context.lineWidth = 0.275
    this.gridContents.forEach(el => {
      el.forEach(point => {
        const { startPoint, size, midPoint, endPoint } = point
        context.beginPath()
        context.arc(midPoint.x, midPoint.y, 1.5, 0, Math.PI * 2, false)
        context.strokeStyle = 'green'
        context.stroke()
        context.strokeStyle = 'black'
        context.fillStyle = '#00000000'
        context.strokeRect(
          startPoint.x,
          startPoint.y,
          size.width,
          size.height
        )
      })
    })
  }

}

export default Grid
