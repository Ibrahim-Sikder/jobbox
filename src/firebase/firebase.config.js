
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4uJXT1lXFYwY2b3By9cIgHB-TJtOd5mM",
  authDomain: "jobbox-30fb9.firebaseapp.com",
  projectId: "jobbox-30fb9",
  storageBucket: "jobbox-30fb9.appspot.com",
  messagingSenderId: "769547170960",
  appId: "1:769547170960:web:ab5fcc89c543e8ed3e1415",
  measurementId: "G-Q9LPBWYGTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;