# In my Cat Wiki project:
1. I implemented a modular architecture by separating the API logic into a dedicated file, which simplified maintenance and improved reusability. This API logic is then imported and used within the Pinia store to manage the application state.
2. I implemented a "Random Cat" feature that fetches and displays a random cat. The CatPage component, which displays this feature, is self-contained - it automatically knows which cat data to load based on the current route, fetches it from the Pinia store, and renders everything without needing extra input from its parent components.
3. I learned how to implement and use a custom loader to improve the user experience when rendering asynchronous components.

## Installation
1. Clone the repo
```sh
git clone https://github.com/Koteykee/VuePosts
```
2. Install NPM packages
```sh
npm install
```
3. Run application
```sh
npm run dev
```
Done! 😄
