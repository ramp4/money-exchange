// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let inputError = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0) 
        return {}; 
    if (currency > 10000) 
        return inputError;
    let money = currency;
    console.log(money);    
    const coinsCost = [50,25,10,5,1];
    let coinsName = ["H","Q","D","N","P"];
    let coinsCounter = [0,0,0,0,0];
    let stopIndex = 0 ;
    let startIndex = 0;
    while ( money > 0) {
        
        for (i = 0; i <= 4; i++) {
            while (coinsCost[i] <= money) {
            money -= coinsCost[i];
            coinsCounter[i]++;
            }
            
            if ( money == 0) break; 
        }  
    }
       
    result = {};
    for ( i = 0; i <= 4; i++) {
        if ( coinsCounter[i] > 0 ) 
        result[coinsName[i]] = coinsCounter[i];
    }
    
    return result;
    
    
    
}
