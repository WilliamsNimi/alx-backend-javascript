import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()]).then(
    ([user, image]) => {
      console.log(`${image.body} ${user.firstName} ${user.lastName}`);
    },
  ).catch(() => {
    console.log('Signup system offline');
  });
}
