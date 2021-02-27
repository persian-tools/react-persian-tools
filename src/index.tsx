import NumberToWords from './modules/NumberToWords';
import WordsToNumber from './modules/WordsToNumber';
import { AddCommas, RemoveCommas } from './modules/Commas';
import { NationalId } from './modules/NationalId';
import {
  DigitsArToEn,
  DigitsArToFa,
  DigitsEnToFa,
  DigitsFaToEn
} from './modules/Digits';

interface PersianToolsComponent {
  WordsToNumber: typeof WordsToNumber;
  NumberToWords: typeof NumberToWords;
  AddCommas: typeof AddCommas;
  RemoveCommas: typeof RemoveCommas;
  DigitsArToEn: typeof DigitsArToEn;
  DigitsArToFa: typeof DigitsArToFa;
  DigitsEnToFa: typeof DigitsEnToFa;
  DigitsFaToEn: typeof DigitsFaToEn;
  NationalId: typeof NationalId;
}

const PersianTools: PersianToolsComponent = {
  WordsToNumber,
  NumberToWords,
  AddCommas,
  RemoveCommas,
  DigitsArToEn,
  DigitsArToFa,
  DigitsEnToFa,
  DigitsFaToEn,
  NationalId
};

export default PersianTools;
