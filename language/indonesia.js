exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `Tunggu ya Beib ð¥º,, Gak Lama Kok~`
}
exports.ok = () => {
    return `Syudah nih beibbb ððð~`
}

exports.err = () => {
    return `â ï¸ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `â ï¸ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah â Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `â Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `â Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `â Hanya Untuk Boss Gua Ini`
}

exports.doneOwner = () => {
    return `â  ï¸Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `ð¥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `ð  Ngaca govloxx, Kau bukan admin!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*ââ ã HALL OF SHAME ã ââ*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `â User bukan seorang admin! â`
}

exports.adminAlready = () => {
    return `â Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! ð`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} ð selamat ${salam} , 
saya ${botname}, senang berkenalan Dengan anda.. ð      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*âTime Server : ${time}*
*ð List-Menu AZUKA-BOTZ :*

â­ââ ã Bot Info ã 
êâº ${prefix}owner
êâº ${prefix}rules
êâº ${prefix}ping
êâº ${prefix}runtime
êâº ${prefix}botstatus
â°â ${prefix}donate


â­ââ ã Owner ã 
êâº < evaluate
êâº > evaluate
êâº $ exec
êâº => exec
êâº ${prefix}setmenu [query]
êâº ${prefix}setmenu templateLocation
êâº ${prefix}setmenu templateTenor
êâº ${prefix}setmenu katalog
êâº ${prefix}setmenu katalog2
êâº ${prefix}setmenu list
êâº ${prefix}setwm packname|author
êâº ${prefix}sendsesi
êâº ${prefix}listpc
êâº ${prefix}listgc
êâº ${prefix}broadcast [text]
êâº ${prefix}bc [text]
êâº ${prefix}bcgc [text]
êâº ${prefix}nsfw [on/off]
êâº ${prefix}autorespond [on/off]
êâº ${prefix}antiviewonce [on/off]
êâº ${prefix}join [link]
êâº ${prefix}self
êâº ${prefix}public [only bot]
êâº ${prefix}del [reply pesan bot]
â°â ${prefix}setppbot [reply image]


â­ââ ã Database ã 
êâº ${prefix}setcmd [reply stiker]
êâº ${prefix}delcmd [reply stiker]
êâº ${prefix}listcmd
êâº ${prefix}absen
êâº ${prefix}cekabsen
êâº ${prefix}deleteabsen
êâº ${prefix}absenstart
êâº ${prefix}addmsg [nama file]
êâº ${prefix}getmsg [nama file]
êâº ${prefix}listmsg
â°â ${prefix}delmsg [nama file]


â­ââ ã Group ã 
êâº ${prefix}listonline
êâº ${prefix}sider
êâº ${prefix}wm packname|author
êâº ${prefix}infochat
êâº ${prefix}setdesk [text]
êâº ${prefix}setppgrup [reply image]
êâº ${prefix}antilink [on/off]
êâº ${prefix}revoke
êâº ${prefix}leave
êâº ${prefix}add [62***]
êâº ${prefix}kick @tag
êâº ${prefix}leave
êâº ${prefix}linkgc
êâº ${prefix}take packname|author
êâº ${prefix}group [open/close]
êâº ${prefix}tagall [text]
â°â ${prefix}hidetag [text]

â­ââ ã Anime ã 
êâº ${prefix}quotesanime
êâº ${prefix}anime [query]
êâº ${prefix}manga [query]
â°â ${prefix}character [query]

â­ââ ã Tag ã 
êâº ${prefix}stickertag
êâº ${prefix}videotag [query]
êâº ${prefix}vntag [query]
â°â ${prefix}imagetag [query]

â­ââ ã Stalking ã 
êâº ${prefix}igstalk [username]
êâº ${prefix}ghstalk [username]
â°â ${prefix}ytstalk [channel]


â­ââ ã Search ã 
êâº ${prefix}ytsearch [query]
êâº ${prefix}wallpaper [query]
êâº ${prefix}wikimedia [query]
êâº ${prefix}hentai
êâº ${prefix}wattpad [query]
êâº ${prefix}webtoons [query]
êâº ${prefix}drakor [query]
â°â ${prefix}pinterest [query]


â­ââ ã Converter ã
êâº ${prefix}toaudio [video]
êâº ${prefix}tomp3 [video]
êâº ${prefix}tovn [video]
êâº ${prefix}stiker [reply image]
êâº ${prefix}tourl [image/video/stiker]
êâº ${prefix}togif [sticker]
êâº ${prefix}tomp4 [sticker]
â°â${prefix}toimg [reply sticker]


â­ââ ã Image Effect ã 
êâº ${prefix}wanted [reply image/stiker]
êâº ${prefix}utatoo [reply image/stiker]
êâº ${prefix}unsharpen [reply image/stiker]
êâº ${prefix}thanos [reply image/stiker]
êâº ${prefix}sniper [reply image/stiker]
êâº ${prefix}sharpen [reply image/stiker]
êâº ${prefix}sepia [reply image/stiker]
êâº ${prefix}scary [reply image/stiker]
êâº ${prefix}rip [reply image/stiker]
êâº ${prefix}redple [reply image/stiker]
êâº ${prefix}rejected [reply image/stiker]
êâº ${prefix}posterize [reply image/stiker]
êâº ${prefix}ps4 [reply image/stiker]
êâº ${prefix}pixelize [reply image/stiker]
êâº ${prefix}missionpassed [reply image/stiker]
êâº ${prefix}moustache [reply image/stiker]
êâº ${prefix}lookwhatkarenhave [reply image/stiker]
êâº ${prefix}jail [reply image/stiker]
êâº ${prefix}invert [reply image/stiker]
êâº ${prefix}instagram [reply image/stiker]
êâº ${prefix}greyscale [reply image/stiker]
êâº ${prefix}glitch [reply image/stiker]
êâº ${prefix}gay [reply image/stiker]
êâº ${prefix}frame [reply image/stiker]
êâº ${prefix}fire [reply image/stiker]
êâº ${prefix}distort [reply image/stiker]
êâº ${prefix}dictator [reply image/stiker]
êâº ${prefix}deepfry [reply image/stiker]
êâº ${prefix}ddungeon [reply image/stiker]
êâº ${prefix}circle [reply image/stiker]
êâº ${prefix}challenger [reply image/stiker]
êâº ${prefix}burn [reply image/stiker]
êâº ${prefix}brazzers [reply image/stiker]
â°â ${prefix}beautiful [reply image/stiker]


â­ââ ã Sticker Effect ã 
êâº ${prefix}jail [reply image/stiker]
êâº ${prefix}red [reply image/stiker]
êâº ${prefix}gay [reply image/stiker]
êâº ${prefix}bloo [reply image/stiker]
êâº ${prefix}blue [reply image/stiker]
êâº ${prefix}sepia [reply image/stiker]
êâº ${prefix}green [reply image/stiker]
êâº ${prefix}glass [reply image/stiker]
êâº ${prefix}invert [reply image/stiker]
êâº ${prefix}blurple [reply image/stiker]
êâº ${prefix}blurple2 [reply image/stiker]
êâº ${prefix}wasted [reply image/stiker]
êâº ${prefix}passed [reply image/stiker]
êâº ${prefix}triggered [reply image/stiker]
êâº ${prefix}comrade [reply image/stiker]
êâº ${prefix}greyscale [reply image/stiker]
êâº ${prefix}threshold [reply image/stiker]
êâº ${prefix}brightness [reply image/stiker]
â°â ${prefix}invertgreyscale [reply image/stiker]


â­ââ ã Download ã 
êâº ${prefix}tiktok [link]
êâº ${prefix}tiktoknowm [link]
êâº ${prefix}tiktokwm [link]
êâº ${prefix}tiktokaudio [link]
êâº ${prefix}ytdl [link]
êâº ${prefix}play [query]
êâº ${prefix}ytmp3 [link]
êâº ${prefix}ytshortmp3 [link]
êâº ${prefix}ytmp4 [link]
êâº ${prefix}ytshorts [link]
êâº ${prefix}facebook [link]
êâº ${prefix}facebooksd [link]
êâº ${prefix}facebookhd [link]
êâº ${prefix}fbaudio [link]
êâº ${prefix}igstory [username]
êâº ${prefix}igdl [link]
êâº ${prefix}igphoto [link]
êâº ${prefix}igvideo [link]
êâº ${prefix}igreels [link]
êâº ${prefix}igtv [link]
êâº ${prefix}soundcloud [link]
êâº ${prefix}gitclone [link repo]
êâº ${prefix}gitrepo [username repo branch]
êâº ${prefix}mediafire [link]
â°â ${prefix}twitter link

â­ââ ã Primbon ã
êâº ${prefix}nomorhoki 887435047326
êâº ${prefix}artimimpi [query]
êâº ${prefix}artinama [query]
êâº ${prefix}ramaljodoh
êâº ${prefix}ramaljodohbali
êâº ${prefix}suamiistri
êâº ${prefix}ramalcinta
êâº ${prefix}cocoknama
êâº ${prefix}pasangan
êâº ${prefix}jadiannikah
êâº ${prefix}sifatusaha
êâº ${prefix}rezeki
êâº ${prefix}pekerjaan
êâº ${prefix}nasib
êâº ${prefix}penyakit
êâº ${prefix}tarot
êâº ${prefix}fengshui
êâº ${prefix}haribaik
êâº ${prefix}harisangar
êâº ${prefix}harisial
êâº ${prefix}nagahari
êâº ${prefix}arahrezeki
êâº ${prefix}peruntungan
êâº ${prefix}weton
êâº ${prefix}karakter
êâº ${prefix}keberuntungan
êâº ${prefix}memancing
êâº ${prefix}masasubur
êâº ${prefix}zodiak 
â°â ${prefix}shio [query]

â­ââ ã Random Anime ã
êâº ${prefix}loli
êâº ${prefix}neko
êâº ${prefix}waifu
êâº ${prefix}shinobu
êâº ${prefix}megumin
êâº ${prefix}bully
êâº ${prefix}cuddle
êâº ${prefix}cry
êâº ${prefix}hug
êâº ${prefix}awoo
êâº ${prefix}kiss
êâº ${prefix}lick
êâº ${prefix}pat
êâº ${prefix}smug
êâº ${prefix}bonk
êâº ${prefix}yeet
êâº ${prefix}blush
êâº ${prefix}smile
êâº ${prefix}wave
êâº ${prefix}highfive
êâº ${prefix}handhold
êâº ${prefix}nom
êâº ${prefix}bite
êâº ${prefix}glomp
êâº ${prefix}slap
êâº ${prefix}kill
êâº ${prefix}happy
êâº ${prefix}wink
êâº ${prefix}poke
êâº ${prefix}dance
â°â ${prefix}cringe

â­ââ ã Nsfw & Sfw ã
êâº ${prefix}ahegao
êâº ${prefix}ass
êâº ${prefix}bdsm
êâº ${prefix}blowjob
êâº ${prefix}cuckold
êâº ${prefix}cum
êâº ${prefix}ero
êâº ${prefix}femdom
êâº ${prefix}foot
êâº ${prefix}gangbang
êâº ${prefix}glasses
êâº ${prefix}jahy
êâº ${prefix}manga
êâº ${prefix}masturbation
êâº ${prefix}neko
êâº ${prefix}orgy
êâº ${prefix}panties
êâº ${prefix}pussy
êâº ${prefix}tentacles
êâº ${prefix}thighs
êâº ${prefix}yuri
êâº ${prefix}feet
êâº ${prefix}lewdkemo
êâº ${prefix}woof
êâº ${prefix}gasm
êâº ${prefix}solo
êâº ${prefix}8ball
êâº ${prefix}goose
êâº ${prefix}avatar
êâº ${prefix}hololewd
êâº ${prefix}gecg
êâº ${prefix}holo
êâº ${prefix}fox_girl
êâº ${prefix}tits
êâº ${prefix}eroyuri
êâº ${prefix}holoyero
êâº ${prefix}lizard
êâº ${prefix}keta
êâº ${prefix}eron
êâº ${prefix}erok
êâº ${prefix}kemonomimi
êâº ${prefix}cum_jpg
êâº ${prefix}nsfw_avatar
êâº ${prefix}erofeet
êâº ${prefix}meow
êâº ${prefix}wallpaper
êâº ${prefix}waifu
êâº ${prefix}trap
êâº ${prefix}lewd
êâº ${prefix}pussy_jpg
êâº ${prefix}futanari
êâº ${prefix}lewdk
êâº ${prefix}solog
êâº ${prefix}smug
êâº ${prefix}cum
êâº ${prefix}slap
êâº ${prefix}les
êâº ${prefix}erokemo
êâº ${prefix}bj
êâº ${prefix}pwankg
êâº ${prefix}pat
êâº ${prefix}poke
êâº ${prefix}feed
êâº ${prefix}nsfw_neko_gif
êâº ${prefix}pussy
êâº ${prefix}feetg
êâº ${prefix}baka
êâº ${prefix}hug
êâº ${prefix}kiss
êâº ${prefix}tickle
êâº ${prefix}spank
êâº ${prefix}kuni
êâº ${prefix}classic
êâº ${prefix}boobs
êâº ${prefix}anal
êâº ${prefix}ngif
êâº ${prefix}cuddle
â°â ${prefix}zettai

â­ââ ã Ephoto360 Menu ã
êâº ${prefix}youtubegold
êâº ${prefix}youtubesilver
êâº ${prefix}facebookgold
êâº ${prefix}facebooksilver
êâº ${prefix}instagramgold
êâº ${prefix}instagramsilver
êâº ${prefix}twittergold
êâº ${prefix}twittersilver
êâº ${prefix}retrotext
êâº ${prefix}halloweenbats
êâº ${prefix}texthalloween
êâº ${prefix}cardhalloween
êâº ${prefix}birthdaycake
êâº ${prefix}thundertext
êâº ${prefix}icetext
êâº ${prefix}milkcake
êâº ${prefix}snowontext
êâº ${prefix}metalstar
êâº ${prefix}dragonfire
êâº ${prefix}zombie3d
êâº ${prefix}merrycard
êâº ${prefix}generalexam 
êâº ${prefix}viettel
êâº ${prefix}embroider
êâº ${prefix}graffititext
êâº ${prefix}graffititext2
êâº ${prefix}graffititext3
êâº ${prefix}covergraffiti
êâº ${prefix}moderngold
êâº ${prefix}capercut
êâº ${prefix}lovecard
êâº ${prefix}heartflashlight
êâº ${prefix}heartcup
êâº ${prefix}sunglightshadow
êâº ${prefix}graffiti3d
êâº ${prefix}moderngoldsilver
êâº ${prefix}moderngold2
êâº ${prefix}moderngold3
êâº ${prefix}fabrictext
êâº ${prefix}masteryavatar
êâº ${prefix}messagecoffee
êâº ${prefix}announofwin
êâº ${prefix}writeblood
êâº ${prefix}horrorletter
êâº ${prefix}writehorror
êâº ${prefix}shirtclub
êâº ${prefix}angelwing
êâº ${prefix}christmasseason
êâº ${prefix}projectyasuo
êâº ${prefix}lovelycute
êâº ${prefix}womansday
êâº ${prefix}covergamepubg
êâº ${prefix}nameonheart
êâº ${prefix}funnyhalloween
êâº ${prefix}lightningpubg
êâº ${prefix}greetingcardvideo 
êâº ${prefix}christmascard 
êâº ${prefix}galaxybat
êâº ${prefix}writegalaxy
êâº ${prefix}starsnight
êâº ${prefix}noeltext
êâº ${prefix}textcakes
êâº ${prefix}pubgbirthday
êâº ${prefix}galaxywallpaper
êâº ${prefix}pubgglicthvideo 
êâº ${prefix}pubgmascotlogo
êâº ${prefix}realembroidery
êâº ${prefix}vintagetelevision
êâº ${prefix}funnyanimations
êâº ${prefix}glowingtext
êâº ${prefix}textonglass
êâº ${prefix}cartoonstyle
êâº ${prefix}multicolor
êâº ${prefix}watercolor2
êâº ${prefix}textsky
êâº ${prefix}summerbeach
êâº ${prefix}1917text
êâº ${prefix}puppycute
â°â ${prefix}rosebirthday


â­ââ ã Textpro Menu ã
êâº ${prefix}halloween2 text|text2
êâº ${prefix}horror text|text2
êâº ${prefix}game8bit text|text2
êâº ${prefix}layered text|text2
êâº ${prefix}glitch2 text|text2
êâº ${prefix}coolg text|text2
êâº ${prefix}coolwg text|text2
êâº ${prefix}realistic text|text2
êâº ${prefix}space3d text|text2
êâº ${prefix}gtiktok text|text2
êâº ${prefix}stone text|text2
êâº ${prefix}marvel text|text2
êâº ${prefix}marvel2 text|text2
êâº ${prefix}pornhub text|text2
êâº ${prefix}avengers text|text2
êâº ${prefix}metalr text|text2
êâº ${prefix}metalg text|text2
êâº ${prefix}metalg2 text|text2
êâº ${prefix}halloween2 text|text2
êâº ${prefix}lion text|text2
êâº ${prefix}wolf_bw text|text2
êâº ${prefix}wolf_g text|text2
êâº ${prefix}ninja text|text2
êâº ${prefix}3dsteel text|text2
êâº ${prefix}horror2 text|text2
êâº ${prefix}lava text|text2
êâº ${prefix}bagel text|text2
êâº ${prefix}blackpink text
êâº ${prefix}rainbow2 text
êâº ${prefix}water_pipe text
êâº ${prefix}halloween text
êâº ${prefix}sketch text
êâº ${prefix}sircuit text
êâº ${prefix}discovery text
êâº ${prefix}metallic2 text
êâº ${prefix}fiction text
êâº ${prefix}demon text
êâº ${prefix}transformer text
êâº ${prefix}berry text
êâº ${prefix}thunder text
êâº ${prefix}magma text
êâº ${prefix}3dstone text
êâº ${prefix}neon text
êâº ${prefix}glitch text
êâº ${prefix}harry_potter text
êâº ${prefix}embossed text
êâº ${prefix}broken text
êâº ${prefix}papercut text
êâº ${prefix}gradient text
êâº ${prefix}glossy text
êâº ${prefix}watercolor text
êâº ${prefix}multicolor text
êâº ${prefix}neon_devil text
êâº ${prefix}underwater text
êâº ${prefix}bear text
êâº ${prefix}wonderfulg text
êâº ${prefix}christmas text
êâº ${prefix}neon_light text
êâº ${prefix}snow text
êâº ${prefix}cloudsky text
êâº ${prefix}luxury2 text
êâº ${prefix}gradient2 text
êâº ${prefix}summer text
êâº ${prefix}writing text
êâº ${prefix}engraved text
êâº ${prefix}summery text
êâº ${prefix}3dglue text
êâº ${prefix}metaldark text
êâº ${prefix}neonlight text
êâº ${prefix}oscar text
êâº ${prefix}minion text
êâº ${prefix}holographic text
êâº ${prefix}purple text
êâº ${prefix}glossyb text
êâº ${prefix}deluxe2 text
êâº ${prefix}glossyc text
êâº ${prefix}fabric text
êâº ${prefix}neonc text
êâº ${prefix}newyear text
êâº ${prefix}newyear2 text
êâº ${prefix}metals text
êâº ${prefix}xmas text
êâº ${prefix}blood text
êâº ${prefix}darkg text
êâº ${prefix}joker text
êâº ${prefix}wicker text
êâº ${prefix}natural text
êâº ${prefix}firework text
êâº ${prefix}skeleton text
êâº ${prefix}balloon text
êâº ${prefix}balloon2 text
êâº ${prefix}balloon3 text
êâº ${prefix}balloon4 text
êâº ${prefix}balloon5 text
êâº ${prefix}balloon6 text
êâº ${prefix}balloon7 text
êâº ${prefix}steel text
êâº ${prefix}gloss text
êâº ${prefix}denim text
êâº ${prefix}decorate text
êâº ${prefix}decorate2 text
êâº ${prefix}peridot text
êâº ${prefix}rock text
êâº ${prefix}glass text
êâº ${prefix}glass2 text
êâº ${prefix}glass3 text
êâº ${prefix}glass4 text
êâº ${prefix}glass5 text
êâº ${prefix}glass6 text
êâº ${prefix}glass7 text
êâº ${prefix}glass8 text
êâº ${prefix}captain_as2 text
êâº ${prefix}robot text
êâº ${prefix}equalizer text
êâº ${prefix}toxic text
êâº ${prefix}sparkling text
êâº ${prefix}sparkling2 text
êâº ${prefix}sparkling3 text
êâº ${prefix}sparkling4 text
êâº ${prefix}sparkling5 text
êâº ${prefix}sparkling6 text
êâº ${prefix}sparkling7 text
êâº ${prefix}decorative text
êâº ${prefix}chocolate text
êâº ${prefix}strawberry text
êâº ${prefix}koifish text
êâº ${prefix}bread text
êâº ${prefix}matrix text
êâº ${prefix}blood2 text
êâº ${prefix}neonligth2 text
êâº ${prefix}thunder2 text
êâº ${prefix}3dbox text
êâº ${prefix}neon2 text
êâº ${prefix}roadw text
êâº ${prefix}bokeh text
êâº ${prefix}gneon text
êâº ${prefix}advanced text
êâº ${prefix}dropwater text
êâº ${prefix}wall text
êâº ${prefix}chrismast text
êâº ${prefix}honey text
êâº ${prefix}drug text
êâº ${prefix}marble text
êâº ${prefix}marble2 text
êâº ${prefix}ice text
êâº ${prefix}juice text
êâº ${prefix}rusty text
êâº ${prefix}abstra text
êâº ${prefix}biscuit text
êâº ${prefix}wood text
êâº ${prefix}scifi text
êâº ${prefix}metalr text
êâº ${prefix}purpleg text
êâº ${prefix}shiny text 
êâº ${prefix}jewelry text
êâº ${prefix}jewelry2 text
êâº ${prefix}jewelry3 text
êâº ${prefix}jewelry4 text
êâº ${prefix}jewelry5 text
êâº ${prefix}jewelry6 text
êâº ${prefix}jewelry7 text
êâº ${prefix}jewelry8 text
êâº ${prefix}metalh text
êâº ${prefix}golden text
êâº ${prefix}glitter text
êâº ${prefix}glitter2 text
êâº ${prefix}glitter3 text
êâº ${prefix}glitter4 text
êâº ${prefix}glitter5 text
êâº ${prefix}glitter6 text
êâº ${prefix}glitter7 text
êâº ${prefix}metale text
êâº ${prefix}carbon text
êâº ${prefix}candy text
êâº ${prefix}metalb text
êâº ${prefix}gemb text
êâº ${prefix}3dchrome text
êâº ${prefix}metalb2 text
êâº ${prefix}metalg text
â°â ${prefix}metalg text


â­ââ ã Others ã
êâº ${prefix}afk [reason]
êâº ${prefix}translate kode_bahasa text
êâº ${prefix}kalkulator [query]
êâº ${prefix}smeme [text]
êâº ${prefix}smeme2 [text|text]
êâº ${prefix}memegen [text|text]
â°â

â­ââ ã Game Menu ã
êâº ${prefix}kuismath
êâº ${prefix}tebak [option]
êâº ${prefix}tekateki
êâº ${prefix}susunkata
â°â ${prefix}caklontong


â­ââ ã Asupan Menu ã
êâº ${prefix}chika
êâº ${prefix}delvira
êâº ${prefix}ayu
êâº ${prefix}bunga
êâº ${prefix}aura
êâº ${prefix}nisa
êâº ${prefix}ziva
êâº ${prefix}yana
êâº ${prefix}viona
êâº ${prefix}syania
êâº ${prefix}riri
êâº ${prefix}syifa
êâº ${prefix}mama_gina
êâº ${prefix}alcakenya
êâº ${prefix}mangayutri
êâº ${prefix}rikagusriani
êâº ${prefix}asupan
êâº ${prefix}bocil
êâº ${prefix}geayubi
êâº ${prefix}santuy
êâº ${prefix}ukhty
â°â ${prefix}syifa

â­ââ ã Telegram Sticker ã
êâº ${prefix}awoawo
êâº ${prefix}benedict
êâº ${prefix}chat
êâº ${prefix}dbfly
êâº ${prefix}dino_kuning
êâº ${prefix}doge
êâº ${prefix}gojosatoru
êâº ${prefix}hope_boy
êâº ${prefix}jisoo
êâº ${prefix}kr_robot
êâº ${prefix}kucing
êâº ${prefix}lonte
êâº ${prefix}manusia_lidi
êâº ${prefix}menjamet
êâº ${prefix}meow
êâº ${prefix}nicholas
êâº ${prefix}patrick
êâº ${prefix}popoci
êâº ${prefix}sponsbob
êâº ${prefix}kawan_sponsbob
â°â ${prefix}tyni
,
â­ââ ã Random Cewe ã
êâº ${prefix}china 
êâº ${prefix}indonesia 
êâº ${prefix}malaysia 
êâº ${prefix}thailand 
êâº ${prefix}korea 
êâº ${prefix}japan 
êâº ${prefix}vietnam 
êâº ${prefix}jenni 
êâº ${prefix}jiso 
êâº ${prefix}lisa  
â°â ${prefix}rose

â­ââ ã TqTo ã 
êâº My God
êâº My Parents
êâº Fatih A.
êâº Ferdi
êâº DikaArdnt
êâº Mhankbarbar
êâº Nurutomo
êâº Rashid
êâº ZeeoneOfc
êâº AkiraYT
êâº Penyedia Module
â°â And All Support
    `
}

exports.rules = (prefix) => {
    return `
*ââ ã Neo Always Trustâï¸ ã ââ*

ðRULESð

â¼ï¸ Member Baru Wajib Kasih Slot Admin
â¼ï¸ Bebas Bercanda Asal Sopan
â No Rek jangan kirim ke grub ( auto kick )
â Share Link Grup Lain [ auto kick ]
â Dilarang Minta Modal Lebih Dari 1000
â¼ï¸ Masukin Teman Ke Grub, PM Admin
â¼ï¸ Member Non Aktif, Admin Berhak Kick
ð Jika Ada Yg Belum Back Lebih Dari 1 Jam, Segera Lapor Admin

ð¹We always trY the best f0r youð¹

-â¼ï¸Noteâ¼ï¸ : 

Â°Â°KALAU OPEN SLOT USAHAKAN TIDAK DALAM KESIBUKAN LAINÂ°Â°


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!
`
}
exports.welcome = () =>{
	return`ððð£ððð£ ð¡ðªð¥ð ðð£ð©ð§ð¤ ð ðð  ð½ððð§ ð ðð£ðð¡ ð¤
	
âº ð ð­ðºððº :
âº ð ð´ððð :
âº â§ï¸ ð¦ð¾ðð½ð¾ð :
âº ðï¸ ð ðððð :

â°â ð¯ðºðððð ðððð¾ð ðððð ððº ððºk ~`
}
exports.leave = () =>{
	return`Êá´Ê á´á´á´ á´á´ÊÉ¢Éª á´á´á´ >.<
á´á´Êá´á´ Êá´ÊÉªá´ É´Éªá´Éªá´ á´á´É´á´á´ Êá´Ê...
ê±á´Êá´á´á´á´ á´á´Êá´É´..`
}
exports.source = () =>{
return`*------ã SOURCE CODE ã ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*-------ã DONATE ã -------*

Hai kak âºï¸ 
Beneran Mau Donasi Apa nonton Doang

Berapapun donasi kalian akan sangat berarti ð

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`â­ââ ã Bot Info ã 
êâº ${prefix}owner
êâº ${prefix}rules
êâº ${prefix}sc
êâº ${prefix}ping
êâº ${prefix}runtime
êâº ${prefix}botstatus
â°â ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`â­ââ ã Owner ã 
êâº < evaluate
êâº > evaluate
êâº $ exec
êâº => exec
êâº ${prefix}setmenu [query]
êâº ${prefix}setmenu templateLocation
êâº ${prefix}setmenu templateTenor
êâº ${prefix}setmenu katalog
êâº ${prefix}setmenu katalog2
êâº ${prefix}setmenu list
êâº ${prefix}setwm packname|author
êâº ${prefix}sendsesi
êâº ${prefix}listpc
êâº ${prefix}listgc
êâº ${prefix}broadcast [text]
êâº ${prefix}bc [text]
êâº ${prefix}bcgc [text]
êâº ${prefix}nsfw [on/off]
êâº ${prefix}autorespond [on/off]
êâº ${prefix}antiviewonce [on/off]
êâº ${prefix}join [link]
êâº ${prefix}self
êâº ${prefix}public [only bot]
êâº ${prefix}del [pesan bot]
â°â ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`â­ââ ã Database ã 
êâº ${prefix}setcmd [reply stiker]
êâº ${prefix}delcmd [reply stiker]
êâº ${prefix}listcmd
êâº ${prefix}absen
êâº ${prefix}cekabsen
êâº ${prefix}deleteabsen
êâº ${prefix}absenstart
êâº ${prefix}addmsg [nama file]
êâº ${prefix}getmsg [nama file]
êâº ${prefix}listmsg
â°â ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`â­ââ ã Group ã 
êâº ${prefix}listonline
êâº ${prefix}sider
êâº ${prefix}wm packname|author
êâº ${prefix}infochat
êâº ${prefix}setdesk [text]
êâº ${prefix}setppgrup [reply image]
êâº ${prefix}antilink [on/off]
êâº ${prefix}revoke
êâº ${prefix}leave
êâº ${prefix}add [62***]
êâº ${prefix}kick @tag
êâº ${prefix}leave
êâº ${prefix}linkgc
êâº ${prefix}take packname|author
êâº ${prefix}group [open/close]
êâº ${prefix}tagall [text]
â°â ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`â­ââ ã Anime ã 
êâº ${prefix}quotesanime
êâº ${prefix}anime [query]
êâº ${prefix}manga [query]
â°â ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`â­ââ ã Tag ã 
êâº ${prefix}stickertag
êâº ${prefix}videotag [query]
êâº ${prefix}vntag [query]
â°â ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`â­ââ ã Stalking ã 
êâº ${prefix}igstalk [username]
êâº ${prefix}ghstalk [username]
â°â ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`â­ââ ã Search ã 
êâº ${prefix}ytsearch [query]
êâº ${prefix}wallpaper [query]
êâº ${prefix}wikimedia [query]
êâº ${prefix}hentai
êâº ${prefix}wattpad [query]
êâº ${prefix}webtoons [query]
êâº ${prefix}drakor [query]
â°â ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`â­ââ ã Converter ã 
êâº ${prefix}toaudio [video]
êâº ${prefix}tomp3 [video]
êâº ${prefix}tovn [video]
êâº ${prefix}stiker [reply image]
êâº ${prefix}tourl [image/video]
êâº ${prefix}togif [sticker]
êâº ${prefix}tomp4 [sticker]
â°â${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`â­ââ ã Image Effect ã 
êâº ${prefix}wanted [reply image/stiker]
êâº ${prefix}utatoo [reply image/stiker]
êâº ${prefix}unsharpen [reply image/stiker]
êâº ${prefix}thanos [reply image/stiker]
êâº ${prefix}sniper [reply image/stiker]
êâº ${prefix}sharpen [reply image/stiker]
êâº ${prefix}sepia [reply image/stiker]
êâº ${prefix}scary [reply image/stiker]
êâº ${prefix}rip [reply image/stiker]
êâº ${prefix}redple [reply image/stiker]
êâº ${prefix}rejected [reply image/stiker]
êâº ${prefix}posterize [reply image/stiker]
êâº ${prefix}ps4 [reply image/stiker]
êâº ${prefix}pixelize [reply image/stiker]
êâº ${prefix}missionpassed [reply image/stiker]
êâº ${prefix}moustache [reply image/stiker]
êâº ${prefix}lookwhatkarenhave [reply image/stiker]
êâº ${prefix}jail [reply image/stiker]
êâº ${prefix}invert [reply image/stiker]
êâº ${prefix}instagram [reply image/stiker]
êâº ${prefix}greyscale [reply image/stiker]
êâº ${prefix}glitch [reply image/stiker]
êâº ${prefix}gay [reply image/stiker]
êâº ${prefix}frame [reply image/stiker]
êâº ${prefix}fire [reply image/stiker]
êâº ${prefix}distort [reply image/stiker]
êâº ${prefix}dictator [reply image/stiker]
êâº ${prefix}deepfry [reply image/stiker]
êâº ${prefix}ddungeon [reply image/stiker]
êâº ${prefix}circle [reply image/stiker]
êâº ${prefix}challenger [reply image/stiker]
êâº ${prefix}burn [reply image/stiker]
êâº ${prefix}brazzers [reply image/stiker]
â°â ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`â­ââ ã Sticker Effect ã 
êâº ${prefix}jail [reply image/stiker]
êâº ${prefix}red [reply image/stiker]
êâº ${prefix}gay [reply image/stiker]
êâº ${prefix}bloo [reply image/stiker]
êâº ${prefix}blue [reply image/stiker]
êâº ${prefix}sepia [reply image/stiker]
êâº ${prefix}green [reply image/stiker]
êâº ${prefix}glass [reply image/stiker]
êâº ${prefix}invert [reply image/stiker]
êâº ${prefix}blurple [reply image/stiker]
êâº ${prefix}blurple2 [reply image/stiker]
êâº ${prefix}wasted [reply image/stiker]
êâº ${prefix}passed [reply image/stiker]
êâº ${prefix}triggered [reply image/stiker]
êâº ${prefix}comrade [reply image/stiker]
êâº ${prefix}greyscale [reply image/stiker]
êâº ${prefix}threshold [reply image/stiker]
êâº ${prefix}brightness [reply image/stiker]
â°â ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`â­ââ ã Download ã 
êâº ${prefix}tiktok [link]
êâº ${prefix}tiktoknowm [link]
êâº ${prefix}tiktokwm [link]
êâº ${prefix}tiktokaudio [link]
êâº ${prefix}ytdl [link]
êâº ${prefix}play [query]
êâº ${prefix}ytmp3 [link]
êâº ${prefix}ytshortmp3 [link]
êâº ${prefix}ytmp4 [link]
êâº ${prefix}ytshorts [link]
êâº ${prefix}facebook [link]
êâº ${prefix}facebooksd [link]
êâº ${prefix}facebookhd [link]
êâº ${prefix}fbaudio [link]
êâº ${prefix}igstory [username]
êâº ${prefix}igdl [link]
êâº ${prefix}igphoto [link]
êâº ${prefix}igvideo [link]
êâº ${prefix}igreels [link]
êâº ${prefix}igtv [link]
êâº ${prefix}soundcloud [link]
êâº ${prefix}gitclone [link repo]
êâº ${prefix}gitrepo [username repo branch]
êâº ${prefix}mediafire [link]
â°â ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`â­ââ ã Random Anime ã
êâº ${prefix}loli
êâº ${prefix}neko
êâº ${prefix}waifu
êâº ${prefix}shinobu
êâº ${prefix}megumin
êâº ${prefix}bully
êâº ${prefix}cuddle
êâº ${prefix}cry
êâº ${prefix}hug
êâº ${prefix}awoo
êâº ${prefix}kiss
êâº ${prefix}lick
êâº ${prefix}pat
êâº ${prefix}smug
êâº ${prefix}bonk
êâº ${prefix}yeet
êâº ${prefix}blush
êâº ${prefix}smile
êâº ${prefix}wave
êâº ${prefix}highfive
êâº ${prefix}handhold
êâº ${prefix}nom
êâº ${prefix}bite
êâº ${prefix}glomp
êâº ${prefix}slap
êâº ${prefix}kill
êâº ${prefix}happy
êâº ${prefix}wink
êâº ${prefix}poke
êâº ${prefix}dance
â°â ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`â­ââ ã Nsfw & Sfw ã
êâº ${prefix}ahegao
êâº ${prefix}ass
êâº ${prefix}bdsm
êâº ${prefix}blowjob
êâº ${prefix}cuckold
êâº ${prefix}cum
êâº ${prefix}ero
êâº ${prefix}femdom
êâº ${prefix}foot
êâº ${prefix}gangbang
êâº ${prefix}glasses
êâº ${prefix}jahy
êâº ${prefix}manga
êâº ${prefix}masturbation
êâº ${prefix}neko
êâº ${prefix}orgy
êâº ${prefix}panties
êâº ${prefix}pussy
êâº ${prefix}tentacles
êâº ${prefix}thighs
êâº ${prefix}yuri
êâº ${prefix}feet
êâº ${prefix}lewdkemo
êâº ${prefix}woof
êâº ${prefix}gasm
êâº ${prefix}solo
êâº ${prefix}8ball
êâº ${prefix}goose
êâº ${prefix}avatar
êâº ${prefix}hololewd
êâº ${prefix}gecg
êâº ${prefix}holo
êâº ${prefix}fox_girl
êâº ${prefix}tits
êâº ${prefix}eroyuri
êâº ${prefix}holoyero
êâº ${prefix}lizard
êâº ${prefix}keta
êâº ${prefix}eron
êâº ${prefix}erok
êâº ${prefix}kemonomimi
êâº ${prefix}cum_jpg
êâº ${prefix}nsfw_avatar
êâº ${prefix}erofeet
êâº ${prefix}meow
êâº ${prefix}wallpaper
êâº ${prefix}waifu
êâº ${prefix}trap
êâº ${prefix}lewd
êâº ${prefix}pussy_jpg
êâº ${prefix}futanari
êâº ${prefix}lewdk
êâº ${prefix}solog
êâº ${prefix}smug
êâº ${prefix}cum
êâº ${prefix}slap
êâº ${prefix}les
êâº ${prefix}erokemo
êâº ${prefix}bj
êâº ${prefix}pwankg
êâº ${prefix}pat
êâº ${prefix}poke
êâº ${prefix}feed
êâº ${prefix}nsfw_neko_gif
êâº ${prefix}pussy
êâº ${prefix}feetg
êâº ${prefix}baka
êâº ${prefix}hug
êâº ${prefix}kiss
êâº ${prefix}tickle
êâº ${prefix}spank
êâº ${prefix}kuni
êâº ${prefix}classic
êâº ${prefix}boobs
êâº ${prefix}anal
êâº ${prefix}ngif
êâº ${prefix}cuddle
â°â ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`â­ââ ã Textpro Menu ã
êâº ${prefix}halloween2 text|text2
êâº ${prefix}horror text|text2
êâº ${prefix}game8bit text|text2
êâº ${prefix}layered text|text2
êâº ${prefix}glitch2 text|text2
êâº ${prefix}coolg text|text2
êâº ${prefix}coolwg text|text2
êâº ${prefix}realistic text|text2
êâº ${prefix}space3d text|text2
êâº ${prefix}gtiktok text|text2
êâº ${prefix}stone text|text2
êâº ${prefix}marvel text|text2
êâº ${prefix}marvel2 text|text2
êâº ${prefix}pornhub text|text2
êâº ${prefix}avengers text|text2
êâº ${prefix}metalr text|text2
êâº ${prefix}metalg text|text2
êâº ${prefix}metalg2 text|text2
êâº ${prefix}halloween2 text|text2
êâº ${prefix}lion text|text2
êâº ${prefix}wolf_bw text|text2
êâº ${prefix}wolf_g text|text2
êâº ${prefix}ninja text|text2
êâº ${prefix}3dsteel text|text2
êâº ${prefix}horror2 text|text2
êâº ${prefix}lava text|text2
êâº ${prefix}bagel text|text2
êâº ${prefix}blackpink text
êâº ${prefix}rainbow2 text
êâº ${prefix}water_pipe text
êâº ${prefix}halloween text
êâº ${prefix}sketch text
êâº ${prefix}sircuit text
êâº ${prefix}discovery text
êâº ${prefix}metallic2 text
êâº ${prefix}fiction text
êâº ${prefix}demon text
êâº ${prefix}transformer text
êâº ${prefix}berry text
êâº ${prefix}thunder text
êâº ${prefix}magma text
êâº ${prefix}3dstone text
êâº ${prefix}neon text
êâº ${prefix}glitch text
êâº ${prefix}harry_potter text
êâº ${prefix}embossed text
êâº ${prefix}broken text
êâº ${prefix}papercut text
êâº ${prefix}gradient text
êâº ${prefix}glossy text
êâº ${prefix}watercolor text
êâº ${prefix}multicolor text
êâº ${prefix}neon_devil text
êâº ${prefix}underwater text
êâº ${prefix}bear text
êâº ${prefix}wonderfulg text
êâº ${prefix}christmas text
êâº ${prefix}neon_light text
êâº ${prefix}snow text
êâº ${prefix}cloudsky text
êâº ${prefix}luxury2 text
êâº ${prefix}gradient2 text
êâº ${prefix}summer text
êâº ${prefix}writing text
êâº ${prefix}engraved text
êâº ${prefix}summery text
êâº ${prefix}3dglue text
êâº ${prefix}metaldark text
êâº ${prefix}neonlight text
êâº ${prefix}oscar text
êâº ${prefix}minion text
êâº ${prefix}holographic text
êâº ${prefix}purple text
êâº ${prefix}glossyb text
êâº ${prefix}deluxe2 text
êâº ${prefix}glossyc text
êâº ${prefix}fabric text
êâº ${prefix}neonc text
êâº ${prefix}newyear text
êâº ${prefix}newyear2 text
êâº ${prefix}metals text
êâº ${prefix}xmas text
êâº ${prefix}blood text
êâº ${prefix}darkg text
êâº ${prefix}joker text
êâº ${prefix}wicker text
êâº ${prefix}natural text
êâº ${prefix}firework text
êâº ${prefix}skeleton text
êâº ${prefix}balloon text
êâº ${prefix}balloon2 text
êâº ${prefix}balloon3 text
êâº ${prefix}balloon4 text
êâº ${prefix}balloon5 text
êâº ${prefix}balloon6 text
êâº ${prefix}balloon7 text
êâº ${prefix}steel text
êâº ${prefix}gloss text
êâº ${prefix}denim text
êâº ${prefix}decorate text
êâº ${prefix}decorate2 text
êâº ${prefix}peridot text
êâº ${prefix}rock text
êâº ${prefix}glass text
êâº ${prefix}glass2 text
êâº ${prefix}glass3 text
êâº ${prefix}glass4 text
êâº ${prefix}glass5 text
êâº ${prefix}glass6 text
êâº ${prefix}glass7 text
êâº ${prefix}glass8 text
êâº ${prefix}captain_as2 text
êâº ${prefix}robot text
êâº ${prefix}equalizer text
êâº ${prefix}toxic text
êâº ${prefix}sparkling text
êâº ${prefix}sparkling2 text
êâº ${prefix}sparkling3 text
êâº ${prefix}sparkling4 text
êâº ${prefix}sparkling5 text
êâº ${prefix}sparkling6 text
êâº ${prefix}sparkling7 text
êâº ${prefix}decorative text
êâº ${prefix}chocolate text
êâº ${prefix}strawberry text
êâº ${prefix}koifish text
êâº ${prefix}bread text
êâº ${prefix}matrix text
êâº ${prefix}blood2 text
êâº ${prefix}neonligth2 text
êâº ${prefix}thunder2 text
êâº ${prefix}3dbox text
êâº ${prefix}neon2 text
êâº ${prefix}roadw text
êâº ${prefix}bokeh text
êâº ${prefix}gneon text
êâº ${prefix}advanced text
êâº ${prefix}dropwater text
êâº ${prefix}wall text
êâº ${prefix}chrismast text
êâº ${prefix}honey text
êâº ${prefix}drug text
êâº ${prefix}marble text
êâº ${prefix}marble2 text
êâº ${prefix}ice text
êâº ${prefix}juice text
êâº ${prefix}rusty text
êâº ${prefix}abstra text
êâº ${prefix}biscuit text
êâº ${prefix}wood text
êâº ${prefix}scifi text
êâº ${prefix}metalr text
êâº ${prefix}purpleg text
êâº ${prefix}shiny text 
êâº ${prefix}jewelry text
êâº ${prefix}jewelry2 text
êâº ${prefix}jewelry3 text
êâº ${prefix}jewelry4 text
êâº ${prefix}jewelry5 text
êâº ${prefix}jewelry6 text
êâº ${prefix}jewelry7 text
êâº ${prefix}jewelry8 text
êâº ${prefix}metalh text
êâº ${prefix}golden text
êâº ${prefix}glitter text
êâº ${prefix}glitter2 text
êâº ${prefix}glitter3 text
êâº ${prefix}glitter4 text
êâº ${prefix}glitter5 text
êâº ${prefix}glitter6 text
êâº ${prefix}glitter7 text
êâº ${prefix}metale text
êâº ${prefix}carbon text
êâº ${prefix}candy text
êâº ${prefix}metalb text
êâº ${prefix}gemb text
êâº ${prefix}3dchrome text
êâº ${prefix}metalb2 text
êâº ${prefix}metalg text
â°â ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`â­ââ ã Others ã
êâº ${prefix}ttp [text]
êâº ${prefix}attp [text]
êâº ${prefix}afk [reason]
êâº ${prefix}translate kode_bahasa text
êâº ${prefix}kalkulator [query]
êâº ${prefix}smeme [text]
êâº ${prefix}smeme2 [text|text]
â°â ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`â­ââ ã Game Menu ã
êâº ${prefix}kuismath
êâº ${prefix}tebak [option]
êâº ${prefix}tekateki
êâº ${prefix}susunkata
â°â ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`â­ââ ã Asupan Menu ã
êâº ${prefix}chika
êâº ${prefix}delvira
êâº ${prefix}ayu
êâº ${prefix}bunga
êâº ${prefix}aura
êâº ${prefix}nisa
êâº ${prefix}ziva
êâº ${prefix}yana
êâº ${prefix}viona
êâº ${prefix}syania
êâº ${prefix}riri
êâº ${prefix}syifa
êâº ${prefix}mama_gina
êâº ${prefix}alcakenya
êâº ${prefix}mangayutri
êâº ${prefix}rikagusriani
êâº ${prefix}asupan
êâº ${prefix}bocil
êâº ${prefix}geayubi
êâº ${prefix}santuy
êâº ${prefix}ukhty
â°â ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`â­ââ ã Random Cewe ã
êâº ${prefix}china 
êâº ${prefix}indonesia 
êâº ${prefix}malaysia 
êâº ${prefix}thailand 
êâº ${prefix}korea 
êâº ${prefix}japan 
êâº ${prefix}vietnam 
êâº ${prefix}jenni 
êâº ${prefix}jiso 
êâº ${prefix}lisa  
â°â ${prefix}rose
`
}

exports.tqto = () =>{
	return`â­ââ ã TqTo ã 
êâº My God
êâº My Parents
êâº Fatih A.
êâº Ferdi
êâº DikaArdnt
êâº Mhankbarbar
êâº Nurutomo
êâº Rashid
êâº ZeeoneOfc
êâº AkiraYT
êâº Penyedia Module
â°â And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`â­ââ ã Primbon ã
êâº ${prefix}nomorhoki 887435047326
êâº ${prefix}artimimpi [query]
êâº ${prefix}artinama [query]
êâº ${prefix}ramaljodoh
êâº ${prefix}ramaljodohbali
êâº ${prefix}suamiistri
êâº ${prefix}ramalcinta
êâº ${prefix}cocoknama
êâº ${prefix}pasangan
êâº ${prefix}jadiannikah
êâº ${prefix}sifatusaha
êâº ${prefix}rezeki
êâº ${prefix}pekerjaan
êâº ${prefix}nasib
êâº ${prefix}penyakit
êâº ${prefix}tarot
êâº ${prefix}fengshui
êâº ${prefix}haribaik
êâº ${prefix}harisangar
êâº ${prefix}harisial
êâº ${prefix}nagahari
êâº ${prefix}arahrezeki
êâº ${prefix}peruntungan
êâº ${prefix}weton
êâº ${prefix}karakter
êâº ${prefix}keberuntungan
êâº ${prefix}memancing
êâº ${prefix}masasubur
êâº ${prefix}zodiak 
â°â ${prefix}shio [query]
`
}

exports.ephotomenu = (prefix) =>{
	return`â­ââ ã Ephoto360 Menu ã
êâº ${prefix}youtubegold
êâº ${prefix}youtubesilver
êâº ${prefix}facebookgold
êâº ${prefix}facebooksilver
êâº ${prefix}instagramgold
êâº ${prefix}instagramsilver
êâº ${prefix}twittergold
êâº ${prefix}twittersilver
êâº ${prefix}retrotext
êâº ${prefix}halloweenbats
êâº ${prefix}texthalloween
êâº ${prefix}cardhalloween
êâº ${prefix}birthdaycake
êâº ${prefix}thundertext
êâº ${prefix}icetext
êâº ${prefix}milkcake
êâº ${prefix}snowontext
êâº ${prefix}metalstar
êâº ${prefix}dragonfire
êâº ${prefix}zombie3d
êâº ${prefix}merrycard
êâº ${prefix}generalexam 
êâº ${prefix}viettel
êâº ${prefix}embroider
êâº ${prefix}graffititext
êâº ${prefix}graffititext2
êâº ${prefix}graffititext3
êâº ${prefix}covergraffiti
êâº ${prefix}moderngold
êâº ${prefix}capercut
êâº ${prefix}lovecard
êâº ${prefix}heartflashlight
êâº ${prefix}heartcup
êâº ${prefix}sunglightshadow
êâº ${prefix}graffiti3d
êâº ${prefix}moderngoldsilver
êâº ${prefix}moderngold2
êâº ${prefix}moderngold3
êâº ${prefix}fabrictext
êâº ${prefix}masteryavatar
êâº ${prefix}messagecoffee
êâº ${prefix}announofwin
êâº ${prefix}writeblood
êâº ${prefix}horrorletter
êâº ${prefix}writehorror
êâº ${prefix}shirtclub
êâº ${prefix}angelwing
êâº ${prefix}christmasseason
êâº ${prefix}projectyasuo
êâº ${prefix}lovelycute
êâº ${prefix}womansday
êâº ${prefix}covergamepubg
êâº ${prefix}nameonheart
êâº ${prefix}funnyhalloween
êâº ${prefix}lightningpubg
êâº ${prefix}greetingcardvideo 
êâº ${prefix}christmascard 
êâº ${prefix}galaxybat
êâº ${prefix}writegalaxy
êâº ${prefix}starsnight
êâº ${prefix}noeltext
êâº ${prefix}textcakes
êâº ${prefix}pubgbirthday
êâº ${prefix}galaxywallpaper
êâº ${prefix}pubgglicthvideo 
êâº ${prefix}pubgmascotlogo
êâº ${prefix}realembroidery
êâº ${prefix}vintagetelevision
êâº ${prefix}funnyanimations
êâº ${prefix}glowingtext
êâº ${prefix}textonglass
êâº ${prefix}cartoonstyle
êâº ${prefix}multicolor
êâº ${prefix}watercolor2
êâº ${prefix}textsky
êâº ${prefix}summerbeach
êâº ${prefix}1917text
êâº ${prefix}puppycute
â°â ${prefix}rosebirthday`
}

exports.stcmenu = (prefix) =>{
	return`â­ââ ã Telegram Sticker ã
êâº ${prefix}awoawo
êâº ${prefix}benedict
êâº ${prefix}chat
êâº ${prefix}dbfly
êâº ${prefix}dino_kuning
êâº ${prefix}doge
êâº ${prefix}gojosatoru
êâº ${prefix}hope_boy
êâº ${prefix}jisoo
êâº ${prefix}kr_robot
êâº ${prefix}kucing
êâº ${prefix}lonte
êâº ${prefix}manusia_lidi
êâº ${prefix}menjamet
êâº ${prefix}meow
êâº ${prefix}nicholas
êâº ${prefix}patrick
êâº ${prefix}popoci
êâº ${prefix}sponsbob
êâº ${prefix}kawan_sponsbob
â°â ${prefix}tyni
`}
