window.onload=function() {
    var press= document.getElementById("addaddress");
    var pressadd=document.getElementById("adding");
    var presscancel= document.getElementById("cancel");
    var addform=document.querySelector('.form');

    var fname= document.getElementById("fullname");
    var phn= document.getElementById("phone");
    var address= document.getElementById("add");
    var book= document.querySelector(".book");
    var address=[];
    
    press.addEventListener("click",function() {
        addform.style.display= "block";

        
    })
    pressadd.addEventListener("click",addbook);
    book.addEventListener("click",remove);
    function jsonfile(fullname,address,phnno){
        this.fullname=fullname;
        this.address=address;
        this.phnno=phnno;

    }
    function addbook() {
        var isnull=fullname.value!='' && phone.value!='' && address.value!='' && city.value!='' && email.value!='';
        if(isnull){
            
        }

        
    }

}