import {
  Card, Container,
} from 'react-bootstrap';
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import ShowCode from '../showCode';

export default function ShowCodeCard() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Body>
        <p>How does your puzzle look in code right now?</p>
        <Collapse in={open}>
          <div id="example-collapse-code">
            <ShowCode />
          </div>
        </Collapse>
        <Container fluid onClick={() => setOpen(!open)}>
          <div style={{ backgroundColor: 'transparent', borderStyle: 'none', float: 'right' }}>
            {open
              ? (
                <i style={{ fontSize: '30px' }} className="material-icons black-text">arrow_drop_up</i>
              )
              : <i style={{ fontSize: '30px' }} className="material-icons black-text">arrow_drop_down</i>}
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
}
