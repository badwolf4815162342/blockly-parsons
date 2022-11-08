import './App.css';
import GameScreen from './ui/screens/game/game.screen';
import GameProvider from './core/provider/game/provider';


//react-router-dom pkg
// Brave agINST localhost
function App() {
  return (
    // Provider daten runter geben
    <GameProvider>
      <GameScreen />
    </GameProvider>
  );
}

export default App;

