# ***Note Taker App***

## Objective

Beginning with the code provided in class, this code implements a simple note-taker app that allows the user to enter new notes and to display the numbered notes. Blank note entry is disallowed.

## Development process

- For this project, I started with forking `github.com/IDTitanium/notesApp`. That repository contained the beginning code from week3's project.
- I added to that the code I wrote for week 3 and then moved that code to a public folder in this project.
- Then, I initialized an `npm` project and added the code necessary to serve the project files using the node.js server.

### Key dfference from teacher implementation

- array list instead of map for data structure for notes

## How to start

- After cloning the repository, perform `npm install` to install the necessary modules. Then, type `npm run dev` to run a server in dev mode and start the javascript code in the top-level `index.js`.

## Using the app

- Type in notes in the text area and click "Save Note". 
- Each click of the "Save Note" button will add a new note. 
- View the notes by clicking "View Notes" and return to the initial page by clicking "Back".
