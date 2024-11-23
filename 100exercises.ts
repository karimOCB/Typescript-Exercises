// 1
export const COLORS = [
  "black", "brown",  "red", "orange",
  "yellow", "green", "blue",
  "violet", "grey", "white",
] as const;

type Color = (typeof COLORS)[number];

export const colorCode = (color: Color) => {
  return COLORS.indexOf(color);
};


// 2 
export const COLORS = [
  "black", "brown",  "red", "orange",
  "yellow", "green", "blue",
  "violet", "grey", "white",
] as const;

type ColorsArr = typeof COLORS[number][];

export function decodedValue(colorsArr: ColorsArr) {
  let value: string | number = "";
  value += COLORS.indexOf(colorsArr[0]);
  value += COLORS.indexOf(colorsArr[1]);
  return Number(value);
}

// 3
export const COLORS = [
  "black", "brown",  "red", "orange",
  "yellow", "green", "blue",
  "violet", "grey", "white",
] as const;

type ColorsArr = typeof COLORS[number][];

const formatOhms = (value: number): string => {
  if (value < 1000) {
    return `${value} ohms`;
  } else if (value < 1000000) {
    value /= 1000;
    return `${value} kiloohms`;
  } else if (value < 1000000000) {
    value /= 1000000;
    return `${value} megaohms`;
  } else {
    value /= 1000000000;
    return `${value} gigaohms`
  }
}

export function decodedResistorValue(colorsArr: ColorsArr) {
  const baseValue = COLORS.indexOf(colorsArr[0]) * 10 + COLORS.indexOf(colorsArr[1]); 
  const multiplier = COLORS.indexOf(colorsArr[2]);
  const resistanceValue =  baseValue * Math.pow(10, multiplier);
  return formatOhms(resistanceValue);
}


// 4
export function isLeap(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); 
}


// 5
const pairDNARNA = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
} as const;

type Sequence = keyof typeof pairDNARNA;
type SequenceResult = typeof pairDNARNA[Sequence];
type SequenceResultString = `${SequenceResult}`;

export function toRna(sequence: Sequence): SequenceResultString {
  const resultSequence = sequence.split("").map(letter => pairDNARNA[letter as Sequence]).join("") as SequenceResultString;
  
 if (resultSequence.length !== sequence.length) {
    throw new Error("Invalid input DNA.");  // If some letters were invalid, return an error message
  }

  return resultSequence;
}
