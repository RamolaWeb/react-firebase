import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAmpkaZX_QH2pQB_FbHrYAYEqucBM-ioaU",
    authDomain: "practicedevops-379e0.firebaseapp.com",
    databaseURL: "https://practicedevops-379e0.firebaseio.com",
    projectId: "practicedevops-379e0",
    storageBucket: "practicedevops-379e0.appspot.com",
    messagingSenderId: "214985952167"
  };

const app = firebase.initializeApp(config)

export default app
