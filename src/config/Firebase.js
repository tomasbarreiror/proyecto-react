import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyDc5fX7vyWYIycbxCEARIsA-HJCnAd9OTc",
    authDomain: "proyecto-react-23214.firebaseapp.com",
    projectId: "proyecto-react-23214",
    storageBucket: "proyecto-react-23214.appspot.com",
    messagingSenderId: "145534079062",
    appId: "1:145534079062:web:fbfac03b83164c8fa46bf7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)