// Tính điểm trung bình 2 khối
let getEle = (id) => document.getElementById(id);
let avgHaiKhoi = (...avg) => {
    let total = 0;
    for (const dtb of avg) {
        total += dtb;
    }
    return total / avg.length;
}
getEle("btnKhoi1").onclick = () => {
    let dtbKhoi1 = avgHaiKhoi(getEle("inpToan").value * 1, getEle("inpLy").value * 1, getEle("inpHoa").value * 1);
    getEle("tbKhoi1").innerHTML = dtbKhoi1.toFixed(2);
}
getEle("btnKhoi2").onclick = () => {
    let dtbKhoi2 = avgHaiKhoi(getEle("inpVan").value * 1, getEle("inpSu").value * 1, getEle("inpDia").value * 1, getEle("inpEnglish").value * 1);
    getEle("tbKhoi2").innerHTML = dtbKhoi2.toFixed(2);
}