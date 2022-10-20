# Albummzz:

React project to perform CRUD on albums data of JSON placeholder API.

Features:
- CRUD Albums.
- Google oAuth.
- Contains both Backend and Frontend.
- Backend using json-server (npm package).
- React features used:
  - Redux and Redux Thunk
  - React Rputer Dom (for navigation)
  - React Portals for Modal (delete album)

## How to set up:
- Have npm installed.
- Currently my google-o-Auth set up is such that it only allows limited Email IDs to test run this. You can provide your own google oAuth client ID in `frontend/src/KEYS.js`, and provide access permissions as you need.

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
- For frontend folder structure, look `frontent/README.md`
- For backend folder structure, look `backend/README.md`