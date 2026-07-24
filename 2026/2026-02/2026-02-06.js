/*
Daily Coding Challenge
February 6, 2026
Instructions
script.jsEditor
JavaScript
Python
Console
2026 Winter Games Day 1: Opening Day
Today marks the start of the 2026 Winter Games. The next 17 days will bring you coding challenges inspired by them.

For the first one, you are given a two-letter country code and need to return the flag emoji for that country.

Use this list:

Country	Code	Flag
Albania	"AL"	"🇦🇱"
Andorra	"AD"	"🇦🇩"
Argentina	"AR"	"🇦🇷"
Armenia	"AM"	"🇦🇲"
Australia	"AU"	"🇦🇺"
Austria	"AT"	"🇦🇹"
Azerbaijan	"AZ"	"🇦🇿"
Belgium	"BE"	"🇧🇪"
Benin	"BJ"	"🇧🇯"
Bolivia	"BO"	"🇧🇴"
Bosnia and Herzegovina	"BA"	"🇧🇦"
Brazil	"BR"	"🇧🇷"
Bulgaria	"BG"	"🇧🇬"
Canada	"CA"	"🇨🇦"
Chile	"CL"	"🇨🇱"
China	"CN"	"🇨🇳"
Colombia	"CO"	"🇨🇴"
Croatia	"HR"	"🇭🇷"
Cyprus	"CY"	"🇨🇾"
Czech Republic	"CZ"	"🇨🇿"
Denmark	"DK"	"🇩🇰"
Ecuador	"EC"	"🇪🇨"
Eritrea	"ER"	"🇪🇷"
Estonia	"EE"	"🇪🇪"
Finland	"FI"	"🇫🇮"
France	"FR"	"🇫🇷"
Georgia	"GE"	"🇬🇪"
Germany	"DE"	"🇩🇪"
Great Britain	"GB"	"🇬🇧"
Greece	"GR"	"🇬🇷"
Guinea-Bissau	"GW"	"🇬🇼"
Haiti	"HT"	"🇭🇹"
Hong Kong	"HK"	"🇭🇰"
Hungary	"HU"	"🇭🇺"
Iceland	"IS"	"🇮🇸"
India	"IN"	"🇮🇳"
Iran	"IR"	"🇮🇷"
Ireland	"IE"	"🇮🇪"
Israel	"IL"	"🇮🇱"
Italy	"IT"	"🇮🇹"
Jamaica	"JM"	"🇯🇲"
Japan	"JP"	"🇯🇵"
Kazakhstan	"KZ"	"🇰🇿"
Kenya	"KE"	"🇰🇪"
Kosovo	"XK"	"🇽🇰"
Kyrgyzstan	"KG"	"🇰🇬"
Latvia	"LV"	"🇱🇻"
Lebanon	"LB"	"🇱🇧"
Liechtenstein	"LI"	"🇱🇮"
Lithuania	"LT"	"🇱🇹"
Luxembourg	"LU"	"🇱🇺"
Madagascar	"MG"	"🇲🇬"
Malaysia	"MY"	"🇲🇾"
Malta	"MT"	"🇲🇹"
Mexico	"MX"	"🇲🇽"
Moldova	"MD"	"🇲🇩"
Monaco	"MC"	"🇲🇨"
Mongolia	"MN"	"🇲🇳"
Montenegro	"ME"	"🇲🇪"
Morocco	"MA"	"🇲🇦"
Netherlands	"NL"	"🇳🇱"
New Zealand	"NZ"	"🇳🇿"
Nigeria	"NG"	"🇳🇬"
North Macedonia	"MK"	"🇲🇰"
Norway	"NO"	"🇳🇴"
Pakistan	"PK"	"🇵🇰"
Philippines	"PH"	"🇵🇭"
Poland	"PL"	"🇵🇱"
Portugal	"PT"	"🇵🇹"
Puerto Rico	"PR"	"🇵🇷"
Romania	"RO"	"🇷🇴"
San Marino	"SM"	"🇸🇲"
Saudi Arabia	"SA"	"🇸🇦"
Serbia	"RS"	"🇷🇸"
Singapore	"SG"	"🇸🇬"
Slovakia	"SK"	"🇸🇰"
Slovenia	"SI"	"🇸🇮"
South Africa	"ZA"	"🇿🇦"
South Korea	"KR"	"🇰🇷"
Spain	"ES"	"🇪🇸"
Sweden	"SE"	"🇸🇪"
Switzerland	"CH"	"🇨🇭"
Thailand	"TH"	"🇹🇭"
Trinidad & Tobago	"TT"	"🇹🇹"
Turkey	"TR"	"🇹🇷"
Ukraine	"UA"	"🇺🇦"
United Arab Emirates	"AE"	"🇦🇪"
United States	"US"	"🇺🇸"
Uruguay	"UY"	"🇺🇾"
Uzbekistan	"UZ"	"🇺🇿"
Venezuela	"VE"	"🇻🇪"

*/
const FLAGS = {
"AL":"🇦🇱",
"AD":"🇦🇩",
"AR":"🇦🇷",
"AM":"🇦🇲",
"AU":"🇦🇺",
"AT":"🇦🇹",
"AZ":"🇦🇿",
"BE":"🇧🇪",
"BJ":"🇧🇯",
"BO":"🇧🇴",
"BA":"🇧🇦",
"BR":"🇧🇷",
"BG":"🇧🇬",
"CA":"🇨🇦",
"CL":"🇨🇱",
"CN":"🇨🇳",
"CO":"🇨🇴",
"HR":"🇭🇷",
"CY":"🇨🇾",
"CZ":"🇨🇿",
"DK":"🇩🇰",
"EC":"🇪🇨",
"ER":"🇪🇷",
"EE":"🇪🇪",
"FI":"🇫🇮",
"FR":"🇫🇷",
"GE":"🇬🇪",
"DE":"🇩🇪",
"GB":"🇬🇧",
"GR":"🇬🇷",
"GW":"🇬🇼",
"HT":"🇭🇹",
"HK":"🇭🇰",
"HU":"🇭🇺",
"IS":"🇮🇸",
"IN":"🇮🇳",
"IR":"🇮🇷",
"IE":"🇮🇪",
"IL":"🇮🇱",
"IT":"🇮🇹",
"JM":"🇯🇲",
"JP":"🇯🇵",
"KZ":"🇰🇿",
"KE":"🇰🇪",
"XK":"🇽🇰",
"KG":"🇰🇬",
"LV":"🇱🇻",
"LB":"🇱🇧",
"LI":"🇱🇮",
"LT":"🇱🇹",
"LU":"🇱🇺",
"MG":"🇲🇬",
"MY":"🇲🇾",
"MT":"🇲🇹",
"MX":"🇲🇽",
"MD":"🇲🇩",
"MC":"🇲🇨",
"MN":"🇲🇳",
"ME":"🇲🇪",
"MA":"🇲🇦",
"NL":"🇳🇱",
"NZ":"🇳🇿",
"NG":"🇳🇬",
"MK":"🇲🇰",
"NO":"🇳🇴",
"PK":"🇵🇰",
"PH":"🇵🇭",
"PL":"🇵🇱",
"PT":"🇵🇹",
"PR":"🇵🇷",
"RO":"🇷🇴",
"SM":"🇸🇲",
"SA":"🇸🇦",
"RS":"🇷🇸",
"SG":"🇸🇬",
"SK":"🇸🇰",
"SI":"🇸🇮",
"ZA":"🇿🇦",
"KR":"🇰🇷",
"ES":"🇪🇸",
"SE":"🇸🇪",
"CH":"🇨🇭",
"TH":"🇹🇭",
"TT":"🇹🇹",
"TR":"🇹🇷",
"UA":"🇺🇦",
"AE":"🇦🇪",
"US":"🇺🇸",
"UY":"🇺🇾",
"UZ":"🇺🇿",
"VE":"🇻🇪"
}

function getFlag(code) {
    return FLAGS[code];
}

const runTests = require('../../helpers/runTests');
runTests(getFlag, `
    getFlag("AL") should return "🇦🇱".
getFlag("AD") should return "🇦🇩".
getFlag("AR") should return "🇦🇷".
getFlag("AM") should return "🇦🇲".
getFlag("AU") should return "🇦🇺".
getFlag("AT") should return "🇦🇹".
getFlag("AZ") should return "🇦🇿".
getFlag("BE") should return "🇧🇪".
getFlag("BJ") should return "🇧🇯".
getFlag("BO") should return "🇧🇴".
getFlag("BA") should return "🇧🇦".
getFlag("BR") should return "🇧🇷".
getFlag("BG") should return "🇧🇬".
getFlag("CA") should return "🇨🇦".
getFlag("CL") should return "🇨🇱".
getFlag("CN") should return "🇨🇳".
getFlag("CO") should return "🇨🇴".
getFlag("HR") should return "🇭🇷".
getFlag("CY") should return "🇨🇾".
getFlag("CZ") should return "🇨🇿".
getFlag("DK") should return "🇩🇰".
getFlag("EC") should return "🇪🇨".
getFlag("ER") should return "🇪🇷".
getFlag("EE") should return "🇪🇪".
getFlag("FI") should return "🇫🇮".
getFlag("FR") should return "🇫🇷".
getFlag("GE") should return "🇬🇪".
getFlag("DE") should return "🇩🇪".
getFlag("GB") should return "🇬🇧".
getFlag("GR") should return "🇬🇷".
getFlag("GW") should return "🇬🇼".
getFlag("HT") should return "🇭🇹".
getFlag("HK") should return "🇭🇰".
getFlag("HU") should return "🇭🇺".
getFlag("IS") should return "🇮🇸".
getFlag("IN") should return "🇮🇳".
getFlag("IR") should return "🇮🇷".
getFlag("IE") should return "🇮🇪".
getFlag("IL") should return "🇮🇱".
getFlag("IT") should return "🇮🇹".
getFlag("JM") should return "🇯🇲".
getFlag("JP") should return "🇯🇵".
getFlag("KZ") should return "🇰🇿".
getFlag("KE") should return "🇰🇪".
getFlag("XK") should return "🇽🇰".
getFlag("KG") should return "🇰🇬".
getFlag("LV") should return "🇱🇻".
getFlag("LB") should return "🇱🇧".
getFlag("LI") should return "🇱🇮".
getFlag("LT") should return "🇱🇹".
getFlag("LU") should return "🇱🇺".
getFlag("MG") should return "🇲🇬".
getFlag("MY") should return "🇲🇾".
getFlag("MT") should return "🇲🇹".
getFlag("MX") should return "🇲🇽".
getFlag("MD") should return "🇲🇩".
getFlag("MC") should return "🇲🇨".
getFlag("MN") should return "🇲🇳".
getFlag("ME") should return "🇲🇪".
getFlag("MA") should return "🇲🇦".
getFlag("NL") should return "🇳🇱".
getFlag("NZ") should return "🇳🇿".
getFlag("NG") should return "🇳🇬".
getFlag("MK") should return "🇲🇰".
getFlag("NO") should return "🇳🇴".
getFlag("PK") should return "🇵🇰".
getFlag("PH") should return "🇵🇭".
getFlag("PL") should return "🇵🇱".
getFlag("PT") should return "🇵🇹".
getFlag("PR") should return "🇵🇷".
getFlag("RO") should return "🇷🇴".
getFlag("SM") should return "🇸🇲".
getFlag("SA") should return "🇸🇦".
getFlag("RS") should return "🇷🇸".
getFlag("SG") should return "🇸🇬".
getFlag("SK") should return "🇸🇰".
getFlag("SI") should return "🇸🇮".
getFlag("ZA") should return "🇿🇦".
getFlag("KR") should return "🇰🇷".
getFlag("ES") should return "🇪🇸".
getFlag("SE") should return "🇸🇪".
getFlag("CH") should return "🇨🇭".
getFlag("TH") should return "🇹🇭".
getFlag("TT") should return "🇹🇹".
getFlag("TR") should return "🇹🇷".
getFlag("UA") should return "🇺🇦".
getFlag("AE") should return "🇦🇪".
getFlag("US") should return "🇺🇸".
getFlag("UY") should return "🇺🇾".
getFlag("UZ") should return "🇺🇿".
getFlag("VE") should return "🇻🇪".
`);