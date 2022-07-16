export declare class GalleryVideo {
  module_number: number;
  module_number_video: number;
  title_gallery: string;
  subtitle_gallery: string;
  title_video: string;
  moduleId: string;
  type_video: string;
  paragraph_video: string;
  english: boolean;
  spanish: boolean;
  srcVideo: string;
  scrollModules: string | undefined;
  el: HTMLElement;
  changeVideo(src: any): Promise<void>;
  changeModule(numMod: any): Promise<void>;
  changeVideoExternal(video: any): Promise<void>;
  handleWindowResize(): void;
  private renderNameModule;
  private verifyIsMobile;
  private mouseMoveButtonsModule;
  private touchMoveButtonsModules;
  private renderButtonsMenu;
  private closeModalGallery;
  private getSizeScrollButtonsMenu;
  private getSizeScrollButtonsMenuMobile;
  private nextScroll;
  private prevScroll;
  componentWillLoad(): Promise<void>;
  componentWillRender(): void;
  render(): any;
}
