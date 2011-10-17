var fizzBuzz = (function(){
    var calcular = function(valor) {
        var esMultiploDe3 = valor % 3 === 0,
            esMultiploDe5 = valor % 5 === 0;

        if(esMultiploDe3 && esMultiploDe5) return "fizzbuzz";
        
        if(esMultiploDe3) return "fizz";
        
        if(esMultiploDe5) return "buzz";
        return valor;
    };
    
    return { calcular: calcular };
})();