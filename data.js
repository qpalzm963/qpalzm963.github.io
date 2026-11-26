// 網站上「工作經歷」與「專案作品」的資料都在這裡。
// 改這個檔案就能更新內容，不用動 HTML。

window.SITE_DATA = {
  jobs: [
    {
      company: '口袋銀行',
      period: '2022.04 — 現在',
      role: '資深 iOS 工程師',
      periodFull: '2022.04 — 現在（2 年 8 個月）',
      about: '數位銀行，App 月活 60 萬',
      team: 'iOS 4 人（擔任小組負責人）',
      points: [
        '主導 UIKit → SwiftUI 漸進式遷移，兩年內完成 85% 畫面改寫，期間維持雙週發版且無重構造成的線上事故。',
        '重整啟動流程與相依注入，冷啟動時間從 2.8 秒降至 1.1 秒（−60%）。',
        '建立 Snapshot 測試與 CI 流程，crash-free 使用者比例從 99.2% 提升至 99.8%。',
        '負責 code review、技術分享與新人 onboarding，建立團隊 SwiftUI 開發規範。'
      ],
      stack: ['Swift', 'SwiftUI', 'TCA', 'Combine', 'XCTest', 'Fastlane']
    },
    {
      company: 'Runway 運動科技',
      period: '2020.03 — 2022.03',
      role: 'Android 工程師',
      periodFull: '2020.03 — 2022.03（2 年）',
      about: '運動社群新創，約 20 人',
      team: 'Android 3 人',
      points: [
        '從零開發運動打卡與社群動態功能，上線首年累積 15 萬名使用者。',
        '主導導入 Jetpack Compose，新功能開發時間平均縮短約 30%。',
        '串接 Health Connect 與 Garmin API，7 日留存率提升 18%。'
      ],
      stack: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room', 'WorkManager']
    },
    {
      company: '小島數位工作室',
      period: '2018.07 — 2020.02',
      role: 'Flutter 工程師',
      periodFull: '2018.07 — 2020.02（1 年 8 個月）',
      about: '軟體接案團隊，5 人',
      team: '行動開發 2 人',
      points: [
        '兩年內交付 12 個 App，涵蓋電商、預約與會員系統。',
        '建立團隊共用元件庫，新專案起手時間從 2 週縮短至 3 天。',
        '直接與客戶溝通需求與時程，負責估工與技術提案。'
      ],
      stack: ['Flutter', 'Dart', 'Firebase']
    }
  ],

  // platform 必須是 filters 裡的其中一個，篩選才會正確
  filters: ['全部', 'iOS', 'Android', 'Flutter'],

  projects: [
    {
      name: '口袋銀行 App 重構', platform: 'iOS', kind: '工作專案', initials: 'P', color: '#6741D9',
      desc: '將 6 年的 UIKit 程式碼分階段遷移至 SwiftUI + TCA，同時維持雙週發版。',
      metric: '冷啟動 2.8s → 1.1s', tags: ['SwiftUI', 'TCA', 'Combine'], link: ''
    },
    {
      name: '口袋記帳 Pocket Ledger', platform: 'iOS', kind: '個人作品', initials: '記', color: '#C2410C',
      desc: '主畫面小工具一鍵記帳，iCloud 同步至 Mac。',
      metric: '4.8 ★ · 3.2 萬次下載', tags: ['SwiftUI', 'WidgetKit', 'Core Data'], link: ''
    },
    {
      name: 'Runway 運動打卡', platform: 'Android', kind: '工作專案', initials: 'R', color: '#8A5A00',
      desc: '整合穿戴裝置資料，運動結束自動打卡並產生分享卡片。',
      metric: '7 日留存 +18%', tags: ['Kotlin', 'Health Connect'], link: ''
    },
    {
      name: 'MetroNow 捷運到站', platform: 'Android', kind: '個人作品', initials: 'M', color: '#2D5BD8',
      desc: '鎖定畫面顯示下一班車與擁擠度，支援離線時刻表。',
      metric: 'Google Play 編輯推薦', tags: ['Kotlin', 'Compose', 'Glance'], link: ''
    },
    {
      name: '拾光 Film Diary', platform: 'Flutter', kind: '開源專案', initials: '光', color: '#2F7D32',
      desc: '底片風格的日記 App，單一程式碼同時上架 iOS 與 Android。',
      metric: 'GitHub 420 ★', tags: ['Flutter', 'Riverpod', 'Firebase'], link: ''
    },
    {
      name: '好市集 攤位預約', platform: 'Flutter', kind: '接案專案', initials: '市', color: '#C2255C',
      desc: '為 40 家市集攤商開發的預約與線上付款 App。',
      metric: '6 週完成上線', tags: ['Flutter', 'Stripe', 'Google Maps'], link: ''
    }
  ]
};
