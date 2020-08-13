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
    state_hover_color: "Darkorange",
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
    GEO3015: {
      name: "Abkhazia"
    },
    GEO3027: {
      name: "Ajaria",
      inactive: "yes"
    },
    GEO3028: {
      name: "Guria",
      inactive: "yes"
    },
    GEO3029: {
      name: "Samegrelo-Zemo Svaneti"
    },
    GEO3030: {
      name: "Imereti"
    },
    GEO3033: {
      name: "Kakheti"
    },
    GEO3034: {
      name: "Mtskheta-Mtianeti"
    },
    GEO3035: {
      name: "Racha-Lechkhumi-Kvemo Svaneti",
      inactive: "yes"
    },
    GEO3036: {
      name: "Tbilisi",
      inactive: "yes"
    },
    GEO3037: {
      name: "Kvemo Kartli",
      inactive: "yes"
    },
    GEO3038: {
      name: "Samtskhe-Javakheti",
      inactive: "yes"
    },
    GEO3039: {
      name: "Shida Kartli",
      inactive: "yes"
    }
  },
  locations: {
    "0": {
      lat: "41.694113",
      lng: "44.833682",
      name: "Tbilisi"
    }
  },
  labels: {},
  regions: {}
};