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

