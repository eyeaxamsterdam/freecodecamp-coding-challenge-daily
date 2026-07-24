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
runTests(getFlag, [
    `assert.equal(getFlag("AL"), "🇦🇱");`,
    `assert.equal(getFlag("AD"), "🇦🇩");`,
    `assert.equal(getFlag("AR"), "🇦🇷")`,
    `assert.equal(getFlag("AM"), "🇦🇲")`,
    `assert.equal(getFlag("AU"), "🇦🇺")`,
    `assert.equal(getFlag("AT"), "🇦🇹")`,
    `assert.equal(getFlag("AZ"), "🇦🇿")`,
    `assert.equal(getFlag("BE"), "🇧🇪")`,
    `assert.equal(getFlag("BJ"), "🇧🇯")`,
    `assert.equal(getFlag("BO"), "🇧🇴")`,
    `assert.equal(getFlag("BA"), "🇧🇦")`,
    `assert.equal(getFlag("BR"), "🇧🇷")`,
    `assert.equal(getFlag("BG"), "🇧🇬")`,
    `assert.equal(getFlag("CA"), "🇨🇦")`,
    `assert.equal(getFlag("CL"), "🇨🇱")`,
    `assert.equal(getFlag("CN"), "🇨🇳")`,
    `assert.equal(getFlag("CO"), "🇨🇴")`,
    `assert.equal(getFlag("HR"), "🇭🇷")`,
    `assert.equal(getFlag("CY"), "🇨🇾")`,
    `assert.equal(getFlag("CZ"), "🇨🇿")`,
    `assert.equal(getFlag("DK"), "🇩🇰")`,
    `assert.equal(getFlag("EC"), "🇪🇨")`,
    `assert.equal(getFlag("ER"), "🇪🇷")`,
    `assert.equal(getFlag("EE"), "🇪🇪")`,
    `assert.equal(getFlag("FI"), "🇫🇮")`,
    `assert.equal(getFlag("FR"), "🇫🇷")`,
    `assert.equal(getFlag("GE"), "🇬🇪")`,
    `assert.equal(getFlag("DE"), "🇩🇪")`,
    `assert.equal(getFlag("GB"), "🇬🇧")`,
    `assert.equal(getFlag("GR"), "🇬🇷")`,
    `assert.equal(getFlag("GW"), "🇬🇼")`,
    `assert.equal(getFlag("HT"), "🇭🇹")`,
    `assert.equal(getFlag("HK"), "🇭🇰")`,
    `assert.equal(getFlag("HU"), "🇭🇺")`,
    `assert.equal(getFlag("IS"), "🇮🇸")`,
    `assert.equal(getFlag("IN"), "🇮🇳")`,
    `assert.equal(getFlag("IR"), "🇮🇷")`,
    `assert.equal(getFlag("IE"), "🇮🇪")`,
    `assert.equal(getFlag("IL"), "🇮🇱")`,
    `assert.equal(getFlag("IT"), "🇮🇹")`,
    `assert.equal(getFlag("JM"), "🇯🇲")`,
    `assert.equal(getFlag("JP"), "🇯🇵")`,
    `assert.equal(getFlag("KZ"), "🇰🇿")`,
    `assert.equal(getFlag("KE"), "🇰🇪")`,
    `assert.equal(getFlag("XK"), "🇽🇰")`,
    `assert.equal(getFlag("KG"), "🇰🇬")`,
    `assert.equal(getFlag("LV"), "🇱🇻")`,
    `assert.equal(getFlag("LB"), "🇱🇧")`,
    `assert.equal(getFlag("LI"), "🇱🇮")`,
    `assert.equal(getFlag("LT"), "🇱🇹")`,
    `assert.equal(getFlag("LU"), "🇱🇺")`,
    `assert.equal(getFlag("MG"), "🇲🇬")`,
    `assert.equal(getFlag("MY"), "🇲🇾")`,
    `assert.equal(getFlag("MT"), "🇲🇹")`,
    `assert.equal(getFlag("MX"), "🇲🇽")`,
    `assert.equal(getFlag("MD"), "🇲🇩")`,
    `assert.equal(getFlag("MC"), "🇲🇨")`,
    `assert.equal(getFlag("MN"), "🇲🇳")`,
    `assert.equal(getFlag("ME"), "🇲🇪")`,
    `assert.equal(getFlag("MA"), "🇲🇦")`,
    `assert.equal(getFlag("NL"), "🇳🇱")`,
    `assert.equal(getFlag("NZ"), "🇳🇿")`,
    `assert.equal(getFlag("NG"), "🇳🇬")`,
    `assert.equal(getFlag("MK"), "🇲🇰")`,
    `assert.equal(getFlag("NO"), "🇳🇴")`,
    `assert.equal(getFlag("PK"), "🇵🇰")`,
    `assert.equal(getFlag("PH"), "🇵🇭")`,
    `assert.equal(getFlag("PL"), "🇵🇱")`,
    `assert.equal(getFlag("PT"), "🇵🇹")`,
    `assert.equal(getFlag("PR"), "🇵🇷")`,
    `assert.equal(getFlag("RO"), "🇷🇴")`,
    `assert.equal(getFlag("SM"), "🇸🇲")`,
    `assert.equal(getFlag("SA"), "🇸🇦")`,
    `assert.equal(getFlag("RS"), "🇷🇸")`,
    `assert.equal(getFlag("SG"), "🇸🇬")`,
    `assert.equal(getFlag("SK"), "🇸🇰")`,
    `assert.equal(getFlag("SI"), "🇸🇮")`,
    `assert.equal(getFlag("ZA"), "🇿🇦")`,
    `assert.equal(getFlag("KR"), "🇰🇷")`,
    `assert.equal(getFlag("ES"), "🇪🇸")`,
    `assert.equal(getFlag("SE"), "🇸🇪")`,
    `assert.equal(getFlag("CH"), "🇨🇭")`,
    `assert.equal(getFlag("TH"), "🇹🇭")`,
    `assert.equal(getFlag("TT"), "🇹🇹")`,
    `assert.equal(getFlag("TR"), "🇹🇷")`,
    `assert.equal(getFlag("UA"), "🇺🇦")`,
    `assert.equal(getFlag("AE"), "🇦🇪")`,
    `assert.equal(getFlag("US"), "🇺🇸")`,
    `assert.equal(getFlag("UY"), "🇺🇾")`,
    `assert.equal(getFlag("UZ"), "🇺🇿")`,
    `assert.equal(getFlag("VE"), "🇻🇪")`,
]);
