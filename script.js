var editor = ace.edit("editor");
var result = document.getElementById("result");
editor.setTheme("ace/theme/light");
editor.session.setMode("ace/mode/html");
editor.setValue("<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>New Website</title>\n\t\t<meta charset=\"utf-8\">\n\t</head>\n\t<body>\n\t\tHello world!\n\t</body>\n</html>");
function showRes() {
  result.src = "data:text/html;charset=utf-8," + encodeURIComponent(editor.getValue());
}
editor.session.on("change", showRes);
showRes();
function download(filename, text) {
	var element = document.createElement("a");
	element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
	element.setAttribute("download", filename);
	element.style.display = "none";
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
document.getElementById("save").onclick = function() {
	download("program.html", editor.getValue());
};
document.getElementById("reload").onclick = function() {showRes();};
