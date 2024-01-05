# Todo App

The Todo App is a React-based application designed to help users manage their tasks efficiently. It provides a user-friendly interface for adding, editing, deleting, and filtering tasks.

## Table of Contents

- [Code Structure and Organization](#code-structure-and-organization)
- [React Components and State Management](#react-components-and-state-management)
- [User Interface Design and Usability](#user-interface-design-and-usability)
- [Event Handling and State Updates](#event-handling-and-state-updates)
- [Code Cleanliness, Readability, and Best Practices](#code-cleanliness-readability-and-best-practices)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Code Structure and Organization

The Todo App follows a modular code structure for better organization and maintainability. Key components include:

- **`src/components`**: Contains reusable UI components such as buttons, forms, and text elements.

- **`src/context`**: Manages the application's global state using React Context API.

- **`src/hooks`**: Custom hooks for managing specific functionalities like Todos `useTodo.ts`.

- **`src/containers`**: Holds the main pages of the application.

- **`src/styles`**: Centralized styling using styled-components.

## React Components and State Management

The application utilizes React components for a component-based architecture. State management is achieved through the use of React Context API, providing a centralized store for managing Todos.

## User Interface Design and Usability

The user interface is designed to be intuitive and user-friendly. Key features include:

- **Task Management**: Users can add, edit, and delete tasks.

- **Filtering**: Tasks can be filtered based on completion status.

- **Responsive Design**: The application is designed to be responsive across various devices.

## Event Handling and State Updates

Event handling is implemented for actions such as adding, editing, deleting, and filtering tasks. State updates are managed efficiently through React's state and context system.

## Code Cleanliness, Readability, and Best Practices

The codebase adheres to best practices for React development. Key principles include:

- **Modularity**: Components are modularized for reusability.

- **Consistent Styling**: Styled-components are used for consistent styling.

- **Descriptive Variable Names**: Variable and function names are chosen to be descriptive.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Diyaa-Gubarah/todo.git
   ```

2. ````cd todo &
   npm install```
   ````

3. then run the app using : `npm run dev`
