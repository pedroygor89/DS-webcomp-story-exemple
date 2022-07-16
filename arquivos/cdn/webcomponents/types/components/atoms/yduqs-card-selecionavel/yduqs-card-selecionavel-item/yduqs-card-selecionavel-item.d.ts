import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class YduqsCardSelecionavelItem {
  _isSelected: boolean;
  selected: boolean;
  optionid: string;
  disabled?: boolean;
  onSelectItem: EventEmitter;
  componentWillLoad(): void;
  selectItem(): Promise<void>;
  unselectItem(): Promise<void>;
  select(): void;
  isSelected(): Promise<boolean>;
  render(): any;
}
