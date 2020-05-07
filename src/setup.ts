import {
  DrawingFNProps,
  SketchProps,
  DrawProperties,
  Settings,
} from '../types/index'

export const RANDOM_SEED = 'dbd5b416-8c74-11ea-8224-5799187c3f28' // '31e42dca-8c74-11ea-8a77-97548b2b37e1' // 'de1e8290-6607-11ea-bf82-7368e432d854'

// A4 props
/* export const DRAW_PROPERTIES: DrawProperties = {
  pensize: 0.05,
  cols: 500,
  rows: 300,
  margins: 25,
  units: 'mm',
  dimensions: 'a4',
  pixelsPerInch: 300,
  mid: {
    x: null,
    y: null
  }
} */

// A4 DEBUG props
/* export const DRAW_PROPERTIES: DrawProperties = {
  pensize: 0.05,
  cols: 50,
  rows: 30,
  margins: 25,
  units: 'mm',
  dimensions: 'a4',
  pixelsPerInch: 300,
  mid: {
    x: null,
    y: null
  }
} */

// INSTAGRAM PROPS
export const DRAW_PROPERTIES: DrawProperties = {
  pensize: 1,
  cols: 50,
  rows: 50,
  margins: 25,
  units: 'px',
  dimensions: [1080, 1080],
  orientation: 'landscape',
  pixelsPerInch: 72,
  mid: {
    x: null,
    y: null,
  },
}

export const settings: Settings = {
  dimensions: DRAW_PROPERTIES.dimensions,
  pixelsPerInch: DRAW_PROPERTIES.pixelsPerInch,
  units: DRAW_PROPERTIES.units,
  scaleToFit: false,
  orientation: DRAW_PROPERTIES.orientation,
}
