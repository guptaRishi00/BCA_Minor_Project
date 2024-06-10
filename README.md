# Laboratory Management System

## Overview

**Laboratory Management System** (LabXpert) is a comprehensive application designed to streamline the management of laboratory tests and employee interactions. This system allows for efficient handling of patient test records and provides functionalities for employee authentication, test history management, and individual test details retrieval.

## Features

-   **Employee Authentication**: Secure login and signup functionality for employees.
-   **Test Management**: Employees can view a list of all tests and individual test details.
-   **Add New Tests**: Employees can add new test records.
-   **Authorization**: Secure access to endpoints with JWT-based authentication.
-   **Responsive Design**: User-friendly interface that works across different devices.

## Tech Stack

-   **Frontend**: React, Material-Tailwind, React Router
-   **Backend**: Node.js, Express.js, Mongoose (MongoDB)
-   **Authentication**: JWT (JSON Web Tokens)
-   **Styling**: Tailwind CSS
-   **Deployment**: Localhost for development

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

-   Node.js and npm installed on your machine
-   MongoDB installed and running

### Installation

1.  **Clone the repository:**
    
    bash
    
    Copy code
    
    `git clone https://github.com/your-username/laboratory-management-system.git
    cd laboratory-management-system` 
    
2.  **Install backend dependencies:**
    
    bash
    
    Copy code
    
    `cd backend
    npm install` 
    
3.  **Install frontend dependencies:**
    
    bash
    
    Copy code
    
    `cd ../frontend
    npm install` 
    

### Configuration

1.  **Environment Variables:**
    
    Create a `.env` file in the `backend` directory with the following content:
    
    plaintext
    
    Copy code
    
    `MONGO_URI=<your-mongodb-connection-string>
    PORT=3000
    JWT_SECRET=<your-jwt-secret>` 
    
2.  **Backend Configuration:**
    
    Ensure the `requireAuth` middleware and all the routes are set up correctly.
    
    -   **routes/testRoutes.js**: Contains routes for fetching all tests, single test, and creating new tests.
    -   **middlewares/requireAuth.js**: Middleware for verifying JWT tokens.
3.  **Frontend Configuration:**
    
    Check the API endpoints in your React components to ensure they match the backend routes. Update the `base URL` if necessary.
    

### Running the Application

1.  **Start the backend server:**
    
    bash
    
    Copy code
    
    `cd backend
    npm start` 
    
    This will run the backend server on `http://localhost:3000`.
    
2.  **Start the frontend application:**
    
    bash
    
    Copy code
    
    `cd ../frontend
    npm start` 
    
    This will open the application in your default browser on `http://localhost:5173`.
    

### Accessing the Application

-   **Home Page**: `http://localhost:5173/`
-   **Employee Page**: `http://localhost:5173/employee` (Requires login)
-   **Test Details Page**: `http://localhost:5173/details/:id` (Replace `:id` with the actual test ID)

## Project Structure


### Backend

-   **controllers/**: Contains controller functions to handle HTTP requests.
    
    -   `testControllers.js`: Handles operations related to test records such as fetching all tests, fetching a test by ID, and adding a new test.
-   **middlewares/**: Includes middleware functions for various purposes.
    
    -   `requireAuth.js`: Middleware to verify JWT tokens and protect routes.
-   **models/**: Defines the Mongoose schemas for MongoDB collections.
    
    -   `testSchema.js`: Schema for storing test records in MongoDB.
-   **routes/**: Defines Express routes for API endpoints.
    
    -   `testRoutes.js`: Routes for CRUD operations on test records.
-   **.env**: File to store environment variables such as MongoDB URI and JWT secret (not included in version control for security reasons).
    
-   **server.js**: Entry point for the Express server, initializes the server and connects to MongoDB.
    
-   **package.json**: Lists the backend dependencies and scripts for running the server.
    

### Frontend

-   **public/**: Contains public assets like the main HTML file.
    
    -   `index.html`: The HTML template for the React application.
-   **src/**: Contains all source code for the React application.
    
    -   **assets/**: Stores static assets like images and logos.
        
        -   `logo.svg`: The application logo.
    -   **components/**: Reusable React components used across different pages.
        
        -   `CheckoutForm.jsx`: Component for handling test checkout operations.
        -   `HistoryCard.jsx`: Component for displaying test history.
        -   `LogoutButton.jsx`: Component for handling logout functionality.
        -   `SignupForm.jsx`: Component for the signup form.
        -   `LoginForm.jsx`: Component for the login form.
        -   `HeroCard.jsx`: Main card component used on the landing page.
    -   **context/**: Provides global state management using React Context API.
        
        -   `AuthContext.jsx`: Manages authentication state and provides context to the app.
        -   `TestContext.jsx`: Manages state related to tests and provides context to the app.
    -   **hooks/**: Custom hooks for encapsulating logic and reusability.
        
        -   `useAuthContext.js`: Custom hook to access authentication context.
        -   `useTestContext.js`: Custom hook to access test context.
    -   **pages/**: React components for different pages in the application.
        
        -   `Home.jsx`: Component for the home page.
        -   `Service.jsx`: Component for the service page.
        -   `Employee.jsx`: Dashboard component for employee-related functionalities.
        -   `DetailsPage.jsx`: Component for displaying detailed information about a specific test.
    -   **App.jsx**: The main App component that sets up the routing and context providers.
        
    -   **index.jsx**: The entry point of the React application, rendering the App component.
        
    -   **index.css**: Contains global CSS styles for the application.
        
-   **package.json**: Lists the frontend dependencies and scripts for running the React app.

## Usage

### Employee Authentication

-   **Signup**: Employees can create an account via the `/signup` route.
-   **Login**: Use the `/login` route for existing employees to log in.

### Test Management

-   **View All Tests**: Access the list of all tests on the `/employee` page.
-   **View Test Details**: Click on any test to view detailed information on the `/details/:id` page.
-   **Add New Test**: Use the form on the `/employee` page to add a new test.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes and push them to your fork.
4.  Submit a pull request with a detailed description of your changes.

## Acknowledgements

-   [React](https://reactjs.org/)
-   [Express](https://expressjs.com/)
-   [Material-Tailwind](https://www.material-tailwind.com/)
-   [Mongoose](https://mongoosejs.com/)