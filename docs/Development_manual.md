# Development manual
## A guide for build enviroment and other necessary dependencies for a Tic Tac Toe game development.
This is a manual to know what is needed to access the projects build enviroment and other dependencies for development. There is a list of tools needed to access everything needed and is a overview over the system.

### Hardware requirements:
* Processor: 1 GHz or faster processor
* RAM: 1 GB for 32-bit or 2 GB for 64-bit
* Hard drive space: 16 GB for 32-bit OS 20 GB for 64-bit OS
* Display: 800x600

### Tools:
1. node.js (https://nodejs.org/en/)
2. npm package manager https://www.npmjs.com/
3. Jest for javascript testing https://jestjs.io/
4. Github cloud sharing website for developers to discover, share and build better software, it holds the repository for the project https://github.com/
5. Git bash https://git-scm.com/downloads (or terminal for mac/linux)
6. Circleci https://circleci.com/
   
   
## Step-by-step installation guide for development and build enviroment:
1. Download node.js 
2. Login to circleci and add set up the project for testing
3. Install the git bash (for windows user) or use the terminal (for mac/linux OS)
4. Open up the "git bash/terminal" and go to a desired directory (for beginners on commands read: https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners)
5. Type git config --global user.name "(here you type the username)" (+ enter)
6. Type git config --global user.email "(here you type the email)" (+ enter)
7. Type git clone https://github.com/Bohongo/TicTacToe.git (+ enter)
8. Type npm install (+ enter)
9.   Run the cloned project with npm start (+ enter), now the localhost should show the server in browser

## Programming enviroment
The programming enviroment is javascript, html and css. The root directory has the node_modules folder that is ignored by the .gitignore file so it won't be pushed to the github repository. Package.json has the scripts and more to build and run the website with the help of server.js, webpack.config.js and app.js.
In the src directory we have the sub directories client, logic and server. Client has the framework for the website which includes index.html and style.css (and more). Logic directory includes the game logic with a test file. Server directory has the api file for connecting the files and server together.

## Testing
Type npm test to run the test files for unit testing. When files are added + commited + pushed to the git repository, circleci will do the necessary steps and npm test automatically.
