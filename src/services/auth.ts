import firebase from 'firebase';

export class AuthService {
    register(email: string, password: string) {
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
    }
    signin(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password);
    }
    logout() {
        firebase.auth().signOut();
    }
    getActiveUser() {
        return firebase.auth().currentUser;
    }
}