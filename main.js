var gsmOps = [
    {
        adi: 'Vodafone',
        logo: 'https://upload.wikimedia.org/wikipedia/sco/d/d5/Vodafone_logo.png'
    },
    {
        adi: 'Türkcell',
        logo: 'https://s3.turkcell.com.tr/SiteAssets/Bireysel/Servis/render/gorseller/hesabim_4/hesabim_4_480x360.png'
    },
    {
        adi: 'Türk Telekom',
        logo: 'http://www.yasadikca.com/Client/Image/Upload/Article/turk-telekom-engelli(2).gif'
    }
];
function opertorleriGoster() {
    var myElem = document.getElementById("tblTarifeler");
    var myInner = '';
    myInner = myInner + '<tr>';
    for (let index = 0; index < gsmOps.length; index++) {
        myInner = myInner + '<td>';
        myInner = myInner + '<img  src="'+gsmOps[index].logo +'"/>';
        myInner = myInner + gsmOps[index].adi;
        myInner = myInner + '</td>';
    }
    myInner = myInner + '</tr>';

    myElem.innerHTML = myInner;
}

