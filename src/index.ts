import {
  TCssPseudoClassesReference,
  TCssSelectorsReference,
  TFilesReference,
  THtmlAttributesReference,
  THtmlElementsReference,
  THtmlGlobalAttributesReference,
} from "./types/types";

import cssPseudoClasses from "./references/CSS Pseudo Classes.csv";
import cssSelectors from "./references/CSS Selectors.csv";
import files from "./references/Files.csv";
import htmlAttributes from "./references/HTML Attributes.csv";
import htmlElements from "./references/HTML Elements.csv";
import htmlGlobalAttributes from "./references/HTML Global Attributes.csv";

const cssPseudoClassesReferences: TCssPseudoClassesReference[] = [
  ...cssPseudoClasses,
];
const cssSelectorsReferences: TCssSelectorsReference[] = [...cssSelectors];
const filesReferences: TFilesReference[] = [...files];
const htmlAttributesReferences: THtmlAttributesReference[] = [
  ...htmlAttributes,
];
const htmlElementsReferences: THtmlElementsReference[] = [...htmlElements];
const htmlGlobalAttributesReferences: THtmlGlobalAttributesReference[] = [
  ...htmlGlobalAttributes,
];

export {
  cssPseudoClassesReferences,
  cssSelectorsReferences,
  filesReferences,
  htmlAttributesReferences,
  htmlElementsReferences,
  htmlGlobalAttributesReferences,
};
export type {
  TCssPseudoClassesReference,
  TCssSelectorsReference,
  TFilesReference,
  THtmlAttributesReference,
  THtmlElementsReference,
  THtmlGlobalAttributesReference,
};
