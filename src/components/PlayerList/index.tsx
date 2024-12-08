import { Component, createSignal } from "solid-js";
import { MIN_PLAYERS } from "../../constants";
import { Player } from "../../type";
import { Button } from "../Button";
import { PlayerForm } from "../PlayerForm";
import { PlayersListItem } from "./PlayersListItem";
import './playersList.css';

interface PlayersListProps {
  onClose: (player: Player[]) => void;
}

export const PlayersList: Component<PlayersListProps> = props => {
  const [players, setPlayers] = createSignal<Player[]>([]);

  const handleAddPlayer = (newPlayer: Player) => {
    setPlayers([...players(), newPlayer]);
  }

  const handleRemovePlayer = (playerToRemove: Player) => {
    const playerIndex = players().findIndex(player => player.name === playerToRemove.name);
    const nextPlayers = [...players()];
    nextPlayers.splice(playerIndex, 1)
    setPlayers(nextPlayers);
  }

  const handleReset = () => {
    setPlayers([]);
  }

  const handleClose = () => {
    props.onClose(players());
    handleReset();
  }

  return (
    <div class="playersList">
      <PlayerForm onSubmit={handleAddPlayer} />

      {players().map(player => (
        <PlayersListItem class="playersList-item" player={player} onDelete={handleRemovePlayer} />
      ))}

      <Button class="playersList-button" onClick={handleClose} disabled={players().length < MIN_PLAYERS} fluid>
        Faire le tirage
      </Button>
    </div>
  )
}