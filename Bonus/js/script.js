const ul = document.querySelector("ul.list");

for (let i=1; i<101; i++) {
    
    if (i % 3==0 && i % 5==0) {
        console.log('FizzBuzz');
        const li = document.createElement('li');
        li.append('FizzBuzz');
        ul.append(li);

    } else if (i % 3==0) {
        console.log('Fizz');
        const li = document.createElement('li');
        li.append('Fizz');
        ul.append(li);

    } else if (i % 5==0) {
        console.log('Buzz');
        const li = document.createElement('li');
        li.append('Buzz');
        ul.append(li);
    } else {
        console.log(i);
        const li = document.createElement('li');
        li.append(i);
        ul.append(li);
    }
}

