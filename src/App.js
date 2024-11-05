import { useState } from "react";
import "./styles.css";

const faqList = [
  {
    title: "What is React JS?",
    text: "React JS is a JavaScript library for building user interfaces, particularly for single-page applications."
  },
  {
    title: "What are the main components of React?",
    text: "The main components are React, ReactDOM, and Babel."
  },
  {
    title: "What is JSX?",
    text: "JSX is a syntax extension for JavaScript that looks similar to HTML and allows developers to write HTML elements within JavaScript code."
  },
  {
    title: "What is a React component?",
    text: "A React component is a reusable piece of the user interface, typically a function or class that returns a piece of HTML."
  },
  {
    title: "What is the Virtual DOM?",
    text: "The Virtual DOM is a lightweight abstraction of the real DOM that React uses to improve performance by updating only the parts of the DOM that have changed."
  },
  {
    title: "What is state in React?",
    text: "State is an object that holds data that may change over time and affects the output of the component."
  },
  {
    title: "What is props in React?",
    text: "Props (short for properties) are a way to pass data from parent components to child components."
  },
  {
    title: "What is the difference between state and props?",
    text: "State is managed within the component and can change over time, while props are immutable and passed from parent to child components."
  },
  {
    title: "What are hooks in React?",
    text: "Hooks are functions that let you “hook into” React features, such as state and lifecycle methods, in functional components."
  },
  {
    title: "What is the most commonly used hook in React?",
    text: "The most commonly used hook is useState, which allows you to add state to functional components."
  },
  {
    title: "What is the useEffect hook used for?",
    text: "The useEffect hook is used to perform side effects in functional components, such as fetching data, directly interacting with the DOM, or setting up subscriptions."
  },
  {
    title: "What is the difference between class components and functional components?",
    text: "Class components are ES6 classes that extend React.Component and have lifecycle methods, while functional components are simpler JavaScript functions and use hooks for lifecycle features."
  },
  {
    title: "What is a higher-order component (HOC)?",
    text: "An HOC is a function that takes a component and returns a new component, often used for code reuse, logic, and state management."
  },
  {
    title: "What is a context in React?",
    text: "Context provides a way to pass data through the component tree without having to pass props down manually at every level."
  },
  {
    title: "What is a key in React?",
    text: "Keys are unique identifiers assigned to elements in a list to help React identify which items have changed, been added, or been removed."
  },
  {
    title: "What is the difference between map() and forEach() in React?",
    text: "map() returns a new array and is used to render lists of components, while forEach() is used for iterating over arrays without returning a new array."
  },
  { 
    title: "What is ReactDOM?", 
    text: "ReactDOM is the package that provides DOM-specific methods that enable you to manipulate and interact with the DOM in a React application." 
  },
  { 
    title: "What is the difference between ReactDOM.render() and ReactDOM.hydrate()?",
    text: "ReactDOM.render() is used to render a React element into the DOM, replacing the existing content. ReactDOM.hydrate() is used for hydrating a server-rendered application, preserving the server-rendered HTML and attaching event handlers."
  },
  {
    title: "What is the purpose of keys in React?",
    text: "Keys help React identify which items have changed, been added, or removed, improving the efficiency of the rendering process."
  },
  {
    title: "What are fragments in React?",
    text: "Fragments let you group a list of children without adding extra nodes to the DOM. They can be written as <React.Fragment> or using the shorthand syntax <>."
  },
  {
    title: "What is a controlled component in React?",
    text: "A controlled component is a form element whose value is controlled by React state, rather than being managed by the DOM."
  },
  {
    title: "What is an uncontrolled component in React?",
    text: "An uncontrolled component is a form element whose value is managed by the DOM itself, not by React state."
  },
  { 
      title: "What is the useRef hook used for?", 
      text: "useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). It can be used to access DOM elements directly or hold mutable values." },
  { 
    title: "What is the useContext hook used for?", 
    text: "useContext allows you to access the context value from within a functional component. It is an alternative to using the Context.Consumer wrapper in class components." },
  { 
    title: "What is the useReducer hook used for?", 
    text: "useReducer is an alternative to useState for managing complex state logic in functional components. It is commonly used for managing state with reducers." },
  { 
    title: "What is the useCallback hook used for?", 
    text: "useCallback returns a memoized callback function, preventing the creation of a new function on every render. It is useful for optimizing performance by preventing unnecessary re-renders." },
  { 
    title: "What is the useMemo hook used for?", 
    text: "useMemo returns a memoized value, recomputing it only when the dependencies change. It is useful for optimizing performance by preventing expensive calculations on every render." },
  { 
    title: "What is a custom hook in React?", 
    text: "A custom hook is a function that uses built-in React hooks and allows you to reuse logic across multiple components. It starts with the word use." },
  { 
    title: "What is the create-react-app command?", 
    text: "create-react-app is a CLI tool that sets up a new React project with a sensible default configuration, including Webpack, Babel, and other tools, without requiring any configuration." },
  { 
    title: "How can you handle events in React?", 
    text: "Events in React are handled by passing event handler functions as props to elements. The event handlers receive an event object as an argument, which can be used to access event properties and methods." },
  { 
    title: "How can you conditionally render components in React?", 
    text: "Conditional rendering in React can be achieved using JavaScript conditional operators like if-else, ternary operators, and logical && operators within JSX." },
  { 
    title: "What is the purpose of default props in React?", 
    text: "Default props provide default values for props in a component. They are used when a prop is not passed to the component or is undefined."
  },
  { 
    title: "What is lazy loading in React?",
    text: "Lazy loading is a technique to defer the loading of non-critical resources until they are needed, reducing the initial load time of your application. React's React.lazy() and Suspense components facilitate lazy loading of components."
  },
  {
    title: "What is the difference between shouldComponentUpdate and React.memo?",
    text: "shouldComponentUpdate is a lifecycle method used in class components to prevent unnecessary re-renders, while React.memo is a higher-order component for functional components that memoizes the output."
  },
  {
    title: "What is the difference between componentDidMount and useEffect?",
    text: "componentDidMount is a lifecycle method in class components for performing actions after the component has mounted, while useEffect is a hook in functional components for performing side effects after the component has rendered."
  },
  {
    title: "What is the difference between componentWillMount and componentDidMount?",
    text: "componentWillMount is called before the component is mounted, while componentDidMount is called after the component is mounted."
  },
  {
    title: "What is the difference between componentWillReceiveProps and getDerivedStateFromProps?",
    text: "componentWillReceiveProps is a lifecycle method in class components that is called when a component receives new props, while getDerivedStateFromProps is a static method used in class components to update state based on changes in props."
  },
  {
    title: "What is the difference between componentWillUpdate and componentDidUpdate?",
    text: "componentWillUpdate is called before the component is re-rendered, while componentDidUpdate is called after the component has been re-rendered."
  },
  {
    title: "What is the difference between componentWillUnmount and useEffect cleanup?",
    text: "componentWillUnmount is a lifecycle method in class components for performing cleanup before the component is removed from the DOM, while useEffect cleanup is performed in functional components when the component is unmounted."
  },
  {
    title: "What is the difference between setState and useState?",
    text: "setState is a method in class components for updating state, while useState is a hook in functional components for adding state."
  },
  {
    title: "What is the difference between this.props and props in React?",
    text: "this.props is used in class components to access props, while props is used in functional components."
  },
  {
    title: "What is the difference between this.state and state in React?",
    text: "this.state is used in class components to access state, while state is used in functional components with the useState hook."
  },
  {
    title: "What is the difference between this and useContext in React?",
    text: "this is used in class components to refer to the component instance, while useContext is a hook in functional components for accessing context values."
  },
  {
    title: "What is the difference between this.forceUpdate and this.setState?",
    text: "this.forceUpdate forces the component to re-render, while this.setState updates the state and triggers a re-render if the state has changed."
  },
  {
    title: "What is the difference between this.refs and useRef in React?",
    text: "this.refs is used in class components to access DOM elements, while useRef is a hook in functional components for accessing DOM elements."
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqList}/>
    </div>
  );
}

function Accordion({data}) {
  return (
    <div className="accordion">
      {
        data.map((element, i) => <AccordionItem key={i} num={i} title={element.title} text={element.text} />)
      }
    </div>
  );
}

function AccordionItem({num, title, text}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{ num > 9 ? num + 1 : `0${num + 1}` }</p>
      <p className="text">{ title }</p>
      <p className="icon">{ isOpen ? '-' : '+'}</p>

      { isOpen && (
        <div className="content-box">{text}</div>
      )}
    </div>
  )
}