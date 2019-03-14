export enum FixType {
  TEXT = 0,
  IMAGE = 1,
}

export interface TextFixStyleSchema {
  color?: string;
  background?: string;
  fontSize?: number;
}

export interface ImageFixStyleSchema {
  width?: number;
  height?: number;
}

export interface FixSchema {
  id?: string;
  entityId?: string;
  content?: string;
  fixType?: FixType;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  textFixStyle?: TextFixStyleSchema;
  imageFixStyle?: ImageFixStyleSchema;
  documentId?: string;
}
