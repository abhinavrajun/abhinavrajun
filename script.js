function Calculate(){
    let np= document.getElementById("number").value;
    let bill= document.getElementById("bill").value;
    let tippercent= document.getElementById("tip%").value;

    let tip= bill * tippercent / 100;
    let final_tip = tip/np;
    let total_bill = (bill/np) + final_tip;

    //document.getElementById("tip").style.display = "block";
     
    // newdiv.setAttribute('id', 'output');
    //document.getElementById("tip").style.display = "none";

     document.getElementById("tip").style.display = "flex";
     document.getElementById('total_bill').innerText = total_bill.toFixed(2);
    document.getElementById("total").innerHTML = final_tip.toFixed(2);
}

document.getElementById('tip').style.display = 'none'

document.getElementById("button").onclick = function (){
    //document.getElementById("total").innerHTML = "hello";
    Calculate();
};