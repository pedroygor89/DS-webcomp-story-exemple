export declare class Podcast {
  subtitulo: string;
  dark: boolean;
  withtitle: boolean;
  audio: string;
  bgColor: string;
  titleappears: string;
  changeColor(novoValor: any): Promise<void>;
  showtitle(value: any): Promise<void>;
  componentWillRender(): void;
  render(): any;
}
