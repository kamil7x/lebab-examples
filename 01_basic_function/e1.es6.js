const fibonacci = [];
for (let oi = 0, i = 1; i < 300; i) {
    fibonacci.push(i);
    const temp = oi;
    oi = i;
    i = i + temp;
}

console.log(fibonacci);

let sum = 0;
fibonacci.forEach(item => {
    const isEven = !(item % 2);
    if (isEven) {
        sum = sum + item;
    }
});

console.log(sum);