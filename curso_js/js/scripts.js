// Aula 3 - Variáveis
// var latitude = 40.4167754;
// var longitude = -3.7037902;

// console.log(latitude);
// console.log(longitude);

// Aula 4 - Tipos de dados

// var nome = "João";  // podem ser usadas aspas duplas
// var sobrenome = 'Gomes';  // ou aspas simples
// var cpf = '111.111.111-11';  
// var telefone = "998887655";
// var ddd = '21';
// var email = 'joao@gmail.com';
// var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

// console.log('Nome completo: ' + nome + ' ' + sobrenome);
// console.log('(' + ddd + ')' +telefone);
// console.log('Primeira letra do nome: ' + nome[0]);
// console.log('numero de caracteres telefone: ' + telefone.length);

// Aula 5 - Números

// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;

// console.log('A media é: ' + media);

// /* Parênteses podem ser usados para montar expressões. Neste caso eles são necessários para calcular a média de dois números, 
// caso contrário a divisão num2 / 2 seria realizada antes da soma, devido à ordem das operações matemáticas. */

// console.log(Math.pow(2, 4)); // 2 elevado a 4

// var increment = 20;
// increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
// console.log(increment); // O console mostrará 25

// // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

// increment = 1;
// increment += 5;
// console.log(increment); // O console mostrará 6

// increment = 10;
// increment++;

// console.log(increment);
// // podemos também usar *=, /= e -= para multiplicação, divisão e subtração

// var ddd = 21;
// var telefone = 998887655;

// /* Se quisermos montar o telefone completo usando concatenação, podemos ter problemas já que as variáveis são do tipo número. 
// Neste caso devemos convertê-las antes de montar o telefone. 
// Para isso, usamos o método toString, que recebe entre parênteses a valor ou variável que queremos converter.*/

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();

// var telefone_completo = ddd_string + tel_string;

// console.log(telefone_completo); // retorna '21998887655'

// var idade = '17';

// idade = parseInt(idade); // converte para número inteiro
// idade++;
// console.log(idade); // retorna 18

