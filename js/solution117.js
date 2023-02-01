
//Optimized Recursive Solution
// We can use the Memoization technique to store the results of the fibonacci function executions in the variable to ensure that the function is called only once per number, then the value is read from the cache:

let cache = {}

const fibonacci = n => {
    if (n<= 1){
        return n
    }

    if(cache[n]){
        return cache[n]
    }

    const result = fibonacci(n - 1) + fibonacci(n - 2)

    cache[n] = result

    return result
}