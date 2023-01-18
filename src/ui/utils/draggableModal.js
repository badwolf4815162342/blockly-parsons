/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { ModalDialog } from 'react-bootstrap';
import Draggable from 'react-draggable';

export default class DraggableModalDialog extends React.Component {
  render() {
    return (
      <Draggable handle=".modal-header">
        <ModalDialog
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...this.props}
        />
      </Draggable>
    );
  }
}
