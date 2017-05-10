import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDu4lTzL2JUr0Qp4cYebPeMYtG7tgTOvx8",
    authDomain: "andy-todo-app.firebaseapp.com",
    databaseURL: "https://andy-todo-app.firebaseio.com",
    projectId: "andy-todo-app",
    storageBucket: "andy-todo-app.appspot.com",
    messagingSenderId: "1013601766212"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Andrew',
        age: 35
    }
});


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});

todosRef.push({
    text: 'Todo 1'
});