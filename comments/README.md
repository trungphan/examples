This project is an example of setting up projects using jasmine test for angular js


STEPS to create:
1. make sure ./node_modules/.bin in PATH, phantomjs in PATH
2. create file .bowerrc with { "directory": "app/components" }
3. npm install grunt grunt-cli grunt-exec grunt-contrib-connect grunt-contrib-watch bower karma karma-cli karma-jasmine@2_0 karma-chrome-launcher --save-dev
4. bower init
5. bower install jquery underscore backbone requirejs jasmine --save
6. create Gruntfile.js
7. karma init karma.conf.js

