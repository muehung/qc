# portfolio

這是 Cheryl 的個人作品集網頁。



## GitHub Pages 部署

網站使用 GitHub Actions 自動部署。
將變更 push 到 `pro` 分支後，工作流程會自動執行 `npm run build`，並把 `dist/` 部署至 GitHub Pages，因此不需要手動提交或上傳 build 後的檔案。

```bash
git push origin pro
```

### Vue 頁面

`src/components/` 內的 `.vue` 檔案（例如 `PageMwView.vue`）屬於 Vue 網站原始碼。提交並 push 原始碼即可，GitHub Actions 會自動完成 build 與部署。

### event 靜態頁面

`event/` 內是獨立的靜態 HTML、CSS、JavaScript 與圖片，不是由 Vue 元件產生。Vite 預設不會自動將專案根目錄的 `event/` 放進 `dist/`，因此 build 流程必須額外把它複製到 `dist/event/`，否則部署後相關網址會顯示 404。


## Commit 建議

Vue 頁面內容與部署設定建議分開 commit：

```bash
git add src/components/PageMwView.vue
git commit -m "feat: update modern web project page"

git add package.json
git commit -m "fix: include event pages in deployment"
```

`.vite/` 與 `dist/` 是本機開發或 build 產生的檔案，不需要提交到 Git。
