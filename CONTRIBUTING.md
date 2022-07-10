## Setting up local development
- Fork the repository.
- Clone the repository using `git clone https://github.com/{yourUsername}/chic-ui.git`
- `npm install` to install the required dependencies.
- `npm run storybook` to launch StoryBook.

## Folder Structure
If you are working on a new component, then follow the following folder structure:
- Make a folder with the same name as the component you are working on inside the `components` folder.
- Write the main component logic in `{componentName}.tsx` file.
- All related styling should be written in `styled.ts` file.
- Exports for the component in `index.ts`.
- `{componentName}.stories.tsx` for testing the component in StoryBook.

## Contributing Guidelines
- If you're planning to implement a new feature I will recommend you to discuss with me before you start coding so you won't end up working on something that I don't want to implement. Create an Issue with proper name and content for discussion.
- Need help in understanding the code? <a href="mailto:carishmashukla28@gmail.com">Email me.</a>

- For Contributing to this repository
  1. Fork the repository.
  2. Create a branch with the name of the feature you're working on (e.g. `Switch Component`).
  3. Once you're done coding create a merge request from your new branch to my `feature`. (Read the Local Development section above for local setup guidelines)

## Coding Guidelines
- Please write comments wherever necessary.
- Write unit tests wherever possible.
- Please write proper commit messages explaining your changes.
