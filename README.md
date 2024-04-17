# Markdown Viewer Application

This Markdown Viewer application allows users to input Markdown text in a textarea and see the live conversion to HTML. Below are the instructions to access and set up the application through different methods.

## Access Application

### Method 1: Through Link

You can access the application via the following link:

[Markdown Viewer Application](https://markdownviewer-akashsharma.netlify.app/)

- Front-end is deployed on Netlify.
- Back-end is deployed on Render.

**Note:** If you encounter no response when accessing the application via the link, please wait for 2 minutes. The backend might be inactive due to the free tier of Render. It will restart within 2 minutes.

### Method 2: Setup Locally

Follow these steps to set up the application locally:

1. Clone the repository: git clone https://github.com/akashsharma2108/markDown-viewer.git
2. Deploying Backend: <br/>
    -cd Backend <br/>
    -npm install <br/>
    -npm run dev <br/>


**Note:** If you encounter issues during installation, delete the `package-lock.json` file and run npm install again.


3. Deploying Frontend: <br/>
    -cd Frontend <br/>
    -npm install <br/>
    -npm start  <br/>


**Note:** If you encounter issues during installation, delete the `package-lock.json` file and run npm install again.

The application will be up and running with both frontend and backend.

## About Application

The application uses React for the frontend, featuring a simple textarea. Websockets are utilized to communicate with the backend for live conversion.

In the backend, Socket.IO is used to handle socket requests.

## feel free to reach out to me for any queries or suggestions.
### mail: akashsharma90099@gmail.com
#### thank you for visiting my repository.


