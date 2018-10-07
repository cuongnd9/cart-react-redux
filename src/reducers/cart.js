import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('cart'));
// var initialState = data ? data : [];
var initialState = [
  {
    product: {
      id: 2,
      name: 'Monster 821',
      image: 'http://images.ctfassets.net/o6sr41tx16eu/3Tm1FcXCGseywq8MSwGGO/1ff4b588eb300614101bf7813385fa30/Monster-821-MY18-Red-01-Model-Preview-1050x650.png',
      description: 'With its supremely sporty performance and agility, the new Monster 821 has been designed for maximum riding pleasure. The performance of the 109 HP Testastretta 11° engine is enhanced by the Ducati Safety Pack (ABS and Ducati Traction Control) and the Riding Modes, which guarantee maximum safety always and everywhere.',
      price: 11995,
      rating: 5,
      inventory: 500
    },
    quantity: 4
  },
  {
    product: {
      id: 7,
      name: 'Scrambler Full Throttle',
      image: 'https://cms.scramblerducati.com/wp-content/uploads/2018/10/full_throttle_lato_sx-1920x1240.jpg',
      description: 'The black and yellow tank. The side number holders. The racing style rear. Inspired by the Mexican customizer and Super Hooligan championship star Frankie Garcia, the new Scrambler Full Throttle embodies the spirit of legendary dirty track ovals.',
      price: 10695,
      rating: 5,
      inventory: 600
    },
    quantity: 2
  }
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
