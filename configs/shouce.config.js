require('webpack')
require('weex-loader')
var path = require('path');
var fs = require('fs');
var entry = {};
// 遍历src目录
(function walk(dir) {
  dir = dir || '.'
  var directory = path.join(__dirname, 'src', dir);
  fs.readdirSync(directory)
    .forEach(function(file) {
      var fullpath = path.join(directory, file);
      var stat = fs.statSync(fullpath);
      var extname = path.extname(fullpath);
      if (stat.isFile() && extname === '.we') {
        var name = path.join('dist', dir, path.basename(file, extname));
        entry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory() && file !== 'dist' && file !== 'include') {
        var subdir = path.join(dir, file);
        walk(subdir);
      }
    });
})();
module.exports = {
  entry: entry,
  output: {
    path: '.',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loader: 'weex'
      },
      {
        test: /\.js(\?[^?]+)?$/,
        loader: 'weex?type=script'
      },
      {
        test: /\.css(\?[^?]+)?$/,
        loader: 'weex?type=style'
      },
      {
        test: /\.html(\?[^?]+)?$/,
        loader: 'weex?type=tpl'
      }
    ]
  }
}
//获取当前ip地址
function getIPAddress(){
  var os = require('os');
  var ips = os.networkInterfaces();
  var address ;
  for(var item in ips){
    for(var data in ips[item]){
      var ip = ips[item][data];
      if(ip.address.indexOf('192')==0){
          address = ip.address;
          return address;
      }
    }
  }
}
//生成原生调试二维码
var qrcode = require('qrcode-terminal');
qrcode.generate("http://"+getIPAddress()+":8080/dist/main.js");
console.log("\r\n按住ctrl点击右侧地址打开应用--->http://localhost:8080\r\n");