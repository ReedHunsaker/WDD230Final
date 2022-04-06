

fetch("js/temple.json")
.then(response => {
    return response.json()
})
.then(jsonData => getTempleData(jsonData))

function getTempleData(jsonData) {
    console.log(jsonData)
    let templeData = jsonData["Temples"]
    for (const x of Array(4).keys()) {
        currentTemple = templeData[x]
        let name = currentTemple["name"]
        let closure = currentTemple["closure"]
        let history = currentTemple["history"]
        let img = currentTemple["img"]
        let ordinance = currentTemple["ordinance"]
        let services = currentTemple["services"]
        let telephone = currentTemple["telephone"]
        let tempName = document.getElementById(`name${x}`)
        tempName.textContent = name
        let tempimg = document.getElementById(`img${x}`)
        let newimg = document.createElement('img')
        newimg.src = `../img/${img}`
        newimg.alt = "templeimg"
        tempimg.appendChild(newimg)
        let temptele = document.getElementById(`telephone${x}`)
        temptele.textContent = telephone
        let tempOrdinance = document.getElementById(`ordinance${x}`)
        tempOrdinance.textContent = ordinance
        let temphistory = document.getElementById(`history${x}`)
        for (const y of Array(3).keys()) {
            let newListElement = document.createElement('li')
            newListElement.textContent = history[y]
            temphistory.appendChild(newListElement)
        }
        let tempServices = document.getElementById(`services${x}`)
        for (const y of Array(3).keys()) {
            let newListElement = document.createElement('li')
            newListElement.textContent = services[y]
            tempServices.appendChild(newListElement)
        }
        let tempClosure = document.getElementById(`closures${x}`)
        for (const y of Array(closure.length).keys()) {
            let newListElement = document.createElement('li')
            newListElement.textContent = closure[y]
            tempClosure.appendChild(newListElement)
        }
        
    }
}

const button = document.querySelectorAll(".btn")
let activeList = [0,0,0,0]


if(!localStorage.getItem("buttons")){
    saveLikes()
    LoadLikes()
} else {
    LoadLikes()
}


for (const x of Array(4).keys()) {
    button[x].addEventListener('click', function() {
        
        button[x].classList.toggle('liked')
        if (activeList[x] == 0) {
            activeList[x] = 1
        } else {
            activeList[x] = 0
        }
        saveLikes()
    })
}


function saveLikes() {
    localStorage.setItem("buttons", activeList.toString())
}

function LoadLikes() {
    let savedButtons = localStorage.getItem("buttons").replace(',', '').replace(',','').replace(',','')
    for (const x of Array(4).keys()) {
        activeList[x] = savedButtons[x]
        if (activeList[x] == 1){
            button[x].classList.toggle('liked')
        }
    }
    
    console.log(activeList)
    console.log(savedButtons)
}


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
