/*
Write a Program to divide an array into 2 parts and check whether that the averages are same.
Print the output.
*/

var btn_sub = document.querySelector(".submit");
var btn_ref = document.querySelector(".reset");
var len = document.getElementById("length");
var arr1= document.getElementById("array");
var output = document.getElementById("output");
var final_arr1=[], final_arr2 = [],sum_arr1,sum_arr2,avg_1,avg_2;

// adding function to button 
btn_sub.addEventListener("click",fun);
btn_ref.addEventListener("click",clearAll);


function fun()
{
    let length = parseInt(len.value);
    // checking whether the length is number
    if(isNaN(length))
    {
        alert("Please enter numbers only in length ");
        reset_form();
        return;
    }

    let arr2 = arr1.value.trim().split(" ");
    // Parsing every element of array to number 
    let arr_num = arr2.map(a=> parseFloat(a));

    // Checking whether all the elements in array are only numbers
    if(arr_num.some(isNaN))
    {
        alert("Please enter numbers only in array ");
        return;
    }


    if(length != arr_num.length)
    {
        alert("length of the array is not equal to the given array length");
    }
    else
    {
        let half_len = length/2;
        compute(half_len);
    }
    
    // Function to compute the average of the array
    function compute(a)
    {
        final_arr1 = arr_num.slice(0,a);
        sum_arr1 = final_arr1.reduce((a,b)=>a+b);
        avg_1 = sum_arr1/final_arr1.length;
        console.log(avg_1);
    
        final_arr2 = arr_num.slice(a,length);
        sum_arr2 = final_arr2.reduce((a,b)=>a+b);
        avg_2 = sum_arr2/final_arr2.length;
        console.log(avg_2);
    
        
        let text = `<h4>[${arr_num}]--> [${final_arr1}] , [${final_arr2}]<br><br>
                    Average of ${final_arr1} is ${avg_1}<br><br>
                    Average of ${final_arr2} is ${avg_2}</h4>`;
        
        output.innerHTML = text;
        if(avg_1 === avg_2)
        {
            output.innerHTML += `<br><h2 style="color:Green">Average of the two array is equal</h2>`
        }
        else
        {
            output.innerHTML += `<br><h2 style="color:red">Average of the two array is not equal</h2>`
        }
    }
}




// reset function 
function reset_form()
{
    document.getElementById("myform").reset();
}

// to clear all the elements
function clearAll()
{
    document.getElementById("myform").reset();
    output.innerHTML="";
}