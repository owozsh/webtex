import * as fs from "fs";

export default class WtexReader {
  static readWtexFile = (path) => {
    return fs.readFileSync(path, "utf8");
  };

  static splitDocLines = (wtexDoc) => {
    return wtexDoc.split("\n").filter((e) => e);
  };
}
