import { EventEmitter } from '../../../stencil-public-runtime';
export declare class Tabs {
  elem: HTMLElement;
  tabs: any[];
  darkmode: boolean;
  outlined: boolean;
  fixed_titles: boolean;
  icons: Array<String>;
  gtm_category: Array<String>;
  gtm_action: Array<String>;
  gtm_label: Array<String>;
  onChange: EventEmitter;
  componentWillLoad(): void;
  currentTab(): Promise<number>;
  openTab(tabIndex: number): Promise<void>;
  render(): any;
}
