# TradePlatform
Rewrite the exercise.
## npm設置
1. npm install  
## DockerCompose設置
1. npm run builddc  
>建置Docker Image
2. npm run startdc  
>啟動Docker  
## 啟動瀏覽器
http://localhost:13000  
http://localhost:13000/api/users?uid=UID2024080817555212345679

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