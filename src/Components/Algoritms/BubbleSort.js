const BubbleSort = (arr, UpdateArray, setStart, arrayLength) => {
  let sortedArray = arr;
  
  let delay;
  const arraySpeed = () => {
    if(arrayLength < 30){
      delay = 80;
    }else if(arrayLength < 75){
      delay = 25;
    }else if(arrayLength < 100){
      delay = 7;
    }else{
      delay = 1;
    }
  }

  const sort = async () => {
    arraySpeed();
    for (let i = sortedArray.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          [sortedArray[j], sortedArray[j + 1]] = [
            sortedArray[j + 1],
            sortedArray[j],
          ];

          const index1 = document.getElementById(`${sortedArray[j]}`);
          const index2 = document.getElementById(`${sortedArray[j + 1]}`);
          if (index1.style.backgroundColor === "blue") {
            index1.style.backgroundColor = "red";
            index2.style.backgroundColor = "red";
          } else {
            index1.style.backgroundColor = "blue";
            index2.style.backgroundColor = "blue";
          }

          await task(delay);
          UpdateArray(sortedArray);
        }
        const index1 = document.getElementById(`${sortedArray[j]}`);
        const index2 = document.getElementById(`${sortedArray[j + 1]}`);
        index1.style.backgroundColor = "red";
        index2.style.backgroundColor = "red";
      }

      const indexOrdered = document.getElementById(`${sortedArray[i - 1]}`);
      indexOrdered.style.backgroundColor = "green";
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
