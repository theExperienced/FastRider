import moment from 'moment';
import { isProperlyDerived } from '../utils';

export const validateTime = () => {
  const now = moment().hours();
  return now >= 11 && now <= 19;
};

export const validatePIN = (pin) => {
  const pinAsArray = pin.split('-');
  if (
    !(
      pinAsArray[0].length === 2 &&
      pinAsArray[3].length === 2 &&
      pinAsArray[1].length === 4 &&
      pinAsArray[2].length === 4
    )
  )
    return false;
  // if (Number.isNaN(Number(pinAsArray[1].concat(pinAsArray[2])))) return false;
  if (!pinAsArray[1].concat(pinAsArray[2]).match(/^\d+$/)) return false;
  if (
    // pinAsArray[0] !== pinAsArray[0].toUpperCase() ||
    // pinAsArray[3] !== pinAsArray[3].toUpperCase()
    !pinAsArray[0].concat(pinAsArray[3]).match(/^[A-Z]*$/)
  )
    return false;
  const [secondLastChar, lastChar] = pinAsArray[3].split('');
  return (
    isProperlyDerived(secondLastChar, pinAsArray[1]) &&
    isProperlyDerived(lastChar, pinAsArray[2])
  );
};
