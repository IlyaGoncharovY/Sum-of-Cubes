function sumCubes(n) {
    let summ = 0;
    for (var i; i <= n; i++) {
        summ += Math.pow(i, 3);
    }
    return summ;
}

