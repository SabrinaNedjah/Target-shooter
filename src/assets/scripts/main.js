const $shooter = document.querySelector('.shooter')
const $score = $shooter.querySelector('.score .value')
const $targets = $shooter.querySelector('.targets')
let score = 0;

const createTarget = () => {
    //crée un element dans le dom
    const $target = document.createElement('div')
    //ajout d'une classe
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 100}%`
    $target.style.left = `${Math.random() * 100}%`
    //ajout dans la page (de la div avec la classe target dans targets)
    $targets.appendChild($target)
}

createTarget ()