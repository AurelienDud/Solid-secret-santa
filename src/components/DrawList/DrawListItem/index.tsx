import { OcCheckcircle3 } from 'solid-icons/oc';
import { Component } from "solid-js";
import { Player } from "../../../type";
import { Button } from '../../Button';
import './drawListItem.css';

interface DrawListItemProps {
  player: Player;
  hasRevealed?: boolean;
  isRevealing?: boolean;
  onReveal: () => void;
  canReveal: boolean
}

export const DrawListItem: Component<DrawListItemProps> = props => {
  return (
    <div class="drawListItem">
      <div class="drawListItem-content">
        {props.player.name} 
      </div>
      
      <div class="drawListItem-aside">
        {props.hasRevealed ? (
          <OcCheckcircle3 title='Tirage révélé' />
        ) : (
          <Button 
            onClick={() => props.onReveal()} 
            disabled={!props.canReveal}>
            Révéler
          </Button>
        )}
      </div>
    </div>
  )
}