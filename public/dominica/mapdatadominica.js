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
    DMA1432: {
      name: "Saint Andrew"
    },
    DMA1433: {
      name: "Saint David"
    },
    DMA1434: {
      name: "Saint George",
      inactive: "yes"
    },
    DMA1435: {
      name: "Saint John",
      inactive: "yes"
    },
    DMA1436: {
      name: "Saint Joseph"
    },
    DMA1437: {
      name: "Saint Luke",
      inactive: "yes"
    },
    DMA1438: {
      name: "Saint Mark",
      inactive: "yes"
    },
    DMA1439: {
      name: "Saint Patrick"
    },
    DMA1440: {
      name: "Saint Paul"
    },
    DMA1441: {
      name: "Saint Peter",
      inactive: "yes"
    }
  },
  locations: {
    "0": {
      lat: "15.3",
      lng: "-61.4",
      name: "Roseau"
    }
  },
  labels: {},
  regions: {}
};