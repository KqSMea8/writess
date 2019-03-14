export enum SetLayout {
  NORMAL = 0,
  FLEX = 1,
  GRID = 2,
}

export interface SetStyleSchema {
  width?: number;
  height?: number;
}

export interface SetSchema {
  id?: string;
  entityId?: string;
  contentIds?: string[];
  isRoot?: boolean;
  setLayout?: SetLayout;
  setStyle?: SetStyleSchema;
  documentId?: string;
  extraInfo?: string;
}
