// GO!

//TASK 1

var buttonToggle = document.querySelector("#nav-toggler")
var navNode = document.querySelector(".nav-menu")

var navShowing = true

var removeNav = function(){
	if (navShowing) {
		navNode.classList.add("nav-menu-hidden")
		navShowing = false
		buttonToggle.textContent = "Oh noes! Put it back!"
	}
	else {
		navNode.classList.remove("nav-menu-hidden")
		navShowing = true
		buttonToggle.textContent = "Click me and magic happens"
	}

}

buttonToggle.addEventListener("click",removeNav)


// TASK 2

var guestInput = document.querySelector("#guest1")
var ulNode = document.querySelector(".guest-list")

var addGuest = function (browserObj) {
	if (browserObj.keyCode === 13) {
		var inputValue = guestInput.value
		var liNode = document.createElement("li")
		liNode.classList.add("guest")
		liNode.textContent = inputValue
		ulNode.appendChild(liNode)
		guestInput.value = ""
	}

}

guestInput.addEventListener("keydown", addGuest)


// TASK 3

var guestInput2 = document.querySelector("#guest2")
var ulNode2 = document.querySelector(".guest-list-bonus")

var addGuestBonus = function (browserObj) {
	if (browserObj.keyCode === 13) {
		var inputValue2 = guestInput2.value
		var liNode2 = document.createElement("li")
		liNode2.classList.add("guest")
		liNode2.textContent = inputValue2
		ulNode2.appendChild(liNode2)
		guestInput2.value = ""
		var newRemoveButton = document.createElement("BUTTON")
		newRemoveButton.textContent = "X"
		liNode2.appendChild(newRemoveButton)
		var remover = function(){
			ulNode2.removeChild(liNode2)
		}
		newRemoveButton.addEventListener("click", remover)

	}

}


guestInput2.addEventListener("keydown", addGuestBonus)



