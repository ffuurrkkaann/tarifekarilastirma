var gsmOps = [
    {
        id: 1,
        adi: 'Vodafone',
        logo: 'https://upload.wikimedia.org/wikipedia/sco/d/d5/Vodafone_logo.png',
        tarifeler: [
            {
                gb: 20,
                dk: 100,
                sms: 5000,
                taahhut: '12 ay',
                fiyat: 55
            },
            {
                gb: 20,
                dk: 1000,
                sms: 5000,
                taahhut: '36 ay',
                fiyat: 40
            },
            {
                gb: 10,
                dk: 100,
                sms: 5000,
                taahhut: '24 ay',
                fiyat: 30
            }
        ]
    },
    {
        id: 2,
        adi: 'Türkcell',
        logo: 'https://s3.turkcell.com.tr/SiteAssets/Bireysel/Servis/render/gorseller/hesabim_4/hesabim_4_480x360.png'
    },
    {
        id: 3,
        adi: 'Türk Telekom',
        logo: 'http://www.yasadikca.com/Client/Image/Upload/Article/turk-telekom-engelli(2).gif'
    }
];
function opertorleriGoster() {
    var myElem = document.getElementById("tblTarifeler");
    var myInner = '';
    for (let index = 0; index < gsmOps.length; index++) {
        myInner = myInner + '<a onclick="gsmSec(this,' + gsmOps[index].id + ')" class="nav-item nav-link">';
        myInner = myInner + '<img  src="' + gsmOps[index].logo + '"/>';
        myInner = myInner + gsmOps[index].adi;
        myInner = myInner + '</a>';
    }

    myElem.innerHTML = myInner;
}

function gsmSec(element, id) {
    var activeOlanlar = document.getElementsByClassName('active');

    for (let index = 0; index < activeOlanlar.length; index++) {
        activeOlanlar[index].className = activeOlanlar[index].className.replace('active', '')

    }
    element.className = element.className + ' active';


    var tarifeListeUl = document.getElementById("tarifeListe");
    tarifeListeUl.innerHTML = '';
    gsmOps.forEach(element => {
        if (element.id == id) {
            for (let index = 0; index < element.tarifeler.length; index++) {
                tarifeListeUl.innerHTML = tarifeListeUl.innerHTML + '<li class="list-group-item">' + element.tarifeler[index].taahhut + '</li>'

            }
        }
    });


    /*
    Object.keys(activeOlanlar).forEach(element => {
        element.className = element.className.replace('active','')
    });
    */
}
