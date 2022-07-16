export declare class Dropdown {
  colunas: string;
  identificador: string;
  tipo: string;
  withcheck: boolean;
  icon: boolean;
  createOptionsSelect(): Promise<void>;
  createOptionsDrop(): Promise<void>;
  componentDidRender(): void;
  render(): any;
}
