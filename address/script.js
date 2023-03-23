window.onload = function () {
    var press = document.getElementById("addaddress");
    var pressadd = document.getElementById("adding");
    var presscancel = document.getElementById("cancel");
    var addform = document.querySelector('.form');

    var fullname = document.getElementById("fullname");
    var phnno = document.getElementById("phone");
    var address = document.getElementById("add");
    var city = document.getElementById("city");
    var book = document.querySelector(".book");
   

    press.addEventListener("click", function () {
        addform.style.display = "block";


    })
    presscancel.addEventListener("click", function () {
        addform.style.display = "none";

    })
    pressadd.addEventListener("click", addbook);
    book.addEventListener("click", remove);
    var addressb = [];

    function jsonfile(fullname, address, phnno, city) {
        this.fullname = fullname;
        this.address = address;
        this.phnno = phnno;
        this.city = city;

    }
    function addbook() {
        var isnull = fullname.value != '' && phnno != '' && address.value != '' && city.value != '';
        if (isnull) {
            var obj = new jsonfile(fullname.value, address.value, phnno.value, city.value);
            addressb.push(obj);
            localStorage['addressbook'] = JSON.stringify(addressb);
            addform.style.display = "none";
            clear();
            showbook();



        }


    }
    function remove(e) {
        if (e.target.classList.contains("delbut")) {
            var aid = e.target.getAttribute('data-id');
            addressb.splice(aid, 1);
            localStorage['addressbook'] = JSON.stringify(addressb);
            showbook();



        }


    }
   
    function clear() {
        var fields = document.querySelectorAll('.fields');
        for (var i in fields) {
            fields[i].value = '';
        }

    }
    function showbook() {
        if ( localStorage['addressbook'] == undefined) {
            localStorage['addressbook'] = '';
        }
        else {
            addressb = JSON.parse( localStorage['addressbook']);
            book.innerHTML = '';
            for (var j in  addressb ) {
                var s = '<div class="entry">'
                s += '<div class="name"><p>' + addressb[j].fullname + '</p></div>';
                s += '<div class="address"><p>' + addressb[j].address + '</p></div>';
                s += '<div class="city"><p>' + addressb[j].city + '</p></div>';
                s += '<div class="phone"><p>' + addressb[j].phnno + '</p></div>';
                s += '<div class="del"><a class="delbut" href="#" data-id="' + j + '">Delete</a></div>';
                s += '</div>';
                book.innerHTML += s;

            }


        }

    }

    
   
    showbook();



}