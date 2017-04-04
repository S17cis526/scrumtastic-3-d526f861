/* Main entry point */

var project = require('./project');

$.get('/projects', function(projects){
  $('body').html(project.list(projects));
});
