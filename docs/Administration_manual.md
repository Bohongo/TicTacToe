# Administration manual
## A Tic Tac Toe game
This is a manual to know what is needed to maintain the project Tic Tac Toe. In this manual there is a list of tools needed to access everything needed and is a overview over the system after the newly developed game.

### Hardware requirements:
* Processor: 1 GHz or faster processor
* RAM: 1 GB for 32-bit or 2 GB for 64-bit
* Hard drive space: 16 GB for 32-bit OS 20 GB for 64-bit OS
* Display: 800x600

### Tools:
1. node.js (https://nodejs.org/en/)
1. npm package manager https://www.npmjs.com/
2. Jest for javascript testing https://jestjs.io/
3. Heroku cloud platform service for hosting websites https://www.heroku.com/
4. Github cloud sharing website for developers to discover, share and build better software, it holds the repository for the project https://github.com/
5. Git bash https://git-scm.com/downloads (or terminal for mac/linux)
   
   
## Step-by-step installation guide for "administrator/project owner" for "changes/maintenence" of the software:
1. Download node.js 
2. Install the git bash (for windows user) or use the terminal (for mac/linux OS)
3. Open up the "git bash/terminal" and go to a desired directory (for beginners on commands read: https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners)
4. Type git config --global user.name "(here you type the username)" (+ enter)
5. Type git config --global user.email "(here you type the email)" (+ enter)
6. Type git clone https://github.com/Bohongo/TicTacToe.git (+ enter)
7. Type npm install (+ enter)
8.   Run the cloned project with npm start (+ enter), now the localhost should show the server in browser
9.   Now install heroku toolbelt https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
10. To create the heroku app type heroku apps:create bohongoapp
11. Type git push heroku master
12. Now the app should be accessable at https://bohongoapp.herokuapp.com/