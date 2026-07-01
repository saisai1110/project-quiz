const QUIZ_DATA = {
  intro: {
    title: "畢業專題防止鬧翻檢查表",
    subtitle: "選錯指導教授痛苦一學期，選錯專題組員痛苦一整年！這不是普通的心理測驗，而是保護你大學最後一年不被氣到中風的生存指南。在按下「我們一組吧！」之前，請先丟給你的潛在隊友，確認彼此是神仙隊友還是寄生獸。"
  },
  questions: [
    {
      id: 1,
      text: "關於專題的「作息時間」，你覺得自己最偏向哪一種？",
      options: [
        { type: "type1", key: "A", text: "【燃燒生命制】專題就是我的呼吸，沒有做完的一天，大家跟我一起通宵！" },
        { type: "type2", key: "B", text: "【打卡上班制】時間到了就開工，休息時間一到立刻切斷聯繫，六親不認。" },
        { type: "type3", key: "C", text: "【靈感乍現制】半夜三點突然有 FU 就狂做，平常時間像一條死魚。" },
        { type: "type4", key: "D", text: "【薛丁格的作息】進度永遠處於「有跟沒有之間」，死線前一天才會現身。" },
        { type: "type5", key: "E", text: "【高端經理制】自己不熬夜，但會在群組發「大家辛苦了」來展現存在感。" },
        { type: "type6", key: "F", text: "【無政府狀態】你管我幾點睡？不要一直催我好不好，煩死了！" }
      ]
    },
    {
      id: 2,
      text: "開會時，如果你提出一個自認超棒的想法，卻被組員瘋狂打槍，你的反應是？",
      options: [
        { type: "type1", key: "A", text: "馬上開始想下一個備案，直到想出完美解法為止。" },
        { type: "type2", key: "B", text: "拿出客觀數據跟文獻證明我是對的，不帶感情地辯論。" },
        { type: "type3", key: "C", text: "覺得沒人懂我的藝術，陷入自我懷疑，然後發限動討拍。" },
        { type: "type4", key: "D", text: "「沒差啦，只要能畢業，你要做一坨大便我都說讚。」" },
        { type: "type5", key: "E", text: "順著大家的話轉彎，默默把別人的好點子包裝成自己的提議。" },
        { type: "type6", key: "F", text: "「好啊，都不要用啊，你們這麼厲害你們提啊！」（開始瘋狂擺爛）" }
      ]
    },
    {
      id: 3,
      text: "當專題討論到視覺設計，需要製作版面示意圖（Mockup）時，你的態度是？",
      options: [
        { type: "type1", key: "A", text: "不相信別人的美感，自己熬夜把所有的版面切好、圖修到完美。" },
        { type: "type2", key: "B", text: "按照當初分配的進度，只精準完成我負責的那幾張圖，多一張都不做。" },
        { type: "type3", key: "C", text: "覺得預設版型太死板，靈感一來直接把整個排版打掉重練。" },
        { type: "type4", key: "D", text: "「哇！這排版好好看喔！辛苦了！」（然後繼續滑手機）。" },
        { type: "type5", key: "E", text: "負責把這些美美的 Mockup 放到簡報裡，準備報告時獨攬設計功勞。" },
        { type: "type6", key: "F", text: "「為什麼要用這種排版？我覺得很醜欸，但我不知道怎麼改，反正我不要。」" }
      ]
    },
    {
      id: 4,
      text: "群組討論時，你通常的回覆頻率和風格是？",
      options: [
        { type: "type1", key: "A", text: "【秒回魔人】看到紅點就渾身不對勁，大家不講話我會極度焦慮。" },
        { type: "type2", key: "B", text: "【條列大師】只回覆重點，喜歡用 1. 2. 3. 條列式交代事項。" },
        { type: "type3", key: "C", text: "【意念回覆】有看，有讀，但懶得打字，半夜才會突然丟一堆資料上來。" },
        { type: "type4", key: "D", text: "【貼圖機器】不管討論多嚴肅，只用迷因貼圖回答。" },
        { type: "type5", key: "E", text: "【艾特狂魔】喜歡一直 @ 所有人統整結論，像個沒有薪水的專案經理。" },
        { type: "type6", key: "F", text: "【失蹤人口】不看不回，逼急了就回一句「我很忙，晚點看」。" }
      ]
    },
    {
      id: 5,
      text: "專題趕工到半夜，大家決定叫外送慰勞一下，你會怎麼提議？",
      options: [
        { type: "type1", key: "A", text: "隨便吃什麼都好，越快送達越好，我趕著寫下一段進度。" },
        { type: "type2", key: "B", text: "吃什麼都可以，但錢要當場算清楚（包含運費與塑膠袋的 1 塊錢）。" },
        { type: "type3", key: "C", text: "突然想吃很遠的那家文青拉麵，即使要等一小時也無所謂。" },
        { type: "type4", key: "D", text: "我負責點餐！大家要不要吃那家超讚的麻辣鍋？我請大家喝飲料！" },
        { type: "type5", key: "E", text: "順便幫指導教授點一份送過去，做足公關。" },
        { type: "type6", key: "F", text: "你們點的我都不要，找不到我想吃的我就生氣。" }
      ]
    },
    {
      id: 6,
      text: "如果組內不幸出現一隻「完全不做事」的寄生獸，你會怎麼處理？",
      options: [
        { type: "type1", key: "A", text: "聖母光環全開，一邊抱怨一邊默默把他的份全部做完。" },
        { type: "type2", key: "B", text: "蒐集他不做事的對話紀錄與證據，私下寄信給教授要求當掉他。" },
        { type: "type3", key: "C", text: "完全不管他，反正我的部分夠酷就好了。" },
        { type: "type4", key: "D", text: "打不過就加入他，大家一起擺爛，看誰先受不了。" },
        { type: "type5", key: "E", text: "表面上跟他稱兄道弟，但在期末互評表上給他打 0 分。" },
        { type: "type6", key: "F", text: "在群組直接三字經開噴：「你到底有沒有要畢業啊？」" }
      ]
    },
    {
      id: 7,
      text: "關於這組專題的最終目標與成績，你的想像是？",
      options: [
        { type: "type1", key: "A", text: "要做就要得第一！就算肝指數破表也要拿下特優展出！" },
        { type: "type2", key: "B", text: "確保每個步驟符合教授的評分標準，穩定拿下 A-。" },
        { type: "type3", key: "C", text: "成績隨便，我只想做酷東西，教授看不懂是他沒品味。" },
        { type: "type4", key: "D", text: "算好及格邊緣的付出比例，60 分萬歲，多一分都是浪費。" },
        { type: "type5", key: "E", text: "只要在報告那天把故事說得漂亮，拿高分輕而易舉。" },
        { type: "type6", key: "F", text: "有過就好，沒過就是組長帶領無方，不是我的問題。" }
      ]
    },
    {
      id: 8,
      text: "遇到跟指導教授的定期咪聽（Meeting）時，你通常扮演什麼角色？",
      options: [
        { type: "type1", key: "A", text: "準備了 50 頁的詳細進度報告，瘋狂輸出。" },
        { type: "type2", key: "B", text: "負責記錄會議重點，會後發出條理分明的會議紀錄。" },
        { type: "type3", key: "C", text: "常常遲到，但偶爾會提出讓教授眼睛一亮的奇葩點子。" },
        { type: "type4", key: "D", text: "坐在最角落負責點頭、微笑、以及幫忙開投影機。" },
        { type: "type5", key: "E", text: "主要發言人，非常擅長把只有 10% 的進度吹噓成 80%。" },
        { type: "type6", key: "F", text: "教授一質疑就立刻臭臉，內心狂罵教授什麼都不懂。" }
      ]
    },
    {
      id: 9,
      text: "專題資料夾裡的「檔案命名」，哪一個最像你的風格？",
      options: [
        { type: "type1", key: "A", text: "專題最終版_絕對不改版_我發誓.pdf" },
        { type: "type2", key: "B", text: "20260701_專題企劃書_V2.1.pdf" },
        { type: "type3", key: "C", text: "未命名-1的拷貝(2).pdf" },
        { type: "type4", key: "D", text: "阿明負責的部分.docx" },
        { type: "type5", key: "E", text: "給教授的精美報告版.pptx" },
        { type: "type6", key: "F", text: "爛專題_不要再退件了.pdf" }
      ]
    },
    {
      id: 10,
      text: "總結來說，你覺得你在專題組別裡，最不可或缺的價值是什麼？",
      options: [
        { type: "type1", key: "A", text: "沒有我，這組連個屁都生不出來。" },
        { type: "type2", key: "B", text: "沒有我，這組會像一盤散沙，毫無紀律。" },
        { type: "type3", key: "C", text: "沒有我，這組的東西會無聊到讓人睡著。" },
        { type: "type4", key: "D", text: "沒有我，這組的人會因為壓力太大而崩潰。" },
        { type: "type5", key: "E", text: "沒有我，這組會因為不會講話而被教授電飛。" },
        { type: "type6", key: "F", text: "價值？我不退群組就是對你們最大的恩賜了。" }
      ]
    }
  ],
  results: {
    type1: {
      id: "type1",
      name: "🔥 燃燒殆盡的專題狂戰士",
      desc: "專題就是你的命，極度負責但也是控制狂。看不慣別人太慢，常自己把事情攬下來做，是團隊中的「肝鐵人」。",
      power: "一肩扛起全組分數的無情輸出機器。",
      partner: "💼 毫無感情的打卡公務員、🍵 六根清淨的快樂薪水賊",
      enemy: "✨ 不受控制的靈感流浪漢、💣 自帶火藥的爆走自走砲",
      shape: "triangle",
      color: "bg-red-500",
      textColor: "text-red-500",
      hexColor: "#EF4444",
      accentBg: "bg-red-50"
    },
    type2: {
      id: "type2",
      name: "💼 毫無感情的打卡公務員",
      desc: "工作與生活完美切割，講求效率與規則。不會拖累別人，但也別指望你在週末或半夜三點回覆任何訊息。",
      power: "穩定產出的定海神針，進度表的守護者。",
      partner: "🔥 燃燒殆盡的專題狂戰士、💼 毫無感情的打卡公務員",
      enemy: "💣 自帶火藥的爆走自走砲、🍵 六根清淨的快樂薪水賊",
      shape: "square",
      color: "bg-blue-900",
      textColor: "text-blue-900",
      hexColor: "#1E3A8A",
      accentBg: "bg-blue-50"
    },
    type3: {
      id: "type3",
      name: "✨ 不受控制的靈感流浪漢",
      desc: "做事全憑感覺。有靈感時產出驚人，沒靈感時像人間蒸發。資料夾極度混亂，永遠找不到最終版。",
      power: "偶爾產出神來一筆的爆款創意。",
      partner: "🍵 六根清淨的快樂薪水賊、🎭 八面玲瓏的政治大師",
      enemy: "🔥 燃燒殆盡的專題狂戰士、💼 毫無感情的打卡公務員",
      shape: "squiggle",
      color: "bg-amber-400",
      textColor: "text-amber-500",
      hexColor: "#FBBF24",
      accentBg: "bg-amber-50"
    },
    type4: {
      id: "type4",
      name: "🍵 六根清淨的快樂薪水賊",
      desc: "主打一個陪伴，專長是情緒價值、訂手搖杯。只要能畢業，願意出勞力（但不包含腦力），是好用的工具人。",
      power: "潤滑團隊氣氛的最佳吉祥物。",
      partner: "🔥 燃燒殆盡的專題狂戰士（缺小弟的狂戰士）",
      enemy: "🍵 六根清淨的快樂薪水賊（其他的快樂薪水賊）",
      shape: "circle",
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      hexColor: "#10B981",
      accentBg: "bg-emerald-50"
    },
    type5: {
      id: "type5",
      name: "🎭 八面玲瓏的政治大師",
      desc: "做事 3 分，報告 10 分。極度擅長向上管理（指導教授）和對外推銷，但實際動手的產出通常少得可憐。",
      power: "把 60 分的專題包裝成 95 分的公關魔法。",
      partner: "🔥 燃燒殆盡的專題狂戰士、✨ 不受控制的靈感流浪漢",
      enemy: "💣 自帶火藥的爆走自走砲、💼 毫無感情的打卡公務員",
      shape: "star",
      color: "bg-violet-500",
      textColor: "text-violet-500",
      hexColor: "#8B5CF6",
      accentBg: "bg-violet-50"
    },
    type6: {
      id: "type6",
      name: "💣 自帶火藥的爆走自走砲",
      desc: "團隊中的不定時炸彈，意見很多但又不想動手。防禦心極強，稍微被否定就會立刻開啟戰鬥模式或直接擺爛。",
      power: "測試組員血壓與修養極限的試金石。",
      partner: "無（拜託自己一組）",
      enemy: "所有人類",
      shape: "lightning",
      color: "bg-gray-900",
      textColor: "text-gray-900",
      hexColor: "#111827",
      accentBg: "bg-gray-100"
    }
  },
  tieBreakerOrder: ["type6", "type1", "type5", "type3", "type2", "type4"]
};
