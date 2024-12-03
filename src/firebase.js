import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDCF3Ba3bzjbaawTgdCVxo0rXduTXgC5cI",
  authDomain: "clone-netflix-b151d.firebaseapp.com",
  projectId: "clone-netflix-b151d",
  storageBucket: "clone-netflix-b151d.firebasestorage.app",
  messagingSenderId: "913590591097",
  appId: "1:913590591097:web:7cb20bcaf0751f9c8d7ea8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=> {
    signOut (auth);
}

export {auth, db, login, signup, logout}