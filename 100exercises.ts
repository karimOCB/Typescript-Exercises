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

// 6
const planets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615, 
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132 
} as const;

type planet = keyof typeof planets;

export function age(planet: planet, seconds: number): number {
  return Math.round(seconds * 100 / (planets[planet] * 31557600)) / 100;
}

// 7 
export class DnDCharacter { 
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    const abilityScore = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)
    return abilityScore
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}

// 8
export function score(x: number, y: number): number {
 const distance = Math.sqrt(x * x + y * y);
  
  // Determine score based on distance
  if (distance > 10) {
    return 0; // Outside the target
  } else if (distance > 5) {
    return 1; // Outer circle
  } else if (distance > 1) {
    return 5; // Middle circle
  } else {
    return 10; // Inner circle
  }
}


