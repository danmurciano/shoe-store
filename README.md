# Demo Web Store App

This is a demo web store app with basic frontend functionality for products and cart. The app is built using React with TypeScript. It was built using 'create-react-app'. Please note that for a real-world scalable app, more complex logic and state management might be required.

## Features

- View a list of products available in the store.
- Add products to the cart.
- Change the quantity of products in the cart using the Quantity Selector.
- Remove products from the cart.
- The cart is saved in the local storage, allowing the items to persist across page reloads.

## Limitations
- The product data is pulled from a static local product list, rather than from a database. In a real-world scenario, integrating a backend with a database would be necessary to handle product management and user authentication.
- The app does not include user authentication or user-specific functionality, as it is a basic demo with a focus on frontend features.
- At this point, the UI works for desktops. It is not designed for mobile and other screens that are smaller than 1100px.
- Currently there are a few tests for the Product Page "Add to Cart" functionality. Tests for the Cart Page have not been implemented at this point.

## Potential Improvements
- Make the UI responsive for smaller screen sizes.
- Implement a backend with a database to handle product data, user authentication, and user-specific functionalities.
- Enhance the cart management with server-side handling to ensure cart items persist across different devices.
- Implement a "Checkout" functionality to create orders.
- Add product categories and sorting/filtering options.
- Add admin functionality for creating and editing products, viewing orders and users.
- Add more comprehensive tests to cover various components and user interactions.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.





