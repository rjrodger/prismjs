(function (Prism) {

  var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/

  Prism.languages.jsonic = Prism.languages.extend('json', {
    'property': [
      {
	pattern: RegExp(string.source + '(?=\\s*:)'),
	greedy: true
      },
      {
	pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
	alias: 'unquoted'
      }
    ],

    'string': {
      pattern: string,
      greedy: true
    },

    'comment': [
      {
	pattern: /(^|[^\\])\/\/.*/,
	lookbehind: true,
      },
      {
	pattern: /(^|[^\\])#.*/,
	lookbehind: true
      },
      {
	pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
	lookbehind: true,
	greedy: true
      },
    ],

    'number': /[+-]?\b(?:0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,


    'foo': {
      pattern: /\bfoo\b/,
      alias: 'keyword'
    }

    
  });

}(Prism));
