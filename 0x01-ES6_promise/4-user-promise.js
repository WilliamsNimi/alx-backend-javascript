export default function signUpUser(firstName, lastName){
    const newPromise = new Promise((resolve, reject) => {
	resolve({
            firstName: firstName,
	    lastName: lastName
	})
    });
    newPromise.then((message) => {
	return (message);
    }).catch(() => {
	return (new Error());
    });
    return (newPromise);
}
