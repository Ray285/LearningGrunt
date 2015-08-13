module.exports = function (grunt) {
/*
    grunt.initConfig(grunt.file.readJSON("config.json"))//you can read from a json file or pass in an object to grunt,
    // the properties of these object may then be read into other tasks

    {
    person: {
        firstName: "Raymond",
            lastName: "Lemon"
    }
    }

    grunt.registerTask("default", function (name) {//you can also pass in parameters to grunt tasks
        grunt.log.writeln("Hello, "+grunt.config.get("person").firstName +" "+grunt.config.get("person").lastName);
    })
*/
    grunt.initConfig({
        tasks: {//create an object called task with the nested object one, two etc. we can run this with the cmd grunt tasks
            one: "first",//grunt tasks:one
            two: "second",//grunt tasks:two
            three: "third",//grunt tasks:three
        }
    })
    //Registering multitasks allows you to either iterate through or choose just an individual task to run from a list.
    grunt.registerMultiTask("tasks", function(){
        grunt.log.writeln("target: "+this.target +", data: "+this.data);//prints the object name and data
    })
}