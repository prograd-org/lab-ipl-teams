![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | IPL Teams

## Introduction

ProGrad, we decided to build a IPL dashboard to cheer up all ther cricket lovers across the nation. Would you like to chip in 🤔?

## Learning Goals

After this lab, you will be able to:

- Create a static Angular application with Angular CLI.
- Build an Angular application with one component.

## Requirements

- Fork this repo.
- Clone this repo.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a pull request from your master branch to the original repository's master branch. In the pull request name, add your ProGrad id, name, and last name separated by a dash "-".

## Deliverables

You need to generate the starter code and fill it with the necessary code to satisfy the requirements described below.

## Starter Code

To generate the starter code, follow the steps given below

- To create a new application,
    - Open your ubuntu or cmd terminal and execute the following command
      - ```ng new app-name```
      - for example, ng new super-wars
    - To create a new component, execute the command 
      - ``` ng generate component component-name```
      - example, ng generate component contacts
      
## How to run

- To run the project go to your ubuntu terminal or VScode editor
    - open the ubuntu or cmd terminal or inside the vscode editor
    - run the command following command
    - ```ng serve --open or ng serve -o```
    
## Progression #1:

We are going to create a Dashboard with IPL teams from the recent years. In this case, we will need to create one component that will contain an array of teams, with the following fields:

- `name` of the team.
- `website` of the team.
- `phoneNumber` of the team.
- `image` depicts the IPL team badge(logo).

You can find the full list of [IPL TEAMS](https://www.iplt20.com/) on google. In our application we have to show at least six of them. The result could be something like this:

<!-- :::info -->
**Note** that we are iterating over arrays to show all the information: `name`, `best-players`, `phoneNumber` and `image` of every team. You can find the images inside src/assets folder. Copy them into your assets folder
<!-- ::: -->
## Expected Ouput:
![ipl-1](https://i1.faceprep.in/ProGrad/ts-ipl-team1.png)
![ipl-2](https://i1.faceprep.in/ProGrad/ts-ipl-team2.png)

Happy Coding ProGrad ❤️!
