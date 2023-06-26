# dummy_project
This project is a demonstration of various React concepts such as `useState`, `useMemo`, `useCallback`, and `React.memo`. The purpose of this project is to help you understand the working of these concepts and how they can be used effectively in a React application.

## Project Overview
1. `useState`:

- **Purpose:** The useState hook is used to manage state in a functional component. It allows you to declare state variables and provides methods to update their values.
- **In the project:** useState is used to manage three state variables: showPara, allowButton, and titleName. These variables hold the current state of the application and trigger re-renders when their values change.

2. `useMemo`:

- **Purpose:** The useMemo hook is used to memoize the result of a computation. It allows you to optimize performance by caching the computed value and only recalculating it when the dependencies change.
- **In the project:** useMemo is used to memoize the sorted array items. The sorting operation is performed only when the list prop of DemoList changes, preventing unnecessary recalculations.

3. `useCallback`:

- **Purpose:** The useCallback hook is used to memoize callback functions. It returns a memoized version of the function that only changes when its dependencies change. This is useful to prevent unnecessary re-rendering of components that receive the callback as a prop.
- **In the project:** useCallback is used to memoize the functions getPara and getTitle. It ensures that the functions are not recreated on every render unless their dependencies change (allowButton in the case of getPara and none in the case of getTitle).

4. `React.memo`:

- **Purpose:** The React.memo higher-order component is used to memoize functional components. It returns a memoized version of the component that only re-renders when its props change. This optimization helps improve the performance of the application.
- **In the project:** React.memo is applied to the Demo and DemoList components. It ensures that these components are only re-rendered when their respective props (show for Demo and list for DemoList) change.

These concepts work together to optimize the performance of the application by reducing unnecessary re-renders and computations. By utilizing memoization and managing state efficiently, the application becomes more responsive and performs better overall.

## Learn More

To learn more about the React concepts used in this project, you can refer to the official React documentation:

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React.memo](https://reactjs.org/docs/react-api.html#reactmemo)
- [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)