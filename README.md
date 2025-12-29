# React Lazy Load Component Demo

This project demonstrates **lazy loading of components in React** using
`React.lazy` and `Suspense` to improve application performance.

---

## 🚀 What is Lazy Loading?

Lazy loading is a performance optimization technique where **components are loaded only when they are actually needed**, instead of loading everything at once during the initial page load.

This helps in:
- Reducing initial bundle size
- Faster page load time
- Better user experience

---

## 🧠 How Lazy Loading Works in React

React provides two built-in tools for lazy loading:

### 1️⃣ `React.lazy()`
Used to dynamically import a component.

```js
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));
