const fs = require('fs');

function generateHtml(data, color) {
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
body {
    background-color: black;
    }
div {
  color: grey;
  border: 2px solid;
  padding-left: 15px;
}
ul {
    padding-left: 10px;
    font-family: verdana;
    color: white;

}
img  {
  height: 200px;
  width: 200px;
  padding-top: 10px;
  padding-left: 10px;
}
h1 {
    padding-left: 15px;
}
</style>
</head>
<body>
<h1 style = 'color: ${color}'>${data.name}</h1>
<div>    
<img src = "${data.avatar_url}">
    
                <ul>Username: ${data.login}</ul>
                <ul>Followers: ${data.followers}</ul>
                <ul>Following: ${data.following}</ul>
                <ul>Repo URL: ${data.repos_url}</ul>
                <ul>Bio: ${data.bio}</ul>
                <ul>Location: ${data.location}</ul>
                <ul>Public Repos: ${data.public_repos}</ul>
    </div>
    
</body>
</html>`
    return htmlTemplate
}

module.exports = generateHtml;