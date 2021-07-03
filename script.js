var a = "block";
var b = "none";
var c = b;
function expand() {
    if (c == b) {
        c = a;
        document.getElementById('hamburg').style.display = "block";
    } else if(c == a) {
        c = b
        document.getElementById('hamburg').style.display = "none";
    }
}
