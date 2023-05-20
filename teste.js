let mes ='01';
let dia ='22';
let ano="2021";


function ver(){
    
switch(mes){
  case "01": case "03": case "05": case "07": 
  case "08": case "10": case "12":
if(dia > 31){
return false;
}
else {
return true;
}

  break ;
  case "04": case '06': case '09':  case '11':
   if(dia> 30){
    return false;   
   }else{
    return true;
   }
   break ;

  case "02":
   if( (ano%400 == 0) || (ano%4==0 && ano%100!=0) )
    if(dia  == 29){     
      return true;
    }
         
    if( dia <= 28){
      
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
const resultado = ver();
console.log(resultado)