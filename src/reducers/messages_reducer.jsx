export default function(state,action) {
  if (state === undefined) {
    return ["test", "mouse"]
  }
    switch (action.type) {
    case 'FETCH_MESSAGES': {
      return action.payload.messages;
    }
    default: {
      return state
    }
  }
}


