class Draw {
  constructor() {
    this.simpleTag = (tagName, classTag, content) => {
      const tag = document.createElement(tagName);

      tag.className = classTag;

      if (content !== undefined) {
        tag.innerHTML = content;
      }
      return tag;
    };
  }
}
export default Draw;
