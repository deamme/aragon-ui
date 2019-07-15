const TEXT_STYLES = {
  title1: {
    size: 32,
    weight: 600,
    lineHeight: 1.5,
  },
  title2: {
    size: 26,
    weight: 600,
    lineHeight: 1.5,
  },
  title3: {
    size: 24,
    weight: 400,
    lineHeight: 1.5,
  },
  title4: {
    size: 20,
    weight: 400,
    lineHeight: 1.5,
  },
  body1: {
    size: 18,
    weight: 400,
    lineHeight: 1.5,
  },
  body2: {
    size: 16,
    weight: 400,
    lineHeight: 1.5,
  },
  label1: {
    size: 14,
    weight: 800,
    lineHeight: 1.5,
    transform: 'uppercase',
  },
  label2: {
    size: 12,
    weight: 800,
    lineHeight: 1.5,
    transform: 'uppercase',
  },
}

const STYLES_CSS = {
  size: value => `font-size: ${value}px;`,
  weight: value => `font-weight: ${value};`,
  transform: value => `text-transform: ${value};`,
  lineHeight: value => `line-height: ${value};`,
}

function textStyleToCss(textStyle) {
  return Object.entries(textStyle).reduce(
    (cssBlock, [name, value]) => cssBlock + STYLES_CSS[name](value),
    ''
  )
}

function textStyle(name, includeLineHeight = true) {
  if (!TEXT_STYLES[name]) {
    throw new Error('textStyle(): the text style doesn’t exist: ' + name)
  }

  const style = { ...TEXT_STYLES[name] }

  if (!includeLineHeight) {
    delete style.lineHeight
  }

  return textStyleToCss(style)
}

export { TEXT_STYLES, textStyle }