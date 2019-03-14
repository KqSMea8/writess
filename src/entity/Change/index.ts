import {
  ReplaceChangeSchema, SwitchChangeSchema, UpdateChangeSchema,
  ChangeSchema,
  ChangeType,
} from './schema';
import { BlockSchema } from '@entity/Block/schema';
import { FixSchema } from '@entity/Fix/schema';
import { PieceSchema } from '@entity/Piece/schema';
import { SetSchema } from '@entity/Set/schema';

export class RepalceChange implements ReplaceChangeSchema {
  public beforeEntityId: string = '';
  public afterEntityId: string = '';
  public deleteEntityIds: string[] = [];
  public addEntityIds: string[] = [];
  public setEntities: SetSchema[] = [];
  public blockEntities: BlockSchema[] = [];
  public fixEntities: FixSchema[] = [];
  public pieceEntities: PieceSchema[] = [];

  static fromJS(obj: ReplaceChangeSchema = {}): RepalceChange {
    return {
      ...new RepalceChange(),
      ...obj,
    };
  }
}

export class SwitchChange implements SwitchChangeSchema {
  public beforeEntityId: string = '';
  public afterEntityId: string = '';
  public currentEntityId: string = '';

  static fromJS(obj: SwitchChangeSchema = {}): SwitchChange {
    return {
      ...new SwitchChange(),
      ...obj,
    };
  }
}

export class UpdateChange implements UpdateChangeSchema {
  public key: string = '';
  public val: string = '';

  static fromJS(obj: UpdateChangeSchema = {}): UpdateChange {
    return {
      ...new UpdateChange(),
      ...obj,
    };
  }
}

export class Change implements ChangeSchema {
  public id: string = '';
  public targetEntityId: string = '';
  public pathIds: string[] = [];
  public changeType: ChangeType = ChangeType.UPDATE;
  public replaceChange: RepalceChange | ReplaceChangeSchema = {};
  public switchChange: SwitchChange | SwitchChangeSchema = {};
  public updateChange: UpdateChange | UpdateChangeSchema = {};
  public documentId: string = '';

  static fromJS(obj: ChangeSchema = {}): Change {
    return {
      ...new Change(),
      ...obj,
    };
  }
}
