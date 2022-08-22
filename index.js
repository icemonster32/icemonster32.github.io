game = () => {

    const arrList = ['Rock', 'Paper', 'Scissor',]

    const getRandom = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length)

        const item =  arr[randomIndex]

        return item
    }

    const result = getRandom(arrList)
    console.log(result)
}
game()