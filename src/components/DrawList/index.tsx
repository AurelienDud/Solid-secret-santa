import { batch, Component, createSignal } from "solid-js";
import { Draw, Player } from "../../type";
import { Button } from "../Button";
import { DrawListItem } from "./DrawListItem";
import { DrawResultModal } from "./DrawResultModal";

interface DrawListProps {
  players: Player[];
  draw: Draw;
  onReset: () => void;
}

export const DrawList: Component<DrawListProps> = props => {
  const [revealedPlayerName, setRevealedPlayerName] = createSignal<Player['name'][]>([]);
  const [selectedPlayerName, setSelectedPlayerName] = createSignal<Player['name']>();

  const handleHide = (playerName: string) => batch(() => {
    setSelectedPlayerName(undefined);
    setRevealedPlayerName([...revealedPlayerName(), playerName]);
  })

  return (
    <div>
      {props.players.map(player => (
        <DrawListItem 
          canReveal={selectedPlayerName() === undefined}
          onReveal={() => setSelectedPlayerName(player.name)}
          player={player}
          hasRevealed={revealedPlayerName().includes(player.name)}
          isRevealing={selectedPlayerName() === player.name}
        />
      ))}

      <DrawResultModal 
        open={!revealedPlayerName().includes(selectedPlayerName()) && selectedPlayerName() !== undefined}
        onHide={() => handleHide(selectedPlayerName())}
        pairedPlayerName={props.draw[selectedPlayerName()]}
      />

      {revealedPlayerName().length === props.players.length ? (
        <Button onClick={props.onReset}> 
          Recommencer le tirage 
        </Button>
      ) : null}
    </div>
  );
}