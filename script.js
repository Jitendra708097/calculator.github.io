const key = document.querySelector('.calculator');

let result = document.getElementById('result');
let keycontent;
key.addEventListener('click',(event)=>{
    if(event.target.matches('button'));
    {
        const keys = event.target;
        console.log(event.target);
        const action = keys.dataset.action;
        console.log(action);
        if (!action) {
            console.log('number key!')
            keycontent = event.target.textContent;
            console.log(keycontent);

              if(result.innerHTML === 'O')
                {
                    result.innerHTML = keycontent;
                }
                else
                {
                    result.innerHTML+=keycontent;
                }
          }

          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            console.log('operator key!')
            key.classList.add('is-depressed')
          }



          if (action === 'decimal' && !result.textContent.includes('.')) {
            console.log('decimal key!')
            result.innerHTML = result.textContent+'.';
          }
          
          if (action === 'clear') {
            console.log('clear key!')
          }
          
          if (action === 'calculate') {
            console.log('equal key!')
          }
          
    }

})

