import 'brace';
import { Editor } from 'brace';
import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
export declare class MyStace implements ComponentInterface {
  _editor: Editor;
  oldText: string;
  elm: HTMLElement;
  changeText: EventEmitter;
  autoUpdateContent: boolean;
  durationBeforeCallback: number;
  timeoutSaving: any;
  options: any;
  setOptions(options: any): void;
  readOnly: boolean;
  setReadOnly(readOnly: boolean): void;
  theme: string;
  setTheme(theme: string, dynamicImport?: boolean): Promise<void>;
  mode: string;
  setMode(mode: string, dynamicImport?: boolean): Promise<void>;
  text: string;
  watchText(text: string): void;
  componentDidLoad(): void;
  getEditor(): Promise<Editor>;
  init(): void;
  initEvents(): void;
  updateText(): void;
}
