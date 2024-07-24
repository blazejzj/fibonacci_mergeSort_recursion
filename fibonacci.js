

// fibonacci without recursion
function fibonacci(num) {
    let a = 0;
    let b = 1;
    let sum;

    for(let x = 0; x < num; x++) {
        console.log(a);
        sum = a + b;
        a = b;
        b = sum;
    };
};


// Recursion 1
function fibonacciRecursion(num, a = 0, b = 1) {

    if(num === 0) {
        return;
    };
    fibonacciRecursion(num - 1, b, a + b);

};

// Recursion 2
function fibonacciSecondRecursion(n) {

    if (n < 2) {
        return n;
    }

    else {
        return(fibonacciSecondRecursion(n-1) + fibonacciSecondRecursion(n-2));
    }
}