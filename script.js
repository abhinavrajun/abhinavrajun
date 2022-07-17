function Calculate(){
    let np= document.getElementById("number").value;
    let bill= document.getElementById("bill").value;
    let tipper= document.getElementById("tip%").value;

    let tippercent= bill * tipper / 100;
    let final_tip = tippercent/np;

    //document.getElementById("tip").style.display = "block";
    document.getElementById("total").innerHTML = final_tip;
}
document.getElementById("tip").style.display = "none";
document.getElementById("button").onclick = function (){
    //document.getElementById("total").innerHTML = "hello";
    Calculate();
};