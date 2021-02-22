import { loadYAMLData, updateArticleData } from './helper'
import util from 'util'

$(document).ready(function () {
  // load front-matter for markdown from yml
  var data = loadYAMLData()
  console.log(util.inspect(data, false, 10, true));
  console.log("first load" + data)

  var editor = document.getElementById('markdown-editor')
  editor.addEventListener("keyup", renderArticlePreview)

  var template = $('#template').html();
  var rendered = Mustache.render(template, data);
  $('#target').html(rendered);

  var converter = new showdown.Converter(),
    html      = converter.makeHtml(rendered);
  $('#target').html(html);
  

  function renderArticlePreview() {
    var data = updateArticleData()
    var template = document.getElementById('markdown-editor').value;
    var rendered = Mustache.render(template, data);
    $('#target').html(rendered);

    var converter = new showdown.Converter(),
      html      = converter.makeHtml(rendered);
    $('#target').html(html);
  }

})