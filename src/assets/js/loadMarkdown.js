// import loadYAMLData from './'

$(document).ready(function () {
  // load front-matter for markdown from yml
  // var data = loadYAMLData()

  var template = $('#template').html();
  var rendered = Mustache.render(template, {
    author: "David Lee",
    title: "Blog Title that overflows to the next line",
    fh_isp: 350,
    fh_SFC: 311
  });
  $('#target').html(rendered);

  var converter = new showdown.Converter(),
    html      = converter.makeHtml(rendered);
  $('#target').html(html);
})