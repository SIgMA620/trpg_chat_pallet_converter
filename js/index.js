const DEFAULT_TECH_VAL = {
    "目星": 25,
    "聞き耳": 20,
    "図書館": 20,
    "回避": 0,
    "近接戦闘": 25,
    "投擲": 20,
    "応急手当": 30,
    "鍵開け": 1,
    "手さばき": 10,
    "隠密": 20,
    "精神分析": 1,
    "追跡": 10,
    "登攀": 20,
    "鑑定": 5,
    "運転": 20,
    "機械修理": 10,
    "重機械操作": 1,
    "乗馬": 5,
    "水泳": 20,
    "製作": 5,
    "操縦": 1,
    "跳躍": 20,
    "電気修理": 10,
    "ナビゲート": 10,
    "変装": 5,
    "言いくるめ": 5,
    "説得": 10,
    "威圧": 15,
    "魅惑": 15,
    "医学": 1,
    "オカルト": 5,
    "芸術": 5,
    "経理": 5,
    "考古学": 1,
    "コンピューター": 5,
    "科学": 1,
    "心理学": 10,
    "人類学": 1,
    "電子工学": 1,
    "自然": 10,
    "法律": 5,
    "歴史": 5,
    "サバイバル": 10,
};

function convertStr(str) {
    let ret_str = str.replaceAll("CC", "1d100");

    for (let key in DEFAULT_TECH_VAL) {
        if (ret_str.indexOf(key) === -1) {
            ret_str = ret_str + `1d100<=${DEFAULT_TECH_VAL[key]} 【${key}】\n`
        }
    }

    return ret_str;
}
$(function() {
    $('.input_txt').on('blur', function() {
        let str = $(this).val();
        $(this).val(convertStr(str));
        $(this).select();
        document.execCommand("Copy");
        
        document.getElementById('result').textContent = '=== 変換完了 ===';
    });
});