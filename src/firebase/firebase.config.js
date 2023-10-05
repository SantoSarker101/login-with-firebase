// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGjLAbNBjgukXJcz6qpNcjvwqGB5N8VRY",
  authDomain: "auth-firebase-context-ta-abe46.firebaseapp.com",
  projectId: "auth-firebase-context-ta-abe46",
  storageBucket: "auth-firebase-context-ta-abe46.appspot.com",
  messagingSenderId: "614093802248",
  appId: "1:614093802248:web:9876af93b3584bfe37fabd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app