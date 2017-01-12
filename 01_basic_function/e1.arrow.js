var fibonacci = [];
for (var oi = 0, i = 1; i < 300; i) {
    fibonacci.push(i);
    var temp = oi;
    oi = i;
    i = i + temp;
}

console.log(fibonacci);

var sum = 0;
fibonacci.forEach(item => {
    var isEven = !(item % 2);
    if (isEven) {
        sum = sum + item;
    }
});

console.log(sum);