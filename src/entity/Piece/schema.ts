export enum PieceType {
  TEXT = 0,
  IMAGE = 1,
}

export interface TextPieceStyleSchema {
  isItalic?: boolean;
  isBold?: boolean;
  isDeleted?: boolean;
  color?: string;
  background?: string;
}

export interface ImagePieceStyleSchema {
  width?: number;
  height?: number;
}

export interface PieceSchema {
  id?: string;
  entityId?: string;
  content?: string;
  pieceType?: PieceType;
  textPieceStyle?: TextPieceStyleSchema;
  imagePieceStyle?: ImagePieceStyleSchema;
  url?: string;
  documentId?: string;
}
