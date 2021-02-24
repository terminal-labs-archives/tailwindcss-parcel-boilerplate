import { getYAMLData, getUpdatedYAMLData } from './helper'
import util from 'util'

$(document).ready(function () {
  // load front-matter for markdown from yml file
  var data = getYAMLData()
  console.log("first load: ")
  console.log(data)

  
  var editor = document.getElementById('markdown-editor')
  var initialText= `#{{title}}
by {{author}}

falcon-heavy-isp: {{fh_isp}}

falcon-heavy-Specidic impulse: {{fh_SFC}}                     

![image-1](assets/images/pexels-pixabay-256379@2x.png)

Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus 
et magnis dis parturient montes lorem, nascetur ridiculus mus. 

>You will never be happy if you continue to search for what happiness 
consists of. You will never live if you are looking for the meaning of life.
                              `
  editor.value = initialText
  editor.addEventListener("keyup", renderArticlePreview)

  var template = $('#template').html();
  console.log(template)
  var rendered = Mustache.render(initialText, data);

  var converter = new showdown.Converter(),
    html      = converter.makeHtml(rendered);
  $('#target').html(html);
  

  function renderArticlePreview() {
    var data = getUpdatedYAMLData()
    console.log("yaml data: ")
    console.log(data)
    var template = document.getElementById('markdown-editor').value;
    var rendered = Mustache.render(template, data);

    var converter = new showdown.Converter(),
      html      = converter.makeHtml(rendered);
    $('#target').html(html);
  }

})