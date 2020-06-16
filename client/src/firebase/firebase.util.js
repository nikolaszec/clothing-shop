import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBprqehG_LogR9hOhMbybPT_L422g8bWj4",
  authDomain: "clothing-store-6c401.firebaseapp.com",
  databaseURL: "https://clothing-store-6c401.firebaseio.com",
  projectId: "clothing-store-6c401",
  storageBucket: "clothing-store-6c401.appspot.com",
  messagingSenderId: "966220377509",
  appId: "1:966220377509:web:5081d5461e505962f70c4c",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setting up google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Adding user signed in through google account to firebase database
//email, displayName, createdAt

export const addCollectionAndDocument = async (collection, objectToAdd) => {
  const collectionRef = firestore.collection(collection);

  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const collectionMap = (collections) => {
  const snapshotData = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    const routeName = encodeURI(title.toLowerCase());
    return {
      id: doc.id,
      title,
      items,
      routeName,
    };
  });

  return snapshotData.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName } = userAuth;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userRef;
};

export default firebase;
