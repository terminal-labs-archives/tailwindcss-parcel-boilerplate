import CodeMirror from 'codemirror';
import util from 'util';
const yaml = require('js-yaml');

export const addAdjustHeightListener = () => {
  var textEditorPane = document.getElementById("text-input-pane");

  textEditorPane.onchange = changeHeight;
};

export const changeHeight = () => {
  var pane = document.getElementById("text-input-pane");
  var scrollPane = document.getElementById("scroll-pane");
  var height = document.getElementById("adjust-height").value;
  pane.style.height = height + "px";
  scrollPane.style.height = $(document).height() - height - 70 + "px";
};

export const loadYAMLData = () => {
  var editor = CodeMirror.fromTextArea(document.getElementById("result"), {styleActiveLine: true});
  var textToWrite = editor.doc.getValue();
  console.log("got yaml data:" + textToWrite)
  return textToWrite;
} 

export const updateArticleData = () => {
  // Get document, or throw exception on error
  var doc = {}
  try {
    doc = yaml.load( document.getElementById('source').innerHTML);
    console.log("new yml data: ")
    console.log(util.inspect(doc, false, 10, true));
  
  } catch (e) {
    console.log(e);
  }
  return doc;
}
