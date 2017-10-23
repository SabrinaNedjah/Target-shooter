// Set variables
const $shooter = document.querySelector('.shooter')
const $score = $shooter.querySelector('.score .value')
const $targets = $shooter.querySelector('.targets')
let score = 0;

// Create target function
const createTarget = () => {

    // Create element
    const $target = document.createElement('div')

    // Add class and style
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 88}%`
    $target.style.left = `${Math.random() * 88}%`

    $target.addEventListener('mouseenter', () => 
        {
        //Update score
         score ++
         $score.textContent = score

        // Remove target
         $targets.removeChild($target)

        // Clear TimeOut
         window.clearTimeout(timeoutID)
         })

     //add to targets element
    $targets.appendChild($target)
    window.setTimeout(createTarget, Math.random() * 1000)

   const timeoutID = window.setTimeout(() => {
        $targets.removeChild($target)
    }, 800)
}

createTarget ()