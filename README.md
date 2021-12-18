# Email API

## Setup

- Clone the repository on your local machine
- Open a command/terminal window in the root folder of the project
- Run `npm install` to install all the dependencies

## Usage

- Open a command/terminal window in the root folder of the project
- Run `npm start` in the command/terminal window to start the server
- The server will start on PORT 5000
- To test, send POST request to `http://localhost:5000/` with message body as
  ```
  {
      "to": "receiver's email e.g. harry@email.com",
      "email_body": "Enter email body here..."
  }
  ```
