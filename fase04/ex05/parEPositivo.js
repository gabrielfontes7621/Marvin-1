function parEPositivo(num){
    var resp = "N�o";
    
    if(num%2===0 && num>=0){
        resp = "Sim"
    }
    
    return resp;
}