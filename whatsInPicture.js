'use strict'

var gQuests = createQuests()
var gCurrQuestIdx = 0

function initGame() {
  gCurrQuestIdx = 0

  var elH1 = document.querySelector('h1')
  elH1.innerText = 'What\'s in the Picture?'
  renderQuest()
}

function renderQuest() {
  const elQuest = document.querySelector('.quest')

  elQuest.querySelector('img').src = `img/${gQuests[gCurrQuestIdx].id}.jpg`

  var opts = gQuests[gCurrQuestIdx].opts
  var strHTML = ''

  for (var i = 0; i < opts.length; i++) {
    // prettier-ignore
    strHTML += `<button class="opt" onclick="checkAnswer(${i})">${opts[i]}</button>\n`
  }

  elQuest.querySelector('.buttons').innerHTML = strHTML
}

function checkAnswer(optsIdx) {
  if (optsIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
    
    if (gQuests[gCurrQuestIdx].id === gQuests.length) {
      var elH1 = document.querySelector('h1')
      elH1.innerText = 'Victorious! 🎉'

      const elStart = document.querySelector('.startBtn')
      elStart.innerText = 'Restart'
      elStart.style.color = 'orange'


    } else {
      gCurrQuestIdx++
      renderQuest()
    }
  }
}

function createQuests() {
  return [
    {
      id: 1,
      opts: ['The Golden Gate Bridge, San Francisco', 'tower Bridge, London'],
      correctOptIndex: 0,
    },
    {
      id: 2,
      opts: ['The Myconos Isle Coast, Greece', 'The Amalfi Coast, Italy'],
      correctOptIndex: 1,
    },
    {
      id: 3,
      opts: [
        'Cape Town Opera House, South Africa',
        'Sydney Opera House, Australia',
      ],
      correctOptIndex: 1,
    },
    {
      id: 4,
      opts: ['Dubai, United Arab Emirates', 'Rabat, Morroco'],
      correctOptIndex: 0,
    },
  ]
}
