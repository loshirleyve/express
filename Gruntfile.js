/**
 * Created by Administrator on 2015/10/30.
 */
module.exports = function(grunt){
    //加载插件
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec'
    ].forEach(function(task){
            grunt.loadNpmTasks(task);
        });

    //配置插件
    grunt.initConfig({
        cafemocha:{
            all:{src:'qa/tests-*.js', option:{ui:'tdd'}}
        },
        jshint:{
            app:['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa:['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js']
        },
        exec:{
            linkchecker:
            {
                cmd:'linkchecker http://localhost:3000'
            }
        }
    });
    //注册服务
    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};
