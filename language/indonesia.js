exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `Tunggu ya Beib 🥺,, Gak Lama Kok~`
}
exports.ok = () => {
    return `Syudah nih beibbb 😘😘😘~`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Hanya Untuk Boss Gua Ini`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Ngaca govloxx, Kau bukan admin!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
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
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, senang berkenalan Dengan anda.. 🙏      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu AZUKA-BOTZ :*

╭─❒ 「 Bot Info 」 
ꗄ➺ ${prefix}owner
ꗄ➺ ${prefix}rules
ꗄ➺ ${prefix}ping
ꗄ➺ ${prefix}runtime
ꗄ➺ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
ꗄ➺ < evaluate
ꗄ➺ > evaluate
ꗄ➺ $ exec
ꗄ➺ => exec
ꗄ➺ ${prefix}setmenu [query]
ꗄ➺ ${prefix}setmenu templateLocation
ꗄ➺ ${prefix}setmenu templateTenor
ꗄ➺ ${prefix}setmenu katalog
ꗄ➺ ${prefix}setmenu katalog2
ꗄ➺ ${prefix}setmenu list
ꗄ➺ ${prefix}setwm packname|author
ꗄ➺ ${prefix}sendsesi
ꗄ➺ ${prefix}listpc
ꗄ➺ ${prefix}listgc
ꗄ➺ ${prefix}broadcast [text]
ꗄ➺ ${prefix}bc [text]
ꗄ➺ ${prefix}bcgc [text]
ꗄ➺ ${prefix}nsfw [on/off]
ꗄ➺ ${prefix}autorespond [on/off]
ꗄ➺ ${prefix}antiviewonce [on/off]
ꗄ➺ ${prefix}join [link]
ꗄ➺ ${prefix}self
ꗄ➺ ${prefix}public [only bot]
ꗄ➺ ${prefix}del [reply pesan bot]
╰❒ ${prefix}setppbot [reply image]


╭─❒ 「 Database 」 
ꗄ➺ ${prefix}setcmd [reply stiker]
ꗄ➺ ${prefix}delcmd [reply stiker]
ꗄ➺ ${prefix}listcmd
ꗄ➺ ${prefix}absen
ꗄ➺ ${prefix}cekabsen
ꗄ➺ ${prefix}deleteabsen
ꗄ➺ ${prefix}absenstart
ꗄ➺ ${prefix}addmsg [nama file]
ꗄ➺ ${prefix}getmsg [nama file]
ꗄ➺ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]


╭─❒ 「 Group 」 
ꗄ➺ ${prefix}listonline
ꗄ➺ ${prefix}sider
ꗄ➺ ${prefix}wm packname|author
ꗄ➺ ${prefix}infochat
ꗄ➺ ${prefix}setdesk [text]
ꗄ➺ ${prefix}setppgrup [reply image]
ꗄ➺ ${prefix}antilink [on/off]
ꗄ➺ ${prefix}revoke
ꗄ➺ ${prefix}leave
ꗄ➺ ${prefix}add [62***]
ꗄ➺ ${prefix}kick @tag
ꗄ➺ ${prefix}leave
ꗄ➺ ${prefix}linkgc
ꗄ➺ ${prefix}take packname|author
ꗄ➺ ${prefix}group [open/close]
ꗄ➺ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
ꗄ➺ ${prefix}quotesanime
ꗄ➺ ${prefix}anime [query]
ꗄ➺ ${prefix}manga [query]
╰❒ ${prefix}character [query]

╭─❒ 「 Tag 」 
ꗄ➺ ${prefix}stickertag
ꗄ➺ ${prefix}videotag [query]
ꗄ➺ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]

╭─❒ 「 Stalking 」 
ꗄ➺ ${prefix}igstalk [username]
ꗄ➺ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]


╭─❒ 「 Search 」 
ꗄ➺ ${prefix}ytsearch [query]
ꗄ➺ ${prefix}wallpaper [query]
ꗄ➺ ${prefix}wikimedia [query]
ꗄ➺ ${prefix}hentai
ꗄ➺ ${prefix}wattpad [query]
ꗄ➺ ${prefix}webtoons [query]
ꗄ➺ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」
ꗄ➺ ${prefix}toaudio [video]
ꗄ➺ ${prefix}tomp3 [video]
ꗄ➺ ${prefix}tovn [video]
ꗄ➺ ${prefix}stiker [reply image]
ꗄ➺ ${prefix}tourl [image/video/stiker]
ꗄ➺ ${prefix}togif [sticker]
ꗄ➺ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
ꗄ➺ ${prefix}wanted [reply image/stiker]
ꗄ➺ ${prefix}utatoo [reply image/stiker]
ꗄ➺ ${prefix}unsharpen [reply image/stiker]
ꗄ➺ ${prefix}thanos [reply image/stiker]
ꗄ➺ ${prefix}sniper [reply image/stiker]
ꗄ➺ ${prefix}sharpen [reply image/stiker]
ꗄ➺ ${prefix}sepia [reply image/stiker]
ꗄ➺ ${prefix}scary [reply image/stiker]
ꗄ➺ ${prefix}rip [reply image/stiker]
ꗄ➺ ${prefix}redple [reply image/stiker]
ꗄ➺ ${prefix}rejected [reply image/stiker]
ꗄ➺ ${prefix}posterize [reply image/stiker]
ꗄ➺ ${prefix}ps4 [reply image/stiker]
ꗄ➺ ${prefix}pixelize [reply image/stiker]
ꗄ➺ ${prefix}missionpassed [reply image/stiker]
ꗄ➺ ${prefix}moustache [reply image/stiker]
ꗄ➺ ${prefix}lookwhatkarenhave [reply image/stiker]
ꗄ➺ ${prefix}jail [reply image/stiker]
ꗄ➺ ${prefix}invert [reply image/stiker]
ꗄ➺ ${prefix}instagram [reply image/stiker]
ꗄ➺ ${prefix}greyscale [reply image/stiker]
ꗄ➺ ${prefix}glitch [reply image/stiker]
ꗄ➺ ${prefix}gay [reply image/stiker]
ꗄ➺ ${prefix}frame [reply image/stiker]
ꗄ➺ ${prefix}fire [reply image/stiker]
ꗄ➺ ${prefix}distort [reply image/stiker]
ꗄ➺ ${prefix}dictator [reply image/stiker]
ꗄ➺ ${prefix}deepfry [reply image/stiker]
ꗄ➺ ${prefix}ddungeon [reply image/stiker]
ꗄ➺ ${prefix}circle [reply image/stiker]
ꗄ➺ ${prefix}challenger [reply image/stiker]
ꗄ➺ ${prefix}burn [reply image/stiker]
ꗄ➺ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]


╭─❒ 「 Sticker Effect 」 
ꗄ➺ ${prefix}jail [reply image/stiker]
ꗄ➺ ${prefix}red [reply image/stiker]
ꗄ➺ ${prefix}gay [reply image/stiker]
ꗄ➺ ${prefix}bloo [reply image/stiker]
ꗄ➺ ${prefix}blue [reply image/stiker]
ꗄ➺ ${prefix}sepia [reply image/stiker]
ꗄ➺ ${prefix}green [reply image/stiker]
ꗄ➺ ${prefix}glass [reply image/stiker]
ꗄ➺ ${prefix}invert [reply image/stiker]
ꗄ➺ ${prefix}blurple [reply image/stiker]
ꗄ➺ ${prefix}blurple2 [reply image/stiker]
ꗄ➺ ${prefix}wasted [reply image/stiker]
ꗄ➺ ${prefix}passed [reply image/stiker]
ꗄ➺ ${prefix}triggered [reply image/stiker]
ꗄ➺ ${prefix}comrade [reply image/stiker]
ꗄ➺ ${prefix}greyscale [reply image/stiker]
ꗄ➺ ${prefix}threshold [reply image/stiker]
ꗄ➺ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]


╭─❒ 「 Download 」 
ꗄ➺ ${prefix}tiktok [link]
ꗄ➺ ${prefix}tiktoknowm [link]
ꗄ➺ ${prefix}tiktokwm [link]
ꗄ➺ ${prefix}tiktokaudio [link]
ꗄ➺ ${prefix}ytdl [link]
ꗄ➺ ${prefix}play [query]
ꗄ➺ ${prefix}ytmp3 [link]
ꗄ➺ ${prefix}ytshortmp3 [link]
ꗄ➺ ${prefix}ytmp4 [link]
ꗄ➺ ${prefix}ytshorts [link]
ꗄ➺ ${prefix}facebook [link]
ꗄ➺ ${prefix}facebooksd [link]
ꗄ➺ ${prefix}facebookhd [link]
ꗄ➺ ${prefix}fbaudio [link]
ꗄ➺ ${prefix}igstory [username]
ꗄ➺ ${prefix}igdl [link]
ꗄ➺ ${prefix}igphoto [link]
ꗄ➺ ${prefix}igvideo [link]
ꗄ➺ ${prefix}igreels [link]
ꗄ➺ ${prefix}igtv [link]
ꗄ➺ ${prefix}soundcloud [link]
ꗄ➺ ${prefix}gitclone [link repo]
ꗄ➺ ${prefix}gitrepo [username repo branch]
ꗄ➺ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link

╭─❒ 「 Primbon 」
ꗄ➺ ${prefix}nomorhoki 887435047326
ꗄ➺ ${prefix}artimimpi [query]
ꗄ➺ ${prefix}artinama [query]
ꗄ➺ ${prefix}ramaljodoh
ꗄ➺ ${prefix}ramaljodohbali
ꗄ➺ ${prefix}suamiistri
ꗄ➺ ${prefix}ramalcinta
ꗄ➺ ${prefix}cocoknama
ꗄ➺ ${prefix}pasangan
ꗄ➺ ${prefix}jadiannikah
ꗄ➺ ${prefix}sifatusaha
ꗄ➺ ${prefix}rezeki
ꗄ➺ ${prefix}pekerjaan
ꗄ➺ ${prefix}nasib
ꗄ➺ ${prefix}penyakit
ꗄ➺ ${prefix}tarot
ꗄ➺ ${prefix}fengshui
ꗄ➺ ${prefix}haribaik
ꗄ➺ ${prefix}harisangar
ꗄ➺ ${prefix}harisial
ꗄ➺ ${prefix}nagahari
ꗄ➺ ${prefix}arahrezeki
ꗄ➺ ${prefix}peruntungan
ꗄ➺ ${prefix}weton
ꗄ➺ ${prefix}karakter
ꗄ➺ ${prefix}keberuntungan
ꗄ➺ ${prefix}memancing
ꗄ➺ ${prefix}masasubur
ꗄ➺ ${prefix}zodiak 
╰❒ ${prefix}shio [query]

╭─❒ 「 Random Anime 」
ꗄ➺ ${prefix}loli
ꗄ➺ ${prefix}neko
ꗄ➺ ${prefix}waifu
ꗄ➺ ${prefix}shinobu
ꗄ➺ ${prefix}megumin
ꗄ➺ ${prefix}bully
ꗄ➺ ${prefix}cuddle
ꗄ➺ ${prefix}cry
ꗄ➺ ${prefix}hug
ꗄ➺ ${prefix}awoo
ꗄ➺ ${prefix}kiss
ꗄ➺ ${prefix}lick
ꗄ➺ ${prefix}pat
ꗄ➺ ${prefix}smug
ꗄ➺ ${prefix}bonk
ꗄ➺ ${prefix}yeet
ꗄ➺ ${prefix}blush
ꗄ➺ ${prefix}smile
ꗄ➺ ${prefix}wave
ꗄ➺ ${prefix}highfive
ꗄ➺ ${prefix}handhold
ꗄ➺ ${prefix}nom
ꗄ➺ ${prefix}bite
ꗄ➺ ${prefix}glomp
ꗄ➺ ${prefix}slap
ꗄ➺ ${prefix}kill
ꗄ➺ ${prefix}happy
ꗄ➺ ${prefix}wink
ꗄ➺ ${prefix}poke
ꗄ➺ ${prefix}dance
╰❒ ${prefix}cringe

╭─❒ 「 Nsfw & Sfw 」
ꗄ➺ ${prefix}ahegao
ꗄ➺ ${prefix}ass
ꗄ➺ ${prefix}bdsm
ꗄ➺ ${prefix}blowjob
ꗄ➺ ${prefix}cuckold
ꗄ➺ ${prefix}cum
ꗄ➺ ${prefix}ero
ꗄ➺ ${prefix}femdom
ꗄ➺ ${prefix}foot
ꗄ➺ ${prefix}gangbang
ꗄ➺ ${prefix}glasses
ꗄ➺ ${prefix}jahy
ꗄ➺ ${prefix}manga
ꗄ➺ ${prefix}masturbation
ꗄ➺ ${prefix}neko
ꗄ➺ ${prefix}orgy
ꗄ➺ ${prefix}panties
ꗄ➺ ${prefix}pussy
ꗄ➺ ${prefix}tentacles
ꗄ➺ ${prefix}thighs
ꗄ➺ ${prefix}yuri
ꗄ➺ ${prefix}feet
ꗄ➺ ${prefix}lewdkemo
ꗄ➺ ${prefix}woof
ꗄ➺ ${prefix}gasm
ꗄ➺ ${prefix}solo
ꗄ➺ ${prefix}8ball
ꗄ➺ ${prefix}goose
ꗄ➺ ${prefix}avatar
ꗄ➺ ${prefix}hololewd
ꗄ➺ ${prefix}gecg
ꗄ➺ ${prefix}holo
ꗄ➺ ${prefix}fox_girl
ꗄ➺ ${prefix}tits
ꗄ➺ ${prefix}eroyuri
ꗄ➺ ${prefix}holoyero
ꗄ➺ ${prefix}lizard
ꗄ➺ ${prefix}keta
ꗄ➺ ${prefix}eron
ꗄ➺ ${prefix}erok
ꗄ➺ ${prefix}kemonomimi
ꗄ➺ ${prefix}cum_jpg
ꗄ➺ ${prefix}nsfw_avatar
ꗄ➺ ${prefix}erofeet
ꗄ➺ ${prefix}meow
ꗄ➺ ${prefix}wallpaper
ꗄ➺ ${prefix}waifu
ꗄ➺ ${prefix}trap
ꗄ➺ ${prefix}lewd
ꗄ➺ ${prefix}pussy_jpg
ꗄ➺ ${prefix}futanari
ꗄ➺ ${prefix}lewdk
ꗄ➺ ${prefix}solog
ꗄ➺ ${prefix}smug
ꗄ➺ ${prefix}cum
ꗄ➺ ${prefix}slap
ꗄ➺ ${prefix}les
ꗄ➺ ${prefix}erokemo
ꗄ➺ ${prefix}bj
ꗄ➺ ${prefix}pwankg
ꗄ➺ ${prefix}pat
ꗄ➺ ${prefix}poke
ꗄ➺ ${prefix}feed
ꗄ➺ ${prefix}nsfw_neko_gif
ꗄ➺ ${prefix}pussy
ꗄ➺ ${prefix}feetg
ꗄ➺ ${prefix}baka
ꗄ➺ ${prefix}hug
ꗄ➺ ${prefix}kiss
ꗄ➺ ${prefix}tickle
ꗄ➺ ${prefix}spank
ꗄ➺ ${prefix}kuni
ꗄ➺ ${prefix}classic
ꗄ➺ ${prefix}boobs
ꗄ➺ ${prefix}anal
ꗄ➺ ${prefix}ngif
ꗄ➺ ${prefix}cuddle
╰❒ ${prefix}zettai

╭─❒ 「 Ephoto360 Menu 」
ꗄ➺ ${prefix}youtubegold
ꗄ➺ ${prefix}youtubesilver
ꗄ➺ ${prefix}facebookgold
ꗄ➺ ${prefix}facebooksilver
ꗄ➺ ${prefix}instagramgold
ꗄ➺ ${prefix}instagramsilver
ꗄ➺ ${prefix}twittergold
ꗄ➺ ${prefix}twittersilver
ꗄ➺ ${prefix}retrotext
ꗄ➺ ${prefix}halloweenbats
ꗄ➺ ${prefix}texthalloween
ꗄ➺ ${prefix}cardhalloween
ꗄ➺ ${prefix}birthdaycake
ꗄ➺ ${prefix}thundertext
ꗄ➺ ${prefix}icetext
ꗄ➺ ${prefix}milkcake
ꗄ➺ ${prefix}snowontext
ꗄ➺ ${prefix}metalstar
ꗄ➺ ${prefix}dragonfire
ꗄ➺ ${prefix}zombie3d
ꗄ➺ ${prefix}merrycard
ꗄ➺ ${prefix}generalexam 
ꗄ➺ ${prefix}viettel
ꗄ➺ ${prefix}embroider
ꗄ➺ ${prefix}graffititext
ꗄ➺ ${prefix}graffititext2
ꗄ➺ ${prefix}graffititext3
ꗄ➺ ${prefix}covergraffiti
ꗄ➺ ${prefix}moderngold
ꗄ➺ ${prefix}capercut
ꗄ➺ ${prefix}lovecard
ꗄ➺ ${prefix}heartflashlight
ꗄ➺ ${prefix}heartcup
ꗄ➺ ${prefix}sunglightshadow
ꗄ➺ ${prefix}graffiti3d
ꗄ➺ ${prefix}moderngoldsilver
ꗄ➺ ${prefix}moderngold2
ꗄ➺ ${prefix}moderngold3
ꗄ➺ ${prefix}fabrictext
ꗄ➺ ${prefix}masteryavatar
ꗄ➺ ${prefix}messagecoffee
ꗄ➺ ${prefix}announofwin
ꗄ➺ ${prefix}writeblood
ꗄ➺ ${prefix}horrorletter
ꗄ➺ ${prefix}writehorror
ꗄ➺ ${prefix}shirtclub
ꗄ➺ ${prefix}angelwing
ꗄ➺ ${prefix}christmasseason
ꗄ➺ ${prefix}projectyasuo
ꗄ➺ ${prefix}lovelycute
ꗄ➺ ${prefix}womansday
ꗄ➺ ${prefix}covergamepubg
ꗄ➺ ${prefix}nameonheart
ꗄ➺ ${prefix}funnyhalloween
ꗄ➺ ${prefix}lightningpubg
ꗄ➺ ${prefix}greetingcardvideo 
ꗄ➺ ${prefix}christmascard 
ꗄ➺ ${prefix}galaxybat
ꗄ➺ ${prefix}writegalaxy
ꗄ➺ ${prefix}starsnight
ꗄ➺ ${prefix}noeltext
ꗄ➺ ${prefix}textcakes
ꗄ➺ ${prefix}pubgbirthday
ꗄ➺ ${prefix}galaxywallpaper
ꗄ➺ ${prefix}pubgglicthvideo 
ꗄ➺ ${prefix}pubgmascotlogo
ꗄ➺ ${prefix}realembroidery
ꗄ➺ ${prefix}vintagetelevision
ꗄ➺ ${prefix}funnyanimations
ꗄ➺ ${prefix}glowingtext
ꗄ➺ ${prefix}textonglass
ꗄ➺ ${prefix}cartoonstyle
ꗄ➺ ${prefix}multicolor
ꗄ➺ ${prefix}watercolor2
ꗄ➺ ${prefix}textsky
ꗄ➺ ${prefix}summerbeach
ꗄ➺ ${prefix}1917text
ꗄ➺ ${prefix}puppycute
╰❒ ${prefix}rosebirthday


╭─❒ 「 Textpro Menu 」
ꗄ➺ ${prefix}halloween2 text|text2
ꗄ➺ ${prefix}horror text|text2
ꗄ➺ ${prefix}game8bit text|text2
ꗄ➺ ${prefix}layered text|text2
ꗄ➺ ${prefix}glitch2 text|text2
ꗄ➺ ${prefix}coolg text|text2
ꗄ➺ ${prefix}coolwg text|text2
ꗄ➺ ${prefix}realistic text|text2
ꗄ➺ ${prefix}space3d text|text2
ꗄ➺ ${prefix}gtiktok text|text2
ꗄ➺ ${prefix}stone text|text2
ꗄ➺ ${prefix}marvel text|text2
ꗄ➺ ${prefix}marvel2 text|text2
ꗄ➺ ${prefix}pornhub text|text2
ꗄ➺ ${prefix}avengers text|text2
ꗄ➺ ${prefix}metalr text|text2
ꗄ➺ ${prefix}metalg text|text2
ꗄ➺ ${prefix}metalg2 text|text2
ꗄ➺ ${prefix}halloween2 text|text2
ꗄ➺ ${prefix}lion text|text2
ꗄ➺ ${prefix}wolf_bw text|text2
ꗄ➺ ${prefix}wolf_g text|text2
ꗄ➺ ${prefix}ninja text|text2
ꗄ➺ ${prefix}3dsteel text|text2
ꗄ➺ ${prefix}horror2 text|text2
ꗄ➺ ${prefix}lava text|text2
ꗄ➺ ${prefix}bagel text|text2
ꗄ➺ ${prefix}blackpink text
ꗄ➺ ${prefix}rainbow2 text
ꗄ➺ ${prefix}water_pipe text
ꗄ➺ ${prefix}halloween text
ꗄ➺ ${prefix}sketch text
ꗄ➺ ${prefix}sircuit text
ꗄ➺ ${prefix}discovery text
ꗄ➺ ${prefix}metallic2 text
ꗄ➺ ${prefix}fiction text
ꗄ➺ ${prefix}demon text
ꗄ➺ ${prefix}transformer text
ꗄ➺ ${prefix}berry text
ꗄ➺ ${prefix}thunder text
ꗄ➺ ${prefix}magma text
ꗄ➺ ${prefix}3dstone text
ꗄ➺ ${prefix}neon text
ꗄ➺ ${prefix}glitch text
ꗄ➺ ${prefix}harry_potter text
ꗄ➺ ${prefix}embossed text
ꗄ➺ ${prefix}broken text
ꗄ➺ ${prefix}papercut text
ꗄ➺ ${prefix}gradient text
ꗄ➺ ${prefix}glossy text
ꗄ➺ ${prefix}watercolor text
ꗄ➺ ${prefix}multicolor text
ꗄ➺ ${prefix}neon_devil text
ꗄ➺ ${prefix}underwater text
ꗄ➺ ${prefix}bear text
ꗄ➺ ${prefix}wonderfulg text
ꗄ➺ ${prefix}christmas text
ꗄ➺ ${prefix}neon_light text
ꗄ➺ ${prefix}snow text
ꗄ➺ ${prefix}cloudsky text
ꗄ➺ ${prefix}luxury2 text
ꗄ➺ ${prefix}gradient2 text
ꗄ➺ ${prefix}summer text
ꗄ➺ ${prefix}writing text
ꗄ➺ ${prefix}engraved text
ꗄ➺ ${prefix}summery text
ꗄ➺ ${prefix}3dglue text
ꗄ➺ ${prefix}metaldark text
ꗄ➺ ${prefix}neonlight text
ꗄ➺ ${prefix}oscar text
ꗄ➺ ${prefix}minion text
ꗄ➺ ${prefix}holographic text
ꗄ➺ ${prefix}purple text
ꗄ➺ ${prefix}glossyb text
ꗄ➺ ${prefix}deluxe2 text
ꗄ➺ ${prefix}glossyc text
ꗄ➺ ${prefix}fabric text
ꗄ➺ ${prefix}neonc text
ꗄ➺ ${prefix}newyear text
ꗄ➺ ${prefix}newyear2 text
ꗄ➺ ${prefix}metals text
ꗄ➺ ${prefix}xmas text
ꗄ➺ ${prefix}blood text
ꗄ➺ ${prefix}darkg text
ꗄ➺ ${prefix}joker text
ꗄ➺ ${prefix}wicker text
ꗄ➺ ${prefix}natural text
ꗄ➺ ${prefix}firework text
ꗄ➺ ${prefix}skeleton text
ꗄ➺ ${prefix}balloon text
ꗄ➺ ${prefix}balloon2 text
ꗄ➺ ${prefix}balloon3 text
ꗄ➺ ${prefix}balloon4 text
ꗄ➺ ${prefix}balloon5 text
ꗄ➺ ${prefix}balloon6 text
ꗄ➺ ${prefix}balloon7 text
ꗄ➺ ${prefix}steel text
ꗄ➺ ${prefix}gloss text
ꗄ➺ ${prefix}denim text
ꗄ➺ ${prefix}decorate text
ꗄ➺ ${prefix}decorate2 text
ꗄ➺ ${prefix}peridot text
ꗄ➺ ${prefix}rock text
ꗄ➺ ${prefix}glass text
ꗄ➺ ${prefix}glass2 text
ꗄ➺ ${prefix}glass3 text
ꗄ➺ ${prefix}glass4 text
ꗄ➺ ${prefix}glass5 text
ꗄ➺ ${prefix}glass6 text
ꗄ➺ ${prefix}glass7 text
ꗄ➺ ${prefix}glass8 text
ꗄ➺ ${prefix}captain_as2 text
ꗄ➺ ${prefix}robot text
ꗄ➺ ${prefix}equalizer text
ꗄ➺ ${prefix}toxic text
ꗄ➺ ${prefix}sparkling text
ꗄ➺ ${prefix}sparkling2 text
ꗄ➺ ${prefix}sparkling3 text
ꗄ➺ ${prefix}sparkling4 text
ꗄ➺ ${prefix}sparkling5 text
ꗄ➺ ${prefix}sparkling6 text
ꗄ➺ ${prefix}sparkling7 text
ꗄ➺ ${prefix}decorative text
ꗄ➺ ${prefix}chocolate text
ꗄ➺ ${prefix}strawberry text
ꗄ➺ ${prefix}koifish text
ꗄ➺ ${prefix}bread text
ꗄ➺ ${prefix}matrix text
ꗄ➺ ${prefix}blood2 text
ꗄ➺ ${prefix}neonligth2 text
ꗄ➺ ${prefix}thunder2 text
ꗄ➺ ${prefix}3dbox text
ꗄ➺ ${prefix}neon2 text
ꗄ➺ ${prefix}roadw text
ꗄ➺ ${prefix}bokeh text
ꗄ➺ ${prefix}gneon text
ꗄ➺ ${prefix}advanced text
ꗄ➺ ${prefix}dropwater text
ꗄ➺ ${prefix}wall text
ꗄ➺ ${prefix}chrismast text
ꗄ➺ ${prefix}honey text
ꗄ➺ ${prefix}drug text
ꗄ➺ ${prefix}marble text
ꗄ➺ ${prefix}marble2 text
ꗄ➺ ${prefix}ice text
ꗄ➺ ${prefix}juice text
ꗄ➺ ${prefix}rusty text
ꗄ➺ ${prefix}abstra text
ꗄ➺ ${prefix}biscuit text
ꗄ➺ ${prefix}wood text
ꗄ➺ ${prefix}scifi text
ꗄ➺ ${prefix}metalr text
ꗄ➺ ${prefix}purpleg text
ꗄ➺ ${prefix}shiny text 
ꗄ➺ ${prefix}jewelry text
ꗄ➺ ${prefix}jewelry2 text
ꗄ➺ ${prefix}jewelry3 text
ꗄ➺ ${prefix}jewelry4 text
ꗄ➺ ${prefix}jewelry5 text
ꗄ➺ ${prefix}jewelry6 text
ꗄ➺ ${prefix}jewelry7 text
ꗄ➺ ${prefix}jewelry8 text
ꗄ➺ ${prefix}metalh text
ꗄ➺ ${prefix}golden text
ꗄ➺ ${prefix}glitter text
ꗄ➺ ${prefix}glitter2 text
ꗄ➺ ${prefix}glitter3 text
ꗄ➺ ${prefix}glitter4 text
ꗄ➺ ${prefix}glitter5 text
ꗄ➺ ${prefix}glitter6 text
ꗄ➺ ${prefix}glitter7 text
ꗄ➺ ${prefix}metale text
ꗄ➺ ${prefix}carbon text
ꗄ➺ ${prefix}candy text
ꗄ➺ ${prefix}metalb text
ꗄ➺ ${prefix}gemb text
ꗄ➺ ${prefix}3dchrome text
ꗄ➺ ${prefix}metalb2 text
ꗄ➺ ${prefix}metalg text
╰❒ ${prefix}metalg text


╭─❒ 「 Others 」
ꗄ➺ ${prefix}afk [reason]
ꗄ➺ ${prefix}translate kode_bahasa text
ꗄ➺ ${prefix}kalkulator [query]
ꗄ➺ ${prefix}smeme [text]
ꗄ➺ ${prefix}smeme2 [text|text]
ꗄ➺ ${prefix}memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
ꗄ➺ ${prefix}kuismath
ꗄ➺ ${prefix}tebak [option]
ꗄ➺ ${prefix}tekateki
ꗄ➺ ${prefix}susunkata
╰❒ ${prefix}caklontong


╭─❒ 「 Asupan Menu 」
ꗄ➺ ${prefix}chika
ꗄ➺ ${prefix}delvira
ꗄ➺ ${prefix}ayu
ꗄ➺ ${prefix}bunga
ꗄ➺ ${prefix}aura
ꗄ➺ ${prefix}nisa
ꗄ➺ ${prefix}ziva
ꗄ➺ ${prefix}yana
ꗄ➺ ${prefix}viona
ꗄ➺ ${prefix}syania
ꗄ➺ ${prefix}riri
ꗄ➺ ${prefix}syifa
ꗄ➺ ${prefix}mama_gina
ꗄ➺ ${prefix}alcakenya
ꗄ➺ ${prefix}mangayutri
ꗄ➺ ${prefix}rikagusriani
ꗄ➺ ${prefix}asupan
ꗄ➺ ${prefix}bocil
ꗄ➺ ${prefix}geayubi
ꗄ➺ ${prefix}santuy
ꗄ➺ ${prefix}ukhty
╰❒ ${prefix}syifa

╭─❒ 「 Telegram Sticker 」
ꗄ➺ ${prefix}awoawo
ꗄ➺ ${prefix}benedict
ꗄ➺ ${prefix}chat
ꗄ➺ ${prefix}dbfly
ꗄ➺ ${prefix}dino_kuning
ꗄ➺ ${prefix}doge
ꗄ➺ ${prefix}gojosatoru
ꗄ➺ ${prefix}hope_boy
ꗄ➺ ${prefix}jisoo
ꗄ➺ ${prefix}kr_robot
ꗄ➺ ${prefix}kucing
ꗄ➺ ${prefix}lonte
ꗄ➺ ${prefix}manusia_lidi
ꗄ➺ ${prefix}menjamet
ꗄ➺ ${prefix}meow
ꗄ➺ ${prefix}nicholas
ꗄ➺ ${prefix}patrick
ꗄ➺ ${prefix}popoci
ꗄ➺ ${prefix}sponsbob
ꗄ➺ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
,
╭─❒ 「 Random Cewe 」
ꗄ➺ ${prefix}china 
ꗄ➺ ${prefix}indonesia 
ꗄ➺ ${prefix}malaysia 
ꗄ➺ ${prefix}thailand 
ꗄ➺ ${prefix}korea 
ꗄ➺ ${prefix}japan 
ꗄ➺ ${prefix}vietnam 
ꗄ➺ ${prefix}jenni 
ꗄ➺ ${prefix}jiso 
ꗄ➺ ${prefix}lisa  
╰❒ ${prefix}rose

╭─❒ 「 TqTo 」 
ꗄ➺ My God
ꗄ➺ My Parents
ꗄ➺ Fatih A.
ꗄ➺ Ferdi
ꗄ➺ DikaArdnt
ꗄ➺ Mhankbarbar
ꗄ➺ Nurutomo
ꗄ➺ Rashid
ꗄ➺ ZeeoneOfc
ꗄ➺ AkiraYT
ꗄ➺ Penyedia Module
╰❒ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 Neo Always Trust⚔️ 」 ──*

📌RULES📌

‼️ Member Baru Wajib Kasih Slot Admin
‼️ Bebas Bercanda Asal Sopan
❌ No Rek jangan kirim ke grub ( auto kick )
❌ Share Link Grup Lain [ auto kick ]
❌ Dilarang Minta Modal Lebih Dari 1000
‼️ Masukin Teman Ke Grub, PM Admin
‼️ Member Non Aktif, Admin Berhak Kick
🔉 Jika Ada Yg Belum Back Lebih Dari 1 Jam, Segera Lapor Admin

🔹We always trY the best f0r you🔹

-‼️Note‼️ : 

°°KALAU OPEN SLOT USAHAKAN TIDAK DALAM KESIBUKAN LAIN°°


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!
`
}
exports.welcome = () =>{
	return`𝙅𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙞𝙣𝙩𝙧𝙤 𝙠𝙖𝙠 𝘽𝙞𝙖𝙧 𝙠𝙚𝙣𝙖𝙡 🤗
	
➺ 📝 𝖭𝖺𝗆𝖺 :
➺ 📆 𝖴𝗆𝗎𝗋 :
➺ ⚧️ 𝖦𝖾𝗇𝖽𝖾𝗋 :
➺ 🏘️ 𝖠𝗌𝗄𝗈𝗍 :

╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`ʏᴀʜ ᴋᴏᴋ ᴘᴇʀɢɪ ᴋᴀᴋ >.<
ᴋᴀʟᴀᴜ ʙᴀʟɪᴋ ɴɪᴛɪᴘ ᴊᴀɴᴅᴀ ʏᴀʜ...
ꜱᴇʟᴀᴍᴀᴛ ᴊᴀʟᴀɴ..`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Beneran Mau Donasi Apa nonton Doang

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
ꗄ➺ ${prefix}owner
ꗄ➺ ${prefix}rules
ꗄ➺ ${prefix}sc
ꗄ➺ ${prefix}ping
ꗄ➺ ${prefix}runtime
ꗄ➺ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
ꗄ➺ < evaluate
ꗄ➺ > evaluate
ꗄ➺ $ exec
ꗄ➺ => exec
ꗄ➺ ${prefix}setmenu [query]
ꗄ➺ ${prefix}setmenu templateLocation
ꗄ➺ ${prefix}setmenu templateTenor
ꗄ➺ ${prefix}setmenu katalog
ꗄ➺ ${prefix}setmenu katalog2
ꗄ➺ ${prefix}setmenu list
ꗄ➺ ${prefix}setwm packname|author
ꗄ➺ ${prefix}sendsesi
ꗄ➺ ${prefix}listpc
ꗄ➺ ${prefix}listgc
ꗄ➺ ${prefix}broadcast [text]
ꗄ➺ ${prefix}bc [text]
ꗄ➺ ${prefix}bcgc [text]
ꗄ➺ ${prefix}nsfw [on/off]
ꗄ➺ ${prefix}autorespond [on/off]
ꗄ➺ ${prefix}antiviewonce [on/off]
ꗄ➺ ${prefix}join [link]
ꗄ➺ ${prefix}self
ꗄ➺ ${prefix}public [only bot]
ꗄ➺ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
ꗄ➺ ${prefix}setcmd [reply stiker]
ꗄ➺ ${prefix}delcmd [reply stiker]
ꗄ➺ ${prefix}listcmd
ꗄ➺ ${prefix}absen
ꗄ➺ ${prefix}cekabsen
ꗄ➺ ${prefix}deleteabsen
ꗄ➺ ${prefix}absenstart
ꗄ➺ ${prefix}addmsg [nama file]
ꗄ➺ ${prefix}getmsg [nama file]
ꗄ➺ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
ꗄ➺ ${prefix}listonline
ꗄ➺ ${prefix}sider
ꗄ➺ ${prefix}wm packname|author
ꗄ➺ ${prefix}infochat
ꗄ➺ ${prefix}setdesk [text]
ꗄ➺ ${prefix}setppgrup [reply image]
ꗄ➺ ${prefix}antilink [on/off]
ꗄ➺ ${prefix}revoke
ꗄ➺ ${prefix}leave
ꗄ➺ ${prefix}add [62***]
ꗄ➺ ${prefix}kick @tag
ꗄ➺ ${prefix}leave
ꗄ➺ ${prefix}linkgc
ꗄ➺ ${prefix}take packname|author
ꗄ➺ ${prefix}group [open/close]
ꗄ➺ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
ꗄ➺ ${prefix}quotesanime
ꗄ➺ ${prefix}anime [query]
ꗄ➺ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
ꗄ➺ ${prefix}stickertag
ꗄ➺ ${prefix}videotag [query]
ꗄ➺ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
ꗄ➺ ${prefix}igstalk [username]
ꗄ➺ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
ꗄ➺ ${prefix}ytsearch [query]
ꗄ➺ ${prefix}wallpaper [query]
ꗄ➺ ${prefix}wikimedia [query]
ꗄ➺ ${prefix}hentai
ꗄ➺ ${prefix}wattpad [query]
ꗄ➺ ${prefix}webtoons [query]
ꗄ➺ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
ꗄ➺ ${prefix}toaudio [video]
ꗄ➺ ${prefix}tomp3 [video]
ꗄ➺ ${prefix}tovn [video]
ꗄ➺ ${prefix}stiker [reply image]
ꗄ➺ ${prefix}tourl [image/video]
ꗄ➺ ${prefix}togif [sticker]
ꗄ➺ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
ꗄ➺ ${prefix}wanted [reply image/stiker]
ꗄ➺ ${prefix}utatoo [reply image/stiker]
ꗄ➺ ${prefix}unsharpen [reply image/stiker]
ꗄ➺ ${prefix}thanos [reply image/stiker]
ꗄ➺ ${prefix}sniper [reply image/stiker]
ꗄ➺ ${prefix}sharpen [reply image/stiker]
ꗄ➺ ${prefix}sepia [reply image/stiker]
ꗄ➺ ${prefix}scary [reply image/stiker]
ꗄ➺ ${prefix}rip [reply image/stiker]
ꗄ➺ ${prefix}redple [reply image/stiker]
ꗄ➺ ${prefix}rejected [reply image/stiker]
ꗄ➺ ${prefix}posterize [reply image/stiker]
ꗄ➺ ${prefix}ps4 [reply image/stiker]
ꗄ➺ ${prefix}pixelize [reply image/stiker]
ꗄ➺ ${prefix}missionpassed [reply image/stiker]
ꗄ➺ ${prefix}moustache [reply image/stiker]
ꗄ➺ ${prefix}lookwhatkarenhave [reply image/stiker]
ꗄ➺ ${prefix}jail [reply image/stiker]
ꗄ➺ ${prefix}invert [reply image/stiker]
ꗄ➺ ${prefix}instagram [reply image/stiker]
ꗄ➺ ${prefix}greyscale [reply image/stiker]
ꗄ➺ ${prefix}glitch [reply image/stiker]
ꗄ➺ ${prefix}gay [reply image/stiker]
ꗄ➺ ${prefix}frame [reply image/stiker]
ꗄ➺ ${prefix}fire [reply image/stiker]
ꗄ➺ ${prefix}distort [reply image/stiker]
ꗄ➺ ${prefix}dictator [reply image/stiker]
ꗄ➺ ${prefix}deepfry [reply image/stiker]
ꗄ➺ ${prefix}ddungeon [reply image/stiker]
ꗄ➺ ${prefix}circle [reply image/stiker]
ꗄ➺ ${prefix}challenger [reply image/stiker]
ꗄ➺ ${prefix}burn [reply image/stiker]
ꗄ➺ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
ꗄ➺ ${prefix}jail [reply image/stiker]
ꗄ➺ ${prefix}red [reply image/stiker]
ꗄ➺ ${prefix}gay [reply image/stiker]
ꗄ➺ ${prefix}bloo [reply image/stiker]
ꗄ➺ ${prefix}blue [reply image/stiker]
ꗄ➺ ${prefix}sepia [reply image/stiker]
ꗄ➺ ${prefix}green [reply image/stiker]
ꗄ➺ ${prefix}glass [reply image/stiker]
ꗄ➺ ${prefix}invert [reply image/stiker]
ꗄ➺ ${prefix}blurple [reply image/stiker]
ꗄ➺ ${prefix}blurple2 [reply image/stiker]
ꗄ➺ ${prefix}wasted [reply image/stiker]
ꗄ➺ ${prefix}passed [reply image/stiker]
ꗄ➺ ${prefix}triggered [reply image/stiker]
ꗄ➺ ${prefix}comrade [reply image/stiker]
ꗄ➺ ${prefix}greyscale [reply image/stiker]
ꗄ➺ ${prefix}threshold [reply image/stiker]
ꗄ➺ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
ꗄ➺ ${prefix}tiktok [link]
ꗄ➺ ${prefix}tiktoknowm [link]
ꗄ➺ ${prefix}tiktokwm [link]
ꗄ➺ ${prefix}tiktokaudio [link]
ꗄ➺ ${prefix}ytdl [link]
ꗄ➺ ${prefix}play [query]
ꗄ➺ ${prefix}ytmp3 [link]
ꗄ➺ ${prefix}ytshortmp3 [link]
ꗄ➺ ${prefix}ytmp4 [link]
ꗄ➺ ${prefix}ytshorts [link]
ꗄ➺ ${prefix}facebook [link]
ꗄ➺ ${prefix}facebooksd [link]
ꗄ➺ ${prefix}facebookhd [link]
ꗄ➺ ${prefix}fbaudio [link]
ꗄ➺ ${prefix}igstory [username]
ꗄ➺ ${prefix}igdl [link]
ꗄ➺ ${prefix}igphoto [link]
ꗄ➺ ${prefix}igvideo [link]
ꗄ➺ ${prefix}igreels [link]
ꗄ➺ ${prefix}igtv [link]
ꗄ➺ ${prefix}soundcloud [link]
ꗄ➺ ${prefix}gitclone [link repo]
ꗄ➺ ${prefix}gitrepo [username repo branch]
ꗄ➺ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
ꗄ➺ ${prefix}loli
ꗄ➺ ${prefix}neko
ꗄ➺ ${prefix}waifu
ꗄ➺ ${prefix}shinobu
ꗄ➺ ${prefix}megumin
ꗄ➺ ${prefix}bully
ꗄ➺ ${prefix}cuddle
ꗄ➺ ${prefix}cry
ꗄ➺ ${prefix}hug
ꗄ➺ ${prefix}awoo
ꗄ➺ ${prefix}kiss
ꗄ➺ ${prefix}lick
ꗄ➺ ${prefix}pat
ꗄ➺ ${prefix}smug
ꗄ➺ ${prefix}bonk
ꗄ➺ ${prefix}yeet
ꗄ➺ ${prefix}blush
ꗄ➺ ${prefix}smile
ꗄ➺ ${prefix}wave
ꗄ➺ ${prefix}highfive
ꗄ➺ ${prefix}handhold
ꗄ➺ ${prefix}nom
ꗄ➺ ${prefix}bite
ꗄ➺ ${prefix}glomp
ꗄ➺ ${prefix}slap
ꗄ➺ ${prefix}kill
ꗄ➺ ${prefix}happy
ꗄ➺ ${prefix}wink
ꗄ➺ ${prefix}poke
ꗄ➺ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
ꗄ➺ ${prefix}ahegao
ꗄ➺ ${prefix}ass
ꗄ➺ ${prefix}bdsm
ꗄ➺ ${prefix}blowjob
ꗄ➺ ${prefix}cuckold
ꗄ➺ ${prefix}cum
ꗄ➺ ${prefix}ero
ꗄ➺ ${prefix}femdom
ꗄ➺ ${prefix}foot
ꗄ➺ ${prefix}gangbang
ꗄ➺ ${prefix}glasses
ꗄ➺ ${prefix}jahy
ꗄ➺ ${prefix}manga
ꗄ➺ ${prefix}masturbation
ꗄ➺ ${prefix}neko
ꗄ➺ ${prefix}orgy
ꗄ➺ ${prefix}panties
ꗄ➺ ${prefix}pussy
ꗄ➺ ${prefix}tentacles
ꗄ➺ ${prefix}thighs
ꗄ➺ ${prefix}yuri
ꗄ➺ ${prefix}feet
ꗄ➺ ${prefix}lewdkemo
ꗄ➺ ${prefix}woof
ꗄ➺ ${prefix}gasm
ꗄ➺ ${prefix}solo
ꗄ➺ ${prefix}8ball
ꗄ➺ ${prefix}goose
ꗄ➺ ${prefix}avatar
ꗄ➺ ${prefix}hololewd
ꗄ➺ ${prefix}gecg
ꗄ➺ ${prefix}holo
ꗄ➺ ${prefix}fox_girl
ꗄ➺ ${prefix}tits
ꗄ➺ ${prefix}eroyuri
ꗄ➺ ${prefix}holoyero
ꗄ➺ ${prefix}lizard
ꗄ➺ ${prefix}keta
ꗄ➺ ${prefix}eron
ꗄ➺ ${prefix}erok
ꗄ➺ ${prefix}kemonomimi
ꗄ➺ ${prefix}cum_jpg
ꗄ➺ ${prefix}nsfw_avatar
ꗄ➺ ${prefix}erofeet
ꗄ➺ ${prefix}meow
ꗄ➺ ${prefix}wallpaper
ꗄ➺ ${prefix}waifu
ꗄ➺ ${prefix}trap
ꗄ➺ ${prefix}lewd
ꗄ➺ ${prefix}pussy_jpg
ꗄ➺ ${prefix}futanari
ꗄ➺ ${prefix}lewdk
ꗄ➺ ${prefix}solog
ꗄ➺ ${prefix}smug
ꗄ➺ ${prefix}cum
ꗄ➺ ${prefix}slap
ꗄ➺ ${prefix}les
ꗄ➺ ${prefix}erokemo
ꗄ➺ ${prefix}bj
ꗄ➺ ${prefix}pwankg
ꗄ➺ ${prefix}pat
ꗄ➺ ${prefix}poke
ꗄ➺ ${prefix}feed
ꗄ➺ ${prefix}nsfw_neko_gif
ꗄ➺ ${prefix}pussy
ꗄ➺ ${prefix}feetg
ꗄ➺ ${prefix}baka
ꗄ➺ ${prefix}hug
ꗄ➺ ${prefix}kiss
ꗄ➺ ${prefix}tickle
ꗄ➺ ${prefix}spank
ꗄ➺ ${prefix}kuni
ꗄ➺ ${prefix}classic
ꗄ➺ ${prefix}boobs
ꗄ➺ ${prefix}anal
ꗄ➺ ${prefix}ngif
ꗄ➺ ${prefix}cuddle
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
ꗄ➺ ${prefix}halloween2 text|text2
ꗄ➺ ${prefix}horror text|text2
ꗄ➺ ${prefix}game8bit text|text2
ꗄ➺ ${prefix}layered text|text2
ꗄ➺ ${prefix}glitch2 text|text2
ꗄ➺ ${prefix}coolg text|text2
ꗄ➺ ${prefix}coolwg text|text2
ꗄ➺ ${prefix}realistic text|text2
ꗄ➺ ${prefix}space3d text|text2
ꗄ➺ ${prefix}gtiktok text|text2
ꗄ➺ ${prefix}stone text|text2
ꗄ➺ ${prefix}marvel text|text2
ꗄ➺ ${prefix}marvel2 text|text2
ꗄ➺ ${prefix}pornhub text|text2
ꗄ➺ ${prefix}avengers text|text2
ꗄ➺ ${prefix}metalr text|text2
ꗄ➺ ${prefix}metalg text|text2
ꗄ➺ ${prefix}metalg2 text|text2
ꗄ➺ ${prefix}halloween2 text|text2
ꗄ➺ ${prefix}lion text|text2
ꗄ➺ ${prefix}wolf_bw text|text2
ꗄ➺ ${prefix}wolf_g text|text2
ꗄ➺ ${prefix}ninja text|text2
ꗄ➺ ${prefix}3dsteel text|text2
ꗄ➺ ${prefix}horror2 text|text2
ꗄ➺ ${prefix}lava text|text2
ꗄ➺ ${prefix}bagel text|text2
ꗄ➺ ${prefix}blackpink text
ꗄ➺ ${prefix}rainbow2 text
ꗄ➺ ${prefix}water_pipe text
ꗄ➺ ${prefix}halloween text
ꗄ➺ ${prefix}sketch text
ꗄ➺ ${prefix}sircuit text
ꗄ➺ ${prefix}discovery text
ꗄ➺ ${prefix}metallic2 text
ꗄ➺ ${prefix}fiction text
ꗄ➺ ${prefix}demon text
ꗄ➺ ${prefix}transformer text
ꗄ➺ ${prefix}berry text
ꗄ➺ ${prefix}thunder text
ꗄ➺ ${prefix}magma text
ꗄ➺ ${prefix}3dstone text
ꗄ➺ ${prefix}neon text
ꗄ➺ ${prefix}glitch text
ꗄ➺ ${prefix}harry_potter text
ꗄ➺ ${prefix}embossed text
ꗄ➺ ${prefix}broken text
ꗄ➺ ${prefix}papercut text
ꗄ➺ ${prefix}gradient text
ꗄ➺ ${prefix}glossy text
ꗄ➺ ${prefix}watercolor text
ꗄ➺ ${prefix}multicolor text
ꗄ➺ ${prefix}neon_devil text
ꗄ➺ ${prefix}underwater text
ꗄ➺ ${prefix}bear text
ꗄ➺ ${prefix}wonderfulg text
ꗄ➺ ${prefix}christmas text
ꗄ➺ ${prefix}neon_light text
ꗄ➺ ${prefix}snow text
ꗄ➺ ${prefix}cloudsky text
ꗄ➺ ${prefix}luxury2 text
ꗄ➺ ${prefix}gradient2 text
ꗄ➺ ${prefix}summer text
ꗄ➺ ${prefix}writing text
ꗄ➺ ${prefix}engraved text
ꗄ➺ ${prefix}summery text
ꗄ➺ ${prefix}3dglue text
ꗄ➺ ${prefix}metaldark text
ꗄ➺ ${prefix}neonlight text
ꗄ➺ ${prefix}oscar text
ꗄ➺ ${prefix}minion text
ꗄ➺ ${prefix}holographic text
ꗄ➺ ${prefix}purple text
ꗄ➺ ${prefix}glossyb text
ꗄ➺ ${prefix}deluxe2 text
ꗄ➺ ${prefix}glossyc text
ꗄ➺ ${prefix}fabric text
ꗄ➺ ${prefix}neonc text
ꗄ➺ ${prefix}newyear text
ꗄ➺ ${prefix}newyear2 text
ꗄ➺ ${prefix}metals text
ꗄ➺ ${prefix}xmas text
ꗄ➺ ${prefix}blood text
ꗄ➺ ${prefix}darkg text
ꗄ➺ ${prefix}joker text
ꗄ➺ ${prefix}wicker text
ꗄ➺ ${prefix}natural text
ꗄ➺ ${prefix}firework text
ꗄ➺ ${prefix}skeleton text
ꗄ➺ ${prefix}balloon text
ꗄ➺ ${prefix}balloon2 text
ꗄ➺ ${prefix}balloon3 text
ꗄ➺ ${prefix}balloon4 text
ꗄ➺ ${prefix}balloon5 text
ꗄ➺ ${prefix}balloon6 text
ꗄ➺ ${prefix}balloon7 text
ꗄ➺ ${prefix}steel text
ꗄ➺ ${prefix}gloss text
ꗄ➺ ${prefix}denim text
ꗄ➺ ${prefix}decorate text
ꗄ➺ ${prefix}decorate2 text
ꗄ➺ ${prefix}peridot text
ꗄ➺ ${prefix}rock text
ꗄ➺ ${prefix}glass text
ꗄ➺ ${prefix}glass2 text
ꗄ➺ ${prefix}glass3 text
ꗄ➺ ${prefix}glass4 text
ꗄ➺ ${prefix}glass5 text
ꗄ➺ ${prefix}glass6 text
ꗄ➺ ${prefix}glass7 text
ꗄ➺ ${prefix}glass8 text
ꗄ➺ ${prefix}captain_as2 text
ꗄ➺ ${prefix}robot text
ꗄ➺ ${prefix}equalizer text
ꗄ➺ ${prefix}toxic text
ꗄ➺ ${prefix}sparkling text
ꗄ➺ ${prefix}sparkling2 text
ꗄ➺ ${prefix}sparkling3 text
ꗄ➺ ${prefix}sparkling4 text
ꗄ➺ ${prefix}sparkling5 text
ꗄ➺ ${prefix}sparkling6 text
ꗄ➺ ${prefix}sparkling7 text
ꗄ➺ ${prefix}decorative text
ꗄ➺ ${prefix}chocolate text
ꗄ➺ ${prefix}strawberry text
ꗄ➺ ${prefix}koifish text
ꗄ➺ ${prefix}bread text
ꗄ➺ ${prefix}matrix text
ꗄ➺ ${prefix}blood2 text
ꗄ➺ ${prefix}neonligth2 text
ꗄ➺ ${prefix}thunder2 text
ꗄ➺ ${prefix}3dbox text
ꗄ➺ ${prefix}neon2 text
ꗄ➺ ${prefix}roadw text
ꗄ➺ ${prefix}bokeh text
ꗄ➺ ${prefix}gneon text
ꗄ➺ ${prefix}advanced text
ꗄ➺ ${prefix}dropwater text
ꗄ➺ ${prefix}wall text
ꗄ➺ ${prefix}chrismast text
ꗄ➺ ${prefix}honey text
ꗄ➺ ${prefix}drug text
ꗄ➺ ${prefix}marble text
ꗄ➺ ${prefix}marble2 text
ꗄ➺ ${prefix}ice text
ꗄ➺ ${prefix}juice text
ꗄ➺ ${prefix}rusty text
ꗄ➺ ${prefix}abstra text
ꗄ➺ ${prefix}biscuit text
ꗄ➺ ${prefix}wood text
ꗄ➺ ${prefix}scifi text
ꗄ➺ ${prefix}metalr text
ꗄ➺ ${prefix}purpleg text
ꗄ➺ ${prefix}shiny text 
ꗄ➺ ${prefix}jewelry text
ꗄ➺ ${prefix}jewelry2 text
ꗄ➺ ${prefix}jewelry3 text
ꗄ➺ ${prefix}jewelry4 text
ꗄ➺ ${prefix}jewelry5 text
ꗄ➺ ${prefix}jewelry6 text
ꗄ➺ ${prefix}jewelry7 text
ꗄ➺ ${prefix}jewelry8 text
ꗄ➺ ${prefix}metalh text
ꗄ➺ ${prefix}golden text
ꗄ➺ ${prefix}glitter text
ꗄ➺ ${prefix}glitter2 text
ꗄ➺ ${prefix}glitter3 text
ꗄ➺ ${prefix}glitter4 text
ꗄ➺ ${prefix}glitter5 text
ꗄ➺ ${prefix}glitter6 text
ꗄ➺ ${prefix}glitter7 text
ꗄ➺ ${prefix}metale text
ꗄ➺ ${prefix}carbon text
ꗄ➺ ${prefix}candy text
ꗄ➺ ${prefix}metalb text
ꗄ➺ ${prefix}gemb text
ꗄ➺ ${prefix}3dchrome text
ꗄ➺ ${prefix}metalb2 text
ꗄ➺ ${prefix}metalg text
╰❒ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
ꗄ➺ ${prefix}ttp [text]
ꗄ➺ ${prefix}attp [text]
ꗄ➺ ${prefix}afk [reason]
ꗄ➺ ${prefix}translate kode_bahasa text
ꗄ➺ ${prefix}kalkulator [query]
ꗄ➺ ${prefix}smeme [text]
ꗄ➺ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
ꗄ➺ ${prefix}kuismath
ꗄ➺ ${prefix}tebak [option]
ꗄ➺ ${prefix}tekateki
ꗄ➺ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
ꗄ➺ ${prefix}chika
ꗄ➺ ${prefix}delvira
ꗄ➺ ${prefix}ayu
ꗄ➺ ${prefix}bunga
ꗄ➺ ${prefix}aura
ꗄ➺ ${prefix}nisa
ꗄ➺ ${prefix}ziva
ꗄ➺ ${prefix}yana
ꗄ➺ ${prefix}viona
ꗄ➺ ${prefix}syania
ꗄ➺ ${prefix}riri
ꗄ➺ ${prefix}syifa
ꗄ➺ ${prefix}mama_gina
ꗄ➺ ${prefix}alcakenya
ꗄ➺ ${prefix}mangayutri
ꗄ➺ ${prefix}rikagusriani
ꗄ➺ ${prefix}asupan
ꗄ➺ ${prefix}bocil
ꗄ➺ ${prefix}geayubi
ꗄ➺ ${prefix}santuy
ꗄ➺ ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
ꗄ➺ ${prefix}china 
ꗄ➺ ${prefix}indonesia 
ꗄ➺ ${prefix}malaysia 
ꗄ➺ ${prefix}thailand 
ꗄ➺ ${prefix}korea 
ꗄ➺ ${prefix}japan 
ꗄ➺ ${prefix}vietnam 
ꗄ➺ ${prefix}jenni 
ꗄ➺ ${prefix}jiso 
ꗄ➺ ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
ꗄ➺ My God
ꗄ➺ My Parents
ꗄ➺ Fatih A.
ꗄ➺ Ferdi
ꗄ➺ DikaArdnt
ꗄ➺ Mhankbarbar
ꗄ➺ Nurutomo
ꗄ➺ Rashid
ꗄ➺ ZeeoneOfc
ꗄ➺ AkiraYT
ꗄ➺ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
ꗄ➺ ${prefix}nomorhoki 887435047326
ꗄ➺ ${prefix}artimimpi [query]
ꗄ➺ ${prefix}artinama [query]
ꗄ➺ ${prefix}ramaljodoh
ꗄ➺ ${prefix}ramaljodohbali
ꗄ➺ ${prefix}suamiistri
ꗄ➺ ${prefix}ramalcinta
ꗄ➺ ${prefix}cocoknama
ꗄ➺ ${prefix}pasangan
ꗄ➺ ${prefix}jadiannikah
ꗄ➺ ${prefix}sifatusaha
ꗄ➺ ${prefix}rezeki
ꗄ➺ ${prefix}pekerjaan
ꗄ➺ ${prefix}nasib
ꗄ➺ ${prefix}penyakit
ꗄ➺ ${prefix}tarot
ꗄ➺ ${prefix}fengshui
ꗄ➺ ${prefix}haribaik
ꗄ➺ ${prefix}harisangar
ꗄ➺ ${prefix}harisial
ꗄ➺ ${prefix}nagahari
ꗄ➺ ${prefix}arahrezeki
ꗄ➺ ${prefix}peruntungan
ꗄ➺ ${prefix}weton
ꗄ➺ ${prefix}karakter
ꗄ➺ ${prefix}keberuntungan
ꗄ➺ ${prefix}memancing
ꗄ➺ ${prefix}masasubur
ꗄ➺ ${prefix}zodiak 
╰❒ ${prefix}shio [query]
`
}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
ꗄ➺ ${prefix}youtubegold
ꗄ➺ ${prefix}youtubesilver
ꗄ➺ ${prefix}facebookgold
ꗄ➺ ${prefix}facebooksilver
ꗄ➺ ${prefix}instagramgold
ꗄ➺ ${prefix}instagramsilver
ꗄ➺ ${prefix}twittergold
ꗄ➺ ${prefix}twittersilver
ꗄ➺ ${prefix}retrotext
ꗄ➺ ${prefix}halloweenbats
ꗄ➺ ${prefix}texthalloween
ꗄ➺ ${prefix}cardhalloween
ꗄ➺ ${prefix}birthdaycake
ꗄ➺ ${prefix}thundertext
ꗄ➺ ${prefix}icetext
ꗄ➺ ${prefix}milkcake
ꗄ➺ ${prefix}snowontext
ꗄ➺ ${prefix}metalstar
ꗄ➺ ${prefix}dragonfire
ꗄ➺ ${prefix}zombie3d
ꗄ➺ ${prefix}merrycard
ꗄ➺ ${prefix}generalexam 
ꗄ➺ ${prefix}viettel
ꗄ➺ ${prefix}embroider
ꗄ➺ ${prefix}graffititext
ꗄ➺ ${prefix}graffititext2
ꗄ➺ ${prefix}graffititext3
ꗄ➺ ${prefix}covergraffiti
ꗄ➺ ${prefix}moderngold
ꗄ➺ ${prefix}capercut
ꗄ➺ ${prefix}lovecard
ꗄ➺ ${prefix}heartflashlight
ꗄ➺ ${prefix}heartcup
ꗄ➺ ${prefix}sunglightshadow
ꗄ➺ ${prefix}graffiti3d
ꗄ➺ ${prefix}moderngoldsilver
ꗄ➺ ${prefix}moderngold2
ꗄ➺ ${prefix}moderngold3
ꗄ➺ ${prefix}fabrictext
ꗄ➺ ${prefix}masteryavatar
ꗄ➺ ${prefix}messagecoffee
ꗄ➺ ${prefix}announofwin
ꗄ➺ ${prefix}writeblood
ꗄ➺ ${prefix}horrorletter
ꗄ➺ ${prefix}writehorror
ꗄ➺ ${prefix}shirtclub
ꗄ➺ ${prefix}angelwing
ꗄ➺ ${prefix}christmasseason
ꗄ➺ ${prefix}projectyasuo
ꗄ➺ ${prefix}lovelycute
ꗄ➺ ${prefix}womansday
ꗄ➺ ${prefix}covergamepubg
ꗄ➺ ${prefix}nameonheart
ꗄ➺ ${prefix}funnyhalloween
ꗄ➺ ${prefix}lightningpubg
ꗄ➺ ${prefix}greetingcardvideo 
ꗄ➺ ${prefix}christmascard 
ꗄ➺ ${prefix}galaxybat
ꗄ➺ ${prefix}writegalaxy
ꗄ➺ ${prefix}starsnight
ꗄ➺ ${prefix}noeltext
ꗄ➺ ${prefix}textcakes
ꗄ➺ ${prefix}pubgbirthday
ꗄ➺ ${prefix}galaxywallpaper
ꗄ➺ ${prefix}pubgglicthvideo 
ꗄ➺ ${prefix}pubgmascotlogo
ꗄ➺ ${prefix}realembroidery
ꗄ➺ ${prefix}vintagetelevision
ꗄ➺ ${prefix}funnyanimations
ꗄ➺ ${prefix}glowingtext
ꗄ➺ ${prefix}textonglass
ꗄ➺ ${prefix}cartoonstyle
ꗄ➺ ${prefix}multicolor
ꗄ➺ ${prefix}watercolor2
ꗄ➺ ${prefix}textsky
ꗄ➺ ${prefix}summerbeach
ꗄ➺ ${prefix}1917text
ꗄ➺ ${prefix}puppycute
╰❒ ${prefix}rosebirthday`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
ꗄ➺ ${prefix}awoawo
ꗄ➺ ${prefix}benedict
ꗄ➺ ${prefix}chat
ꗄ➺ ${prefix}dbfly
ꗄ➺ ${prefix}dino_kuning
ꗄ➺ ${prefix}doge
ꗄ➺ ${prefix}gojosatoru
ꗄ➺ ${prefix}hope_boy
ꗄ➺ ${prefix}jisoo
ꗄ➺ ${prefix}kr_robot
ꗄ➺ ${prefix}kucing
ꗄ➺ ${prefix}lonte
ꗄ➺ ${prefix}manusia_lidi
ꗄ➺ ${prefix}menjamet
ꗄ➺ ${prefix}meow
ꗄ➺ ${prefix}nicholas
ꗄ➺ ${prefix}patrick
ꗄ➺ ${prefix}popoci
ꗄ➺ ${prefix}sponsbob
ꗄ➺ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
`}
