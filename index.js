let w = document.getElementById("weight")
let h = document.getElementById("height")
let btn = document.querySelector(".btn")
let point = document.querySelector(".pointer")
let res = document.getElementById("results")
let gl = document.getElementById("goal")



/// main function
function cal(){
    let x = (parseInt((w.value)*100))/100
    let y = parseInt(h.value)
    y = y/100
    console.log(x,y, typeof(x), typeof(y))
    let b = (x)/((y)**2)
    console.log(b)
    b = (parseInt(b*100))/100

    if(b==1.85){
        point.style.rotate = "35deg"
        point.style.transition = "300ms ease"
    }else if(b==24.9){
        point.style.rotate = "70deg"
        point.style.transition = "300ms ease"
    }else if(b==30){
        point.style.rotate = "107deg"
        point.style.transition = "300ms ease"
    }else if(b==34.9){
        point.style.rotate = "143deg"
        point.style.transition = "300ms ease"
    }else if(b>43){
        point.style.rotate = "180deg"
        point.style.transition = "300ms ease"
    }

    if(b<18.5){
        z = (b/18.5)*35
        // console.log(z)
        point.style.rotate = z+"deg"
        point.style.transition = "300ms ease"
        let goal = (parseInt((((18.5)*(y**2))-x)*100))/100
        console.log(goal + "kg more")
        res.innerHTML = "Your BMI is "+ b
        gl.innerHTML = "You need to gain "+ goal +"Kg more"
        console.log("Underweight")
    }else if(b<24.9){
        z = ((b-18.5)/6.4)*36
        // console.log(z)
        point.style.rotate = (z+36)+"deg"
        point.style.transition = "300ms ease"
        res.innerHTML = "Your BMI is "+ b +" and it's Normal"
        gl.innerHTML = "&ensp; &ensp;"
        console.log("Normal")
    }else if(b<30){
        z = ((b-24.9)/5.1)*37
        point.style.rotate = (z+71)+"deg"
        point.style.transition = "300ms ease"
        let goal = (parseInt((x-((24.9)*(y**2)))*100))/100
        console.log(goal +"kg more")
        res.innerHTML = "Your BMI is "+ b 
        gl.innerHTML = "You need to loose "+ goal +"Kg more"
        console.log("Overweight")
    }else if(b<34.9){
        z = ((b-30)/4.9)*36
        point.style.rotate = (z+107)+"deg"
        point.style.transition = "300ms ease"
        let goal = (parseInt((x-((24.9)*(y**2)))*100))/100
        console.log(goal +"kg more")
        res.innerHTML = "Your BMI is "+ b
        gl.innerHTML = "You need to loose "+ goal +"Kg more"
        console.log("Obese")

    }else if(b<43){
        z = ((b-34.9)/8.1)*37
        point.style.rotate = (z+143)+"deg"
        point.style.transition = "300ms ease"
        let goal = (parseInt((x-((24.9)*(y**2)))*100))/100
        console.log(goal +"kg more")
        res.innerHTML = "Your BMI is "+ b
        gl.innerHTML = "You need to loose "+ goal +"Kg more"
        console.log("Obese")
    }else if(b>43){
        point.style.rotate = (180)+"deg"
        point.style.transition = "300ms ease"
        let goal = (parseInt((x-((24.9)*(y**2)))*100))/100
        console.log(goal +"kg more")
        res.innerHTML = "Your BMI is "+ b
        gl.innerHTML = "You need to loose "+ goal +"Kg more"
        console.log("Obese")
    }
}