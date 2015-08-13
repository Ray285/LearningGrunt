module.exports = function (grunt) {
    grunt.initConfig(grunt.file.readJSON("config.json"))//you can read from a json file or pass in an object to grunt,
    // the properties of these object may then be read into other tasks

    //{
    //person: {
    //    firstName: "Raymond",
    //        lastName: "Lemon"
    //}
    //}

    grunt.registerTask("default", function (name) {//you can also pass in parameters to grunt tasks
        grunt.log.writeln("Hello, "+grunt.config.get("person").firstName +" "+grunt.config.get("person").lastName);
    })
}