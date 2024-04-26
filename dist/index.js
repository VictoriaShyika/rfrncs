"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlGlobalAttributesReferences =
  exports.htmlElementsReferences =
  exports.htmlAttributesReferences =
  exports.filesReferences =
  exports.cssSelectorsReferences =
  exports.cssPseudoClassesReferences =
    void 0;
const CSS_Pseudo_Classes_csv_1 = __importDefault(
  require("./references/CSS Pseudo Classes.csv")
);
const CSS_Selectors_csv_1 = __importDefault(
  require("./references/CSS Selectors.csv")
);
const Files_csv_1 = __importDefault(require("./references/Files.csv"));
const HTML_Attributes_csv_1 = __importDefault(
  require("./references/HTML Attributes.csv")
);
const HTML_Elements_csv_1 = __importDefault(
  require("./references/HTML Elements.csv")
);
const HTML_Global_Attributes_csv_1 = __importDefault(
  require("./references/HTML Global Attributes.csv")
);
exports.cssPseudoClassesReferences = CSS_Pseudo_Classes_csv_1.default;
exports.cssSelectorsReferences = CSS_Selectors_csv_1.default;
exports.filesReferences = Files_csv_1.default;
exports.htmlAttributesReferences = HTML_Attributes_csv_1.default;
exports.htmlElementsReferences = HTML_Elements_csv_1.default;
exports.htmlGlobalAttributesReferences = HTML_Global_Attributes_csv_1.default;
