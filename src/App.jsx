import { useState } from "react";
import { Container, Visor, Buttons } from "./styledApp";

function App() {
  const [value, setValue] = useState("0");

  function zero() {
    if (value === "0" || value === "NaN") {
      return null;
    } else {
      setValue(value + "0");
    }
  }
  function one() {
    if (value === "0" || value === "NaN") {
      return setValue("1");
    } else setValue(value + "1");
  }
  function two() {
    if (value === "0" || value === "NaN") {
      return setValue("2");
    } else setValue(value + "2");
  }
  function three() {
    if (value === "0" || value === "NaN") {
      return setValue("3");
    } else setValue(value + "3");
  }
  function four() {
    if (value === "0" || value === "NaN") {
      return setValue("4");
    } else setValue(value + "4");
  }
  function five() {
    if (value === "0" || value === "NaN") {
      return setValue("5");
    } else setValue(value + "5");
  }
  function six() {
    if (value === "0" || value === "NaN") {
      return setValue("6");
    } else setValue(value + "6");
  }
  function seven() {
    if (value === "0" || value === "NaN") {
      return setValue("7");
    } else setValue(value + "7");
  }
  function eight() {
    if (value === "0" || value === "NaN") {
      return setValue("8");
    } else setValue(value + "8");
  }
  function nine() {
    if (value === "0" || value === "NaN") {
      return setValue("9");
    } else setValue(value + "9");
  }
  function plus() {
    if (
      value[value.length - 1] === "+" ||
      value[value.length - 1] === "-" ||
      value[value.length - 1] === "*" ||
      value[value.length - 1] === "/" ||
      value[value.length - 1] === "."
    ) {
      return null;
    } else setValue(value + "+");
  }
  function minus() {
    if (
      value[value.length - 1] === "+" ||
      value[value.length - 1] === "-" ||
      value[value.length - 1] === "*" ||
      value[value.length - 1] === "/" ||
      value[value.length - 1] === "."
    ) {
      return null;
    } else setValue(value + "-");
  }
  function multiply() {
    if (
      value[value.length - 1] === "+" ||
      value[value.length - 1] === "-" ||
      value[value.length - 1] === "*" ||
      value[value.length - 1] === "/" ||
      value[value.length - 1] === "."
    ) {
      return null;
    } else setValue(value + "*");
  }
  function split() {
    if (
      value[value.length - 1] === "+" ||
      value[value.length - 1] === "-" ||
      value[value.length - 1] === "*" ||
      value[value.length - 1] === "/" ||
      value[value.length - 1] === "."
    ) {
      return null;
    } else setValue(value + "/");
  }
  function dot() {
    if (
      value[value.length - 1] === "+" ||
      value[value.length - 1] === "-" ||
      value[value.length - 1] === "*" ||
      value[value.length - 1] === "/" ||
      value[value.length - 1] === "."
    ) {
      return null;
    } else setValue(value + ".");
  }

  function percent () {

  }

  function splitOne() {
    setValue(1 / value)

  }
  function toSquare() {
    setValue(value ** 2)

  }
  function squareRoot() {
    console.log(setValue(eval(`Math.sqrt(value, 2)`)))
  }
  function toNegative() {

  } 

  function clean() {
    setValue("0");
  }

  function erase() {
    if (value.length === 1) {
      setValue("0");
    } else
    setValue(value.substring(0, value.length - 1));
  }
  function equal() {
    setValue(eval(value))
  }

  return (
    <Container>
      <Visor type="text" value={value} readOnly/>
      <Buttons>
        <button className="func-button" onClick={percent}>
          %
        </button>
        <button className="func-button" onClick={""}>
          CE
        </button>
        <button className="func-button" onClick={clean}>
          C
        </button>
        <button className="func-button" onClick={erase}>
          back
        </button>
        <button className="func-button" onClick={splitOne}>
          1/x
        </button>
        <button className="func-button" onClick={toSquare}>
          x2
        </button>
        <button className="func-button" onClick={squareRoot}>
          2radx
        </button>
        <button className="operation-button" onClick={split}>
          ÷
        </button>
        <button className="num-button" onClick={seven}>
          7
        </button>
        <button className="num-button" onClick={eight}>
          8
        </button>
        <button className="num-button" onClick={nine}>
          9
        </button>
        <button className="operation-button" onClick={multiply}>
          ×
        </button>
        <button className="num-button" onClick={four}>
          4
        </button>
        <button className="num-button" onClick={five}>
          5
        </button>
        <button className="num-button" onClick={six}>
          6
        </button>
        <button className="operation-button" onClick={minus}>
          -
        </button>
        <button className="num-button" onClick={one}>
          1
        </button>
        <button className="num-button" onClick={two}>
          2
        </button>
        <button className="num-button" onClick={three}>
          3
        </button>
        <button className="operation-button" onClick={plus}>
          +
        </button>
        <button className="num-button" onClick={toNegative}>
          +/-
        </button>
        <button className="num-button" onClick={zero}>
          0
        </button>
        <button className="num-button" onClick={dot}>
          .
        </button>
        <button onClick={equal}>=</button>
      </Buttons>
    </Container>
  );
}

export default App;
