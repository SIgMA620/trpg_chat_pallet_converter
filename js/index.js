function convertStr(str) {
    return str.replaceAll("CC", "1d100");
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