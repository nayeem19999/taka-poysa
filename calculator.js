document.getElementById('submit').addEventListener('click',function(){
    const firstInput = document.getElementById('first').value;
    const secondInput = document.getElementById('second').value;
    const convertedFirst = parseInt(firstInput);
    const convertedSecond = parseInt(secondInput);
    const result = convertedFirst + convertedSecond;
    const span = document.getElementById('result')
    span.innerText = result;
})