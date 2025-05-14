# Contributing to Buildship Tool Instructions

Thank you for your interest in contributing to Buildship Tool Instructions! This document outlines how to set up your environment and contribute effectively.

---

## Development Setup

1. **Fork** the repository
2. **Clone** your fork:
```bash
git clone https://github.com/[your-username]/tools-instructions.git
```
3. **Install dependencies**:
```bash
yarn
```
4. **Run the development server**:
```bash
yarn dev
```

> Navigate to http://localhost:3030/agent-builder.js in your browser to view the rendered MDX files.

---

## Creating Instructions for a New Agent

1. Create a new **MDX file** in the `buildship-app-mdx` directory. Name it after the agent you're documenting, e.g., `vibe-coder.mdx`.

2. To enable **intellisense** for the props and components in the MDX files, add the following lines at the top of your MDX file:
```typescript
{
/**
   * @import { type Props } from '../types/preview'
   */
}
```


3. Write your content using the available components and props defined in the `buildship-app-mdx/types` directory. Refer to existing MDX files for examples and structure.

4. Understand the directories:

- `buildship-app-mdx`: Where you create and edit MDX documentation.

- `buildship-app-js`: Where the app compiles the JavaScript output.

5. Test your changes locally by running the development server. Ensure there are no errors.

6. Commit your changes to your fork:
```bash
git add .
git commit -m "Add instructions for [agent name]"
```

7. Push your changes and submit a pull request:
```bash
git push origin [your-branch-name]
```
- Create a pull request against the main repository

## Questions?

Feel free to open an issue for any questions or concerns.
