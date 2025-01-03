window.addEventListener("load",()=>{
    

    const form = document.querySelector("form.reservation")

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log("Acabas de enviar el formulario");
        const name = document.querySelector('input#name')
        
        if(name.value = "" || name.value.length < 3){
            alert("No tiene nombre ó tiene menos de tres caracteres")
        }
      
            
    })

    const email = document.querySelector("input#email")

    email.addEventListener("focus", ()=>{
        console.log("miguelyehudi12@gmail.com");
        
    })
        
    })
