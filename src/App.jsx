import { useState } from "react";
import { Container, Visor, Buttons } from "./styledApp";

function App() {
  const [value, setValue] = useState("0");

  const one = () =>
    value === "0" || value === "NaN" ? setValue("1") : setValue(value + "1");
  const two = () =>
    value === "0" || value === "NaN" ? setValue("2") : setValue(value + "2");
  const three = () =>
    value === "0" || value === "NaN" ? setValue("3") : setValue(value + "3");
  const four = () =>
    value === "0" || value === "NaN" ? setValue("4") : setValue(value + "4");
  const five = () =>
    value === "0" || value === "NaN" ? setValue("5") : setValue(value + "5");
  const six = () =>
    value === "0" || value === "NaN" ? setValue("6") : setValue(value + "6");
  const seven = () =>
    value === "0" || value === "NaN" ? setValue("7") : setValue(value + "7");
  const eight = () =>
    value === "0" || value === "NaN" ? setValue("8") : setValue(value + "8");
  const nine = () =>
    value === "0" || value === "NaN" ? setValue("9") : setValue(value + "9");
  const zero = () =>
    value === "0" || value === "NaN" ? {} : setValue(value + "0");

  const plus = () =>
    value[value.length - 1] === "+" ||
    value[value.length - 1] === "-" ||
    value[value.length - 1] === "*" ||
    value[value.length - 1] === "/" ||
    value[value.length - 1] === "."
      ? {}
      : setValue(value + "+");

  const minus = () =>
    value[value.length - 1] === "+" ||
    value[value.length - 1] === "-" ||
    value[value.length - 1] === "*" ||
    value[value.length - 1] === "/" ||
    value[value.length - 1] === "."
      ? {}
      : setValue(value + "-");

  const multiply = () =>
    value[value.length - 1] === "+" ||
    value[value.length - 1] === "-" ||
    value[value.length - 1] === "*" ||
    value[value.length - 1] === "/" ||
    value[value.length - 1] === "."
      ? {}
      : setValue(value + "*");

  const split = () =>
    value[value.length - 1] === "+" ||
    value[value.length - 1] === "-" ||
    value[value.length - 1] === "*" ||
    value[value.length - 1] === "/" ||
    value[value.length - 1] === "."
      ? {}
      : setValue(value + "/");

  const dot = () =>
    value[value.length - 1] === "+" ||
    value[value.length - 1] === "-" ||
    value[value.length - 1] === "*" ||
    value[value.length - 1] === "/" ||
    value[value.length - 1] === "." ||
    (value.includes(".") && !value.includes("."))
      ? {}
      : setValue(value + ".");

  const splitOne = () => setValue(1 / value);
  const toSquare = () => setValue(value ** 2);
  const squareRoot = () => setValue(eval(`Math.sqrt(value, 2)`));
  const toNegative = () => (value[0] === "-" ? {} : setValue("-" + value));
  const clean = () => setValue("0");

  const erase = () =>
    value.length === 1
      ? setValue("0")
      : setValue(value.substring(0, value.length - 1));

  const equal = () =>
    value.includes(".")
      ? setValue(eval(value).toFixed(1))
      : setValue(eval(value));

  function percent() {}
  function clearValue() {}
  return (
    <>
      <Visor type="text" value={value} readOnly />
      <Buttons>
        <button className="func-button" onClick={percent}>
          %
        </button>
        <button className="func-button" onClick={clearValue}>
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
    </>
  );
}

export default App;
