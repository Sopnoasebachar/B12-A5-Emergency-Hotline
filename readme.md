
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById("id") → selects one element by its ID.
- getElementsByClassName("className") → selects all elements with that class 
- querySelector("selector") → selects the first element matching a CSS selector.
- querySelectorAll("selector") → selects all elements matching a CSS selector 

### 2. How do you create and insert a new element into the DOM?

```js
let newDiv = document.createElement("div");
document.body.appendChild(newDiv); 
```


### 3. What is Event Bubbling and how does it work?
- Event Bubbling is when an event starts at the target element and bubbles up through parent elements:
```js
document.getElementById("child").addEventListener("click", () => console.log("Child clicked"));
document.getElementById("parent").addEventListener("click", () => console.log("Parent clicked"));
```


- Clicking the child logs:
```js
Child clicked
Parent clicked
```

### 4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation is attaching a single event listener to a parent element to handle events from its children:

```js 
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
}); 

```

- It is useful because it improves performance and works for dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() → stops the default browser behavior (e.g., link navigation, form submission):



- stopPropagation() → stops the event from bubbling up to parent elements:





