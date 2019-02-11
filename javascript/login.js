var config = {
    apiKey: "AIzaSyC5Y_J91g3ZQrV2dBVNCdpXqnMtqKEWae0",
    authDomain: "cis444-test.firebaseapp.com",
    databaseURL: "https://cis444-test.firebaseio.com",
    projectId: "cis444-test",
    storageBucket: "cis444-test.appspot.com",
    messagingSenderId: "136253713993"
};
firebase.initializeApp(config);
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [{ provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: false }]
});
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '',
    //<url-to-redirect-to-on-success>

    signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '',
    // Privacy policy url.
    privacyPolicyUrl: ''
};
ui.start('#firebaseui-auth-container', uiConfig);