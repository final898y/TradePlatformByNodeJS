# TradePlatform
Rewrite the exercise.
## yarm設置
1. corepack enable  
2. yarn set version stable  
3. yarn install
## DockerCompose設置
1. yarn builddc
2. yarn startdc
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