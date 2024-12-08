import { batch, Component, createSignal } from "solid-js";
import { secretSantaPairing } from "../../draw";
import { Draw, Player } from "../../type";
import { DrawList } from "../DrawList";
import { PlayersList } from "../PlayerList";

export const Game: Component = () => {
  const [players, setPlayers] = createSignal<Player[]>();
  const [draw, setDraw] = createSignal<Draw>()
  const [canEdit, setCanEdit] = createSignal(true);

  const handleDraw = (players: Player[]) => {
    batch(() => {
      setCanEdit(false);
      setPlayers(players);
      setDraw(secretSantaPairing(players.map(({ name }) => name)));
    })
  }

  const handleReset = () => batch(() => {
    setPlayers(undefined);
    setDraw(undefined);
    setCanEdit(true);
  })

  return (
    <div style={{width: '600px', "max-width": '90vw' }}>
      {canEdit() ? (
        <PlayersList onClose={handleDraw} />
      ) : null}

      {!canEdit() && draw() && players() ? (
        <DrawList draw={draw()} players={players()} onReset={handleReset} />
      ): null}        
    </div>
  )
}