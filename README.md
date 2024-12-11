# Uiverse

Uiverse is a UI component library designed to provide a set of reusable and customizable components for building modern web applications.

## Table of Contents

- [Uiverse](#uiverse)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Development Mode](#development-mode)
  - [Code Connect and Storybook](#code-connect-and-storybook)
  - [Environment Configuration](#environment-configuration)
  - [Publishing the Package](#publishing-the-package)

## Installation

To install Uiverse, use npm or yarn:

```bash
npm install galaxis-uiverse
yarn add galaxis-uiverse
```

## Configuration

You can configure the Uiverse theme by providing a configuration object to the Uiverse. The configuration is optional, and the default theme is "dark".

```jsx
import { Uiverse } from "galaxis-uiverse";

// Optional, you can use simple <Uiverse></Uiverse>
const config = {
  theme: "dark", // or "light"
};

function App() {
  return (
    <Uiverse config={config}>
      <PackageComponents />
    </Uiverse>
  );
}
```

## Development Mode

To set up the project in development mode, follow these steps:

1. **Create a public folder**: Create a `public` folder in the root directory of your project.

2. **Create an index.html**: Inside the `public` folder, create an `index.html` file with the following content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uiverse</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

3. **Create an index.tsx**: In the `src` folder, create an `index.tsx` file with the following content:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Uiverse } from "./uiverse";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Uiverse>{/* You can import the developing component here */}</Uiverse>
  </React.StrictMode>
);
```

4. **Rename the src/index.ts**: Rename the `src/index.ts` file to `src/ignore-index.ts`.

5. **Start the development server**: Run the following command to start the development server:

```bash
npm run start
```

6. **Open the app in the browser**: Open your browser and navigate to `http://localhost:3000` to see your app in action.

## Code Connect and Storybook

To create a new component and integrate it with Figma Code Connect and Storybook, follow these steps:

1. **Create a component**: In the `src/uiverse/components` folder, create a new component file, e.g., `my-component.component.tsx` and create a styled wrapper for your component.

2. **Connect to Figma**: Use the `figma connect create  https://www.figma.com/componentURL` command to generate properties from Figma. Replace `componentURL` with your Figma component URL.

3. **Implement the component**: Use the generated properties in your component implementation.

4. **Publish to Figma**: After implementing the component or components, run the following command to publish your code to Figma `figma connect publish`.

5. **Create Storybook examples**: Add examples for your component in Storybook. Create a new story file, e.g., my-component.stories.tsx.

6. **Run Storybook locally**: To see your component in action, run the following command:

```bash
npm run storybook
```

7. **Publish to Chromatic**: If everything looks good, publish your Storybook to Chromatic.

```bash
npm run chromatic
```

## Environment Configuration

To configure the environment for publishing to Figma and Chromatic, create a .env file with the following properties:

```plaintext
FIGMA_ACCESS_TOKEN=your_figma_access_token
CHROMATIC_PROJECT_TOKEN=your_chromatic_project_token
```

To create a Figma access token, follow these steps:

1. Go to the Figma website and log in to your account.
2. Navigate to your account settings.
3. Under the "Personal Access Tokens" section, click on "Create a new personal access token".
4. Copy the generated token and use it in your `.env` file.

## Publishing the Package

To publish the Uiverse package to npm, follow these steps:

1. **Build the package (this is optional because the publish command builds the project too)**: Run the following command to build the package.

```bash
npm run build
```

2. **Update the version**: Use the `scripts/release.ts` script to update the version of the package. You can choose to increase the subversion, main version, core version, or set a custom version.

3. **Publish to npm**: Run the following command to publish the package to npm.

```bash
npm publish
```

Make sure you have the necessary permissions and are logged in to your npm account before publishing.
