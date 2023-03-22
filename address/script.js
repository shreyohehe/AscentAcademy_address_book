window.onload = function () {
    var press = document.getElementById("addaddress");
    var pressadd = document.getElementById("adding");
    var presscancel = document.getElementById("cancel");
    var addform = document.querySelector('.form');

    var fname = document.getElementById("fullname");
    var phn = document.getElementById("phone");
    var addrss = document.getElementById("add");
    var cite = document.getElementById("city");
    var book = document.querySelector(".book");
    var addressb = [];

    press.addEventListener("click", function () {
        addform.style.display = "block";


    })
    presscancel.addEventListener("click", function () {
        addform.style.display = "none";

    })

    function jsonfile(fullname, address, phnno, city) {
        this.fullname = fullname;
        this.address = address;
        this.phnno = phnno;
        this.city = city;

    }
    function addbook() {
        var isnull = fname.value != '' && phn.value != '' && addrss.value != '' && cite.value != '';
        if (isnull) {
            var obj = new jsonfile(fname.value, addrss.value, phn.value, cite.value);
            addressb.push(obj);
            localStorage['addressbook'] = JSON.stringify(addressb);
            addform.style.display = "none";
            clear();
            showbook();



        }


    }
    pressadd.addEventListener("click", addbook);
    function clear() {
        var fields = document.querySelectorAll('.fields');
        for (var i in fields) {
            fields[i].value = '';
        }

    }
    function showbook() {
        if (localStorage['addressbook'] == undefined) {
            localStorage['addressbook'] = '';
        }
        else {
            addressb = JSON.parse(localStorage['addressbook']);
            book.innerHTML = '';
            for (var j in addressb) {
                var s = '<div class="entry">'
                s += '<div class="name"><p>' + addressb[j].fullname + '</p></div>';
                s += '<div class="addressppl"><p>' + addressb[j].address + '</p></div>';
                s += '<div class="cit"><p>' + addressb[j].city + '</p></div>';
                s += '<div class="phone"><p>' + addressb[j].phnno + '</p></div>';
                s += '<div class="delete"><a class="delbut" href="#" data-id="' + j + '">Delete</a></div>';
                s += '</div>';
                book.innerHTML += s;

            }


        }

    }

    function remove(e) {
        if (e.target.classList.contains("delbut")) {
            var id = e.target.getAttribute('data-id');
            addressb.splice(id, 1);
            localStorage['addressbook'] = JSON.stringify(addressb);
            showbook();



        }


    }
    book.addEventListener("click", remove);
    showbook();



}