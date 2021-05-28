function factorial(n) {

  let result = 1;
  if (n == 1 || n  == 0 ) {
    return 1;
  };

  for (let i = 1; i < n; n--) {
    result = result * n;
  }
    return result;
}

