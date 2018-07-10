// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyALb8FF8at_FKdyZhNZIDNgnYcDNF1Xzqk',
    authDomain: 'ng-recipe-book-ac1ff.firebaseapp.com',
    databaseURL: 'https://ng-recipe-book-ac1ff.firebaseio.com',
    projectId: 'ng-recipe-book-ac1ff',
    storageBucket: 'ng-recipe-book-ac1ff.appspot.com',
    messagingSenderId: '877635911291'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
