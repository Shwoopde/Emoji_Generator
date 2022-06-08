let emojiArray = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]
const emojiDiv = document.getElementById("emoji-container")
const emojiButton = document.getElementById("emoji-button")
const emojiButtonReset = document.getElementById("emoji-button-reset")
const slider = document.getElementById("emoji-slider")
const sliderValue = document.getElementById("emoji-number-value")

//set emojiDiv placeholder text
emojiDiv.innerHTML = "What emoji will you get?!"


//display slider number on sliderValue
slider.addEventListener("input", function(){
    sliderValue.innerHTML = slider.value
})

//when Generate button is clicked create emojis based on slider value
emojiButton.addEventListener("click", function(){
    emojiDiv.innerHTML = ""
    for(let i = 0; i < slider.value; i++){
        let randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)]
        //if 5 emojis are created in a row, create a new line
        if( i % 5 === 0){
            emojiDiv.innerHTML += "<br>"
            emojiDiv.innerHTML += randomEmoji


        }else{
            emojiDiv.innerHTML += randomEmoji
        }
    }
})



//reset the div on click
emojiButtonReset.addEventListener("click", function(){
    emojiDiv.innerHTML = "What emoji will you get?!"
})

