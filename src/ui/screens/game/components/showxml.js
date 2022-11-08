import useGame from "../../../../core/provider/game/use";

function ShowXml() {
  const { state: { submittedXml } } = useGame();

  return (
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={submittedXml}
        readOnly
      ></textarea>
  );
}

export default ShowXml