import { useEffect, useState } from "react";
import BubbleSort from "../Algoritms/BubbleSort/BubbleSort";
import Header from "../Header/Header";
import classes from "./SortingVisualizer.module.css";

const SortingVisualizer = () => {
  const [arrayLength, setArrayLength] = useState(110);
  const [start, setStart] = useState(false);
  const [algoritm, setAlgoritm] = useState("Bubble");

  const [mainArray, setMainArray] = useState([]);

  const FillArray = () => {
    let NumbersArray = [];
    let i = 0;
    let random = 0;
    do {
      random = Math.floor(Math.random() * (500 - 1 + 1) + 1);
      if (!NumbersArray.includes(random)) {
        NumbersArray.push(random);
        i++;
      }
    } while (i < arrayLength);
    setMainArray(NumbersArray);
  };

  const UpdateArray = (arr) => {
    setMainArray([...arr]);
  };

  useEffect(() => {
    FillArray();
  }, [arrayLength]);

  useEffect(() => {
    if (start) {
      switch (algoritm) {
        case "Bubble":
          BubbleSort(mainArray, UpdateArray, setStart, arrayLength);
          break;
        case "Selection":
          console.log("Selection");
          setStart(false);
          break;
        case "Insertion":
          console.log("Insertion");
          setStart(false);
          break;
        default:
          break;
      }
    }
  }, [start, algoritm]);

  return (
    <>
      <Header
        setArrayLength={setArrayLength}
        arrayLength={arrayLength}
        setAlgoritm={setAlgoritm}
        start={start}
        setStart={setStart}
        fillArray={FillArray}
      />
      <main style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
        <div className={classes.container}>
          <div className={classes.chart}>
            {mainArray.map((number) => (
              <div
                key={number}
                id={number}
                className={classes.bar}
                style={{ height: `${number}px` }}
              ></div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default SortingVisualizer;
