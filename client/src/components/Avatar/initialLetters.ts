export const INITIAL_LETTERS = [
  'A',
  'Á',
  'À',
  'Â',
  'Ã',
  'B',
  'C',
  'D',
  'E',
  'É',
  'Ê',
  'F',
  'G',
  'H',
  'I',
  'Í',
  'J',
  'K',
  'L',
  'M',
  'N',
  'Ñ',
  'O',
  'Ó',
  'Ô',
  'Õ',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'Ú',
  'V',
  'W',
  'X',
  'Y',
  'Z',
] as const;

export type InitialLetter = typeof INITIAL_LETTERS[number];
