## 1. what is JSX, and why is it used?

JSX (javascritp XML) is a syntax extension that allows you to write HTML-like code insid Javascript.
It is used because:

- It makes writing UI structure easier.
- It lets you combine Javascript logic with HTML-link markup.

## 2. what is the difference between state and props?

**State**

- Holds data inside a component.
- can change over time.

**Props**

- Used to pass data from a parent component to a child component.
- Read-only

## 3. What is the useState hook, and how does it work?

- `useState` is a React hook that allows you to add state to functional component.
- It returns two things:

1. The current value of the state.
2. A function to update that value.

## 4. How can you share stage between components in react?

There are several ways to share state between componets in React:

1. **Lifting state up** -Keep the state in the parent component and pass it down to child components through props.

## 5. How is event handling done in React?

- In React, event handling in done use **camelCase** naming (`onClick`,`onChange`)

**Example:**

```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return <button onClick={handleClick}>click me</button>;
}
```
