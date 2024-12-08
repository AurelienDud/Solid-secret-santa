import { OcPaperairplane2 } from 'solid-icons/oc';
import { batch, createSignal, JSX, onMount, type Component } from 'solid-js';
import { Player } from '../../type';
import './playerForm.css';

interface PlayerFormProps {
  onSubmit: (player: Player) => void;
}

const isValidName = (name?: string): boolean => !!name && name.length >= 2;

export const PlayerForm: Component<PlayerFormProps> = props => {
  let containerRef: HTMLDivElement;

  const [value, setValue] = createSignal("");

  const handleChangeInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  }

  const handleSubmit = () => {
    batch(() => {
      if (isValidName(value())) {
        const newPlayer = {
          name: value(),
        }
        props.onSubmit(newPlayer);
        setValue('')
      }
    })
  }

  onMount(() => {
    containerRef.addEventListener('keydown', event => {
      if(event.key === 'Enter') {
        handleSubmit();
      }
    })
  })

  return (
    <div class="playerForm" ref={containerRef}>
      <input class="playerForm-input" type="text" onInput={handleChangeInput} value={value()} placeholder='Nom du participant'/>
      <button class="playerForm-button" onClick={handleSubmit} disabled={!isValidName(value())}>
      <OcPaperairplane2 />
      </button>
    </div>
  )
}