var ac= document.getElementById('ac');
var one= document.getElementById('one');
var two= document.getElementById('two');
var three= document.getElementById('three');
var four= document.getElementById('four');
var five= document.getElementById('five');
var six= document.getElementById('six');
var seven= document.getElementById('seven');
var eight= document.getElementById('eight');
var nine= document.getElementById('nine');

var display= document.getElementById('display');
var plus= document.getElementById('plus');
var minus= document.getElementById('minus');
var multiply= document.getElementById('multiply');
var division= document.getElementById('division');
var percent= document.getElementById('percent');
var plus_minus= document.getElementById('plus-minus');

var equal= document.getElementById('equal');

var curr1= null;
var curr2= null;
var operator="";
var count= 1;
var sign= 1;

function calc(curr1, curr2, operator)
{
    if(operator=="+")
    {
        return curr1+curr2;
    }
    else if(operator=="-")
    {
        return curr1-curr2;
    }
    else if(operator=="*")
    {
        return curr1*curr2;
    }
    else if(operator=="/")
    {
        return curr1/curr2;
    }
    else if(operator=="%")
    {
        return curr1/100.0;
    }
}

function displaycurr1()
{
    display.innerHTML= curr1;
}
function displaycurr2()
{
    display.innerHTML= curr2;
}
ac.addEventListener('click', function()
{
    curr1= null;
    curr2= null;
    count= 1;
    sign= 1;
    operator= "";
    display.innerHTML= "";
});

one.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 1*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 1*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
two.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 2*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 2*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
three.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 3*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 3*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
four.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 4*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 4*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
five.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 5*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 5*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
six.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 6*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 6*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
seven.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 7*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 7*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
eight.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 8*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 8*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
nine.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 9*sign;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 9*sign;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});
zero.addEventListener('click', function()
{
    if(count==1)
    {
        curr1= curr1*10+ 0;
        displaycurr1();
    }
    else if(count==2 && operator != "")
    {
        curr2= curr2*10+ 0;
        displaycurr2();
    }
    else if(operator=="")
    {
        display.innerHTML= "Error: no operator";
    }
});

plus.addEventListener('click', function()
{
    if(curr1==null)
    {
        display.innerHTML= "No operand1";
        return;
    }
    operator= "+";
    display.innerHTML= "addition";
    count=2;
    sign= 1;
});
minus.addEventListener('click', function()
{
    if(curr1==null)
    {
        display.innerHTML= "No operand1";
        return;
    }
    operator= "-";
    display.innerHTML= "minus";
    count=2;
    sign= 1;
});
multiply.addEventListener('click', function()
{
    if(curr1==null)
    {
        display.innerHTML= "No operand1";
        return;
    }
    operator= "*";
    display.innerHTML= "multiply";
    count=2;
    sign= 1;
});
division.addEventListener('click', function()
{
    if(curr1==null)
    {
        display.innerHTML= "No operand1";
        return;
    }
    operator= "/";
    display.innerHTML= "division";
    count=2;
    sign= 1;
});
percent.addEventListener('click', function()
{
    if(curr1==null)
    {
        display.innerHTML= "No operand1";
        return;
    }
    operator= "%";
    curr1= calc(curr1, 0, "%");
    display.innerHTML= curr1;
    curr2= 0;
    count=1;
});
plus_minus.addEventListener('click', function()
{
    if((curr1!=null && curr2!=null) || (curr2==null && operator==""))
    {
        display.innerHTML= "Error: no operator";
        return;
    }
    if(sign==1)
    {
        sign=-1;
        display.innerHTML= "-";
    }
    else if(sign==-1)
    {
        sign=1;
        display.innerHTML= "";
    }
}
);

equal.addEventListener('click', function()
{
    if(operator=="")
    {
        display.innerHTML= "Error";
        return;
    }
    if(operator=="/" && curr2==0)
    {
        display.innerHTML= "Divide by zero error";
        return;
    }

    curr1= calc(curr1, curr2, operator);
    display.innerHTML= curr1;

    operator="";
    count= 2;
    curr2= null;
    sign= 1;
});
