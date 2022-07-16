
// variable declaration
let hover_color = "white";
let color = "white";


// mapdata
var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: color,
    state_hover_color: hover_color,
    state_url: "https://simplemaps.com",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "yes",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
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
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "Edward: 100, Elon: 49",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 100,
        elon: 49
      }
    },
    AK: {
      name: "Alaska",
      description: " Edward: 40, Elon: 490",
      color:  color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 140,
        elon: 490
      }
    },
    FL: {
      name: "Florida",
      description: " Edward: 349, Elon: 149",
      color: color,
      hover_color: hover_color,
      url: "default",
      inactive: "no",
      vote: {
        edward: 349,
        elon: 149
      }
    },
    NH: {
      name: "New Hampshire",
      description: "Edward: 49, Elon: 56",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 49,
        elon:56
      }
    },
    VT: {
      name: "Vermont",
      description: "Edward: 47, Elon: 10",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 47,
        elon: 10
      }
    },
    ME: {
      name: "Maine",
      description: "Edward: 450, Elon: 234",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 450,
        elon: 234
      }
    },
    RI: {
      name: "Rhode Island",
      description: "Edward: 34, Elon: 56",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 34,
        elon: 56
      }
    },
    NY: {
      name: "New York",
      description: "Edward: 54, Elon: 67",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 54,
        elon: 67
      }
    },
    PA: {
      name: "Pennsylvania",
      description: "Edward: 534, Elon: 543",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 534,
        elon: 543
      }
    },
    NJ: {
      name: "New Jersey",
      description:"Edward: 59, Elon: 78",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 59,
        elon: 78
      }
    },
    DE: {
      name: "Delaware",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    MD: {
      name: "Maryland",
      description: "Edward: 320, Elon: 220",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 220
      }
    },
    VA: {
      name: "Virginia",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    WV: {
      name: "West Virginia",
      description: "Edward: 110, Elon: 20",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 110,
        elon: 20
      }
    },
    OH: {
      name: "Ohio",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    IN: {
      name: "Indiana",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    IL: {
      name: "Illinois",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      vote: {
        edward: 0,
        elon: 0
      }
    },
    CT: {
      name: "Connecticut",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      vote: {
        edward: 0,
        elon: 0
      }
    },
    WI: {
      name: "Wisconsin",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    NC: {
      name: "North Carolina",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    DC: {
      name: "District of Columbia",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    MA: {
      name: "Massachusetts",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    TN: {
      name: "Tennessee",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    AR: {
      name: "Arkansas",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    MO: {
      name: "Missouri",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    GA: {
      name: "Georgia",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    SC: {
      name: "South Carolina",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    KY: {
      name: "Kentucky",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    AL: {
      name: "Alabama",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    LA: {
      name: "Louisiana",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    MS: {
      name: "Mississippi",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    IA: {
      name: "Iowa",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    MN: {
      name: "Minnesota",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    OK: {
      name: "Oklahoma",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    TX: {
      name: "Texas",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    NM: {
      name: "New Mexico",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    KS: {
      name: "Kansas",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    NE: {
      name: "Nebraska",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    SD: {
      name: "South Dakota",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    ND: {
      name: "North Dakota",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    WY: {
      name: "Wyoming",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    MT: {
      name: "Montana",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    CO: {
      name: "Colorado",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    UT: {
      name: "Utah",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    AZ: {
      name: "Arizona",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    NV: {
      name: "Nevada",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    OR: {
      name: "Oregon",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    WA: {
      name: "Washington",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    CA: {
      name: "California",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    MI: {
      name: "Michigan",
      description: "Edward: 870, Elon: 540",
      color:  color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward:870,
        elon: 540
      }
    },
    ID: {
      name: "Idaho",
      description: "Edward: 500, Elon: 20",
      color: color,
      hover_color:  hover_color,
      url: "default",
      vote: {
        edward: 500,
        elon: 20
      }
    },
    GU: {
      name: "Guam",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    VI: {
      name: "Virgin Islands",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    PR: {
      name: "Puerto Rico",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    AS: {
      name: "American Samoa",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    },
    MP: {
      name: "Northern Mariana Islands",
      description: "Edward: 320, Elon: 900",
      color: color,
      hover_color: hover_color,
      url: "default",
      vote: {
        edward: 320,
        elon: 900
      }
    }    
  },
  locations: {
    "0": {
      name: "New York",
      lat: 40.71,
      lng: -74,
      description: "default",
      color: "default",
      url: "default",
      type: "default",
      size: "default"
    },
    "1": {
      name: "Anchorage",
      lat: 61.2180556,
      lng: -149.9002778,
      color: "default",
      type: "circle"
    }
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  }
};

//change the color of state based on who is winning
for (const key in simplemaps_usmap_mapdata.state_specific){

// conditions
  if(simplemaps_usmap_mapdata.state_specific[key].vote.edward > simplemaps_usmap_mapdata.state_specific[key].vote.elon){

    simplemaps_usmap_mapdata.state_specific[key].color = "red"
    simplemaps_usmap_mapdata.state_specific[key].hover_color = "green"
    
  }else{
    simplemaps_usmap_mapdata.state_specific[key].color = "blue";
    simplemaps_usmap_mapdata.state_specific[key].hover_color = "yellow"
  }
}











