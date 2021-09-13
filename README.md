## Development Guide
0. Setup SSH keys. ```ssh-keygen -t ed25519 -C "munair@usefulcoin.com"```
1. Add the public key to the list of SSH keys in your GitHub account. ```cat /home/ubuntu/.ssh/id_ed25519.pub```
2. Clone the repository. ```git clone git@github.com:usefulcoin/paper-kit-react-template.git```
3. Change the working directory and execute the setup script. ```cd paper-kit-react-template && bash setup.bash```
4. Install node modules. ```npm install```
5. Start. ```npm start```
6. If the build on port 3000 meets your approval, quit (Ctrl-C / ^C) and deploy. ```bash deploy.bash```

## Quick Start Gotchas
0. Don't forget to create the S3 repository and update the name of the S3 repository used in deploy.bash.
1. Don't forget to update the value of **homepage** in ```package.json```.
2. Don't forget to navigate over to GitHub and setup ```gh-pages``` to use **docs/** to hold the build.
3. Don't forget to pull those changes to your development environment before running ```bash deploy.bash```.

# Credits
0. Creative Tim and the folks behind the Paper-Kit SCSS library.
1. Zoom image bloggers [W3Bits](https://w3bits.com/css-image-hover-zoom/)and the Stack Overflow [crew](https://stackoverflow.com/questions/42297303/css-opacity-transition-ignoring-overflowhidden-in-chrome-safari).