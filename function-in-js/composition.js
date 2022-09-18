function composition(inp) {
    console.log(inp + 25)
}

function multiply(n) {
    return n * 5
}

function add(a, b) {
    return a + b;
}

composition(multiply(add(2, 3)))