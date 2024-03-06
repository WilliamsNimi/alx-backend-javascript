export default function signUpUser(firstName, lastName) {
  const newPromise = new Promise((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
    reject(new Error());
  });
  newPromise.then((message) => (message)).catch((message) => message);
  return (newPromise);
}
