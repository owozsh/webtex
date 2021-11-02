import WtexParser from "./classes/WtexParser.js";
import Wtex from "./classes/Wtex.js";

const parser = new WtexParser();
const wtexDocument = new Wtex("./example.wtex");

parser.parseWebTexDocument(wtexDocument.documentLines);
