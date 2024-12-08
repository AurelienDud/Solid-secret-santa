import { MIN_PLAYERS } from "./constants";
import { Draw } from "./type";

// Mélange aléatoire de la liste des receveurs
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const secretSantaPairing = (names: string[]): Draw => {
  if (!Array.isArray(names) || names.length < MIN_PLAYERS) {
    throw new Error(
      "La liste des players doit contenir au moins deux personnes."
    );
  }

  const givers = [...names];
  const receivers = shuffle([...names]);
  const draw: Draw = {};

  for (let i = 0; i < givers.length; i++) {
    if (givers[i] === receivers[i]) {
      return secretSantaPairing(names);
    }
    
    draw[givers[i]] = receivers[i];
  }

  return draw;
}