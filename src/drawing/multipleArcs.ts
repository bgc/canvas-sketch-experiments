import { DrawingFNProps } from '../../types/index'
type rand = { value: () => number; }

export const multipleArcs = (props:DrawingFNProps, rInstance:rand, maximumRadius: number, ammount: number) => {
  const { context, DRAW_PROPERTIES } = props
  const availableSpace = DRAW_PROPERTIES.mid.x > DRAW_PROPERTIES.mid.y
    ? DRAW_PROPERTIES.mid.y - DRAW_PROPERTIES.margins
    : DRAW_PROPERTIES.mid.x - DRAW_PROPERTIES.margins
  const maxRadius = availableSpace < maximumRadius - DRAW_PROPERTIES.margins
    ? availableSpace
    : maximumRadius - DRAW_PROPERTIES.margins

  const maxAmmount = ammount > maximumRadius
    ? maximumRadius
    : ammount

  const minRadius = maxRadius / maxAmmount

  context.strokeStyle = 'black'
  context.lineWidth = DRAW_PROPERTIES.pensize
  context.lineJoin = 'round'

  for (let current = 0; current < maxAmmount; current++) {
    context.beginPath()
    context.arc(
      DRAW_PROPERTIES.mid.x,
      DRAW_PROPERTIES.mid.y,
      minRadius + minRadius * current,
      0,
      Math.PI,
      true
    )
    context.stroke()
  }
}
