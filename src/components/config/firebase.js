import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBrQNP1QLhpJMX7kotQppu5z6-WdshKjf4",
    authDomain: "fclone-v2-946f0.firebaseapp.com",
    projectId: "fclone-v2-946f0",
    storageBucket: "fclone-v2-946f0.appspot.com",
    messagingSenderId: "691591682144",
    appId: "1:691591682144:web:74918576069d74fe9b0b05"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage };
