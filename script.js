
  const diaDigitado = document.querySelector("#dia");
  const mesDigitado = document.querySelector("#mes");
  const anoDigitado = document.querySelector("#ano");

  let erroDia = document.querySelector("main .day");
  let erroMes = document.querySelector("main .month");
  let erroAno = document.querySelector("main .year");

  const inputErroFormatacao = document.querySelectorAll('.dia-mes-ano');
  const labelErroFormatacao = document.querySelectorAll('.label-padrao');

  const data = new Date();
  const diaData = data.getDate();
  const mesData = data.getMonth();
  const anoData = data.getFullYear();

  let resDia = document.querySelector("span.dias");
  let resMes = document.querySelector("span.mes");
  let resAno = document.querySelector("span.ano");
  
  const divResultadoErro = document.querySelectorAll('.divResultadoErro');

  const botaoCalcular = document.querySelector(".btn");
 
 botaoCalcular.addEventListener("click",()=>{

  let valDiaMes = validaDiaMes();
  let valMes = validaMes();
  let valAno = validaAno();
  
  if(valDiaMes && valMes && valAno){
    removerErro();

    if(mesDigitado.value>mesData){
      resMes.innerText = mesDigitado.value-mesData;
    }else{
      resMes.innerText =mesData-mesDigitado.value;
    };

    if(diaDigitado.value>diaData){
      resDia.innerText = diaDigitado.value-diaData;
    }else{
      resDia.innerText =diaData-diaDigitado.value;
    };    
    
    resAno.innerText = anoData - anoDigitado.value;        
    
  }else{ 
    
    if (valDiaMes) {          
      
    }else{
      erroDia.innerText = 'Must be a valid day';
    }

    if (valMes) {          
      
          }else{
            erroMes.innerText = 'Must be a valid month';
          }
          if (valAno) {
            
          }else{
            erroAno.innerText = 'Must be a valid past';
          }
          
   
    addErro();

    if(diaDigitado.value==='' && erroDia.innerHTML==''){
        erroDia.innerHTML ="This field is requerid";
      }
      if(mesDigitado.value==='' && erroMes.innerHTML==''){
      erroMes.innerHTML ="This field is requerid";
            }           
                if(anoDigitado.value==='' && erroAno.innerHTML==''){
                erroAno.innerHTML ="This field is requerid";
                }
                    
  }
})

function addErro(){

  inputErroFormatacao.forEach((i) => {
    i.classList.add("input-erro");
    i.classList.add("input-erro");
    i.classList.add("input-erro");
  })

  labelErroFormatacao.forEach((l) => {
    l.classList.add("label-erro");
    l.classList.add("label-erro");
    l.classList.add("label-erro");
  })

}

function removerErro() {
     
  divResultadoErro.forEach((div) => {
      //div.setAttribute('style', 'display:none');
      div.innerHTML='';
  
      })
  
      inputErroFormatacao.forEach((i) => {
        
        i.classList.remove("input-erro");
        i.classList.remove("input-erro");
        i.classList.remove("input-erro");
      })
  
      labelErroFormatacao.forEach((l) => {
        l.classList.remove("label-erro");
        l.classList.remove("label-erro");
        l.classList.remove("label-erro");
      })
  
    }
    function validaMes(){
      if(mesDigitado.value<=12){
        return true;
      }else{
        return false;
      }
    }
    function validaAno(){
      if(anoDigitado.value<=anoData){
        return true;
      }else{
        return false;
      }

    }
function validaDiaMes(){        
switch(mesDigitado.value){
  case "01": case "03": case "05": case "07": 
  case "08": case "10": case "12":
if(diaDigitado.value > 31){
return false;
}
else {
return true;
}

  break ;
  case "04": case '06': case '09':  case '11':
   if(diaDigitado.value > 30){
    return false;   
   }else{
    return true;
   }
   break ;

  case "02":
   if( (anoDigitado.value%400 == 0) || (anoDigitado.value%4==0 && anoDigitado.value%100!=0) )
    if(diaDigitado.value  == 29){     
      return true;
    }
         
    if(diaDigitado.value <= 28){
      
      return true;
    }
      else{
            return false;
      }
     
     break;
     default:                       
     console.log("Desculpe, estamos sem nenhuma ");

 }

      
    }