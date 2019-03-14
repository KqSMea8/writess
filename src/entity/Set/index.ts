import {
  SetLayout, SetSchema, SetStyleSchema,
} from './schema';
import { getRandomStr } from '@utils/random';

export class SetEntity implements SetSchema {
  public id: string = '';
  public entityId: string = '';
  public contentIds: string[] = [];
  public isRoot: boolean = false;
  public setLayout: SetLayout = SetLayout.NORMAL;
  public setStyle: SetStyleSchema = {};
  public documentId: string = '';
  public extraInfo: string = '';

  static fromJS(obj: SetSchema = {}): SetEntity {
    return {
      ...new SetEntity(),
      ...obj,
    };
  }

  static create(documentId: string): SetEntity {
    const id = `set_${getRandomStr(10)}`;
    const entityId = `set_entity_${getRandomStr(10)}`;
    const result = SetEntity.fromJS({
      id,
      entityId,
      documentId,
    });
    return result;
  }
}
