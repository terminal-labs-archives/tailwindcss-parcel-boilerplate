import { getYAMLData, renderPreviewArticle } from './helper'

$(document).ready(function () {
  // load front-matter for markdown from yml file
  var data = getYAMLData()
  console.log("first load: ")
  console.log(data)

  var textEditor = document.getElementById('markdown-editor')
  var initialText= `#{{title}}
by {{author}}, 13th June 2013

falcon-heavy-isp: {{fh_isp}}

falcon-heavy-Specidic impulse: {{fh_SFC}}                     

![main-image](images/pexels-pixabay-256379@2x.png)
*The Amazon Rainforest contains a multitude of species.*

Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus 
et magnis dis parturient montes lorem, nascetur ridiculus mus. 

>You will never be happy if you continue to search for what happiness 
consists of. You will never live if you are looking for the meaning of life.

Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus 
et magnis dis parturient montes lorem, nascetur ridiculus mus. 
Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus 
et magnis dis parturient montes lorem, nascetur ridiculus mus. 
                              `
  textEditor.value = initialText
  textEditor.addEventListener("keyup", renderPreviewArticle)

  var template = $('#template').html();
  console.log(template)
  var rendered = Mustache.render(initialText, data);

  var converter = new showdown.Converter(),
    html      = converter.makeHtml(rendered);
  $('#target').html(html);

})