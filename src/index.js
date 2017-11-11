import React from "react"

const defaultSettings = {
  ssr: false,
  delay: 0,
  duration: 1,
  delayOffset: 0.1,
  initialStyle: { opacity: 0 },
  animation: `{
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }`,
  animationName: "blanketAnimationFadeIn",
}

export default class BlanketAnimation extends React.Component {
  applyAnimationStyles(child, index) {
    const {
      delay = defaultSettings.delay,
      duration = defaultSettings.duration,
      delayOffset = defaultSettings.delayOffset,
      animationName = defaultSettings.animationName,
      initialStyle = animation === defaultSettings.animation
        ? defaultSettings.initialStyle
        : {},
    } = this.props

    const style = Object.assign(
      {},
      {
        ...child.props.style,
        animationName: animationName,
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
      animation = defaultSettings.animation,
      animationName = defaultSettings.animationName,
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
