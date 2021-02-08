/*
   https://dog.ceo/api/breeds/image/random
   
   https://dog.ceo/api/breed/견종/images/random
   https://dog.ceo/api/breed/shiba/images/random
*/

$(document).ready(function(){
    // $("#lab").load("https://dog.ceo/api/breeds/image/random")
    
    $("#dog").click(function(){
        /*
        $.ajax({
            url: "https://dog.ceo/api/breeds/image/random/5",
            type: "get",
            data: {},
            dataType: "json",
            success: function(result){
                
                console.log(result)
                console.log(result.status)
                
                const img = document.createElement("img")
                img.src = result.message
                $("body").append(img)
                
                
                
                
                console.log(result.message)
                for(let i = 0; i < 5; i++){
                    const img = document.createElement("img")
                    img.src = result.message[i]
                    img.width = 200
                    img.height = 200
                    $("body").append(img)
                }
            }
        })
        */
        $.ajax({
            url: "https://dog.ceo/api/breed/shiba/images/random",
            type: "get",
            data: {},
            dataType: "json",
            success: function(res){
                console.log(res)
            }
        })
    })
    
    $("#dog-form").submit(function(e){
        e.preventDefault()
        const breed = this.breed.value
        
        $.ajax({
            url: `https://dog.ceo/api/breed/${breed}/images/random`,
            type: "get",
            data: {},
            dataType: "json",
            success: function(res){
                console.log(res.message)
                document.getElementById("dog-img").src = res.message
            }
        })
    })
    
    $("#wth").click(function(){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            type: "get",
            data: {
                q: "Seoul",
                appid: "32a0600a87ab78e097d9b1e1b6bbb5fb"
            },
            dataType: "json",
            error: function(err){
                console.error(err.status)
            },
            success: function(result){
                console.log("끝")
                console.log(result)
            }
        })
    })
    
    $("#wth-form").submit(function(e){
        e.preventDefault()
        const city = this.city.value
        
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            type: "get",
            data: {
                q: city,
                appid: "32a0600a87ab78e097d9b1e1b6bbb5fb"
            },
            dataType: "json",
            error: function(err){
                console.error(err.status)
            },
            success: function(result){
                const tmax = result.main.temp_max - 273.15
                const tmin = result.main.temp_min - 273.15
                const tfel = result.main.feels_like - 273.15
                
                $("h1").text(`오늘 ${city}의 날씨는?`)
                $("p")[0].textContent = `최고온도 : ${Math.floor(tmax)}`
                $("p")[1].textContent = `최저온도 : ${Math.floor(tmin)}`
                $("p")[2].textContent = `체감온도 : ${Math.floor(tfel)}`
                
            }
        })
        
    })
    
    
    
    
});