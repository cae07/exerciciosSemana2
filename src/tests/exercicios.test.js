const {
  validateIsNumber,
  calculateTriangleArea,
  concatString,
  teamPoints,
  highestNumber,
  fizzBuzz,
  encoder,
  decoder,
  welcome,
  phoneNumber,
  calculatePaint,
} = require('../exercicios');

const {
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
  arrayNumbers11,
  arrayNumbers12,
  arrayNumbers13,
  arrayNumbers14,
  expectArray1,
  expectArray2,
  expectArray3,
  expectedPaintResponse1,
  expectedPaintResponse2,
  expectedPaintResponse3,
  invalidArrayErrorMock1,
  invalidArrayErrorMock2,
  invalidArrayErrorMock3,
  expectedErrorInvalidArrayResponse,
  expectWelcomeResponse1,
  expectWelcomeResponse2,
  expectWelcomeResponse3,
  expectWelcomeErrorResponse1,
  expectWelcomeErrorResponse2,
  expectWelcomeErrorResponse3,
  expectWelcomeErrorResponse4,
  expectWelcomeErrorResponse5,
  expectWelcomeErrorResponse6,
  invalidPhoneNumberError
} = require('./mocks');

describe('Start tests', () => {
  describe('01) function validateIsNumber', () => {
    it('Verify return true with a valid number', () => {
      expect(validateIsNumber(15)).toBeTruthy();
      expect(validateIsNumber(5)).toBeTruthy();
      expect(validateIsNumber(95)).toBeTruthy();
    });

    it('Verify return false with an invalid number', () => {
      expect(validateIsNumber('15')).toBeFalsy();
      expect(validateIsNumber('B5')).toBeFalsy();
      expect(validateIsNumber('17')).toBeFalsy();
    });
  });

  describe('02) function calculateTriangleArea', () => {
    it('Verify method is working correctly', () => {
      expect(calculateTriangleArea(15, 10)).toBe(75);
      expect(calculateTriangleArea(5, 7)).toBe(17.5);
      expect(calculateTriangleArea(3, 17)).toBe(25.5);
    });
  });

  describe('03) function concatString', () => {
    it('Verify method is returning the correcly string', () => {
      expect(concatString(arrayStrings1)).toBe('batata, rúcula');
      expect(concatString(arrayStrings2)).toBe('Joana, Letícia');
      expect(concatString(arrayStrings3)).toBe('honda, dafra');
    });
  });

  describe('04) function teamPoints', () => {
    it('Verify method is returning the correcly string', () => {
      expect(teamPoints(4, 3)).toBe(15);
      expect(teamPoints(5, 1)).toBe(16);
      expect(teamPoints(2, 6)).toBe(12);
      expect(teamPoints(0, 4)).toBe(4);
      expect(teamPoints(2, 0)).toBe(6);
    });
  });

  describe('05) function highestNumber', () => {
    it('Verify method is returning the correcly string', () => {
      expect(highestNumber(arrayNumbers1)).toBe('O número 8 se repete 3 vezes nesse array.');
      expect(highestNumber(arrayNumbers2)).toBe('O número 19 se repete 2 vezes nesse array.');
      expect(highestNumber(arrayNumbers3)).toBe('O número 71 se repete 1 vez nesse array.');
    });

    it('Verify method throws error with invalid expect type', () => {
      expect(() => { highestNumber(invalidArrayErrorMock1) }).toThrow(expectedErrorInvalidArrayResponse);
      expect(() => { highestNumber(invalidArrayErrorMock2) }).toThrow(expectedErrorInvalidArrayResponse);
      expect(() => { highestNumber(invalidArrayErrorMock3) }).toThrow(expectedErrorInvalidArrayResponse);
    })
  });

  describe('06) function fizzBuzz', () => {
    it('Verify method is returning the expected array of strings', () => {
      expect(fizzBuzz(arrayNumbers4)).toBe(expectArray1);
      expect(fizzBuzz(arrayNumbers5)).toBe(expectArray2);
      expect(fizzBuzz(arrayNumbers6)).toBe(expectArray3);
    });
  });

  describe('07) function encoder / decoder', () => {
    it('Verify method encoder is returning the encrypted string', () => {
      expect(encoder('Ola mundo!')).toBe('Ol1 m5nd4!');
      expect(encoder('Meu nome se escreve Felipe.')).toBe('M25 n4m2 s2 2scr2v2 F2l3p2.');
      expect(encoder('A menina dos olhos.')).toBe('A m2n3n1 d4s 4lh4s.');
    });

    it('Verify method decoder is returning the decrypted string', () => {
      expect(decoder('Ol1 m5nd4!')).toBe('Ola mundo!');
      expect(decoder('M25 n4m2 s2 2scr2v2 F2l3p2.')).toBe('Meu nome se escreve Felipe.');
      expect(decoder('A m2n3n1 d4s 4lh4s.')).toBe('A menina dos olhos.');
    });
  });

  describe('08) function welcome', () => {
    it('Verify method is returning the correctly answer', () => {
      expect(welcome('english', 'Rachel')).toBe(expectWelcomeResponse1);
      expect(welcome('English', 'Rachel')).toBe(expectWelcomeResponse1);
      expect(welcome('dutch', 'José')).toBe(expectWelcomeResponse2);
      expect(welcome('dUtcH', 'José')).toBe(expectWelcomeResponse2);
      expect(welcome('italian', 'Adriana')).toBe(expectWelcomeResponse3);
      expect(welcome('ITALIan', 'Adriana')).toBe(expectWelcomeResponse3);
    });

    it('Verify method throws error with unknow language', () => {
      expect(() => { welcome('batata', 'Rachel') }).toThrow(expectWelcomeErrorResponse1);
      expect(() => { welcome('123456', 'Rachel') }).toThrow(expectWelcomeErrorResponse2);
      expect(() => { welcome('fff', 'José') }).toThrow(expectWelcomeErrorResponse3);
    });

    it('Verify method throws error with invalid name', () => {
      expect(() => { welcome('flemish', 'R5chel') }).toThrow(expectWelcomeErrorResponse4);
      expect(() => { welcome('lithuanian', 'Rach3l') }).toThrow(expectWelcomeErrorResponse5);
      expect(() => { welcome('swedish', 'J0sé') }).toThrow(expectWelcomeErrorResponse6);
    });
  })

  describe('09) function phoneNumber', () => {
    it('Verify method is returning the phone number in the correctly format', () => {
      expect(phoneNumber(arrayNumbers7)).toBe('(11)98873-5526');
      expect(phoneNumber(arrayNumbers8)).toBe('(41)97873-5534');
      expect(phoneNumber(arrayNumbers9)).toBe('(47)99873-3511');
    });

    it('Verify method is returning the correctly error string with invalid array length.', () => {
      expect(() => { phoneNumber(arrayNumbers2) }).toThrow(invalidPhoneNumberError);
      expect(() => { phoneNumber(arrayNumbers4 )}).toThrow(invalidPhoneNumberError);
    });

    it('Verify method is returning the correctly error string with numbers repeating > 3x.', () => {
      expect(() => { phoneNumber(arrayNumbers1) }).toThrow(invalidPhoneNumberError); // repete 3x numero
      expect(() => { phoneNumber(arrayNumbers10) }).toThrow(invalidPhoneNumberError); // repete 3x numero
    });

    it('Verify method is returning the correctly error string with number < 0 || number > 9.', () => {
      expect(() => { phoneNumber(arrayNumbers11) }).toThrow(invalidPhoneNumberError);
      expect(() => { phoneNumber(arrayNumbers12) }).toThrow(invalidPhoneNumberError);
    });

    it('Verify method is returning the correctly error string with invalid number type', () => {
      expect(() => { phoneNumber(arrayNumbers13) }).toThrow(invalidPhoneNumberError);
      expect(() => { phoneNumber(arrayNumbers14) }).toThrow(invalidPhoneNumberError);
    });
  });

  describe('10) function calculatePaint', () => {
    it('Verify method is returning the expected array of strings', () => {
      expect(calculatePaint(450, 310)).toBe(expectedPaintResponse1);
      expect(calculatePaint(400, 200)).toBe(expectedPaintResponse2);
      expect(calculatePaint(250, 250)).toBe(expectedPaintResponse3);
    });
  });
});
