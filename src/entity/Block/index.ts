import {
  base_font,
} from '@ui/base';
import {
  BlockSchema, BlockStyleSchema,
} from './schema';
import { PieceType } from '../Piece/schema';
import { getRandomStr } from '@utils/random';

export class BlockStyle implements BlockStyleSchema {
  public fontSize: number = base_font;

  static fromJS(obj: BlockStyleSchema = {}): BlockStyle {
    return {
      ...new BlockStyle(),
      ...obj,
    };
  }
}

export class Block implements BlockSchema {
  public id: string = '';
  public entityId: string = '';
  public contentIds: string[] = [];
  public fixIds: string[] = [];
  public blockStyle: BlockStyle | BlockStyleSchema = BlockStyle.fromJS();
  public pieceType: PieceType = PieceType.TEXT;
  public documentId: string = '';

  static fromJS(obj: BlockSchema = {}): Block {
    return {
      ...new Block(),
      ...obj,
    };
  }

  static create(documentId: string): Block {
    const id = `block_${getRandomStr(10)}`;
    const entityId = `block_entity_${getRandomStr(10)}`;
    const result = Block.fromJS({
      id,
      entityId,
      documentId,
    });
    return result;
  }
}
