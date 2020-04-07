class Draw {
  constructor() {
    this.simpleTag = (tagName, classTag, content, additionalStyle) => {
      const tag = document.createElement(tagName);

      tag.className = classTag;
      if (content) {
        tag.innerHTML = content;
      }
      if (additionalStyle) {
        tag.style.cssText = additionalStyle;
      }
      return tag;
    };
    this.functionalButton = (element, additionalinfo) => {
      const { name, position } = additionalinfo;

      return this.simpleTag('button', `key ${element}`, name, this.positionString(position));
    };
    this.typingButton = (element, additionalinfo, lang) => {
      const { dictionary, position } = additionalinfo;
      const [unShift, onShift] = dictionary[lang];
      const button = this.simpleTag('button', `key ${element}`, '', this.positionString(position));

      button.insertAdjacentElement(
        'beforeend',
        this.simpleTag('span', `button-item 1-${element}`, onShift),
      );
      button.insertAdjacentElement(
        'beforeend',
        this.simpleTag('span', `button-item 0-${element} active-shift`, unShift),
      );
      return button;
    };
    this.key = (element, additionalinfo, lang) => {
      if (additionalinfo.dictionary) {
        return this.typingButton(element, additionalinfo, lang);
      }
      return this.functionalButton(element, additionalinfo);
    };
    this.positionString = (position) => {
      const [row, coll, length] = position.split('*');
      return `grid-row: ${row}; grid-column: ${coll} / span ${length}`;
    };
  }
}
export default Draw;
