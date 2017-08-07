# 简介
一个基于express的项目，技术栈为Express+Typescript+redis+bluebird+jade+AmazeUI+Socket.IO+g2。

实现的功能有：
1. 拉取知乎数据并展示；
2. github第三方登陆；
3. 通过github账号发表评论；
4. 聊天室功能；
5. 数据图表可视化展示；
6. 3D立体ac娘（待做）；
# 预览
[http://39.108.73.158:3001/](http://39.108.73.158:3001/)

# 下载项目
```
git clone https://github.com/cobantou/KSBlog.git
```

# 安装
```
brew install Redis
brew install mongodb
npm install pm2 -g 
npm install -g typescript
npm install typings --global
npm init
```

# 启动
启动redis，进入" usr/local/bin "执行
```
./redis-server & 
```
启动这个应用（MacOS 或 Linux 平台）：
```angular2html
tsc //开发环境
```
```
//DEBUG=myapp npm start
npm run pm2
```
Windows 平台使用如下命令：
```
set DEBUG=myapp & npm start
```
然后在浏览器中打开 http://localhost:3001/ 

安装types
```
npm install --save @types/xx

```

