# AI-Powered Quiz Generator

A React application that leverages OpenAI's API and prompt engineering to generate quizzes dynamically based on user input. The application features a minimalistic UI and processes the AI-generated quiz data into an interactive quiz experience.

---

## 🚀 Features
- **Dynamic Quiz Generation**: Enter a topic into the prompt field, and the application generates a 10-question quiz.
- **Specialized Prompt Engineering**: Combines the user's input with a system prompt to guide the AI in creating high-quality quiz questions.
- **JSON Data Processing**: AI responses are returned in JSON format and stored in React state for quiz progression, scoring, and timer management.
- **Interactive Quiz Interface**: Includes a built-in 3-minute timer and point calculation for a streamlined quiz experience.

---

## 🛠️ Technologies Used
- **React**: Front-end framework for building the user interface and managing application state.
- **JavaScript**: Core programming language for application logic.
- **JSON**: Data format for handling AI-generated quiz questions and answers.
- **OpenAI API**: AI model for generating quiz content using specialized prompts.
- **Prompt Engineering**: Custom system prompts ensure the AI produces relevant, high-quality quiz questions.

---

## 📋 How It Works
1. The user enters a topic in the text input field on the simple UI.
2. The application sends the user's prompt, combined with a system-engineered prompt, to the OpenAI API.
3. The API responds with a JSON object containing:
   - 10 quiz questions.
   - Multiple-choice answers or options.
   - Correct answers.
4. The JSON response is processed and stored in React state.
5. The user interacts with the quiz, moving through the questions, while:
   - Points are calculated for correct answers.
   - A 3-minute timer is displayed and managed.

---

## 🖥️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- An OpenAI API key for accessing the language model.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-powered-quiz-generator.git
   cd ai-powered-quiz-generator

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
