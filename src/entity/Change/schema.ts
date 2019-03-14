import { SetSchema } from '@entity/Set/schema';
import { PieceSchema } from '@entity/Piece/schema';
import { BlockSchema } from '@entity/Block/schema';
import { FixSchema } from '@entity/Fix/schema';

export enum ChangeType {
  REPLACE = 0,
  SWITCH = 1,
  UPDATE = 2,
}

export interface ReplaceChangeSchema {
  beforeEntityId?: string;
  afterEntityId?: string;
  deleteEntityIds?: string[];
  addEntityIds?: string[];
  setEntities?: SetSchema[];
  blockEntities?: BlockSchema[];
  pieceEntities?: PieceSchema[];
  fixEntities?: FixSchema[];
}

export interface SwitchChangeSchema {
  beforeEntityId?: string;
  afterEntityId?: string;
  currentEntityId?: string;
}

export interface UpdateChangeSchema {
  key?: string;
  val?: string;
}

export interface ChangeSchema {
  id?: string;
  targetEntityId?: string;
  pathIds?: string[];
  changeType?: ChangeType;
  replaceChange?: ReplaceChangeSchema;
  switchChange?: SwitchChangeSchema;
  updateChange?: UpdateChangeSchema;
  documentId?: string;
}
