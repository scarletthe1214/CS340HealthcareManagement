# CS 340 React Starter Guide

## Lingering Items (Delete)
- link professor emails and Devin/Zac linkedin
- ensure that github repo lets the public clone, but not commit/change main???
- double check all package.jsons for accuracy in information
- delete extra commented out cors line in server.js
- change .envs to match the final port numbers and urls
- Edit frontend tables to show better data and examples on how to JOIN and do other stuff
- Edit frontend forms to match dynamic dropdown requirement and not use typed id numbers
- Modify instructions to ensure that this works with Windows operating systems also.

## Table of Contents
- adsh
- asdf
1. adsfasdf
2. asdflkaj

## Contributions

This guide was developed by [Devin Daniels](https://github.com/devingdaniels) and [Zachary Maes](https://github.com/zacmaes) under the supervision of [Dr. Michael Curry](mailto:michael.curry@oregonstate.edu) and [Dr. Danielle Safonte](mailto:danielle.safonte@oregonstate.edu).


## TL;DR

1. Clone the starter app repository: `git clone git@github.com:osu-cs340-ecampus/react-starter-app.git`
2. Navigate to the `/App` directory: `cd react-starter-app/App`
3. Set up the frontend:
   1. Change directory to frontend: `cd frontend`
   2. Install necessary packages: `npm install`
   3. Launch the frontend: `npm start`
4. Set up the backend:
   1. Change directory to backend: `cd ../backend` 
   2. Install necessary packages: `npm install`
   3. Launch the backend: `npm start`
5. Begin your development journey: Happy Hacking!

## Overview

This guide is tailored for students enrolled in CS 340 who aim to develop their final project using React.js, Node/Express, and MySQL.

The starter code provided in this guide encompasses essential components such as tool setup, infrastructure for building and running your application, and guidelines for deploying your application to OSU's Flip server.

Key Assumptions:

1. You have read through and understand the [nodejs-starter-app](https://github.com/osu-cs340-ecampus/nodejs-starter-app)
   - That guide uses nodejs, express, and handlebars, but goes deeper into the inner workings of express and nodejs.
2. You have a foundational understanding of JavaScript and MySQL syntax.
3. You are adept at using terminal commands like `cd`, `ls`, `mkdir`, etc.
4. Access to OSU's flip servers and a MySQL database is available to you.
   - Note: Adaptations for local development are possible and outlined in this guide.

## Introduction

The goal of this repo is to provide you with the basic structure of a React/Vite + Express/Node full-stack application, including a few example SQL queries.

## Getting Started

IDE: Visual Studio Code

Browser: Chrome or Firefox are recommended, though other browsers will probably suffice.

VScode SSH extension: [Visual Studio Code SSH Documentation](https://code.visualstudio.com/docs/remote/ssh)

Terminal: The built-in terminal in VSCode works great.

## Backend Setup (Node.js/Express)

1. Create a `.env` file in the root directory (`.env` should have the same indentation as `server.js`, both need to be at the root of the directory).
2. Git cloning does not include the `.env` file for obvious reasons. Here is the naming schema I would suggest (fill in with info from activity 2 - Connecting to 340 DB)):
   ```python
   DB_HOST="classmysql.engr.oregonstate.edu"  # keep this
   DB_USER="cs340_youronid"                   # replace with your onid
   DB_DATABASE="cs340_youronid"               # replace with your onid
   DB_PASSWORD="****"                         # your db password - last 4 digits of osu id number
   PORT=8500                                  # Set a port number between:[1024 < PORT < 65535]
3. `server.js` is the entry point for the backend. No changes are needed here except perhaps updating the `console.log()` statement in the `app.listen()` to reflect the FLIP server you've connected to via SSH.

4. Inside your flip server you will need to set up the `ddl.sql` file located inside `/backend/databases/` using the source command.
   ```sh
   # change directory to where the ddl.sql file is located
   cd react-starter-app/App/backend/databases  # or wherever the ddl.sql is located

   # normal login command (if not using shortcut)
   mysql -u cs340_youronid -h classmysql.engr.oregonstate.edu -p cs340_youronid

   # type in your 4 digit mariadb password and press 'enter' key
   ```

   flip will login to mariadb...
   ```
   Welcome to the MariaDB monitor.  Commands end with ; or \g.
   Your MariaDB connection id is 1359790
   Server version: 10.6.16-MariaDB-log MariaDB Server

   Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
   ```
   Use 'show tables;' command to ensure that your database is empty, backup tables if necessary prior to moving on, drop all of your tables.
   ```sql
   MariaDB [cs340_maesz]> SHOW tables;
   Empty set (0.001 sec)
   ```
   Now you can source the ddl.sql
   ```sql
   MariaDB [cs340_maesz]> source ddl.sql;
   Query OK, 0 rows affected (0.001 sec)

   Query OK, 0 rows affected, 1 warning (0.004 sec)

   Query OK, 0 rows affected (0.007 sec)

   Query OK, 11 rows affected (0.001 sec)
   Records: 11  Duplicates: 0  Warnings: 0

   Query OK, 0 rows affected, 1 warning (0.003 sec)

   Query OK, 0 rows affected (0.005 sec)

   Query OK, 4 rows affected (0.000 sec)
   Records: 4  Duplicates: 0  Warnings: 0

   Query OK, 0 rows affected, 1 warning (0.003 sec)

   Query OK, 0 rows affected (0.006 sec)

   Query OK, 9 rows affected (0.001 sec)
   Records: 9  Duplicates: 0  Warnings: 0

   Query OK, 0 rows affected (0.007 sec)

   Query OK, 8 rows affected (0.001 sec)
   Records: 8  Duplicates: 0  Warnings: 0

   Query OK, 0 rows affected (0.000 sec)
   ```
   Confirm everything sourced with a `show tables;` command
   ```sql
   MariaDB [cs340_maesz]> show tables;
   +-----------------------+
   | Tables_in_cs340_maesz |
   +-----------------------+
   | bsg_cert              |
   | bsg_cert_people       |
   | bsg_people            |
   | bsg_planets           |
   +-----------------------+
   4 rows in set (0.001 sec)
   ```
   Exit mariadb
   ```sh
   MariaDB [cs340_maesz]> exit
   Bye
   flip3 ~/react-starter-app/App/backend/database 1010$  # We are now back in the terminal
   ```

5. Now you must install all the node dependencies outlined in the `package.json` and `package-lock.json`. Run the following commands to do this:
   
   Change directory to `/backend`, wherever that exists in your file structure.
   ```sh
   cd ~/react-starter-app/App/backend
   ```
   Use `npm install` to download everything (Some of you may have to debug this step if anything goes wrong...):
   ```sh
   flip3 ~/react-starter-app/App/backend 1023$ npm install

   # installer does some magic...

   added 122 packages, and audited 123 packages in 28s

   15 packages are looking for funding
   run `npm fund` for details

   found 0 vulnerabilities
   flip3 ~/react-starter-app/App/backend 1024$ ▌
   ```

6. Now you can start your application with the start script located in the `package.json`
   ```bash
   flip3 ~/react-starter-app/App/backend 1024$ npm start

   > backend@1.0.0 start
   > nodemon server.js

   [nodemon] 3.0.2
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching path(s): *.*
   [nodemon] watching extensions: js,mjs,cjs,json
   [nodemon] starting `node server.js`
   Server running:  http://flip3.engr.oregonstate.edu:8500...
   ▌
   ```

   This repo uses the package `nodemon` to run your program continuously. You may also install the package `forever` to accomplish this, see the [nodejs-starter-app](https://github.com/osu-cs340-ecampus/nodejs-starter-app) for instructions regarding the `forever` package.

   Remember, you must change the port numbers!

## Frontend Setup (Vite)

This section will guide you through setting up the frontend part of your application using Vite and React. Create React App has traditionally been the go to way to develop a react project, but It has been deprecated (no longer being updated or has support). Vite is the more modern bundling solution, which is what we use in this project. It is highly recomended that you read the [documentation for Vite](https://vitejs.dev/guide/) to understand how it works. It is very similar to CRA so many tutorials for CRA are still appicable to Vite projects for when you are searching the web for help.

Vite allows you to write react code, start a development server with `npm start`, and build a static `/dist` folder to serve your finished application (more on this in a later section). The scripts for these can be found or modified inside the `package.json`. Now we will walk through how to get your development server set up and running.


1. Navigate to the `/frontend` directory.
   ```sh
   flip3 ~/react-starter-app/App 1006$ cd frontend
   ```

2. Modify the fronted `.env` file so that `VITE_API_URL` matches the backend api url you created in the prior steps. Also modify the frontend `VITE_PORT` for your dev server to run on.
   ```python
   VITE_API_URL='http://flip3.engr.oregonstate.edu:8500/api/'  # Change this url to match your backend express api url and port.
   VITE_PORT=8501  # Set a port number between:[1024 < PORT < 65535], this should not be the same as the API port.
   REACT_SERVER_PORT=6061 # This is the port used in the /frontend/reactServer.js to host your '/dist' build folder... more on this later in the guide...
   ```

   The `VITE_API_URL` environment variable is used to fetch data from the backend api to this frontend application with axios in components like `PersonTable.jsx`. Here is a function from that file to demonstrate this:
   ```jsx
   // FILE: PersonTable.jsx
   const fetchPeople = async () => {
      try {
         const URL = import.meta.env.VITE_API_URL + "people";
         const response = await axios.get(URL);
         setPeople(response.data);
      } catch (error) {
         alert("Error fetching people from the server.");
         console.error("Error fetching people:", error);
      }
   };
   ```

   The `VITE_PORT` environment variable is used to modify the frontend port that this vite application runs on. This is set up inside the file `vite.config.js`. Usually the default port for vite react projects is `5173`, but we are using dotenv to modify this to a port of your choosing. You can see how this works below:

   ```js
   // FILE: vite.config.js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import dotenv from 'dotenv'

   dotenv.config()

   // https://vitejs.dev/config/
   export default defineConfig({
   plugins: [react()],
   esbuild: {
      loader: "jsx"
   },
   server: {
      // Use VITE_PORT from your .env, or default to a port if not specified
      port: parseInt(process.env.VITE_PORT, 10) || 5173
   }
   })
   ```

3. Install all the frontend dependencies. This will add the `node_modules` folder so that your project can run properly.
   ```sh
   flip3 ~/react-starter-app/App/frontend 1008$ npm install
   
   # installer does some magic...

   added 284 packages, and audited 285 packages in 17s

   99 packages are looking for funding
   run `npm fund` for details

   found 0 vulnerabilities
   flip3 ~/react-starter-app/App/frontend 1008$ ▌
   ```

4. Now you are ready to start the application using the start script inside the `package.json`. When working with the Vite development server on a remote server (e.g., flip3), there are different ways to start the server and access your application, depending on whether you need local access (on the remote server itself) or external access (from your own computer or the internet).

To accomplish these options, this guide assumes that you are following the instructions for SSH through Vscode using the [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) Vscode plugin. The instructions for setting up your ssh client can be found on the Canvas Practice Resources.

With that being said, this magical VSCode plugin is able to auto-forward the ports from the remote flip server to your local machine. This means that when you start the development server on flip, VSCode can tunnel the server's port back to your local machine, so you can access it as if it were running locally via `localhost:PORT/` or `127.0.0.1:PORT/`. Please note that to view the URLs in both options below, you must be signed into the VPN.

   ### Option 1 - Local Only
   When you start the Vite server using the standard `npm start` command, the server binds to `localhost` of the remote machine. The VSCode Remote - SSH plugin automatically detects this and sets up port forwarding, allowing you to access the server using `localhost` or `127.0.0.1` in your local machine's browser. This method keeps the server private to your local machine, and it cannot be viewed by anyone else except you.
   ```sh
   flip3 ~/react-starter-app/App/frontend 1003$ npm start

   > cs340-react-starter-app@0.0.0 start
   > vite


   VITE v5.1.4  ready in 525 ms

   ➜  Local:   http://127.0.0.1:8501/ or http://localhost:8501/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help

   h  # use h to see some options

   Shortcuts
   press r + enter to restart the server
   press u + enter to show server url
   press o + enter to open in browser
   press c + enter to clear console
   press q + enter to quit

   q  # Use q to stop vite from running and return to the terminal.

   flip3 ~/ula_cs340/winter24/react-starter-app/App/frontend 1003$ ▌

   ```

   ### Option 2 - Expose to Network
   If you need to share your development server with teammates or access it from devices other than your local machine, you can start the server with the `--host` option by running `npm start -- --host`. This tells Vite to listen on all network interfaces, making the server accessible via the remote server's public IP address. Note that VSCode will still forward this port, but now other devices can also access the server if they can reach the remote server's IP.

   ```sh
   flip3 ~/ula_cs340/winter24/react-starter-app/App/frontend 1003$ npm start -- --host

   > cs340-react-starter-app@0.0.0 start
   > vite "--host"


   VITE v5.1.4  ready in 1330 ms

   ➜  Local:   http://localhost:8501/     or http://127.0.0.1:8501/
   ➜  Network: http://128.193.36.41:8501/ or http://flip3.engr.oregonstate.edu:8501/ 
   # Now anyone with the VPN can view your dev server at these network URLs
   ➜  press h + enter to show help

   h  # use h to see some options

   Shortcuts
   press r + enter to restart the server
   press u + enter to show server url
   press o + enter to open in browser
   press c + enter to clear console
   press q + enter to quit

   q  # Use q to stop vite from running and return to the terminal.

   flip3 ~/ula_cs340/winter24/react-starter-app/App/frontend 1004$ ▌
   ```

   ### Important Note About Stopping Processes!
   While testing the command `npm start -- --host`, it was observed that using `^C` to send the `SIGINT` signal does not always lead to a clean shutdown of the Vite development server. This is because `SIGINT` may not terminate child processes spawned by Vite, leading to the server process lingering in the background.

   If you encounter issues where the server's port remains in use even after attempting to stop the server with `^C`, you can follow these steps for a more forceful shutdown:

   1. Identify the lingering process:
      - Use `lsof -i :<YOUR PORT>` to list all processes using the port.
      - Alternatively, `ps -u $(whoami)` lists all your running processes, helping identify the PID of the node process for Vite.

   2. Terminate the process:
      - Use `kill -9 <PID>` to forcefully terminate the identified process. Replace `<PID>` with the actual process ID you found in the previous step.

   **Note:** Always attempt to gracefully shut down the server using the built-in quit command (if available) or the standard `^C` method first. Resort to `kill -9` only when necessary as it terminates processes abruptly, without allowing them to clean up resources or perform a graceful shutdown. I discovered this when I exited out of my ssh session and I was still able to access my application running on `http://flip3.engr.oregonstate.edu:8501/` even though I had used `^C`. When I logged back into flip via ssh, upon trying to run `npm start -- --host` or `npm start` Vite would automatically tell me that port `8501` was still in use, and then it would start a new server on port `8502`.

   ```sh
   # use this command to see what the PID of the process is that is running on a specific port.
   flip3 ~ 1009$ lsof -i :8501
   # Our runaway process is identified as 2502508
   COMMAND     PID  USER   FD   TYPE    DEVICE SIZE/OFF NODE NAME
   node    2502508 maesz   22u  IPv6 357398260      0t0  TCP *:cmtp-mgt (LISTEN)
   node    2502508 maesz   29u  IPv6 357423874      0t0  TCP flip3.engr.oregonstate.edu:cmtp-mgt->10-197-151-117.sds.oregonstate.edu:64081 (ESTABLISHED)
   node    2502508 maesz   30u  IPv6 357944796      0t0  TCP flip3.engr.oregonstate.edu:cmtp-mgt->10-197-151-117.sds.oregonstate.edu:64620 (ESTABLISHED)

   # use this command to see all of your running processes
   flip3 ~ 1010$ ps -u $(whoami)
       PID TTY          TIME CMD
   2501520 ?        00:00:00 systemd
   2501523 ?        00:00:00 (sd-pam)
   2501554 ?        00:00:00 sshd
   2501556 pts/393  00:00:00 bash
   2502508 pts/393  00:00:03 node  # This is our runaway process 2502508
   2502541 pts/393  00:00:01 esbuild
   2512357 ?        00:00:00 sh
   2512428 ?        00:00:09 node
   2513575 ?        00:00:04 node
   2517189 ?        00:00:00 sshd
   2517190 ?        00:00:00 bash
   2517570 ?        00:00:00 bash
   2517908 ?        00:00:18 node
   2517920 ?        00:00:00 node
   2518045 ?        00:00:04 node
   2518267 ?        00:00:00 sshd
   2518272 ?        00:00:00 bash
   2518654 ?        00:00:00 bash
   2518673 ?        00:00:00 code-903b1e9d89
   2518719 ?        00:00:00 sh
   2518721 pts/464  00:00:00 bash
   2552243 pts/525  00:00:00 bash
   2556916 ?        00:00:01 node
   2574369 ?        00:00:00 sshd
   2574370 pts/455  00:00:00 bash
   2614401 ?        00:00:00 sleep
   2615639 pts/455  00:00:00 ps

   # use this command to kill the process with the PID
   flip3 ~ 1011$ kill -9 2502508
   ```

## Understadning Terminal Commands and NPM Scripts in the `frontend/package.json` and `backend/package.json`
The `package.json` files in both the `/frontend` and `/backend` directories of our project serve as a manifest for project settings, dependencies, and, importantly, scripts that automate tasks. These scripts are custom commands defined under the `"scripts"` property and can be executed using npm or npx, simplifying the development and deployment processes. In this section we will iteratively learn about the various ways you can start up a project server, and how these can be traslated into efficient npm scripts.

### Command - `node`

To set a foundation for why npm scripts make development more efficient, let's first look at how you would start up the `backend/server.js` the traditional way using the command `node server.js`:

```sh
flip3 ~/react-starter-app/App/backend 1025$ node server.js
Server running:  http://flip3.engr.oregonstate.edu:65432...
▌
```
You will notice that this command takes over your terminal until you send the `control + C` | `^C` | `SIGINT` command. Another disadvantage of using `node server.js` is that when you make changes to the code, you must stop and restart the process before you can see those changes.

Now you might be saying to yourself, "Can't I just use `nodemeon` to solve this?"... YES!

### Command - `nodemon`

Let's now look at how you would use `nodemon` in the traditional method. In your backend terminal, you would use the command `npx nodemon server.js` like this:
```sh
flip3 ~/react-starter-app/App/backend 1027$ npx nodemon server.js
[nodemon] 3.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server running:  http://flip3.engr.oregonstate.edu:65432...

# I made some changes and saved my code...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running:  http://flip3.engr.oregonstate.edu:65432...

# I made some changes and saved my code...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running:  http://flip3.engr.oregonstate.edu:65432...

# I made some changes and saved my code...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running:  http://flip3.engr.oregonstate.edu:65432...
▌
```

This now allows us to utilize `nodemon's` hot module reloding (HMR) which automatically restarts the server when code changes are saved. `npx` is a command-line utility bundled with `npm` that executes local node packages. It allows you to run any command available in a local `node_modules` without globally installing the packages or adding them to your `bash_profile` or `bashrc` files. `nodemon` is great, but we still have a problem in that our terminal has been taken over until `control + C` has stopped the process. Another problem is that once we exit out of the terminal or the ssh session on flip, the server will stop running and we will no longer be able to view our active URL. This is where the package `forever` will come in handy.

### Installing - `forever`

The package `forever` allows us to run multiple processes forever which will run outside of a terminal or ssh instance. This package is currently already listed in both `frontend/package.json` and `backend/package.json` dependencies, so when you ran `npm install` earlier, it should have installed that in both `/frontend` and `/backend` for you to be able to access. If for some reason this didn't happen, you can install it directly with `npm install forever --save`.

> You must run any forever commands from the root of your project (where server.js is located). If you don't it will fail. For this project, that is `/backend` or `/frontend`

For reasons beyond your control, running `forever` is a bit more complex on the school's FLIP server. Here is how to make it easy, run the following command from the root of your project (`/backend` or `/frontend`):

```bash
alias forever='./node_modules/forever/bin/forever'
```

Now, whenever you run `forever` from the *root* of any project that has the forever dependency installed, it will work, without fail. If you want to make this more permanent (not absolutely permanent), you can add this as a line towards the end of the `~/.bashrc` file in your home directory (notice the ~ squiggly) on the OSU FLIP server.


Now that we have `forever` installed, let's look at the commands that you might use.

### Command - `forever start server.js`

Running the command `forever start server.js`, is similar to running the command `node server.js` that we learned about prior to this. A difference is that it does not run in the foreground of our terminal, but instead runs in the background. Another difference is that `forever` will automatically restart your application if there are any issues. With this command you can safely exit out of your flip ssh session and submit urls to canvas for other to view them. You can see below how our terminal prompt returns to the screen for us to be able to type further commands of our choice. Runing `forever start server.js` can be done for any nodejs application that you want to start up.

```sh
flip3 ~/react-starter-app/App/backend 1032$ forever start server.js 
# I have found that these warnings can be safely ignored...so far...
warn:    --minUptime not set. Defaulting to: 1000ms
warn:    --spinSleepTime not set. Your script will exit if it does not stay up for at least 1000ms
info:    Forever processing file: server.js
(node:4115889) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:4115889) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency

flip3 ~/react-starter-app/App/backend 1033$ ▌  # we can continue to do things in the terminal prompt!
```

### Command - `forever list`

To see a list of your current processes in `forever`, you can use the command `forever list` like this:
```sh
flip3 ~/react-starter-app/App/backend 1002$ forever list
(node:4144017) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:4144017) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency

info:    Forever processes running
data:        uid  command                                                    script    forever pid     id logfile                                 uptime      
data:    [0] z8Fa /nfs/stak/users/maesz/.nvm/versions/node/v16.13.0/bin/node server.js 4143975 4144005    /nfs/stak/users/maesz/.forever/z8Fa.log 0:0:0:2.781 
flip3 ~/react-starter-app/App/backend 1003$ ▌
```
Depending on what you have running, this might show multiple processes. There are many values that you can look at here including the location of your logs at `logfile`, but also take note of the index value for this process which is `[0]`, you will need this in the next section...

### Command - `forever stop <index>`
If you need to stop a process, like the one running above at index `[0]`, you can use the command `forever stop <index>` (ie - `forever stop 0`) to accomplish this:

```sh
flip3 ~/react-starter-app/App/backend 1012$ forever stop 0
(node:4147301) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:4147301) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency

info:    Forever stopped process:
    uid  command                                                    script    forever pid     id logfile                                 uptime      
[0] 30Nc /nfs/stak/users/maesz/.nvm/versions/node/v16.13.0/bin/node server.js 4147194 4147226    /nfs/stak/users/maesz/.forever/30Nc.log 0:0:0:5.311 
flip3 ~/react-starter-app/App/backend 1013$ ▌
```
This command can be used to stop any of the indexes (0, 1, 2, 3 , etc.)

### Command - `forever restart <index>`

In the same way that you can stop a process by its index, you can also restart a process by its index. This is useful if you made changes or something broke and you needed to restart.

```sh
flip3 ~/react-starter-app/App/backend 1027$ forever restart 0
(node:4158785) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:4158785) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency

info:    Forever restarted process(es):
data:        uid  command                                                    script    forever pid     id logfile                                 uptime      
data:    [0] QH6j /nfs/stak/users/maesz/.nvm/versions/node/v16.13.0/bin/node server.js 4158690 4158716    /nfs/stak/users/maesz/.forever/QH6j.log 0:0:0:5.315 
flip3 ~/react-starter-app/App/backend 1028$ ▌
```

This command can be used to restart any of the indexes (0, 1, 2, 3 , etc.)

### Command - `forever stopall`
This command will stop every single forever process that is running, **use with caution!** You will notice below that I happened to have four processes running and it stopped all of them. Again, **use with caution!!**
```sh
flip3 ~/react-starter-app/App/backend 1024$ forever stopall
(node:4155732) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:4155732) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency

info:    No forever processes running
info:    Forever stopped processes:
data:        uid  command                                                    script                          forever pid     id logfile                                 uptime                   
data:    [0] n34E /nfs/stak/users/maesz/.nvm/versions/node/v16.13.0/bin/node reactServer.cjs                 4154645 4154671    /nfs/stak/users/maesz/.forever/n34E.log 0:0:1:12.748000000000005 
data:    [1] KgCi /nfs/stak/users/maesz/.nvm/versions/node/v16.13.0/bin/node server.js                       4154727 4154768    /nfs/stak/users/maesz/.forever/KgCi.log 0:0:1:6.221000000000004  
data:    [2] 3z2l /nfs/stak/users/maesz/.nvm/versions/node/v16.13.0/bin/node controllers/peopleController.js 4155077 4155102    /nfs/stak/users/maesz/.forever/3z2l.log STOPPED                  
data:    [3] eoEG /nfs/stak/users/maesz/.nvm/versions/node/v16.13.0/bin/node database/config.js              4155426 4155517    /nfs/stak/users/maesz/.forever/eoEG.log STOPPED                  
flip3 ~/react-starter-app/App/backend 1025$ ▌
```

As you can see, `forever` is a very powerful tool that can help us while we develop the react application. Now let's take a look at how npm scripts will help us to simplify all these commands.

### NPM Scripts Inside the `/backend/package.json`

Inside our various `package.json` files we can name and define any script that we want the `npm` command to execute. Here is part of the `backend/package.json` file where I have created two custom scripts called `"start"` and `"serve"`:
```json
{
  "name": "cs340-react-starter-app-backend",
  "version": "1.0.0",
  "description": "This is the backend express API that connects the frontend to the mariadb database",
  "main": "server.js",

  "scripts": {
    "start": "nodemon server.js",
    "serve": "npx forever start server.js"
  },
  ...
```
### Command - `npm run start`
If we run the command `npm run start`, node package manager will look inside the `"scripts"` section of the `package.json` and find the `"start"` command `nodemon server.js`. Notice how we are utilizing `nodemon` to take advantage of its development features like HMR. `npm run start` will be the command that you run to start the backend server while you are actively working on code. This command will NOT permanently serve the api. So if you ran `npm run start` (ie `nodemon`) and exited out of the flip ssh session, your server would no longer be running.

```sh
flip3 ~/react-starter-app/App/backend 1004$ npm run start

> cs340-react-starter-app-backend@1.0.0 start
> nodemon server.js

[nodemon] 3.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server running:  http://flip3.engr.oregonstate.edu:65432...
▌
```

### Command - `npm run serve`

When you need a url to stay active for days (in the case of submitting a project step), you will need to utilize the `"serve"` script which is basically just the command `npx forever start server.js`. As we learned in the prior section, forever will allow our program to run continuously in the background and restart it if necessary. To utilize this npm script, you will run the command `npm run serve` like this:

```sh
flip3 ~/react-starter-app/App/backend 1011$ npm run serve

> cs340-react-starter-app-backend@1.0.0 serve
> npx forever start server.js

warn:    --minUptime not set. Defaulting to: 1000ms
warn:    --spinSleepTime not set. Your script will exit if it does not stay up for at least 1000ms
info:    Forever processing file: server.js
(node:764027) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:764027) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
flip3 ~/ula_cs340/winter24/react-starter-app/App/backend 1012$ 
▌
```
> The `npx` could potentially cause issues for some of you. If it does not work you could try editing the `"serve"` script in the `backend/package.json` to look like this: `"serve": "forever start server.js"` which just removes the `npx` command.

Now you should have a solid understanding of all the commands and scripts that can be used to run the `/backend` server. We will now take a closer look at the scripts specific to the `/frontend` vite react project.

### NPM Scripts Inside the `/frontend/package.json`
We already coverd the `"start"` script in a prior section. In our `/frontend/package.json` you will notice a lot of other scripts that will be very useful for development.
```json
{
  "name": "cs340-react-starter-app-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "serve": "npx forever start reactServer.cjs",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```
- The "start" script calls a comma
In the cs340-react-starter-app-frontend directory, the package.json includes several scripts designed to facilitate development and deployment:

start: Runs the Vite development server, enabling live reloading for development.
build: Compiles the project for production deployment, optimizing for performance.
serve: Starts the built application using forever, ensuring that it runs continuously, even after a crash or server reboot.
lint: Analyzes the code for potential errors and style violations, ensuring code quality.
preview: Serves the production build locally for testing before deployment.
To run a script, use the npm run command followed by the script name. For example, to start the development server, you would execute:

sh


## Forever commands

## Build and Deploy

[Explain how to run both the backend and frontend together, including any necessary commands.]

This video goes through a very simple react/express application that covers the philosophy of this build proocess.
[Serve a React app from an Express server | React frontend and Express API setup in 1 project!](https://youtu.be/4pUBO31nkpk?si=3oeBA1u3tScOvNA0)



Building the vite project
```sh
flip3 ~/ula_cs340/winter24/react-starter-app/App/frontend 1022$ npm run build

> cs340-react-starter-app@0.0.0 build
> vite build

vite v5.1.4 building for production...
✓ 93 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/index-vBDqSkg8.css    0.11 kB │ gzip:  0.11 kB
dist/assets/index-bVtY9NLx.js   201.19 kB │ gzip: 67.30 kB
✓ built in 6.16s
flip3 ~/ula_cs340/winter24/react-starter-app/App/frontend 1023$ ▌
```


serving the vite project:
```sh
flip3 ~/ula_cs340/winter24/react-starter-app/App/frontend 1030$ npm run serve

> cs340-react-starter-app@0.0.0 serve
> node reactServer.cjs

Server running:  http://flip3.engr.oregonstate.edu:6061...
^C
flip3 ~/ula_cs340/winter24/react-starter-app/App/frontend 1031$ ▌
```

## Testing

Please note that testing is outside the scope of this project and course and will not be covered in this guide.

## Git

[Provide guidelines on using Git for version control throughout the project.]

## Deployment

[Discuss the methods for deploying the application, focusing on OSU's flip server and any alternatives.]

## Troubleshooting

[List common issues that may arise and their potential solutions.]

## Additional Resources

[Include links or references to additional reading materials or tutorials.]

## Conclusion

[Summarize the purpose of the guide and what students should have achieved upon completion.]

