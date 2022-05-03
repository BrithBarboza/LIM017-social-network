/* eslint-disable import/no-unresolved */
export const collection = () => Promise.resolve({});
export const initializeApp = () => ({});
export const getAuth = () => ({ _id: 'get-auth' });
export class GoogleAuthProvider {}
export const addDoc = () => Promise.resolve({});
export const getFirestore = () => Promise.resolve({});
export const deleteDoc = () => Promise.resolve({});
export const doc = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const signInWithEmailAndPassword = () => jest.fn((auth, email, password) => {
 return  Promise.reject(new Error({ code: 'auth/wrong-password' }));
});
export const signInWithPopup = () => jest.fn(() => Promise.resolve({}));

// export {
//   // createUserWithEmailAndPassword,
//   // signInWithPopup,
//   // signInWithEmailAndPassword,
//   // signOut,
//   // sendEmailVerification,
// };
