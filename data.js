// 網站上「工作經歷」與「專案作品」的資料都在這裡。
// 改這個檔案就能更新內容，不用動 HTML。

window.SITE_DATA = {
  jobs: [
    {
      company: '微程式資訊',
      period: '2025.10 — 現在',
      role: '手機軟體開發工程師',
      periodFull: '2025.10 — 現在',
      about: '微程式資訊股份有限公司 · 台中',
      team: '負責 YouBike 2.0、BiKonnect、員工打卡系統等正式產品的 Flutter App',
      points: [
        'YouBike 2.0 官方 App（Google Play 100 萬+ 下載）：參與功能開發，分析並修復線上缺陷，提升大規模用戶情境下的穩定度。',
        '以 fastlane + GitLab CI 將打包、簽章、版本號遞增到上傳商店整段流程自動化，發版不再依賴手動操作。',
        '導入 Maestro E2E 測試，將可自動化的回歸流程全部轉成自動測試，並留下實測陷阱與規範文件，方便團隊接手。',
        '整合 Firebase Crashlytics 錯誤上報，並開發 crash 趨勢分析工具（BigQuery 匯出 → 自動產生優先修復清單），讓修 bug 依影響程度排序。',
        '建立 Flutter 團隊開發手冊（Coding Style、技術選型等）：先盤點多個正式專案，找出共通做法再定為標準，並搭配 AI 開發規則（AGENTS.md），讓團隊與 AI 工具遵循同一套規範。',
        '員工打卡系統 MP TimePal：開發 GPS 電子圍籬三模式打卡（辦公室 / 外勤 / 居家）與主管審核流程，獨立完成 App Store 上架審查。',
        'BiKonnect（IoT 單車，BLE / MQTT）：協助大型重構的程式碼審查，檢出即時資料同步、重複訂閱與背景耗電等問題。'
      ],
      stack: ['Flutter', 'Dart', 'Riverpod', 'fastlane', 'GitLab CI', 'Maestro', 'Firebase']
    },
    {
      company: '英仕國際',
      period: '2022.07 — 2025.09',
      role: '資深 App 開發工程師',
      periodFull: '2022.07 — 2025.09（3 年 3 個月）',
      about: '英仕國際有限公司 · 台中（兩款 App 已因營運調整下線）',
      team: 'TU 交友 App 專案執行人，帶領約 5 人前後端團隊；Talk2U 前端組負責人',
      points: [
        'TU 交友 App：擔任專案執行人，負責需求確認、進度排程、任務分配與交付控管。',
        '以 GetX 管理狀態與路由，開發貼文牆、投票、簽到、互動小遊戲等主要功能。',
        '以 Fastlane 將上架打包自動化，加快版本交付節奏。',
        'Talk2U 即時通訊 App：串接 Firebase 與 RESTful API，完成即時訊息、推播與登入註冊。',
        '與後端合作實作端對端加密（E2EE）金鑰交換流程，並以 Codemagic 自動化建構與部署。'
      ],
      stack: ['Flutter', 'Dart', 'GetX', 'Firebase', 'E2EE', 'Fastlane', 'Codemagic']
    },
    {
      company: '風采',
      period: '2018.07 — 2022.07',
      role: '前端工程師',
      periodFull: '2018.07 — 2022.07（4 年 1 個月）',
      about: '風采有限公司 · 台中',
      team: '棋牌類手遊前端',
      points: [
        '負責棋牌類手遊前端開發與遊戲邏輯（房間邏輯、牌局流程），熟悉遊戲引擎、動畫系統與事件處理。',
        '2018 年起即負責手遊的 iOS / Android 打包與發佈（iOS 企業簽章、Android APK 分發），累積雙平台簽章與憑證管理經驗。'
      ],
      stack: ['Cocos Creator', 'Cocos2d-js', 'JavaScript', 'TypeScript']
    },
    {
      company: '永勝雲端',
      period: '2017.08 — 2018.06',
      role: '軟體工程師',
      periodFull: '2017.08 — 2018.06（11 個月）',
      about: '永勝雲端有限公司 · 台中',
      team: 'H5 遊戲前端',
      points: [
        '負責 H5 遊戲前端開發，做過老虎機與捕魚機兩類遊戲（Cocos Creator）。'
      ],
      stack: ['Cocos Creator', 'JavaScript']
    }
  ],

  // 每個專案的 platform 必須是 filters 裡的其中一個，篩選才會正確
  filters: ['全部', '工作專案', '個人作品'],

  projects: [
    {
      name: 'YouBike 2.0 官方 App', platform: '工作專案', kind: 'Flutter · iOS / Android', initials: 'Y', color: '#B45309',
      desc: '全國性公共單車服務 App，Google Play 下載 100 萬次以上。負責功能開發與線上缺陷修復，建置 CI/CD 自動上架並導入 Maestro E2E 測試。',
      metric: '正式上線中', tags: ['Flutter', 'fastlane', 'GitLab CI', 'Maestro'], link: '',
      icon: 'img/youbike.jpg',
      stores: { ios: 'https://apps.apple.com/tw/app/id1483423095', android: 'https://play.google.com/store/apps/details?id=tw.com.youbike.plus' }
    },
    {
      name: 'MP TimePal 員工打卡', platform: '工作專案', kind: 'Flutter · iOS / Android', initials: '打', color: '#1F6F8B',
      desc: 'GPS 電子圍籬三模式打卡（辦公室 / 外勤 / 居家）與主管審核流程，獨立完成 App Store 上架審查。',
      metric: '已上架', tags: ['Flutter', 'Riverpod', 'fastlane'], link: ''
    },
    {
      name: 'Memo 社交 App', platform: '個人作品', kind: 'Flutter + React', initials: 'M', color: '#9F1239',
      desc: '與友人合作，已上架 iOS / Android。負責 Flutter 前端；並以 AI 輔助（Claude Code）在既有 Go 後端上開發 React 後台管理系統（用戶管理、內容審核），由我負責需求拆解、審查與部署驗證。',
      metric: '已上架 iOS / Android', tags: ['Flutter', 'React', 'Go', 'Claude Code'], link: 'https://memosocial.app/zh-TW',
      icon: 'img/memo.jpg',
      stores: { ios: 'https://apps.apple.com/tw/app/id6771999111', android: 'https://play.google.com/store/apps/details?id=net.atleaststill.memo' }
    },
    {
      name: 'Echo — 安全回聲', platform: '個人作品', kind: 'Flutter · iOS / Android', initials: 'E', color: '#1E6B42',
      desc: '與夥伴合作。定期簽到證明自身安全，逾時未簽到就自動通知緊急聯絡人。我獨立負責 Flutter 前端，並以 FVM + fastlane 建置雙平台自動化發佈，完成 iOS / Android 上架；目前已下架。',
      metric: '已下架', tags: ['Flutter', 'Firebase', 'fastlane'],
      link: ''
    },
    {
      name: 'IoT 自學：喝水杯墊、冷氣遙控器', platform: '個人作品', kind: 'ESP32 · BLE · IR', initials: 'IoT', color: '#155E75',
      desc: '以 AI 輔助開發，用 ESP32 自學硬體串接：以秤重模組做出智慧喝水杯墊，透過 BLE 即時記錄到網頁，以及用 SwiftUI 開發的 macOS 桌面 App（喝水累積可解鎖釣魚小遊戲）；另外自行實作日立冷氣的紅外線協定，做出能控制自家冷氣的遙控器。',
      metric: '個人專案', tags: ['ESP32', 'BLE', 'SwiftUI', 'IR'], link: 'https://github.com/qpalzm963/smart-water-tracker'
    }
  ]
};
