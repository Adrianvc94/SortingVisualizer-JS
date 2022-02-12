const InsertionSort = (arr, UpdateArray, setStart, arrayLength) => {
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

      document.getElementById(`${sortedArray[0]}`).style.backgroundColor = "#208c4f"; // color: verde oscuro

      for(let i = 0; i < arrayLength; i++){

        for(let j = i; j > 0; j--){
            const index1 = document.getElementById(`${sortedArray[j]}`);
            const index2 = document.getElementById(`${sortedArray[j - 1]}`);
            if(sortedArray[j] < sortedArray[j - 1]){
                
                index1.style.backgroundColor = "#F2AC57"; // color: amarillo
                index2.style.backgroundColor = "#208c4f"; // color: verde oscuro
                [sortedArray[j], sortedArray[j-1]] = [sortedArray[j-1], sortedArray[j]];
                await task(delay);
                UpdateArray(sortedArray);
            }else{
                index1.style.backgroundColor = "#208c4f"; // color: verde oscuro
                await task(delay);
                break;
            }
            index1.style.backgroundColor = "#208c4f"; // color: verde oscuro

        }
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
  
  export default InsertionSort;
  
