import { Component } from "solid-js";
import { Button } from "../../Button";
import './drawResultModal.css';

interface DrawResultModalProps {
  open: boolean;
  pairedPlayerName: string;
  onHide: () => void;
}

export const DrawResultModal: Component<DrawResultModalProps> = props => {
  return (
    <>
      {props.open ? (
        <div class="drawResultModal">
          <div class="drawResultModal-content">
            <p>Tu dois faire un cadeau à {props.pairedPlayerName}</p>
            <Button onClick={() => props.onHide()} fluid>
              Cacher définitivement
            </Button>
          </div>
        </div>
      ) : null}
    </>
  )
}