// $("nav.about-barras").click(function(){
//     $("section.more-stuff").toggleClass("initial-pos");
//     $("img.barras").toggleClass("hide");
//     ////$("section.more-stuff>h2.title").attr('data-aos', 'fade-right')
// })

//$("nav.about-barras").click();

const text = document.querySelector('.text p');
        text.innerHTML = text.innerText.split("").map(
            (char,i) =>{
                return `<span style="transform:rotate(${i * 16}deg)">${char}</span>`
            }
            ).join("")
            console.log("echo")