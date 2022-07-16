export declare class YduqsSearchBar {
  open: boolean;
  term: string;
  hasSearch: boolean;
  cachedDb: any;
  actualFoundItemPosition: number;
  result: any[];
  private elemInput;
  private cacheDbId;
  private termFoundClass;
  private termFoundResultClass;
  reset(): void;
  /** CORE */
  /**
   * Cria um objeto indexado com o conteudo html do tema
   * @returns
   */
  private createCachedDb;
  findInDocument(): void;
  /** EVENTS */
  /**
   * Atualiza o valor de open
   * @param value
   */
  private setOpen;
  /**
   * Atualiza o valor de term
   * @param value
   */
  private setTerm;
  /**
   * Abre o modal de busca
   */
  private handleOpen;
  /**
   * Fecha o modal de busca
   */
  private handleClose;
  /**
   * Limpa os resultados
   */
  private clearResults;
  /**
   * Limpa o campo de busca e a lista de resultados
   */
  private handleClear;
  /**
   * Reseta o modal de busca para o estado inicial (fechado, sem termo e sem resultados)
   */
  private handleReset;
  /**
   * Chamado na alteração do campo de busca
   * @param event
   */
  private handleInputChange;
  private setResult;
  /**
   * Move o scroll até o elemento selecionado
   * @param position
   */
  private navigateOnResults;
  private handleResultItemClick;
  /**
   * Chamado no envio do formulário de busca
   * @param event
   */
  private handleSubmit;
  render(): any;
}
