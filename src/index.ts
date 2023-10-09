import './index.scss'

let currentAudio: HTMLAudioElement, currentName = ''

const cards = document.getElementById('cards')!
const volumeChanger = document.getElementById('volume-changer')! as HTMLInputElement
const backgroundImage = document.getElementById('background-image')! as HTMLImageElement
const images = cards.querySelectorAll('.card img') as NodeListOf<HTMLImageElement>
backgroundImage.style.backgroundImage = `url(images/summer.jpg)`

const resetImages = () => {
  images.forEach((image: HTMLImageElement)  =>
      image.src = `icons/${(image.parentNode as HTMLElement).dataset.audio}.svg`)
}

const handleSameAudio = (target: HTMLImageElement, audio: string)=> {
  if (!currentAudio.paused) {
    target.src = `icons/${audio}.svg`
    currentAudio.pause()
  } else {
    target.src = 'icons/pause.svg'
    currentAudio.play().then(r => r)
  }
}

const stopCurrentAudio = () => {
  if (currentName) {
    currentAudio.currentTime = 0
    currentAudio.pause()
  }
}

const handleDifferentAudio = (image: HTMLImageElement, audio: string) => {
  image.src = 'icons/pause.svg'
  currentName = audio
  currentAudio = new Audio(require(`../public/sounds/${audio}.mp3`))
  currentAudio.volume = +volumeChanger.value / 100
  currentAudio.play().then(r => r)
}

cards.addEventListener('click', e => {
  if (!(e.target instanceof HTMLElement)) return

  const target = e.target.closest('[data-audio]') as HTMLElement
  if (!target) return

  const audio = target.dataset.audio
  if (!audio) return

  resetImages()

  const image = target.children[0] as HTMLImageElement
  if (currentName === audio)
    return handleSameAudio(image, audio)

  backgroundImage.style.backgroundImage = `url(images/${audio}.jpg)`
  stopCurrentAudio()
  handleDifferentAudio(image, audio)
})

volumeChanger.addEventListener('input', e => {
  if (!(e.target instanceof HTMLElement))
    return

  const target = e.target as HTMLInputElement
  currentAudio.volume = +target.value / 100
})
