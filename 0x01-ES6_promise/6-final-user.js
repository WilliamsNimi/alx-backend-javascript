import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";
export default function handleProfileSignup(firstName, lastName, fileName){
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((settled) => settled.map((result) => (result.status === 'fulfilled' ? result : {
	status: result.status,
	value: String(result.reason),
    })));
}
