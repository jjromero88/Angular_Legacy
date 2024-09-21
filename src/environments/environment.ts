// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBB4lfeu_dgSGHecdWQ7G_0ac20-FuEWTE',
    authDomain: 'firechat-5b846.firebaseapp.com',
    databaseURL: 'https://firechat-5b846.firebaseio.com',
    projectId: 'firechat-5b846',
    storageBucket: 'firechat-5b846.appspot.com',
    messagingSenderId: '553900168586'
  }
};

/*

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBB4lfeu_dgSGHecdWQ7G_0ac20-FuEWTE",
    authDomain: "firechat-5b846.firebaseapp.com",
    databaseURL: "https://firechat-5b846.firebaseio.com",
    projectId: "firechat-5b846",
    storageBucket: "firechat-5b846.appspot.com",
    messagingSenderId: "553900168586",
    appId: "1:553900168586:web:7b38de9ae4c4e97025e473",
    measurementId: "G-W1E0MG9Z9R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
