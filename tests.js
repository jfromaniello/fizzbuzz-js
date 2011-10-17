test("devuelve fizz, para multiplo de 3", function() {
    var resultado = fizzBuzz.calcular(3);
    equal(resultado, "fizz");
    equal(fizzBuzz.calcular(9), "fizz");
});

test("devuelve buzz, para multiplo de 5", function() {
    var resultado = fizzBuzz.calcular(5);
    equal(resultado, "buzz");
});

test("devuelve fizzbuzz, para multiplo de 5 y 3", function() {
    var resultado = fizzBuzz.calcular(15);
    equal(resultado, "fizzbuzz");
});

test("devuelve el numero, para no multiplos de 5 y 3", function() {
    var resultado = fizzBuzz.calcular(7);
    equal(resultado, 7);
});