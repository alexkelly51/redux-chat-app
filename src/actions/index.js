export function fetchMessages(channel) {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  return {
    type: "FETCH_MESSAGES",
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { author, content };
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: "CREATE_MESSAGE",
    payload: promise
  };
}
