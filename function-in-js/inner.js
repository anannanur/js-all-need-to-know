function greetings(greet, name) {
//inner function
    function isOk() {
        var n = name.split(' ')[2]
        console.log(greet + ' ' + n)
    }
    isOk()
}
greetings('Good Morning', 'Humayra Nur Ananna')