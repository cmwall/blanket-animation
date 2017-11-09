# Blanket Animation

This component is used to apply keyframe animations to all of its children.

For example, you can animate lists just by wrapping your items with this component:

<img src="https://github.com/cmwall/blanket-animation/raw/master/static/list-animation.gif" alt="List Animation" style="width: 250px; height: 250px;"/>

## Installation

With npm:

```
npm install blanket-animation --save
```

With yarn:

```
yarn add blanket-animation
```

## Usage

Import the component:

```js
import BlanketAnimation from "blanket-animation"
```

Use the component to wrap items that you want to animate:

```jsx
<BlanketAnimation>
  <p>Text 1</p>
  <p>Text 2</p>
  <p>Text 3</p>
  <p>Text 4</p>
  <p>Text 5</p>
</BlanketAnimation>
```

The default settings will be applied to the children of the BlanketAnimation component. Your animation should look similar to the one on the first gif in this README.

## Settings

If the default animation does not interest you, you can pass in your own keyframe animation as well as other settings as props.

### Animation

This is the keyframe animation that you want applied to the children. It should be a **multiline string** with only the keyframe object.

**DO NOT SUPPLY THE KEYFRAME KEYWORD OR THE NAME OF THE ANIMATION**.

Default:

```js
`{
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`
```

Example value:

```js
`{
  0% { opacity: 0; transform: translateX(-1000px) translateY(-400px);  }
  50% { opacity: 0.5; transform: translateX(200px) translateY(200px); }
  80% { opacity: 0.5; transform: translateX(-50px) translateY(-50px); }
  100% { opacity: 1; transform: translateX(0) translateY(0);}
}`
```

Example usage:

```jsx
<BlanketAnimation
  animation={`{
    0% { opacity: 0; transform: translateX(-1000px) translateY(-400px);  }
    50% { opacity: 0.5; transform: translateX(200px) translateY(200px); }
    80% { opacity: 0.5; transform: translateX(-50px) translateY(-50px); }
    100% { opacity: 1; transform: translateX(0) translateY(0);}
  }`}
>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</BlanketAnimation>
```

This will produce something like:

<img src="https://github.com/cmwall/blanket-animation/raw/master/static/crazy-animation.gif" alt="Custom Animation" style="width: 250px; height: 250px;"/>


### Animation Name

This is the name of your animation (in CSS). It is a plain string. The default animation name will almost always suffice but you may specify it here if you need.

Default: `"blanketAnimationFadeIn"`

Example value: `"customAnimationName"`

Example usage:

```jsx
<BlanketAnimation animationName="customAnimationName">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</BlanketAnimation>
```

### Animation Delay

How long to delay the start of the animation (in seconds).

Default: `0`

Example value: `2.5`

Example usage:

```jsx
<BlanketAnimation animationDelay={2.5}>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</BlanketAnimation>
```

### Animation Duration

How long the animation will execute for each child component.

Default: `1`

Example value: `0.3`

Example usage:

```jsx
<BlanketAnimation animationDuration={0.3}>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</BlanketAnimation>
```

### Animation Delay Offset

How long the animations are delayed between each child. In other words, the delay between animation 1 starting and animation 2 starting.

Default: `0.1`

Example value: `1`

Example usage:

```jsx
<BlanketAnimation animationDelayOffset={1}>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</BlanketAnimation>
```

### Initial Style

An object describing the initial styling of each child component.

**THIS IS NOT SET BY DEFAULT IF YOU PASS YOUR OWN ANIMATION IN**. The reason for this is because the component cannot know exactly what you are animating. If you do not intend to animate opacity, we do not want to set the initial opacity to 0. Instead, if an animation is passed in, you must specify the initial style of each child component.

Default:

```js
{ opacity: 0 }
```

Example value:

```js
{ transform: "translateX(-100px)" }
```

Example usage:

```jsx
<BlanketAnimation initialStyle={{ transform: "translateX(-100px)" }}>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</BlanketAnimation>
```
