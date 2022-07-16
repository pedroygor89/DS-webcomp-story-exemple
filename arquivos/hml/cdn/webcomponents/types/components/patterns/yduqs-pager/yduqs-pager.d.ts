export declare class YduqsPager {
  private btnPrev;
  private btnNext;
  private hideCssClass;
  private attrSelectorPage;
  private attrSelectorModule;
  private attrSelectorLabel;
  private starterPageIndex;
  private theme;
  private localStorageKey;
  private isActive;
  private getTexts;
  private _getModulePagination;
  private _getLabelModule;
  private _getLabel;
  /**
   * Procura pelos videos e faz backup do SRC
   */
  private _prepareVideoPlayers;
  /**
   * Seta o src nos videos da pagina atual, ou todos os videos se a paginação não estiver ativa
   */
  private _setCurrentVideosSrc;
  /**
   * Procura pelos videos nas paginas não correntes e muda seu SRC
   */
  private _stopUncurrentVideos;
  private _handleVideoPlayers;
  handleWindowResize(): void;
  total: number;
  current: number;
  _goToPage(): void;
  private _setCurrentPage;
  private _getCurrentPage;
  private _init;
  /**
   * Vai para a página anterior
   */
  private _goToPrev;
  /**
   * Vai para a próxima página
   */
  private _goToNext;
  /**
   * Retorna a pagina onde está o elemento informado
   * @param elem jQuery Element
   */
  private _getPageFromElement;
  /**
   * Reseta o hash, se houver necessidade
   */
  private _resetHash;
  clickMenuTitleHandler(event: CustomEvent): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): any;
}
