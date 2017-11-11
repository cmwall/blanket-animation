import React from "react"

export default class BlanketAnimation extends React.Component {
  applyAnimationStyles(child, index) {
    const {
      ssr,
      animationName,
      duration,
      delay,
      delayOffset,
      initialStyle,
    } = this.props

    const style = Object.assign(
      {},
      {
        ...child.props.style,
        animationName: ssr || animationName,
        duration: `${duration}s`,
        delay: `${delay + index * delayOffset}s`,
        animationFillMode: "forwards",
        ...initialStyle,
      }
    )

    return React.cloneElement(child, { style })
  }

  render() {
    const {
      children,
      ssr,
      animation = `{
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }`,
      animationName = "blanketAnimationFadeIn",
    } = this.props

    if (!children) return ""

    if (!ssr && document && document.styleSheets[0]) {
      const styleSheet = document.styleSheets[0]
      const appliedAnimation = `@keyframes ${animationName} ${animation}`
      styleSheet.insertRule(appliedAnimation, styleSheet.cssRules.length)
    }

    return React.Children.map(children, (child, index) =>
      this.applyAnimationStyles(child, index)
    )
  }
}
