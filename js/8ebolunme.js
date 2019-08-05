
function sekkizeBolmeEmeliyyati() {

    'use strict';

    let a, b, iki, dord, sekkiz;
    a = prompt('2-e ve 4-e, hemchinin 8-e birinci ededi daxil edin');
    b = prompt('2-e ve 4-e, hemchinin 8-e ikinci ededi daxil edin');
    iki = 2;
    dord = 4;
    sekkiz = 8;

    if (a % iki == 0 && a % dord == 0 && a % sekkiz == 0) {
        alert(`${a} reqemi dogrudur.`);
    }
    else {
        alert(`Daxil etdiyiniz ${a} reqemi ${iki && dord && sekkiz} reqemine bolunmur.`);
    }

    if (b % iki == 0 && b % dord == 0 && b % sekkiz == 0) {
        alert(`${b} reqemi dogrudur.`);
    }
    else {
        alert(`Daxil etdiyiniz ${b} reqemi ${iki && dord && sekkiz} reqemine bolunmur.`);
    }

}