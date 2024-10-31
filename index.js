exports.factorial = function(n) {
    if(n==0 || n==1)
        return n;
    return this.factorial(n-1) * this.factorial(n-2);
}