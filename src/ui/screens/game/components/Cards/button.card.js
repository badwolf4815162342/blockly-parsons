import {
  Button, Card, Stack,
} from 'react-bootstrap';

export default function ButtonCard(props) {
  // eslint-disable-next-line react/prop-types
  const { closeGame } = props;

  return (
    <Card
      className="text-end border-0"
    >
      <Card.Body>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => closeGame()}>Submit Solution</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
