//program to check a leap year
function leapyear(year)
{
    var year;
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
        console.log(year+" is a leap year");  
    }
    else
    {
        console.log(year+" is not a leap year");  
    }
}
leapyear(6000);


//program to perform arithmetic operations
function operator(x,y)
{
var x,y
var ans=x+y;
console.log(x + "+" + y + "=" + ans)
}
operator(20,30);


//program to pass a function as a parameter
function names(student, marks){

    console.log(student,marks);
}
names('ram',30);
names('abhi',49);


//program to Merge Two Arrays and Remove Duplicate Items.
function AfterMerge(a1, a2){

    let arr = a1.concat(a2);
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
AfterMerge(array1, array2);