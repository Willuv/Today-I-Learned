# Today I Learned

"Today I Learned" is a React application that allows users to share interesting facts they have learned. The application connects to a Supabase backend to store and retrieve facts.

## Features

- Share new facts with the world.
- View facts by category.
- Vote on facts (Interesting, Mind-blowing, or False).
- Filter facts by different categories.
- Dynamic and responsive UI.

## Technologies Used

- React
- Supabase
- CSS
- JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/today-i-learned.git
    cd today-i-learned
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up Supabase:

    - Create a new project on Supabase.
    - Get your `Supabase URL` and `Supabase Key` from your project settings.
    - Create a `.env` file in the root of your project and add your Supabase credentials:

      ```sh
      REACT_APP_SUPABASE_URL=your_supabase_url
      REACT_APP_SUPABASE_KEY=your_supabase_key
      ```

4. Start the development server:

    ```sh
    npm start
    # or
    yarn start
    ```

    Your application should now be running on `http://localhost:3000`.

### Project Structure

- `src/`
  - `App.js`: Main component of the application.
  - `supabase.js`: Supabase client configuration.
  - `style.css`: CSS styles for the application.
  - `components/`: Contains all the React components used in the application.

### Deployment

To create a production build, run:

```sh
npm run build
# or
yarn build


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
