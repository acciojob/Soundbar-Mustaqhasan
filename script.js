
const applause=new Audio("https://sfxmint.com/dl/crowd-applause-58.mp3?utm_source=chatgpt.com")
document.querySelectorAll(".btn").forEach((item)=>{
	item.addEventListener("click",()=>{
		applause.currentTime=0;
		applause.play();
	})
})


document.querySelector(".stop").addEventListener("click",()=>{
	applause.pause();
})

