export default function handleResponseFromAPI(promise) {
  return Promise.all([promise]).then(() => {
    console.log('Got a response from the API');
    /* eslint-disable no-new */
  }).catch(() => { new Error(); });
}
