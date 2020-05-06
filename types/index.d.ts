type SketchProps = {
  context: CanvasRenderingContext2D
  width: number
  height: number
}


export type paperSizes =
  'postcard' |
  'poster-small' |
  'poster' |
  'poster-large' |
  'business-card' |
  '2r' |
  '3r' |
  '4r' |
  '5r' |
  '6r' |
  '8r' |
  '10r' |
  '11r' |
  '12r' |

  'a0' |
  'a1' |
  'a2' |
  'a3' |
  'a4' |
  'a5' |
  'a6' |
  'a7' |
  'a8' |
  'a9' |
  'a10' |
  '2a0' |
  '4a0' |
  'b0' |
  'b1' |
  'b1+' |
  'b2' |
  'b2+' |
  'b3' |
  'b4' |
  'b5' |
  'b6' |
  'b7' |
  'b8' |
  'b9' |
  'b10' |
  'b11' |
  'b12' |
  'c0' |
  'c1' |
  'c2' |
  'c3' |
  'c4' |
  'c5' |
  'c6' |
  'c7' |
  'c8' |
  'c9' |
  'c10' |
  'c11' |
  'c12' |

  'half-letter' |
  'letter' |
  'legal' |
  'junior-legal' |
  'ledger' |
  'tabloid' |
  'ansi-a' |
  'ansi-b' |
  'ansi-c' |
  'ansi-d' |
  'ansi-e' |
  'arch-a' |
  'arch-b' |
  'arch-c' |
  'arch-d' |
  'arch-e' |
  'arch-e1' |
  'arch-e2' |
  'arch-e3'

export type SettingsUnits = "in" | "cm" | "px" | "ft" | "m" | "mm"

// https://github.com/mattdesl/canvas-sketch/blob/580d50c6369060307e70779c46385941660c031f/docs/api.md#props
export type Settings = {
  dimensions: paperSizes | [number, number],
  pixelsPerInch?: number,
  units?: SettingsUnits,
  canvas?: CanvasRenderingContext2D,
  scaleToFit?: boolean
  orientation?: 'portrait' | 'landscape'
}

export type DrawProperties = {
  units: SettingsUnits,
  pensize: number,
  cols: number,
  rows: number
  margins: number,
  dimensions: paperSizes|[number, number],
  pixelsPerInch?: number,
  orientation?: 'portrait' | 'landscape'
  mid: {
    x: number | null,
    y: number | null
  }
}

export type DrawingFNProps = {
  context: CanvasRenderingContext2D,
  DRAW_PROPERTIES: DrawProperties
}
