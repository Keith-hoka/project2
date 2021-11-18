// import firebase from "firebase";
// import * as firebaseui from "firebaseui";

// const LoginButtons = () => {
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());
//     var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   signInSuccessUrl: '/',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID
//   ],
//   // Terms of service url.
//   tosUrl: '/',
// };
// ui.start('#firebaseui-auth-container', uiConfig);

// }

// export default LoginButtons;
