module.exports = function(env) {
    var envName = 'dev';
    if (env) {
      envName = Object.keys(env)[0];
    } 
    return require(`./webpack.${envName}.js`);
}