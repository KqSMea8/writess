import * as React from 'react';
import { DocumentObjState } from '@store/reducers/document/reducer';

export interface NodeProps {
  document: DocumentObjState;
  id: string;
}

export interface NodeState { }

export default class Node extends React.Component<NodeProps, NodeState> {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        123
      </div>
    );
  }
}
