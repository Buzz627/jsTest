var count=0
function println(){
	return "working"+ (count++)
}
function test(){
	count++
	return "nothing"+count
}
var test2 = () => "hello?"
b="test3"
Object.defineProperty(window, b, {
                get: function(d) {
                	console.log("d", d)
                    return test
                }()
            })
// Components.utils.import("resource://devtools/shared/Loader.jsm");
// var HUDService = devtools.require("devtools/client/webconsole/hudservice");

// var hud = HUDService.getBrowserConsole();

// var clearBtn = hud.chromeWindow.document.querySelector('.webconsole-clear-console-button');
// clearBtn.addEventListener('mouseover', function() {
//   hud.jsterm.clearOutput(true);
// }, false);
// console.log(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)