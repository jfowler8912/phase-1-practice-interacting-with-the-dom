document.addEventListener('DOMContentLoaded',(event) => {
    const counterVariable = document.getElementById("counter")
    console.log(counterVariable)
    const minusButton = document.getElementById("minus")
    const plusButton = document.getElementById("plus")
    const heartButton = document.getElementById("heart")
    const pauseButton = document.getElementById("pause")
    const numberLiked = []
    let likes 

    // element.addEventListener("click", myFunction);
    let intervalID = setInterval(() => counterVariable.innerText = parseInt(counterVariable.innerText)+1,1000)
minusButton.addEventListener("click",  updateMinus)
function updateMinus() {
    counterVariable.innerText = parseInt(counterVariable.innerText)-1
}  
plusButton.addEventListener("click",  updatePlus)
function updatePlus() {
    counterVariable.innerText = parseInt(counterVariable.innerText)+1
}           
heartButton.addEventListener("click", updateHeart)
function updateHeart() {
    const ulItem = document.querySelector(".likes")
    let li = document.createElement('li')  
    let number = counterVariable.textContent
    li.setAttribute("id", number);
    if (numberLiked.includes(number)) {
        let matchingLi = document.getElementById(number)
        matchingLi.textContent = `${number} has been liked ${likes +=1} times.`     
    } else {
        li.textContent = `${number} has been liked ${likes =1} time.`
        ulItem.append(li)
        numberLiked.push(number)
    }   
}
pauseButton.addEventListener("click", updatePause)
function updatePause () {
    const pauseKey = document.querySelector('#pause')
    
}

})
