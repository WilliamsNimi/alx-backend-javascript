export default function handleResponseFromAPI(promise){
    const newPromise = new Promise((resolve, reject) => {
        console.log("Got a response from the API");
	});
    newPromise.then(() => {
	return ({
            status: 200,
	    body: 'success'
	});
    }).catch(() => {
	console.log("Got a response from the API");
	return (new Error());
    });
    return (newPromise);
}
