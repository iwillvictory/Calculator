function operator(value){
    let display= document.getElementById("display");
    if(value=="="){
        display.value=eval(display.value);
    }else if(value=="del"){
        let leng= display.value.length;
        display.value=display.value.substring(0,leng-1);
    }else if(value=="CE"){
        display.value="";
    }else if(value=="-/+"){
        display.value=display.value + "-";
    }
    else{
        display.value=display.value + value;
    }

}