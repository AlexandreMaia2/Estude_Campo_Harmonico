import { Oct8 } from "./Oct8/Oct8/Oct8.js"

var oct = new Oct8()

oct.CreateObjectFactory((props)=>{
document.getElementById("tela").innerHTML+=props+"<br>"
} , "Tela do site")

oct.CreateNewRoute("/",()=>{
    oct.AppendObjectFacyotyTo("Tela do site", "Faça o seu login")
})  // Rota inicial 


oct.CreateNewRoute("teste",()=>{
    oct.AppendObjectFacyotyTo("Tela do site", "Vejamos se está correto")
})

oct.CreateNewRoute("teste2", ()=>{
    oct.AppendObjectFacyotyTo("Tela do site", "Estamos criando um site 😎")
})

oct.LoadRoutes()








