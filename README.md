# Personal Website builder
Personal website template to modify and deploy using github pages, simple way to create your personal, company or project page


## requirements 

- Computer access with node and react installed 
- github account
- git client installed

## first steps
### Fork this repository or use the option "Use this template"  to create repository with this name: 

`` <your-github-user>.github.io ``

### Clone your new repository locally 

`` git clone <your repository url> ``

### Enter in your repo folder

`` cd <your repo name> ``

Make sure you just have 3 items on your root folder 
 - LICENSE
 - README.md
 - personal_site_src folder
 
 if your local repository contains more the above listed files, run this command:

`` rm -rf asset-* logo* service-worker.js robots.txt static/ favicon.ico index.html precache-manifest.* manifest.json `` 


## Modify 

### To keep current site template, just change content 

Enter in folder called "personal_site_src", this is a react app, inside src you will find a file called "config.js", on this you will find a bunch of variables that you can change the value to change site text values / content.  

### Change sessions organization

Modify App.js file, this is a all session container with flex layout and flex-direction: collum , you can create new sessions based on companents or re-order sessions order based on compenents.

### Change sessions

Go to folder sessions and open a target session and change code

## Deploy on Github.io

in personal_site_src run:

`` yarn build ``

yarn build will create an folder called build with all prod files, run this command now

`` mv build/* ../ ``

and go back to repository root folder and commit all changes

`` git add --all && git commit -sm "create my persona website" ``

and push to master branch

`` git push origin master ``

after this, just access this url:

``<your githubuser>.github.io``

and voial`a, enjoy your new personal website

## Deploy on Netlify 

[Comming soon](https://github.com/matheusmonte/PersonalWebSiteBuilder/issues/4)

## Author

[Matheus Monte](https://github.com/matheusmonte)

## License

GNU GPL 3.0

## Contribute 

[Bugs, feature request or suggestions](https://github.com/matheusmonte/matheusmonte.github.io)


