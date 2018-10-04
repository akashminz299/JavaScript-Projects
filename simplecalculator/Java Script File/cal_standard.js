var temp;
var savedNum=0;
var count=0;
var btn_dot_count=0;

/*functions for all buttons*/

function btn_9() {
    temp=document.querySelector('#btn_9').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_8() {
    temp=document.querySelector('#btn_8').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_7() {
    temp=document.querySelector('#btn_7').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_6() {
    temp=document.querySelector('#btn_6').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_5() {
    temp=document.querySelector('#btn_5').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_4() {
    temp=document.querySelector('#btn_4').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_3() {
    temp=document.querySelector('#btn_3').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_2() {
    temp=document.querySelector('#btn_2').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_1() {
    temp=document.querySelector('#btn_1').value;
    if(document.querySelector('#display_area_number').textContent !=''){
        temp=document.querySelector('#display_area_number').textContent + temp;
    }
    document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_0() {
        temp=document.querySelector('#btn_0').value;
        if(document.querySelector('#display_area_number').textContent !=''){
            temp=document.querySelector('#display_area_number').textContent + temp;
        }
        document.querySelector('#display_area_number').textContent=temp;
    /*-----------------------------------------------------------------------*/
}
function btn_dot(){
    temp=document.querySelector('#btn_dot').value;
    if(btn_dot_count===0){
        if(document.querySelector('#display_area_number').textContent !=''){
            temp=document.querySelector('#display_area_number').textContent + temp;
        }
        document.querySelector('#display_area_number').textContent=temp;
    }
    btn_dot_count++;
}
function btn_add(){
    operation();
    document.querySelector('#display_area_number').textContent='';
    count=1;
    console.log("Value of count "+count);
}
function btn_subtract(){
    operation();
    document.querySelector('#display_area_number').textContent='';
    count=2;
    console.log("Value of count "+count);
}
function btn_multiply(){
    operation();
    document.querySelector('#display_area_number').textContent='';
    count=3;
    console.log("Value of count "+count);
}
function btn_divide(){
    operation();
    document.querySelector('#display_area_number').textContent='';
    count=4;
    console.log("Value of count "+count);
}

function operation(){
    if(count===0){
         savedNum=Number(temp);
         console.log("first Saved Number"+savedNum);
         console.log("Type of Saved Number"+typeof savedNum);
    }
    else if(count===1){
       savedNum=savedNum+Number(temp);
        console.log("first Saved Number"+savedNum);
        console.log("Type of Saved Number"+typeof savedNum);
    }
    else if(count===2){
        savedNum=savedNum-Number(temp);
        console.log("first Saved Number"+savedNum);
        console.log("Type of Saved Number"+typeof savedNum);
    }
    else if(count===3){
        savedNum=savedNum*Number(temp);
        console.log("first Saved Number"+savedNum);
        console.log("Type of Saved Number"+typeof savedNum);
    }
    else if(count===4){
        savedNum=savedNum/Number(temp);
        console.log("first Saved Number"+savedNum);
        console.log("Type of Saved Number"+typeof savedNum);
    }
}

function btn_equalTo() {
    if(count===0){
        document.querySelector('#display_area_number').textContent=temp;
        console.log(temp);
    }
    else if(count===1){
        savedNum=savedNum+Number(temp);
        temp=savedNum;
        document.querySelector('#display_area_number').textContent=temp;
        console.log(savedNum);
        console.log(temp);
    }
    else if(count===2){
        savedNum=savedNum-Number(temp);
        temp=savedNum;
        document.querySelector('#display_area_number').textContent=temp;
        console.log(savedNum);
        console.log(temp);
    }
    else if(count===3){
        savedNum=savedNum*Number(temp);
        temp=savedNum;
        document.querySelector('#display_area_number').textContent=temp;
        console.log(savedNum);
        console.log(temp);
    }
    else if(count===4){
        savedNum=savedNum/Number(temp);
        temp=savedNum;
        document.querySelector('#display_area_number').textContent=temp;
        console.log(savedNum);
        console.log(temp);
    }
    count=0;
}
function btn_clear(){
    document.querySelector('#display_area_number').textContent='';
    savedNum=0;
    temp='';
    btn_dot_count=0;
}