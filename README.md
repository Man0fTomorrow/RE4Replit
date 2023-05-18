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

1 - add a logout page in pages folder.

2 - add as a const in routes/elements.js

3 - add as a route in routes/elements.js

4 - add as a path in routes/index.js