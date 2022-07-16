export declare class YduqsRange {
  value: number;
  max: number;
  min: number;
  step: number;
  name: string;
  output: (value: number) => void;
  elemRange: HTMLInputElement;
  updateValue(val: number): void;
  increaseValue(): void;
  decreaseValue(): void;
  render(): any;
}
