export declare class YduqsImageFullScreen {
  src: string;
  alt: string;
  max: number;
  min: number;
  step: number;
  fullScreen: boolean;
  val: number;
  evCache: any[];
  prevDiff: number;
  private mouseScrollEventName;
  private container;
  private img;
  private initialWidth;
  private dragXStart;
  private dragYStart;
  private lastX;
  private lastY;
  private refX;
  private refY;
  handleClick(event: Event): void;
  reset(): void;
  /**
   * Seta o valor da Larura da imagem
   * @param value
   */
  private setImgWidth;
  /**
   * informa se um valor é negativo
   * @param value
   * @returns true | false
   */
  private isNegative;
  /**
   * Seta a margem máxima de arraste da imagem para não sair do viewScreen
   * @param options
   *   @property top
   *   @property left
   */
  private setImgMargins;
  /**
   * Verifica o valor inserido, e seta width e margens da imagem
   * @param value
   */
  private rangeOutput;
  /**
   * Cria um cache dos eventos para suportar interação com 2 pontos de toque
   * @param ev
   */
  private handlePointerDown;
  /**
   * Atualiza o evento do Cache
   * @param ev
   */
  private handlePointerMove;
  /**
   * Processo de saida dos toques
   * @param ev
   */
  private handlePointerUp;
  /**
   * Remove um evento do Cache
   * @param ev
   */
  private removeEvent;
  /**
   * Previne o funcionamento padrão de toque quando houver mais de 1 toque simultâneo
   * @param e Evento de Toque
   */
  private handleTouchStart;
  /**
   * Verifica se a direção do Scroll foi Vertical
   * @param e Evento de mudança no scroll do mouse
   * @returns
   */
  private scrollDirectionIsUpDown;
  /**
   * Normaliza os valores do scroll do mouse em diferentes navegadores
   * @param e Evento de mudança no scroll do mouse
   * @returns
   */
  private normalizeScrollData;
  /**
   *
   * @param e Evento de mudança no scroll do mouse
   */
  private handleMouseScroll;
  /**
   * Inicia o Arrastar de um elemento
   * @param e
   */
  private handleDragStart;
  /**
   * Chamado em Loop quando o Arrastar esta sobre um elemento
   * @param e
   */
  private handleDragOver;
  /**
   * Finalização do movimento de Arrastar
   * @param e
   */
  private handleDragEnd;
  /**
   * Inicia o movimento de arratar em telas de toque
   * @param e
   */
  private handleTouchDragStart;
  /**
   * Chamado em Loop enquanto o elemento é arrastado
   * @param e
   */
  private handleTouchDragMove;
  /**
   * Finaliza o movimento de arrastar
   * @param e
   */
  private handleTouchDragEnd;
  componentDidLoad(): void;
  render(): any;
}
