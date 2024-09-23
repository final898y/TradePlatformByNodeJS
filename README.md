# TradePlatform
Rewrite the exercise.
## npm設置
1. npm install  
2. npm run start  
## 啟動瀏覽器(swagger)
http://localhost:3000/api-docs/



# DockerCompose設置(暫時不使用)
1. npm run builddc  
>建置Docker Image
2. npm run startdc  
>啟動Docker  
## 啟動瀏覽器
http://localhost:13000

## env調整
### mysql連結字串調整(userRepository.ts)
#### DockerCompose 使用  
  host: env.MYSQLHOST,  
  ...  
  port: env.MYSQLPORT  
#### Test使用(直接yarn start)  
  host: env.MYSQLHOST_TEST,  
  ...  
  port: env.MYSQLPORT_TEST  