import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {
  if (!state.isRunning) {
    return
  }

  // Convertendo minutes e seconds em números
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  /* Se o seconds for menor que zero, retorne-o 
  para 59, e diminua 1 minute */
  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  /* Se o minutes for menor que zero, retorne a 
  aplicação ao estado inicial */
  if (minutes < 0) {
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  /* Lógica do 'countdown': Usando o 'setTimeOut, 
   a cada 1 segundo (1000ms), será executada novamente
   a função 'countdown' */
  setTimeout(() => countdown(), 1000)
};

export function updateDisplay(minutes, seconds) {
  /* Caso o minutes seja passado, aceitar conforme passado,
  se não, começar conforme o padrão inicial da aplicação */
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
};

