function ValidateName(name) {
    var regex = /[^A-Za-zÀ-ú ]/gi;

    if(regex.test(name))
        return false      
    else
        return true
}

function ValidateCpf(cpf){
    console.log(cpf)
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	let add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

function ValidateDate(dateString){
    let pattern = /^\d{4}-\d{2}-\d{2}$/;
    return pattern.test(dateString);

    //console.log(isValidDate("2020-01-01"));  // true
   // console.log(isValidDate("01-01-2020"));  // false
}

function ValidatePhone(phone){
    var regex = /[^0-9]/g;

    if(regex.test(phone) || phone.length >= 13)
        return false      
    else
        return true
}

function ValidateCep(cep){
    cep = cep.replace(/[^0-9]/gi, "");

    if (!cep.length == 8)
        return false
}

function ValidateNumberAddress(numberAddress){
    var regex = /[^0-9]/g;

    if(regex.test(numberAddress))
         return false
    else
        return true
}

export { ValidateName, ValidateCpf, ValidateDate, ValidatePhone, ValidateCep, ValidateNumberAddress};