module.exports = function (grunt) {
    //watch all .js files in this directory for changes and run the tasks uglify on them
    //we may need to run synchronize in webstorm on a file due to the virtual file system which runs in the IDE
    grunt.initConfig({
        conf: grunt.file.readJSON("config.json"),
        uglify: {
            dist: {
                files: {
                    "dist/app.min.js":"<%= conf.input %>"
                }
            }
        },
        watch: {
            files:"<%= conf.input %>",
            tasks:["uglify"]
        }
    })

    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-watch")

}

