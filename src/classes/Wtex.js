import WtexReader from "./WtexReader.js";

export default class Wtex {
  constructor(wtexDocPath) {
    this.fullDocument = WtexReader.readWtexFile(wtexDocPath);
    this.documentLines = WtexReader.splitDocLines(this.fullDocument);
    this.parsedDocument = "";
  }

  getParsedDocument() {
    return this.parsedDocument;
  }

  setParsedDocument(parsedDocument) {
    this.parsedDocument = parsedDocument;
  }
}
