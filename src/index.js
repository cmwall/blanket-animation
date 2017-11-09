import React from "react"

export default ({
  children,
  animation,
  animationDelay,
  animationDuration,
  animationDelayOffset,
  initialStyle,
}) => {
  const styleSheet = document.styleSheets[0]

  styleSheet.insertRule(
    animation || defaultAnimation,
    styleSheet.cssRules.length
  )

  return children
    ? React.Children.map(
        children,
        (child, index) =>
          child &&
          React.cloneElement(child, {
            style: {
              ...child.props.style,
              ...animatorStyle(
                index,
                animation,
                animationDelay,
                animationDuration,
                animationDelayOffset,
                initialStyle
              ),
            },
          })
      )
    : ""
}

const animatorStyle = (
  index,
  animation = defaultAnimation,
  animationDelay = 0,
  animationDuration = 1,
  animationDelayOffset = 0.1,
  initialStyle = animation === defaultAnimation && { opacity: 0 }
) => ({
  animation: `${animation} ${animationDuration}s`,
  animationDelay: `${animationDelay + index * animationDelayOffset}s`,
  animationFillMode: "forwards",
  ...initialStyle,
})

const defaultAnimation = `@-webkit-keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`
