import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC93TopHA6i05Rdnu4gEzxiy5jS__xDSs8',
  authDomain: 'portfolio-c0ef0.firebaseapp.com',
  projectId: 'portfolio-c0ef0',
  storageBucket: 'portfolio-c0ef0.appspot.com',
  messagingSenderId: '343243671802',
  appId: 'G-YL9LGK7C29',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
