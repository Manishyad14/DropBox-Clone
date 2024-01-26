import { getApp , getApps,initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBP9Eii-wL5hAcx52gnecq46_h6pYBTcdU",
    authDomain: "dropbox2-3ad24.firebaseapp.com",
    projectId: "dropbox2-3ad24",
    storageBucket: "dropbox2-3ad24.appspot.com",
    messagingSenderId: "1007393084579",
    appId: "1:1007393084579:web:9791a96b10da60a2775b16"
  };
  


const  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};