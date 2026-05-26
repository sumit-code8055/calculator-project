function data(num){
    document.getElementById("result").value += num;

}
function answer(){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value = y;

}
function dataclear(){
    document.getElementById("result").value="";
}