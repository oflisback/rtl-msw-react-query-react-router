<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</p>
<p align="center">
    <h1 align="center">rtl-msw-react-query-react-router</h1>
</p>
<p align="center">
    <em>Minimal e2e and mock API testing of React app</em>
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<hr>

This repo gives an example of a test setup for both fast end-to-end tests and tests utilizing a mock API backend. The app makes a simple HTTP request to the public Pokemon API to
get the name of a pokemon.

The most interesting file to have a look at is [App.test.tsx](./tests/App.test.tsx) which contains both an end-to-end test and a test that uses a mocked server response instead of using the Pokemon API.

The main gotcha to make React testing library work with Tanstack query and React router is to create a custom render wrapper, see [createTestRouter](./tests/createTestRouter.tsx).

Technologies used:

* [React testing library](https://testing-library.com/) - For quick unit test like tests of react components and apps without using a browser.
* [Mock service worker](https://mswjs.io/) - For producing fake API server responses, so that we can test without the API server.
* [Vite](https://vitejs.dev/) - For project bundling
* [Vitest](https://vitest.dev/) - Jest compatibleish fast test executor for Vite
* [Tanstack query](https://tanstack.com/query/v3/) - For network requests and server state caching.
* [React router](https://reactrouter.com/) - For client side page navigation and URL management.

---

##  Try it out

###  Installation

1. Clone the rtl-msw-react-query-react-router repository:

```sh
git clone https://github.com/oflisback/rtl-msw-react-query-react-router
```

2. Change to the project directory:

```sh
cd rtl-msw-react-query-react-router
```

3. Install the dependencies:

```sh
npm install
```

###  Running rtl-msw-react-query-react-router

```sh
npm run dev
```

All the app does is to fetch pikatchu's data from the public [Pokemon API](https://pokeapi.co/), and display the name of a well-known pokemon. The app in itself is not very interesting.

###  Tests

To execute tests, run:

```sh
npm test
```

###  Coverage

To execute tests with a coverage report run:

```sh
npm run coverage
```

---
