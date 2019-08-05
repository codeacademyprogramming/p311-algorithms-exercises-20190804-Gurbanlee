function ucheVeBesheBolunmeEmeliyyati() {

    'use strict';

    let a, b, c;
    a = prompt('5-e ve 3-e bolunen birinci ededi daxil edin');
    b = prompt('5-e ve 3-e bolunen ikinci ededi daxil edin');
    c = prompt('5-e ve 3-e bolunen uchuncu ededi daxil edin');

    if (a % 5 == 0 && a % 3 == 0) {
        alert(`${a} reqemi dogrudur.`);
    }
    else {
        alert(`Daxil etdiyiniz ${a} reqemi yanlishdir.`);
    }

    if (b % 5 == 0 && b % 3 == 0) {
        alert(`${b} reqemi dogrudur.`);
    }
    else {
        alert(`Daxil etdiyiniz ${b} reqemi yanlishdir.`);
    }

    if (c % 5 == 0 && c % 3 == 0) {
        alert(`${c} reqemi dogrudur.`);
    }
    else {
        alert(`Daxil etdiyiniz ${c} reqemi yanlishdir.`);
    }
}

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

function uchbucag() {

    'use strict';

    let a, b, c;
    a = prompt('Uchbucagin a terefini daxil edin');
    b = prompt('Uchbucagin b terefini daxil edin');
    c = prompt('Uchbucagin c terefini daxil edin');
    if (a < b + c && b < c + a && c < b + a && a != b && b != c && a != c) {
        alert('Bu uchbucag muxtelif terefli uchbucagdir');
    }
    else if (a == b && b == c && a == c) {
        alert('Bu uchbucag beraber terefli uchbucagdir.');
    }
    else {
        alert('Bele bir uchbucag qurmaq mumkun deyil.');
    }
}