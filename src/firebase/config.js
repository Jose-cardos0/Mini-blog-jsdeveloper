import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1vfDl-Q9NpOIVAVqkRKKvMqznWnBaJ80",
  authDomain: "miniblog-b2949.firebaseapp.com",
  projectId: "miniblog-b2949",
  storageBucket: "miniblog-b2949.appspot.com",
  messagingSenderId: "117881782143",
  appId: "1:117881782143:web:e10a56abc6b1678cd8e44a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
