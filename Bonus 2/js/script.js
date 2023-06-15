const myContainer = document.getElementById("my-container");

for (let i=1; i<101; i++) {

    const myDiv = document.createElement('div');
   
    
    if (i % 3==0 && i % 5==0) {
        console.log('FizzBuzz');
        myDiv.append('FizzBuzz');
        myDiv.classList.add('bg-warning');
        myDiv.classList.add('d-inline-block');
        myDiv.classList.add('border');
        myDiv.classList.add('border-white');
        myDiv.classList.add('p-5');
        myDiv.classList.add('m-2');
    } else if (i % 3==0) {
        console.log('Fizz');
        myDiv.append('Fizz');
       myDiv.classList.add('d-inline-block');
       myDiv.classList.add('bg-success');
       myDiv.classList.add('border');
       myDiv.classList.add('border-white');
       myDiv.classList.add('p-5');
       myDiv.classList.add('m-2');

    } else if (i % 5==0) {
        console.log('Buzz');
        myDiv.append('Buzz');
       myDiv.classList.add('d-inline-block');
       myDiv.classList.add('border');
       myDiv.classList.add('bg-primary');
       myDiv.classList.add('border-white');
       myDiv.classList.add('p-5');
       myDiv.classList.add('m-2');
    } else {
        console.log(i);
        myDiv.append(i);
       myDiv.classList.add('d-inline-block');
       myDiv.classList.add('border');
       myDiv.classList.add('bg-danger');
       myDiv.classList.add('border-white');
       myDiv.classList.add('p-5');
       myDiv.classList.add('m-2');
    }
    myContainer.append(myDiv);
}


