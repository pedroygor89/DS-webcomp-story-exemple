export declare class YduqsCodeSnipet {
  el: HTMLElement;
  dark: boolean;
  language_code: string;
  code: string;
  input_keyboard: string;
  exercise_title: string;
  isDark: boolean;
  current_code: string;
  text_console: string;
  copy(code: any): Promise<void>;
  GET(protocol: any, url: any): Promise<string>;
  runCompilerDesktop(): Promise<void>;
  runCompilerMobile(): void;
  runCompilerAPI(): Promise<void>;
  textChangeHandler(event: CustomEvent): void;
  setInput(): void;
  updateInput(): void;
  updateInputTab(): void;
  componentWillRender(): void;
  componentDidLoad(): void;
  render(): any[];
}
