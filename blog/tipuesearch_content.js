var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2a-midag8 2024 Spring 課程w6","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第六週實作內容報告 W6 在分組網站加入w4任務 第八組自評分數:80分 下面為2a影片嵌入各組員分組網站網頁連結，影片、摘要、字幕文字檔皆在連結內。 41023108 組員自評: 75分 2a-midag8 w4 2a hw4 41023110 組員自評: 70分 2a-midag8 w4 2a hw3 41023155 組員自評: 70分 2a-midag8 w4 2a hw2 41023211 組員自評: 70分 2a-midag8 w4 2a hw1 將w4-w5週影片剪輯實作網址個別建立在此頁每個組員學號下方，並讓其自評自己的分數 也能知道剪輯的各週影片都有什麼?","tags":"w6","url":"./2024-Spring-w6-blog-tutorial.html"},{"title":"2a-midag8 2024 Spring 課程w7","text":"清明連假 假日放鬆幾天，下禮拜繼續努力","tags":"w7","url":"./2024-Spring-w7-blog-tutorial.html"},{"title":"2a-midag8 2024 Spring 課程w8","text":"內容管理系統 cd2024 2a w8 產品協同架構說明 本週為第八周，根據下方影片知道自己的任務與需要做的事情，並進行每周進度統整進度 https://youtu.be/CqhZm_9ugdc","tags":"w8","url":"./2024-Spring-w8-blog-tutorial.html"},{"title":"2024 Spring 課程w1","text":"w1 2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. 2a 建個人課程倉儲 新增個人倉儲，且更新進度 下載可攜套件檔案 下載上課所需檔案 將個人倉儲 import 至 Replit 設定 Github 帳號的雙重認證 對個人的githib帳號使用雙重認證，並且與電子產品綁定 利用import 倉儲至 Replit 進行改版","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"},{"title":"2024 Spring 課程w2","text":"W2 協同產品設計實習的第二週, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 指定第八組倉儲 利用 Codespaces 維護倉儲與網站 學習使用Codespaces維護分組倉儲及網站內容","tags":"w2","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程w3","text":"w3 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料。 負責第三段 43-65page 由41023110 (introduction_orig.txt, 使用了chatgpt與劍橋辭翻譯，並用word編排翻譯段落。 w3-1 如何將個人倉儲設為 2a-midag2 分組倉儲的子模組 在replit來維護的話，有一些特定的方法，Repri是綁到你給他的賬號下。假如現在在近端做，就必須把它克隆下來然後再進行操作然後再推回去。利用SSH ，先確認在靜端是否有權限，權限是在登錄cadlab檔上的putty.reg，此部分是利用putty做的，在近端部分沒有時間限制，在目前系統上putty是沒有任何setings。但現在要用ssh刻隆下它，就必須要權限。在找到實體權限後雙擊就可寫入進去，在察看putty有出現對應的key與setings，都有就可用setings進行刻隆，並且改版可以push回去。載入之後有setings名稱，並確認是否有設proxy，因為沒有設ipv所以沒有proxy，所以之前設定部分要修改成none，並確認key是否有更改。key要設到外部才可攜。 確認可以連線後，就可以把key as push出來，key就會在主態登錄檔regedit中，在current_root下的software可找到設定的setings，並且裡面就有對應的key。 有權限後就可刻隆。刻隆在c槽比較快速，切換槽c並在槽中用mkdir建一個tmp，並用git clone --子模組recurse+ssh+對應帳號 刻隆下。 執行成功就可以讓倉儲設為子模組，先進入倉儲對應目錄把整個資料抓下，並git add。(分組倉儲底下)組倉儲名稱+git+子模組submodule+add(表示用git建立子模組)+個人課程倉儲+目錄，用https去抓子模組在分組倉儲是沒有權限的。 可以把組員的倉儲抓下來。在個人更新時可以分段抓取，未處理完的章節可以不引進。在git push後不只建了目錄還會動gitmodules檔案，待第二個人還沒建子模組前就刻隆下來，將個人倉儲加為子模組之後，就要處理.gitmodules的衝突。 w3-2 將組員的個人倉儲設為分組倉儲子模組 已建立組別倉儲，利用倉儲對應的codespaces下git submodule add。確認git status分支是否跟主分支是同步的，在用ls-l秀出內容後clear下來。接著用git submodule add+倉儲網址+git+學號，指令意思是必須在分組倉儲目錄新增一個子模組，其中子模組要的資料在複製的網址中取得，並打上目錄名稱。成功 克隆後add在commit推上去，推上後回到倉儲確認有子模組資料加入。其中子模組是有版本的，意思是可以開發跟推出同步進行，版本可自行決定公布。 w3-3 如何在 Replit 維護分組倉儲 處理與Git和SSH相關的操作。獲取和安裝特定的子模塊，並準備環境以啟用編輯功能的步驟。在配置文件中權限很重要。接著創建和管理SSH密鑰以及將公鑰添加到特定的帳戶中。再來如何在Git中進行提交，並解決了由於權限問題和衝突。在操作過程中保持耐心和細心與定期備份數據的重要性。最後如何使用命令來移動和重命名文件，並通過上傳和移動文件來維護Git存儲庫。 w3-使用 Gitpod 維護個人網站 使用Gitpod連結GitHub帳號，透過倉儲網址進入Gitpod後，若無對應的模組，需先執行chmod u+x init_replit進行模組安裝。儘管提供的資源與codespaces不同，但執行速度依然快速。在Gitpod中開啟python3，並具有多個終端機，程式將自動開啟瀏覽器進入編輯模式。即使未下載子模組，Gitpod仍會列出目錄，相較於codespaces功能稍好，且網址為亂碼式以保障安全性。 若需查看靜態內容，可新增一個終端機，執行python3並啟動http server，直接在8000埠號瀏覽器中開啟即可查看靜態內容。要關閉執行，可在Gitpod.io儀錶板中進行操作，點擊\"stop\"即可停止計算時間。 w3-使用 Gitpod 維護分組網站 進入Gitpod連結登陸github帳號。利用倉儲網址打開，裡面沒有對應的模組，所以要先chmod u+x init_replit安裝模組。其中給予的資源並不輸codespaces，執行速度依樣快速。照樣打開python3，並且也有多的終端機，程式一樣會自動開啟瀏覽器，就可以直接進入編輯。若假如沒有下載子模組，Gitpod一樣會幫忙列出目錄，比codespaces稍好些。並且網址也是亂碼式保全功能。 要看靜態，新增一個終端機，然後用python3執行模組。啟動http server，直接啟動8000埠號瀏覽器幫你開啟，open就可看到靜態。 要關閉執行，一樣在Gitpod.io儀錶板，可看到登陸與改變內容，需要關閉點stop就會停止計算時間。 w3-使用 Gitpod 維護分組網站 在協同分組報告製作中，使用LaTeX進行最終的文件製作是一種常見的做法。為了在Windows系統中進行編譯，必須下載並安裝LaTeX程序。報告的主要內容通常放在團隊的Git倉庫中的downloads資料夾下。每個組員被分配了特定的任務，例如撰寫摘要、引言等。任務分配完成後，組員需要將自己的工作上傳到團隊的Git倉庫中，以便其他成員可以查看和整合。在上傳之前，需要確保更新了最新的版本，並執行必要的編譯步驟。整個過程需要團隊成員之間的密切合作和有效的溝通，以確保最終的報告質量和準確性。 設定網誌 在設定網誌時，首先需要了解網誌的原始文稿通常存放在Markdown目錄下，轉換為HTML檔案後存放在Blog目錄下。使用Pelican套件進行轉換，並根據不同需求設定不同的配置檔案，如local_publishconf.py和publishconf.py。這些配置檔案包含了網址、作者、網誌標題等信息，並根據需求設置絕對或相對路徑。另外，網誌內容需要按照一定的格式編寫，包括日期、標題、摘要、內容等。完成編寫後，使用gen_blog工具進行轉換，確認無誤後提交到GitHub上。 w3 如何協同製作分組報告，並將各組組員加入至分組倉儲建立子模組，LaTeX 轉 pdf教學.","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"2024 Spring 課程w4","text":"w4 影片上字幕 cd2024_2b_1_建立個人課程倉儲與網站 cd2024_2b_4_說明如何將倉儲 import 至 Replit 改版後推回 github上 2a 1 cd2024_2a_2_odoo_plm簡介 202403221445 cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github cd2024_2b_4_說明如何將倉儲 import 至 Replit 改版後推回 githu下)下)","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"2a-midag8 2024 Spring 課程w5","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w5 統整網誌 將組員個人網誌納入分組倉儲目錄下，並持續更新各影片剪輯後製，在嶔入影片過程中多次校正文檔，我們使用的軟體是https://www.capcut.com/my-edit這個軟體，目前字幕只支援簡體中文所以我們必須在翻完後再重新拉回進度條去逐字更改翻錯的內容及將簡體字改成繁體字，20分鐘以上的影片通常都會要剪上1hr以上時間。 這周比較枯燥乏味江老師的影片從第一週到第四周的影片上字幕，我們因人手不足每個人至少都要減8至9片的影片，用CAPCUT城市去剪片，剪完影片字幕還是簡體中文，還得回去影片的中間把簡體中文改成繁體中文，剪完還要上傳到YOUTUBE，YOUTUBE影片只要影片超過20分鐘還會跳出提示影片過長，又要回去剪片軟體把影片分成上下兩部，這對我們這組完全不利，四個人要把1~4周的影片剪完還要用網誌內容等等，時間就要花比其他組的還要多。","tags":"w5","url":"./2024-Spring-w5-blog-tutorial.html"}]};