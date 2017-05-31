# 下载项目
```
git clone ...

```

# 安装
```
npm init
```

# 启动
启动这个应用（MacOS 或 Linux 平台）：
```
DEBUG=myapp npm start
```
Windows 平台使用如下命令：
```
set DEBUG=myapp & npm start
```
然后在浏览器中打开 http://localhost:3000/ 

# 目录结构
```
.
├── app.js                //？？？
├── bin                   //？？？                    
│   └── www
├── package.json          
├── public                //公共的静态文件？
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes                //路由
│   ├── index.js
│   └── users.js
└── views                 //页面模板
    ├── error.jade
    ├── index.jade
    └── layout.jade

```