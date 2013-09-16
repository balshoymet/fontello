var _  = require('lodash');

exports.generate = _.template(
  '<?xml version="1.0" standalone="no"?>\n' +
  '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n' +
  '<svg xmlns="http://www.w3.org/2000/svg">\n' +
  '<metadata>${font.copyright}</metadata>\n' +
  '<defs>\n' +
  '<font id="_${font.fontname}" horiz-adv-x="${font.ascent - font.descent}" >\n' +

  '<font-face' +
    ' font-family="${font.familyname}"' +
    ' font-weight="400"' +
    ' font-stretch="normal"' +
    ' units-per-em="${font.ascent - font.descent}"' +
    ' ascent="${font.ascent}"' +
    ' descent="${font.descent}"' +
  ' />\n' +

  '<missing-glyph horiz-adv-x="${font.ascent - font.descent}" />\n' +

  '<% glyphs.forEach(function(glyph) { %>' +
    '<glyph' +
      ' glyph-name="${glyph.css}"' +
      ' unicode="&#x${glyph.code.toString(16)};"' +
      ' d="${glyph.d}"' +
      ' horiz-adv-x="${glyph.width}"' +
    ' />\n' +
  '<% }); %>' +

  '</font>\n' +
  '</defs>\n' +
  '</svg>'
);