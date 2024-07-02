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

const DEFAULT_BATTLE_TECH_VAL = {
    "近接戦闘【斧】": 15,
    "近接戦闘【格闘】": 25,
    "近接戦闘【絞殺紐】": 15,
    "近接戦闘【チェンソー】": 10,
    "近接戦闘【刀剣】": 20,
    "近接戦闘【フレイル】": 10,
    "近接戦闘【鞭】": 5,
    "近接戦闘【槍】": 20,
};

const DEFAULT_GUN_TECH_VAL = {
    "射撃【火炎放射器】": 10,
    "射撃【拳銃】": 20,
    "射撃【サブマシンガン】": 15,
    "射撃【重火器】": 10,
    "射撃【マシンガン】": 10,
    "射撃【弓】": 15,
    "射撃【ライフル/ショットガン】": 25,
};

const ALL_TECH_LIST = [DEFAULT_TECH_VAL, DEFAULT_BATTLE_TECH_VAL, DEFAULT_GUN_TECH_VAL];

function convertStr(str) {
    let ret_str = str.replaceAll("CC", "1d100");

    for (let tech_list_index in ALL_TECH_LIST) {
        for (let key in ALL_TECH_LIST[tech_list_index]) {
            if (ret_str.indexOf(key) === -1) {
                ret_str = ret_str + `1d100<=${ALL_TECH_LIST[tech_list_index][key]} 【${key}】\n`
            }
        }
        console.log(ALL_TECH_LIST[tech_list_index]);
    }

    return ret_str;
}
$(function() {
    $('#convert_button').on('click', function() {
        let str =$('#input_txt').val();

        let result_text_area_object = $('#result_txt');
        result_text_area_object.val(convertStr(str));
        result_text_area_object.select();
        document.execCommand("Copy");
        
        document.getElementById('process_result').textContent = '=== 変換完了 ===';
    });
});