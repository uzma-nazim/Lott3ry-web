let imgArray = ["./images/Ticket(1).png", "./images/Ticket(2).png", "./images/Ticket(3).png", "./images/Ticket(4).png", "./images/Ticket(5).png"]

setInterval(() => {

    let img = document.getElementById("img")
    let random = Math.floor(Math.random() * 5)

    img.src = imgArray[random]

}, 800)



setTimeout(()=>{
    let text1 = document.querySelector(".text1")
    let textani = document.getElementById("textani")
    
    

    
    text1.innerHTML =""
    textani.innerHTML = "TO WIN"
    textani.style.animation = "text2 1s"
    textani.style.transform = " scale(1.4)"
    
    
},1000)

setTimeout(()=>{
    let animationContainer = document.getElementById("animationContainer")
    animationContainer.style.top = "-100%"
    
},2000)
setTimeout(()=>{
    
    let headinganim= document.getElementById("headinganim")
    headinganim.classList.add("animate__backInLeft")
},2000)


VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
    speed: 400
});



const Toggel = () => {

    let mobilemennu = document.querySelector(".mobilemennu")

    let isShow = true


    if (mobilemennu.style.visibility === "hidden") {
        mobilemennu.style.visibility = "visible"
        mobilemennu.style.transform = " scale(1)"
    }
    else {
        mobilemennu.style.visibility = "hidden"
        mobilemennu.style.transform = " scale(0.3)"


    }



}
