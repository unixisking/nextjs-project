type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type EPILATION_METHOD = {
  title: string;
  effectivness: number;
  sessions: string;
  pain: number;
};

export enum TechnologyType {
  LASER,
  ELECTROLYSE,
}

export enum SexType {
  MALE,
  FEMALE,
}
