var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://wmrtbij49h.github.io/cd2024/ \n 網誌:\xa0 https://wmrtbij49h.github.io/cd2024/ blog \n 簡報:\xa0 https://wmrtbij49h.github.io/cd2024/revel \n 倉儲: https://github.com/Wmrtbij49h/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n", 'tags': '', 'url': 'Brython.html'}, {'title': 'practice', 'text': '', 'tags': '', 'url': 'practice.html'}, {'title': 'W3 Task', 'text': 'cd2024 w3 任務頁面 \n cd2024 w3 任務 \n 1. 請各組將組員的個人課程倉儲 cd2024 設為分組倉儲 2a-midag1 的子模組, 且以各組員的學號作為子模組的名稱 \n 議題: \n 如何在倉儲中設定子模組, 為何要將資料設為子模組? \n 能不能在 Replit 維護分組網站? 其他方法還可以直接使用 Codespaces, Gitpod 與 localhost 維護倉儲與網站 \n 假如仍希望使用 Replit 維護分組網站, 該如何進行? \n 2. 請各組員將負責分工處理的 \xa0 https://webthesis.biblio.polito.it/16429/1/tesi.pdf \xa0 中英文並列資料 (LaTeX) 放在個人的倉儲網站, 最後在分組倉儲中整合建立出各組的期中報告 pdf 檔案 \n 該文章有 87 頁, 若有八名組員, 則每人可分工負責 11 頁, 若兩組以上結合協同, 則可按照規劃, 從文章標題開始到最後一頁, 先分配各組員任務後展開中英文並列編輯, 可以使用翻譯軟體或 ChatGPT 協助進行內容解釋或翻譯, 各組通篇完成中英並列資料整合後, 各學員必須於個人的課程倉儲 cd2024 中整理出協同過程的心得. \n --------------------------------------------------------------------------------------------------------- \n 1.需先將分組倉儲clone到近端可攜環境中的tmp目錄下，權限的部分依照前面putty設立的key. \n 2.我們將以4人分配87頁翻譯資料，平均1人22頁，並將各分配到的段數翻譯完成後放在自己的倉儲下，最後統一 \n 在分組倉儲中整合建立出各組的期中報告 pdf 檔案。 \n 第一段 1-21page 由41023108\xa0 ( ACKNOWLEDGMENTS.txt, Creative Commons.txt, LIST OF ACRONYMS.txt, abstract.txt, introduction_orig.txt,\xa0 \n 第二段 21-43page 由41023155 ( introduction_orig.txt, \n 第三段 43-65page 由41023110 ( introduction_orig.txt, \n 第四段 65-87page 由41023211 ( introduction_orig.txt, \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W3 Task.html'}, {'title': '影片', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n', 'tags': '', 'url': '影片.html'}, {'title': 'w1 setup', 'text': '\n 好的。 好那我們來看一下就是說在這裏面呢我們要設定網字的話 我們必須要先知道說網字的文字檔啊 就是他的這個原始的啊文稿是在Mac檔這個目錄下 然後一旦他經由Pet tic轉完之後啊 他的html抄文件會放到B rog 好那這個是第一個概念 好那第二個概念就是他是利用啊這個 佩利肯的啊這個套件 因爲你只要有注意到的話 我們其實一開始在啊這個安裝模組的時候啊 我們其實就已經有把這個佩利肯裝進來在這裏 所以這個是網字 然後他之所以能夠辨識這個模型是因爲我們裝了模型的模組 好那其他前面這些模組都是CMS IMD在用 好大概是這樣 好所以透過因爲我們已經有安裝這個啊佩利肯模組 所以我們就可以利用這個工具來轉入我們的網質 可是他的這個網質轉檔他是有設定檔的 跟我們的網質有關的設定檔總共有三個 一個叫標誌底線Paris config點py 好那這個所謂logo的意思就是你轉完的啊這個 那麼網字啊他所有的連結都是用相對目錄的 這個是適合在近端看的 但遠端也是可以看的啊 意思就是說他並不是用絕對網路的路徑在進行設定的哦 那通常你不要有留言板的話你就可以用這個 好那用留言板 所謂留言板就說你在每一篇網字底下 你可以想辦法用奢帕體就是第三方的這個工具啊 然後來啓動 一個留言的一個功能 那這個留言的功能因爲他要記錄你的絕對網址啊 所以你就不能用相對位置了 因爲他就不曉得啊你的絕對網址是什麼 所以這個時候我們就必須要用這個設定來轉檔 好那共用的轉檔的檔案就是這個 好那我們來看一下我應該是反過來然後這個是 好這個要加留言的這個是共用的啊 那我們把它打開就知道了 所以你只要打開這個就會在我們的編輯器裏面 那我現在是習慣把所有的小頁面呢都放在一起 然後因爲我在這裏只要有編輯相關的檔案我馬上就可以切換來看 好那能夠使用的這個編輯器的啊這個位置也會比較大 好那這裏面看起來他是拍省的城市 那看起來是沒有任何我們必須要進行設定的 好的。 應該沒有所以這個是可以擺姿勢的啊 但是假如共用的這個你把它打開看 這裏面就你就必須要進行相關的設定啊 你的作者就是你的學號OK 你的S ime就是你這個網字的名稱 所以這個名稱待會我們轉檔他就會出現在我們的網字最上頭OK 那底下這個是啊這個 他們這種的話是我們是以臺灣的哈又貼又加8的是啊 這個時區往那底下這邊應該也沒有要改的 所以你要改的部分就只有改 作者跟你的啊網字的標題 那網字標題你可以寫 你這邊應該可以寫協同產品設計實習OK好 那看你要不要加上你的學號 OK這個這個是課程名稱哦那前面你可以加上你自己的學號 好那最後我們現在看的是佩利肯扛費 最後一個是巴黎扛費 那這個裏面你可能基本上就必須要改這個E RL 好因爲這個就是你 前面這個就是你的網制的啊這一個那麼 王子好那 你的王子應該是比方說我的學號假如是一個 我的學號假如是一個 你的王子應該是給他點來哦 然後再加上CD 2024 好所以你這個 檔案呢也就是發佈配置的這一個 你要改的就是這個賽網址 然後假如是根據這樣的一個格式的話 這個就是你的登錄到給他們的賬號 那這樣的話他就可以轉完之後啊 他就會用這個來找到你的每一個網字的頁面 好那其他的部分 其實這底下是我不曉得你是可不可以用我的了哈你這個先不要改看看 好那這樣的話你一旦轉檔其實你已經可以那麼看到那到底要怎麼轉檔 我是透過一個檔案 它叫做將軍 這個 好那可是這個Jim b rog你假如輸入進來啊他必須是可以執行的 所以你就要執行這個勸解MOD 要加上x 然後要讓Jimbrog 可以執行這個指定你一定要做 因爲你硬迫進來啊他這個答案是不能執行的 好所以你要改變他這個答案的屬性 空一格又是代表使用者 要讓他加上x是直行的意思 好那這樣的話我只要在上面Mac檔的末路下 按照格式好 那這個格式就很重要 可是你要做這個格式之前呢我們這邊有一個配置 這邊你要有一個配置萬底線 針對他底線底下這邊啊反映出正確的倉儲網站簡報跟網字好 那裏面用到的是憤怒相關的這個你要你要來更改好 那倉儲的部分就是前面這個就是你的 你的這個王子 倉儲的王子 後面這個就是顯示出倉儲王子其實兩個是一樣的 好那網站的部分就是 我們的這個電話配置 上面那一頁繡出來的那個網站的連接 啊就是你的電話的賬號 點給他點IO斜線CD 2024那簡報就是加上re bu 網字就是加上兄弟 那你這個要自己更改 好那假設說好那我們這一個格式就非常重要啊 這個格式的部分你可以扣 因爲這一這一頁應該大家可能都有 其中一定有一個點MD 然後然後前面這個至於這個檔案的名稱你可以自己選 可以選日期可以選周可以選啊你認爲啊比較容易來分別啊 因爲他的每一個MD檔不能重複嗎 OK所以我我是用日期做的好 那這邊的格式就非常重要了 前面這8行啊格式是不能亂改的好 因爲每一片網字他都是由這個格式來辨別的 那麼時間的部分你一定要按照他的這個語法啊連待日夜待時日空一格 然後啊幾個小時 慢哈後面是秒 好那我其實我都沒有造時間呢我都是早上11點啊 因爲通常那個時候應該應該比較清醒啊好 其实我每一篇网字我这个都只是改日期而已 好那这个标题就是看你是第几周的网字因为我们要求你是每一周都写啊 好那第一周的话你只要已经学会了你就可以这里开始写你的第一周 啊那至于类别跟关键字这个你自己看你要怎么分辨 你只要要像我的话我基本上我这个是班级吗 OK那你只要我们现在还没有给你组别的话哦你可以看 这边我们还没有啊这个选好 每一组至多8人 然后所以组别可能是下礼拜才能确定 所以这边呢我们一开始你先学试着把这个编辑的部分把它啊这个写上去 反正是可以改的吧 好那这个就是关键字 那你的category基本上就是啊这个一个 然后你的关键字角有一个以上的话你就用逗点隔开 OK比方说我这里就讲到这个推理肯 OK类似这样那最重要的就是第六行 因为第六行上面的字串啊 他就是拿来转换网的那个超文件的档案名称 哎意思是什么意思是每一个网字要有一个独立独一的这个12 那通常我会用英文的原因是你用中文他转出来的他会自动帮你转拼音 啊因为他这个可能是中国人做的 所以你只要写中文的话他会用中国的拼音帮你把中文转成英文OK 他转到最后我也看不懂 好但是你大概念的话是念的出那个中文的发音呐 哦因为毕竟他们也是好几十亿人在用啊 但是基本上的话就是说我我是比较习惯直接就写英文啊 但是每一个网字都要不同的啊不同的这个好 所以假设我们现在因为这个已经经过改版了啊 所以 你前面所写的这个八行一定要照这个格式 然后在这个12行之前呢他是摘药啊这个不能这个不能乱乱改了哈 第十二行一定要照这个 那前面你可以有一行到两行的这个摘药 就是说他绣出来的时候这个是x水啊 就是你这一篇到底在讲什么 而且只是写在第10行或者通常会摘药不会太长啊 大概一行两行了不起 好那后面的部分 他的这个标题的大小是用井字号来代表的假如是一个井字号空一格 这个是大标题最大的好 那你只要要小标的话你就变成说我就两个 意思就是这个这个字形会比较大 这个会比较小好 然后底下的话你假如再有三三个井字号的话就是3标 类似这样好 所以底下的部分就是我们还有一些格式 你现在先把你前面我们所讲的这些啊我们先把它设定好 然后你跑到这边来 你一旦让他可以执行 而且我们直接执行这个GEN Brock 前面一定要打目前所在位置 否则他找不到你只要只有打Gmbro 他不晓得你是 要执行哪一个好 所以我们这样子按下去之后他就会帮我佩利肯就会帮我们转打OK 那转档看目前应该只有一篇吗 好所以他就一个阿迪口OK 那这个阿迪口我们刚才已经讲了 你只要要看的话 你就把它乱 然后按一下 这个VBU等他出现之后啊你把这个拉出来 然后拉出来因为前面这个每一次都不一样吗 所以其他人也没有办法进来啊除非他他就是用啊这个复制 所以我这里就打一点麦 然后你只要想看的话哎我这个就是已经跟你同一个版本了 好所以我讲这个让他起来 我点这个啊steady 我就看得到了 我就看得到我的静态而且我点这个就是我的网址 所以你编完之后还没送之前你就可以先试着啊 比方说我内容管理系统我要加标题我要改 所以我就跑到我的这一个答案来 我的内容管理我这里要加2 啊那已经存了所以在这里我用箭头把它拉出来再给我转挡 那再转完之后我再从这里再软弱它就是最新的 就这样所以你确定这个是你要送走的版本之后 你再进入这个 get 然后你再告诉他说我已经改版了 然后改版之后确定一下没什么问题你再把它谱写上去 好那我们这个影片我试着纯看看 我们刚刚是record是shift Ctrl啊嘛 然后现在要结束是shift Ctrl加上s \n', 'tags': '', 'url': 'w1 setup.html'}, {'title': 'w1 odoo', 'text': '\n \n 好的。 好那麼我這邊建的這個演示是 有這個PLM 主要是這個PLM模組產品生命週期管理 好那你管理者的話進來啊就是你建這個 尋找的第一個人 好就是你登記的這個直接到 這個歐度打卡OK 然後三亞有一個賬號哎這個 你就是管理者 OK然後你可以再加入其他的這個使用者 好然後你一進來之後啊其實你就可以直接 先建一個新的因爲我們有主要是有兩個產品嗎 哦這是兩個報告好 那你從這個大師他這裏 你現在就一旦8個人都早起了之後 你知道他的學號 你就用他學號小老鼠N FU這個Email來聯絡他 然後你必須要先把這個Deita的這個產品先建起來 好然後他這邊呢 主要就是因爲我們還沒有還不能賣嗎 就還沒有完成 好所以基本上你定義的部分就是你用新產品 然後定定義一個因爲我們要來研究 上學起的這個鋼球平衡臺好 那裏面呢因爲他還不能賣所以這裏面沒有意思就還沒完成的意思 好那底下這邊你就可以設定說有沒有啊 爲了完成這一個 那麼專案或者是產品的開發 你有哪些活動啊 這邊那活動的部分 那一件的啊他那一件可以說我要通知他 我要打電話給他 我要開一個會 然後這個零組件繪圖是我剛加的 好然後你這個新的類型的部分其實是可以自己加的 因爲他這一個歐賭最大的這個特色就是說因爲他是開遠的啊然後 你很容易去做刻字畫 好那基本上這個 所謂的這個你活動的類別啊這個只是資料庫其中的一個表單哎 好所以你只要找到這個TV T的類別你就可以新增 好那這個是代辦事項 好那這個是要求某人要上傳這個相關的文件打好那你在這邊我就對某 總共對某了三個XTV t 然後有兩個標誌 啊然後這邊呢其實他這個還不錯就是你進來只要你的標誌 因爲我 在裏面只需要打入UL的連接啊他就會直接啊這個把它變成網址 然後我可以可以上傳這個圖擋 好然後這裏面Demo的部分就是 組長最好就是把把工作都交給別人啊 好所以我這裏面就請第一個主人說你瞭解一下怎麼樣把啦轉成PDF 好然後我給他五天的時間 好那你有問題你就回報啊 然後我告訴第二個主人說哎 你到昂血可去完成這個鋼球平衡臺的領主見會所 好然後我叫第三個主頁說那你把它轉到這裏面主力模擬 反正你有7個人可以用嗎啊 然後組長因爲要分配啊基本上組長不是不會做我都會做但是麻煩你做 而且時間都定好 你有問題你就回報 然後我這邊在模擬說好呢 關萬你而賽之後啊 他的賬號會收到他的一面 所以他的一面他就會收到這個 啊他總共收到兩個了哈因爲可能中間我有更改 那收到的部分呢 他這上面就會描述說到底要求你做什麼 然後你只要回來因爲你必須要先到定 啊你必須要先到店之後啊他從這個面有他就可以檢示你到底要我做什麼 所以點回來之後啊我就可以看到這個產品 那這個產品基本上你只要直接登錄的話 因爲他是還沒有成型的他也在開發根本還沒完成 所以他就時間上的話他是未來產品 好那前面這邊基本上都是 可能都是能賣的或者是零組件或者已經完成的雛形等等 那我們因爲沒有還沒完成 所以你只要單獨從他這個組員的賬號進來要看的話 你必須要按這個未來纔看得到啊 或者是你從沒有這邊直接點他就會連接回來哦 那連接回來你就可以看到他上面這邊呢他他應該 我不曉得他是不是可以讓我們打因爲打電話是要付錢的啊 理論上應該 他應該不會賭那麼大了啊 就是我們在那邊打的話是他付錢了因爲現在是在他的設備啊 那我不曉得收到電話了要不要付錢了啊不曉得是不是0204那種 好那這個不曉得 所以這裏面就是說你之前可能還不知道 因爲反正他上面沒有我們的恰舉的這個信用卡的資料 其實還好 然後只會產生錯誤力 所以這裏面你就可以看一下 就是你剛纔在指定的部分他就會出現在啊這個頁面上啊 那有問題的話你就跟他編輯說我時間不夠啊 啊然後我不行那你要你要解釋一下到底啊這個進度的這個問題 好然後只要需要的話你就可以說 好那我們開個會對吧 爲什麼都是我做的對吧 好那這裏面開個會大家講清楚 好所以這裏面其實意思就是說你這樣子把所有的過程都留下來的話 其實你所有人就可以分佔在不同的這個時區了 好然後你家有一些議題或者是你到底誰要做這個誰要做那個 好然後把問題每一個時段就是我一天可能花個半小時或者一小時 或者一個禮拜三個小時 好然後我到底做了什麼 然後就這樣做一個交代 所以我想這個你可以先這個可能要好幾個禮拜你才組 組員跟組長之間你纔會知道說啊這個要怎麼來使用這個套件了哈所以 你可能先有啊一兩個組員呢 你先登記一下PS M這個模組 然後試着模擬看看等到你全部都啊這個瞭解他的這個運作的方式之後啊 然後你再啊把所有的這些主人都把他弄進來 OK所以我現在把他要結束的話我是shift Ctrl加stop \n', 'tags': '', 'url': 'w1 odoo.html'}, {'title': 'w1 2b 3', 'text': '\n OK 好所以双重认证啊其实就是 你在电脑上要登录的话 啊比方说我这个之所以能够登录啊 我是已经通过他的双重认证 茶叶 所以你要设定的话你你必须要登录到get up 我就第一次当然不可能双重认证了对 然后你进来之后要赶快跑到这个账号账号的设定区 然后找到他的这个密码跟认证这个 项目 啊这个password是密码吗 哦send the kitchen是认证了 好然后你点进来 他内键底下这边呢他这个应该是没有启动的 双重啊双重认证 然后你给他启动的话像我我是绑定 我这个是绑定到 我的手表 假如你有智慧手表跟手机可以连的话 你就可以安装这个 只有这个是免费的 OK只有这个是免费 好那手机也可以安装这个假如你要的话 你手机就 搜寻一下这个ORC APP 然后你手机也可以用 OK 好那只有这个套件是免费可以 把那个密码因为你在像我在apple watch 我是可以把手机上的这个APP安装在手表上 好所以你就只要带手表不需要带手机就这样 好所以进到这里面呢 我们讲读一下 好因为他这边即便是简体中文啊 他还是英文呢哈所以你看他这边怎么讲 他说从因为我们上学起就知道了吗 从2023的3月 逐渐的开始强制所有用户都必须要用双重认证 哦所以你假如有以前旧的账号一定记得要赶快设因为他不知道什么时候 OK 他这里呀 给你45天呐 哦给你45天就你建账号之后45天内 你一定要赶紧把他弄起来 没有的话就进不去了 哦那旧账号我就不晓得他的趴的起是怎样 假如你的账号因为没有双重认证被锁定啊 那重建的部分不能用原来的那个页面啊就比较麻烦了 OK好因为他每一个一没有只能 在这个GT上登记一次 哦那他的使用就是除了连到这边之外 他其实是利用 利用这个二维条码了所以你只要看他下面的说明啊 有没有这个是我们刚刚讲的账号下的设定 好然后选择到密码跟认证 好然后在这个区域 在这个区域 你点选说我要启用双重认证 OK假如说英文的话是启用是enable 哦那你讲 知道这个是启用之后啊 他这边就会出现一个二维条码 OK所以这个二维条码你就必须要用你的手机 打开你的Mobile 意思就是GitHub Mobile里面他会有一个 相机的选项 然后拍这个二维条码 然后他就基本上他就会秀出啊 你可以输入到GitHub的 数字就这样 好然后一旦设好之后很重要的一点呢 好像这个就是二维条码对吧 然后你设置完之后 很重要的一点呢你一定要下载这个回复的这个自创 它叫做recovery coat 因为万一你的手机坏掉 OK或者是你的手机不见 OK你你没办法用啊 哎这个时候你就要靠这个回复码来取回账号 就这样啊这个回复吗你要么把它存在 随身碟要么把它同时送到你远端的比较常用的电子邮箱 好那保证说 最后你万一相关的设定都在手表和手手机上都不见了 你还可以拿这一串哦他是一堆一堆这个编码的数字啊加上自串 来取回你的这个账号 把它下载 否则他是啊他上面会有一个选项 他说你存了之后啊你说我已经存我的回复码 好然后这个时候你才可以把两段因为他很害怕 万一你的啊这个两段是认证中间出问题的话 这个账号形同是没有任何人可以登录 OK那你只要是付费的话你还可以请他帮你处理啊 也许打电话也许要保存你的这个账号因为你付费的他有认证吗 啊你用信用卡或者用什么样式用什么方式来付钱对吧 你说哎我我就是那个人 也许还可以拿回来 但是因为我们是免费的啊免费账号是没有这个金牛的部分 所以只靠这一个回复码来取回你的认证 OK好所以我们这个影片就可以把它存起来 然后是在这里 \n', 'tags': '', 'url': 'w1 2b 3.html'}, {'title': 'w1 2b 2', 'text': '\n 确定啊 开始啊 好所以我们就连到我登录这里你必须要登录到 这个get up 这是登录到get up 然后同时啊 登录到Repri 这是Repri 好所以你必须要啊先把两边把它连起来 OK意思就是说你要跑到你的 repe的这个账号下 这是你repe的账号 你要点选他的看 就是你账号下面的这个账号 设定 好所以我点选这个的话 我目前呢 在底下这里其实我已经有连连解了 两边能不能信任 靠的就是这个连线的服务 就是这个 你脚已经出现disconnect 表示这个你已经做过了 假如你是出现connect表示还没有连接 所以假如你本身的detail是对应到connect 你就给他点下去 他会在你的detail安装一个应用程式 OK表示你授权 可以两边可以互通 那互通之后的账号就会涨价 你只要连接到账号下的设定 OK 那他底下这边就有一个应用城市 这个是账号 在整合区 integration是整合的意思 那底下它就有一个applications 所以只要你两边的啊这个信任是成功的 你点选这个application 他就会出现这个 所以你只要有application下面有reply 表示你的get hot 跟reply两边是信任 意思就是说你带回假如把 仓储啊输入到你的Repri 改版完是可以退回来的 这个就是我们要的 好所以这个是第一步 所以我们确定有这个之后啊 我们待会再来做音破动作所以我们这个小影片呢我们先把它拍下来 OK所以我们小影片 这一小段啊 我们先赶 \n', 'tags': '', 'url': 'w1 2b 2.html'}, {'title': 'w1 2b 1', 'text': '\n 好這個已經啓動 所以我們現在所以你只要看不到畫面你要講啊 所以我們就是從 所以你只要看不到我操作的畫面你要喊一聲 所以我們從這裏點進來 然後再 我們的這個聽扣的是這個對吧 OK 好然後我們 必須先登錄 那麼 我先來看一下 剛剛那個刪掉好了 好因爲你在裏面建這個倉儲啊 其實 應該很自由的就是說我可以 我可以連到我的剛剛見的我把它刪掉 OK 哦這個我我把這個刪掉 所以要刪掉的話 你直接選他 好因爲我要重做一遍 那他的倉儲管理是在倉儲的設定區 OK好 所以我要把它刪掉重做 好吧delete 然後 他必須要打這個 哎好我把它刪掉啊 好所以第一步要做的部分呢你就要先登錄 有沒有先登錄 然後再連到 他的這個連結啊 是在我可以打在我們這個團隊的 主屏到這裏好了 所以我們應該直接打在打在這裏 所以是CD2024這樣你應該就看得到了 的 倉儲temperate 然後我們打在這裏 哎這個 那麼我們把它 變成是王子OK 這樣 哦這樣你應該 就可以直接看到了對吧 好所以你只要進入團隊啊 你點這個就可以連到我們想要你 進行處理的這個對吧 我們應該是這個 這裏把它點進去 那麼你就跑到我們的temperate 然後你利用這個temperate啊來create一個新的 倉儲 OK然後要選 CD2024小寫的哦這個是小寫的 然後這裏就是把協同產品設計實習的 個人課程網頁當做說明description就說明 哦那optional是選項的意思 所以表示說其實是可以 不一定要輸入這個說明哦但是你只要輸入說明待會就會出現在右上方 比較清楚了好 所以我們就create 哦所以他就會把我們的temperate那個倉儲啊 內容把它抓進來 有沒有抓進來 那你要弄成網站的話你必須要跑到倉儲的這個設定 這個設定 所以每一個倉儲他都有這個設定 只要你是擁有管理權限的 好這你就點他 然後左邊這裏就有一個pages 這個 好你再點進來 好然後 把分支裏面的面 設爲 網頁的根木路入的就是網頁的根木路 然後把它存起來 哦那他就會轉檔 哦那轉檔的時候啊 他就會 有一個註記 所以你把他點進來講 你要看他的過程其實還蠻複雜的 然後你看他的步驟 他會做很多的設定 他會下載檢查程序 哦那這個是給他的 他自己會幫你做 OK好 所以他做完之後啊 一開始那件呢 他是有一個樣板 可是我們是自己寫的啊 不是用他的樣板 好所以他這裏會有三個步驟 所以你看他密密麻麻其實他做了很多步驟 好所以第一步已經完成 緊接着第二步 report就是report bill status就是他到底 B5的怎麼樣 他把他資料存起來可以或者不行 所以他每一個步驟 他都有歷程 哎呀最後就把它部署在一個虛擬主機 好那這個OK了 那OK之後啊 其實你這裏只要重新載入原先設定 這個把它重新載入 你的網站的連接就出來 所以你點進來就是 我們現在要 你看好所以這個是第一步 所以我們這個假如已經建起來的 我們就可以把這個網址到這邊 我們把它吸下來 放到我們這邊呢 操作影片待會我們會有那個影片的MP貨 然後啊 電力的 案例網彈爲 哦所以你這邊也可以看到 我們後面再教你啊他的這個寫法 好這個是他網站假如你在網字因爲最後你還是要會寫哈我們這個在教你 這個網址啊假如在網字裏面因爲我現在在編這個網字 前後只要加大於小於他就變網站連接 那我們現在還沒有取到現在這個影片的網址 我们待会会把很长的网址放在这里 但是我们这种格式的话 他不会出现那个很长的网址 他只会出现我们中关号里面这个连接 好所以我们现在假如把它拍好 所以我们就要把现在这个影片呢我们要把它停止录制 OK \n', 'tags': '', 'url': 'w1 2b 1.html'}, {'title': 'w1 2b 4', 'text': '  \n OK好 所以我們這邊必須要先知道就是說我們用的這個 temporary啊就每一個人現在其實內容都一樣 啊但是你必須要 想辦法在repeat上面好來編輯 因爲你只要在近端的話也可以 我們就要設key啊那個我們後面纔會提到因爲你在協同的時候啊 不見得所有人都能上網OK 意思就是說他可能某一個時段他根本不用上網 哦我還是可以做 然後我提交了幾次之後 等到我能上網的時候我我再把它推送 啊那你中間的改版呢可能8個人到時候你是需要合併的 好所以那個合併或者解決衝突啊 其實才是協同的一個問題啊 那你之前只要上電腦輔助設計你應該有痛大好 只是說在協同的時候啊 應該解決衝突的這個機會更多 所以你必須要對這個系統有一點啊更多的瞭解 比方說所謂動態網站的資料 OK其實是未在configure的content的htm這個答案 好了轉換完成的靜態資料是位在康天的這個目錄下啊 這是第一個要知道的 那之前其實我們用蠻久了哈 那另外這個網站的原始黨是位在Macdong 所使用的網字系統我們用的是用拍繩寫的拍的坑其實這個早就在裏面啊 只是我們之前都沒有特別把它提出來也沒有要求你要寫 哦那因爲這學期沒有考試哦 重要的是每個禮拜你都要有進度助計啊 那這個就其實跟考試是一樣的啊 看你東西有沒有做出來你8個組員 反正有沒有貢獻其實你的好這個組員都很清楚了 好所以用的這個轉換完成的這個網字就未在broke 就好像我們現在看的有沒有我們看的這個網字 這個是我們倉儲的網址 對應的網站網址 哎然後你只要打book 他就會出現底下從index 好所以假如我們把這個 直接打到這個book看看 因爲他就會有一個 index的網頁來拍照 所以我們打到這邊這個就是你的 網址也就是內容管理的網址 再加上Brog 哎那我們答案看 好他就跑到這個外面這一頁 那我們現在就是要教你怎麼去設定他 讓你可以有這樣的一個連接 好所以這個時候還是一樣回到我們的這個倉儲裏面 所以你現在假如正在看你的這個螞蚱 OK你你基本上還沒有音破進來嗎 OK所以這裏變成說好那我們已經有設定兩邊連線 我們這邊要拍的就是說好那怎麼把它弄進去 OK好所以我們現在 已經登陸到re Repri OK 而且我們要確定 這個連線的部分啊已經完成 意思是說你 兩邊的服務 待會我們因破禁Repri改版完是退回催的回去的 OK好所以我們先來看 所以我們就要從奎葉一個專案 好所以現在你應該是已經登陸到repri了哦 那當然剛剛我們一樣也是登錄到dear了 所以這個時候我要建立一個report OK好所以你點這個curiple 我們是要 從get up來輸入的 所以我們選的是這 個我們並不是一個完全空的我們選的是input from get up 好所以你點選這個 哎他馬上會出現你剛剛見的 對吧他馬上會出現你剛纔見的 賬號下的這個CD2024 有沒有看到 好所以你就直接在這個打勾說哎我要 導入的就是這一個倉儲 那這個倉鼠因爲是用拍審寫的所以你語語言這個部分 你必須要把內建的no的點結實要改 改成拍審 OK然後在他的表單這邊點選一下 所以確認說你是input from get up 然後語言也選了正確的拍審之後 你再按這個音破縫給他 好表示我要在這樣的一個條件下哎把它 倒進來好所以我就按音破 所以他就開始幫你轉了 哦那等他轉完了我們必須要在這個平臺上面 安裝模組 因爲 他並不知道我們要跑的套件是什麼哎我們現在要跑的是網際內容管理嗎 那他需要 對應的這個倉儲 所以其實要的是這一串 哎那怎麼辦哎我們現在就按照 在這裏啊我們我們要打的是這個那看先看看能不能夠用複製的 所以你第一步就在Remy點MD這邊呢你看看能不能複製腳不能複製 可能真的要打啊當然網頁的部分應該是可以複製 可是要執行啊我們必須要在這個線 命令區啊看守是 OPPO就是你執行的部分啊破然後這個線是要執行命令 所以我們第一個就是要先把這個檔案呢設定可以直行 好那我們先想辦法把這個勸解目控一格u加x控一格INIT底線Repri 那其實INIT Repri是一個我們已經安排在裏面的檔案 好那我們看看能不能把它貼上 啊他會問你說到底有沒有 授權給這個網頁 你可以把複製的部分把它貼上來我說可以 他就貼上來 那至於這個指令是什麼意思 這個指定是要跟啊要改變了檔案的屬性 OK空一格後面就是他的選項 u代表的是youth x代表是直行 所以使用者要讓他可以加上直行的屬性 那針對的是哪一個答案呢 針對的是這個答案 所以這個指定一執行 這個檔案原來不能執行馬上就可以使用者馬上可以執行 而是我們iander 不知道里面有東西改變了 然後他會重新載入這個 現有的部分 好然後接着 就是執行他那執行一定要有 現在所在的目錄 下面的這個答案你只要沒有打前面的這個點加斜線他不會 他不知道你要执行哪一个答案 好所以这样的话他就会帮你安装模组 OK好所以意思就是说我们要按这个让之前 你就必须要先根据 Remi点MD我们是写在Remi点MD底下的这两个步骤 OK而且要在蟹友上面执行 好那一旦 他这里全部执行完的话 哎他就会回复到回复到他的这个回应 那这个回应的部分我们讲要把上面的已经执行完的讯息啊 要把它清楚的话我就打可以 clear是linings的一个指令 清除画面的意思 跟window下面 CLS是一样 好因为我们假如在Windows有没有 我们有时候在这里面我们有一些画面 假如在Windows你要把它清楚是吸引到s creative screen 哦这是window dose的指令 他因为是leaning是那个k先出来 他不好意思用同样的所以他把他叫CS 是一样的清除画面的意思 好所以刚刚我们打的是CLS 清除画面 好这个是在命令列 讲要听图画面就叫c 然后在v领时的话 他是叫k 好所以因为他有很多视窗 你要在这个视窗上你划手就要点这边 他这里要变黑的 假如你现在画在这里 你按inter是作用在这里 好是作用在这个小页面上 那我们为了要执行他 你必须要划水要点在这个他才知道 所以这个会变黑的 所以你按Ant他就会清楚画面 就这样 好那一旦 安装的所需模组之后你的乱应该就有作用好 所以我就按让 它撒花之后他就开始 在你刚才安装的这些模组的平台环境中来执行执行哪一个 那其其实他是执行面点py 那我怎么会知道呢 好那这边有一个设定 你假如把 隐藏的档案秀出来 好再一次哦 在这个档案区有没有 那这个档案区有时候会不见哦 有时候会不见哎 你按这个他又跑出来 OK这里这个 好那这个档案区的 显示这边呢 有一些档案是隐藏起来的 哦这个是专门看你要不要秀出这个 档案的显示 有一些档案它是隐藏起来 好所以你只要点选这个显示隐藏档 就是显示吗一等是蠢隐藏的隐藏答案你点它的话 底下有两个重要的答案 哦这两个设定档configura就是设定档 其中很重要的是这个档 点reply 好那意思就是说你按让到底他做了什么 你点他他就知道了 其实你点让 你点让啊其实他就是呼叫派神山去执行man点py OK就启动那面点py是什么 那面点py啊其实是一堆 执行城市所以我们把面点py啊把它带出来哇那这里面 因为它这里面会牵涉到两层 两层的启动啊那这个是内容管理里面 啊那但是我们必须要知道说原来他就是透过拍审三来执行就好了 OK这是我们编写的网纪内容管理系统 好所以一旦你启动之后啊 他的这个VBU 我们可以把它拉到同一个画面 因为待会我们要编辑答案会比较有比较大的范围 所以我们把这些小页面都把它拉到一起 哦因为待会我们其实是要抓出答案在这里来设定 好那我们要设定的部分 假如你想要看看我们之前用过的编辑 你就可以直接用滑鼠右键把这个Loki在分页中把它打开来 好所以这样意思就是说哎 他就会给你一个王王子可是这个王子对你来讲 没有人可以知道你现在这个网址是什么 对吧所以表示说你只要是一个人使用的话 你不需要去把设定的这个密码用c捆来代替不用你就直接用ADMN就好 了所以这个小写的ADMN 这是跟近端编辑是一样的哦 因为这一串就是保护你吗admin admin小写的这个就是管理者的密码 对你打了admin之后你就直接进去了 那你只要让其他的人来分享 分享这个编辑 好那ADM其实也可以的好 但是万一你这个连接的部分比方说你现在把这一串连接 划到不同的浏览器上面 哎那我这边我也有登登录所以不行啊你你可以试试看 这一串连接 只要知道的人就可以用ADM键来编辑 简单讲就这样 好所以你应该马上可以 编辑这一串 那你的网页在哪里啊 你要从刚刚设的就知道了 我们刚才是在这个账号下的仓储对吧 然后我们仓储里面有建立个CD2024嘛 所以这个是你的仓储 好我们把它扣闭下来 然后到我们刚才编辑的这里面 我们填入仓储的位置 OK 网页呢网页我们假如自己知道的话自己拼出来 假如你直接想要从里面抠也可以对吧 进到settings 然后进到配置哎 这个就是你的仓储是吧 哎应该呢 是你的网页了 好对这个把它扣扣过来 不过来一样把它放到你的网页区 哎好 哎可是问题来了 往字根点报呢 你必须要想办法在这个连接后面加上Brook 加上review 可是你假如直接用刚才扣的那个网址 你把它贴上来之后 你再打broke哇 那这样没有办法变成 这个连接对不对 那这里要怎么办 我想要有前面这个网页的 纯自创我不要 你 富家王html的资料好 那怎么办 我们就可以回来回来 然后把这个删掉 问题是我们这个 上面复制的部分要漂白吗 那通常漂白可以跑到这里 这个区域因为这个是纯网页 所以你把它贴上来 被a再往上护肤痣 他的htm的连碟就不见 所以这个时候你不要用OK了啊 因为这里面其实是让我们放城市码的地方 只是我们要利用这个网页的表单啊 把附加的超文件删掉 所以这个时候你再贴回来他就是干净的痔疮 好所以这这个这个做法一定要把它学起来 当然你也可以回到window的编辑器来漂白 只拿到他的这个字串 所以这个时候啊你只要后面直接在打bro 直接在打bro 然后再按inter就OK 不然的话你还要进入这个超文件编辑在那边搞半天 哦所以这里面变成说通常这个是我的做法 所以假如是这样的话 你的简报就是纯文字 再加上rebu 半年的这样的话你就可以把你对应的耳道里面的这些资料都把它填好 OK那至于底下这个跟我们不相干的我们就可以把它删掉 然后再把它按safe 那至于我们上面这个有关CMS IMD的说明 我们把它写在第2页 比方说这个s map就是Sime 你一按的话他会按照阶次列出目前的所有 好那因为我们现在都是一接的吗 所以你可以选他 把他按出来 有没有还有他就会秀哦 所以这个部分 我们只要要改好 比方说你现在想要改config 要改这个页面的标题 你就按config OK然后我们这边 我们是逛万嘛 所以我这里就是逛 是我的账号 CD2024 好对我一send他这里就改了 OK好 这个时候我只要把现在这个版本 我要把它送到我真正的给他配置上 我就必须要先按一下Ctrl 然后他转成静态 这个时候再回来 我们需要get对不对 那get的工具在哪里 还要跑到底下这里来找 你按一下看一下这个get里面他就有get 兔耳屎底下他就有get这个小页面 好所以他已经知道 你从这里就可以看出我现在有改版的部分绣在这里 好所以这个也是Repri不断的在进化对不对 好所以我们到这边来讲我们就说好 我们已经修改 仿战标题 而且 而且怎么样在额报 页面 填入对应的对不对 所以我们刚刚做了什么 我们填入在额报页面填入 正确的仓图 在什么仿制 与网站连接对吧 这个是每个人都不一样因为你的账号不一样啊 跟他的账号会对应不一样的 仓储的连接 网字的连接 网站的连接 我们刚刚就做了这些改变 这个时候我们把它 让他提交 那提交之后啊他这边就会出现这样 你注意看哦 这个就是远端 remov就是远端吗 所以他会说up to day哎跟远端同步的就是一个提交 哎那底下我们刚刚提交的这个部分呢 还没有复习 还没有推到远端 那那我们就推 就好了吗 因为权限刚刚已经建立了吗 所以推的时候他就会出现这个 你要确认砍缝 坎愤是确认 确认这一个阶段所完成的改版要不要推上去 假如不要就按比耐 假如要就按后面这个确认确认 他就会推上去因为权限刚才考那个时候已经建立了 好所以表示说这个已经上来 这表示说我们现在建的这个已经跑到 目前在转档 这个就是刚刚提交的内容 就这样好所以很显然待会我们的远端网站就会跟动态网站的内容同步 好所以我们先把这个影片我们先把它存下来 然后待会我们再来设定网网制的部分 OK \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'w1 2b 4.html'}]};