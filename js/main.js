$("nav.about-barras").click(function(){
    $("section.more-stuff").toggleClass("initial-pos");
    $("img.barras").toggleClass("hide");
    ////$("section.more-stuff>h2.title").attr('data-aos', 'fade-right')
})

function toggleClass(){
    var ele = document.querySelector("section.more-stuff")
    var ele2 = document.querySelector("img.barras")

    ele.classList.toggle("initial-pos")
    ele2.classList.toggle("hide")
}

//$("nav.about-barras").click();

const text = document.querySelector('.text p');
        text.innerHTML = text.innerText.split("").map(
            (char,i) =>{
                return `<span style="transform:rotate(${i * 16}deg)">${char}</span>`
            }
            ).join("")
            console.log("echo")


let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);