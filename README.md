## _📊 Sorting Visualizer_

This project purpose is to visualize and understand three of the basics sorting algorithms, which include Bubble Sort, Insertion Sort and Selection Sort.
The project is build using React.<br>
Live demo: https://adrianvc94.github.io/SortingVisualizer-JS/

## Bubble Sort
1. How it works?
    - It works by comparing consecutive items and finding the highest, and if they are out of place it will swap them. In this way for each iteration the highest value will end up in the end of the array, forming a sorted partition.
2. What is the time complexity and space complexity?
    - Time complexity is O(n<sup>2</sup>) and space complexity is O(1).

Approach used in the project:
```js
  let arr = [9,6,3,4,7,5]; // Input
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1],arr[j]];
      }
    }
  }
// Output [3,4,5,6,7,9]
```
![BubbleSort](https://user-images.githubusercontent.com/63268239/158536743-8f132b89-39a6-42b7-8f14-93b3d6444e91.gif)

<br>

## Selection Sort
1. How it works?
    - It works by selecting during each iteration the smallest element from the unsorted part of the array to then move it to the sorted part. 
2. What is the time complexity and space complexity?
    - Time complexity is O(n<sup>2</sup>) and space complexity is O(1).

Approach used in the project:
```js
  let arr = [9,6,3,4,7,5]; // Input
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
// Output [3,4,5,6,7,9]
```

![SelectionSort](https://user-images.githubusercontent.com/63268239/158537382-1e252fa6-6ee6-4e9a-9d42-6a52ccdf53f6.gif)

<br>

## Insertion Sort
1. How it works?
    - It works by examining each element and compare it to the elements on its left to then inserting it in the correct position in the array. 
2. What is the time complexity and space complexity?
    - Time complexity is O(n<sup>2</sup>) and space complexity is O(1).

Approach used in the project:
```js
  let arr = [9,6,3,4,7,5]; // Input	
  for(let i = 0; i < arr.length; i++){
    for(let j = i; j > 0; j--){
        if(arr[j] < arr[j - 1]){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        }else{
            break;
        }
    }
  }
// Output [3,4,5,6,7,9]
```
![InsertionSort](https://user-images.githubusercontent.com/63268239/158538580-d05de3ff-16cd-4b94-a355-6e1a54039f85.gif)

