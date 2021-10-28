btn1 = document.getElementById("btn1-ele");

arr = []

function add(){
    arr.push(btn1.textContent);
    console.log(arr);  
}

function confirm(){
    sh = document.createElement("a");
    sh.textContent="Share";
    sh.href="whatsapp://send?text=This is WhatsApp sharing example using link";
    // sh.data-action="share/whatsapp/share";
    document.body.appendChild(sh);
}