/**
 * Created by ryanbatchelder on 4/12/14.
 */



function startSpritzing(text) {
    //initialize the controller from the API
    var spritzController = $("#spritzer").data("controller");
<<<<<<< HEAD
=======
    var container = $("#spritzer");
>>>>>>> d191637fbcd4f5c05abca76f5a07b5b799ffd5ac
    var locale = "en_us";
    var successHandler = function onSpritzifySuccess(text){
        //alert("spritzify success!" + text);
        spritzController.setSpritzText(text);
        console.log("Spritz fetched the text!");
    };
    SpritzClient.spritzify(text, locale, successHandler, onSpritzifyFailure);
    container.on("onProgressChange", function(event, completed) {showProgress(completed);});

}

function onSpritzifyFailure(e){

    console.log("Spritz failed... Sorry about that.", e);
}


$(document).ready(function() {
	setTimeout(function(){
		var spritzText = "You've successfully installed Spritz for Chrome!";
		startSpritzing(spritzText);
	},1);
<<<<<<< HEAD
});
=======
});

function createContextItem(){
	var createProperties = {title:"Spritz", id:"1"};
	chrome.contextMenus.create(object createProperties);
	chrome.contextMenus.onClicked.addListener(function getSelectionText());
}

//Stuff for progress bar
function showProgress(completed) {
		$("#progressBar").val(Math.round(completed));
}

container.on("onProgressChange", function(event, completed) {showProgress(completed);});

>>>>>>> d191637fbcd4f5c05abca76f5a07b5b799ffd5ac
