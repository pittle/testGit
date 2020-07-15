const path = require('path'); 
module.exports = {
    chainWebpack:config => {
        config.resolve.alias.set('styles',path.resolve(__dirname,'src/assets/styles'))
    }
}