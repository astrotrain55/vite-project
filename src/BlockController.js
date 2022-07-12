/**
 * Модуль контроллера блоков, управляющего загрузкой js-кода,
 * необходимого для DOM элементов текущей страницы
 */

export const BlockController = {
  /**
   * Аккумулятор контроллера блоков
   */
  blocks: {},

  /**
   * Метод проверки существования элемента DOM на текущей странице
   * @param domElement
   * @returns {boolean|number}
   */
  exist(domElement) {
    return document.querySelectorAll(domElement).length;
  },

  /**
   * Метод инициализации блока контроллера
   * @param domElement
   */
  init(domElement) {
    if (this.exist(domElement)) {
      this.blocks[domElement]();
    }
  },

  /**
   * Метод переинициализации всех блоков контроллера
   */
  initAll() {
    for (let block in this.blocks) {
      this.init(block);
    }
  },

  /**
   * Метод добавления блока в контроллер
   * @param componentFn
   * @param domElement
   */
  add(componentFn, domElement) {
    if (componentFn && domElement) {
      this.blocks = {
        ...this.blocks,
        [domElement]: componentFn.bind(componentFn, domElement),
      };
    }
  },
};
