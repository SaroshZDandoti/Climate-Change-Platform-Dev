
// function calc()
// {
//     var Electricity, Petrol ,Diesel ,LPG;
//     var SUM;

//     Electricity = parseInt(document.getElementById("Electricity").value);
//     Petrol = parseInt(document.getElementById("Petrol").value);
//     Diesel = parseInt(document.getElementById("Diesel").value);
//     LPG = parseInt(document.getElementById("LPG").value);

//    SUM = Electricity * 0.85 + Petrol * 2.296  + Diesel * 2.653 +  LPG * 2.983  ;
//    document.getElementById("answer").value = SUM;


// }
function checkButton() {   

var co2 = 0;
var electricity = document.querySelector('input[name="houseelec"]:checked' );
var gas = document.querySelector('input[name="housegas"]:checked' );
var ncars =  document.querySelector('input[name="ncars"]:checked' );
var mileage = document.querySelector('input[name="mileage"]:checked' );

if(electricity != null) {   
          if ( electricity.value == 'SMALLHOUSE' )
             co2 = co2 + 0.93;  //tones of co2
          else if ( electricity.value == 'MEDIUMHOUSE' )
              co2 = co2 + 1.48;
          else if ( electricity.value == 'LARGEHOUSE' )
              co2 = co2 + 2.16;
}  

if(gas != null) {   
    if ( gas.value == 'smallgas' )
       co2 = co2 + 2.44;  //tones of co2
    else if ( gas.value == 'medgas' )
        co2 = co2 + 3.65;
    else if ( gas.value == 'largegas' )
        co2 = co2 + 5.48;
} 



if(ncars != null) {   
  // lol do nothing , we will use per car 
} 




if(mileage != null) {   
    if ( mileage.value == '0miles' )
       co2 = co2 + 0 ;  //tones of co2
    else if ( mileage.value == 'lowmiles' )
        co2 = co2 + 2.45;
    else if ( mileage.value == 'avgmiles' )
        co2 = co2 + 3.68;
    else if ( mileage.value == 'highmiles' )
        co2 = co2 + 4.9;
} 
    
alert(co2);
 document.getElementById("co2").value = co2;


 }
