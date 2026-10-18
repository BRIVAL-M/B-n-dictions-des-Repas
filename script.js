// Dictionnaire des traductions de l'interface
// Dictionnaire des traductions de l'interface
const uiTranslations = {
    fr: {
        title: "Bénédictions",
        menuTitle: "Menu",
        langTitle: "🌍 Langue / Language",
        festivalsTitle: "🎊 Jours de fête",
        festivalsDesc: "Remplace les prières habituelles par celles des fêtes.",
        normalDay: "-- Jour normal --",
        favTitle: "❤️ Favoris",
        clickHint: "Cliquez sur l'image",
        noFavs: "Aucun favori pour le moment.",
        designedBy: "CONÇU ET DÉVELOPPÉ PAR",
        infoTitle: "ℹ️ À propos",
        infoDesc: "Ces prières sont extraites du livre de prières des moines de l'abbaye de Saint-Wandrille."
    },
    en: {
        title: "Blessings",
        menuTitle: "Menu",
        langTitle: "🌍 Language / Langue",
        festivalsTitle: "🎊 Feast Days",
        festivalsDesc: "Replace usual prayers with feast day prayers.",
        normalDay: "-- Normal Day --",
        favTitle: "❤️ Favorites",
        clickHint: "Click on the image",
        noFavs: "No favorites yet.",
        designedBy: "DESIGNED AND DEVELOPED BY",
        infoTitle: "ℹ️ About",
        infoDesc: "These prayers are taken from the prayer book of the monks of Saint-Wandrille Abbey."
    },
    vi: {
        title: "Cầu Nguyện",
        menuTitle: "Danh mục",
        langTitle: "🌍 Ngôn ngữ / Language",
        festivalsTitle: "🎊 Ngày Lễ",
        festivalsDesc: "Thay thế các lời cầu nguyện thường ngày bằng lời cầu nguyện ngày lễ.",
        normalDay: "-- Ngày thường --",
        favTitle: "❤️ Yêu thích",
        clickHint: "Nhấn vào hình ảnh",
        noFavs: "Chưa có mục yêu thích.",
        designedBy: "THIẾT KẾ VÀ PHÁT TRIỂN BỞI",
        infoTitle: "ℹ️ Giới thiệu",
        infoDesc: "Những lời cầu nguyện này được trích từ sách cầu nguyện của các đan sĩ tu viện Saint-Wandrille."
    }
};

// Base de données intégrale des prières traduites (FR, EN, VI)
const prieres = {
    fr: {
        midi: [
            "M.01 Seigneur Jésus, sois avec nous tandis que nous partageons ce repas pour refaire nos forces et bénis la nourriture que nous allons prendre.",
            "M.02 Béni sois-tu, Seigneur notre Dieu, toi qui donnes la nourriture à tout être vivant ; rends nos coeurs ouverts et généreux pour te glorifier, et partager avec joie ce que nous recevons de ta main.",
            "M.03 Béni sois-tu, Seigneur notre Dieu, en ton Fils Jésus venu dans la faiblesse pour nous donner sa force. Accorde-nous maintenant de prendre ce repas dans la joie et l'action de grâce.",
            "M.04 Père des cieux, sois béni pour ce repas fraternel. Puisque l'homme ne vit pas seulement de pain, donne-nous faim de ta parole, maintenant et toujours.",
            "M.05 Seigneur, nous te louons. Tout ce qui est bon vient de toi ; bénis la nourriture de ce repas fraternel et accorde-nous d'être toujours unis avec toi-même et entre nous.",
            "M.06 Nous te rendons grâce, ô notre Père, pour ce repas qui nous rassemble. Accorde-nous de prendre notre nourriture avec joie et simplicité de coeur, fidèles à te louer chaque jour dans la concorde et la charité fraternelle.",
            "M.07 Seigneur, bénis cette nourriture que ta main nous donne dans ton amour ; fais de nous des créatures nouvelles à ton service.",
            "M.08 Bénis, Seigneur, ceux qui sont autour de cette table, mets dans leur coeur la charité, la foi et l'espérance.",
            "M.09 Béni sois-tu, Seigneur, notre Père, toi qui nous donnes de nous retrouver autour de cette table. Fais que cette nourriture que ta main nous donne fortifie nos corps pour ton service.",
            "M.10 Dieu de tendresse et de toute miséricorde, donne à chacun d'entre nous sa part de joie et de paix au cours de ce repas qui nous rassemble.",
            "M.31 Seigneur, fais-nous découvrir ton visage sur celui de chacun d'entre nous présents autour de cette table.",
            "M*.01 Seigneur, tu répands ta largesse sur ton peuple qui a faim sois avec nous au cours de ce repas, bénis notre nourriture.",
            "M*.02 Dans ta tendresse, Seigneur, tu nous prépares une table, tu répands sur nous tes largesses : restaure-nous en ta bonté.",
            "M*.03 Seigneur, toi qui vois le fond de nos coeurs, viens au secours de notre faiblesse : que cette nourriture de nos corps ne nous détourne pas de ton service.",
            "M*.04 Béni sois-tu, Dieu notre Père ! Dans ta miséricorde tu nous nourris des richesses de ta création. Nous te rendons grâce à jamais.",
            "M*.05 Seigneur, toi qui nous a créés pour chanter ta gloire, aide-nous à faire un bon usage de la nourriture que nous allons prendre.",
            "M*.06 Seigneur, bénis le repas que nous allons prendre et bénis ceux qui l'ont préparé ; donne-leur et donne-nous aussi la joie de travailler dans ton amour.",
            "M*.07 Seigneur, donne du pain à ceux qui ont faim, et faim de toi à ceux qui ont du pain, car toi seul, Seigneur, peux rassasier notre désir.",
            "M*.08 Dieu de tendresse et de pitié dont l'amour remplit toute la terre, nous te prions : garde-nous dans la joie et dans la paix de cet amour et bénis la nourriture que nous allons prendre.",
            "M*.09 Merci, Seigneur, pour ce repas ; bénis la nourriture que nous allons prendre, ceux et celles qui l'ont préparée, et fais de nous un signe d'unité.",
            "M*.10 Père éternel, nous te prions et te louons pour ta constante bonté à notre égard. Sois avec nous durant ce repas."
        ],
        soir: [
            "S.01 Dieu notre Père, nous voulons te bénir en tout temps, toi qui nous combles de tes biens. Que nous mangions ou que nous buvions, accorde-nous de tout faire pour ta gloire, et de te rendre grâce à jamais.",
            "S.02 Dieu créateur, dans ta bonté bénis cette nourriture. Donne-nous une force renouvelée pour construire parmi nous ton royaume.",
            "S.03 Seigneur, jette les yeux sur nous, ton peuple, que tu as choisi pour la gloire de ton nom. Que cette nourriture soit pour chacun aide, secours et force.",
            "S.04 Seigneur notre Dieu, que ta bénédiction descende sur nous et sur la nourriture que nous allons prendre. Fais que tous les peuples jouissent abondamment des largesses de ta providence.",
            "S.05 Seigneur notre Dieu, ta bonté est sans mesure ; bénis-nous, bénis cette table et fais que ce repas pris dans la joie augmente à jamais notre vie fraternelle.",
            "S.06 Seigneur, tu es le principe de tout ce que nous avons : nous le recevons de toi. Bénis cette nourriture que ta main nous donne.",
            "S.07 Seigneur, tu nous rassembles pour ce repas ; garde-nous dans l'unité par le lien de la paix, nous qui partageons le même pain.",
            "S.08 Seigneur, c'est toi qui nous a rassemblés autour de cette table ; garde-nous toujours unis sous ton regard paternel.",
            "S.09 A l'heure où vient le soir, Seigneur nous te prions : nous te rendons grâce pour cette journée; bénis ce repas qui nous rassemble.",
            "S.10 Seigneur, nous allons manger le même pain, prendre ensemble les mêmes aliments ; permets-nous de te louer d'un même coeur et de parvenir ensemble près de toi.",
            "S.31 Seigneur, que cette nourriture nous donne la force dont nous avons besoin pour avancer tous ensemble sur la route qui conduit vers toi.",
            "S*.01 Seigneur, jette les yeux sur nous, ton peuple que tu as choisi pour la gloire de ton nom. Que cette nourriture soit pour chacun aide, secours et force.",
            "S*.02 Seigneur, toi qui répands tes bienfaits sur toutes tes créatures, aide les hommes à partager entre eux ce qui leur est nécessaire pour vivre.",
            "S*.03 Dieu éternel et tout-puissant, nous te rendons grâce pour toutes les merveilles de ta création et spécialement pour cette nourriture que tu nous donnes.",
            "S*.04 Seigneur, nous te remercions de la nourriture que nous allons prendre, et de l'amour avec lequel nous la prenons.",
            "S*.05 Père très bon, nous te bénissons. Rends nous fidèles à te remercier pour tous les biens dont tu nous combles.",
            "S*.06 Seigneur notre Dieu, nous te bénissons. Reçois notre action de grâce pour tous les biens que tu nous donnes.",
            "S*.07 Seigneur qui as dit : 'Mange ton pain avec joie' donne à chacun, avec son pain quotidien, sa part de joie et de bonheur.",
            "S*.08 Seigneur, envoie ta bénédiction sur cette table : que nous soyons raffermis dans ton service et celui de nos frères.",
            "S*.09 Dieu de miséricorde, nous voulons te bénir et te glorifier. Nous te rendons grâce pour ce repas que nous allons prendre.",
            "S*.10 Dieu créateur, dans ta bonté bénis cette nourriture. Donne-nous une force renouvelée pour construire parmi nous ton royaume."
        ],
        fetes: {
            "Noël 1": "Béni sois-tu, Seigneur notre Dieu, pour ce repas qui nous réunit dans la joie de Noël...",
            "Noël 2": "Seigneur notre Dieu, toi qui nous as révélé tes mystères et manifesté ton amour par Jésus...",
            "Jeudi-Saint": "Seigneur notre Dieu, ton serviteur Jésus, la veille de sa passion, a soupé avec ses Apôtres...",
            "Vendredi-Saint 1": "Seigneur notre Dieu, tu as envoyé ton Fils comme un serviteur, obéissant jusqu'à la mort de la croix...",
            "Vendredi-Saint 2": "Seigneur notre Dieu, ton Fils a étendu les mains pour unir, par sa croix vivifiante, tous les peuples dispersés...",
            "Samedi-Saint": "Béni sois-tu, Seigneur notre Dieu, toi qui nous combles de tes biens en ton Fils Jésus...",
            "Pâques 1": "Seigneur notre Dieu, toi qui as fait resplendir sur nous ton jour de victoire et de joie...",
            "Pâques 2": "Seigneur notre Dieu, le soir de sa résurrection les disciples ont reconnu ton Fils à la fraction du pain...",
            "Pentecôte 1": "Seigneur notre Dieu, en ce jour tu as répandu ton Esprit sur les Apôtres de ton Fils...",
            "Pentecôte 2": "Béni sois-tu, Seigneur notre Dieu, toi qui nous combles de tes dons. Renouvelle pour nous tes merveilles..."
        }
    },
    en: {
        midi: [
            "M.01 Lord Jesus, be with us as we share this meal to restore our strength, and bless the food we are about to receive.",
            "M.02 Blessed are you, Lord our God, who gives food to all living things; make our hearts open and generous.",
            "M.03 Blessed are you, Lord our God, in your Son Jesus who came in weakness to give us his strength.",
            "M.04 Heavenly Father, be blessed for this fraternal meal. Give us hunger for your word, now and always.",
            "M.05 Lord, we praise you. All good things come from you; bless the food of this fraternal meal.",
            "M.06 We give you thanks, O our Father, for this meal that brings us together.",
            "M.07 Lord, bless this food that your hand gives us in your love; make us new creatures in your service.",
            "M.08 Bless, Lord, those around this table, put charity, faith and hope in their hearts.",
            "M.09 Blessed are you, Lord, our Father, who gives us to meet around this table.",
            "M.10 God of tenderness and all mercy, give each of us our share of joy and peace during this meal.",
            "M.31 Lord, make us discover your face on that of each of us present around this table.",
            "M*.01 Lord, you pour out your bounty on your hungry people; be with us during this meal.",
            "M*.02 In your tenderness, Lord, you prepare a table for us; restore us in your goodness.",
            "M*.03 Lord, who sees the depths of our hearts, come to the aid of our weakness.",
            "M*.04 Blessed are you, God our Father! In your mercy you feed us from the riches of your creation.",
            "M*.05 Lord, you who created us to sing your glory, help us to make good use of this food.",
            "M*.06 Lord, bless the meal we are about to take and bless those who prepared it.",
            "M*.07 Lord, give bread to those who are hungry, and hunger for you to those who have bread.",
            "M*.08 God of tenderness and pity whose love fills the whole earth, we pray to you: keep us in joy.",
            "M*.09 Thank you, Lord, for this meal; bless the food we are about to take, and make us a sign of unity.",
            "M*.10 Eternal Father, we pray and praise you for your constant goodness towards us."
        ],
        soir: [
            "S.01 God our Father, we want to bless you at all times, you who fill us with your gifts.",
            "S.02 Creator God, in your goodness bless this food. Give us renewed strength.",
            "S.03 Lord, cast your eyes upon us, your people, whom you have chosen for the glory of your name.",
            "S.04 Lord our God, may your blessing descend upon us and upon the food we are about to receive.",
            "S.05 Lord our God, your goodness is boundless; bless us, bless this table.",
            "S.06 Lord, you are the source of all that we have: we receive it from you.",
            "S.07 Lord, you gather us for this meal; keep us in unity by the bond of peace.",
            "S.08 Lord, it is you who gathered us around this table; keep us always united.",
            "S.09 At the hour when evening comes, Lord we pray: we thank you for this day.",
            "S.10 Lord, we are going to eat the same bread; allow us to praise you with one heart.",
            "S.31 Lord, may this food give us the strength we need to move forward together.",
            "S*.01 Lord, cast your eyes upon us, your people whom you have chosen.",
            "S*.02 Lord, who pours out your blessings on all your creatures, help men to share.",
            "S*.03 Eternal and almighty God, we thank you for all the wonders of your creation.",
            "S*.04 Lord, we thank you for the food we are about to receive, and the love with which we receive it.",
            "S*.05 Most good Father, we bless you. Make us faithful to thank you.",
            "S*.06 Lord our God, we bless you. Receive our thanksgiving for all your gifts.",
            "S*.07 Lord who said: 'Eat your bread with joy' give to everyone their share of happiness.",
            "S*.08 Lord, send your blessing upon this table: that we may be strengthened in your service.",
            "S*.09 God of mercy, we want to bless and glorify you. We thank you for this meal.",
            "S*.10 Creator God, in your goodness bless this food. Give us renewed strength."
        ],
        fetes: {
            "Noël 1": "Blessed are you, Lord our God, for this meal that unites us in the joy of Christmas...",
            "Noël 2": "Lord our God, you who revealed your mysteries to us and manifested your love through Jesus...",
            "Jeudi-Saint": "Lord our God, your servant Jesus, on the eve of his passion, supped with his Apostles...",
            "Vendredi-Saint 1": "Lord our God, you sent your Son as a servant, obedient unto death on the cross...",
            "Vendredi-Saint 2": "Lord our God, your Son stretched out his hands to unite all scattered peoples...",
            "Samedi-Saint": "Blessed are you, Lord our God, you who fill us with your goods in your Son Jesus...",
            "Pâques 1": "Lord our God, you who made your day of victory and joy shine upon us...",
            "Pâques 2": "Lord our God, on the evening of his resurrection the disciples recognized your Son...",
            "Pentecôte 1": "Lord our God, on this day you poured out your Spirit on the Apostles of your Son...",
            "Pentecôte 2": "Blessed are you, Lord our God, you who fill us with your gifts. Renew your wonders for us..."
        }
    },
    vi: {
        midi: [
            "M.01 Lạy Chúa Giêsu, xin ở cùng chúng con khi chúng con chia sẻ bữa ăn này để phục hồi sức lực, và ban phước cho thức ăn chúng con sắp dùng.",
            "M.02 Chúc tụng Chúa là Thiên Chúa chúng con, Đấng ban thức ăn cho mọi loài; xin mở rộng lòng chúng con.",
            "M.03 Chúc tụng Chúa là Thiên Chúa chúng con, trong Thánh Tử Giêsu đã đến trong sự yếu đuối để ban sức mạnh cho chúng con.",
            "M.04 Lạy Cha trên trời, xin chúc tụng Cha vì bữa ăn huynh đệ này. Xin cho chúng con khao khát lời Cha.",
            "M.05 Lạy Chúa, chúng con ngợi khen Ngài. Mọi điều tốt lành đều đến từ Ngài; xin ban phước cho thức ăn này.",
            "M.06 Chúng con tạ ơn Cha, ôi Cha của chúng con, vì bữa ăn quy tụ chúng con lại với nhau.",
            "M.07 Lạy Chúa, xin ban phước cho thức ăn mà tay Ngài ban cho chúng con trong tình yêu của Ngài.",
            "M.08 Lạy Chúa, xin ban phước cho những người quanh bàn này, xin đặt đức ái, đức tin và niềm hy vọng vào lòng họ.",
            "M.09 Chúc tụng Chúa, lạy Cha chúng con, Đấng cho chúng con gặp gỡ quanh bàn này.",
            "M.10 Lạy Thiên Chúa từ bi và nhân hậu, xin ban cho mỗi người chúng con phần niềm vui và bình an.",
            "M.31 Lạy Chúa, xin cho chúng con nhận ra khuôn mặt Ngài trên khuôn mặt của mỗi người chúng con quanh bàn này.",
            "M*.01 Lạy Chúa, Ngài tuôn đổ sự rộng lượng cho dân Ngài đang đói; xin ở cùng chúng con trong bữa ăn này.",
            "M*.02 Trong sự dịu dàng của Ngài, lạy Chúa, Ngài dọn bàn cho chúng con; xin phục hồi chúng con trong sự nhân từ của Ngài.",
            "M*.03 Lạy Chúa, Đấng thấu rõ cõi lòng chúng con, xin đến trợ giúp sự yếu đuối của chúng con.",
            "M*.04 Chúc tụng Cha là Thiên Chúa! Trong lòng thương xót, Cha nuôi dưỡng chúng con từ sự phong phú của công trình sáng tạo.",
            "M*.05 Lạy Chúa, Đấng tạo dựng chúng con để ca ngợi vinh quang Ngài, xin giúp chúng con sử dụng tốt thức ăn này.",
            "M*.06 Lạy Chúa, xin ban phước cho bữa ăn chúng con sắp dùng và ban phước cho những ai đã chuẩn bị.",
            "M*.07 Lạy Chúa, xin ban bánh cho người đói, và cho người có bánh được khao khát Ngài.",
            "M*.08 Lạy Thiên Chúa từ bi, tình yêu Ngài tràn ngập khắp trái đất, chúng con cầu xin Ngài: xin giữ chúng con trong niềm vui.",
            "M*.09 Tạ ơn Chúa vì bữa ăn này; xin ban phước cho thức ăn chúng con sắp dùng, và biến chúng con thành dấu chỉ của sự hiệp nhất.",
            "M*.10 Lạy Cha hằng hữu, chúng con cầu nguyện và ngợi khen Cha vì lòng nhân từ không ngừng của Cha."
        ],
        soir: [
            "S.01 Lạy Thiên Chúa là Cha, chúng con muốn chúc tụng Cha luôn mãi, Đấng ban đầy hồng ân cho chúng con.",
            "S.02 Lạy Thiên Chúa Tạo Hóa, trong sự nhân từ của Ngài, xin ban phước cho thức ăn này. Xin ban cho chúng con sức mạnh mới.",
            "S.03 Lạy Chúa, xin đoái nhìn dân Ngài, những người Ngài đã chọn vì vinh quang danh Ngài.",
            "S.04 Lạy Chúa là Thiên Chúa, xin phúc lành của Ngài ngự xuống trên chúng con và trên thức ăn này.",
            "S.05 Lạy Chúa là Thiên Chúa, lòng nhân từ của Ngài là vô biên; xin ban phước cho chúng con và bàn ăn này.",
            "S.06 Lạy Chúa, Ngài là nguồn cội của mọi sự chúng con có: chúng con lãnh nhận từ Ngài.",
            "S.07 Lạy Chúa, Ngài quy tụ chúng con trong bữa ăn này; xin giữ chúng con hiệp nhất trong hòa bình.",
            "S.08 Lạy Chúa, chính Ngài đã quy tụ chúng con quanh bàn này; xin giữ chúng con luôn đoàn kết.",
            "S.09 Khi bóng chiều buông, lạy Chúa chúng con cầu xin: chúng con tạ ơn Ngài vì ngày hôm nay.",
            "S.10 Lạy Chúa, chúng con sẽ cùng ăn một tấm bánh; xin cho chúng con đồng thanh ngợi khen Ngài.",
            "S.31 Lạy Chúa, xin cho thức ăn này ban sức mạnh để chúng con cùng nhau tiến bước.",
            "S*.01 Lạy Chúa, xin đoái nhìn dân Ngài, những người Ngài đã chọn.",
            "S*.02 Lạy Chúa, Đấng tuôn đổ ân huệ trên mọi thụ tạo, xin giúp con người biết sẻ chia.",
            "S*.03 Lạy Thiên Chúa toàn năng hằng hữu, chúng con tạ ơn Ngài vì mọi kỳ công sáng tạo.",
            "S*.04 Lạy Chúa, chúng con tạ ơn Ngài vì thức ăn chúng con sắp dùng, và vì tình yêu mà chúng con lãnh nhận.",
            "S*.05 Lạy Cha rất nhân từ, chúng con chúc tụng Cha. Xin cho chúng con trung thành tạ ơn Cha.",
            "S*.06 Lạy Chúa là Thiên Chúa, chúng con chúc tụng Ngài. Xin nhận lời tạ ơn vì mọi ơn lành Ngài ban.",
            "S*.07 Lạy Chúa, Đấng đã phán: 'Hãy hân hoan ăn bánh của con', xin ban cho mỗi người phần hạnh phúc.",
            "S*.08 Lạy Chúa, xin ban phước lành xuống bàn ăn này: để chúng con được vững mạnh trong việc phụng sự Ngài.",
            "S*.09 Lạy Thiên Chúa từ bi, chúng con muốn chúc tụng và tôn vinh Ngài. Chúng con tạ ơn vì bữa ăn này.",
            "S*.10 Lạy Thiên Chúa Tạo Hóa, trong sự nhân từ của Ngài, xin ban phước cho thức ăn này."
        ],
        fetes: {
            "Noël 1": "Chúc tụng Chúa là Thiên Chúa chúng con, vì bữa ăn quy tụ chúng con trong niềm vui Giáng Sinh...",
            "Noël 2": "Lạy Chúa là Thiên Chúa, Đấng đã mạc khải mầu nhiệm và thể hiện tình yêu qua Chúa Giêsu...",
            "Jeudi-Saint": "Lạy Chúa là Thiên Chúa, tôi tớ Ngài là Chúa Giêsu, vào đêm trước cuộc khổ nạn, đã ăn tối cùng các Tông Đồ...",
            "Vendredi-Saint 1": "Lạy Chúa là Thiên Chúa, Ngài đã sai Thánh Tử đến như một người tôi tớ, vâng lời cho đến chết trên thập giá...",
            "Vendredi-Saint 2": "Lạy Chúa là Thiên Chúa, Thánh Tử Ngài đã dang tay để quy tụ mọi dân tộc tản mác...",
            "Samedi-Saint": "Chúc tụng Chúa là Thiên Chúa chúng con, Đấng ban đầy hồng ân trong Thánh Tử Giêsu...",
            "Pâques 1": "Lạy Chúa là Thiên Chúa, Đấng đã làm cho ngày chiến thắng và niềm vui bừng sáng trên chúng con...",
            "Pâques 2": "Lạy Chúa là Thiên Chúa, vào buổi tối ngày Phục Sinh, các môn đệ đã nhận ra Thánh Tử khi bẻ bánh...",
            "Pentecôte 1": "Lạy Chúa là Thiên Chúa, trong ngày này Ngài đã ban Thánh Thần xuống trên các Tông Đồ...",
            "Pentecôte 2": "Chúc tụng Chúa là Thiên Chúa chúng con, Đấng ban đầy ân tứ. Xin đổi mới những kỳ công của Ngài..."
        }
    }
};

// Gestion de l'état
let currentLang = localStorage.getItem('appLang') || 'fr';
let currentPrayerText = "";
let favorites = JSON.parse(localStorage.getItem('prieresFavoris')) || [];

const langSelect = document.getElementById('lang-select');
langSelect.value = currentLang;

const mainImage = document.getElementById('main-image');
const prayerContainer = document.getElementById('prayer-container');
const prayerText = document.getElementById('prayer-text');
const favBtn = document.getElementById('fav-btn');
const favIcon = favBtn.querySelector('i');
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const favoritesList = document.getElementById('favorites-list');
const feteSelect = document.getElementById('fete-select');

window.onload = () => {
    definirImageSelonHeure();
    updateUITranslations();
    renderFavorites();
};

langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('appLang', currentLang);
    updateUITranslations();
    renderFavorites(); // On rafraîchit la liste des favoris (qui restent dans leur langue d'origine)
    if (!prayerContainer.classList.contains('hidden')) {
        afficherPriereAleatoire(); // Rafraîchir la prière affichée dans la bonne langue
    }
});

function updateUITranslations() {
    const dict = uiTranslations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerText = dict[key];
    });
}

function definirImageSelonHeure() {
    const heure = new Date().getHours();
    if (heure < 18) {
        mainImage.src = "img dejeuner.png";
    } else {
        mainImage.src = "img souper.png";
    }
}

mainImage.addEventListener('click', () => {
    mainImage.classList.add('clicked');
    setTimeout(() => {
        mainImage.classList.remove('clicked');
    }, 150);
    afficherPriereAleatoire();
});

function afficherPriereAleatoire() {
    let poolPrieres = [];
    const feteSelectionnee = feteSelect.value;
    const db = prieres[currentLang];

    if (feteSelectionnee && db.fetes[feteSelectionnee]) {
        poolPrieres = [db.fetes[feteSelectionnee]];
    } else {
        const heure = new Date().getHours();
        poolPrieres = (heure < 18) ? db.midi : db.soir;
    }

    let nouvellePriere = currentPrayerText;
    if (poolPrieres.length > 1) {
        while (nouvellePriere === currentPrayerText) {
            const randomIndex = Math.floor(Math.random() * poolPrieres.length);
            nouvellePriere = poolPrieres[randomIndex];
        }
    } else {
        nouvellePriere = poolPrieres[0];
    }

    currentPrayerText = nouvellePriere;
    prayerText.innerText = currentPrayerText;
    updateFavButtonState();
    prayerContainer.classList.remove('hidden');
}

favBtn.addEventListener('click', () => {
    if (favorites.includes(currentPrayerText)) {
        favorites = favorites.filter(p => p !== currentPrayerText);
    } else {
        favorites.push(currentPrayerText);
    }
    localStorage.setItem('prieresFavoris', JSON.stringify(favorites));
    updateFavButtonState();
    renderFavorites();
});

function updateFavButtonState() {
    if (favorites.includes(currentPrayerText)) {
        favBtn.classList.add('active');
        favIcon.classList.remove('far');
        favIcon.classList.add('fas');
    } else {
        favBtn.classList.remove('active');
        favIcon.classList.remove('fas');
        favIcon.classList.add('far');
    }
}

function renderFavorites() {
    favoritesList.innerHTML = "";
    if (favorites.length === 0) {
        const emptyMsg = uiTranslations[currentLang].noFavs;
        favoritesList.innerHTML = `<p style='color:#888; font-size:0.9rem;'>${emptyMsg}</p>`;
        return;
    }

    favorites.forEach((priere, index) => {
        const li = document.createElement('li');
        li.innerText = priere;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.className = 'delete-fav-btn';
        deleteBtn.onclick = () => supprimerFavori(index);
        
        li.appendChild(deleteBtn);
        favoritesList.appendChild(li);
    });
}

function supprimerFavori(index) {
    favorites.splice(index, 1);
    localStorage.setItem('prieresFavoris', JSON.stringify(favorites));
    renderFavorites();
    updateFavButtonState();
}

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
    overlay.classList.add('show');
});

closeMenuBtn.addEventListener('click', fermerMenu);
overlay.addEventListener('click', fermerMenu);

function fermerMenu() {
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
}

/// Maj---1.1