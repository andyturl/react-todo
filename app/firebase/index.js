import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyDu4lTzL2JUr0Qp4cYebPeMYtG7tgTOvx8",
        authDomain: "andy-todo-app.firebaseapp.com",
        databaseURL: "https://andy-todo-app.firebaseio.com",
        projectId: "andy-todo-app",
        storageBucket: "andy-todo-app.appspot.com",
        messagingSenderId: "1013601766212"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;