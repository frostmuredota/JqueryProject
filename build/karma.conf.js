module.exports = function(config) { config.set({"basePath":"../src/","files":["main/webapp/scripts/jasmine/jquery.js","main/webapp/scripts/jasmine/jasmine.js","main/webapp/scripts/jasmine/jasmine-jquery.js","main/webapp/resources/js/presentation/buttons.js","main/webapp/resources/js/validations/validations.js","test/js/spec/figure_spec.js"],"browsers":["PhantomJS"],"frameworks":["jasmine"],"excludes":[],"reporters":["progress","junit"],"junitReporter":{"outputDir":"test/report"}}) };