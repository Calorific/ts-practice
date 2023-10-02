import './index.scss'

let currentAudio = '', currentName = ''

const cards = document.getElementById('cards')
const volumeChanger = document.getElementById('volume-changer')
const backgroundImage = document.getElementById('background-image')
backgroundImage.style.backgroundImage = `url(images/summer.jpg)`

cards.addEventListener('click', e => {
  const target = e.target.dataset.audio ? e.target : e.target.parentNode
  const audio = target.dataset.audio

  if (audio) {
    cards.querySelectorAll('.card').forEach(c => {
      c.children[0].src = `icons/${c.dataset.audio}.svg`
    })

    if (currentName === audio) {
      if (!currentAudio.paused) {
        target.children[0].src = `icons/${audio}.svg`
        currentAudio.pause()
      } else {
        target.children[0].src = 'icons/pause.svg'
        currentAudio.play()
      }
      return
    }

    backgroundImage.style.backgroundImage = `url(images/${audio}.jpg)`
    if (currentName) {
      currentAudio.currentTime = 0
      currentAudio.pause()
    }
    target.children[0].src = 'icons/pause.svg'
    currentName = audio
    currentAudio = new Audio(require(`../public/sounds/${audio}.mp3`))
    currentAudio.volume = volumeChanger.value / 100
    currentAudio.play().then(r => r)
  }
})

volumeChanger.addEventListener('input', e => {
  currentAudio.volume = e.target.value / 100
})

