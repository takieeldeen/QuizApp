// import logo from "./logo.svg";

///////////////////////////////////////////////////////////
import "./App.css";
import { useState } from "react";
import Switch from "./Switch";
const data = {
  quizzes: [
    {
      title: "HTML",
      icon: "/icon-html.svg",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler",
          ],
          answer: "Hyper Text Markup Language",
        },
        {
          question:
            "Which of the following is the correct structure for an HTML document?",
          options: [
            "<html><head></head><body></body></html>",
            "<head><html></html><body></body></head>",
            "<body><head></head><html></html></body>",
            "<html><body></body><head></head></html>",
          ],
          answer: "<html><head></head><body></body></html>",
        },
        {
          question:
            "Which HTML element is used to define the title of a document?",
          options: ["<head>", "<title>", "<header>", "<top>"],
          answer: "<title>",
        },
        {
          question: "What is the purpose of the <body> tag in HTML?",
          options: [
            "It defines the document's head section.",
            "It contains all the content such as text, images, and links.",
            "It is used to define the main content of an HTML document.",
            "It specifies the body of the email content in HTML.",
          ],
          answer:
            "It contains all the content such as text, images, and links.",
        },
        {
          question: "Which HTML tag is used to create a hyperlink?",
          options: ["<hyperlink>", "<link>", "<a>", "<href>"],
          answer: "<a>",
        },
        {
          question: "Which tag is used to display images in HTML?",
          options: ["<img>", "<image>", "<src>", "<pic>"],
          answer: "<img>",
        },
        {
          question:
            "What attribute is used to provide the path of an image in the <img> tag?",
          options: ["link", "src", "href", "url"],
          answer: "src",
        },
        {
          question: "Which HTML tag is used to create an unordered list?",
          options: ["<ul>", "<ol>", "<list>", "<li>"],
          answer: "<ul>",
        },
        {
          question: "What does the <br> tag do?",
          options: [
            "It breaks the text into two sections.",
            "It creates a bold text.",
            "It inserts a line break.",
            "It adds a new row in a table.",
          ],
          answer: "It inserts a line break.",
        },
        {
          question: "In HTML, what does the `fieldset` tag do?",
          options: [
            "It is used to group related data in a form.",
            "It sets the field to a fixed size.",
            "It automatically validates the fields within a form.",
            "It hides the fields in a form.",
          ],
          answer: "It is used to group related data in a form.",
        },
      ],
    },
    {
      title: "CSS",
      icon: "/icon-css.svg",
      questions: [
        {
          question: "What does CSS stand for?",
          options: [
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question: "Which HTML attribute is used to define inline styles?",
          options: ["styles", "style", "class", "font-style"],
          answer: "style",
        },
        {
          question: "How do you insert a comment in a CSS file?",
          options: [
            "// this is a comment //",
            "/* this is a comment */",
            "-- this is a comment --",
            "<!-- this is a comment -->",
          ],
          answer: "/* this is a comment */",
        },
        {
          question:
            "Which property is used to change the background color of an element?",
          options: ["color", "bgcolor", "background-color", "background"],
          answer: "background-color",
        },
        {
          question: "How do you apply a style to all <p> elements?",
          options: ["p { }", ".p { }", "#p { }", "all.p { }"],
          answer: "p { }",
        },
        {
          question: "Which property is used to change the font of an element?",
          options: ["font-style", "text-style", "font-family", "typeface"],
          answer: "font-family",
        },
        {
          question:
            "How do you make each word in a text start with a capital letter?",
          options: [
            "text-transform: capitalize",
            "text-transform: uppercase",
            "text-style: capital",
            "font-transform: capitalize",
          ],
          answer: "text-transform: capitalize",
        },
        {
          question:
            "How do you select an element with the class name 'header'?",
          options: [".header", "#header", "header", "*header"],
          answer: ".header",
        },
        {
          question: "What is the default value of the 'position' property?",
          options: ["relative", "fixed", "absolute", "static"],
          answer: "static",
        },
        {
          question: "What is the purpose of the z-index property in CSS?",
          options: [
            "To count the number of elements",
            "To set the magnification level of an element",
            "To specify the stack order of an element",
            "To create a zoom effect",
          ],
          answer: "To specify the stack order of an element",
        },
      ],
    },
    {
      title: "JavaScript",
      icon: "/icon-js.svg",
      questions: [
        {
          question:
            "Which syntax is correct to output 'Hello World' in an alert box?",
          options: [
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');",
          ],
          answer: "alert('Hello World');",
        },
        {
          question: "How do you call a function named 'myFunction'?",
          options: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "execute myFunction()",
          ],
          answer: "myFunction()",
        },
        {
          question: "How to write an IF statement in JavaScript?",
          options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
          answer: "if (i == 5)",
        },
        {
          question:
            "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
          options: [
            "if (i <> 5)",
            "if i =! 5 then",
            "if (i != 5)",
            "if i not = 5",
          ],
          answer: "if (i != 5)",
        },
        {
          question: "How does a FOR loop start?",
          options: [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)",
          ],
          answer: "for (i = 0; i <= 5; i++)",
        },
        {
          question: "How can you add a comment in a JavaScript?",
          options: [
            "'This is a comment",
            "//This is a comment",
            "<!--This is a comment-->",
            "/* This is a comment */",
          ],
          answer: "//This is a comment",
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
          ],
          answer: "var colors = ['red', 'green', 'blue']",
        },
        {
          question:
            "How do you find the number with the highest value of x and y?",
          options: [
            "Math.ceil(x, y)",
            "top(x, y)",
            "Math.max(x, y)",
            "Math.highest(x, y)",
          ],
          answer: "Math.max(x, y)",
        },
        {
          question: "Which operator is used to assign a value to a variable?",
          options: ["-", "*", "=", "x"],
          answer: "=",
        },
        {
          question: "What is the correct way to write a JavaScript object?",
          options: [
            "var person = {firstName: 'John', lastName: 'Doe'};",
            "var person = {firstName = 'John', lastName = 'Doe'};",
            "var person = (firstName: 'John', lastName: 'Doe');",
            "var person = (firstName = 'John', lastName = 'Doe');",
          ],
          answer: "var person = {firstName: 'John', lastName: 'Doe'};",
        },
      ],
    },
    {
      title: "Accessibility",
      icon: "/icon-accessibility.svg",
      questions: [
        {
          question: "What does 'WCAG' stand for?",
          options: [
            "Web Content Accessibility Guidelines",
            "Web Compliance Accessibility Guide",
            "Web Content Accessibility Goals",
            "Website Compliance and Accessibility Guidelines",
          ],
          answer: "Web Content Accessibility Guidelines",
        },
        {
          question:
            "Which element is used to provide alternative text for images for screen reader users?",
          options: [
            "<alt>",
            "<figcaption>",
            "<description>",
            "<img alt='description'>",
          ],
          answer: "<img alt='description'>",
        },
        {
          question: "What does ARIA stand for in web development?",
          options: [
            "Accessible Rich Internet Applications",
            "Advanced Responsive Internet Assistance",
            "Accessible Responsive Internet Applications",
            "Automated Responsive Internet Actions",
          ],
          answer: "Accessible Rich Internet Applications",
        },
        {
          question: "Which of the following is not a principle of the WCAG?",
          options: ["Perceivable", "Dependable", "Operable", "Understandable"],
          answer: "Dependable",
        },
        {
          question:
            "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
          options: ["3:1", "4.5:1", "7:1", "2:1"],
          answer: "4.5:1",
        },
        {
          question:
            "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
          options: ["<div>", "<span>", "<a href='...'>", "<p>"],
          answer: "<a href='...'>",
        },
        {
          question:
            "What is the purpose of the 'lang' attribute in an HTML page?",
          options: [
            "To specify the scripting language",
            "To define the character set",
            "To indicate the language of the page content",
            "To declare a language pack",
          ],
          answer: "To indicate the language of the page content",
        },
        {
          question:
            "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
          options: [
            "Keyboard Accessible",
            "Mouse Independence",
            "Device Independence",
            "Operable Controls",
          ],
          answer: "Keyboard Accessible",
        },
        {
          question:
            "What is the role of 'skip navigation' links in web accessibility?",
          options: [
            "To skip over primary navigation to the main content",
            "To provide shortcuts to different sections of the website",
            "To help users skip unwanted sections like advertisements",
            "To bypass broken links in the navigation",
          ],
          answer: "To skip over primary navigation to the main content",
        },
        {
          question:
            "Which of these tools can help in checking the accessibility of a website?",
          options: [
            "W3C Validator",
            "Google Lighthouse",
            "CSS Validator",
            "JavaScript Console",
          ],
          answer: "Google Lighthouse",
        },
      ],
    },
  ],
};
// App//////////////////////////////////////////////

export default function App() {
  const [subject, setSubject] = useState("");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [screen, setScreen] = useState("greetings");
  const [selected, setselected] = useState("");
  const [light, setLight] = useState(false);
  const questionsArr = data.quizzes.filter(
    (quiz) => quiz.title === (subject ? subject : "HTML")
  )[0].questions;

  const handleSelectSubject = function (subjectName) {
    setSubject(subjectName);
    setCurrent(0);
    setScreen("quiz");
  };
  const handleSelectAnswer = function (option) {
    setselected(option);
  };

  const handleSubmit = function () {
    //Store the correct answer
    const correct = questionsArr[current].answer;
    //Compare the Selected answer with the correct one
    if (correct === selected) setScore((score) => score + 1);
    //Move to the next question (if there is any)
    if (current === questionsArr.length - 1) {
      setScreen("result");
    } else {
      setCurrent((current) => current + 1);
    }
  };

  const handleReset = function () {
    setSubject("");
    setCurrent("0");
    setScore(0);
    setScreen("greetings");
    setselected("");
  };

  return (
    <main className={`main-container relative w-full ${light ? "light" : ""}`}>
      {/*//////////////////////////////////////////////////////////// Introduction Screen ////////////////////////*/}
      {screen === "greetings" && (
        <>
          <header className="flex justify-between z-20 absolute top-10 w-[85%] h-10">
            <div className="flex items-start gap-2 items-center ">
              {subject && (
                <>
                  <Icon>
                    <svg className="w-10 h-10  rounded-xl bg-white">
                      <use
                        xlinkHref={`./img${
                          data.quizzes[
                            data.quizzes.findIndex(
                              (q) => q.title === (subject ? subject : "HTML")
                            )
                          ].icon
                        }#${data.quizzes[
                          data.quizzes.findIndex((q) => q.title === subject)
                        ].title.toLowerCase()}`}
                      ></use>
                    </svg>
                  </Icon>
                  <span className="text-white font-semibold">{subject}</span>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <svg className="w-5">
                <use xlinkHref={`./img/icon-moon-dark.svg#moonDark`}></use>
              </svg>
              <Switch width={3} onSwitch={setLight} />
              <svg className="w-7">
                <use xlinkHref={`./img/icon-sun-dark.svg#sunDark`}></use>
              </svg>
            </div>
          </header>
          <div className=" relative self-start mt-12 z-20 w-full">
            <h1 className="heading text-white text-6xl font-light">
              Welcome to the{" "}
              <span className="block font-bold mb-8">Frontend Quiz!</span>
            </h1>
            <p className="italic text-[#bebebe]">
              Pick a Subject to get started
            </p>
          </div>
          <div className="flex flex-col gap-4 relative z-20 w-full items-center">
            {data.quizzes.map((quiz) => (
              <AnswerBox
                key={quiz.title}
                onClick={() => {
                  handleSelectSubject(quiz.title);
                }}
              >
                <Icon>
                  <svg className="w-10 h-10  rounded-xl bg-white">
                    <use
                      xlinkHref={`./img${
                        quiz.icon
                      }#${quiz.title.toLowerCase()}`}
                    ></use>
                  </svg>
                </Icon>
                <span className="text-white font-semibold">{quiz.title}</span>
              </AnswerBox>
            ))}
          </div>
        </>
      )}
      {/*//////////////////////////////////////////////////////////// Quiz Screen ////////////////////////*/}
      {screen === "quiz" && (
        <>
          <header className="flex justify-between z-20 absolute top-10 w-[85%] h-10">
            <div className="flex items-start gap-2 items-center ">
              {subject && (
                <>
                  <Icon>
                    <svg className="w-10 h-10  rounded-xl bg-white">
                      <use
                        xlinkHref={`./img${
                          data.quizzes[
                            data.quizzes.findIndex(
                              (q) => q.title === (subject ? subject : "HTML")
                            )
                          ].icon
                        }#${data.quizzes[
                          data.quizzes.findIndex((q) => q.title === subject)
                        ].title.toLowerCase()}`}
                      ></use>
                    </svg>
                  </Icon>
                  <span className="text-white font-semibold">{subject}</span>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <svg className="w-5">
                <use xlinkHref={`./img/icon-moon-dark.svg#moonDark`}></use>
              </svg>
              <Switch width={3} onSwitch={setLight} />
              <svg className="w-7">
                <use xlinkHref={`./img/icon-sun-dark.svg#sunDark`}></use>
              </svg>
            </div>
          </header>
          <div className=" relative self-start mt-12 h-full">
            <p className="italic text-[#bebebe] mb-4">{`Question ${
              current + 1
            } of ${questionsArr.length}`}</p>
            <Question>{questionsArr[current].question}</Question>
            <Statusbar
              current={current}
              questionsLength={questionsArr.length}
            />
          </div>
          <div className="flex flex-col gap-4 relative z-20 w-full items-center">
            {questionsArr[current].options.map((option, i) => (
              <AnswerBox
                key={option}
                onClick={() => {
                  handleSelectAnswer(option);
                }}
                selected={selected === option ? true : false}
              >
                <Icon>
                  <div className="bg-white w-12 h-12 flex justify-center items-center text-2xl font-bold rounded-2xl text-[#303d50]">
                    <p>{["A", "B", "C", "D"][i]}</p>
                  </div>
                </Icon>
                <span className="text-white font-semibold">{option}</span>
              </AnswerBox>
            ))}
            <div className="submitBox" onClick={handleSubmit}>
              Submit answer
            </div>
          </div>
        </>
      )}
      {/*//////////////////////////////////////////////////////////// Result Screen ////////////////////////*/}
      {screen === "result" && (
        <>
          <div className=" relative self-start mt-12 ">
            <h1 className="heading text-white text-6xl font-light">
              Quiz completed{" "}
              <span className="block font-bold mb-8 pt-2">You scored...</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4 relative z-20 ">
            <ResultBox>
              <div className="flex items-center gap-4 text-white">
                <Icon>
                  <svg className="w-10 h-10  rounded-xl bg-white">
                    <use
                      xlinkHref={`./img${
                        data.quizzes[
                          data.quizzes.findIndex((q) => q.title === subject)
                        ].icon
                      }#${data.quizzes[
                        data.quizzes.findIndex((q) => q.title === subject)
                      ].title.toLowerCase()}`}
                    ></use>
                  </svg>
                </Icon>
                <p className="font-bold">{subject}</p>
              </div>
              <p className="text-[9rem] text-white font-bold">{score}</p>
            </ResultBox>
            <div className="submitBox" onClick={handleReset}>
              Play again
            </div>
          </div>
        </>
      )}
    </main>
  );
}

function Question({ children }) {
  return <h2 className="question">{children}</h2>;
}

function AnswerBox({ children, onClick, selected = false }) {
  // console.log(Children);
  return (
    <div
      className={`QuestionBox ${selected ? "QuestionBox--selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Icon({ children }) {
  return <>{children}</>;
}

function Statusbar({ current, questionsLength }) {
  return (
    <div className=" w-full h-2 bg-white rounded-2xl mt-24 bg-[#2c3949] overflow-hidden">
      <div
        style={{ width: `${((current + 1) / questionsLength) * 100}%` }}
        className={` h-2 bg-purple-800 rounded-xl`}
      ></div>
    </div>
  );
}

function ResultBox({ children }) {
  return (
    <div className="bg-[#3c4c67] px-20 py-4 rounded-xl flex flex-col items-center">
      {children}
      <p className="text-gray-400 italic text-lg">out of 10</p>
    </div>
  );
}
// Left Container//////////////////////////////////////////////

// Friend Card//////////////////////////////////////////////

// Button Component//////////////////////////////////////////////

// Add friend form//////////////////////////////////////////////

// Input component//////////////////////////////////////////////

// Right Container//////////////////////////////////////////////
