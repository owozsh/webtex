import symbols from './symbols.js';
import readWtex from './readWtex.js';

import { parse } from 'node-html-parser';

const webtexDocumentText = readWtex('../example.wtex');
const webtexDocument = webtexDocumentText.split('\n').filter((e) => e);

let htmlContent = '';

const parseWebTexDocument = (doc) => {
  for (let i = 0; i < doc.length; i++) {
    let line = doc[i];
    if (line[0] == '.') {
      parsePage(i, doc);
    } else if (line[0] == '') {
      continue;
    }
  }
};

const parsePage = (pageStartLineNumber, doc) => {
  let page = [doc[pageStartLineNumber]];

  for (let i = pageStartLineNumber + 1; i < doc.length && doc[i] != '.'; i++) {
    page.push(doc[i]);
  }

  let pageClasses = page[0].split('.').filter((e) => e);
  let pageContainer = parse('<div class="page"></div>');

  for (let pageClass of pageClasses) {
    pageContainer.firstChild.classList.add(pageClass);
  }

  console.log(pageContainer.toString());
};

const parseContainer = () => {};

parseWebTexDocument(webtexDocument);
