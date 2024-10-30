



for (let i = 1; i <= 100; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.error('FizzBuzz');
    } else if (i % 3 === 0) {
        console.warn('Fizz');
    } else if (i % 5 === 0) {
        console.warn('Buzz');
    } else {
        console.log(i);
    }
}

------------------------------------------

