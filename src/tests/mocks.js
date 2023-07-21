const arrayStrings1 = ['batata', 'cenoura', 'abacate', 'cebola', 'rúcula'];
const arrayStrings2 = ['Joana', 'Amanda', 'Rebeca', 'Juliana', 'Letícia'];
const arrayStrings3 = ['honda', 'bmw', 'kawasaki', 'apprillia', 'dafra'];

const arrayNumbers1 = [1, 8, 3, 8, 4, 5, 7, 8, 1, 2, 2];
const arrayNumbers2 = [3, 19, 13, 8, 4, 5, 17, 19];
const arrayNumbers3 = [3, 71, 3, 18, 41, 5, 17, 8];
const arrayNumbers4 = [3, 5, 15, 30, 9, 81];
const arrayNumbers5 = [3, 15, 25, 24, 17, 9, 80];
const arrayNumbers6 = [2, 5, 15, 31, 9, 50];
const arrayNumbers7 = [1, 1, 9, 8, 8, 7, 3, 5, 5, 2, 6];
const arrayNumbers8 = [4, 1, 9, 7, 8, 7, 3, 5, 5, 3, 4];
const arrayNumbers9 = [4, 7, 9, 9, 8, 7, 3, 3, 5, 1, 1];
const arrayNumbers10 = [4, 7, 1, 9, 8, 7, 3, 3, 5, 1, 1];

const expectArray1 = ['fizz', 'buzz', 'fizzbuzz', 'fizzbuzz', 'fizz', 'fizz'];
const expectArray2 = ['fizz', 'fizzbuzz', 'buzz', 'fizz', 'bug', 'fizz', 'buzz'];
const expectArray3 = ['bug', 'buzz', 'fizzbuzz', 'bug', 'fizz', 'buzz'];

const expectedPaintResponse1 = 'Você precisa de 1 lata de 5 litros, 4 latas de 1 litro e 1 lata de 0,5 litros para realizar esse trabalho.';
const expectedPaintResponse2 = 'Você precisa de 1 lata de 5 litros e 1 lata de 0,5 litros para realizar esse trabalho.';
const expectedPaintResponse3 = 'Você precisa de 4 latas de 1 litro e 1 lata de 0,5 litros para realizar esse trabalho.';

const expectWelcomeResponse1 = 'Welcome Rachel.'
const expectWelcomeResponse2 = 'Welkom José.'
const expectWelcomeResponse3 = 'Benvenuto Adriana.'

const expectWelcomeErrorResponse1 = 'O idioma batata não foi encontrado. Por favor tente novamente mais tarde.'
const expectWelcomeErrorResponse2 = 'O idioma 123456 não foi encontrado. Por favor tente novamente mais tarde.'
const expectWelcomeErrorResponse3 = 'O idioma fff não foi encontrado. Por favor tente novamente mais tarde.'

const translator = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}

module.exports = {
  arrayStrings1,
  arrayStrings2,
  arrayStrings3,
  arrayNumbers1,
  arrayNumbers2,
  arrayNumbers3,
  arrayNumbers4,
  arrayNumbers5,
  arrayNumbers6,
  arrayNumbers7,
  arrayNumbers8,
  arrayNumbers9,
  arrayNumbers10,
  expectArray1,
  expectArray2,
  expectArray3,
  expectedPaintResponse1,
  expectedPaintResponse2,
  expectedPaintResponse3,
  translator,
  expectWelcomeResponse1,
  expectWelcomeResponse2,
  expectWelcomeResponse3,
  expectWelcomeErrorResponse1,
  expectWelcomeErrorResponse2,
  expectWelcomeErrorResponse3
}
