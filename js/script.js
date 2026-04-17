const pesoConst=document.getElementById("Peso");
const alturaConst=document.getElementById("Altura");
const Imagen=document.getElementById("Img");
const Resultado=document.getElementById("Resultado");
const Descripcion= document.getElementById("Descripcion");

function indice(){
   if(pesoConst.value=="" || alturaConst.value==""){
      alert("Debes Ingresar todos los valores")
      return
   }else{
      let resultadoDeInput=0
      let mPeso=parseFloat(pesoConst.value)
      let mAltura=parseFloat(alturaConst.value)
      if (mAltura==0 || mPeso==0){
         alert("Debes darle valor a los valores")
         return
      }
      resultadoDeInput = (mPeso) / (mAltura * mAltura)
      Resultado.innerText="Tu Indice de Masa Corporal es de: "+ resultadoDeInput.toFixed(2)
      
      if(resultadoDeInput <=16){
         Imagen.src="img/Peso muy Bajo.png"
         Descripcion.innerText="Tu Peso Es Muy Bajo"
      }else if(resultadoDeInput<=18.5){
         Imagen.src="img/Peso bajo.png"
         Descripcion.innerText="Estas Bajo de Peso"
      }else if(resultadoDeInput<=24.9){
         Imagen.src="img/Peso optimo.png"
         Descripcion.innerText="Estas En Peso Optimo"
      }else if(resultadoDeInput<=29.9){
         Imagen.src="img/Sobre peso.png"
         Descripcion.innerText="Estas En Sobre peso"
      }else if(resultadoDeInput<=34.9){
         Imagen.src="img/Obeso.png"
         Descripcion.innerText="Estas Obeso"
      }else {
         Imagen.src="img/Muy Obeso.png"
         Descripcion.innerText="Estas Muy Obeso"
      }
   }
}

function cambiarColor() {
      if(resultadoDeInput <=16){
         document.body.classList.toggle("Color1")
      }else if(resultadoDeInput<=18.5){
         document.body.classList.toggle("Color2")
      }else if(resultadoDeInput<=24.9){
         document.body.classList.toggle("Color3")
      }else if(resultadoDeInput<=29.9){
         document.body.classList.toggle("Color4")
      }else if(resultadoDeInput<=34.9){
         document.body.classList.toggle("Color5")
      }else {
         document.body.classList.toggle("Color6")
      }
}

Resultado.addEventListener("click", cambiarColor);
