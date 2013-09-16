var _  = require('lodash');

exports.update = function(svg, fontId) {
  // + make dataUri
  // + create style description string
  // + check for the style in the DOM and remove if contains
  // + insert the new style into DOM
  var cfg = {dataUri : 'data:image/svg+xml;utf8,' + svg, fontId : fontId};

  var list =
  '<style id="ff_${fontId}" type="text/css">\n' +
  '  .font-${fontId} { font-family: "fml_customFont"; }\n' +
  '  @font-face {\n' +
  '    font-family: "fml_customFont";\n' +
  '    src: url("${dataUri}"#_${fontId}) format("svg");\n' +
  '    font-weight: normal;\n' +
  '    font-style: normal;\n' +
  '  }\n' +
  '</style>\n';
  var style = _.template(list, cfg);

  $('#ff_' + fontId).remove();
  $(style).appendTo("head");
}