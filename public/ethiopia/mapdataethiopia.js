var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "300", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "orange",
    state_hover_color: "darkorange",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    ETH3109: {
      name: "Amhara"
    },
    ETH3110: {
      name: "Tigray",
      inactive: "yes"
    },
    ETH3111: {
      name: "Afar",
      inactive: "yes"
    },
    ETH3129: {
      name: "Southern Nations, Nationalities and Peoples"
    },
    ETH3130: {
      name: "Gambela Peoples",
      inactive: "yes"
    },
    ETH3131: {
      name: "Oromiya"
    },
    ETH3132: {
      name: "Benshangul-Gumaz",
      inactive: "yes"
    },
    ETH3133: {
      name: "Addis Ababa",
      inactive: "yes"
    },
    ETH3134: {
      name: "Somali"
    },
    ETH3135: {
      name: "Dire Dawa"
    },
    ETH3136: {
      name: "Harari People",
      inactive: "yes"
    }
  },
  locations: {
    "0": {
      lat: "9.024325",
      lng: "38.749226",
      name: "Addis Ababa"
    }
  },
  labels: {},
  regions: {}
};