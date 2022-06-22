module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
    }
    let arrN = n.toString().split('');
    let newArrN = arrN.reverse();
    let m = newArrN.join('');
    return m;
}


// function reverse (n) {
//     let arrN = n.toString().split('');
//     console.log(arrN);
//     let newArrN = arrN.reverse();
//     console.log(newArrN);
//     let m = newArrN.join('');
//     console.log(m);
//   }

//   reverse(57963);