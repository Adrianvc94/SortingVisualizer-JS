const BubbleSort = (arr, UpdateArray, setStart, arrayLength) => {
  let sortedArray = [];
  sortedArray = arr;

  let delay;
  const arraySpeed = () => {
    if (arrayLength < 30) {
      delay = 150;
    } else if (arrayLength < 75) {
      delay = 25;
    } else if (arrayLength < 100) {
      delay = 7;
    } else {
      delay = 1;
    }
  };

  const sort = async () => {
    arraySpeed();

    let lowest;

    for (let i = 0; i < sortedArray.length; i++) {
      lowest = i;
      for (let j = i + 1; j < sortedArray.length; j++) {
        const indexCurrent = document.getElementById(`${sortedArray[j]}`);
        const indexLowest = document.getElementById(`${sortedArray[lowest]}`);

        indexCurrent.style.backgroundColor = "#F2AC57"; // color: amarillo
        if (sortedArray[j] < sortedArray[lowest]) {
          lowest = j;
          if (indexLowest.style.backgroundColor === "#F2AC57") { // color: amarillo
            indexLowest.style.backgroundColor = "#F27272"; // color: rojo
          } else {
            indexCurrent.style.backgroundColor = "#F27272"; // color: rojo
            indexLowest.style.backgroundColor = "#F2AC57"; // color: amarillo
          }
          await task(delay);
        }
        await task(delay);
        indexLowest.style.backgroundColor = "#F27272"; // color: rojo
        indexCurrent.style.backgroundColor = "#F27272"; // color: rojo
      }

      if (lowest !== i) {
        const indexCurrent = document.getElementById(`${sortedArray[i]}`);
        const indexLowest = document.getElementById(`${sortedArray[lowest]}`);
        indexLowest.style.backgroundColor = "#F2AC57"; // color: amarillo
        [sortedArray[i], sortedArray[lowest]] = [
          sortedArray[lowest],
          sortedArray[i],
        ];
        await task(delay);
        UpdateArray(sortedArray);
        indexLowest.style.backgroundColor = "#F27272"; // color: rojo
        indexCurrent.style.backgroundColor = "#F27272"; // color: rojo
      }
      const indexOrdered = document.getElementById(`${sortedArray[i]}`);
      indexOrdered.style.backgroundColor = "#208c4f"; // color: verde oscuro

    }
    setStart(false);
  };

  function timer(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  async function task(i) {
    await timer(i);
  }

  sort();
};

export default BubbleSort;
