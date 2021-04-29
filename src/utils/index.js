import moment from 'moment';

export const isProperlyDerived = (char, num) => {
  //////////////LOGIC FOR VALIDATING PIN
  let sumOfDigits = String(num)
    .split('')
    .map((digit, i) => {
      let numDigit = parseInt(digit);
      numDigit *= (i % 2) + 1;
      if (numDigit > 9) {
        numDigit = numDigit
          .toString()
          .split('')
          .map((digit) => parseInt(digit))
          .reduce((acc, curr) => {
            acc += curr;
          }, 0);
      }

      return numDigit;
    })
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0);

  const asciiCode = (sumOfDigits % 26) + 65;
  return char.charCodeAt(0) === asciiCode;
};

export const registerUser = (
  cookies,
  setCookie,
  accessCode,
  returnTime,
  pin
) => {
  setCookie('user', accessCode, {
    expires: new Date(returnTime),
  });
  if (!cookies.pin)
    setCookie('pin', pin, {
      expires: moment().add(5, 'years').toDate(),
    });
};
