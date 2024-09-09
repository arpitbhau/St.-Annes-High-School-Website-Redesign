// JAI SHREE RAM


// document.querySelector("form").addEventListener("submit" , e => {
//     e.preventDefault()
//     alert("Form is being Submitted.")
// })


function expandPost() {

    let animating = false


    document.querySelector(".expandPost").addEventListener("click" , function () {

        if (!animating) {

            animating = true

            gsap.set(".expandedPost" , {display: "flex" , scale: 1 , opacity: 1})
        
            let tl = gsap.timeline()
    
    
            tl.from(".expandedPost" , {
                borderRadius: "1000px" ,
                ease: Expo.easeOut ,
                duration: 1
            } , "a")
    
            tl.from(".expandedPost" , {
                scale: 0 ,
                ease: Expo.easeOut ,
                duration: 1 , 
                onComplete: function () {
                    animating = false
                }
            } , "a")
        }

    })

    document.querySelector(".closePost").addEventListener("click" , function () {

        if (!animating) {

            animating = true

            let tl = gsap.timeline()
        
        
            tl.to(".expandedPost" , {
                borderRadius: "1000px" ,
                ease: Expo.easeInOut ,
                duration: 1
            } , "a")
            
            tl.to(".expandedPost" , {
                scale: 0 ,
                ease: Expo.easeInOut ,
                duration: 1
            } , "a")
    
            tl.to(".expandedPost" , {
                opacity: 0 ,
                ease: Expo.easeInOut ,
                duration: 1 , 
                onComplete: function () {
                    animating = false
                }
            })
            
            tl.set(".expandedPost" , {display: "none" , scale: 1 , opacity: 1 , borderRadius: "0px"})
        }

        
    })

}

function openPreview() {

    let opened = false

    function select(el) {
        return document.querySelector(el)
    }


    select(".previewBtn").addEventListener("click" , () => {
        if (!opened) {
            select(".previewContainer").style.display = "flex"
            opened = true
        }
        else if (opened) {
            select(".previewContainer").style.display = "none"
            opened = false
        }
    })





}


expandPost()
openPreview()