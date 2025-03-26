import { Oct8 } from "./Oct8/Oct8/Oct8.js"

var oct = new Oct8()

// oct.CreateObjectFactory((props)=>{
// document.getElementById("tela").innerHTML+=props+"<br>"
// } , "Tela do site")

function teste(){
// oct.AppendObjectFacyotyTo("Tela do site", "Vejamos se está correto")
alert("oi")
}

oct.CreateNewRoute("/",teste)



oct.CreateNewRoute("#teste",teste)





oct.CreateNewRoute("#teste2", teste)






oct.LoadRoutes()








