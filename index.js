const errou = require('faustao-errou');

function FaustaoErrouWebpackPlugin() {
    return
}

FaustaoErrouWebpackPlugin.prototype.apply = function (compiler) {

    compiler.plugin('done', function(stats) {

        if(stats.compilation.errors.length > 0){
            errou();
        }
    });

    compiler.plugin('failed', errou);
};

module.exports = FaustaoErrouWebpackPlugin;
