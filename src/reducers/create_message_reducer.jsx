export default function(state,action) {
  if (state === undefined) {
    return null
  }
    switch (action.type) {
    case 'CREATE_MESSAGE': {
      const newMessages = state.slice(0)
      newMessages.push(action.payload);
      return newMessages;
    }
    default: {
      return state
    }
  }
}
