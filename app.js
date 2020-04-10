document.addEventListener('DOMContentLoaded', () => {


    //card Options
    const cardArray = [{
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'chessburger',
            img: 'images/chessburger.jpeg'
        },
        {
            name: 'chessburger',
            img: 'images/chessburger.jpeg'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.jpeg'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.jpeg'
        },
        {
            name: 'icecream',
            img: 'images/icecream.jpg'
        },
        {
            name: 'icecream',
            img: 'images/icecream.jpg'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.jpg'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.jpg'
        },
        {
            name: 'pizza',
            img: 'images/pizza.jpg'
        },

        {
            name: 'pizza',
            img: 'images/pizza.jpg'
        },


    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChoseen = []
    var cardChoseenId = []
    var cardsWon = []

    //create your board 
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)

        }
    }


    //check for matches 
    function chechmatches() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChoseenId[0]
        const optionSecondId = cardChoseenId[1]
        if (cardChoseen[0] === cardChoseen[1]) {
            alert('you found match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionSecondId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardChoseen)

        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg')
            cards[optionSecondId].setAttribute('src', 'images/blank.jpg')
            alert('sory , try again')
        }
        cardChoseen = []
        cardChoseenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congraulation, you found them all'
        }
    }

    //flip yor crad
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardChoseen.push(cardArray[cardId].name)
        cardChoseenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChoseen.length === 2) {
            setTimeout(chechmatches, 500)
        }

    }
    createBoard()
})