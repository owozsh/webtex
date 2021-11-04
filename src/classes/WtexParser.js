import { parse } from "node-html-parser";

export default class WtexParser {
  parseWebTexDocument = (wtexDoc) => {
    for (let i = 0; i < wtexDoc.length; i++) {
      let wtexDocline = wtexDoc[i];
      if (wtexDocline[0] == ".") {
        this.parsePage(i, wtexDoc);
      }
    }
  };

  parsePage = (pageStartLineNumber, wtex) => {
    let page = [wtex[pageStartLineNumber]];

    for (
      let i = pageStartLineNumber + 1;
      i < wtex.length && wtex[i] != ".";
      i++
    ) {
      page.push(wtex[i]);
    }

    let pageClasses = page[0].split(".").filter((e) => e);
    let pageContainer = parse('<div class="page"></div>');

    for (let pageClass of pageClasses) {
      pageContainer.firstChild.classList.add(pageClass);
    }

    console.log(pageContainer.toString());
  };

  parseContainer = () => {};
}
