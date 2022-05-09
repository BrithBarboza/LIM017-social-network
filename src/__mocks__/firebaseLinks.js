/* eslint-disable import/no-unresolved */
export const collection = () => Promise.resolve({});
export const initializeApp = () => ({});
export const getAuth = () => ({ _id: 'get-auth' });
export class GoogleAuthProvider {}
export const addDoc = () => jest.fn(() => Promise.resolve({
  Posts: {
    title: 'Hotel Palma azul',
    categories: 'Lugares',
    post: 'Es un hotel ubicado en las costas de manabí...',
  },

}));
export const getFirestore = () => Promise.resolve({});
export const deleteDoc = () => Promise.resolve({});
export const doc = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({
  user: {
    email: 'brith@adn.com',
    password: '123456',
  },
}));
export const signInWithPopup = () => jest.fn(() => Promise.resolve({}));

// export {

//   // signInWithPopup,

//   // signOut,
//   // sendEmailVerification,
// };
