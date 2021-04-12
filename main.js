const btn = document.querySelector(".btn");
const div = document.querySelector(".food");
const divTwo = document.querySelector(".two")


const foods = ["Zróbcie sami śmierdzące lenie", "Zjedzcie picke", "Może wypasiony burgerek?", "Ramen!!!!", "Makaronik brzmi spoczko", "Weźcie piwo i elo",
    "Może sushi z żabki jest na promce?", "KFC", "McDonaldsik", "Wege"
]

const drawFood = () => {
    const optionOne = foods[Math.floor(Math.random() * foods.length)];
    div.textContent = optionOne;
    setTimeout(function () {
        btn.classList.add("two")
    }, 2000);
}

const anotherFunction = () => {
    divTwo.classList.add("active")
}

btn.addEventListener("click", drawFood)
btn.addEventListener('mouseout', anotherFunction)



const btnsTwo = [...document.querySelectorAll(".two button")];

const anotherAnotherFunction = (e) => {
    if (e.target === btnsTwo[0]) {
        const foods = ["pierogsy", "pizzka", "ramen", "sushi", "curry", "leczo", "tajska zupka", "chleb", "gofry",
            "szakszuka", "jajecznica", "jajochlebki", "lasagne", "pierogi leniwe jak wy", "papryki faszerowane",
            "Khinkali", "Mielone", "Foundant", "Risotto", "Kebs", "Butter chicken", "Empanada"
        ]

        const divDyi = document.querySelector(".dyi")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divDyi.classList.add("active")
            divDyi.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[1]) {
        const foods = ["włoska- ta co zawsze", "amerykańska- dominosik"]

        const divPizza = document.querySelector(".pizza")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divPizza.classList.add("active")
            divPizza.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[2]) {
        const foods = ["rednek", "karmnik", "tylko nie McDonald!!", "Burger Stacja", "American Burger",
            "SurfBurger", "Pani Burger", "AiOli", "American Stars"
        ]

        const divBurger = document.querySelector(".burger")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divBurger.classList.add("active")
            divBurger.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[3]) {
        const foods = ["Meso", "Ramen Forum", "Koi Koi", "Mami Sushi"]

        const divRamen = document.querySelector(".ramen")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divRamen.classList.add("active")
            divRamen.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[4]) {
        const foods = ["tu trzeba dopisać jakieś makaroniarnie"]

        const divPasta = document.querySelector(".pasta")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divPasta.classList.add("active")
            divPasta.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[5]) {
        const foods = ["Lech", "Żywiec", "Tyskie IPA", "Tyskie APA", "Tyskie Beligijskie", "Miłosław",
            "Somersby", "Reddsik", "Desperadosik", "Captain Jack"
        ]

        const divBeer = document.querySelector(".beer")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divBeer.classList.add("active")
            divBeer.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[5]) {
        const foods = ["Lech", "Żywiec", "Tyskie IPA", "Tyskie APA", "Tyskie Beligijskie", "Miłosław",
            "Somersby", "Reddsik", "Desperadosik", "Captain Jack"
        ]

        const divBeer = document.querySelector(".beer")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divBeer.classList.add("active")
            divBeer.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[6]) {
        const foods = ["Kubełek", "Twister Box", "Mega Pocket Box", "Grander Box", "Longer Box", "Filler Box",
            "Cheeseburger Box", "Zinger Burger Box", "Quritto Box", "Kentucky Gold Wrapper Box", "Ryż i Bites Sweet Chilli Grande",
            "Ryż i Bites Orientalny Teriyaki Grande", "Ryż i Bites Pikantna Salsa Grande", "Szejczek", "Burger Halloumi Menu"
        ]

        const divKFC = document.querySelector(".kfc")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divKFC.classList.add("active")
            divKFC.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[7]) {
        const foods = ["coś z nowej oferty", "kartofelki", "Big Mac", "Podwójny McRoyal Pikantny", "Podwójny McRoyal",
            "WieśMac", "McChicken", "McWrap", "McDouble", "Cheeseburger", "Kurczakburger", "Chikker", "Hamburger", "Żalapinto", "kuponiki", "McZestaw Podwójny dla grubasów"
        ]

        const divMc = document.querySelector(".mc")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divMc.classList.add("active")
            divMc.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[8]) {
        const foods = ["House Of Seitan", "Krowarzywa", "Avocado"]

        const divVege = document.querySelector(".vege")
        const drawFood = () => {
            const optionOne = foods[Math.floor(Math.random() * foods.length)];
            divVege.classList.add("active")
            divVege.textContent += optionOne;
        }
        drawFood()
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    } else if (e.target === btnsTwo[9]) {
        const divSushi = document.querySelector(".sushi")
        divSushi.classList.add("active")
        divSushi.textContent = "Sorry memory, nie znam susharni"
        for (let i = 0; i < btnsTwo.length; i++) {
            btnsTwo[i].classList.add("two")
        }
    }
}


btnsTwo.forEach(btns => btns.addEventListener('click', anotherAnotherFunction))