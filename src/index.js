import React from "react"

const defaultAnimation = `{
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`

export default ({
  children,
  animation = defaultAnimation,
  animationName = "blanketAnimationFadeIn",
  animationDelay = 0,
  animationDuration = 1,
  animationDelayOffset = 0.1,
  initialStyle = animation === defaultAnimation && { opacity: 0 },
}) => {
  if (children) {
    const styleSheet = document.styleSheets[0]
    const appliedAnimation = `@keyframes ${animationName} ${animation}`
    styleSheet.insertRule(appliedAnimation, styleSheet.cssRules.length)

    return React.Children.map(children, (child, index) => {
      if (child) {
        const animationStyle = Object.assign(
          {
            animationName: animationName,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay + index * animationDelayOffset}s`,
            animationFillMode: "forwards",
          },
          initialStyle || {}
        )

        return React.cloneElement(child, {
          style: Object.assign({}, child.props.style, animationStyle),
        })
      } else {
        return ""
      }
    })
  } else {
    return ""
  }
}
