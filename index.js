/* Game function */
game = () => {
   /* Query selectors */
   const rockBtn = document.querySelector(".rock")
   const paperBtn = document.querySelector(".paper")
   const scissorBtn = document.querySelector(".scissor")

   /* Array player and bot */
   const arrPlayer = [rockBtn, paperBtn, scissorBtn]
   const arrBot = ["Rock", "Paper", "Scissor"]

   /* For each arrow path function */
   arrPlayer.forEach((option) => {
      /* Onclick event function */
      option.onclick = () => {
         const randomIndex = Math.floor(Math.random() * arrBot.length)
         const item = arrBot[randomIndex]
         const demo = (document.querySelector("#demo").innerHTML = item)

         winner(option.innerHTML, demo)
      }

      winner = (player, bot) => {

         /* Determine the winner */
         if (player === bot) {
            document.querySelector("#demo2").innerHTML = "Tie"
         } else if (player == "Rock") {
            if (bot == "Paper") {
               document.querySelector("#demo2").innerHTML = "Bot Win"
            } else {
               document.querySelector("#demo2").innerHTML = "Player Win"
            }
         } else if (player == "Scissor") {
            if (bot == "Rock") {
               document.querySelector("#demo2").innerHTML = "Bot Win"
            } else {
               document.querySelector("#demo2").innerHTML = "Player Win"
            }
         } else if (player == "Paper") {
            if (bot == "Scissor") {
               document.querySelector("#demo2").innerHTML = "Bot Win"
            } else {
               document.querySelector("#demo2").innerHTML = "Player Win"
            }
         }
      }
   })
}
game()
