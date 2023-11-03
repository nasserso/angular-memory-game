## How to execute with docker

Enter the folder
Run `docker build -t memory-game .` to build the app.
Run `docker run -it -v $(pwd):/app -p 4200:4200 memory-game` to start the docker image in development
Navigate to `http://localhost:4200/` to play it.

## How to execute without docker

Enter the folder
Run `npm install` to install the dependencies.
Run `npm start` to execute the game.
Navigate to `http://localhost:4200/` to play it.
