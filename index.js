exports.factorial = function(n) {
    if(n < 0)
        return -1;
    else if(n == 0 || n==1)
        return 1;
    else{
        return n * this.factorial(n-1);
    } 
}