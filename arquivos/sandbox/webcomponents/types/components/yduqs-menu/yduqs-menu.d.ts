import { EventEmitter } from '../../stencil-public-runtime';
import { YduqsMenuModel } from './yduqs-menu.model';
export declare class YduqsMenu {
  el: HTMLElement;
  onChangeMenuData: EventEmitter;
  onClickMenuItem: EventEmitter;
  _isMobile: boolean;
  _isOpen: boolean;
  _isActive: boolean;
  _animate: boolean;
  _activeIndex: number;
  menuDeskContainerEl: HTMLDivElement;
  _menuDeskContainerWidth: string;
  settings: YduqsMenuModel;
  handleWindowResize(): void;
  initialize(config: YduqsMenuModel): Promise<void>;
  private closeMenu;
  private openMenu;
  private getActiveItem;
  private renderActiveItem;
  private renderActiveMarker;
  private renderMenuItems;
  private getMenuMobile;
  private getMenuDesktop;
  private animate;
  render(): any;
}
