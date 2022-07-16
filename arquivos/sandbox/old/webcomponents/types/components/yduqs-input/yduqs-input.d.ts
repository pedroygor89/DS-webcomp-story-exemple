export declare class Input {
  placeh: string;
  titulo: string;
  icon: any;
  input: string;
  visible: string;
  color: string;
  iconColor: string;
  messageTitle: boolean;
  bgColor: string;
  alteraInput(ev: any): Promise<void>;
  apagarValor(): Promise<void>;
  mensagem(novoValor: any): void;
  render(): any;
}
