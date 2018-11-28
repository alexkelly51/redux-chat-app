export default function(state,action) {
  if (state === undefined) {
    return `anonymous${Math.floor(10 + (Math.random() * 90))}`
  }
    switch (action.type) {
    case 'SET_USERNAME': {
      return action.payload;
    }
    default: {
      return state
    }
  }
}
