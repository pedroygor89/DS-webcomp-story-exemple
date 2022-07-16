export declare class Dropdown {
  colunas: string;
  identificador: string;
  tipo: string;
  icon: boolean;
  createOptionsSelect(): Promise<void>;
  createOptionsDrop(): Promise<void>;
  componentDidRender(): void;
  render(): any;
}
