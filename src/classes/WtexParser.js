import { parse } from "node-html-parser";

export default class WtexParser {
  parseWebTexDocument = (wtex) => {
    for (let i = 0; i < wtex.length; i++) {
      let line = wtex[i];
      if (line[0] == ".") {
        this.parsePage(i, wtex);
      } else if (line[0] == "") {
        continue;
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
