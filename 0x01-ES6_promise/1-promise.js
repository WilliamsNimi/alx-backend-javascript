export default function getFullResponseFromAPI(success){
    const newPromise = new Promise((resolve, reject) => {
	if (success === true){
            resolve({
		status: 200,
		body: 'Success',
	    });
	} else {
            reject(new Error('The fake API is not working currently'));
	}
    });
    newPromise.then((message) => {
	return (message);
    }).catch((message) => {
	return (message);
    });
    return (newPromise);
}
