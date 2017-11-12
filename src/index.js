import React from "react"

const defaultAnimation = `{
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`

export default class BlanketAnimation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animationFinished: [],
      // array of booleans for each child to determine displaying animation styles
    }

    const { ssr, animation, animationName } = this.props

    // If not server side rendering and the document/stylesheet is available,
    // apply the animation to the stylesheet
    if (!ssr && document && document.styleSheets[0]) {
      const styleSheet = document.styleSheets[0]
      const appliedAnimation = `@keyframes ${animationName} ${animation}`

      styleSheet.insertRule(appliedAnimation, styleSheet.cssRules.length)
    }
  }

  applyAnimationStyle(child, index) {
    const {
      initialStyle,
      animationName,
      duration,
      delay,
      delayOffset,
    } = this.props

    // Merge original style with animation style with initial style
    const style = Object.assign(
      {},
      {
        ...child.props.style,
        animationName: animationName,
        animationDuration: `${duration}s`,
        animationDelay: `${delay + index * delayOffset}s`,
        animationFillMode: "forwards",
        ...initialStyle,
      }
    )

    // Animation finish time
    const finishTime = (delay + index * delayOffset + duration) * 1000

    // Set the animation finish boolean to true when the animation completes
    setTimeout(
      () =>
        this.setState(prevState => {
          let newAnimationFinished = prevState.animationFinished.slice()
          newAnimationFinished[index] = true

          return { animationFinished: newAnimationFinished }
        }),
      finishTime
    )

    return React.cloneElement(child, { style })
  }

  applyCompletionStyle(child, index) {
    const { completionStyle } = this.props

    const style = Object.assign(
      {},
      {
        ...child.props.style,
        ...completionStyle,
      }
    )

    return React.cloneElement(child, { style })
  }

  render() {
    const { children } = this.props

    if (!children) return ""

    return React.Children.map(children, (child, index) => {
      if (this.state.animationFinished[index]) {
        return this.applyCompletionStyle(child, index)
      } else {
        return this.applyAnimationStyle(child, index)
      }
    })
  }
}

BlanketAnimation.defaultProps = {
  ssr: false,
  delay: 0,
  duration: 1,
  delayOffset: 0.1,
  initialStyle: { opacity: 0 },
  completionStyle: {},
  animation: defaultAnimation,
  animationName: "blanketAnimationFadeIn",
}
