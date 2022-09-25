const priceFuel = 7.2
const fuelPer100 = 7.8 //fuel

const milliseconds = 1000 * 60 * 60 * 24
const PricePerDay = 175; //Time

const vatTax = 1.23 //Tax

const IFonly3 = 1.15
const DLfor_les_then5 = 1.2 //If's

let number;

//D Licence
let today = new Date();
let Y = today.getFullYear();
today = Y ;
document.getElementById("DL").setAttribute("max", today);

//Slider
let slider = document.getElementById("range");
let output = document.getElementById("km");
    output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

// range to numeric
function Chengetonumber() {
  document.getElementById("range").type = 'number';
}

const CarVersionPrice = {
  1: 1,
  2: 1.3,
  3: 1.6,
  4: 2
}
const CarVersionNumber = {
  1: 20,
  2: 18,
  3: 2,
  4: 6
}

//The MAIN Function
function TheFunction() {

    const list = document.querySelector('#List').value;
    let Carversion = CarVersionPrice[list];
    const number = CarVersionNumber[list];
    let price = PricePerDay;
    price *= Carversion;


  const drivingLicense = document.querySelector('#DL').value;
  const newDrivingLicense = today - drivingLicense;

  const date_start = document.querySelector('#Firstday').value;
  const date_end = document.querySelector('#Lastday').value;
  
  const From = new Date(date_start).getTime();
  const To = new Date(date_end).getTime();
 
  const result = (To / milliseconds) - (From / milliseconds);
  
  
  const TimePrice = result * PricePerDay;
//here price for time (slider)
if (slider == 0 || drivingLicense == 0|| date_start == 0 || date_end == 0) {
  alert("Fill in all fields before submitting!!!")
  }else if (newDrivingLicense < 5) {
      if (newDrivingLicense < 3 && document.querySelector('#List').value == 4) {
          document.querySelector('#Warning_DL_under3').innerHTML = "You can't rent this car! Premium version only for Experienced drivers!";
      } else if(number > 3) {
        //Number more than 3 
          price *= DLfor_les_then5;
          const fuelCost = (slider.value / 100) * fuelPer100 * priceFuel;

          price += fuelCost;
          //here price for fuel 
          const netto = parseInt( TimePrice + price)
  
          const brutto = netto * vatTax;
          //brutto and netto prices here

          let DaysOfRent = result/milliseconds;

          document.getElementById("Result").innerHTML = `
          <h1>Raport Rent<h1><p>Distance to go: ${slider.value} Km</p><p>Days of rent: ${result} Days</p><p>Rental price: ${TimePrice} Zł</p>
          <p>Fuel consumption: ${fuelPer100} L/100km</p><p>Fuel Cost: ${fuelCost.toFixed(2)} zł</p><p>Netto cost: ${netto.toFixed(2)} zł</p><p>Brutto cost: ${brutto.toFixed(2)} Zł</p>`;

      } else if(number <= 3) {
        //Number les than or exacly 3 

        price *= DLfor_les_then5;
        const fuelCost = (slider.value / 100) * fuelPer100 * priceFuel;
        price += fuelCost;
        //here price for fuel 
        const netto = parseInt( TimePrice + price)*IFonly3;
   
        const brutto = netto * vatTax;
        //brutto and netto prices here

        let DaysOfRent = result/milliseconds;

        document.getElementById("Result").innerHTML = `
        <h1>Raport Rent<h1><p>Distance to go: ${slider.value} Km</p><p>Days of rent: ${result} Days</p><p>Rental price: ${TimePrice} Zł</p>
        <p>Fuel consumption: ${fuelPer100} L/100km</p><p>Fuel Cost: ${fuelCost.toFixed(2)} zł</p><p>Netto cost: ${netto.toFixed(2)} zł</p><p>Brutto cost: ${brutto.toFixed(2)} Zł</p>`;


      }
//DL les then 5
  } else 
//DL more then 5
  {
    if (newDrivingLicense < 3 && document.querySelector('#List').value == 4) {
        document.querySelector('#Warning_DL_under3').innerHTML = "You can't rent this car! Premium version only for Experienced drivers!";
    } else if(number > 3) {
     //Number more than 3 
        
     const fuelCost = (slider.value / 100) * fuelPer100 * priceFuel;

     price += fuelCost;
     //here price for fuel 
     const netto = parseInt( TimePrice + price)
  
     const brutto = netto * vatTax;
     //brutto and netto prices here

     let DaysOfRent = result/milliseconds;

     document.getElementById("Result").innerHTML = `
     <h1>Raport Rent<h1><p>Distance to go: ${slider.value} Km</p><p>Days of rent: ${result} Days</p><p>Rental price: ${TimePrice} Zł</p>
     <p>Fuel consumption: ${fuelPer100} L/100km</p><p>Fuel Cost: ${fuelCost.toFixed(2)} zł</p><p>Netto cost: ${netto.toFixed(2)} zł</p><p>Brutto cost: ${brutto.toFixed(2)} Zł</p>`;

    } else if(number <= 3) {
      //Number les than or exacly 3 
      const fuelCost = (slider.value / 100) * fuelPer100 * priceFuel;
      price += fuelCost;
      //here price for fuel 
      const netto = parseInt( TimePrice + price)*IFonly3;
  
      const brutto = netto * vatTax;
      //brutto and netto prices here

      let DaysOfRent = result/milliseconds;

      document.getElementById("Result").innerHTML = `
      <h1>Raport Rent<h1><p>Distance to go: ${slider.value} Km</p><p>Days of rent: ${result} Days</p><p>Rental price: ${TimePrice} Zł</p>
      <p>Fuel consumption: ${fuelPer100} L/100km</p><p>Fuel Cost: ${fuelCost.toFixed(2)} zł</p><p>Netto cost: ${netto.toFixed(2)} zł</p><p>Brutto cost: ${brutto.toFixed(2)} Zł</p>`;

    }
    
}
};

  