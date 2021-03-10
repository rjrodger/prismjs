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

    'number': /[+-]?\b(?:(?:0x[a-fA-F\d]+)|(?:0o[0-7]+)|(?:0b[01]+))\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?_?/,


    'foo1': {
      pattern: /\bfoo1\b/,
      alias: 'keyword'
    }

    
  });

}(Prism));
