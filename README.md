Overview  
This project is a basic web application that provides authentication functionality using React, React Router, and Appwrite. The app allows users to register, log in, and access protected routes only if they are authenticated. It includes pages for Home, Login, Signup, and Profile, with routing and private route protection implemented.

Features
User authentication (Login/Signup)
Protected routes
User profile management
Basic navigation and routing
State management using context API


Technologies Used

Frontend
React: A JavaScript library for building user interfaces.
React Router: A library for handling routing in React applications.
CSS: Styling the application.


Backend
Appwrite: An open-source backend server that provides authentication, database, and other backend services.


Components

Header.jsx
This component displays the navigation bar with links to Home, Profile, Login, and Signup pages. It conditionally renders links based on the user's authentication status.

Home.jsx
This component is the landing page for the application, displaying a welcome message.

Login.jsx
This component handles user login functionality. It uses the useAuth context to authenticate users and navigate them to the home page upon successful login.

Signup.jsx
This component handles user registration. It allows users to sign up by providing their name, email, and password. It also uses the useAuth context to register users and navigate them to the home page upon successful registration.

Profile.jsx
This component displays the user's profile information. It is a protected route that only authenticated users can access.

AuthContext.jsx
This file contains the authentication context for managing user authentication state throughout the application. It provides functions for logging in, logging out, and registering users.

PrivateRoutes.jsx
This component handles private routing, ensuring that only authenticated users can access certain routes.
