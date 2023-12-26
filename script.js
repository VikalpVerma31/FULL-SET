const questions = [
    {
        question:"हिमालय भारत के किस भाग में स्थित है ?        ",
        answers: [
            { text: "पूरब            ", correct: false},
            { text: "पश्चिम            ", correct: false},
            { text: "उत्तर            ", correct: true},
            { text: "दक्षिण            ", correct: false},
        ] 
    },
    {
        question:"धरातल के वर्तमान स्वरूप की संरचना तथा परिवर्तन के संदर्भ में, निम्न में से कौन-सी प्रक्रिया अन्य तीन प्रक्रियाओं से भिन्न है?",
        answers: [
            { text: "भूकम्पीय प्रक्रियाएँ            ", correct: true},
            { text: "अपक्ष", correct: false},
            { text: "अपरदन", correct: false},
            { text: "निक्षेपण            ", correct: false},
        ] 
    },
    {
        question:"भारत का अत्याधिक उत्पादक क्षेत्र कौन-सा है ?        ",
        answers: [
            { text: "प्रायद्वीपीय पठार            ", correct: false},
            { text: "भारतीय रेगिस्तान            ", correct: false},
            { text: "तटीय मैदान            ", correct: false},
            { text: "उत्तरी मैदान            ", correct: true},
        ] 
    },
    {
        question:"तीन ओर से समुद्र से घिरे भू-भाग को कहा जाता है        ",
        answers: [
            { text: "तट", correct: false},
            { text: "द्वीप            ", correct: false},
            { text: "प्रायद्वीप            ", correct: true},
            { text: "उपरोक्त में से कोई नहीं            ", correct: false},
        ] 
    },
    {
        question:"बाढ वाले मैदान तथा युवा निक्षेप क्या कहलाते है ?        ",
        answers: [
            { text: "बागंर            ", correct: false},
            { text: "खादर            ", correct: true},
            { text: "भाबर            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },
    {
        question:"भारत में खारे पानी की सबसे बड़ी झील कौन सी है?        ",
        answers: [
            { text: "सांभर झील            ", correct: false},
            { text: "चिल्का झील            ", correct: true},
            { text: "बुलर झील            ", correct: false},
            { text: "उल्लर झील            ", correct: false},
        ] 
    },
    {
        question:"भारत के पूर्वी भाग में म्यांमार के साथ अपनी सीमा बनाने वाली पर्वत श्रृंखलाओं को सामूहिक रूप से कहा जाता है        ",
        answers: [
            { text: "हिमाचल            ", correct: false},
            { text: "उत्तरांचल            ", correct: false},
            { text: "पूर्वांचल            ", correct: true},
            { text: "उपरोक्त में से कोई नहीं।            ", correct: false},
        ] 
    },
    {
        question:"पश्चिमी घाट का सबसे ऊँचा शिखर कौन-सा है ?        ",
        answers: [
            { text: "अनाई मुड़ी            ", correct: true},
            { text: "दोदा बेटा            ", correct: false},
            { text: "महेंद्र गिरी            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },
    {
        question:"मृदा के निर्माण तथा रंग के लिए निम्न में से कौन से तत्व उत्तरदायी है?        ",
        answers: [
            { text: "सिंचाई की सुविधाएँ            ", correct: false},
            { text: "वनस्पति का जलमग्न होना            ", correct: false},
            { text: "चट्टानों के विभिन्न प्रकार            ", correct: true},
            { text: "उर्वरकों का उपयोग            ", correct: false},
        ] 
    },
    {
        question:"गोवा के दक्षिण में पश्चिमी तटीय पट्टी को कहा जाता है        ",
        answers: [
            { text: "कोंकण            ", correct: false},
            { text: "उत्तर सरकार            ", correct: false},
            { text: "कोरोमंडल तट            ", correct: false},
            { text: "मालाबार तट            ", correct: true},
        ] 
    },
    {
        question:"प्रायद्वीपीय पठार की मृदा किस तरह की होती है ?        ",
        answers: [
            { text: "काली            ", correct: true},
            { text: "लाल            ", correct: false},
            { text: "भूरी            ", correct: false},
            { text: "इनमें से कोई नहीं।", correct: false},
        ] 
    },
    {
        question:"प्राचीन समय में हिमालय के स्थान पर कौन सा सागर अवस्थित था?        ",
        answers: [
            { text: "प्रशांत महासागर            ", correct: false},
            { text: "पैंथालासा            ", correct: false},
            { text: "टेथिस सागर            ", correct: true},
            { text: "हिंद महासागर            ", correct: false},
        ] 
    },
    {
        question:"पूर्वी घाट की सबसे ऊँची चोटी है        ",
        answers: [
            { text: "अनाई मुदिक            ", correct: false},
            { text: "कंचनजंगा            ", correct: false},
            { text: "महेंद्रगिरि            ", correct: true},
            { text: "खासी।            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन-सा वक्तव्य प्लेट टैक्टोनिक के विषय में सत्य है?        ",
        answers: [
            { text: "भूपर्पटी विभिन्न कठोर तथा कोमल चट्टानों से बनी है।            ", correct: false},
            { text: "पृथ्वी की भूपर्पटी सात मुख्य तथा अनेक गौण चट्टानों से बनी है।            ", correct: true},
            { text: "पृथ्वी की भूपर्पटी पर अनेक भू-स्थल विद्यमान हैं।            ", correct: false},
            { text: "पृथ्वी की भूपर्पटी अपक्षय की प्रक्रियाओं के फलस्वरूप बदलती रहती है।            ", correct: false},
        ] 
    },
    {
        question:"विश्व की सबसे ऊँची चोटी कौन सी है ?        ",
        answers: [
            { text: "महेंद्रगिरि            ", correct: false},
            { text: "कंचनजंगा            ", correct: false},
            { text: "नंदा देवी            ", correct: false},
            { text: "माउंट एवरेस्ट            ", correct: true},
        ] 
    },
    {
        question:"विश्व की सबसे ऊंची चोटी कौन सी है?        ",
        answers: [
            { text: "धौलागिरी            ", correct: false},
            { text: "कंचनजंगा            ", correct: false},
            { text: "माउंट एवरेस्ट            ", correct: true},
            { text: "K2", correct: false},
        ] 
    },
    {
        question:"माउंट एवरेस्ट किस देश में स्थित है?        ",
        answers: [
            { text: "भारत            ", correct: false},
            { text: "नेपाल            ", correct: true},
            { text: "चीन            ", correct: false},
            { text: "बांग्लादेश            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से किस चट्टान का प्रयोग ताजमहल के निर्माण में किया गया है ?        ",
        answers: [
            { text: "ग्रेनाइट            ", correct: false},
            { text: "मार्बल            ", correct: true},
            { text: "अवसादी            ", correct: false},
            { text: "एग्न्यू            ", correct: false},
        ] 
    },
    {
        question:"मसूरी किस राज्य में स्थित है?        ",
        answers: [
            { text: "उत्तराखंड                ", correct: true},
            { text: "हिमाचल प्रदेश            ", correct: false},
            { text: "सिक्किम            ", correct: false},
            { text: "जम्मू और कश्मीर            ", correct: false},
        ] 
    },
    {
        question:"भारत की सबसे ऊंची चोटी कौन सी है?        ",
        answers: [
            { text: "माउंट एवरेस्ट            ", correct: false},
            { text: "K2", correct: true},
            { text: "नंदादेवी            ", correct: false},
            { text: "उत्तराखंड            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से किसका प्रयोग टैल्कम पाऊडर बनाने में किया जाता है?        ",
        answers: [
            { text: "मार्बल            ", correct: false},
            { text: "ग्रेनाइट            ", correct: false},
            { text: "आग्नेय चट्टानें            ", correct: false},
            { text: "सोप स्टोन            ", correct: true},
        ] 
    },

    {
        question:"सिंधु और सतलुज नदी के बीच स्थित हिमालय को के रूप में जाना जाता है        ",
        answers: [
            { text: "असम हिमालय            ", correct: false},
            { text: "नेपाल हिमालय            ", correct: false},
            { text: "पंजाब हिमालय            ", correct: true},
            { text: "कुमाऊं हिमालय            ", correct: false},
        ] 
    },

    {
        question:"लाकाडिव, मिनिके और एमिनडिव को 1973 से किस नाम से जाना जाता है?        ",
        answers: [
            { text: "अंडमान द्वीप            ", correct: false},
            { text: "निकोबार द्वीप            ", correct: false},
            { text: "लक्षद्वीप            ", correct: true},
            { text: "अंडमान और निकोबार दोनों द्वीप            ", correct: false},
        ] 
    },

    {
        question:"सतलुज और काली नदियों के बीच स्थित हिमालय को कहा जाता है        ",
        answers: [
            { text: "कुमाऊं हिमालय            ", correct: true},
            { text: "नेपाल हिमालय            ", correct: false},
            { text: "पंजाब हिमालय            ", correct: false},
            { text: "असम हिमालय            ", correct: false},
        ] 
    },

    {
        question:"जब प्लेटें एक-दूसरे के समानान्तर चलती है तो निम्न में से किस प्लेट सीमा का निर्माण होता है?        ",
        answers: [
            { text: "अपसारी प्लेट            ", correct: false},
            { text: "ट्रांसफार्म प्लेट            ", correct: true},
            { text: "समानांतर प्लेट            ", correct: false},
            { text: "अभिसारी प्लेट            ", correct: false},
        ] 
    },

    {
        question:"काली और तीस्ता नदी के बीच स्थित हिमालय को के रूप में जाना जाता है        ",
        answers: [
            { text: "कुमाऊं हिमालय            ", correct: false},
            { text: "नेपाल हिमालय            ", correct: true},
            { text: "असम हिमालय            ", correct: false},
            { text: "पंजाब हिमालय            ", correct: false},
        ] 
    },

    {
        question:"लूनी नदी कहां बहती है?        ",
        answers: [
            { text: "थार मरुस्थल में            ", correct: true},
            { text: "उत्तर के मैदान में            ", correct: false},
            { text: "कश्मीर में            ", correct: false},
            { text: "प्रायद्वीप पठार में            ", correct: false},
        ] 
    },

    {
        question:"तीस्ता और दिहांग नदियों के बीच स्थित हिमालय को कहा जाता है        ",
        answers: [
            { text: "नेपाल हिमालय            ", correct: false},
            { text: "कुमाऊं हिमालय            ", correct: false},
            { text: "असम हिमालय            ", correct: true},
            { text: "पंजाब हिमालय            ", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन-सा देश गोंडवाना भू-भाग स्थल का एक भाग है ?        ",
        answers: [
            { text: "पाकिस्तान            ", correct: false},
            { text: "रूस            ", correct: false},
            { text: "दक्षिणी अफ्रीका            ", correct: true},
            { text: "कनाडा            ", correct: false},
        ] 
    },

    {
        question:"माजुली दुनिया का सबसे बड़ा बसा हुआ नदी द्वीप है। यह किस नदी में स्थित है?        ",
        answers: [
            { text: "सिंधु            ", correct: false},
            { text: "सतलजो            ", correct: false},
            { text: "ब्रह्मपुत्र            ", correct: true},
            { text: "गंगा                ", correct: false},
        ] 
    },

    {
        question:"दक्षिण भारत की सबसे ऊंची चोटी इनमें से कौन सी है?        ",
        answers: [
            { text: "डोडा बेटा            ", correct: false},
            { text: "अनाईमुडी            ", correct: true},
            { text: "महेंद्रगिरी            ", correct: false},
            { text: "पारसनाथ            ", correct: false},
        ] 
    },

    {
        question:"भारत का एकमात्र सक्रिय ज्वालामुखी पाया जाता है-        ",
        answers: [
            { text: "अंडमान और निकोबार            ", correct: true},
            { text: "लक्षद्वीप            ", correct: false},
            { text: "हिमाचल प्रदेश            ", correct: false},
            { text: "सिक्किम            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन भारत का प्राचीनतम भू-स्थल है ?        ",
        answers: [
            { text: "हिमालय पर्वत                ", correct: false},
            { text: "अरावली            ", correct: false},
            { text: "प्रायद्वीपीय पठार            ", correct: true},
            { text: "तटीय क्षेत्र            ", correct: false},
        ] 
    },

    {
        question:"प्लेट विवर्तनिक सिद्धांत से पृथ्वी की ऊपरी पर्पटी कैसी बनी है ?        ",
        answers: [
            { text: "पााच बडी प्लेटो से            ", correct: false},
            { text: "छः बडी प्लेटो से            ", correct: false},
            { text: "सात बडी प्लेटो से            ", correct: true},
            { text: "सात बडी तथा कुछ छोटी प्लेटो से            ", correct: false},
        ] 
    },

    {
        question:"हिमालय से निकलने वाली नदियां, जहां विलुप्त हो जाती हैं उसे क्या कहते हैं?        ",
        answers: [
            { text: "सोना            ", correct: false},
            { text: "खादर            ", correct: false},
            { text: "भाबर            ", correct: true},
            { text: "तराई          ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की प्लेटो के अंदर तथा ऊपर स्थित महाद्वीप शैलो मे दबाव किस के कारण उत्पन्न होता है ?        ",
        answers: [
            { text: "मैदानो की गति के कारण            ", correct: false},
            { text: "प्लेटो की स्थिति के कारण            ", correct: true},
            { text: "भूपर्पटी की गहराई के कारण            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन विश्व के सर्वाधिक ज्वालामुखी तथा भूकम्प प्रभावित क्षेत्र है?        ",
        answers: [
            { text: "प्लेटों के किनारे            ", correct: true},
            { text: " सतह के नीचे            ", correct: false},
            { text: "प्लेटों के आन्तरिक भाग            ", correct: false},
            { text: "समुद्री तल            ", correct: false},
        ] 
    },

    {
        question:"महाद्वीपीय शैलो मे दबाव उत्पन्न होने के क्या परिणाम है?        ",
        answers: [
            { text: "वलन क्रिया            ", correct: false},
            { text: "भ्रंशीकरण            ", correct: false},
            { text: "ज्वालामुखीय क्रिया            ", correct: false},
            { text: "उपरोक्त सभी            ", correct: true},
        ] 
    },

    {
        question:"चिल्का झील भारत के किस राज्य में स्थित है?        ",
        answers: [
            { text: "आंध्र प्रदेश            ", correct: false},
            { text: "तमिल नाडू            ", correct: false},
            { text: "उड़ीसा            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"भूपर्पटी की प्लेटो की गतियों से किसका निर्माण होता है ?        ",
        answers: [
            { text: "अभिसारी परिसीमा का            ", correct: false},
            { text: "अपसारी परिसीमा का            ", correct: false},
            { text: "सुपांतर परिसीमा का            ", correct: false},
            { text: "उपरोक्त सभी            ", correct: true},
        ] 
    },

    {
        question:"भारत का प्रायद्वीपीय पठार निम्न में से किस भूखण्ड का भाग है?        ",
        answers: [
            { text: "अंगारालैंड            ", correct: false},
            { text: "पैन्थालासा            ", correct: false},
            { text: "यूरेशियाई भू-स्थल            ", correct: false},
            { text: "गोंडवाना भू-स्थल            ", correct: true},
        ] 
    },

    {
        question:"भारत में पृथ्वी की सतह का सबसे प्राचीन भाग कौन-सा है ?        ",
        answers: [
            { text: "उत्तरी मैदान            ", correct: false},
            { text: "प्रायद्वीपीय पठार            ", correct: true},
            { text: "हिमालय क्षेत्र            ", correct: false},
            { text: "द्वीप समूह            ", correct: false},
        ] 
    },

    {
        question:"भारत के तमिलनाडु तट पर स्थित मैदान को किस नाम से जाना जाता है?        ",
        answers: [
            { text: "उत्तरी सरकार तट            ", correct: false},
            { text: "कोंकण तट            ", correct: false},
            { text: "मालाबार तट            ", correct: false},
            { text: "कोरोमंडल तट            ", correct: true},
        ] 
    },

    {
        question:"भारत की उत्तरी सीमा पर कौन-सी श्रृंखला है?        ",
        answers: [
            { text: "हिमालय            ", correct: true},
            { text: "अरावली            ", correct: false},
            { text: "सतपुडा            ", correct: false},
            { text: "नीलगिरी            ", correct: false},
        ] 
    },

    {
        question:"पश्चिमी एशिया की पर्वत श्रृंखला तथा हिमालय पर्वत का निर्माण निम्न में से किस कारणवश हुआ?        ",
        answers: [
            { text: "टेथिस सागर में अवसाद के जमाव के कारण।            ", correct: true},
            { text: "अरब सागर में अवसाद के जमाव के कारण।            ", correct: false},
            { text: "पैन्थालासा सागर में अवसाद के जमाव कारण।            ", correct: false},
            { text: "लाल सागर में अवसाद के जमाव के कारण।            ", correct: false},
        ] 
    },

    {
        question:"भारत के पूर्वी भाग में म्यांमार की सीमा का निर्धारण करने वाले पर्वतों का संयुक्त नाम        ",
        answers: [
            { text: "हिमाचल            ", correct: false},
            { text: "पूर्वांचल            ", correct: true},
            { text: "उत्तरांचल            ", correct: false},
            { text: "इनमें कोई नही            ", correct: false},
        ] 
    },

    {
        question:"विश्व की सबसे ऊँची पर्वत श्रेणी कौन-सी है?        ",
        answers: [
            { text: "आल्पस            ", correct: false},
            { text: "हिमालय            ", correct: true},
            { text: "एंडीज            ", correct: false},
            { text: "विंध्याचल            ", correct: false},
        ] 
    },

    {
        question:"जब प्लेटें एक दूसरे के पास आती है तब किस प्रकार की परिसीमा का निर्माण करती है?        ",
        answers: [
            { text: "अभिसारी परिसीमा            ", correct: true},
            { text: "अपसारी परिसीमा            ", correct: false},
            { text: "रूपांतरण परिसीमा            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"भारत मे हिमालय का सबसे ऊँचा शिखर कौन-सा है ?        ",
        answers: [
            { text: "नामचा बरुआ            ", correct: false},
            { text: "अरावली पर्वत            ", correct: false},
            { text: "नंदा देवी            ", correct: false},
            { text: "कंचनजंगा            ", correct: true},
        ] 
    },

    {
        question:"भारत को निम्न में से कितने भौगोलिक भागों में बांटा गया है?        ",
        answers: [
            { text: "3            ", correct: false},
            { text: "4            ", correct: false},
            { text: "5            ", correct: false},
            { text: "6            ", correct: true},
        ] 
    },
    {
        question:"हिमालय की सबसे बाहरी श्रृंखला क्या कहलाती है ?        ",
        answers: [
            { text: "हिमाद्रि            ", correct: false},
            { text: "हिमाचल            ", correct: false},
            { text: "शिवालिक            ", correct: true},
            { text: "धौलाधार            ", correct: false},
        ] 
    },

    {
        question:"पूर्वी घाट का सर्वोच्च शिखर कौन है?        ",
        answers: [
            { text: "अनाईमुडी            ", correct: false},
            { text: "कंचनजंगा            ", correct: false},
            { text: "महेंद्र गिरी            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"हिमालय की सबसे उत्तरी तथा ऊँची श्रृंखला कौन-सी है ?        ",
        answers: [
            { text: "हिमाद्रि            ", correct: true},
            { text: "हिमाचल            ", correct: false},
            { text: "शिवालिक            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },

    {
        question:"गोंडवानालैंड तथा अंगारालैंड निम्न में से किस महाद्वीप का भाग है?        ",
        answers: [
            { text: "यूरेशिया            ", correct: false},
            { text: "उत्तर अमेरिका            ", correct: false},
            { text: "आस्ट्रेलिया            ", correct: false},
            { text: "पेन्जिया            ", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किस का निर्माण संपीडित तथा परिवर्तित शैलो से हुआ है ?        ",
        answers: [
            { text: "हिमाद्रि का            ", correct: false},
            { text: "हिमाचल का            ", correct: true},
            { text: "शिवालिक का            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },

    {
        question:"भारत की एकमात्र सक्रिय ज्वालामुखी किस द्वीप पर स्थित है?        ",
        answers: [
            { text: "बैरन द्वीप            ", correct: true},
            { text: "लक्षद्वीप            ", correct: false},
            { text: "इंदिरा प्वाइंट            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"सतलुज तथा काली नदियो के बीच का हिमालय का भाग किस नाम से जाना जाता है ?        ",
        answers: [
            { text: "कुमाऊं हिमालय            ", correct: true},
            { text: "हिमाचल            ", correct: false},
            { text: "कश्मीर            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },

    {
        question:"हिमालय पर्वत के संदर्भ में, निम्न में से कौन-सा एक तथ्य अन्य तीनों से भिन्न है?        ",
        answers: [
            { text: "हिमाद्रि            ", correct: false},
            { text: "हिमाचल/लघु हिमालय            ", correct: false},
            { text: "शिवालिक            ", correct: false},
            { text: "छोटानागपुर का पठार            ", correct: true},
        ] 
    },

    {
        question:"पूर्वाचल की पहाडिया कौन-सी है ?        ",
        answers: [
            { text: "नागा            ", correct: false},
            { text: "मिजो            ", correct: false},
            { text: "पटकोई            ", correct: false},
            { text: "उपरोक्त सभी            ", correct: true},
        ] 
    },

    {
        question:"प्राचीनतम विशाल महाद्वीप को किस नाम से जाना जाता था?        ",
        answers: [
            { text: "गोंडवाना लैंड            ", correct: false},
            { text: "अंगारा लैंड            ", correct: false},
            { text: "पंथालाशा            ", correct: false},
            { text: "पेंजिया            ", correct: true},
        ] 
    },

    {
        question:"उत्तरी मैदान का निर्माण किस नदी द्वारा बहा कर लाई गई मिट्टी से हुआ है ?        ",
        answers: [
            { text: "सिंधु            ", correct: false},
            { text: "ब्रह्मपुत्र            ", correct: false},
            { text: "गंगा            ", correct: false},
            { text: "उपरोक्त सभी            ", correct: true},
        ] 
    },

    {
        question:"निम्न में से कौन भारत के नवीनतम भू-स्थल है?        ",
        answers: [
            { text: "प्रायद्वीपीय तथा मालवा का पठार            ", correct: false},
            { text: "हिमालय तथा उत्तरी मैदान            ", correct: true},
            { text: "धार का मरूस्थल            ", correct: false},
            { text: "पश्चिमी घाट तथा तटीय मैदान            ", correct: false},
        ] 
    },

    {
        question:"भारत का कौन सा स्थान तीन सागरों के मिलन स्थल पर स्थित है ?        ",
        answers: [
            { text: "पुडुचेरी            ", correct: false},
            { text: "कन्याकुमारी            ", correct: true},
            { text: "गोवा", correct: false},
            { text: "इनमें कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"उत्तरी मैदान में किस तरह की मिट्टी पाई जाती है?        ",
        answers: [
            { text: "काली मिट्टी            ", correct: false},
            { text: "जलोढ़ मिट्टी            ", correct: true},
            { text: "बालूई मिट्टी            ", correct: false},
            { text: "लाल मिट्टी            ", correct: false},
        ] 
    },

    {
        question:"हिमाचल हिमालय निम्न में से किसके लिए प्रसिद्ध है?        ",
        answers: [
            { text: "अत्यधिक वर्षा            ", correct: false},
            { text: "पर्वतीय स्थल            ", correct: true},
            { text: "बड़े मैदान            ", correct: false},
            { text: "हिमपात            ", correct: false},
        ] 
    },

    {
        question:"प्रवाल भित्ति से बना एक द्वीप को किस नाम से जाना जाता है?        ",
        answers: [
            { text: "लक्षद्वीप            ", correct: true},
            { text: "निकोबार द्वीप            ", correct: false},
            { text: "बैरनद्वीप            ", correct: false},
            { text: "इनमें कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"झारखंड इनमें से किस पठार में स्थित है?        ",
        answers: [
            { text: "दक्कन पठार            ", correct: false},
            { text: "मालवा पठार            ", correct: false},
            { text: "कार्बी एंगलोंग पठार            ", correct: false},
            { text: "छोटानागपुर पठार            ", correct: true},
        ] 
    },

    {
        question:"दो नदियों के बीच बने भूभाग को क्या कहा जाता है ?        ",
        answers: [
            { text: "गलियारा            ", correct: false},
            { text: "दोआब            ", correct: true},
            { text: "लैगून            ", correct: false},
            { text: "इनमें कोई            ", correct: false},
        ] 
    },

    {
        question:"पूर्वांचल पहाड़ियों के संदर्भ में, निम्न में से कौन-सा तथ्य अन्य तीनों से भिन        ",
        answers: [
            { text: "पटकाई पहाड़ियाँ            ", correct: false},
            { text: "महादेव पहाड़ियाँ          ", correct: true},
            { text: "पटकाई पहाड़ियाँ            ", correct: false},
            { text: "मिजो और मणिपुर पहाड़ियाँ            ", correct: false},
        ] 
    },

    {
        question:"हिमालय की सर्वाधिक ऊँची श्रृंखला कौन सी है?        ",
        answers: [
            { text: "कंचनजंगा            ", correct: false},
            { text: "काराकोरम            ", correct: false},
            { text: "एवरेस्ट            ", correct: true},
            { text: "इनमें कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"एक स्थलीय भाग जो तीन ओर से समुद्र से घिरा हो :-        ",
        answers: [
            { text: " तट            ", correct: false},
            { text: "प्रायद्वीप            ", correct: true},
            { text: "द्वीप            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },
    {
        question:"भारत में हिमालय की सर्वाधिक ऊँची शृंखला का नाम क्या है?, अथवा, भ पर्वत कौन - सा है ?        ",
        answers: [
            { text: "नंगा पर्वत            ", correct: false},
            { text: "नंदा देवी            ", correct: false},
            { text: "कंचन जंगा            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },
    {
        question:"पिछले कुछ दशकों से कार्बन डाइऑक्साइड की मात्रा में वृद्धि का मुख्य कारण है        ",
        answers: [
            { text: "वनों की कटाई।            ", correct: false},
            { text: "जलवायु परिवर्तन।            ", correct: false},
            { text: "वायुमंडलीय संरचना।            ", correct: false},
            { text: "जीवाश्म ईंधन का जलना।            ", correct: true},
        ] 
    },

    {
        question:"पृथ्वी को चारों ओर से क्या घेरता है?        ",
        answers: [
            { text: "जलमंडल            ", correct: false},
            { text: "स्थलमंडल            ", correct: false},
            { text: "वातावरण            ", correct: true},
            { text: "जीवमंडल            ", correct: false},
        ] 
    },

    {
        question:"कौन सी गैस निवर्तमान स्थलीय विकिरण के लिए अपारदर्शी है?        ",
        answers: [
            { text: "धूल के कण            ", correct: false},
            { text: "ओजोन            ", correct: false},
            { text: "कार्बन डाइऑक्साइड            ", correct: true},
            { text: "जल वाष्प            ", correct: false},
        ] 
    },

    {
        question:"वायुमंडल की सबसे ऊपरी परत है        ",
        answers: [
            { text: "मेसोस्फीयर।            ", correct: false},
            { text: "बाह्यमंडल।            ", correct: true},
            { text: "आयनमंडल।            ", correct: false},
            { text: "स्ट्रैटोस्फियर।            ", correct: false},
        ] 
    },

    {
        question:"प्रदूषण के कारण वातावरण में कार्बन डाइऑक्साइड की अधिकता हो जायेगी        ",
        answers: [
            { text: "पृथ्वी का तापमान बढ़ना।            ", correct: true},
            { text: "पृथ्वी का तापमान गिरना।            ", correct: false},
            { text: "मौसम की घटना में कमी।            ", correct: false},
            { text: "ओजोन परत का मोटा होना।            ", correct: false},
        ] 
    },

    {
        question:"कौन सा क्षेत्र क्षोभमंडल को समतापमंडल से अलग करता है?        ",
        answers: [
            { text: "मेसोपॉज़।            ", correct: false},
            { text: "ट्रोपोपॉज़            ", correct: true},
            { text: "आयनोस्पाज।            ", correct: false},
            { text: "स्ट्रैटोपॉज़।            ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी अधिक अवशोषित करती है        ",
        answers: [
            { text: "आर्द्रता.            ", correct: false},
            { text: " गर्मी.            ", correct: true},
            { text: "गैसें।            ", correct: false},
            { text: "जल वाष्प।            ", correct: false},
        ] 
    },

    {
        question:"कौन सा क्षेत्र समताप मंडल के ऊपर स्थित है?",
        answers: [
            { text: "मेसोस्फीयर।            ", correct: true},
            { text: "बाह्यमंडल।            ", correct: false},
            { text: "आयनमंडल।            ", correct: false},
            { text: "उपरोक्त में से कोई नहीं।            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी गैस पराबैंगनी किरणों को अवशोषित करती है?        ",
        answers: [
            { text: "कार्बन डाइऑक्साइड            ", correct: false},
            { text: "नियॉन            ", correct: false},
            { text: "ओजोन            ", correct: true},
            { text: "नाइट्रोजन            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी गैस वायुमंडल का प्रमुख भाग बनाती है?        ",
        answers: [
            { text: "ऑक्सीजन            ", correct: false},
            { text: "नाइट्रोजन            ", correct: true},
            { text: "आर्गन            ", correct: false},
            { text: "कार्बन डाइऑक्साइड            ", correct: false},
        ] 
    },

    {
        question:"यह वायुमंडल का एक तत्व है        ",
        answers: [
            { text: "ज्वार ।            ", correct: false},
            { text: "दबाव.            ", correct: true},
            { text: "जल धाराएँ।            ", correct: false},
            { text: "लहरें।            ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी के वायुमंडल को गर्म करने वाले विकिरण कहाँ से आते हैं?        ",
        answers: [
            { text: "सूरज            ", correct: false},
            { text: "पृथ्वी            ", correct: true},
            { text: "आयनमंडल            ", correct: false},
            { text: "सूर्य और पृथ्वी            ", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से कौन सा आठ तत्वों में से नहीं है?        ",
        answers: [
            { text: "ऑक्सीजन और सिलिकॉन            ", correct: false},
            { text: "एल्यूमीनियम और आयरन            ", correct: false},
            { text: "कैल्शियम और सोडियम            ", correct: false},
            { text: "अभ्रक और गरेनाइट            ", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सी कायांतरित चट्टानों का उदाहरण नहीं है?        ",
        answers: [
            { text: "स्लेट            ", correct: false},
            { text: "संगमरमर            ", correct: false},
            { text: "चूना पत्थर            ", correct: true},
            { text: "शिस्ट            ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की पपड़ी में कौन सा खनिज समूह प्रचुर मात्रा में पाया जाता है?        ",
        answers: [
            { text: "अभ्रक समूह            ", correct: false},
            { text: "फेल्सपार समूह            ", correct: true},
            { text: "ऑक्साइड समूह            ", correct: false},
            { text: "सिलिकेट समूह            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी रूपांतरित चट्टानों की प्रमुख विशेषता है?        ",
        answers: [
            { text: "परिवर्तनशील            ", correct: true},
            { text: "काफी            ", correct: false},
            { text: "क्रिस्टलीय            ", correct: false},
            { text: "पत्ते            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा सबसे कठोर खनिज है?        ",
        answers: [
            { text: "पुखराज            ", correct: false},
            { text: "हीरा            ", correct: true},
            { text: "क्वार्ट्ज            ", correct: false},
            { text: "फेल्डस्पार            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा लौह खनिज है?        ",
        answers: [
            { text: "तांबा            ", correct: false},
            { text: "एल्यूमीनियम            ", correct: false},
            { text: "लौह अयस्क            ", correct: true},
            { text: "टिन            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित खनिजों में एक अधात्विक खनिज है        ",
        answers: [
            { text: "चांदी            ", correct: false},
            { text: " तांबा            ", correct: false},
            { text: "कोयला            ", correct: true},
            { text: "जिंक            ", correct: false},
        ] 
    },

    {
        question:"आग्नेय चट्टानें हैं        ",
        answers: [
            { text: "प्राथमिक चट्टानें            ", correct: true},
            { text: "द्वितीयक चट्टानें            ", correct: false},
            { text: "तृतीयक चट्टानें            ", correct: false},
            { text: "नरम चट्टानें            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा रेत और ग्रेनाइट का घटक है?        ",
        answers: [
            { text: "एम्फिबोल            ", correct: false},
            { text: "क्वार्ट्ज            ", correct: true},
            { text: "पाइरोक्सिन            ", correct: false},
            { text: "अभ्रक            ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की पपड़ी पर सबसे प्रचुर मात्रा में पाई जाने वाली चट्टानें हैं        ",
        answers: [
            { text: "आग्नेय चट्टानें            ", correct: true},
            { text: "तलछटी चट्टानें            ", correct: false},
            { text: "रूपांतरित चट्टानें            ", correct: false},
            { text: "ग्रेनाइट चट्टान            ", correct: false},
        ] 
    },

    {
        question:"वे चट्टानें जो मूल रूप से या तो अवसादी, आग्नेय या रूपांतरित थीं और जिन्हें ताप और दबाव द्वारा और अधिक बदल दिया गया है, कहलाती हैं:        ",
        answers: [
            { text: "ज्वालामुखीय            ", correct: false},
            { text: "तलछटी            ", correct: false},
            { text: "रूपांतरित            ", correct: true},
            { text: "उपरोक्त में से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी एक अवसादी चट्टान नहीं है?        ",
        answers: [
            { text: "टिलाइट            ", correct: false},
            { text: "बोरेक्स            ", correct: false},
            { text: "ब्रेकिया            ", correct: false},
            { text: "sangmarmar            ", correct: true},
        ] 
    },

    {
        question:"लोहा एक है        ",
        answers: [
            { text: "लौह धातु            ", correct: true},
            { text: "अलौह धातु            ", correct: false},
            { text: "कीमती धातु            ", correct: false},
            { text: "गैर कीमती धातु            ", correct: false},
        ] 
    },

    {
        question:"पाइरोक्सिन किस प्रकार के रंग से मिलकर बना होता है?        ",
        answers: [
            { text: "हरा            ", correct: false},
            { text: "काला            ", correct: false},
            { text: "दोनों (ए) और (बी)            ", correct: false},
            { text: "उपरोक्त में से कोई नही", correct: true},
        ] 
    },

    {
        question:"जिन खनिजों में धातु नहीं होती, उन्हें क्या कहा जाता है?        ",
        answers: [
            { text: "बहुमूल्य खनिज            ", correct: false},
            { text: "लौह खनिज            ", correct: false},
            { text: "गैर-धात्विक खनिज            ", correct: true},
            { text: "अलौह खनिज            ", correct: false},
        ] 
    },

    {
        question:"मिट्टी का मूल पदार्थ किससे प्राप्त होता है?        ",
        answers: [
            { text: "आग्नेय चट्टानों से            ", correct: false},
            { text: "रूपांतरित चट्टानों से            ", correct: false},
            { text: "absadi chatano            ", correct: true},
            { text: "जैविक क्रिया से            ", correct: false},
        ] 
    },
    {
        question:"भार के आधार पर पृथ्वी की पपड़ी में ऑक्सीजन का प्रतिशत कितना है?        ",
        answers: [
            { text: "46.60%            ", correct: true},
            { text: "27.72%            ", correct: false},
            { text: "8.13%            ", correct: false},
            { text: "5.00%            ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की पपड़ी में सभी खनिजों का मूल स्रोत क्या है?        ",
        answers: [
            { text: "ऊपरी सतह            ", correct: false},
            { text: "मैग्मा            ", correct: true},
            { text: "क्रस्ट            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"क्वार्ट्ज़ का सबसे महत्वपूर्ण घटक कौन सा है?        ",
        answers: [
            { text: "रेत            ", correct: false},
            { text: "ग्रेनाइट            ", correct: false},
            { text: "दोनों            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"कौन सा पाइरोक्सिन का घटक नहीं है?        ",
        answers: [
            { text: "कैल्शियम            ", correct: false},
            { text: "मैग्नीशियम            ", correct: false},
            { text: "आयरन            ", correct: false},
            { text: "ग्रेनाइट            ", correct: true},
        ] 
    },

    {
        question:"ओलिवाइन के प्रमुख तत्व कौन से हैं?        ",
        answers: [
            { text: "आयरन            ", correct: false},
            { text: "सिलिका            ", correct: false},
            { text: "मैग्नीशियम            ", correct: false},
            { text: "ये सभी            ", correct: true},
        ] 
    },

    {
        question:"धात्विक खनिज कौन सा है?        ",
        answers: [
            { text: "सिलिका            ", correct: false},
            { text: "कार्बन            ", correct: false},
            { text: "ऑक्सीजन            ", correct: false},
            { text: "सोना            ", correct: true},
        ] 
    },

    {
        question:"इनमें से किसमें धातु की मात्रा नहीं होती है?        ",
        answers: [
            { text: "सल्फर            ", correct: false},
            { text: "नाइट्रेट्स            ", correct: false},
            { text: "फॉस्फेट            ", correct: false},
            { text: "ये सभी            ", correct: true},
        ] 
    },

    {
        question:"चट्टानों के विज्ञान को कहा जाता है        ",
        answers: [
            { text: "भूविज्ञान            ", correct: false},
            { text: "प्राणीशास्त्र            ", correct: false},
            { text: "पेट्रोलॉजी            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"ठोस मैग्मा और लावा से बनने वाली चट्टानों को कहा जाता है        ",
        answers: [
            { text: "अवसादी            ", correct: false},
            { text: "एग्न्यू            ", correct: true},
            { text: " रेत चट्टानें            ", correct: false},
            { text: "कायापलट            ", correct: false},
        ] 
    },

    {
        question:"टुकड़ों के निक्षेपण/सीमेंटेशन से किस प्रकार की चट्टानें बनती हैं?        ",
        answers: [
            { text: "अवसादी            ", correct: true},
            { text: "एग्न्यू            ", correct: false},
            { text: "पेग्मैटिक            ", correct: false},
            { text: "कायापलट            ", correct: false},
        ] 
    },

    {
        question:"व्यापक संरचना वाली कर्कश कण वाली चट्टानें कौन सी हैं?        ",
        answers: [
            { text: "पेग्मेटिटिक ग्रेनाइट            ", correct: false},
            { text: "पेग्मेटिटिक डायराइट            ", correct: false},
            { text: "दोनों            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"ग्रेनाइट एक प्रकार की चट्टान है:        ",
        answers: [
            { text: "ग्रैनेटॉइड            ", correct: true},
            { text: "पेग्मैटिक            ",correct: false},
            { text: "ग्लासी                ", correct: false},
            { text: "एफैन्टिक            ", correct: false},
        ] 
    },

    {
        question:"बाहर निकलने वाली चट्टान किस प्रकार की है?        ",
        answers: [
            { text: "ग्रेनेटॉइड            ", correct: false},
            { text: "ग्लासी            ", correct: false},
            { text: "khandit", correct: true},
            { text: "एफैन्टिक            ", correct: false},
        ] 
    },

    {
        question:"बाहरी एजेंसियों द्वारा टुकड़ों के जमाव सीमेंटीकरण को कहा जाता है        ",
        answers: [
            { text: "अवसादन            ", correct: true},
            { text: "कायापलट            ", correct: false},
            { text: "लिथिफिकेशन            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"किस प्रकार की चट्टानें जानवरों और पौधों के स्राव की सक्रिय भागीदारी से बनती हैं        ",
        answers: [
            { text: "सिलिसियस चट्टानें            ", correct: true},
            { text: "रेत चट्टानें            ", correct: false},
            { text: "खंडित चट्टानें            ", correct: false},
            { text: "कांच जैसी चट्टानें            ", correct: false},
        ] 
    },

    {
        question:"किस प्रकार की चट्टानें बड़ी मात्रा में कार्बन युक्त संपीड़ित और परिवर्तित वनस्पति पदाथ बनती हैं?        ",
        answers: [
            { text: "पीट            ", correct: true},
            { text: "रेत चट्टानें            ", correct: false},
            { text: "टुकड़ा            ", correct: false},
            { text: "ग्लासी            ", correct: false},
        ] 
    },

    {
        question:"नमकीन पानी के सांद्रित घोल से निक्षेपण से क्या बनता है?        ",
        answers: [
            { text: "नमक            ", correct: true},
            { text: "पीट            ", correct: false},
            { text: "चूना पत्थर            ", correct: false},
            { text: "रेत            ", correct: false},
        ] 
    },

    {
        question:"उन चट्टानों के प्रकार का नाम बताइए जिनमें मूल कण अधिक या कम पूर्ण बैंड या परतों में पुनर्व्यवस्थित हो जाते हैं।        ",
        answers: [
            { text: "लवण            ", correct: false},
            { text: "पत्तेदार            ", correct: true},
            { text: "कैलकेरियस            ", correct: false},
            { text: "ग्रेनाइट            ", correct: false},
        ] 
    },

    {
        question:"नमक चट्टान का उदाहरण कौन सा है?        ",
        answers: [
            { text: "हैलाइट            ", correct: false},
            { text: "जिप्सम            ", correct: false},
            { text: "पोटाश            ", correct: false},
            { text: "ये सभी            ", correct: true},
        ] 
    },

    {
        question:"जब चट्टानों को टेक्टोनिक प्रक्रियाओं द्वारा निचले स्तर पर धकेला जाता है, तो इस प्रक्रिया को कहा जाता है        ",
        answers: [
            { text: "अवसादन            ", correct: false},
            { text: "कायापलट            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
            { text: "दोनों            ", correct: false},
        ] 
    },

    {
        question:"रूपांतरित चट्टानों को .... में वर्गीकृत किया गया है। प्रमुख समूह.        ",
        answers: [
            { text: "दो            ", correct: true},
            { text: "तीन            ", correct: false},
            { text: "पांच            ", correct: false},
            { text: "छह            ", correct: false},
        ] 
    },

    {
        question:"कायांतरित चट्टानें किस समूह से संबंधित हैं?        ",
        answers: [
            { text: "पत्तेदार            ", correct: false},
            { text: "गैर पत्तेदार            ", correct: false},
            { text: "दोनों            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"लवण और फ़ाइलाइट_______हैं। चट्टानें        ",
        answers: [
            { text: "पत्तेदार            ", correct: true},
            { text: "गैर पत्तेदार            ", correct: false},
            { text: "दोनों            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"गैर-पर्णधारी चट्टानों का उदाहरण कौन सा है?        ",
        answers: [
            { text: "मार्बल            ", correct: true},
            { text: "शिस्ट्स            ", correct: false},
            { text: "साल्ट्स            ", correct: false},
            { text: "फाइलाइट्स            ", correct: false},
        ] 
    },

    {
        question:"सर्पेन्टाइन एक प्रकार की चट्टान है।        ",
        answers: [
            { text: "पत्तेदार            ", correct: false},
            { text: "गैर-पत्तेदार            ", correct: true},
            { text: "लवण            ", correct: false},
            { text: "एफॅटिक            ", correct: false},
        ] 
    },

    {
        question:"वह प्रक्रिया जिसके द्वारा चट्टानें नई चट्टानों में परिवर्तित हो जाती हैं, कहलाती है?        ",
        answers: [
            { text: "चट्टान चक्र            ", correct: true},
            { text: "परिवर्तन            ", correct: false},
            { text: "अवसादन            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },
    {
        question:"वे चट्टानें जो मूल रूप से या तो अवसादी, आग्नेय या रूपांतरित थीं और गर्मी और दबाव द्वारा और अधिक परिवर्तित हो गई हैं, कहलाती हैं:        ",
        answers: [
            { text: "ज्वालामुखीय            ", correct: false},
            { text: "तलछटित            ", correct: false},
            { text: "रूपांतरित            ", correct: true},
            { text: "उपरोक्त में से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित खनिजों में एक अधात्विक खनिज है        ",
        answers: [
            { text: "चांदी.            ", correct: false},
            { text: "तांबा.            ", correct: false},
            { text: "जिंक।            ", correct: false},
            { text: "कोयला।            ", correct: true},
        ] 
    },

    {
        question:"पृथ्वी की पपड़ी में कौन सा खनिज समूह प्रचुर मात्रा में पाया जाता है?        ",
        answers: [
            { text: "अभ्रक समूह            ", correct: false},
            { text: "फेल्सपार समूह            ", correct: true},
            { text: "ऑक्साइड समूह            ", correct: false},
            { text: "सिलिकेट समूह            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सी रूपांतरित चट्टानों की प्रमुख विशेषता है?        ",
        answers: [
            { text: "परिवर्तनशील            ", correct: true},
            { text: "बिल्कुल            ", correct: false},
            { text: "क्रिस्टलीय            ", correct: false},
            { text: "पत्ते            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा सबसे कठोर खनिज है?        ",
        answers: [
            { text: "पुखराज            ", correct: false},
            { text: " हीरा            ", correct: true},
            { text: "क्वार्ट्ज            ", correct: false},
            { text: "फेल्डस्पार            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन ग्रेनाइट के दो मुख्य घटक हैं?        ",
        answers: [
            { text: "लोहा और निकल            ", correct: false},
            { text: "लोहा और चांदी            ", correct: false},
            { text: "सिलिका और एल्यूमिनियम            ", correct: true},
            { text: "आयरन ऑक्साइड और पोटेशियम            ", correct: false},
        ] 
    },

    {
        question:"चट्टानों का विज्ञान कहा जाता है        ",
        answers: [
            { text: "खनिज विज्ञान            ", correct: false},
            { text: "पेट्रोलॉजी            ", correct: true},
            { text: "खनिज विज्ञान            ", correct: false},
            { text: "आयरनोलॉजी            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा रेत और ग्रेनाइट का घटक है?        ",
        answers: [
            { text: "उभयचर            ", correct: false},
            { text: "क्वार्ट्ज            ", correct: true},
            { text: "पाइरोक्सिन            ", correct: false},
            { text: "अभ्रक            ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की पपड़ी पर सबसे प्रचुर मात्रा में पाई जाने वाली चट्टानें हैं        ",
        answers: [
            { text: "आग्नेय चट्टानें।            ", correct: true},
            { text: "तलछटी चट्टानें।            ", correct: false},
            { text: "रूपांतरित चट्टानें।            ", correct: false},
            { text: "ग्रेनाइट चट्टान।            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी एक अवसादी चट्टान नहीं है?        ",
        answers: [
            { text: "टिलाइट",            correct: false},
            { text: "बोरेक्स            ", correct: false},
            { text: "बोरेक्स            ", correct: false},
            { text: "संगमरमर            ", correct: true},
        ] 
    },

    {
        question:"लोहा है        ",
        answers: [
            { text: "लौह धातु।            ", correct: true},
            { text: "अलौह धातु।            ", correct: false},
            { text: "कीमती धातु।            ", correct: false},
            { text: "गैर-कीमती धातु।            ", correct: false},
        ] 
    },

    {
        question:"पाइरोक्सिन किस प्रकार के रंग से मिलकर बना होता है?        ",
        answers: [
            { text: "हरा            ", correct: false},
            { text: "काला            ", correct: false},
            { text: "दोनों (ए) और (बी)            ", correct: false},
            { text: "उपरोक्त में से कोई नहीं            ", correct: true},
        ] 
    },

    {
        question:"वे खनिज जिनमें धातु की मात्रा नहीं होती, कहलाते हैं        ",
        answers: [
            { text: "कीमती खनिज ।            ", correct: false},
            { text: "लौह खनिज ।            ", correct: false},
            { text: "गैर-धात्विक खनिज ।            ", correct: true},
            { text: "अलौह खनिज ।            ", correct: false},
        ] 
    },

    {
        question:"मिट्टी का मूल पदार्थ किससे प्राप्त होता है?        ",
        answers: [
            { text: "आग्नेय चट्टानें।            ", correct: false},
            { text: "रूपांतरित चट्टानें।            ", correct: false},
            { text: "तलछटी चट्टानें।            ", correct: true},
            { text: "जैविक क्रिया।            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा रूपांतरित चट्टानों का उदाहरण नहीं है        ",
        answers: [
            { text: "देरी            ", correct: false},
            { text: "संगमरमर            ", correct: false},
            { text: "चूना पत्थर            ", correct: true},
            { text: "शिस्ट            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा आठ तत्वों में से नहीं है?        ",
        answers: [
            { text: "ऑक्सीजन और सिलिकॉन            ", correct: false},
            { text: "एल्युमीनियम और लोहा            ", correct: false},
            { text: " कैल्शियम और सोडियम            ", correct: false},
            { text: "अभ्रक और ग्रेनाइट            ", correct: true},
        ] 
    },

    {
        question:"आग्नेय चट्टानें हैं        ",
        answers: [
            { text: "प्राथमिक चट्टानें।            ", correct: true},
            { text: "द्वितीयक चट्टानें।            ", correct: false},
            { text: "तृतीयक चट्टानें।            ", correct: false},
            { text: "नरम चट्टानें।            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन लौह खनिज है?        ",
        answers: [
            { text: "तांबा            ", correct: false},
            { text: "एल्यूमिनियम            ", correct: false},
            { text: "लौह अयस्क            ", correct: true},
            { text: "टिन            ", correct: false},
        ] 
    },
    {
        question:"निहारिका परिकल्पना किसने दी?        ",
        answers: [
            { text: "इम्मानुअल कांट            ", correct: true},
            { text: "अरस्तू            ", correct: false},
            { text: "चेम्बरलेन            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"नीहारिका परिकल्पना को कब संशोधित किया गया?        ",
        answers: [
            { text: "1796            ", correct: true},
            { text: "1900            ", correct: false},
            { text: "1950            ", correct: false},
            { text: "1920            ", correct: false},
        ] 
    },

    {
        question:"सूर्य घिरा हुआ है        ",
        answers: [
            { text: "सौर निहारिका            ", correct: true},
            { text: "धूल पदार्थ            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
            { text: "दोनों            ", correct: false},
        ] 
    },

    {
        question:"बिग बैंग सिद्धांत किसने दिया?        ",
        answers: [
            { text: "कांट            ", correct: false},
            { text: "चेम्बरलेन            ", correct: false},
            { text: "एडविन हबल            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"बिग बैंग की घटना कब हुई थी?        ",
        answers: [
            { text: "13.6 मिलियन वर्ष पहले            ", correct: false},
            { text: "13.7 बिलियन वर्ष पहले            ", correct: true},
            { text: "4.6 बिलियन वर्ष पहले            ", correct: false},
            
        ] 
    },

    {
        question:"एक आकाशगंगा हाइड्रोजन गैस का एक बड़ा बादल बनाने लगती है जिसे कहा जाता है        ",
        answers: [
            { text: "ग्रह            ", correct: false},
            { text: "पृथ्वी            ", correct: false},
            { text: "पृथ्वी            ", correct: false},
            { text: "नेबुला            ", correct: true},
        ] 
    },

    {
        question:"आकाशगंगाओं का आकार है        ",
        answers: [
            { text: "80,000 से 150,000            ", correct: true},
            { text: "80,000 से 160,000            ", correct: false},
            { text: "50,000 से 180,000            ", correct: false},
            { text: "60,150,000            ", correct: false},
        ] 
    },

    {
        question:"तारों का निर्माण",
        answers: [
            { text: "5 मिलियन वर्ष", correct: false},
            { text: "5 बिलियन वर्ष", correct: false},
            { text: "6 मिलियन वर्ष", correct: false},
            { text: "5 से 6 बिलियन वर्ष पहले हुआ है।", correct: true},
        ] 
    },

    {
        question:"एक प्रकाश वर्ष माप है        ",
        answers: [
            { text: "दूरी            ", correct: true},
            { text: "समय            ", correct: false},
            { text: "दोनों            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"प्रकाश की गति कितनी है?        ",
        answers: [
            { text: "300,000 किमी/सेकंड            ", correct: true},
            { text: "330,000 किमी/सेकंड            ", correct: false},
            { text: "30,000 किमी/सेकंड            ", correct: false},
            { text: "3.0 किमी/सेकंड            ", correct: false},
        ] 
    },

   
    {
        question:"सूर्य और पृथ्वी के बीच औसत दूरी ह        ",
        answers: [
            { text: "149,598,000 किमी            ", correct: true},
            { text: "159,598,000 किमी            ", correct: false},
            { text: "149,498,000 किमी            ", correct: false},
            { text: "149,5,980 किम            ", correct: false},
        ] 
    },

    {
        question:"प्रकाश वर्ष के संदर्भ में सूर्य और पृथ्वी के बीच की दूरी है        ",
        answers: [
            { text: "8.311 मिनट            ", correct: true},
            { text: "8.31 मिनट            ", correct: false},
            { text: "8.310 मिनट            ", correct: false},
            { text: "8.312 मिनट            ", correct: false},
        ] 
    },

    {
        question:"सौर मंडल में कितने ग्रह हैं?        ",
        answers: [
            { text: "9            ", correct: true},
            { text: "8            ", correct: false},
            { text: "7            ", correct: false},
            { text: "11            ", correct: false},
        ] 
    },

    {
        question:"हमारा सौरमंडल किससे बना है?        ",
        answers: [
            { text: "निहारिका            ", correct: true},
            { text: "धूल के कण            ", correct: false},
            { text: "क्षुद्रग्रह            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"आंतरिक ग्रह किसे कहा जाता है?        ",
        answers: [
            { text: "बुध            ", correct: false},
            { text: "शुक्र            ", correct: false},
            { text: "पृथ्वी            ", correct: false},
            { text: "ये सभी            ", correct: true},
        ] 
    },

    {
        question:"किसे बाहरी ग्रह के रूप में जाना जाता है        ",
        answers: [
            { text: "बृहस्पति            ", correct: false},
            { text: "शनि            ", correct: false},
            { text: "नेपच्यून            ", correct: false},
            { text: "ये सभी            ", correct: true},
        ] 
    },

    {
        question:"स्थलीय ग्रह किसे कहा जाता है?        ",
        answers: [
            { text: "शुक्र", correct: true},
            { text: "नेपच्यून", correct: false},
            { text: "प्लूटो            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"जोवियन या गैस दानव ग्रह क्या है?        ",
        answers: [
            { text: "आंतरिक ग्रह            ", correct: false},
            { text: "बाहरी ग्रह            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
            { text: "ये दोनों            ", correct: false},
        ] 
    },

    {
        question:"ग्रहों का निर्माण लगभग__________वर्ष पहले हुआ था        ",
        answers: [
            { text: "4.6 बिलियन            ", correct: true},
            { text: "4.6 मिलियन            ", correct: false},
            { text: "3.8 बिलियन            ", correct: false},
            { text: "3.8 मिलियन            ", correct: false},
        ] 
    },

    {
        question:"प्राकृतिक उपग्रह का नाम बताएं        ",
        answers: [
            { text: "शुक्र            ", correct: false},
            { text: "बुध            ", correct: false},
            { text: "चंद्रमा            ", correct: true},
            { text: "पृथ्वी            ", correct: false},
        ] 
    },

    {
        question:"प्रारंभ में, पृथ्वी एक पतला वातावरण था जिसमें अधिकांशतः        ",
        answers: [
            { text: "हाइड्रोजन            ", correct: false},
            { text: "हीलियम            ", correct: false},
            { text: "दोनों            ", correct: true},
            { text: "इनमें से कोई नहीं था            ", correct: false},
        ] 
    },
    {
        question:"महासागरों का निर्माण कब हुआ था        ",
        answers: [
            { text: "500 मिलियन वर्ष पहले            ", correct: true},
            { text: "500 बिलियन वर्ष पहले            ", correct: false},
            { text: "50 मिलियन वर्ष पहले            ", correct: false},
            { text: "50 बिलियन वर्ष पहले            ", correct: false},
        ] 
    },
    {
        question:"भारत का सबसे बड़ा वनस्पति संग्रहालय कहां स्थित है?",
        answers: [
            { text: "कोलकाता            ", correct: true},
            { text: "लखनऊ            ", correct: false},
            { text: "मुंबई            ", correct: false},
            { text: "कोयंबटूर            ", correct: false},
        ] 
    },
    {
        question:"भारतीय वन अनुसंधान संस्थान भारत के किस शहर में स्थित है?",
        answers: [
            { text: "नई दिल्ली", correct: false},
            { text: "हैदराबाद", correct: false},
            { text: "देहरादून", correct: true},
            { text: "शिमला", correct: false},
        ] 
    },
    {
        question:" भारतीय वानस्पतिक सर्वेक्षण (बोटनिकल सर्वे ऑफ़ इंडिया) का मुख्यालय कहां है?",
        answers: [
            { text: "लखनऊ            ", correct: false},
            { text: "दार्जिलिंग            ", correct: false},
            { text: "कोलकाता            ", correct: true},
            { text: "ऊटकमण्ड            ", correct: false},
        ] 
    },
    {
        question:"'वन महोत्सव' निम्नलिखित में से किससे संबंधित है?        ",
        answers: [
            { text: " वृक्षों को काटना            ", correct: false},
            { text: "वृक्षों का आनुवांशिक परिवर्तन", correct: true},
            { text: "वृक्षारोपण            ", correct: false},
            { text: "खेती में बढ़ोतरी            ", correct: false},
        ] 
    },
    {
        question:"'चिपको आंदोलन' किससे संबंधित है?        ",
        answers: [
            { text: "वन्य जीव संरक्षण            ", correct: false},
            { text: "वन संरक्षण            ", correct: true},
            { text: "वैज्ञानिक कृषि            ", correct: false},
            { text: "वनोन्मूलन            ", correct: false},
        ] 
    },
    {
        question:"भारत में सबसे बड़े क्षेत्र में फैले हुए वन कौन से हैं?        ",
        answers: [
            { text: "उष्णकटिबंधीय सदाबहार वन", correct: false},
            { text: "उष्णकटिबंधीय पर्णपाती वन            ", correct: true},
            { text: "पर्वतीय वन            ", correct: false},
            { text: "मैंग्रोव वन            ", correct: false},
        ] 
    },
    {
        question:"भारत में अति सघन वनों का सर्वाधिक क्षेत्र जिस राज्य में पाया जाता है, वह है-        ",
        answers: [
            { text: " अरुणाचल प्रदेश            ", correct: true},
            { text: "मध्य प्रदेश            ", correct: false},
            { text: "महाराष्ट्र            ", correct: false},
            { text: "उड़ीसा            ", correct: false},
        ] 
    },
    {
        question:"भारत के निम्नोक्त क्षेत्रों में से कौन-सा चीड़ के वनों से संबद्ध है?        ",
        answers: [
            { text: "रूहेलखंड            ", correct: false},
            { text: "बुंदेलखंड            ", correct: false},
            { text: "झारखंड", correct: false},
            { text: "उत्तराखंड", correct: true},
        ] 
    },
    {
        question:"भारत के निम्न राज्यों में से किसमें सागौन का वन पाया जाता है?",
        answers: [
            { text: "मध्य प्रदेश            ", correct: true},
            { text: "उत्तर प्रदेश            ", correct: false},
            { text: "झारखंड            ", correct: false},
            { text: "कर्नाटक            ", correct: false},
        ] 
    },
    {
        question:"भारत में चंदन की लकड़ी के लिए प्रसिद्ध राज्य है-        ",
        answers: [
            { text: "असम            ", correct: false},
            { text: "केरल            ", correct: false},
            { text: "कर्नाटक            ", correct: true},
            { text: "पश्चिम बंगाल            ", correct: false},
        ] 
    },
    {
        question:"भारत में उष्णकटिबंधीय सदाबहार वन कहां पाए जाते हैं?        ",
        answers: [
            { text: "केरल में            ", correct: true},
            { text: "आंध्र प्रदेश में            ", correct: false},
            { text: "मध्य प्रदेश में            ", correct: false},
            { text: "उड़ीसा में                ", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से भारत का कौन-सा क्षेत्र उष्णकटिबंधीय सदाबहार वन से ढका हुआ है?        ",
        answers: [
            { text: "गुजरात का अर्ध-शुष्क क्षेत्र            ", correct: false},
            { text: "पूर्वी घाट            ", correct: false},
            { text: "पश्चिमी घाट            ", correct: true},
            { text: "मध्य प्रदेश            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से किन पहाड़ियों पर उष्णकटिबंधीय सदाबहार वन पाए जाते हैं?        ",
        answers: [
            { text: "नीलगिरी पहाड़ियां            ", correct: true},
            { text: "अरावली पहाड़ियां            ", correct: false},
            { text: "राजमहल पहाड़ियां            ", correct: false},
            { text: "शिवालिक पहाड़ियां            ", correct: false},
        ] 
    },
    {
        question:"गंगा ब्रह्मपुत्र डेल्टा क्षेत्र का वन निम्नलिखित में से किस नाम से जाना जाता है?        ",
        answers: [
            { text: "मानसून वन            ", correct: false},
            { text: "वर्षा वन            ", correct: false},
            { text: "पतझड़ वन            ", correct: false},
            { text: "सुंदरवन                ", correct: true},
        ] 
    },
    {
        question:"गंगा-ब्रह्मपुत्र के डेल्टाई क्षेत्रों में किस वृक्ष की अधिकता के कारण इसे 'सुंदरवन' कहा जाता है?        ",
        answers: [
            { text: "चंदन            ", correct: false},
            { text: "शीशम            ", correct: false},
            { text: "सुंदरी            ", correct: true},
            { text: "इनमें से सभी            ", correct: false},
        ] 
    },
        {
        question:"'सुंदरी वृक्ष' निम्नलिखित में से किसकी एक विशेष प्रकार की वनस्पति है?        ",
        answers: [
            { text: "ज्वारीय वन            ", correct: true},
            { text: "कांटा वन            ", correct: false},
            { text: "पर्वत वनस्पति            ", correct: false},
            { text: "टैगा वनस्पति            ", correct: false},
        ] 
    },
    {
        question:"विश्व में सबसे बड़ा गरान वन (Mangrove forest) निम्न में से कौन-सा है?        ",
        answers: [
            { text: "अफ्रीका वन            ", correct: false},
            { text: "अल्पाइन वन            ", correct: false},
            { text: "सुंदरबन            ", correct: true},
            { text: "ऑस्ट्रेलियाई वन            ", correct: false},
        ] 
    },
    {
        question:"गरान वन (Mangrove forest) होते हैं-        ",
        answers: [
            { text: "ऊंचे पर्वतों पर            ", correct: false},
            { text: "बर्फीले मैदानों में            ", correct: false},
            { text: "तटीय दलदल में            ", correct: true},
            { text: "भीतरी पठारों में            ", correct: false},
        ] 
    },
    {
        question:"भारत में मैंग्रोव वनस्पति मुख्यतः पायी जाती है-        ",
        answers: [
            { text: "मालाबार तट            ", correct: false},
            { text: "सुंदरवन            ", correct: true},
            { text: "कच्छ का रण", correct: false},
            { text: "दंडकारण्य            ", correct: false},
        ] 
    },
    {
        question:"सुंदरवन के जंगल को क्या कहा जाता है?        ",
        answers: [
            { text: "झाड़ीदार जंगल            ", correct: false},
            { text: "मैंग्रोव            ", correct: true},
            { text: "टुन्ड्रा            ", correct: false},
            { text: "कच्छ का रण", correct: false},
        ] 
    },
    {
        question:"मैंग्रोव की खेती के लिए निम्नलिखित में से कौन-सा क्षेत्र प्रसिद्ध है?        ",
        answers: [
            { text: "दक्षिण 24 परगना का सजनेखाली जंगल            ", correct: true},
            { text: "कलिम्पांग का लावा जंगल            ", correct: false},
            { text: "उड़ीसा का दंडकारण्य जंगल            ", correct: false},
            { text: "उत्तर प्रदेश का कार्बेट नेशनल पार्क            ", correct: false},
        ] 
    },
    {
        question:"मैंग्रोव वनों पर वैश्विक तापन का क्या प्रभाव होगा?        ",
        answers: [
            { text: "वे अधिक प्रचुरता से पैदा होंगे            ", correct: false},
            { text: " मैंग्रोव के विशाल क्षेत्र जलमग्न हो जाएंगे            ", correct: true},
            { text: "कार्बन सिंक्स के रूप में उनकी भूमिका अधिक महत्वपूर्ण हो जाएगी            ", correct: false},
            { text: "दोनों(a)/(b)            ", correct: false},
        ] 
    },
    {
        question:"पूर्वी भारत का सुंदरवन का एक उदाहरण है-        ",
        answers: [
            { text: "वन परिस्थितिक तंत्र का            ", correct: false},
            { text: "मैंग्रोव परिस्थितिक तंत्र का            ", correct: true},
            { text: "घासभूमि पारिस्थितिकी तंत्र का            ", correct: false},
            { text: "समुद्री पारिस्थितिकी तंत्र का            ", correct: false},
        ] 
    },
    {
        question:"जो वन चक्रवातों के अवरोधकों का कार्य करते हैं वे वन कौन से हैं?        ",
        answers: [
            { text: "अल्पाइन वन            ", correct: false},
            { text: "मैंग्रोव वन            ", correct: true},
            { text: "एवरग्रीन वन            ", correct: false},
            { text: "मानसून वन            ", correct: false},
        ] 
    },
    {
        question:"अमेजनी वन एक प्रकार का-        ",
        answers: [
            { text: "उष्णकटिबंधीय वर्षा वन है            ", correct: true},
            { text: "शीतोष्ण वर्षा वन है            ", correct: false},
            { text: "शीतोष्ण सदाबहार वन है            ", correct: false},
            { text: "उष्णकटिबंधीय मौसमी वन है            ", correct: false},
        ] 
    },
    {
        question:"भारत में वर्षा वन पाए जाते हैं-        ",
        answers: [
            { text: "मध्य भारत में            ", correct: false},
            { text: "पूर्वी घाट में            ", correct: false},
            { text: "उत्तर-पूर्वी हिमालय और पश्चिमी घाट में            ", correct: true},
            { text: "उत्तर-पश्चिमी हिमालय और पूर्वी घाट में", correct: false},
        ] 
    },
    {
        question:"वर्षा-वन में किसी पेड़ के छत्र के नीचे जो वनस्पति उगती है, उसे क्या कहते है?        ",
        answers: [
            { text: "क्राउन            ", correct: false},
            { text: "छत्र            ", correct: false},
            { text: "अंडरस्टोरी            ", correct: true},
            { text: " वन-तल            ", correct: false},
        ] 
    },
    {
        question:"सदाबहार बरसाती वन मुख्यतः कितनी सु- वितरित वार्षिक वर्षा के क्षेत्रों में पाए जाते हैं?        ",
        answers: [
            { text: "50 सेमी. से कम            ", correct: false},
            { text: "50-100 सेमी.            ", correct: false},
            { text: "100-200 सेमी.            ", correct: false},
            { text: "200 सेमी. से अधिक            ", correct: true},
        ] 
    },
    {
        question:"वर्षा-वन में किसी पेड़ के छत्र के नीचे जो वनस्पति उगती है, उसे क्या कहते है?        ",
        answers: [
            { text: "क्राउन            ", correct: false},
            { text: "छत्र            ", correct: false},
            { text: "अंडरस्टोरी            ", correct: true},
            { text: "वन-तल            ", correct: false},
        ] 
    },
    {
        question:"सदाबहार बरसाती वन मुख्यतः कितनी सु- वितरित वार्षिक वर्षा के क्षेत्रों में पाए जाते हैं?        ",
        answers: [
            { text: "50 सेमी. से कम            ", correct: false},
            { text: "50-100 सेमी.            ", correct: false},
            { text: "100-200 सेमी.            ", correct: false},
            { text: "200 सेमी. से अधिक            ", correct: true},
        ] 
    },
    {
        question:"साल और सागौन के वृक्ष निम्नलिखित में से किस प्राकृतिक वनस्पति पट्टी में पाए जाते हैं?        ",
        answers: [
            { text: "शीतोष्ण वन            ", correct: false},
            { text: "विषुवतीय वन            ", correct: false},
            { text: "उष्णकटिबंधीय वन            ", correct: true},
            { text: "मिश्रित वन            ", correct: false},
        ] 
    },
    {
        question:"एक आकलन के अनुसार शीतोष्ण क्षेत्र में केवल एक प्रतिशत वन नष्ट हुए हैं, जबकि उष्णकटिबंध में लगभग____________वन नष्ट हो गए हैं। प्रतिशत        ",
        answers: [
            { text: "20            ", correct: false},
            { text: "40            ", correct: true},
            { text: "60            ", correct: false},
            { text: "80            ", correct: false},
        ] 
    },
    {
        question:"वन कटाई की दर किसमें सबसे अधिक होती है?        ",
        answers: [
            { text: "उष्णकटिबंधीय अंचल            ", correct: true},
            { text: "मरुक्षेत्र            ", correct: false},
            { text: "शीतोष्ण कटिबंधीय अंचल            ", correct: false},
            { text: "उत्तरी वन            ", correct: false},
        ] 
    },
    {
        question:"विश्व में किस भोजन उत्पाद की बढ़ती हुई क्षुधा उष्णकटिबंधीय वनोन्मूलन का प्रमुख कारण है?        ",
        answers: [
            { text: "सूअर का मांस            ", correct: false},
            { text: "शर्करा            ", correct: false},
            { text: "बकरे का मांस            ", correct: false},
            { text: "गौ-मांस            ", correct: true},
        ] 
    },
    {
        question:"सदाबहार किस्म के वन यहां पाए जाते हैं-        ",
        answers: [
            { text: "मानसून जलवायुवीय क्षेत्र            ", correct: false},
            { text: "मरू क्षेत्र            ", correct: false},
            { text: "भूमध्यसागरीय क्षेत्र            ", correct: false},
            { text: "भूमध्यरेखीय क्षेत्र            ", correct: true},
        ] 
    },
    {
        question:"भारत के निम्नलिखित क्षेत्रों में से किस एक में मैंग्रोव वन, सदापर्णी वन और पर्णपाती वनों का संयोजन है?        ",
        answers: [
            { text: "उत्तर तटीय आंध्र प्रदेश            ", correct: false},
            { text: "दक्षिण पश्चिम बंगाल            ", correct: false},
            { text: "अंडमान और निकोबार द्वीपसमूह            ", correct: true},
            { text: "दक्षिणी सौराष्ट्र            ", correct: false},
        ] 
    },
    {
        question:"भारत में निम्नलिखित में से किस क्षेत्र में विविध अंतः समुद्री पेड़-पौधों तथा प्राणीजात का संरक्षण करने का जैव-रिजर्व (बायो-रिजर्व) है?        ",
        answers: [
            { text: "लक्षद्वीप            ", correct: false},
            { text: "अंडमान और निकोबार द्वीपसमूह            ", correct: true},
            { text: "दमन और दीव            ", correct: false},
            { text: "दादरा, नगर हवेली            ", correct: false},
        ] 
    },
    {
        question:"अधिकतम जैव-विविधता वाला प्रदेश निम्नलिखित में से किस प्रकार का होता है?        ",
        answers: [
            { text: "उष्णकटिबंधीय            ", correct: false},
            { text: "शीतोष्ण            ", correct: false},
            { text: "मानसूनी            ", correct: false},
            { text: "विषुवतीय            ", correct: true},
        ] 
    },
    {
        question:"___________वनों में वृक्ष एक निश्चित मौसम में अपने पत्तों का त्याग करते हैं।        ",
        answers: [
            { text: "सदाबहार            ", correct: false},
            { text: "गरान            ", correct: false},
            { text: "पर्णपाती            ", correct: true},
            { text: "कटीले            ", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से कौन से वृक्ष वर्ष में एक बार अपनी पत्तियां गिरा देते हैं?        ",
        answers: [
            { text: "पर्णपाती पेड़            ", correct: true},
            { text: "शंकुधारी            ", correct: false},
            { text: "सदाबहार वृक्ष            ", correct: false},
            { text: "पर्णपाती पेड़ और शंकुधारी दोनों            ", correct: false},
        ] 
    },
    {
        question:"पर्णपाती वृक्ष-        ",
        answers: [
            { text: "अपने खाद्य के लिए दूसरों पर निर्भर रहेंगे            ", correct: false},
            { text: "अपनी पत्तियां हर वर्ष गिराएंगे            ", correct: true},
            { text: "अपनी पत्तियां नहीं गिराएंगे            ", correct: false},
            { text: "अपने खाद्य का संश्लेषण करेंगे            ", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से कौन उष्णकटिबंधीय पतझड़ी पौधा है जो दक्कन के पठार की विशेषता है?        ",
        answers: [
            { text: "सागौन            ", correct: false},
            { text: "शीशम            ", correct: false},
            { text: "चंदन            ", correct: true},
            { text: "साल            ", correct: false},
        ] 
    },
    {
        question:"घटती उत्पादनशीलता के क्रम में परिस्थितिक तंत्र में निम्नलिखित में से कौन-सा क्रम सही है।        ",
        answers: [
            { text: "मैंग्रोव, सागर, घास मैदान, झील            ", correct: false},
            { text: "सागर, झील, घास मैदान, मैंग्रोव            ", correct: false},
            { text: "सागर, मैंग्रोव, झील, घास मैदान            ", correct: true},
            { text: "मैंग्रोव, घास मैदान, झील, सागर            ", correct: false},
        ] 
    },
    {
        question:"निम्न में किसे 'वैश्विक विरासत का वन' माना जाता है?        ",
        answers: [
            { text: "उड़ीसा में नंदन कानन            ", correct: false},
            { text: "असम में काजीरंगा            ", correct: false},
            { text: "पश्चिम बंगाल में सुंदरवन            ", correct: true},
            { text: "पश्चिम बंगाल में भारतीय वनस्पति उद्यान, शिबपुर            ", correct: false},
        ] 
    },
    {
        question:"वृक्षाच्छादित क्षेत्र सर्वाधिक है-        ",
        answers: [
            { text: "पूर्वी डेक्कन में            ", correct: true},
            { text: "उत्तरी मैदानी क्षेत्र में            ", correct: false},
            { text: "पश्चिमी तट में            ", correct: false},
            { text: "पूर्वी तट में            ", correct: false},
        ] 
    },
    {
        question:"क्षेत्रफल की दृष्टि से निम्नलिखित भारतीय राज्यों में से सबसे अधिक वन-आच्छादन किस राज्य का है?        ",
        answers: [
            { text: "अरुणाचल प्रदेश            ", correct: false},
            { text: "छत्तीसगढ़            ", correct: false},
            { text: "मध्य प्रदेश            ", correct: true},
            { text: "उड़ीसा            ", correct: false},
        ] 
    },
    {
        question:"वन आच्छादन के कम होने का कारण है-        ",
        answers: [
            { text: "कृषि            ", correct: false},
            { text: "निर्माण उद्योग            ", correct: false},
            { text: "बढ़ती हुई आबादी            ", correct: true},
            { text: "पर्यटन और तीर्थयात्रा            ", correct: false},
        ] 
    },
    {
        question:"वन-कटाई से मृदा का तेजी से संक्षारण होता है, उप भू-पृष्ठीय जल के प्रवाह पर भी प्रतिकूल प्रभाव पड़ता है। ये दोनों कारक सबसे बुरी तरह किसे प्रभावित करते हैं?        ",
        answers: [
            { text: "मानव-संसाधन            ", correct: false},
            { text: "परिस्थितिकी प्रणाली            ", correct: true},
            { text: "जलवायु            ", correct: false},
            { text: "स्थानीय वनस्पति            ", correct: false},
        ] 
    },
    {
        question:"अधिकतम ऑक्सीजन किससे उपलब्ध होती है?        ",
        answers: [
            { text: "हरे जंगल            ", correct: false},
            { text: "रेगिस्तान            ", correct: false},
            { text: "घास के मैदान            ", correct: false},
            { text: "पादपप्लवक पुंज            ", correct: true},
        ] 
    },
    {
        question:"निम्न में से कौन वनस्पति फाइबर का आधार है?        ",
        answers: [
            { text: "सेलुलोस            ", correct: true},
            { text: "प्रोटीन            ", correct: false},
            { text: "वसा            ", correct: false},
            { text: "तेल            ", correct: false},
        ] 
    },

    {
        question:"समुद्र तट के निकट नमकीन पानी में उगने वाले पौधों को____________कहते हैं।        ",
        answers: [
            { text: "हेलोफाइट्स            ", correct: true},
            { text: "जेरोफाइट्स            ", correct: false},
            { text: "हेलियोफाइट्स            ", correct: false},
            { text: "सैप्रोफाइट्स            ", correct: false},
        ] 
    },
    {
        question:"किस प्रकार के वन मुख्यतः शैवालों तथा काई से बने होते हैं?        ",
        answers: [
            { text: "टैगा वन            ", correct: false},
            { text: "टुंड्रा वन            ", correct: true},
            { text: "समशीतोष्ण वन            ", correct: false},
            { text: "उष्णकटिबंधीय सदाबहार            ", correct: false},
        ] 
    },
    {
        question:"आभासी वृक्ष रहित विरल वनस्पति कहां पाई जाती है?        ",
        answers: [
            { text: "अल्पाइन            ", correct: false},
            { text: "टुंड्रा            ", correct: true},
            { text: "छप्पारल            ", correct: false},
            { text: "टैंगा            ", correct: false},
        ] 
    },
    {
        question:"विश्व की 25% भूमि को आच्छादित करने वाला सबसे बड़ा वन कौन-सा है?        ",
        answers: [
            { text: "उष्णकटिबंधीय वर्षावन            ", correct: false},
            { text: "साइबेरिया का टैगा वन            ", correct: true},
            { text: "मानसून वन            ", correct: false},
            { text: "यूरोप के शीतोष्ण कटिबंधीय वन            ", correct: false},
        ] 
    },
    {
        question:"दक्षिण अमेरिका की अमेजन द्रोण (बेसिन) के भूमध्य-रेखीय वनों को क्या कहा जाता है?        ",
        answers: [
            { text: "सेल्वा            ", correct: true},
            { text: "टैगा            ", correct: false},
            { text: "टुंड्रा            ", correct: false},
            { text: "पम्पास            ", correct: false},
        ] 
    },
    {
        question:"टैगा वन में कौन-से वृक्ष होते हैं?        ",
        answers: [
            { text: "जड़ी-बूटी वाले शाकीय वृक्ष            ", correct: false},
            { text: "सॉफ्टवुड पेड़            ", correct: false},
            { text: "मिले-जुले वृक्ष            ", correct: true},
            { text: "अल्पाइन वृक्ष            ", correct: false},
        ] 
    },
    {
        question:"सेल्वा होते हैं-    ",
        answers: [
            { text: "कनाडा के विस्तृत वन            ", correct: false},
            { text: "ब्राजील के विषुवतीय वर्षा वाले वन            ", correct: true},
            { text: "साइबेरिया के शंकुवृक्षी वन            ", correct: false},
            { text: "सदाबहार मानसून वन            ", correct: false},
        ] 
    },
    {
        question:"विश्व वन्यजीव निधि का शिलान्यास किस वर्ष किया गया था?        ",
        answers: [
            { text: "1969            ", correct: false},
            { text: "1992            ", correct: false},
            { text: "1961            ", correct: true},
            { text: "1965            ", correct: false},
        ] 
    },
    {
        question:"भू-पृष्ठ से परावर्तित अवरक्त विकिरण के अवशोषण द्वारा भू-वायुमंडल के तापमान में वृद्धि की प्रक्रिया को क्या कहते हैं ?",
        answers: [
            { text: "सुनामी", correct: false},
            { text: "सौर तापन", correct: false},
            { text: "ग्रीन हाउस प्रभाव", correct: true},
            { text: "भूकम्पीय प्रभाव", correct: false},
        ] 
    },
    {
        question:"वायु में नाइट्रोजन का प्रतिशत कितना है ?",
        answers: [
            { text: "0.94", correct: false},
            { text: "0.03", correct: false},
            { text: "78.03", correct: true},
            { text: "85.02", correct: false},
        ] 
    },
    {
        question:"सही उत्तर चुनिए जो कि वायुमंडल की परतों की क्रमबद्धता को दर्शाते हैं ?",
        answers: [
            { text: "आयनमंडल, आयतनमंडल, मध्यस्थमंडल, समतापमंडल, परिवर्तनमंडल                                                           ", correct: false},
            { text: "परिवर्तनमंडल, समतापमंडल, मध्यस्थमंडल, आयनमंडल, आयतनमंडल                                                             ", correct: true},
            { text: "आयतनमंडल, परिवर्तनमंडल, आयनमंडल, मध्यस्थमंडल, समतापमंडल                                                              ", correct: false},
            { text: "मध्यस्थमंडल, आयनमंडल, समतापमंडल, परिवर्तनमंडल, समतापमंडल                                                                ", correct: false},
        ] 
    },
    {
        question:"वायुमंडल को क्षोभ मंडल, समताप मंडल आदि परतों में विभाजित करने का मुख्य आधार क्या है ?",
        answers: [
            { text: "तापमान", correct: true},
            { text: "वायुदाब", correct: false},
            { text: "संघटन", correct: false},
            { text: "घनत्व", correct: false},
        ] 
    },
    {
        question:"क्षोभ मंडल की धरातल से औसत ऊंचाई लगभग कितनी है ?",
        answers: [
            { text: "8 किमी.", correct: false},
            { text: "14 किमी.", correct: true},
            { text: "18 किमी.", correct: false},
            { text: "22 किमी.", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से किस मंडल को संवहनमंडल भी कहा जाता है ?",
        answers: [
            { text: "क्षोभ मंडल", correct: true},
            { text: "समताप मंडल", correct: false},
            { text: "यन मंडल", correct: false},
            { text: "मध्य मंडल", correct: false},
        ] 
    },
    {
        question:"किस ऋतु में क्षोभ मंडल की ऊंचाई में वृद्धि हो जाती है ?",
        answers: [
            { text: "शीत ऋतु", correct: false},
            { text: "ग्रीष्म ऋतु", correct: true},
            { text: "वर्षा ऋतु", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"क्षोभ मंडल की धरातल से अधिकतम ऊंचाई है -",
        answers: [
            { text: "6 किमी.", correct: false},
            { text: "8 किमी.", correct: false},
            { text: "12 किमी.", correct: false},
            { text: "18 किमी.", correct: true},
        ] 
    },
    {
        question:"क्षोभ मंडल में तापमान की सामान्य ह्रास की 1 डिग्री सेल्सियस प्रत्येक -",
        answers: [
            { text: "146 मी० हेतु", correct: false},
            { text: "156 मी० हेतु", correct: false},
            { text: "166 मी० हेतु", correct: true},
            { text: "176 मी० हेतु", correct: false},
        ] 
    },
    {
        question:"क्षोभमंडल वायुमंडल का सबसे तप्त परत है, क्योंकि -",
        answers: [
            { text: "यह सूर्य के निकटतम है", correct: false},
            { text: "इसमें आवेशित कण है", correct: false},
            { text: "यह पृथ्वी के पृष्ठ से तप्त हो जाती है", correct: true},
            { text: "इसमें ऊष्मा पैदा होती है", correct: false},
        ] 
    },
    {
        question:"निचले मेंटल और बाहरी क्रोड के बीच पृथ्वी के आंतरिक भाग में मौजूद असांतत्य को _________ कहा जाता है।",
        answers: [
            { text: "लेहमैन असांतत्य", correct: false},
            { text: "रिपेटी असांतत्य", correct: false},
            { text: "गुटेनबर्ग असांतत्य", correct: true},
            { text: "उपर्युक्त में से एक से अधिक", correct: false},
        ] 
    },

    {
        question:"विवर्तनिक प्लेटों की प्रमुख प्रेरक शक्ति क्या है?",
        answers: [
            { text: "तापीय चालकता", correct: false},
            { text: "तापीय संवहन", correct: true},
            { text: "कोरियोलिस  प्रभाव", correct: false},
            { text: "उपर्युक्त में से एक से अधिक", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा युग्म 'पृथ्वी के आंतरिक भाग में असंतुलन - पृथ्वी के क्षेत्र' का सुमेलन है?",
        answers: [
            { text: "रिपती असांतत्य - बाह्य और आंतरिक मेंटल", correct: true},
            { text: "मोहरोविसिक असांतत्य - बाह्य और आंतरिक भूपर्पटी", correct: false},
            { text: "गुटेनबर्ग असांतत्य - बाह्य और आंतरिक क्रोड", correct: false},
            { text: "उपर्युक्त में से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"भूप्रावार(मेंटल) _____ की गहराई तक फैला हुआ है।",
        answers: [
            { text: "5400 किमी", correct: false},
            { text: "4500 किमी", correct: false},
            { text: "2900 किमी", correct: true},
            { text: "उपर्युक्त में से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"_________ पृथ्वी के चुंबकीय क्षेत्र के लिए जिम्मेदार है।",
        answers: [
            { text: "मेंटल", correct: false},
            { text: "क्रस्ट", correct: false},
            { text: "बाहरी कोर", correct: true},
            { text: "आंतरिक कोर", correct: false},
        ] 
    },
    {
        question:"भारत कितने भूकंप क्षेत्रों (भूकंपीय क्षेत्र) में विभाजित है?",
        answers: [
            { text: "4", correct: true},
            { text: "2", correct: false},
            { text: "6", correct: false},
            { text: "5", correct: false},
        ] 
    },
    {
        question:"भूपर्पटी में सबसे प्रचुर मात्रा में पायी जाने वाली धातु है",
        answers: [
            { text: "लोहा", correct: false},
            { text: "कैल्शियम", correct: false},
            { text: "एल्युमीनियम", correct: true},
            { text: "सोडियम", correct: false},
        ] 
    },
    {
        question:"पृथ्वी की सतह से केंद्र की ओर तापमान कैसे बदलता है?",
        answers: [
            { text: "समान रहता है ", correct: false},
            { text: "घटता है ", correct: false},
            { text: "बढ़ता है ", correct: true},
            { text: "इनमे से कोई नहीं ", correct: false},
        ] 
    },
    {
        question:"'पैसिफिक रिंग ऑफ फायर' किससे संबंधित है?",
        answers: [
            { text: "तेल के कुएं में लगी आग", correct: false},
            { text: "ऊष्मीय शक्ति संयंत्र", correct: false},
            { text: "ज्वालामुखी और भूकंप", correct: true},
            { text: "वन की आग", correct: false},
        ] 
    },
    {
        question:"पृथ्वी की महाद्वीपीय परत की औसत मोटाई कितनी है?",
        answers: [
            { text: "300 किमी", correct: false},
            { text: "5 किमी", correct: false},
            { text: "30 किमी", correct: true},
            { text: "2.5 किमी", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से कौन ज्वालामुखी के सबसे ज्यादा विस्फोटक प्रकार का उदाहरण है?",
        answers: [
            { text: "शील्ड ज्वालामुखी", correct: false},
            { text: "बेसाल्ट प्रवाह ज्वालामुखी ", correct: false},
            { text: "ज्वालामुखी कुंड", correct: true},
            { text: "सिन्डर शंकु ज्वालामुखी", correct: false},
        ] 
    },
    {
        question:"पृथ्वी की पपड़ी में दूसरी सबसे प्रचुर धातु कौन सी है?",
        answers: [
            { text: "ज़िंक", correct: false},
            { text: "लोहा", correct: true},
            { text: "अल्युमीनियम", correct: false},
            { text: "तांबा", correct: false},
        ] 
    },
    {
        question:"भूकंप के संबंध में 'उद्गम केंद्र' के लिए प्रयुक्त होने वाला पद है?",
        answers: [
            { text: "अवकेंद्र", correct: true},
            { text: "अधिकेंद्र", correct: false},
            { text: "समकेंद्र", correct: false},
            { text: "मुख्य बिंदु", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से कौन इन तत्वों में नहीं आता है?",
        answers: [
            { text: "ऑक्सीजन", correct: false},
            { text: "कार्बन", correct: true},
            { text: "सिलिकॉन", correct: false},
            { text: "कैल्शियम", correct: false},
        ] 
    },
    
    {
        question:"पृथ्वी के वायुमंडल का कितना प्रतिशत भाग 29 km की ऊंचाई तक पाया जाता है ?",
        answers: [
            { text: "29%'", correct: false},
            { text: "57%'", correct: false},
            { text: "76%'", correct: false},
            { text: "97%'", correct: true},
        ] 
    },
    {
        question:"निम्नलिखित में से कौन -सा कथन असत्य है ?",
        answers: [
            { text: "वायुमंडल की ऊपरी सीमा लगभग 10000 km की ऊंचाई तक है |", correct: false},
            { text: "वायुमंडल का 50%' भाग 5.6 km की ऊंचाई तक सिमित है |", correct: false},
            { text: "ऊंचाई में वृद्धि के साथ साथ जलवाष्प की मात्रा में वृद्धि होती है |", correct: true},
            { text: "वायुमंडल के निचले स्तर में भारी गैस एवं ऊपरी स्तर में हल्की गैसों की प्रधानता है |", correct: false},
        ] 
    },
    {
        question:"	वायुमंडल का सर्वाधिक स्थायी तत्व है -",
        answers: [
            { text: "नाइट्रोजन", correct: false},
            { text: "ऑक्सीजन", correct: false},
            { text: "कार्बनडाइऑक्साइड", correct: false},
            { text: "जलवाष्प", correct: true},
        ] 
    },
    {
        question:"वायुमंडल में सर्वाधिक कौन - सी गैस मिलती है ?",
        answers: [
            { text: "ऑक्सीजन", correct: false},
            { text: "हाइड्रोजन", correct: false},
            { text: "नाइट्रोजन", correct: true},
            { text: "कार्बन डाइऑक्साइड", correct: false},
        ] 
    },
    {
        question:"वायुमंडल में सर्वाधिक मात्रा में विद्यमान अक्रिय गैस कौन - सी है ?",
        answers: [
            { text: "ऑर्गन", correct: true},
            { text: "क्रिप्टोन", correct: false},
            { text: "हीलियम", correct: false},
            { text: "नियोन", correct: false},
        ] 
    },
    {
        question:"वायुमंडल मुख्यत: गर्म होता है -",
        answers: [
            { text: "सूर्य की सीधी किरणों से", correct: false},
            { text: "पृथ्वी से विकिरण द्वारा", correct: true},
            { text: "पृथ्वी के अंदर की ऊष्मा से", correct: false},
            { text: "पृथ्वी की गति के घर्षण से", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन - सा युग्म वायुमंडल की गैसों की बढती मात्रा को दर्शाता है ?",
        answers: [
            { text: "ओजोन, कार्बन, डाइऑक्साइड, ऑक्सीजन, नाइट्रोजन", correct: true},
            { text: "नाइट्रोजन, ऑक्सीजन, कार्बन डाइऔक्सैद, ओजोन", correct: false},
            { text: "कार्बन डाइऑक्साइड, ओजोन, ऑक्सीजन, नाइट्रोजन", correct: false},
            { text: "आर्गन, नाइट्रोजन, ऑक्सीजन, कार्बन डाइऑक्साइड", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से कौन - सी गैस ग्रीन हाउस प्रभाव के लिए उत्तरदायी है ?",
        answers: [
            { text: "क्लोरीन", correct: false},
            { text: "CO2", correct: true},
            { text: "ऑक्सीजन", correct: false},
            { text: "हाइड्रोजन", correct: false},
        ] 
    },
    {
        question:"सूर्य की तीव्र किरणों द्वारा झुलसने से वायुमंडल की कौन - सी गैस हमारी रक्षा करती है ?",
        answers: [
            { text: "ऑक्सीजन", correct: false},
            { text: "नाइट्रोजन", correct: false},
            { text: "ओजोन", correct: true},
            { text: "आर्गन", correct: false},
        ] 
    },
    {
        question:"पृथ्वी के वायुमंडल में पायी जाने वाली निम्नलिखित गैसों का सही अवरोही क्रम क्या होगा ? 1. नाइट्रोजन, 2. कार्बन डाइऑक्साइड, 3. ऑक्सीजन, 4. आर्गन, 5. नियोन",
        answers: [
            { text: "1, 3, 2, 4, 5", correct: false},
            { text: "1, 3, 2, 5, 4", correct: false},
            { text: "1, 3, 4, 2, 5", correct: true},
            { text: "1, 2, 3, 5, 4", correct: false},
        ] 
    },

    {
        question:"क्षोभ मंडल एवं समताप मंडल के बीच स्थित संक्रमण क्षेत्र को क्या कहा जाता है ?",
        answers: [
            { text: "समताप सीमा", correct: false},
            { text: "क्षोभ सीमा", correct: true},
            { text: "मध्य सीमा", correct: false},
            { text: "बाह्य सीमा", correct: false},
        ] 
    },

    {
        question:"पृथ्वी के वायु मंडल का सर्वाधिक घनत्व कहाँ पर होता है ?",
        answers: [
            { text: "क्षोभ मंडल", correct: true},
            { text: "समताप मंडल", correct: false},
            { text: "मध्य मंडल", correct: false},
            { text: "आयन मंडल", correct: false},
        ] 
    },

    {
        question:"विविध जलवायु एवं मौसम दशाओं को बदलने वाली सभी महत्त्वपूर्ण वायुमंडलीय प्रक्रियाएं कहाँ घटित होती है ?",
        answers: [
            { text: "समताप मंडल", correct: false},
            { text: "बर्हिमंडल", correct: false},
            { text: "आयनमंडल", correct: false},
            { text: "क्षोभमंडल", correct: true},
        ] 
    },

    {
        question:"	क्षोभ मंडल (Troposphere) वायुमंडल का निचला स्तर है जिसकी ऊंचाई भूमध्य रेखा पर होती है -",
        answers: [
            { text: "10 मील तक", correct: true},
            { text: "9 मील तक", correct: false},
            { text: "6 मील तक", correct: false},
            { text: "4 मील तक", correct: false},
        ] 
    },

    {
        question:"मेघ गर्जन वायुमंडल की किस परत में होता है ?",
        answers: [
            { text: "आयन मंडल", correct: false},
            { text: "ओजोन मंडल", correct: false},
            { text: "क्षोभ मंडल", correct: true},
            { text: "समताप मंडल", correct: false},
        ] 
    },

    {
        question:"परिवर्तन मंडल या क्षोभ में तापमान -",
        answers: [
            { text: "ऊंचाई के साथ घटता है |", correct: true },
            { text: "ऊंचाई के साथ बढ़ता है |", correct: false},
            { text: "अपरिवर्तित रहता है |", correct: false},
            { text: "पहले घटता है पुन: बढ़ता है |", correct: false},
        ] 
    },

    {
        question:"समताप मंडल (Stratosphere) है -",
        answers: [
            { text: "वायुमंडल का मध्यस्थ प्रदेश", correct: false},
            { text: "वायुमंडल का ऊपरी प्रदेश", correct: false},
            { text: "वायुमंडल का निचला प्रदेश", correct: false},
            { text: "क्षोभ सीमा के ऊपर स्थित प्रदेश", correct: true},
        ] 
    },

    {
        question:"वायुमंडल की किस सतह में तापमान में बहुत अधिक उतार-चढ़ाव नहीं होता ?",
        answers: [
            { text: "समताप मंडल", correct: true},
            { text: "क्षोभ मंडल", correct: false},
            { text: "बाह्य मंडल", correct: false},
            { text: "ताप मंडल", correct: false},
        ] 
    },

    {
        question:"ओजोन परत मुख्यतः कहाँ पायी जाती है ?",
        answers: [
            { text: "क्षोभ मंडल", correct: false},
            { text: "मध्य मंडल", correct: false},
            { text: "समताप मंडल", correct: true},
            { text: "बाह्य मंडल", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन - सी वातावरणीय परत सूर्य की पराबैंगनी किरणों को अवशोषित कर लेती है ?",
        answers: [
            { text: "क्षोभमंडल", correct: false},
            { text: "समतापमंडल", correct: false},
            { text: "आयनमंडल", correct: false},
            { text: "ओजोनमंडल", correct: true},
        ] 
    },

    {
        question:"समताप मंडल को जेट विमानों की उड़ान के लिए आदर्श माना जाता है, क्योंकि -",
        answers: [
            { text: "इस परत में उपस्थित ओजोन के कारण ईंधन की खपत कम होती है", correct: false},
            { text: "इस परत में तापमान सम रहता है, जो ईंधन की दक्षता के लिए अनुकूल परिस्थिति है", correct: false},
            { text: "यह परत विमानभेदी शस्त्रों की मारक क्षमता से बाहर है", correct: false},
            { text: "इस परत में बादल तथा अन्य मौसमी घटनाएँ नहीं होती", correct: true},
        ] 
    },

    {
        question:"समताप मंडल के संबंध में निम्न में से कौन - सा कथन असत्य है ?",
        answers: [
            { text: "समताप मंडल का विस्तार 50 किमी की ऊंचाई तक पाया जाता है |", correct: false},
            { text: "समताप मंडल की सीमा आयन मंडल से मिलती है |", correct: true},
            { text: "इस मंडल में बादलों का अभाव पाया जाता है |", correct: false},
            { text: "इस मंडल में धूल कण और जलवाष्प की मात्रा काफी कम होती है |", correct: false},
        ] 
    },

    {
        question:"ओजोन परत के प्रतिवर्ष 7 प्रतिशत की दर से अवक्षय के कारण उसमें 10 मिलियन वर्ग किमी. आकार का एक बड़ा छिद्र बन गया है | यह छिद्र अवस्थित है -",
        answers: [
            { text: "आर्कटिक के उपर", correct: false},
            { text: "अंटार्कटिका के ऊपर", correct: true},
            { text: "ध्रुवों के ऊपर", correct: false},
            { text: "", correct: false},
        ] 
    },

    {
        question:"वातावरण की वह परत जो रेडियो तरंगो को परावर्तित करती है, कौन - सी है ?",
        answers: [
            { text: "आयन मंडल", correct: true},
            { text: "क्षोभ मंडल", correct: false},
            { text: "समताप मंडल", correct: false},
            { text: "बाह्य मंडल", correct: false},
        ] 
    },

    {
        question:"संचार उपग्रह किस वायुमंडलीय स्तर में स्थित होते हैं ?",
        answers: [
            { text: "समताप मंडल", correct: false},
            { text: "आयन मंडल", correct: true},
            { text: "क्षोभ मंडल", correct: false},
            { text: "बाह्य मंडल", correct: false},
        ] 
    },

    {
        question:"वायुमंडल में ओजोन स्तर के अवक्षय का कारण निम्नलिखित में से कौन - सा है ?",
        answers: [
            { text: "सल्फर डाइऑक्साइड", correct: false},
            { text: "नाइट्रस ऑक्साइड", correct: false},
            { text: "कार्बन डाईऑक्साइड", correct: false},
            { text: "क्लोरो फ्लोरो कार्बन", correct: true},
        ] 
    },

    {
        question:"रेडियो की लघु तरंगें आयन मंडल की किस परत से परावर्तित होकर धरातल पर आती है ?",
        answers: [
            { text: "D परत", correct: false},
            { text: "E परत", correct: false},
            { text: "F परत", correct: true},
            { text: "S परत", correct: false},
        ] 
    },

    {
        question:"ऊपर से नीचे की ओर वायुमंडल की विभिन्न परतों की सीमाओं (Pause) का कौन - सा क्रम नहीं है ?",
        answers: [
            { text: "मैग्नीटोपॉज, मेसोपाज, स्ट्रेटोपॉज, ट्रोपोपॉज", correct: true},
            { text: "मेसोपॉज, स्ट्रेटोपॉज, ट्रोपोपॉज, मैग्नीटोपॉज", correct: false},
            { text: "ट्रोपोपॉज, स्ट्रेटोपॉज, मेसोपॉज, मैग्नीटोपॉज", correct: false},
            { text: "स्ट्रेटोपॉज, ट्रोपोपॉज, मैग्नीटोपॉज, मेसोपॉज", correct: false},
        ] 
    },

    {
        question:"वायुमंडल के किस भाग में जलवाष्प की कुल मात्रा का 90 प्रतिशत भाग विद्यमान रहता है ?",
        answers: [
            { text: "आयन मंडल", correct: false},
            { text: "ओजोन मंडल", correct: false},
            { text: "क्षोभ मंडल", correct: true},
            { text: "समताप मंडल", correct: false},
        ] 
    },

    {
        question:"वायुमंडल का कौन - सा भाग रसायन मंडल का एक भाग है ?",
        answers: [
            { text: "ताप मंडल", correct: false},
            { text: "आयन मंडल", correct: false},
            { text: "क्षोभ मंडल", correct: false},
            { text: "ओजोन मंडल", correct: true},
        ] 
    },
    {
        question:"किस वायुमंडलीय परत को 'मौसमी परिवर्तन की छत' के नाम से जाना जाता है ?",
        answers: [
            { text: "समताप मंडल", correct: false},
            { text: "क्षोभ मंडल", correct: true},
            { text: "आयन मंडल", correct: false},
            { text: "मध्य मंडल", correct: false},
        ] 
    },

    {
        question:"हवाई जहाज प्राय ................... में उड़ते हैं -",
        answers: [
            { text: "क्षोभ मंडल", correct: false},
            { text: "समताप मंडल", correct: true},
            { text: "मध्य मंडल", correct: false},
            { text: "बाह्रय मंडल", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की सतह से सबसे दूर वातावरणीय परत को क्या कहते है ?",
        answers: [
            { text: "मध्य मंडल", correct: false},
            { text: "समताप मंडल", correct: false},
            { text: "बहि मंडल", correct: true},
            { text: "आयन मंडल", correct: false},
        ] 
    },

    {
        question:"पृथ्वी के समीप पायी जाने वाली वायुमंडलीय परत क्या कहलाती है ?",
        answers: [
            { text: "ट्रोपोस्फेयर", correct: true},
            { text: "स्ट्रेटोस्फेयर", correct: false},
            { text: "आयनोस्फेयर", correct: false},
            { text: "एक्सोस्फेयर", correct: false},
        ] 
    },

    {
        question:"वातावरण में सबसे ज्यादा ओजोन का संकेंद्रण कहाँ होता है ?",
        answers: [
            { text: "आयनमंडल", correct: false},
            { text: "मध्यमंडल", correct: false},
            { text: "समतापमंडल", correct: true},
            { text: "क्षोभमंडल", correct: false},
        ] 
    },

    {
        question:"समुद्रतल पर औसत वायुदाब कितना होता है ?",
        answers: [
            { text: "1003.25 मिलीबार", correct: false},
            { text: "1013.25 मिलिबार", correct: true},
            { text: "1023.25 मिलिबार", correct: false},
            { text: "1034.25 मिलिबार", correct: false},
        ] 
    },

    {
        question:"वायुदाब प्राय: सर्वाधिक होता है, जब वायु होती है -",
        answers: [
            { text: "ठंडी तथा शुष्क", correct: true},
            { text: "ठंडी तथा नम", correct: false},
            { text: "उष्ण तथा शुष्क", correct: false},
            { text: "उष्ण तथा नम", correct: false},
        ] 
    },

    {
        question:"वायुदाब में अचानक आने वाली कमी निम्न में से किसका सूचक होती है ?",
        answers: [
            { text: "स्वच्छ मौसम", correct: false},
            { text: "तूफानी मौसम", correct: true},
            { text: "अत्यधिक शीतल मौसम", correct: false},
            { text: "वर्षा का मौसम", correct: false},
        ] 
    },

    {
        question:"सामान्य वायुदाब पाया जाता है -",
        answers: [
            { text: "पर्वतों पर", correct: false},
            { text: "रेगिस्तान में", correct: false},
            { text: "सागरतल पर", correct: true},
            { text: "धरातल के 5 km उपर", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन - सा कथन सत्य है ?",
        answers: [
            { text: "सागर तल पर वायुदाब अधिकतम होता है |", correct: false},
            { text: "वायुदाब के उतार-चढ़ाव विषुवत रेखा से ध्रुवों की ओर कम होता जाता है |", correct: false},
            { text: "60 डिग्री अक्षांश के बाद वायुदाब का दैनिक उतार-चढ़ाव नहीं देखा जाता है |", correct: false},
            { text: "उपर्युक्त सभी |", correct: true},
        ] 
    },

    {
        question:"ग्लोब पर दाब कटिबंधों (Pressure belts) की संख्या कितनी है ?",
        answers: [
            { text: "5", correct: false},
            { text: "6", correct: false},
            { text: "7", correct: true},
            { text: "9", correct: false},
        ] 
    },

    {
        question:"विषुवतीय निम्न दाब पेटी का विस्तार विषुवत रेखा के दोनों ओर कितने अक्षांश तक मिलता है ?",
        answers: [
            { text: "5 डिग्री", correct: true},
            { text: "10 डिग्री", correct: false},
            { text: "15 डिग्री", correct: false},
            { text: "20 डिग्री", correct: false},
        ] 
    },

    {
        question:"डोलड्रम पेटी का विस्तार सामान्यत: पाया जाता है -",
        answers: [
            { text: "0 डिग्री - 5 डिग्री उतर", correct: false},
            { text: "0 डिग्री - 5 डिग्री दक्षिण", correct: false},
            { text: "0 डिग्री - 10 डिग्री उतर", correct: false},
            { text: "5 डिग्री N - 5 डिग्री दक्षिण", correct: true},
        ] 
    },

    {
        question:"डोलड्रम क्षेत्र की विशेषता होती है -",
        answers: [
            { text: "निम्न दाब एवं वायु का अवतलन", correct: false},
            { text: "निम्न दाब एवं मंद पूर्वी पवन", correct: false},
            { text: "सामान्य दाब एवं वायु का अवतलन", correct: false},
            { text: "निम्न दाब एवं शांत पवन", correct: true},
        ] 
    },

    {
        question:"शांत पेटी किस रेखा के दोनों ओर पाई जाती है ?",
        answers: [
            { text: "भूमध्य रेखा", correct: true},
            { text: "कर्क रेखा", correct: false},
            { text: "मकर रेखा", correct: false},
            { text: "आर्कटिक वृत", correct: false},
        ] 
    },

    {
        question:"विश्व के सभी उष्ण मरुस्थल निम्न में से किस पेटी में स्थित है ?",
        answers: [
            { text: "विषुवतीय निम्न दाब पेटी", correct: false},
            { text: "उपोष्ण कटिबंधिय उच्च दाब पेटी", correct: true},
            { text: "उपध्रुवीय निम्न वायुदाब पेटी", correct: false},
            { text: "ध्रुवीय उच्च वायुदाब पेटी", correct: false},
        ] 
    },

    {
        question:"वायुमंडल में ट्रोपोस्फेयर के ऊपर कौन - सी परत पायी जाती है ?",
        answers: [
            { text: "स्ट्रेटोस्फेयर", correct: true},
            { text: "मेसोस्फेयर", correct: false},
            { text: "थर्मोस्फेयर", correct: false},
            { text: "एक्सोस्फेयर", correct: false},
        ] 
    },

    {
        question:"ओजोन परत पृथ्वी से करीब ऊंचाई पर है -",
        answers: [
            { text: "50 km", correct: false},
            { text: "300 km", correct: false},
            { text: "2000 km", correct: false},
            { text: "20 km", correct: true},
        ] 
    },

    {
        question:"जेट धाराएं प्राय: कहाँ पायी जाती है ?",
        answers: [
            { text: "ओजोन मंडल में", correct: false},
            { text: "क्षोभ सीमा में", correct: true},
            { text: "मध्य मंडल में", correct: false},
            { text: "आयन मंडल में", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन - सा कथन सत्य है ?",
        answers: [
            { text: "वायुदाब के घटने-बढ़ने की क्रिया को 'वायुदाब उच्चावच' कहते हैं |", correct: false},
            { text: "वायुदाब के उतार-चढ़ाव विषुवत रेखा से ध्रुवों की ओर कम होता जाता है |", correct: false},
            { text: "60 डिग्री अक्षांश के बाद वायुदाब का दैनिक उतार-चढ़ाव नहीं देखा जाता है |", correct: false},
            { text: "उपर्युक्त सभी |", correct: true},
        ] 
    },
    {
        question:"पृथ्वी के ऊपर मौजूद वायुमंडलीय परतों की संख्या है -",
        answers: [
            { text: "4", correct: false},
            { text: "5", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
        ] 
    },
    {
        question:"वायुमंडल के संदर्भ निम्नलिखित कथनों में से कौन - सा एक सही है ?",
        answers: [
            { text: "वायुमंडल की निश्चित ऊपरी सीमाएं होती हैं, परन्तु यह धीरे-धीरे विरल होता जाता है, जब तक कि वह अनवगम्य न हो जाए |", correct: false},
            { text: "वायुमंडल की कोई निश्चित ऊपरी सीमाएं नहीं होती हैं, परन्तु यह धीरे-धीरे विरल होता जाता है, जब तक कि यह अनवगम्य न हो जाए |", correct: true},
            { text: "वायुमंडल की निश्चित ऊपरी सीमाएं होती है, परन्तु यह धीरे-धीरे घना होता जाता है जब तक कि यह अनवगम्य न हो जाए |", correct: false},
            { text: "वायुमंडल की कोई निश्चित ऊपरी सीमाएं नहीं होती है, परन्तु यह धीरे-धीरे घना होता जाता है जब तक कि यह अनवगम्य न हो जाए |", correct: false},
        ] 
    },
    {
        question:"भारत के 15 एग्रो-क्लाइमेटिक (कृषि जलवायु) क्षेत्रों में निम्न में से किस क्षेत्र को 'पश्चिमी शुष्क क्षेत्र' के रूप में वर्गीकृत किया गया है ?        ",
        answers: [
            { text: "पश्चिम बंगाल द्वार             ", correct: false},
            { text: "उत्तर बिहार शुष्क क्षेत्र", correct: false},
            { text: "राजस्थान शुष्क क्षेत्र", correct: true},
            { text: "उपर्युक्त में से एक से अधिक            ", correct: false},
        ] 
    },

    {
        question:"जैसे-जैसे कोई हिमालय पर ऊपर की ओर जाता है, वायुमंडलीय दाब पर क्या प्रभाव पड़ता है?",
        answers: [
            { text: "घटता जाता है। ", correct: true},
            { text: "कई गुना हो जाता है। ", correct: false},
            { text: "नियत रहता है। ", correct: false},
            { text: "बढ़ता जाता है। ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा जिला राजस्थान में कृषि जलवायु क्षेत्र III-B/बाढ़ प्रवण पूर्वी मैदान में शामिल नहीं है?",
        answers: [
            { text: "धौलपुर", correct: false},
            { text: "टोंक", correct: true},
            { text: "करौली", correct: false},
            { text: "अनुत्तरित प्रश्न", correct: false},
        ] 
    },

    {
        question:"_______ के लोग तापमान की अधिकतम सीमा और मौसम की विविधता के विषय में संभवतया अवगत हैं। ",
        answers: [
            { text: "इंदौर", correct: false},
            { text: "मुंबई", correct: true},
            { text: "जैसलमेर", correct: false},
            { text: "लखनऊ", correct: false},
        ] 
    },

    {
        question:"भारत में शीतकालीन मौसम की अवधि क्या है?",
        answers: [
            { text: "नवंबर के मध्य से फरवरी तक", correct: true},
            { text: "अक्टूबर से दिसंबर", correct: false},
            { text: "नवंबर से जनवरी", correct: false},
            { text: "दिसंबर से मार्च", correct: false},
        ] 
    },

    {
        question:"थार क्षेत्र में, गतिशील रेत के टीलों को स्थानीय भाषा में किस नाम से जाना जाता है?",
        answers: [
            { text: "धरियन", correct: true},
            { text: "दौर्स", correct: false},
            { text: "धोरोस", correct: false},
            { text: "धाया", correct: false},
        ] 
    },

    {
        question:"भारत में कोप्पेन द्वारा जलवायु वर्गीकरण के संबंध में निम्नलिखित कथनों पर विचार कीजियेl",
        answers: [
            { text: "उन्होंने भारत को आठ जलवायु क्षेत्रों में वर्गीकृत किया। ", correct: false},
            { text: "भारत का कोरोमंडल तट मानसून शुष्क ग्रीष्म जलवायु का अनुभव करता है। ", correct: false},
            { text: "केवल 1 और 2", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा राज्य जलवायु क्षेत्र के अंतर्गत है, जिसका नाम 'मानसून का प्रकार कम शुष्क सर्दियों के मौसम के साथ' है?",
        answers: [
            { text: "महाराष्ट्र (दक्षिणी मुंबई)", correct: true},
            { text: "तमिलनाडु", correct: false},
            { text: "राजस्थान (पश्चिमी)", correct: false},
            { text: "गुजरात", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी समशीतोष्ण समुद्री जलवायु है जिसमें सभी मौसमों में पर्याप्त वर्षा होती है?",
        answers: [
            { text: "Am", correct: false},
            { text: "BSh", correct: false},
            { text: "BSk", correct: false},
            { text: "Cfb", correct: true},
        ] 
    },

    {
        question:"राजस्थान का कौन-सा क्षेत्र कोपेन के जलवायु वर्गीकरण के अनुसार Aw प्रकार की जलवायु का अनुभव करता है?",
        answers: [
            { text: "उत्तर-पूर्वी क्षेत्र ", correct: false},
            { text: "दक्षिणवर्ती क्षेत्र ", correct: true},
            { text: "पश्चिमी क्षेत्र ", correct: false},
            { text: "उत्तरवर्ती क्षेत्र ", correct: false},
        ] 
    },

    {
        question:"कोपेन के जलवायु वर्गीकरण के अनुसार, निम्नलिखित में से कौन सही सुमेलित हैं?",
        answers: [
            { text: "Cwg - भरतपुर", correct: false},
            { text: "Aw - डूंगरपुर", correct: false},
            { text: "Bshw - गंगानगर", correct: false},
            { text: "(a) एवं (b)", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किस क्षेत्र में भारत के अन्य क्षेत्रों की तुलना में अधिक मौसमी विरोधाभास है?",
        answers: [
            { text: "भारत के आतंरिक भाग", correct: true},
            { text: "भारत के तटीय क्षेत्र", correct: false},
            { text: "भारत के पहाड़ी क्षेत्र", correct: false},
            { text: "भारत के द्वीप", correct: false},
        ] 
    },

    {
        question:"किसी विशाल क्षेत्र में लम्बे समय तक औसत की कुल स्थिति को क्या कहा जाता है?",
        answers: [
            { text: "मौसम", correct: false},
            { text: "तापान्तर", correct: false},
            { text: "ऋतु", correct: false},
            { text: "जलवायु", correct: true},
        ] 
    },

    {
        question:"भारतीय जलवायु कहलाती है [RRB 2006]",
        answers: [
            { text: "शीतोष्ण कटिबन्धीय मानसूनी", correct: false},
            { text: "उष्ण कटिबन्धीय मानूसनी", correct: true},
            { text: "सम शीतोष्ण कटिबन्धीय", correct: false},
            { text: "सम उष्ण कटिबन्धीय", correct: false},
        ] 
    },

    {
        question:"भारत की जलवायु की सबसे महत्त्वपूर्ण विशेषता होती है",
        answers: [
            { text: "वर्ष भर लगातार वर्षा", correct: false},
            { text: "पवनों की दिशा में परिवर्तन", correct: false},
            { text: "ग्रीष्म एवं शीतकालीन पवनों का प्रभावी होना", correct: false},
            { text: "हवाओं का मौसमी परिवर्तन", correct: true},
        ] 
    },
    {
        question:"भारतीय जलवायु को प्रभावित करने वाला उच्चावच सम्बन्धित कारक है",
        answers: [
            { text: "वायुदाब", correct: false},
            { text: "पवनों की गति", correct: false},
            { text: "तापमान", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"समुद्रटीय प्रदेशों में किस प्रकार की जलवायु पायी जाती है?",
        answers: [
            { text: "सम जलवायु", correct: true},
            { text: "विषम जलवायु", correct: false},
            { text: "मध्य जलवायु", correct: false},
            { text: "उपोष्ण जलवायु", correct: false},
        ] 
    },

    {
        question:"‘मानसून’ शब्द की व्युत्पत्ति हुई",
        answers: [
            { text: "अरबी भाषा से", correct: true},
            { text: "स्पेनिश भाषा से", correct: false},
            { text: "हिन्दी भाषा से", correct: false},
            { text: "आंग्ल भाषा से", correct: false},
        ] 
    },

    {
        question:"मानसून का प्रसार मुख्यतः रहता है।",
        answers: [
            { text: "10° उत्तरी से 20° दक्षिणी अक्षांशों के मध्य", correct: false},
            { text: "20° उत्तरी से 30° दक्षिणी अक्षांशों के मध्य", correct: false},
            { text: "20° उत्तरी से 20° दक्षिणी अक्षांशों के मध्य", correct: true},
            { text: "30° उत्तरी से 30° दक्षिणी अक्षांशों के मध्य", correct: false},
        ] 
    },

    {
        question:"भारत में ग्रीष्मकालीन मानसून के प्रवाह की सामान्य दिशा निम्नलिखित में से कौन-सी है?",
        answers: [
            { text: "दक्षिण से उत्तर", correct: false},
            { text: "दक्षिण-पश्चिम से दक्षिण-पूर्व", correct: false},
            { text: "दक्षिण-पूर्व से दक्षिण-पश्चिम ", correct: false},
            { text: "दक्षिण-पश्चिम से उत्तर-पूर्व", correct: true},
        ] 
    },

    {
        question:"भारत के किस क्षेत्र में ग्रीष्मकालीन मानसून सर्वप्रथम आता है?",
        answers: [
            { text: "हिमालय क्षेत्र", correct: false},
            { text: "पूर्वी घाट", correct: false},
            { text: "पश्चिमी घाट", correct: true},
            { text: "भारतीय गंगा मैदान", correct: false},
        ] 
    },

    {
        question:"भारतीय कृषि ‘मानसून का जुआ’ मानी गई है",
        answers: [
            { text: "मानसून के समय भारी वर्षा होने के कारण", correct: false},
            { text: "पश्चिमी घाट में भारी वर्षा होने के कारण", correct: false},
            { text: "उत्तर-पश्चिमी भारत और तमिलनाडु में शीतकालीन वर्षा होने के कारण", correct: false},
            { text: "अनिश्चित एवं अनियमित मानसून के कारण", correct: true},
        ] 
    },

    {
        question:"शीतकाल में पश्चिमी बाधा (पश्चिमी विक्षोभ) से भारत के किस भाग में वर्षा होती है?",
        answers: [
            { text: "पंजाब", correct: false},
            { text: "केरल", correct: false},
            { text: "तमिलनाडु", correct: false},
            { text: "उत्तरी भारत में", correct: true},
        ] 
    },

    {
        question:"देश के सर्वाधिक क्षेत्रफल पर किस प्रकार के वन पाए जाते हैं ?",
        answers: [
            { text: "पर्वतीय वन", correct: false},
            { text: "उष्णार्द्र सदाबहार वन", correct: false},
            { text: "आर्द्र मानसूनी वन", correct: false},
            { text: "उष्णार्द्र पतझड़ वन", correct: true},
        ] 
    },

    {
        question:"देश के उन भागों में जहाँ औसत वार्षिक वर्षा 200 सेमी. से अधिक तथा वार्षिक औसत तापमान 24°C के आसपास, वर्ष भर आर्द्रता 70%'' तक रहती है, किस प्रकार के वन पाए जाते हैं ?",
        answers: [
            { text: "पर्वतीय वन", correct: false},
            { text: "उष्णार्द्र सदाबहार वन", correct: true},
            { text: "आर्द्र मानसूनी वन", correct: false},
            { text: "उष्णार्द्र पतझड़ वन", correct: false},
        ] 
    },


    {
        question:"देश के 100 से 200 सेमी. औसत वार्षिक वर्षा वाले भागों में किस प्रकार की वनस्पति पायी जाती है ?",
        answers: [
            { text: "उष्णार्द्र सदाबहार वन", correct: false},
            { text: "मैंग्रोव वन", correct: false},
            { text: "उष्णार्द्र पतझड़ वन", correct: true},
            { text: "मरुस्थलीय वन", correct: false},
        ] 
    },

    {
        question:"50 सेमी. से कम औसत वार्षिक वर्षा वाले क्षेत्रों में सामान्यतया किस प्रकार के वन पाए जाते हैं ?",
        answers: [
            { text: "उष्णार्द्र मानसूनी वन", correct: false},
            { text: "उष्णार्द्र पतझड़ वन", correct: false},
            { text: "आर्द्र मानसूनी वन", correct: false},
            { text: "मरुस्थलीय वन", correct: true},
        ] 
    },

    {
        question:"दलदली अथवा ज्वार-भाटा क्षेत्रों में पाए जाने वाले वन को क्या कहा जाता है ?",
        answers: [
            { text: "मैंग्रोव वन", correct: true},
            { text: "शोला वन", correct: false},
            { text: "मानसूनी वन", correct: false},
            { text: "पतझड़ वन", correct: false},
        ] 
    },

    {
        question:"भारत में मैंग्रोव वनस्पति का सर्वाधिक विस्तार किस राज्य में पाया जाता है ?",
        answers: [
            { text: "गोवा", correct: false},
            { text: "प. बंगाल", correct: true},
            { text: "आ. प्र.", correct: false},
            { text: "ओड़िशा", correct: false},
        ] 
    },

    {
        question:"भारत में चन्दन की लकड़ी के वन सबसे अधिक कहाँ पाए जाते हैं ?",
        answers: [
            { text: "असम की पहाड़ियों में", correct: false},
            { text: "शिवालिक की पहाड़ियों में", correct: false},
            { text: "नीलगिरि की पहाड़ियों में", correct: true},
            { text: "सतपुड़ा की पहाड़ियों में", correct: false},
        ] 
    },

    {
        question:"साइलेंट वेली (Silent Valley) के चर्चित होने का कारण है -",
        answers: [
            { text: "जनसंख्या विस्फोट", correct: false},
            { text: "परमाणु केंद्र की स्थापना", correct: false},
            { text: "अधिक जल संचयन", correct: false},
            { text: "जैव विविधता एवं सदाबहार वन का संरक्षण", correct: true},
        ] 
    },

    {
        question:"फूलों की घाटी स्थित है -",
        answers: [
            { text: "केरल", correct: false},
            { text: "जम्मू-कश्मीर", correct: false},
            { text: "उत्तराखंड", correct: true},
            { text: "हिमाचल प्रदेश", correct: false},
        ] 
    },

    {
        question:"शांत-घाटी अवस्थित है -",
        answers: [
            { text: "केरल", correct: true},
            { text: "कर्नाटक", correct: false},
            { text: "उत्तराखंड", correct: false},
            { text: "तमिलनाडु", correct: false},
        ] 
    },

    {
        question:"पश्चिमी हिमालय में उच्च पर्वतीय वनस्पतियाँ 3000 मीटर तक की उंचाई तक ही उपलब्ध होती है जबकि पूर्वी हिमालय में 4000 मीटर की उंचाई तक मिलती है | एक ही पर्वत श्रेणी में इस प्रकार की विविधता का कारण है -",
        answers: [
            { text: "पूर्वी हिमालय का पश्चिमी हिमालय से अधिक ऊँचा होना", correct: false},
            { text: "पूर्वी हिमालय का भूमध्य रेखा और समुद्र तल से पश्चिमी हिमालय की अपेक्षा अधिक निकट होना", correct: false},
            { text: "पूर्वी हिमालय में प. हिमालय की अपेक्षा अधिक मानसूनी वर्षा होना", correct: true},
            { text: "पूर्वी हिमालय की चट्टानों का पश्चिमी हिमालयी चट्टानों से अधिक उर्वर होना            ", correct: false},
        ] 
    },
    {
        question:"सूची-I को सूची-II से सुमेलित कीजिए : सूची-I A. सागौन B. देवदार C. सुन्दरी D. सिनकोना सूची-II 1. हिमालय की तराई 2. मध्य भारत 3. सुन्दर वन 4. हिमालय के उच्च पर्वतीय क्षेत्र",
        answers: [
            { text: "A → 1, B → 4, C → 3, D → 2", correct: false},
            { text: "A → 3, B → 2, C → 1, D → 4", correct: false},
            { text: "A → 4, B → 1, C → 3, D → 2", correct: true},
            { text: "A → 2, B → 3, C → 4, D → 1", correct: false},
        ] 
    },

    {
        question:"सूची-I को सूची-II से सुमेलित कीजिए : सूची-I (वन प्रकार) A. उष्णकटिबंधीय आर्द्र पर्णपाती B. उष्णकटिबंधीय शुष्क पर्णपाती C. अल्पाइन D. उष्णकटिबंधीय सदाबहार सूची-II (प्रदेश) 1. अरुणाचल प्रदेश 2. सह्याद्री 3. मध्य गंगा मैदान 4. तराई",
        answers: [
            { text: "A → 4, B → 3, C → 1, D → 2", correct: true},
            { text: "A → 4, B → 2, C → 1, D → 3", correct: false},
            { text: "A → 1, B → 3, C → 2, D → 4", correct: false},
            { text: "A → 3, B → 1, C → 4, D → 2", correct: false},
        ] 
    },

    {
        question:"पश्चिमी घाट पर पायी जाने वाली वनस्पति का प्रकार है -",
        answers: [
            { text: "सदाहरित", correct: true},
            { text: "अल्पाइन", correct: false},
            { text: "सवाना", correct: false},
            { text: "पर्णपाती", correct: false},
        ] 
    },

    {
        question:"उष्ण कटिबन्धीय आर्द्र सदाबहार वन पाए जाते हैं -",
        answers: [
            { text: "अरावली पर्वतमाला पर", correct: false},
            { text: "शिलांग पठार पर", correct: false},
            { text: "शिवालिक श्रेणी पर", correct: false},
            { text: "प्रायद्वीपीय पठार पर", correct: true},
        ] 
    },

    {
        question:"सूची-I को सूची-II से सुमेलित कीजिए : सूची-I वार्षिक वर्षा) A. 100 से 200 सेमी° B. 50 से 100 सेमी. C. 50 सेमी. से कम D. 200 सेमी. से अधिक सूची-II (वनों के प्रकार) 1. उष्ण आर्द्र सदाबहार वन 2. उष्ण कटिबंधीय पतझड़ वन 3. उष्णकटिबंधीय शुष्क वन 4. मरुस्थलीय एवं अर्द्ध मरुस्थलीय वन",
        answers: [
            { text: "A → 2, B → 3, C → 1, D → 4", correct: false},
            { text: "A → 2, B → 3, C → 4, D → 1", correct: true},
            { text: "A → 1, B → 4, C → 3, D → 2", correct: false},
            { text: "A → 4, B → 1, C → 2, D → 3", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन उष्णकटिबंधीय वर्षा वनों की अपेक्षा शीतोष्ण कटिबंधीय वनों का उपयोग को अधिक आसान बनाता है ?",
        answers: [
            { text: "बाजार से निकटता", correct: false},
            { text: "अधिक लम्बे वृक्ष", correct: false},
            { text: "दोनों", correct: false},
            { text: "उपरोक्त में से कोई नहीं।", correct: true},
        ] 
    },

    {
        question:"निम्न में से किन पहाड़ियों पर उष्ण कटिबन्धीय सदाबहार वन पाए जाते हैं ?",
        answers: [
            { text: "नीलगिरि पहाड़ियां", correct: true},
            { text: "अरावली पहाड़ियां", correct: false},
            { text: "राजमहल पहाड़ियां", correct: false},
            { text: "शिवालिक पहाड़ियां", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन - सा राज्य शहतूत रेशम उत्पादित करता है ?",
        answers: [
            { text: "ओड़िशा", correct: false},
            { text: "कर्नाटक", correct: true},
            { text: "पश्चिम बंगाल", correct: false},
            { text: "जम्मू-कश्मीर", correct: false},
        ] 
    },

    {
        question:"गंगा-ब्रह्मपुत्र के डेल्टाई क्षेत्रों में किस वृक्ष की अधिकता के कारण इसे 'सुंदरवन' कहा जाता है ?",
        answers: [
            { text: "चन्दन", correct: false},
            { text: "शीशम", correct: false},
            { text: "सुन्दरी", correct: true},
            { text: "इनमें से सभी", correct: false},
        ] 
    },

    {
        question:"भारत में चन्दन की लकड़ी के लिए प्रसिद्ध राज्य है -",
        answers: [
            { text: "असम", correct: false},
            { text: "केरल", correct: false},
            { text: "कर्नाटक", correct: true},
            { text: "प. बंगाल", correct: false},
        ] 
    },

    {
        question:"भारत के किस भौतिक प्रदेश में ऊष्ण कटिबन्धीय से लेकर अल्पाइन प्रकार की वनस्पति मिलती है ?",
        answers: [
            { text: "दक्षिण का प्रायद्वीपीय पठार", correct: false},
            { text: "उत्तर का विशाल मैदान", correct: false},
            { text: "उ. का हिमालय पर्वतीय प्रदेश", correct: true},
            { text: "तटीय मैदान", correct: false},
        ] 
    },

    {
        question:"भारत में सर्वाधिक महत्त्वपूर्ण व्यावसायिक वन है -",
        answers: [
            { text: "उष्ण कटिबन्धीय सदाबाहर वन", correct: false},
            { text: "उष्ण कटिबन्धीय पतझड़ वन", correct: false},
            { text: "उष्ण कटिबन्धीय अर्द्ध सदाबहार वन", correct: true},
            { text: "कोणधारी वन", correct: false},
        ] 
    },

    {
        question:"भारत के वनों में उष्ण कटिबन्धीय और शीतोष्ण कटिबन्धीय वन का योगदान क्रमश: है -",
        answers: [
            { text: "90%'' व 10%''", correct: false},
            { text: "93%'' व 7%''", correct: true},
            { text: "95%'' व 5%''", correct: false},
            { text: "97%'' व 3%''", correct: false},
        ] 
    },

    {
        question:"भारत में प्रमुख वनस्पति कौन - सी है ?",
        answers: [
            { text: "पतझड़ वन", correct: true},
            { text: "वर्षा वन", correct: false},
            { text: "कांटेदार झाड़ियाँ", correct: false},
            { text: "सबाना", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन - सा राज्य तेंदु पत्ते का मुख्य उत्पादक है ?",
        answers: [
            { text: "ओड़िशा", correct: false},
            { text: "महाराष्ट्र", correct: false},
            { text: "मध्य प्रदेश", correct: true},
            { text: "उत्तर प्रदेश", correct: false},
        ] 
    },

    {
        question:"भारत के निम्नलिखित क्षेत्रों में से किस एक में मैंग्रोव वन, सदापर्णी वन और पर्णपाती वनों के संयोजन है ?",
        answers: [
            { text: "उत्तर तटीय आंध्र प्रदेश", correct: false},
            { text: "दक्षिण पश्चिम बंगाल", correct: false},
            { text: "अंडमान और निकोबार द्वीपसमूह", correct: true},
            { text: "दक्षिण सौराष्ट्र", correct: false},
        ] 
    },

    {
        question:"जो वन चक्रवातों के अवरोधकों का कार्य करते है, वे वन कौन-से हैं",
        answers: [
            { text: "मैंग्रोव वन", correct: true},
            { text: "मानसून वन", correct: false},
            { text: "अल्पाइन वन", correct: false},
            { text: "एबरग्रीन वन", correct: false},
        ] 
    },

    {
        question:"गंगा ब्रह्मपुत्र डेल्टा क्षेत्र का वन निम्नलिखित में से किस नाम से जाना जाता है ?",
        answers: [
            { text: "मानसून वन", correct: false},
            { text: "वर्षा वन", correct: false},
            { text: "पतझड़ वन", correct: false},
            { text: "सुंदर वन", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित नदी डेल्टाओं में से किन पर मैंग्रोव वन पाए जाते हैं ? 1. नर्मदा 2. स्वर्णरेखा 3. कृष्णा 4. गंगा नीचे दिए गए कूट का प्रयोग कर सही उत्तर चुनी -",
        answers: [
            { text: "1 और 3", correct: false},
            { text: "3 और 4", correct: false},
            { text: "2 और 4", correct: false},
            { text: "2,3 और 4", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित राज्यों पर विचार कीजिए - 1. अरुणाचल प्रदेश 2. हिमाचल प्रदेश 3. मिजोरम उपर्युक्त राज्यों में से किसमे/ किनमे उष्णकटिबंधीय आर्द्र सदापर्णी वन होते हैं ?",
        answers: [
            { text: "केवल 1", correct: false},
            { text: "केवल 2 और 3", correct: false},
            { text: "केवल 1 और 3", correct: true},
            { text: "1,2 और 3", correct: false},
        ] 
    },


































   
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 