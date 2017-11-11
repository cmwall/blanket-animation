import React from "react"

const defaultAnimation = `{
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`

const defaultInitialStyle = { opacity: 0 }

export default class BlanketAnimation extends React.Component {
  constructor(props) {
    super(props)

    const { ssr, animation, animationName } = this.props

    if (!ssr && document && document.styleSheets[0]) {
      const styleSheet = document.styleSheets[0]
      const appliedAnimation = `@keyframes ${animationName} ${animation}`

      styleSheet.insertRule(appliedAnimation, styleSheet.cssRules.length)
    }
  }

  applyAnimationStyles(child, index) {
    const { animation, ssr, initialStyle } = this.props

    let appliedInitialStyle =
      (animation === defaultAnimation && !ssr) ||
      (ssr && initialStyle !== defaultInitialStyle)
        ? initialStyle
        : {}

    const style = Object.assign(
      {},
      {
        ...child.props.style,
        animationName: this.props.animationName,
        animationDuration: `${this.props.duration}s`,
        animationDelay: `${this.props.delay + index * this.props.delayOffset}s`,
        animationFillMode: "forwards",
        ...appliedInitialStyle,
      }
    )

    return React.cloneElement(child, { style })
  }

  render() {
    const { children } = this.props

    if (!children) return ""

    return React.Children.map(children, (child, index) =>
      this.applyAnimationStyles(child, index)
    )
  }
}

BlanketAnimation.defaultProps = {
  ssr: false,
  delay: 0,
  duration: 1,
  delayOffset: 0.1,
  initialStyle: defaultInitialStyle,
  animation: defaultAnimation,
  animationName: "blanketAnimationFadeIn",
}
