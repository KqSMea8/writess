import { PieceType } from '@entity/Piece/schema';

export interface BlockStyleSchema {
  fontSize?: number;
}

export interface BlockSchema {
  id?: string;
  entityId?: string;
  contentIds?: string[];
  fixIds?: string[];
  blockStyle?: BlockStyleSchema;
  pieceType?: PieceType;
  documentId?: string;
}
