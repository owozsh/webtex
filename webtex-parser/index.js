import symbols from './symbols.js';
import readWtex from './readWtex.js';

const webtexDocumentText = readWtex('../example.wtex');
const webtexDocument = webtexDocumentText.split('\n');

let htmlContent = '';

console.log(webtexDocument[1]);
