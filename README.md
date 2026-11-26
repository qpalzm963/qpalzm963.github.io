# 個人形象網站

純 HTML / CSS / JavaScript 的個人履歷網站，不需要建置工具，可以直接部署到 GitHub Pages。

> 目前內容是範例假資料（「林以安」），請換成自己的資料。

## 檔案

| 檔案 | 內容 |
| --- | --- |
| `index.html` | 首屏、技能、學歷、聯絡等固定內容 |
| `data.js` | 工作經歷與專案作品的資料（改這裡就能更新） |
| `script.js` | 經歷分頁切換、作品篩選、複製信箱 |
| `styles.css` | 樣式；強調色在 `:root` 的 `--accent` |
| `avatar.svg` | 大頭照佔位圖，換成自己的照片（例如 `avatar.jpg`，並修改 `index.html`） |
| `resume.pdf` | 履歷 PDF，自行放入後「下載履歷」按鈕才會生效 |

## 本機預覽

```bash
python3 -m http.server 8000
```

然後打開 http://localhost:8000

## 部署到 GitHub Pages

1. 推到 GitHub 後，到 repo 的 **Settings → Pages**
2. Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾 `/ (root)`，按 Save
3. 約一分鐘後網址會出現在同一頁

如果 repo 名稱是 `<你的帳號>.github.io`，網址就會是 `https://<你的帳號>.github.io`。
