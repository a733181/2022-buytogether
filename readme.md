# 團購網

## 簡介

團購網的設計目的在於解決社交媒體上進行團購時，團主面臨的商品管理、訂單統計、與團員反覆溝通等問題。
希望透過一個線上團購平台，提供一個便利的解決方案，讓團主可以輕鬆管理商品及訂單，團員也能夠隨時查看商品狀態。
透過平台，我們希望可以簡化團購過程，讓團購變得更加方便、流暢和輕鬆。我們的目標是提供一個方便、高效的團購平台，讓團主和團員可以更加專注於團購本身，並獲得更好的團購體驗。

## 前端

- 使用 Vite 搭建開發環境，Vue 作為主要框架，Vue-router 管理路由，Pinia 集中管理資料狀態。
- 整合 ESLint、Axios、Swiper、vue-chartjs、SweetAlert2、Validator、Socket.io、- Tailwind CSS、GSAP 等第三方套件，增強功能和提升使用體驗。
- 使用 ESLint 做程式碼檢查，確保程式碼符合規範。
- 使用 Axios 處理 API 請求，Swiper 製作輪播圖，vue-chartjs 製作後台訂單圖表，SweetAlert2 提供成功或錯誤提示，Validator 驗證表單，Socket.io 製作私訊聊天室，Tailwind CSS 為 CSS 框架，GSAP 製作動畫效果。

## 後端

- 使用 node express 建立伺服器，引入 bcrypt、cloudinary、cors、mongoose、multer、passport、socket.io、Validator、ESLint 等套件。
- 整合 ESLint、bcrypt、cloudinary、cors、mongoose、multer、passport、socket.io、Validator 等第三方套件，增強功能和提升使用體驗。
- 使用 ESLint 做程式碼檢查，確保程式碼符合規範。
- 使用 bcrypt 密碼加密，Mongoose 連接 MongoDB 資料庫，passport 比對登入密碼，Validator 驗證資料欄位，multer 上傳圖片至 Cloudinary，Socket.io 製作私訊聊天室，cors 解決資源跨域。
