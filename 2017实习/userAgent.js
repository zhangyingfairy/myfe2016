/**
 * Created by Administrator on 2017/7/5.
 */
/**
 * Created by Administrator on 2017/7/5.
 */
function isPic(){
    if(navigator.userAgent.indexOf("iPhone") != -1){
        return false;
    }
    return true;
}
if (isPic()){
    location.href="http://www.taobao.com";
}else{
    location.href = "http://m.taobao.com";
}
