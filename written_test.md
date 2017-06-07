## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
> A distinct element in the Virtual DOM of react.  It is used to identify the smallest portion absolutely necessary of the actual DOM that must be rerendered.
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> If you object needs to manages State, use Component.  Otherwise, a simple funciton is sufficient.
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> React.createElement(div', , 
        React.createElement('h1', {className:'headline'}, 'Hello Dojo!')
    );
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> The new keyword create a new instance of the specified object and returns it, allowing us to use the 'this' keyword.
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> Not a fair question as they are all awesome!  If I had to pick, I'd say Promises.
---

Done! Time to start the [React app](./app-details.md)!