let arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
console.log("Початковий масив:", arr);

arr.forEach((value, index) => {
    console.log(`[${index + 1}] – ${value}`);
});

let hasMultipleOf7 = arr.some(num => num % 7 === 0);
console.log("Є число кратне 7:", hasMultipleOf7);

let sortedDescending = [...arr].sort((a, b) => b - a);
console.log("Масив за спаданням:", sortedDescending);

let half = Math.floor(arr.length / 2);
arr = arr.map((val, index) => index >= half ? 0 : val);
console.log("Після заповнення другої половини нулями:", arr);

arr.splice(0, 3);
console.log("Після видалення перших 3 елементів:", arr);

let hasDuplicates = arr.some((item, index) => arr.indexOf(item) !== index);
console.log("Є однакові елементи:", hasDuplicates);

let middleArray = arr.slice(1, -1);
console.log("Без крайніх елементів:", middleArray);

let evenCount = arr.filter(num => num % 2 === 0).length;
console.log("Кількість парних чисел:", evenCount);
