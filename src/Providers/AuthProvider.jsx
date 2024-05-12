import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ( {children} ) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = async (name, image, email, password) => {
    try {
        setLoading(true);
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Get the newly created user
        const user = userCredential.user;

        // Update the user profile with name and image
        await updateProfile(user, {
            displayName: name,
            photoURL: image
        });

        setLoading(false); // You might want to set loading to false here or handle it as needed
        return user;
    } catch (error) {
        setLoading(false); // Make sure to set loading to false in case of error
        // Handle error
        console.error("Error creating user:", error.message);
        throw error;
    }
}


  //sign in
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin =() =>{
    return signInWithPopup(auth, githubProvider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currenUser =>{
      console.log('current value of the current user');
      setUser(currenUser);
      setLoading(false)
    })
    return ()=> {
      unSubscribe();
    };
  },[])

  const userInfo ={
    user,
    loading,
    showPassword,
    setUser,
    createUser,
    setShowPassword,
    logIn,
    logOut,
    googleLogin,
    githubLogin,


  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;