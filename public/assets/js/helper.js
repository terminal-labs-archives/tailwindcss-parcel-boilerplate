export const addAdjustHeightListener = () => {
  var textEditorPane = document.getElementById("text-input-pane");

  textEditorPane.onchange = changeHeight;
};

export const changeHeight = () => {
  var pane = document.getElementById("text-input-pane")
  var scrollPane = document.getElementById("scroll-pane")
  var height = document.getElementById("adjust-height").value
  pane.style.height = height + 'px'
  scrollPane.style.height= $(document).height() - height - 70 + 'px'
}
