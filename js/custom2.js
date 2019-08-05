function tekEdedler() {
    for (let a = 100; a <= 999; a++) {
        for (let b = 2; b <= 10; b++) {
            if (a % b != 0 && b != 10) {
                continue;
            }
            else {
                if (b == 10) {
                    document.write(+a + '<br/>');
                }
                else {
                    break;
                }
            }
        }
    }
}

// function doqquzaBolunen() {
//     let n = 99, a = 0;

//     for (let i = 10; i <= n; i++) {
//         if (i % 3 == 0 && i % 6 == 0 && i % 9 == 0) {
//             a += 1
//             document.write('Netice: ' + a + '');
//         }
//     }
// }