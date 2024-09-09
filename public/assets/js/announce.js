// Jai Shree Ram


function expandPost() {

    let animating = false
    

    document.querySelectorAll(".post")
    .forEach((elem) => {

        elem.addEventListener("click" , function (e) {

            e.stopPropagation()

            let postElem = (e.target.parentElement.parentElement.id)
            let ePostElem = `#e${postElem}`


            if (!animating && e.target.classList[0] === "expandPost") {


                animating = true
    
                gsap.set(ePostElem , {display: "flex" , scale: 1 , opacity: 1})
            
                let tl = gsap.timeline()
        
        
                tl.from(ePostElem , {
                    borderRadius: "1000px" ,
                    ease: Expo.easeOut ,
                    duration: 1
                } , "a")
        
                tl.from(ePostElem , {
                    scale: 0 ,
                    ease: Expo.easeOut ,
                    duration: 1 , 
                    onComplete: function () {
                        animating = false
                    }
                } , "a")
            }
    
        })
    })



    document.querySelectorAll(".closePost")
    .forEach((elem) => {

        elem.addEventListener("click" , function (e) {


            let postElem = this.parentElement.id.replace("e" , "")

            let ePostElem = `#${this.parentElement.id}`
            


            if (!animating >= 0) {
                
    
                animating = true
    
                let tl = gsap.timeline()
        
        
                tl.to(ePostElem.replace("#ee" , "#e") , {
                    borderRadius: "1000px" ,
                    ease: Expo.easeInOut ,
                    duration: 1
                } , "a")
                
                tl.to(ePostElem.replace("#ee" , "#e") , {
                    scale: 0 ,
                    ease: Expo.easeInOut ,
                    duration: 1
                } , "a")
        
                tl.to(ePostElem.replace("#ee" , "#e") , {
                    opacity: 0 ,
                    ease: Expo.easeInOut ,
                    duration: 0 , 
                    onComplete: function () {
                        animating = false
                    }
                })
                
                tl.set(ePostElem.replace("#ee" , "#e") , {display: "none" , scale: 1 , opacity: 1 , borderRadius: "0px"})
            
            
            }
    
        })

    })


}


expandPost()