                    //Chapter 35 to 38 pdf
                    //FUNCTION

//q1.
function fun(){
    var date= new Date();
    document.write(date);
}
fun();

//q2.
function Name(firstName,SecondName){
    fullName= firstName+" "+SecondName;
    console.log(`Hello ${fullName} Wellcome!`);
}
Name("Sidra","Moosa");

//q3.
function add(num1,num2){
    var variable= num1+ num2;
    return variable;
}
var result= add(parseFloat(prompt("Enter num1")),parseFloat(prompt("Enter num2")));
console.log(result);

//q4.
function calcu(num1,num2,operator){
    if(operator=== "+"){
        return num1+num2;
    }
    if(operator=== "-"){
        return num1-num2;
    }
    if(operator=== "*"){
        return num1*num2;
    }
    if(operator=== "/"){
        return num1/num2;
    }
    if(operator=== "%"){
        return num1%num2;
    }
    else{ return "Invalid operator";}
}

var result =   calcu(parseFloat(prompt("Enter num1")),parseFloat(prompt("Enter num2")),prompt("Enter operator"));
console.log(result)

//q5.
function square(number){
    var variable=number*number;
    return variable; 
}
var num= parseFloat (prompt("Enter a number of square"))
 var result =square(num);
 console.log(`The square of ${num} is: ${result} `);

//q7.
function number(start,end){
 var result=[];   
for(var i=start;i<=end;i++)
result.push(i);
return result
}

var startNum=parseFloat(prompt("Enter start number"));
var endNum=parseFloat(prompt("Enter end number"));

var countingNum= number(startNum,endNum);
console.log(`Counting from ${startNum} to ${endNum}: ${countingNum.join(",")} `);

//q9.
         //Argement as value           
function calculateArea(width,height){
return width*height

}
var area1= calculateArea(5,10);
console.log("Area (with values): " + area1);


        //Argument as variable
function calculateArea(width,height){
return width*height
            
}
var rectWidth= 7;
var rectHeight = 3;
var area2= calculateArea(rectWidth,rectHeight);
console.log("Area (with variables): " + area2);
                      
//q10.
function palindrome(word){
var reverseWord="";
for(var i=word.length -1 ; i>=0;i--){
    reverseWord+=word[i];
}
if(reverseWord===word){
    console.log("Word is palindrome")
}
else{
    console.log("Word is not palindrome")
}

}
palindrome(prompt("Enter a word"))


                // Chapter 38 to 42 pdf
                // FUNCTIONS, SWITCH
                //  STATEMENTS, WHILE... DO- WHILE LOOPS








                //    Chapter 43 to 48 pdf 
                //     EVENTS

//q1.
function showAlert(){
    alert("You click the link")
}                    

//q2.
function phone(){
    alert("Thanks for purchasing a phone");
}                    



                        //     Question pdf 31 to 40.docx
                        //    Chapter 31 - 34 (Date &amp; Time)

//q1.
dObj = new Date();
console.log(dObj)

//q2.
dStr = new Date().toString();
console.log(dStr);

//q3.
var d= new Date();
day= d.getDay();
console.log(day);

//q4.
var d= new Date();
var dayNames=['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
alert(dayNames[d.getDay()]);

//q5.
var d = new Date(); 

year = d.getFullYear(); 
month = d.getMonth() + 1; 
date = d.getDate(); 
hours = d.getHours(); 
minutes = d.getMinutes(); 
seconds = d.getSeconds(); 

console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

//q6.
later = new Date(2020, 11, 31);
console.log(later);

//q7.
variable = new Date(1992, 1, 2);
console.log(variable);

//q8.
var date=new Date(1980, 0, 1).getTime();
var current = new Date().getTime();
var diff=  current - date;
alert(diff);

//q9.
var date= new Date();
date.setFullYear(2025);
console.log("Updated Date:", date)

//q10.
function changeToJanuary(date){
    date.setMonth(0);
    return date;
}
var myDate = new Date(2024, 9, 14);
var updatedDate= changeToJanuary(myDate);
console.log("Updated Date:", updatedDate);



                                    // Chapter 35 - 37 (Functions)

//q1.
function alt(){
    alert("Wellcome!")
}
alt();                                    

//q2.
function askName(name){
userName = prompt("Enter name");
console.log(`User name: ${userName}`);}
askName()

//q3.
function greet(){
    console.log("Hello! Welcome to the program.");
}

function add(){
    console.log("Thank you for using the program!");
}

function main(){
    greet();
    add();
}
main();

//q4.
function Name(){
    var userName=prompt("Enter your name");
    alert(`Wellcome: ${userName}`)
}
Name();

//q5.
function concat(a,b,c){
    return a+b+c
}
var result= concat("Sidra","Moosa",2104);
console.log(result);

//q6.
function concate(firstName,SecondName){
variable= firstName+SecondName;
console.log(variable)
}
concate("Sidra","Moosa")

//q7.
function multi(num1,num2,num3){
    variable= num1*num2*num3;
    console.log(variable)
    }
    multi(2,4,6)



//q9.
 function add(num1,num2){
        return num1+num2
    }
    var result= add(20,30);
    console.log(result);
    
//q11.
 function sum(num1,num2){
        return num1+num2
    }
    var result= sum(60,40);
    console.log(result);

//q13.
function date(){
var d=new Date()
d.setFullYear(2025);
console.log(d)
}
date();