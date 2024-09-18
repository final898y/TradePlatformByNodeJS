# TradePlatform
Rewrite the exercise.
## 安裝套件
### yarn管理器設置
1. corepack enable  
2. yarn set version stable  
3. yarn install
## 啟動程式
輸入: yarn start  
### 啟動瀏覽器
http://localhost:3000

## 使用Docker
### 建置image
docker build -t TradePlatformByNodeJS .
### 啟動Docker容器
docker run -p 3000:3000 --name TradePlatformByNodeJS TradePlatformByNodeJS
### 啟動瀏覽器
http://localhost:3000