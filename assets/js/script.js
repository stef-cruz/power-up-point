window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  })
}

// Map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 53.350631935496004,
      lng: -6.2599891096804585
    },
    zoom: 12,
  });


  // Set bounds within Dublin Ireland
  let defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(53.350631935496004, -6.2599891096804585),
    new google.maps.LatLng(53.350631935496004, -6.2599891096804585));
  let options = {
    bounds: defaultBounds,
    strictBounds: false,
    types: ['address']
  };

   // Make API request
  fetch("https://api.openchargemap.io/v3/poi?latitude=53.350140&longitude=-6.266155", {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': '1161e5e3-6c1b-4827-80d2-d482dd4b1ec1'
    }
  })
    .then(response => response.json())
    .then((markerData) => addMarkers(map, markerData))
    .catch(error => console.log(error))
    
}

function addMarkers(map, markerData) {
    // Turn off spinner display once markers start loading
    const spinner = document.getElementById("spinner");
    spinner.style.display= "none";

    // Turn off spinner overlay display once markers start loading
    const spinneroverlay = document.getElementById("spinner_overlay");
    spinneroverlay.style.display= "none";
  
    // Loop through data and pass it on to infoWindow

  let normalisedData = processApiData(markerData)

  normalisedData.forEach((chargingPoint) => {
    const marker = new google.maps.Marker({
      position: {
        lat: chargingPoint.lat,
        lng: chargingPoint.long
      },
      map: map,
    });

    
    let content =
      '<div class="infowindow">' +
      '<div class="infowindow_group">' +

      '<div class="navigate_button">' +
      // DMcC - added navigation URL with the charging point lat/long.... 
      '<a href=' + 'https://www.google.com/maps/dir/?api=1&destination=' + chargingPoint.lat + ',' + chargingPoint.long +' target='+'_blank'+'>Navigate to Point</a>' +
      '</div>' +

      '<div class="infowindow_item">' +
      '<h3><i class="fa-solid fa-circle infowindow_item_red_light"></i> ' + 'CURRENTLY OUT OF ORDER' + '</h3>' +
      '</div>' +

      '<div class="infowindow_item info_field">' +
        '<h2><span><i class="fa-regular fa-comment-dots"></i> User Feedback</span> ' + '</h2>' +
        '<div class="user_input_container">' +
            '<div class="user_input_timestamp">' +
              '<img src="assets/images/test-user.png" alt="User profile picture"><p><span><a>Alex Doe</a></span>- Wed, 1 September 2023, 2:35 PM</p>' +
            '</div>' +
            '<div class="user_input_text">' +
            '<p>This location is not working, I wasted my time. I connected the car and took me a while to notice that it was not charging at all.</p>' +
            '</div>' +
        '</div>' +
      '</div>' +

      '<div class="infowindow_item">' +
      '<h2>' + '<i class="fa-solid fa-location-dot"></i>' + ' ' + chargingPoint.title + '</h2>' +
      '<p>' + chargingPoint.full_address + '</p>' +
      '<p>Lat/Long: ' + chargingPoint.lat + ', ' + chargingPoint.long + '</p>' +
      '</div>' +

      '<div class="infowindow_item">' +
      '<h2><span><i class="fa-solid fa-gas-pump"></i> Equipment Details</span>' + '</h2>' +
      '<p>Is operational? ' + chargingPoint.is_operational + '</p>' +
      '<p>Power kW: ' + chargingPoint.power_kw + 'kW</p>' +
      '<p>Connection type: ' + chargingPoint.connection_type_title + '</p>' +
      '<p>Operator Info: ' + chargingPoint.operator_info_title + '</p>' +
      '</div>' +

      '<div class="infowindow_item">' +
      '<h2><span><i class="fa-regular fa-credit-card"></i> Payment Information</span>' + '</h2>' +
      '<p>Pay at location? ' + chargingPoint.pay_at_location + '</p>' +
      '<p>Usage Type ' + chargingPoint.usage_type + '</p>' +
      '<p>Usage Cost ' + chargingPoint.usage_cost + '</p>' +
      '</div>' +

      '</div>' +
      '</div>';

    let cardContent = 
    '<div class="infowindow_item">' +
    '<h2>' + '<i class="fa-solid fa-location-dot"></i>' + ' ' + chargingPoint.title + '</h2>' +
    '</div>' +
    '<div class="infowindow_item info_field"> ' +
    '<p>Leave a review. Is this charging station operational?' + '</p>' +
    '<div class="center_radio_buttons">' +
    '<label><input type="radio" name="functionability" value="male" required>Functioning</label>' +
    '</div>' +
    '<div class="center_radio_buttons">' +
    '<label><input type="radio" name="functionability" value="female">Out of Order</label>' +
    '</div>' +
    '<textarea class="infowindow_text_area">  </textarea>' +
    '<div class="navigate_button">' +
    '<a>' + 'Submit status' +'</a>' +
    '</div>' +
    '</div>';

    InfoWindow(marker, content, cardContent);
  });

  let addInfoWindow = new google.maps.InfoWindow();
  let card = document.querySelector(".infowindow");

  function InfoWindow(marker, content, cardContent) {
    google.maps.event.addListener(marker, 'click', function () {
      // set content
      addInfoWindow.setContent(content);
      // open infowindow on the marker
      addInfoWindow.open(map, marker);
      addCardContent(cardContent);
    });
  }

  function addCardContent(cardContent) {
    card.innerHTML = '';
    card.innerHTML = cardContent;
  }
}

function processApiData(data) {
  dataStructure = []
  data.forEach((chargingPoint) => {
    let title = chargingPoint.AddressInfo.Title
    let lat = parseFloat(chargingPoint.AddressInfo.Latitude)
    let long = parseFloat(chargingPoint.AddressInfo.Longitude)
    let address_line_1 = chargingPoint.AddressInfo?.AddressLine1
    let address_line_2 = chargingPoint.AddressInfo?.AddressLine2
    let full_address = address_line_2 ? address_line_1 + address_line_2 : address_line_1
    let is_operational = processValue(chargingPoint.Connections[0]?.StatusType?.IsOperational)
    let power_kw = processValue(chargingPoint.Connections[0]?.PowerKW)
    let connection_type_title = processValue(chargingPoint.Connections[0]?.CurrentType?.Title)
    let operator_info_title = processValue(chargingPoint.OperatorInfo?.Title)
    let pay_at_location = processValue(chargingPoint.UsageType?.IsPayAtLocation)
    let usage_type = processValue(chargingPoint.UsageType?.Title)
    let usage_cost = processValue(chargingPoint.UsageCost)
    // return console.log(is_operational)
    const chargingPointObj = new ChargingPoint(title, lat, long, full_address, is_operational, power_kw, connection_type_title, operator_info_title, pay_at_location, usage_type, usage_cost);
    dataStructure.push(chargingPointObj);
  })

  return dataStructure
}

function processValue(data) {
  value = data ? data : 'Unknown'
  return value
}

class ChargingPoint {
  constructor(title, lat, long, full_address, is_operational, power_kw, connection_type_title, operator_info_title, pay_at_location, usage_type, usage_cost) {
    this.title = title;
    this.lat = lat;
    this.long = long;
    this.full_address = full_address;
    this.is_operational = is_operational;
    this.power_kw = power_kw;
    this.connection_type_title = connection_type_title;
    this.operator_info_title = operator_info_title;
    this.pay_at_location = pay_at_location;
    this.usage_type = usage_type;
    this.usage_cost = usage_cost;
  }
}
