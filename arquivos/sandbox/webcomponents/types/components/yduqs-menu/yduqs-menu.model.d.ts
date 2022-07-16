export declare class YduqsMenuItemModel {
  /**
   * Identificador numero do item de menu
   */
  id: number;
  /**
   * Identificador do modulo / introducao que aparece quando o menu esta em modo 'selecao'
   */
  label: string;
  /**
   * Id da ancora ou url para ser redirecionada
   */
  href: string;
}
export declare class YduqsMenuModel {
  /**
   * Titulo do Modulo
   */
  title: string;
  /**
   * Lista de objetos de ancora do menu
   */
  itemList: Array<YduqsMenuItemModel>;
}
