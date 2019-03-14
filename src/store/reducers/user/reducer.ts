import { userId } from '@utils/user';

export interface DocumentState {
  id: string;
}

const initState: DocumentState = {
  id: userId,
};

export default (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
