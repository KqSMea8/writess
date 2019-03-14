import * as React from 'react';
import { DocumentObjState } from '@store/reducers/document/reducer';
import Node from '@biz-components/Node';

export interface SetNodeProps {
  document: DocumentObjState;
  id: string;
}

export interface SetNodeState { }

export default class SetNode extends React.Component<SetNodeProps, SetNodeState> {

  shouldComponentUpdate(nextProps: SetNodeProps, nextState: SetNodeState) {
    if (this.props.id !== nextProps.id) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { id, document } = this.props;
    const { sets } = document;
    const currNode = sets[id];
    const contentNodeIds = currNode.contentIds;

    return (
      <div className="setNode-wrapper">
        {contentNodeIds.map(id => (
          <Node document={document} id={id} key={id} />
        ))}
      </div>
    );
  }
}
