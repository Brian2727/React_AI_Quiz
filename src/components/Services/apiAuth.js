import {firebaseEmailLogin, firebaseEmailSignup, firebaseLogout,} from "../FireBase/firebaseService";


export async function loginEmail(email, password) {
    try{
        const { user } = await firebaseEmailLogin(email, password);
        console.log(user);
        return user;
    }
    catch (error){
        console.log(error);
        throw new Error('Error logging in');
    }


}

export async function signUpEmail(email, password) {
    try{
        const { user } = await firebaseEmailSignup(email, password);
        console.log(user);
        return user;
    }
    catch (error){
        console.log(error);
        throw new Error('Error signing up');
    }
}

export async function logout() {
    try{
        await firebaseLogout();
    }
    catch (error){
        console.log(error);
        throw new Error('Error logging out');
    }
}