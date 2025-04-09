const add = document.getElementById('plus');
const minus= document.getElementById('minus');
const product= document.getElementById('product');
const double = document.getElementById('double');
const divide = document.getElementById('divide');
const zero = document.getElementById('zero');
const seven = document.getElementById('seven');
const eight= document.getElementById('eight');
const nine = document.getElementById('nine');
const equal = document.getElementById('equal');

const four = document.getElementById('four');
const five = document.getElementById('five');
const six= document.getElementById('six');
const reset = document.getElementById('reset');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const dot = document.getElementById('dot');




let ans = "";
const result= document.getElementById('result');

add.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

minus.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

divide.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

product.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

one.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

two.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

three.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

four.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})


five.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

six.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

seven.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

eight.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})

nine.addEventListener('click',(event)=>{
    ans+=event.target.innerHTML;
    console.log(ans);
    result.innerText = ans;
})



equal.addEventListener('click',(event)=>{
    // ans+=event.target.innerHTML;
    // console.log(ans);
     
    let ans1 = 0;
    for(let i=0;i<ans.length;i++)
    {
        if(ans[i]>=0 && ans[i]<=9)
            ans1 = ans1+Number(ans[i])*10;

        if(ans[i] == '+')
            ans1 = ans1+ans[i];

        result.innerText = ans1;
        ans="";
    }
    ans1=0;
})

// divide.addEventListener('click',(event)=>{
//     ans+=event.target.innerHTML;
//     console.log(ans);
//     result.innerText = ans;
// })

// product.addEventListener('click',(event)=>{
//     ans+=event.target.innerHTML;
//     console.log(ans);
//     result.innerText = ans;
// })

