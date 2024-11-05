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