const btn = document.getElementById('btn');
let nfame = document.getElementById('name');
let cnum = document.getElementById('cNum');
let date = document.querySelector('#digs');
let cvv = document.querySelector('#cvv');
let cname = document.querySelector('.name');
let cnnum = document.querySelector('.cNum');
let cdate = document.querySelector('.expiry');
let ccvv = document.querySelector('.backt')

nfame.addEventListener("input", () =>{
    if (nfame.value === ""){
        cname.innerText = "Jane Appleseed"
        console.log("Enter your name")
    }
    else{
       document.querySelector('.name').innerHTML = nfame.value
       console.log(nfame.value)
    }
});

cnum.addEventListener("input", () =>{
    if (cnum.value === ""){
        cnnum.innerText = "0000 0000 0000 0000"
        console.log("Enter your card no")
        cnum.style.border = "solid 2px hsl(279, 6%, 55%)"
    }
    else{
       document.querySelector('.cNum').innerHTML = parseInt(`${cnum.value[0]}${cnum.value[1]}${cnum.value[2]}${cnum.value[3]} ${cnum.value[4]}${cnum.value[5]}${cnum.value[6]}${cnum.value[7]}${cnum.value[8]} ${cnum.value[9]}${cnum.value[10]}${cnum.value[11]}${cnum.value[12]}${cnum.value[13]} ${cnum.value[14]}${cnum.value[15]}${cnum.value[16]}${cnum.value[17]}${cnum.value[18]}`)
     
    }
});
const year = document.getElementById("digq");
date.addEventListener("input", () =>{
if (date.value === "" && year.value === ""){
        cdate.innerText = " 00/00"
        console.log("Enter your name")
    }
    else if(date.value != "" && year.value === "") {
         document.querySelector('.expiry').innerHTML  = parseInt(date.value) + "/00"
    } else if(date.value === "" && year.value != "") {
       document.querySelector('.expiry').innerHTML =  "00/" + parseInt(year.value)
    }
    else{
       document.querySelector('.expiry').innerHTML = parseInt(date.value) + "/" + parseInt(year.value  )    
        console.log(nfame.value)
    }
});
year.addEventListener("input", () =>{
    if (date.value === "" && year.value === ""){
        cdate.innerText = " 00/00"
        console.log("Enter your name")
    }
    else if(date.value != "" && year.value === "") {
document.querySelector('.expiry').innerHTML = ` ${date.value < 10 ? `0${date.value}` : date.value}/00`
    } else if(date.value === "" && year.value != "") {
       document.querySelector('.expiry').innerHTML =  "00/" + parseInt(year.value)
    }
    else{
       document.querySelector('.expiry').innerHTML = ` ${date.value > 10 ? date.value : `0${date.value}`} / ${parseInt(year.value  )}`    
   
     console.log(nfame.value)
    }
});

cvv.addEventListener("input", () =>{
    if (cvv.value === ""){
        ccvv.innerText = " 000 "
        console.log("Enter your name")
    }
     
    else{
        let back = cvv.value;
        if(back.length < 4){
       document.querySelector('.backt').innerHTML = parseInt(cvv.value)
       console.log(nfame.value)
        }
        else{
            document.querySelector('.backt').innerHTML != parseInt(cvv.value)
            alert("cvv is 3 digited");
          let correct =  back.value.length - 2
             cvv.value = correct ;
           
        }
    }
});

btn.addEventListener("click",  (e) =>
{
    e.preventDefault()
    document.querySelector(".complete").style.display = "flex"
    document.querySelector('form').style.display = "none"
})