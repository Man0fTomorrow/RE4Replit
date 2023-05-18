## USING YARN (Recommend)

- yarn install
- yarn start

## USING NPM

- npm i OR npm i --legacy-peer-deps
- npm start

STEPS TAKEN ON TEMPLATE:

*** to use firebase auth instead of JWT ***

1 - add the .env file. This has the environment variables for the app. The .env file is not committed to the repo. It is in the .gitignore file.

2 - go to auth/UseAuthContext and change from JWT to Firebase.

3 - make sure there is a config-global.js file in src folder. This is where the firebase config is stored.

4 - go to app.js change import from auth/UseAuthContext to auth/UseAuthContextFirebase.

*** add a logout page for manual logout ***

This page can be accessed by going to /logout. During testing, the front page can get stuck in a loop trying to log in, and the we browser saves the status. Reloading the page doesn't stop the loop, so you have to go to /logout to clear the browser cache.

  

1 - add a logout page in pages folder.

1.5 - add the logout component (logout.js) in the sections/auth folder.

2 - add as a const in routes/elements.js

3 - add as a route in routes/elements.js

4 - add as a path in routes/index.js

use username i@i.com and password iiiiii (iX6) to log in. It does currently authenticate successfully and return a token. It's then making calls to the FireStore. I don't understand this part yet, because I had been working with the minimal-dev-server they provided. After JWT authentication with the backend (the original method used in the template), next() is involved, and the app goes to the next page. I don't know how to do that with Firebase yet, because after successfull login with firebase in this app, the next call is automatically made to firestore. My app I made doesn't do that. I handled the next steps manually. At this point, it appears that I need to scrap the back end I was using, and use FireStore instead.