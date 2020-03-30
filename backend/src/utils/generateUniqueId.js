const crypto = require('crypto');

//exemplo de teste unitário ou seja, um exemplo de algo especifico/isolado da aplicação 
// ou seja, não tera efeito colateral na aplicação, pois não tem conecção com banco, outras apis
module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX'); // para criar um valor alerorio para id 
                                                    //retorna um valor com 4 bytes e converte para exadecimal
}