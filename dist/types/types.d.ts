export type TCssPseudoClassesReferences = {
    Name: string;
    Selector: string;
    Example: string;
    "Example description": string;
};
export type TCssSelectorsReferences = {
    Selector: string;
    Example: string;
    "Example description": string;
};
export type TFilesReferences = {
    Name: string;
    Description: string;
    Extension: string;
    Type: string;
    Icon: string;
    Featured: string;
};
export type THtmlAttributesReferences = {
    Name: string;
    Attribute: string;
    "Belongs to": string;
    Description: string;
    Value: string;
};
export type THtmlElementsReference = {
    Tag: string;
    Contain: string;
    Description: string;
    Name: string;
    Content: string;
    Attributes: string;
    Icon: string;
    Type: string;
    Featured: string;
    "Cover Image": string;
};
export type THtmlGlobalAttributesReferences = {
    Name: string;
    Attribute: string;
    Description: string;
    Value: string | null;
};
