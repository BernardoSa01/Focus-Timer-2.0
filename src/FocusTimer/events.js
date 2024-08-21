import { controls } from "./elements.js"
import * as actions from "./actions.js"

// Registrando eventos de clique nos botões
export function registerControls() {
  controls.addEventListener('click', (event) => {
    // Garante a conexão com o botão, mesmo que o clique ocorra em 'img'
    const button = event.target.closest('button')

    /* Se o clique não foi em um botão, ou se o botão não
    tem um data-action, saia da função */
    if (!button || !button.dataset.action) {
      return
    }

    const action = button.dataset.action

    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
};

export function registerMusics() {
  music.addEventListener('click', (event) => {
    // Garante a conexão com o botão, mesmo que o clique ocorra em 'img'
    const button = event.target.closest('button')

    if (!button || !button.dataset.action) {
      return
    }

    const action = button.dataset.action

    if(typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
};
