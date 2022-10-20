# Albummzz:

React project to perform CRUD on albums data of JSON placeholder API.

Features:
- CRUD operations on Albums.
- Google oAuth.
- Contains both Backend and Frontend.
- Backend using json-server (npm package).
- React features used:
  - Redux to manage State of Albums across CRUD operations and Google-o-AAuth.
  - Redux Thunks to dispatch actions asynchronously (based on when network requests of album CRUDS respond).
  - React Router Dom (for navigation)
  - React Portals for Modal (delete album)

## How to set up:
- Have npm installed.
- Currently my google-o-Auth set up is such that it only allows limited Email IDs to test run this. You can provide your own google oAuth client ID in `frontend/src/KEYS.js`, and provide access permissions as you need.
- If you are deploying json server not on localhost:3003, then need to change the url in `frontend/src/apis/json-server-api.js`.

## How to start:
Clone this repo, and have npm installed.
```bash
# Start backend server (starts on 3003 port)
cd backend
npm start

# in separate terminal, start react frontend server (by default starts on 3000)
cd frontend
npm start

# visit localhost:3000 in browser to see the app.
# Albums data stored in backend/albumDb.json
```

## Folder Structure:
- Frontend related react code is in `frontend/src`
- Backend related `json-server` code and albumDb.json is in `backend/`
- Directory Structure:
.
├── README.md                           # This ReadMe file. ;)
├── backend
│   ├── albumsDb.json
│   └── package.json
└── frontend
    ├── README.md
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   └── index.html
    └── src
        ├── KEYS.js                     # contains Google-oAuth Client ID (Need to use yours if making application)
        ├── actions                     # Redux related Actions used to dispatch events (SIGN_IN, SIGN_OUT, CREATE,EDIT,DELETE,GET_ALBUM,GET_ALBUMS).
        │   ├── ACTION_TYPES.js
        │   └── index.js
        ├── apis                        # Axios wrapped for localhost:3003 (the port where json-server is running).
        │   └── json-server-api.js
        ├── components                  # React components invoolved.
        │   ├── App.css
        │   ├── App.js
        │   ├── GoogleOAuth.js
        │   ├── Header.js
        │   ├── Modal.js
        │   └── albums
        │       ├── AlbumCreate.js
        │       ├── AlbumDelete.js
        │       ├── AlbumEdit.js
        │       ├── AlbumForm.js
        │       └── AlbumList.js
        ├── history.js
        ├── index.css
        ├── index.js                    # Entry point for React code.
        └── reducers                    # Redux Reducers to modify state based on action's type and payload.
            ├── albumReducer.js
            ├── index.js
            └── oAuthReducer.js