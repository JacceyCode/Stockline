# React Native Assessment - Stockline App

## Overview

This repository contains the development of the Stockline App using React Native Expo and TypeScript. The application leverages the Native Expo package with TypeScript and Expo Router for navigation. Gesture Handler and the native reanimated library have been incorporated to enhance the onboarding screen navigation with smooth animations.

## Features

- Seamless navigation using Expo Router.
- Utilization of Gesture Handler and native reanimated library for smooth onboarding screen transitions.
- User-friendly Signup and Login screens.
- Validation of user information to ensure accuracy.
- Proper error handling for a smooth user experience.
- Integration of React Phone Number Input and React OTPInput libraries.
- Passing basic user information to the next screen through route params.

## Signup/Login Steps

1. **User Information Entry:**
   - Ensure details entered are correct, as they are verified before gaining access to the next screen.
   - Username must be a minimum of 3 letters.
   - Email must be valid.
   - Password length must be greater than 5 letters.
   - Phone number length must be between 10 - 16 characters.

2. **OTP Verification:**
   - The OTP is the last 4 digits of the entered phone number.

## Development Setup

To set up the development environment, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/JacceyCode/Stockline.git
   ```

2. Install dependencies:

   ```bash
   cd stockline-app
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   This will launch the development server, and you can access the app through Expo on your device or emulator.

## Contribution

Feel free to contribute to the project by submitting issues or pull requests. Your feedback and collaboration are highly appreciated.

---

**Happy coding!**
