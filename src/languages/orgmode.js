/*
Language: Orgmode
Author: Alan Schmitt <alan.schmitt@polytechnique.org>
Website: http://alan.petitepomme.net/
Category: common, markup
*/

function(hljs) {
  return {
    aliases: ['org'],
    contains: [
      // highlight headers
      {
        className: 'section',
        begin: '^\\*{1,6} ', end: '$',
        relevance: 10
      },
      {
        className: 'bullet',
        begin: '^([+-]|(\\d+\\.))\\s+'
      },
      // strong segments
      {
        className: 'strong',
        begin: '\\*\\w.*\\*'
      },
      // emphasis segments
      {
        className: 'emphasis',
        begin: '/\\w.*/'
      },
    ]
  };
}
