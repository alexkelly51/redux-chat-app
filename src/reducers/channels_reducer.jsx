export default function(state,action) {
  if (state === undefined) {
    return [ 'general', 'react', 'paris' ]
  }
    switch (action.type) {
    case 'SET_CHANNELS': {
      return action.payload;
    }
    default: {
      return state
    }
  }
}
