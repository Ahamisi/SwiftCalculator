// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let distance = ''
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      mapTypeControl: false,
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
    });
  
    new AutocompleteDirectionsHandler(map);
  }
  
  class AutocompleteDirectionsHandler {
    map;
    originPlaceId;
    destinationPlaceId;
    travelMode;
    directionsService;
    directionsRenderer;
    constructor(map) {
      this.map = map;
      this.originPlaceId = "";
      this.destinationPlaceId = "";
      this.travelMode = google.maps.TravelMode.DRIVING;
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(map);
  
      const originInput = document.getElementById("origin-input");
      const destinationInput = document.getElementById("destination-input");
      const modeSelector = document.getElementById("mode-selector");
      // Specify just the place data fields that you need.
      const originAutocomplete = new google.maps.places.Autocomplete(
        originInput,
        { fields: ["place_id"] }
      );
      // Specify just the place data fields that you need.
      const destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput,
        { fields: ["place_id"] }
      );
  
      this.setupClickListener(
        "changemode-walking",
        google.maps.TravelMode.WALKING
      );
      this.setupClickListener(
        "changemode-transit",
        google.maps.TravelMode.TRANSIT
      );
      this.setupClickListener(
        "changemode-driving",
        google.maps.TravelMode.DRIVING
      );
      this.setupPlaceChangedListener(originAutocomplete, "ORIG");
      this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
        destinationInput
      );
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
    }
    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    setupClickListener(id, mode) {
      const radioButton = document.getElementById(id);
  
      radioButton.addEventListener("click", () => {
        this.travelMode = mode;
        this.route();
      });
    }
    setupPlaceChangedListener(autocomplete, mode) {
      autocomplete.bindTo("bounds", this.map);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
  
        if (!place.place_id) {
          window.alert("Please select an option from the dropdown list.");
          return;
        }
  
        if (mode === "ORIG") {
          this.originPlaceId = place.place_id;
        } else {
          this.destinationPlaceId = place.place_id;
        }
  
        this.route();
      });
    }
    route() {
      if (!this.originPlaceId || !this.destinationPlaceId) {
        return;
      }
  
      const me = this;
  
      this.directionsService.route(
        {
          origin: { placeId: this.originPlaceId },
          destination: { placeId: this.destinationPlaceId },
          travelMode: this.travelMode,
        },
        (response, status) => {
          if (status === "OK") {
            distance = response.routes[0].legs[0].distance.text;
            console.log(response.routes[0].legs[0].distance.text, 'cgannel')
            doTheMagic()

            me.directionsRenderer.setDirections(response);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }
  }
  
  window.initMap = initMap;


function renderSameDay(amount){
  if(amount <= 1249) return '1000'
  else if(amount >= 1250 && amount <= 1749) return '1500'
  else if(amount >= 1750 && amount <= 2249) return '2000'
  else if(amount >= 2250 && amount <= 2749) return '2500'
  else if(amount >= 2750 && amount <= 3249) return '3000'
  else if(amount >= 3250 && amount <= 3749) return '3500'
  else if(amount >= 3750 && amount <= 4249) return '4000'
  else if(amount >= 4250 && amount <= 4749) return '4500'
  else if(amount >= 4750 && amount <= 5249) return '5000'
  else if(amount >= 5250 && amount <= 5749) return '5500'
  else if(amount >= 5750 && amount <= 6249) return '6000'
  else if(amount >= 6250 && amount <= 6749) return '6500'
  else if(amount >= 6750 && amount <= 7249) return '7000'
  else return amount

}


function renderInstant(amount){
  if(amount <= 1749) return '1500'
  else if(amount >= 1750 && amount <= 2249) return '2000'
  else if(amount >= 2250 && amount <= 2749) return '2500'
  else if(amount >= 2750 && amount <= 3249) return '3000'
  else if(amount >= 3250 && amount <= 3749) return '3500'
  else if(amount >= 3750 && amount <= 4249) return '4000'
  else if(amount >= 4250 && amount <= 4749) return '4500'
  else if(amount >= 4750 && amount <= 5249) return '5000'
  else if(amount >= 5250 && amount <= 5749) return '5500'
  else if(amount >= 5750 && amount <= 6249) return '6000'
  else if(amount >= 6250 && amount <= 6749) return '6500'
  else if(amount >= 6750 && amount <= 7249) return '7000'
  else if(amount >= 7250 && amount <= 7749) return '7500'
  else if(amount >= 7750 && amount <= 8249) return '8000'
  else return amount

}


function renderNextDay(amount){
  if(amount <= 699) return '700'
  else if(amount >= 701 && amount <= 799) return '800'
  else if(amount >= 800 && amount <= 899) return '900'
  else if(amount >= 900 && amount <= 1249) return '1000'
  else if(amount >= 1250 && amount <= 1749) return '1500'
  else if(amount >= 1750 && amount <= 2249) return '2000'
  else if(amount >= 2250 && amount <= 2749) return '2500'
  else if(amount >= 2750 && amount <= 3249) return '3000'
  else if(amount >= 3250 && amount <= 3749) return '3500'
  else if(amount >= 3750 && amount <= 4249) return '4000'
  else if(amount >= 4250 && amount <= 4749) return '4500'
  else if(amount >= 4750 && amount <= 5249) return '5000'
  else if(amount >= 5250 && amount <= 5749) return '5500'
  else if(amount >= 5750 && amount <= 6249) return '6000'
  else if(amount >= 6250 && amount <= 6749) return '6500'
  else if(amount >= 6750 && amount <= 7249) return '6000'
  else return amount

}









  function doTheMagic(){
    const selectedValue = document.getElementById('deliverySwitch').value
    console.log(selectedValue,distance)
    if(!distance){
      window.alert('Select Location First')
    }
    if(!selectedValue){
      window.alert('Kindly Choose a Delivery Type')
    }
    if(distance && selectedValue){
      const rawKm = distance.substring(0, distance.length-3)
      let totalPrice = (rawKm * selectedValue).toFixed(2);
      console.log(selectedValue, totalPrice, rawKm)
      if(totalPrice < 1000 && selectedValue == '90'){
        totalPrice = 1000
      }else if(totalPrice > 7000 && selectedValue == '90'){
        totalPrice = 7000
      }
      else if(totalPrice < 700 && selectedValue == '70'){
        totalPrice = 700
      }
      else if(totalPrice < 1500 && selectedValue == '130'){
        totalPrice = 1500
      }else if(totalPrice > 8000 && selectedValue == '130'){
        totalPrice = 8000
      }


      if(selectedValue == '90'){
        totalPrice =  renderSameDay(totalPrice)
      }else if(selectedValue == '70'){
        totalPrice =  renderNextDay(totalPrice)
      }else if(selectedValue == '130'){
        totalPrice =  renderInstant(totalPrice)
      }

      console.log(distance, totalPrice, selectedValue)






      document.getElementById('detailSummary').innerHTML = `
      <h3>Hi your distance is <span class='summary'>${distance} </span></h3>
      <h3>Hence Delivery Fee is <span class='summary'> ₦${(totalPrice)}</span></h3>
      `;
    }
  }

  document.querySelector('#deliverySwitch').addEventListener('change',(e) =>{
    doTheMagic()
  }) 