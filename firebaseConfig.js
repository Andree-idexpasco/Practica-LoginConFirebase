import { initializeApp } from 'firebase/app';
import { getApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLGP1WwAtKIsfQZuFrBZrXCt7rdez4UIY",
  authDomain: "bdloginfacebook.firebaseapp.com",
  projectId: "bdloginfacebook",
  storageBucket: "bdloginfacebook.appspot.com",
  messagingSenderId: "411809549217",
  appId: "1:411809549217:web:72007ca4bab3fd8e2799e0"
};

if (!getApp.length) {
  initializeApp(firebaseConfig);
}

export { firebaseConfig };