import { OcTrash2 } from 'solid-icons/oc';
import { Component } from "solid-js";
import { Player } from "../../../type";
import './playersListItem.css';

interface PlayerListItemProps {
  class?: string;
  player: Player;
  onDelete: (player: Player) => void;
}

export const PlayersListItem: Component<PlayerListItemProps> = props => {
  return (
    <div class={`playersListItem ${props.class}`}>
      <div class="playersListItem-value">
        {props.player.name}
      </div>
      <button class='playersListItem-button' type="button" onClick={() => props.onDelete(props.player)}>
        <OcTrash2 />
      </button>
    </div>
  )
}