//自定义函数
function JS(num1,num2,operator){             //不带参数类型  不用标明返回类型
    var res = 0;
    switch(operator){
        case "+":{
            return res = num1 + num2;break;}
        case "-":{
            return res = num1 + num2;break;}
        case "*":{
            return res = num1 * num2;break;}
        case "/":{
            return res = num1 / num2;break;}
        default:{
            window.alert("input error!");}}
}

function test(){
    val = window.prompt("input :");
    window.alert("你刚输入了：" + val)
}

function abc(num1){
    if(num1 > 3){
        abc(--num1);            //递归  返回时要执行--num 但不再调用abc()
    }
    document.writeln(num1);
}

//接受任意多个参数
function abc2(){
    for(var i = 0; i < arguments.length; i++){   
        document.writeln(arguments[i]);       //所有参数自动存放在数组arguments中!!!
    }
    window.alert(arguments.length);    //arguments可以访问所有传入值
}