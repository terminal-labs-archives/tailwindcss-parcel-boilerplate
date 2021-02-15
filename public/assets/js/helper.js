export const addAdjustHeightListener = () => {
  var textEditorPane = document.getElementById("text-input-pane");

  textEditorPane.onchange = changeHeight;
};

export const changeHeight = () => {
  var pane = document.getElementById("text-input-pane")
  var height = document.getElementById("adjust-height").value
  pane.style.height = height + 'px'
}
