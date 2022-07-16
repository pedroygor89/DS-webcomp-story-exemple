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
  text_response: string;
  value: string;
  response_active: boolean;
  copy(code: any): Promise<void>;
  GET(protocol: any, url: any): Promise<string>;
  runCompilerDesktop(): Promise<void>;
  runCompilerMobile(): void;
  runCompilerAPI(): Promise<void>;
  handleChange(event: any): void;
  formatValue(value: any): string;
  textChangeHandler(event: CustomEvent): void;
  setInput(): void;
  componentWillRender(): void;
  componentDidLoad(): void;
  render(): any[];
}
