// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8PB4DYPhFwhUana3M-jw5vxLF-ufLEoI",
  authDomain: "proyectos-accionti.firebaseapp.com",
  databaseURL: "https://proyectos-accionti-default-rtdb.firebaseio.com",
  projectId: "proyectos-accionti",
  storageBucket: "proyectos-accionti.appspot.com",
  messagingSenderId: "94213340022",
  appId: "1:94213340022:web:9a594bf313ff364f015857",
  measurementId: "G-QEKSQC748M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);