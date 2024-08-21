import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js'

export function toggleRunning() {
  /* Quando o play/pause forem clicados, a aplicação
  fará um toggle na propriedade 'running'*/
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()  

  sounds.buttonPress.play()
};

export function reset() {
  // Ao clicar no stop, a aplicação irá parar de rodar
  state.isRunning = false

  // Após parar, remover a classe 'running' da aplicação
  document.documentElement.classList.remove('running')

  // Ao parar, retorne a aplicação a seu estado inicial
  timer.updateDisplay()
  sounds.buttonPress.play()
};

export function addFiveMinutes() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes += 5

  // Criando validação para que o 'minutes' não passe de 60
  if (minutes > 60) {
    minutes = 60
  }

  timer.updateDisplay(minutes, seconds)
  sounds.buttonPress.play()
};

export function removeFiveMinutes() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes -= 5

  if (minutes < 0) {
    return
  }

  timer.updateDisplay(minutes, seconds)
  sounds.buttonPress.play()
};

export function toggleMusic(sound, button) {

  if (state.currentPlaying === sound) {
    sound.pause()
    button.classList.remove('playing')
    state.currentPlaying = null
    return
  }

  // Pausa qualquer música que esteja tocando no momento
  if (state.currentPlaying) {
    state.currentPlaying.pause()
    const currentButton = document.querySelector('.playing')

    if (currentButton) {
      currentButton.classList.remove('playing')
    }
  }

  /* Tocar a nova música e adicionar a classe
  'playing' ao botão */
  sound.play()
  button.classList.add('playing')
  state.currentPlaying = sound
};

export function forestSound() {
  const button = document.querySelector('.forest')
  toggleMusic(sounds.forestAudio, button)
};

export function rainSound() {
  const button = document.querySelector('.rain')
  toggleMusic(sounds.rainAudio, button)
};

export function coffeeShopSound() {
  const button = document.querySelector('.coffeeshop')
  toggleMusic(sounds.coffeeShopAudio, button)
};

export function fireplaceSound() {
  const button = document.querySelector('.fireplace')
  toggleMusic(sounds.fireplaceAudio, button)
};