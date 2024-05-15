import Display from "./components/Display";
import Buttons from "./components/Buttons";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  let onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.container}>
      <Display displayValue={calVal} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
