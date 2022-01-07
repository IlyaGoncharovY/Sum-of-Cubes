# Sum-of-Cubes

    // Write a function that takes a positive integer n, 
    // sums all the cubed values from 1 to n, and returns that sum.
    // Assume that the input n will always be a positive integer.
  
solution:

function sumCubes(n) {
    let summ = 0;
    for (var i; i <= n; i++) {
        summ += Math.pow(i, 3);
    }
    return summ;
}
