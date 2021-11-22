# React Native View

The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.

View is designed to be nested inside other views and can have 0 to many children of any type.

- When you need to wrap your elements inside the container, you can use View as a container element.</li>
- When you want to nest more elements inside the parent element, both parent and child can be View. It can have as many children as you want.</li>
- When you want to style different elements, you can place them inside View since it supports style property, flexbox etc.</li>
- View also supports synthetic touch events, which can be useful for different purposes.</li>

## Usage

```js
<View>
  <Text>React native view</Text>
</View>
```
