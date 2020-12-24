const initialState = {
  city: [
  {
    "country": "AD",
    "name": "Sant Julià de Lòria",
    "lat": "42.46372",
    "lng": "1.49129"
  },
  {
    "country": "AD",
    "name": "Pas de la Casa",
    "lat": "42.54277",
    "lng": "1.73361"
  },
  {
    "country": "AD",
    "name": "Ordino",
    "lat": "42.55623",
    "lng": "1.53319"
  },
  {
    "country": "AD",
    "name": "les Escaldes",
    "lat": "42.50729",
    "lng": "1.53414"
  },
  
  
],
  name:"",
  coordonate:[],
};
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default cityReducer;
