# Angular Memory Game 🧠

![til](https://raw.githubusercontent.com/nasserso/angular-memory-game/main/src/assets/images/memory.gif)

## Execute with docker in dev

Enter the folder

Run `docker build -t memory-game .` to build the app.

Run `docker run -it -v $(pwd):/app -p 4200:4200 memory-game` to start the docker image in development

Navigate to `http://localhost:4200/` to play it.

## Execute without docker

Enter the folder

Run `npm install` to install the dependencies.

Run `npm start` to execute the game.

Navigate to `http://localhost:4200/` to play it.
