//1
var a = 4;
var b = 8;

function add(numA,numB){
    Added = numA + numB;

    return Added;

    //2
    function CheckNums(num1,num2){
        if(num1 == num2){
            return "Values are equal"

        }
        else if(num1 < num2){
        return "True"
        }
        else{
            return "False"

        }
    }
    }
    //3


    function List(a,b,c,d){
        var listWord = [a,b,c,d];
        return listWord;
    }

    //4
    function Convert(min){
        var c = min/60;
        return c;
    }
    //5
    function calc(radius){
        var area = Math.PI*(radius*2);
        var perimeter=2*Math.PI.radius;
        return "Area is"+area+"perimeter"+perimeter;
        }
    //6
        function Conv(distance,unit){
            if(distance === "m"){
                return "Kilometers: "+(distance*1.60934);
            }

            else if(unit ==="km"){
                return "Miles: "+(unit/1.60934)

            }
        
            
        }

        //7
        function index(kg,m){
            BMI = kg /m*m;
            return "Your BMI is: "+BMI;
        }
        //8
        function DayMonth(a,b,c){
            return new Date(a,b,c);
         }
         //9
         function palindrome(str) {
            const str1 = [...str].reverse().join('');
            return str === str1;
        }
        //10
        function calculator(num1, a, num2) {

            if (a === "+") {
                return num1 + num2;
            }
        
            else if (a === "-") {
                return num1 - num2;
            }
        
            else if (a === "*") {
                return num1 * num2;
            }
        
            else if (a === "/") {
                return num1 / num2;
            }
               
        }