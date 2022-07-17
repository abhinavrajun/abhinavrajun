function Calculate(){
    let np= document.getElementById("number").value;
    let bill= document.getElementById("bill").value;
    let tipper= document.getElementById("tip%").value;

    let tippercent= bill * tipper / 100;
    let final_tip = tippercent/np;
    let total_bill = bill + (bill * tipper /100);

    //document.getElementById("tip").style.display = "block";
     
    // newdiv.setAttribute('id', 'output');
    //document.getElementById("tip").style.display = "none";
     const maindiv= document.getElementById('tip');
     const newdiv = document.createElement('div');
     
     newdiv.setAttribute('id', 'output');
     newdiv.innerHTML = "<p>Total Bill Each<p> ";
     
     maindiv.append(newdiv);
     const span = document.createElement('span');
     newdiv.append(span);
     span.setAttribute('id','totalbill');
     document.getElementById('totalbill').innerText = total_bill/2;
    document.getElementById("total").innerHTML = final_tip.toFixed(2);
}



document.getElementById("button").onclick = function (){
    //document.getElementById("total").innerHTML = "hello";
    Calculate();
};