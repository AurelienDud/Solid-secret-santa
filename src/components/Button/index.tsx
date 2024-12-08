import { children, ParentComponent } from "solid-js";
import './button.css';

interface ButtonProps {
  class?: string;
  disabled?: boolean;
  fluid?: boolean;
  onClick?: () => void;
}

export const Button: ParentComponent<ButtonProps> = (props) => {
  const safeChildren = children(() => props.children);

  const computedClassName = () => {
    let classNames = ['button'];

    if (props.fluid) {
      classNames.push('button--fluid');
    }

    if (props.class) {
      classNames.push(props.class);
    }

    return classNames.join(' ');
  }

  return (
    <button class={computedClassName()} type="button" onClick={props.onClick} disabled={props.disabled}>
      {safeChildren()}
    </button>
  )
}