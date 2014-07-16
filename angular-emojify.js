angular.module('emojify', []);

angular.module('emojify')
  .directive(
    'emojify',

    [
      '$log',
      '$timeout',
      'EMOJIDICT',
      'EMOJIREG',

      function(
        $log,
        $timeout,
        EMOJIDICT,
        EMOJIREG
      ) {
        'use strict';

        return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            scope.emojify = function(text) {
              return text.replace(EMOJIREG, function (value) {
                return '<img alt="' + EMOJIDICT[value]['name'] + '" src="https://abs.twimg.com/emoji/v1/72x72/' + EMOJIDICT[value]['twitter-id'] + '.png">';
              });
            }

            $timeout(function() {
              element.html(scope.emojify(element.html()));
            });
          }
        };
      }
    ]
  )

  .constant(
    'EMOJIDICT',
    {
  "\ud83d\udd39": {
    "emoji-id": "e-B76",
    "codepoint": "U+1F539",
    "name": "SMALL BLUE DIAMOND",
    "twitter-id": "1f539"
  },
  "\ud83d\ude3f": {
    "emoji-id": "e-34D",
    "codepoint": "U+1F63F",
    "name": "CRYING CAT FACE",
    "twitter-id": "1f63f"
  },
  "\ud83c\udf3d": {
    "emoji-id": "e-04A",
    "codepoint": "U+1F33D",
    "name": "EAR OF MAIZE",
    "twitter-id": "1f33d"
  },
  "\ud83d\udc33": {
    "emoji-id": "e-1C3",
    "codepoint": "U+1F433",
    "name": "SPOUTING WHALE",
    "twitter-id": "1f433"
  },
  "\ud83c\ude37": {
    "emoji-id": "e-B3B",
    "codepoint": "U+1F237",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-6708",
    "twitter-id": "1f237"
  },
  "\ud83c\udfb6": {
    "emoji-id": "e-814",
    "codepoint": "U+1F3B6",
    "name": "MULTIPLE MUSICAL NOTES",
    "twitter-id": "1f3b6"
  },
  "\ud83d\udcb4": {
    "emoji-id": "e-4E2",
    "codepoint": "U+1F4B4",
    "name": "BANKNOTE WITH YEN SIGN",
    "twitter-id": "1f4b4"
  },
  "\u21aa": {
    "emoji-id": "e-B88",
    "codepoint": "U+21AA",
    "name": "RIGHTWARDS ARROW WITH HOOK",
    "twitter-id": "21aa"
  },
  "\ud83d\udd29": {
    "emoji-id": "e-4CB",
    "codepoint": "U+1F529",
    "name": "NUT AND BOLT",
    "twitter-id": "1f529"
  },
  "\u2195": {
    "emoji-id": "e-AF7",
    "codepoint": "U+2195",
    "name": "UP DOWN ARROW",
    "twitter-id": "2195"
  },
  "\ud83d\udc23": {
    "emoji-id": "e-1DD",
    "codepoint": "U+1F423",
    "name": "HATCHING CHICK",
    "twitter-id": "1f423"
  },
  "\u2614": {
    "emoji-id": "e-002",
    "codepoint": "U+2614",
    "name": "UMBRELLA WITH RAIN DROPS",
    "twitter-id": "2614"
  },
  "\ud83c\udfa6": {
    "emoji-id": "e-802",
    "codepoint": "U+1F3A6",
    "name": "CINEMA",
    "twitter-id": "1f3a6"
  },
  "\ud83d\udca4": {
    "emoji-id": "e-B59",
    "codepoint": "U+1F4A4",
    "name": "SLEEPING SYMBOL",
    "twitter-id": "1f4a4"
  },
  "\ud83c\udd9a": {
    "emoji-id": "e-B32",
    "codepoint": "U+1F19A",
    "name": "SQUARED VS",
    "twitter-id": "1f19a"
  },
  "\ud83d\udd19": {
    "emoji-id": "e-B8E",
    "codepoint": "U+1F519",
    "name": "BACK WITH LEFTWARDS ARROW ABOVE",
    "twitter-id": "1f519"
  },
  "\ud83d\udc94": {
    "emoji-id": "e-B0E",
    "codepoint": "U+1F494",
    "name": "BROKEN HEART",
    "twitter-id": "1f494"
  },
  "\ud83d\ude0f": {
    "emoji-id": "e-343",
    "codepoint": "U+1F60F",
    "name": "SMIRKING FACE",
    "twitter-id": "1f60f"
  },
  "\ud83d\ude80": {
    "emoji-id": "e-7ED",
    "codepoint": "U+1F680",
    "name": "ROCKET",
    "twitter-id": "1f680"
  },
  "\ud83c\udf86": {
    "emoji-id": "e-515",
    "codepoint": "U+1F386",
    "name": "FIREWORKS",
    "twitter-id": "1f386"
  },
  "\u2705": {
    "emoji-id": "e-B4A",
    "codepoint": "U+2705",
    "name": "WHITE HEAVY CHECK MARK",
    "twitter-id": "2705"
  },
  "\ud83d\udc84": {
    "emoji-id": "e-195",
    "codepoint": "U+1F484",
    "name": "LIPSTICK",
    "twitter-id": "1f484"
  },
  "\ud83c\uddfa": {
    "emoji-id": "e-568",
    "codepoint": "U+1F1FA",
    "name": "REGIONAL INDICATOR SYMBOL LETTER U",
    "twitter-id": "1f1fa"
  },
  "\u267f": {
    "emoji-id": "e-B20",
    "codepoint": "U+267F",
    "name": "WHEELCHAIR SYMBOL",
    "twitter-id": "267f"
  },
  "\ud83d\udc73": {
    "emoji-id": "e-1A6",
    "codepoint": "U+1F473",
    "name": "MAN WITH TURBAN",
    "twitter-id": "1f473"
  },
  "\ud83c\udd71": {
    "emoji-id": "e-50C",
    "codepoint": "U+1F171",
    "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER B",
    "twitter-id": "1f171"
  },
  "\ud83d\udcf4": {
    "emoji-id": "e-83A",
    "codepoint": "U+1F4F4",
    "name": "MOBILE PHONE OFF",
    "twitter-id": "1f4f4"
  },
  "\ud83c\uddea": {
    "emoji-id": "e-558",
    "codepoint": "U+1F1EA",
    "name": "REGIONAL INDICATOR SYMBOL LETTER E",
    "twitter-id": "1f1ea"
  },
  "\ud83c\udf6d": {
    "emoji-id": "e-97C",
    "codepoint": "U+1F36D",
    "name": "LOLLIPOP",
    "twitter-id": "1f36d"
  },
  "\u2702": {
    "emoji-id": "e-53E",
    "codepoint": "U+2702",
    "name": "BLACK SCISSORS",
    "twitter-id": "2702"
  },
  "\ud83d\udc63": {
    "emoji-id": "e-553",
    "codepoint": "U+1F463",
    "name": "FOOTPRINTS",
    "twitter-id": "1f463"
  },
  "\ud83c\udfe6": {
    "emoji-id": "e-4B5",
    "codepoint": "U+1F3E6",
    "name": "BANK",
    "twitter-id": "1f3e6"
  },
  "\ud83d\udce4": {
    "emoji-id": "e-533",
    "codepoint": "U+1F4E4",
    "name": "OUTBOX TRAY",
    "twitter-id": "1f4e4"
  },
  "\ud83d\udd59": {
    "emoji-id": "e-027",
    "codepoint": "U+1F559",
    "name": "CLOCK FACE TEN OCLOCK",
    "twitter-id": "1f559"
  },
  "\ud83c\udf5d": {
    "emoji-id": "e-96B",
    "codepoint": "U+1F35D",
    "name": "SPAGHETTI",
    "twitter-id": "1f35d"
  },
  "\ud83d\udc53": {
    "emoji-id": "e-4CE",
    "codepoint": "U+1F453",
    "name": "EYEGLASSES",
    "twitter-id": "1f453"
  },
  "\u2755": {
    "emoji-id": "e-B0B",
    "codepoint": "U+2755",
    "name": "WHITE EXCLAMATION MARK ORNAMENT",
    "twitter-id": "2755"
  },
  "\ud83d\udcd4": {
    "emoji-id": "e-547",
    "codepoint": "U+1F4D4",
    "name": "NOTEBOOK WITH DECORATIVE COVER",
    "twitter-id": "1f4d4"
  },
  "\u264f": {
    "emoji-id": "e-032",
    "codepoint": "U+264F",
    "name": "SCORPIUS",
    "twitter-id": "264f"
  },
  "\ud83c\udf4d": {
    "emoji-id": "e-058",
    "codepoint": "U+1F34D",
    "name": "PINEAPPLE",
    "twitter-id": "1f34d"
  },
  "\ud83d\udc43": {
    "emoji-id": "e-192",
    "codepoint": "U+1F443",
    "name": "NOSE",
    "twitter-id": "1f443"
  },
  "\ud83d\udec0": {
    "emoji-id": "e-505",
    "codepoint": "U+1F6C0",
    "name": "BATH",
    "twitter-id": "1f6c0"
  },
  "\ud83c\udfc6": {
    "emoji-id": "e-7DB",
    "codepoint": "U+1F3C6",
    "name": "TROPHY",
    "twitter-id": "1f3c6"
  },
  "\ud83d\udcc4": {
    "emoji-id": "e-541",
    "codepoint": "U+1F4C4",
    "name": "PAGE FACING UP",
    "twitter-id": "1f4c4"
  },
  "\ud83c\ude38": {
    "emoji-id": "e-B3C",
    "codepoint": "U+1F238",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-7533",
    "twitter-id": "1f238"
  },
  "\ud83c\udfbd": {
    "emoji-id": "e-7D0",
    "codepoint": "U+1F3BD",
    "name": "RUNNING SHIRT WITH SASH",
    "twitter-id": "1f3bd"
  },
  "6\u20e3": {
    "emoji-id": "e-833",
    "codepoint": "U+0036 U+20E3",
    "name": "KEYCAP 6",
    "twitter-id": "36-20e3",
    "names": [
      "DIGIT SIX",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\ud83d\udcb3": {
    "emoji-id": "e-4E1",
    "codepoint": "U+1F4B3",
    "name": "CREDIT CARD",
    "twitter-id": "1f4b3"
  },
  "\ud83d\udd32": {
    "emoji-id": "e-BA3",
    "codepoint": "U+1F532",
    "name": "BLACK SQUARE BUTTON",
    "twitter-id": "1f532"
  },
  "\ud83d\ude30": {
    "emoji-id": "e-325",
    "codepoint": "U+1F630",
    "name": "FACE WITH OPEN MOUTH AND COLD SWEAT",
    "twitter-id": "1f630"
  },
  "\ud83d\udc34": {
    "emoji-id": "e-1BE",
    "codepoint": "U+1F434",
    "name": "HORSE FACE",
    "twitter-id": "1f434"
  },
  "\ud83c\udfad": {
    "emoji-id": "e-809",
    "codepoint": "U+1F3AD",
    "name": "PERFORMING ARTS",
    "twitter-id": "1f3ad"
  },
  "\ud83d\udca3": {
    "emoji-id": "e-B58",
    "codepoint": "U+1F4A3",
    "name": "BOMB",
    "twitter-id": "1f4a3"
  },
  "\ud83d\udd22": {
    "emoji-id": "e-B7E",
    "codepoint": "U+1F522",
    "name": "INPUT SYMBOL FOR NUMBERS",
    "twitter-id": "1f522"
  },
  "\ud83d\ude20": {
    "emoji-id": "e-320",
    "codepoint": "U+1F620",
    "name": "ANGRY FACE",
    "twitter-id": "1f620"
  },
  "\ud83d\udc24": {
    "emoji-id": "e-1BA",
    "codepoint": "U+1F424",
    "name": "BABY CHICK",
    "twitter-id": "1f424"
  },
  "\u26a0": {
    "emoji-id": "e-B23",
    "codepoint": "U+26A0",
    "name": "WARNING SIGN",
    "twitter-id": "26a0"
  },
  "\u25fd": {
    "emoji-id": "e-B6F",
    "codepoint": "U+25FD",
    "name": "WHITE MEDIUM SMALL SQUARE",
    "twitter-id": "25fd"
  },
  "\ud83d\udc93": {
    "emoji-id": "e-B0D",
    "codepoint": "U+1F493",
    "name": "BEATING HEART",
    "twitter-id": "1f493"
  },
  "\ud83d\udd12": {
    "emoji-id": "e-B86",
    "codepoint": "U+1F512",
    "name": "LOCK",
    "twitter-id": "1f512"
  },
  "\ud83c\udd91": {
    "emoji-id": "e-B84",
    "codepoint": "U+1F191",
    "name": "SQUARED CL",
    "twitter-id": "1f191"
  },
  "\ud83c\uddfa\ud83c\uddf8": {
    "emoji-id": "e-4E6",
    "codepoint": "U+1F1FA U+1F1F8",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS US",
    "twitter-id": "1f1fa-1f1f8",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER U",
      "REGIONAL INDICATOR SYMBOL LETTER S"
    ]
  },
  "\u3297": {
    "emoji-id": "e-B43",
    "codepoint": "U+3297",
    "name": "CIRCLED IDEOGRAPH CONGRATULATION",
    "twitter-id": "3297"
  },
  "\u2795": {
    "emoji-id": "e-B51",
    "codepoint": "U+2795",
    "name": "HEAVY PLUS SIGN",
    "twitter-id": "2795"
  },
  "\ud83d\udc14": {
    "emoji-id": "e-1D4",
    "codepoint": "U+1F414",
    "name": "CHICKEN",
    "twitter-id": "1f414"
  },
  "\ud83d\ude8f": {
    "emoji-id": "e-7E7",
    "codepoint": "U+1F68F",
    "name": "BUS STOP",
    "twitter-id": "1f68f"
  },
  "\ud83c\udf8d": {
    "emoji-id": "e-518",
    "codepoint": "U+1F38D",
    "name": "PINE DECORATION",
    "twitter-id": "1f38d"
  },
  "\ud83d\udc83": {
    "emoji-id": "e-1B6",
    "codepoint": "U+1F483",
    "name": "DANCER",
    "twitter-id": "1f483"
  },
  "\u2600": {
    "emoji-id": "e-000",
    "codepoint": "U+2600",
    "name": "BLACK SUN WITH RAYS",
    "twitter-id": "2600"
  },
  "\ud83c\udf06": {
    "emoji-id": "e-00B",
    "codepoint": "U+1F306",
    "name": "CITYSCAPE AT DUSK",
    "twitter-id": "1f306"
  },
  "\ud83d\ude4d": {
    "emoji-id": "e-359",
    "codepoint": "U+1F64D",
    "name": "PERSON FROWNING",
    "twitter-id": "1f64d"
  },
  "\ud83d\udcf3": {
    "emoji-id": "e-839",
    "codepoint": "U+1F4F3",
    "name": "VIBRATION MODE",
    "twitter-id": "1f4f3"
  },
  "\ud83c\uddf1": {
    "emoji-id": "e-55F",
    "codepoint": "U+1F1F1",
    "name": "REGIONAL INDICATOR SYMBOL LETTER L",
    "twitter-id": "1f1f1"
  },
  "\ud83c\udf76": {
    "emoji-id": "e-985",
    "codepoint": "U+1F376",
    "name": "SAKE BOTTLE AND CUP",
    "twitter-id": "1f376"
  },
  "\ud83d\udc74": {
    "emoji-id": "e-1A7",
    "codepoint": "U+1F474",
    "name": "OLDER MAN",
    "twitter-id": "1f474"
  },
  "\ud83c\udfed": {
    "emoji-id": "e-4C0",
    "codepoint": "U+1F3ED",
    "name": "FACTORY",
    "twitter-id": "1f3ed"
  },
  "\ud83d\udcc2": {
    "emoji-id": "e-544",
    "codepoint": "U+1F4C2",
    "name": "OPEN FILE FOLDER",
    "twitter-id": "1f4c2"
  },
  "\ud83d\udce3": {
    "emoji-id": "e-530",
    "codepoint": "U+1F4E3",
    "name": "CHEERING MEGAPHONE",
    "twitter-id": "1f4e3"
  },
  "\u2660": {
    "emoji-id": "e-B1B",
    "codepoint": "U+2660",
    "name": "BLACK SPADE SUIT",
    "twitter-id": "2660"
  },
  "\ud83c\udf66": {
    "emoji-id": "e-966",
    "codepoint": "U+1F366",
    "name": "SOFT ICE CREAM",
    "twitter-id": "1f366"
  },
  "\ud83d\udc64": {
    "emoji-id": "e-19A",
    "codepoint": "U+1F464",
    "name": "BUST IN SILHOUETTE",
    "twitter-id": "1f464"
  },
  "\ud83d\udcd3": {
    "emoji-id": "e-545",
    "codepoint": "U+1F4D3",
    "name": "NOTEBOOK",
    "twitter-id": "1f4d3"
  },
  "\ud83d\udd52": {
    "emoji-id": "e-020",
    "codepoint": "U+1F552",
    "name": "CLOCK FACE THREE OCLOCK",
    "twitter-id": "1f552"
  },
  "\u2650": {
    "emoji-id": "e-033",
    "codepoint": "U+2650",
    "name": "SAGITTARIUS",
    "twitter-id": "2650"
  },
  "\ud83c\udf56": {
    "emoji-id": "e-972",
    "codepoint": "U+1F356",
    "name": "MEAT ON BONE",
    "twitter-id": "1f356"
  },
  "\ud83d\udc54": {
    "emoji-id": "e-4D3",
    "codepoint": "U+1F454",
    "name": "NECKTIE",
    "twitter-id": "1f454"
  },
  "\u274e": {
    "emoji-id": "e-B46",
    "codepoint": "U+274E",
    "name": "NEGATIVE SQUARED CROSS MARK",
    "twitter-id": "274e"
  },
  "\ud83d\udcc3": {
    "emoji-id": "e-540",
    "codepoint": "U+1F4C3",
    "name": "PAGE WITH CURL",
    "twitter-id": "1f4c3"
  },
  "\ud83d\ude40": {
    "emoji-id": "e-350",
    "codepoint": "U+1F640",
    "name": "WEARY CAT FACE",
    "twitter-id": "1f640"
  },
  "\ud83c\udf46": {
    "emoji-id": "e-056",
    "codepoint": "U+1F346",
    "name": "AUBERGINE",
    "twitter-id": "1f346"
  },
  "\ud83d\udc44": {
    "emoji-id": "e-193",
    "codepoint": "U+1F444",
    "name": "MOUTH",
    "twitter-id": "1f444"
  },
  "\ud83d\udc39": {
    "emoji-id": "e-1CA",
    "codepoint": "U+1F439",
    "name": "HAMSTER FACE",
    "twitter-id": "1f439"
  },
  "\ud83c\udfb8": {
    "emoji-id": "e-816",
    "codepoint": "U+1F3B8",
    "name": "GUITAR",
    "twitter-id": "1f3b8"
  },
  "\ud83d\udebe": {
    "emoji-id": "e-508",
    "codepoint": "U+1F6BE",
    "name": "WATER CLOSET",
    "twitter-id": "1f6be"
  },
  "\ud83d\udd33": {
    "emoji-id": "e-B67",
    "codepoint": "U+1F533",
    "name": "WHITE SQUARE BUTTON",
    "twitter-id": "1f533"
  },
  "\ud83d\udcb2": {
    "emoji-id": "e-4E0",
    "codepoint": "U+1F4B2",
    "name": "HEAVY DOLLAR SIGN",
    "twitter-id": "1f4b2"
  },
  "\u27b0": {
    "emoji-id": "e-B08",
    "codepoint": "U+27B0",
    "name": "CURLY LOOP",
    "twitter-id": "27b0"
  },
  "\ud83c\udf37": {
    "emoji-id": "e-03D",
    "codepoint": "U+1F337",
    "name": "TULIP",
    "twitter-id": "1f337"
  },
  "\ud83d\ude35": {
    "emoji-id": "e-324",
    "codepoint": "U+1F635",
    "name": "DIZZY FACE",
    "twitter-id": "1f635"
  },
  "\ud83d\udc29": {
    "emoji-id": "e-1D8",
    "codepoint": "U+1F429",
    "name": "POODLE",
    "twitter-id": "1f429"
  },
  "\ud83c\udfa8": {
    "emoji-id": "e-804",
    "codepoint": "U+1F3A8",
    "name": "ARTIST PALETTE",
    "twitter-id": "1f3a8"
  },
  "\ud83d\udd23": {
    "emoji-id": "e-B7F",
    "codepoint": "U+1F523",
    "name": "INPUT SYMBOL FOR SYMBOLS",
    "twitter-id": "1f523"
  },
  "\ud83d\udca2": {
    "emoji-id": "e-B57",
    "codepoint": "U+1F4A2",
    "name": "ANGER SYMBOL",
    "twitter-id": "1f4a2"
  },
  "\ud83d\ude25": {
    "emoji-id": "e-345",
    "codepoint": "U+1F625",
    "name": "DISAPPOINTED BUT RELIEVED FACE",
    "twitter-id": "1f625"
  },
  "\ud83d\udc19": {
    "emoji-id": "e-1C5",
    "codepoint": "U+1F419",
    "name": "OCTOPUS",
    "twitter-id": "1f419"
  },
  "\u26bd": {
    "emoji-id": "e-7D4",
    "codepoint": "U+26BD",
    "name": "SOCCER BALL",
    "twitter-id": "26bd"
  },
  "\ud83d\udd13": {
    "emoji-id": "e-B87",
    "codepoint": "U+1F513",
    "name": "OPEN LOCK",
    "twitter-id": "1f513"
  },
  "\ud83d\udc92": {
    "emoji-id": "e-82A",
    "codepoint": "U+1F492",
    "name": "WEDDING",
    "twitter-id": "1f492"
  },
  "\u2615": {
    "emoji-id": "e-981",
    "codepoint": "U+2615",
    "name": "HOT BEVERAGE",
    "twitter-id": "2615"
  },
  "\ud83c\udf88": {
    "emoji-id": "e-516",
    "codepoint": "U+1F388",
    "name": "BALLOON",
    "twitter-id": "1f388"
  },
  "\u270f": {
    "emoji-id": "e-539",
    "codepoint": "U+270F",
    "name": "PENCIL",
    "twitter-id": "270f"
  },
  "\ud83d\udd03": {
    "emoji-id": "e-B91",
    "codepoint": "U+1F503",
    "name": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
    "twitter-id": "1f503"
  },
  "\ud83d\udc82": {
    "emoji-id": "e-1B5",
    "codepoint": "U+1F482",
    "name": "GUARDSMAN",
    "twitter-id": "1f482"
  },
  "\ud83c\udf07": {
    "emoji-id": "e-00C",
    "codepoint": "U+1F307",
    "name": "SUNSET OVER BUILDINGS",
    "twitter-id": "1f307"
  },
  "\ud83d\ude05": {
    "emoji-id": "e-331",
    "codepoint": "U+1F605",
    "name": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
    "twitter-id": "1f605"
  },
  "\ud83d\udc79": {
    "emoji-id": "e-1AC",
    "codepoint": "U+1F479",
    "name": "JAPANESE OGRE",
    "twitter-id": "1f479"
  },
  "7\u20e3": {
    "emoji-id": "e-834",
    "codepoint": "U+0037 U+20E3",
    "name": "KEYCAP 7",
    "twitter-id": "37-20e3",
    "names": [
      "DIGIT SEVEN",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\ud83c\uddfc": {
    "emoji-id": "e-56A",
    "codepoint": "U+1F1FC",
    "name": "REGIONAL INDICATOR SYMBOL LETTER W",
    "twitter-id": "1f1fc"
  },
  "\ud83d\udcf2": {
    "emoji-id": "e-526",
    "codepoint": "U+1F4F2",
    "name": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT",
    "twitter-id": "1f4f2"
  },
  "\ud83c\udf77": {
    "emoji-id": "e-986",
    "codepoint": "U+1F377",
    "name": "WINE GLASS",
    "twitter-id": "1f377"
  },
  "\ud83d\udc69": {
    "emoji-id": "e-19E",
    "codepoint": "U+1F469",
    "name": "WOMAN",
    "twitter-id": "1f469"
  },
  "\ud83c\udfe8": {
    "emoji-id": "e-4B7",
    "codepoint": "U+1F3E8",
    "name": "HOTEL",
    "twitter-id": "1f3e8"
  },
  "\ud83c\uddec": {
    "emoji-id": "e-55A",
    "codepoint": "U+1F1EC",
    "name": "REGIONAL INDICATOR SYMBOL LETTER G",
    "twitter-id": "1f1ec"
  },
  "\ud83d\udce2": {
    "emoji-id": "e-52F",
    "codepoint": "U+1F4E2",
    "name": "PUBLIC ADDRESS LOUDSPEAKER",
    "twitter-id": "1f4e2"
  },
  "\ud83c\udf67": {
    "emoji-id": "e-971",
    "codepoint": "U+1F367",
    "name": "SHAVED ICE",
    "twitter-id": "1f367"
  },
  "\u2665": {
    "emoji-id": "e-B1A",
    "codepoint": "U+2665",
    "name": "BLACK HEART SUIT",
    "twitter-id": "2665"
  },
  "\ud83d\udc59": {
    "emoji-id": "e-4DA",
    "codepoint": "U+1F459",
    "name": "BIKINI",
    "twitter-id": "1f459"
  },
  "\ud83d\udd53": {
    "emoji-id": "e-021",
    "codepoint": "U+1F553",
    "name": "CLOCK FACE FOUR OCLOCK",
    "twitter-id": "1f553"
  },
  "\ud83d\udcd2": {
    "emoji-id": "e-54F",
    "codepoint": "U+1F4D2",
    "name": "LEDGER",
    "twitter-id": "1f4d2"
  },
  "\ud83c\udf57": {
    "emoji-id": "e-976",
    "codepoint": "U+1F357",
    "name": "POULTRY LEG",
    "twitter-id": "1f357"
  },
  "\ud83d\udc49": {
    "emoji-id": "e-B9C",
    "codepoint": "U+1F449",
    "name": "WHITE RIGHT POINTING BACKHAND INDEX",
    "twitter-id": "1f449"
  },
  "\ud83c\udfc8": {
    "emoji-id": "e-7DD",
    "codepoint": "U+1F3C8",
    "name": "AMERICAN FOOTBALL",
    "twitter-id": "1f3c8"
  },
  "\u26ce": {
    "emoji-id": "e-037",
    "codepoint": "U+26CE",
    "name": "OPHIUCHUS",
    "twitter-id": "26ce"
  },
  "\u24c2": {
    "emoji-id": "e-7E1",
    "codepoint": "U+24C2",
    "name": "CIRCLED LATIN CAPITAL LETTER M",
    "twitter-id": "24c2"
  },
  "\ud83c\udf47": {
    "emoji-id": "e-059",
    "codepoint": "U+1F347",
    "name": "GRAPES",
    "twitter-id": "1f347"
  },
  "\ud83d\ude45": {
    "emoji-id": "e-351",
    "codepoint": "U+1F645",
    "name": "FACE WITH NO GOOD GESTURE",
    "twitter-id": "1f645"
  },
  "\ud83d\udcb9": {
    "emoji-id": "e-4DF",
    "codepoint": "U+1F4B9",
    "name": "CHART WITH UPWARDS TREND AND YEN SIGN",
    "twitter-id": "1f4b9"
  },
  "\ud83c\udf38": {
    "emoji-id": "e-040",
    "codepoint": "U+1F338",
    "name": "CHERRY BLOSSOM",
    "twitter-id": "1f338"
  },
  "\u27bf": {
    "emoji-id": "e-82B",
    "codepoint": "U+27BF",
    "name": "DOUBLE CURLY LOOP",
    "twitter-id": "27bf"
  },
  "\ud83d\ude3e": {
    "emoji-id": "e-34E",
    "codepoint": "U+1F63E",
    "name": "POUTING CAT FACE",
    "twitter-id": "1f63e"
  },
  "\ud83d\udc32": {
    "emoji-id": "e-1DE",
    "codepoint": "U+1F432",
    "name": "DRAGON FACE",
    "twitter-id": "1f432"
  },
  "\ud83c\udfb7": {
    "emoji-id": "e-815",
    "codepoint": "U+1F3B7",
    "name": "SAXOPHONE",
    "twitter-id": "1f3b7"
  },
  "\ud83c\ude36": {
    "emoji-id": "e-B39",
    "codepoint": "U+1F236",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-6709",
    "twitter-id": "1f236"
  },
  "\ud83d\udd34": {
    "emoji-id": "e-B63",
    "codepoint": "U+1F534",
    "name": "LARGE RED CIRCLE",
    "twitter-id": "1f534"
  },
  "\ud83d\udca9": {
    "emoji-id": "e-4F4",
    "codepoint": "U+1F4A9",
    "name": "PILE OF POO",
    "twitter-id": "1f4a9"
  },
  "\ud83d\udc22": {
    "emoji-id": "e-1DC",
    "codepoint": "U+1F422",
    "name": "TURTLE",
    "twitter-id": "1f422"
  },
  "\ud83c\udfa7": {
    "emoji-id": "e-803",
    "codepoint": "U+1F3A7",
    "name": "HEADPHONE",
    "twitter-id": "1f3a7"
  },
  "\ud83d\udea5": {
    "emoji-id": "e-7F7",
    "codepoint": "U+1F6A5",
    "name": "HORIZONTAL TRAFFIC LIGHT",
    "twitter-id": "1f6a5"
  },
  "\ud83d\udd24": {
    "emoji-id": "e-B80",
    "codepoint": "U+1F524",
    "name": "INPUT SYMBOL FOR LATIN LETTERS",
    "twitter-id": "1f524"
  },
  "\ud83d\udc99": {
    "emoji-id": "e-B13",
    "codepoint": "U+1F499",
    "name": "BLUE HEART",
    "twitter-id": "1f499"
  },
  "\ud83d\ude1e": {
    "emoji-id": "e-323",
    "codepoint": "U+1F61E",
    "name": "DISAPPOINTED FACE",
    "twitter-id": "1f61e"
  },
  "\ud83d\udc12": {
    "emoji-id": "e-1CE",
    "codepoint": "U+1F412",
    "name": "MONKEY",
    "twitter-id": "1f412"
  },
  "\ud83d\ude95": {
    "emoji-id": "e-7EF",
    "codepoint": "U+1F695",
    "name": "TAXI",
    "twitter-id": "1f695"
  },
  "\ud83d\udd14": {
    "emoji-id": "e-4F2",
    "codepoint": "U+1F514",
    "name": "BELL",
    "twitter-id": "1f514"
  },
  "\ud83d\udc89": {
    "emoji-id": "e-509",
    "codepoint": "U+1F489",
    "name": "SYRINGE",
    "twitter-id": "1f489"
  },
  "\ud83c\udf08": {
    "emoji-id": "e-00D",
    "codepoint": "U+1F308",
    "name": "RAINBOW",
    "twitter-id": "1f308"
  },
  "\u260e": {
    "emoji-id": "e-523",
    "codepoint": "U+260E",
    "name": "BLACK TELEPHONE",
    "twitter-id": "260e"
  },
  "\ud83c\udf87": {
    "emoji-id": "e-51D",
    "codepoint": "U+1F387",
    "name": "FIREWORK SPARKLER",
    "twitter-id": "1f387"
  },
  "\ud83d\ude85": {
    "emoji-id": "e-7E3",
    "codepoint": "U+1F685",
    "name": "HIGH-SPEED TRAIN WITH BULLET NOSE",
    "twitter-id": "1f685"
  },
  "\ud83c\uddfb": {
    "emoji-id": "e-569",
    "codepoint": "U+1F1FB",
    "name": "REGIONAL INDICATOR SYMBOL LETTER V",
    "twitter-id": "1f1fb"
  },
  "\ud83d\udcf9": {
    "emoji-id": "e-4F9",
    "codepoint": "U+1F4F9",
    "name": "VIDEO CAMERA",
    "twitter-id": "1f4f9"
  },
  "\ud83c\udf78": {
    "emoji-id": "e-982",
    "codepoint": "U+1F378",
    "name": "COCKTAIL GLASS",
    "twitter-id": "1f378"
  },
  "\ud83d\udc72": {
    "emoji-id": "e-1A5",
    "codepoint": "U+1F472",
    "name": "MAN WITH GUA PI MAO",
    "twitter-id": "1f472"
  },
  "\u264c": {
    "emoji-id": "e-02F",
    "codepoint": "U+264C",
    "name": "LEO",
    "twitter-id": "264c"
  },
  "\u26f5": {
    "emoji-id": "e-7EA",
    "codepoint": "U+26F5",
    "name": "SAILBOAT",
    "twitter-id": "26f5"
  },
  "\ud83c\uddeb": {
    "emoji-id": "e-559",
    "codepoint": "U+1F1EB",
    "name": "REGIONAL INDICATOR SYMBOL LETTER F",
    "twitter-id": "1f1eb"
  },
  "\ud83d\udce9": {
    "emoji-id": "e-52B",
    "codepoint": "U+1F4E9",
    "name": "ENVELOPE WITH DOWNWARDS ARROW ABOVE",
    "twitter-id": "1f4e9"
  },
  "\ud83c\udf68": {
    "emoji-id": "e-977",
    "codepoint": "U+1F368",
    "name": "ICE CREAM",
    "twitter-id": "1f368"
  },
  "\ud83d\udc62": {
    "emoji-id": "e-4D8",
    "codepoint": "U+1F462",
    "name": "WOMANS BOOTS",
    "twitter-id": "1f462"
  },
  "\ud83c\udfe7": {
    "emoji-id": "e-4B6",
    "codepoint": "U+1F3E7",
    "name": "AUTOMATED TELLER MACHINE",
    "twitter-id": "1f3e7"
  },
  "\ud83d\udcd9": {
    "emoji-id": "e-501",
    "codepoint": "U+1F4D9",
    "name": "ORANGE BOOK",
    "twitter-id": "1f4d9"
  },
  "\ud83c\udf58": {
    "emoji-id": "e-969",
    "codepoint": "U+1F358",
    "name": "RICE CRACKER",
    "twitter-id": "1f358"
  },
  "\ud83d\udc52": {
    "emoji-id": "e-4D4",
    "codepoint": "U+1F452",
    "name": "WOMANS HAT",
    "twitter-id": "1f452"
  },
  "\u2b05": {
    "emoji-id": "e-AFB",
    "codepoint": "U+2B05",
    "name": "LEFTWARDS BLACK ARROW",
    "twitter-id": "2b05"
  },
  "\ud83d\udd54": {
    "emoji-id": "e-022",
    "codepoint": "U+1F554",
    "name": "CLOCK FACE FIVE OCLOCK",
    "twitter-id": "1f554"
  },
  "\ud83d\udcc9": {
    "emoji-id": "e-54C",
    "codepoint": "U+1F4C9",
    "name": "CHART WITH DOWNWARDS TREND",
    "twitter-id": "1f4c9"
  },
  "\ud83c\udf48": {
    "emoji-id": "e-057",
    "codepoint": "U+1F348",
    "name": "MELON",
    "twitter-id": "1f348"
  },
  "\u25fb": {
    "emoji-id": "e-B71",
    "codepoint": "U+25FB",
    "name": "WHITE MEDIUM SQUARE",
    "twitter-id": "25fb"
  },
  "\u264e": {
    "emoji-id": "e-031",
    "codepoint": "U+264E",
    "name": "LIBRA",
    "twitter-id": "264e"
  },
  "\ud83d\udc42": {
    "emoji-id": "e-191",
    "codepoint": "U+1F442",
    "name": "EAR",
    "twitter-id": "1f442"
  },
  "2\u20e3": {
    "emoji-id": "e-82F",
    "codepoint": "U+0032 U+20E3",
    "name": "KEYCAP 2",
    "twitter-id": "32-20e3",
    "names": [
      "DIGIT TWO",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\u26c5": {
    "emoji-id": "e-00F",
    "codepoint": "U+26C5",
    "name": "SUN BEHIND CLOUD",
    "twitter-id": "26c5"
  },
  "\ud83c\udfba": {
    "emoji-id": "e-818",
    "codepoint": "U+1F3BA",
    "name": "TRUMPET",
    "twitter-id": "1f3ba"
  },
  "\ud83d\ude33": {
    "emoji-id": "e-32F",
    "codepoint": "U+1F633",
    "name": "FLUSHED FACE",
    "twitter-id": "1f633"
  },
  "\ud83c\udf31": {
    "emoji-id": "e-03E",
    "codepoint": "U+1F331",
    "name": "SEEDLING",
    "twitter-id": "1f331"
  },
  "\ud83d\udcb0": {
    "emoji-id": "e-4DD",
    "codepoint": "U+1F4B0",
    "name": "MONEY BAG",
    "twitter-id": "1f4b0"
  },
  "\ud83d\udd35": {
    "emoji-id": "e-B64",
    "codepoint": "U+1F535",
    "name": "LARGE BLUE CIRCLE",
    "twitter-id": "1f535"
  },
  "\ud83c\udfaa": {
    "emoji-id": "e-806",
    "codepoint": "U+1F3AA",
    "name": "CIRCUS TENT",
    "twitter-id": "1f3aa"
  },
  "\ud83d\udc2f": {
    "emoji-id": "e-1C0",
    "codepoint": "U+1F42F",
    "name": "TIGER FACE",
    "twitter-id": "1f42f"
  },
  "\ud83d\ude23": {
    "emoji-id": "e-33C",
    "codepoint": "U+1F623",
    "name": "PERSEVERING FACE",
    "twitter-id": "1f623"
  },
  "\ud83d\udca0": {
    "emoji-id": "e-B55",
    "codepoint": "U+1F4A0",
    "name": "DIAMOND SHAPE WITH A DOT INSIDE",
    "twitter-id": "1f4a0"
  },
  "\ud83d\udd25": {
    "emoji-id": "e-4F6",
    "codepoint": "U+1F525",
    "name": "FIRE",
    "twitter-id": "1f525"
  },
  "\ud83d\udea4": {
    "emoji-id": "e-7EE",
    "codepoint": "U+1F6A4",
    "name": "SPEEDBOAT",
    "twitter-id": "1f6a4"
  },
  "\ud83d\udc1f": {
    "emoji-id": "e-1BD",
    "codepoint": "U+1F41F",
    "name": "FISH",
    "twitter-id": "1f41f"
  },
  "\ud83d\ude13": {
    "emoji-id": "e-344",
    "codepoint": "U+1F613",
    "name": "FACE WITH COLD SWEAT",
    "twitter-id": "1f613"
  },
  "\ud83c\udf11": {
    "emoji-id": "e-011",
    "codepoint": "U+1F311",
    "name": "NEW MOON SYMBOL",
    "twitter-id": "1f311"
  },
  "\ud83d\udc90": {
    "emoji-id": "e-828",
    "codepoint": "U+1F490",
    "name": "BOUQUET",
    "twitter-id": "1f490"
  },
  "\ud83c\udd96": {
    "emoji-id": "e-B28",
    "codepoint": "U+1F196",
    "name": "SQUARED NG",
    "twitter-id": "1f196"
  },
  "\ud83c\udf8a": {
    "emoji-id": "e-520",
    "codepoint": "U+1F38A",
    "name": "CONFETTI BALL",
    "twitter-id": "1f38a"
  },
  "\u2709": {
    "emoji-id": "e-529",
    "codepoint": "U+2709",
    "name": "ENVELOPE",
    "twitter-id": "2709"
  },
  "\u2708": {
    "emoji-id": "e-7E9",
    "codepoint": "U+2708",
    "name": "AIRPLANE",
    "twitter-id": "2708"
  },
  "\ud83d\ude03": {
    "emoji-id": "e-330",
    "codepoint": "U+1F603",
    "name": "SMILING FACE WITH OPEN MOUTH",
    "twitter-id": "1f603"
  },
  "\ud83c\udf01": {
    "emoji-id": "e-006",
    "codepoint": "U+1F301",
    "name": "FOGGY",
    "twitter-id": "1f301"
  },
  "\ud83d\udc80": {
    "emoji-id": "e-1B3",
    "codepoint": "U+1F480",
    "name": "SKULL",
    "twitter-id": "1f480"
  },
  "\ud83d\ude84": {
    "emoji-id": "e-7E2",
    "codepoint": "U+1F684",
    "name": "HIGH-SPEED TRAIN",
    "twitter-id": "1f684"
  },
  "\ud83d\udc7f": {
    "emoji-id": "e-1B2",
    "codepoint": "U+1F47F",
    "name": "IMP",
    "twitter-id": "1f47f"
  },
  "\ud83d\uddfe": {
    "emoji-id": "e-4C7",
    "codepoint": "U+1F5FE",
    "name": "SILHOUETTE OF JAPAN",
    "twitter-id": "1f5fe"
  },
  "\ud83c\udf71": {
    "emoji-id": "e-96F",
    "codepoint": "U+1F371",
    "name": "BENTO BOX",
    "twitter-id": "1f371"
  },
  "\ud83d\udcf0": {
    "emoji-id": "e-822",
    "codepoint": "U+1F4F0",
    "name": "NEWSPAPER",
    "twitter-id": "1f4f0"
  },
  "\ud83c\uddf6": {
    "emoji-id": "e-564",
    "codepoint": "U+1F1F6",
    "name": "REGIONAL INDICATOR SYMBOL LETTER Q",
    "twitter-id": "1f1f6"
  },
  "\u23ea": {
    "emoji-id": "e-AFF",
    "codepoint": "U+23EA",
    "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE",
    "twitter-id": "23ea"
  },
  "\ud83d\udc6f": {
    "emoji-id": "e-1A2",
    "codepoint": "U+1F46F",
    "name": "WOMAN WITH BUNNY EARS",
    "twitter-id": "1f46f"
  },
  "\u2663": {
    "emoji-id": "e-B1D",
    "codepoint": "U+2663",
    "name": "BLACK CLUB SUIT",
    "twitter-id": "2663"
  },
  "\ud83c\udf61": {
    "emoji-id": "e-968",
    "codepoint": "U+1F361",
    "name": "DANGO",
    "twitter-id": "1f361"
  },
  "\ud83d\udce0": {
    "emoji-id": "e-528",
    "codepoint": "U+1F4E0",
    "name": "FAX MACHINE",
    "twitter-id": "1f4e0"
  },
  "\ud83c\udde6": {
    "emoji-id": "e-554",
    "codepoint": "U+1F1E6",
    "name": "REGIONAL INDICATOR SYMBOL LETTER A",
    "twitter-id": "1f1e6"
  },
  "\ud83d\udc5f": {
    "emoji-id": "e-4CD",
    "codepoint": "U+1F45F",
    "name": "ATHLETIC SHOE",
    "twitter-id": "1f45f"
  },
  "\u26aa": {
    "emoji-id": "e-B65",
    "codepoint": "U+26AA",
    "name": "MEDIUM WHITE CIRCLE",
    "twitter-id": "26aa"
  },
  "#\u20e3": {
    "emoji-id": "e-82C",
    "codepoint": "U+0023 U+20E3",
    "name": "HASH KEY",
    "twitter-id": "23-20e3",
    "names": [
      "NUMBER SIGN",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "8\u20e3": {
    "emoji-id": "e-835",
    "codepoint": "U+0038 U+20E3",
    "name": "KEYCAP 8",
    "twitter-id": "38-20e3",
    "names": [
      "DIGIT EIGHT",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\ud83c\udf51": {
    "emoji-id": "e-05A",
    "codepoint": "U+1F351",
    "name": "PEACH",
    "twitter-id": "1f351"
  },
  "\ud83d\udcd0": {
    "emoji-id": "e-551",
    "codepoint": "U+1F4D0",
    "name": "TRIANGULAR RULER",
    "twitter-id": "1f4d0"
  },
  "\ud83d\udd55": {
    "emoji-id": "e-023",
    "codepoint": "U+1F555",
    "name": "CLOCK FACE SIX OCLOCK",
    "twitter-id": "1f555"
  },
  "\u26d4": {
    "emoji-id": "e-B26",
    "codepoint": "U+26D4",
    "name": "NO ENTRY",
    "twitter-id": "26d4"
  },
  "\ud83c\udfca": {
    "emoji-id": "e-7DE",
    "codepoint": "U+1F3CA",
    "name": "SWIMMER",
    "twitter-id": "1f3ca"
  },
  "\ud83d\udc4f": {
    "emoji-id": "e-B9E",
    "codepoint": "U+1F44F",
    "name": "CLAPPING HANDS SIGN",
    "twitter-id": "1f44f"
  },
  "\ud83c\udf41": {
    "emoji-id": "e-03F",
    "codepoint": "U+1F341",
    "name": "MAPLE LEAF",
    "twitter-id": "1f341"
  },
  "\ud83d\udcc0": {
    "emoji-id": "e-81E",
    "codepoint": "U+1F4C0",
    "name": "DVD",
    "twitter-id": "1f4c0"
  },
  "\ud83d\ude49": {
    "emoji-id": "e-356",
    "codepoint": "U+1F649",
    "name": "HEAR-NO-EVIL MONKEY",
    "twitter-id": "1f649"
  },
  "\u26c4": {
    "emoji-id": "e-003",
    "codepoint": "U+26C4",
    "name": "SNOWMAN WITHOUT SNOW",
    "twitter-id": "26c4"
  },
  "\ud83c\udf3a": {
    "emoji-id": "e-045",
    "codepoint": "U+1F33A",
    "name": "HIBISCUS",
    "twitter-id": "1f33a"
  },
  "\ud83d\udcbf": {
    "emoji-id": "e-81D",
    "codepoint": "U+1F4BF",
    "name": "OPTICAL DISC",
    "twitter-id": "1f4bf"
  },
  "\ud83c\udfb1": {
    "emoji-id": "e-80E",
    "codepoint": "U+1F3B1",
    "name": "BILLIARDS",
    "twitter-id": "1f3b1"
  },
  "\ud83d\udc30": {
    "emoji-id": "e-1D2",
    "codepoint": "U+1F430",
    "name": "RABBIT FACE",
    "twitter-id": "1f430"
  },
  "\ud83d\udcaf": {
    "emoji-id": "e-B7B",
    "codepoint": "U+1F4AF",
    "name": "HUNDRED POINTS SYMBOL",
    "twitter-id": "1f4af"
  },
  "\u2b55": {
    "emoji-id": "e-B44",
    "codepoint": "U+2B55",
    "name": "HEAVY LARGE CIRCLE",
    "twitter-id": "2b55"
  },
  "\ud83c\udfa1": {
    "emoji-id": "e-7FD",
    "codepoint": "U+1F3A1",
    "name": "FERRIS WHEEL",
    "twitter-id": "1f3a1"
  },
  "\ud83d\udc20": {
    "emoji-id": "e-1C9",
    "codepoint": "U+1F420",
    "name": "TROPICAL FISH",
    "twitter-id": "1f420"
  },
  "\ud83d\ude24": {
    "emoji-id": "e-328",
    "codepoint": "U+1F624",
    "name": "FACE WITH LOOK OF TRIUMPH",
    "twitter-id": "1f624"
  },
  "\u231a": {
    "emoji-id": "e-01D",
    "codepoint": "U+231A",
    "name": "WATCH",
    "twitter-id": "231a"
  },
  "\ud83d\udc9f": {
    "emoji-id": "e-B19",
    "codepoint": "U+1F49F",
    "name": "HEART DECORATION",
    "twitter-id": "1f49f"
  },
  "\ud83d\udd1e": {
    "emoji-id": "e-B25",
    "codepoint": "U+1F51E",
    "name": "NO ONE UNDER EIGHTEEN SYMBOL",
    "twitter-id": "1f51e"
  },
  "\u2693": {
    "emoji-id": "e-4C1",
    "codepoint": "U+2693",
    "name": "ANCHOR",
    "twitter-id": "2693"
  },
  "\u2712": {
    "emoji-id": "e-536",
    "codepoint": "U+2712",
    "name": "BLACK NIB",
    "twitter-id": "2712"
  },
  "\ud83c\udf91": {
    "emoji-id": "e-017",
    "codepoint": "U+1F391",
    "name": "MOON VIEWING CEREMONY",
    "twitter-id": "1f391"
  },
  "\ud83d\ude14": {
    "emoji-id": "e-340",
    "codepoint": "U+1F614",
    "name": "PENSIVE FACE",
    "twitter-id": "1f614"
  },
  "\ud83c\udf0a": {
    "emoji-id": "e-038",
    "codepoint": "U+1F30A",
    "name": "WATER WAVE",
    "twitter-id": "1f30a"
  },
  "\ud83d\udc8f": {
    "emoji-id": "e-827",
    "codepoint": "U+1F48F",
    "name": "KISS",
    "twitter-id": "1f48f"
  },
  "\ud83d\udd0e": {
    "emoji-id": "e-B8D",
    "codepoint": "U+1F50E",
    "name": "RIGHT-POINTING MAGNIFYING GLASS",
    "twitter-id": "1f50e"
  },
  "\ud83d\ude83": {
    "emoji-id": "e-7DF",
    "codepoint": "U+1F683",
    "name": "RAILWAY CAR",
    "twitter-id": "1f683"
  },
  "\ud83d\ude4f": {
    "emoji-id": "e-35B",
    "codepoint": "U+1F64F",
    "name": "PERSON WITH FOLDED HANDS",
    "twitter-id": "1f64f"
  },
  "\ud83c\udf81": {
    "emoji-id": "e-510",
    "codepoint": "U+1F381",
    "name": "WRAPPED PRESENT",
    "twitter-id": "1f381"
  },
  "5\u20e3": {
    "emoji-id": "e-832",
    "codepoint": "U+0035 U+20E3",
    "name": "KEYCAP 5",
    "twitter-id": "35-20e3",
    "names": [
      "DIGIT FIVE",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\ud83d\ude04": {
    "emoji-id": "e-338",
    "codepoint": "U+1F604",
    "name": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
    "twitter-id": "1f604"
  },
  "\ud83c\udf7a": {
    "emoji-id": "e-983",
    "codepoint": "U+1F37A",
    "name": "BEER MUG",
    "twitter-id": "1f37a"
  },
  "\ud83c\uddfd": {
    "emoji-id": "e-56B",
    "codepoint": "U+1F1FD",
    "name": "REGIONAL INDICATOR SYMBOL LETTER X",
    "twitter-id": "1f1fd"
  },
  "\u26f3": {
    "emoji-id": "e-7D2",
    "codepoint": "U+26F3",
    "name": "FLAG IN HOLE",
    "twitter-id": "26f3"
  },
  "\ud83d\udc70": {
    "emoji-id": "e-1A3",
    "codepoint": "U+1F470",
    "name": "BRIDE WITH VEIL",
    "twitter-id": "1f470"
  },
  "\ud83c\udf6a": {
    "emoji-id": "e-979",
    "codepoint": "U+1F36A",
    "name": "COOKIE",
    "twitter-id": "1f36a"
  },
  "\u2198": {
    "emoji-id": "e-AF1",
    "codepoint": "U+2198",
    "name": "SOUTH EAST ARROW",
    "twitter-id": "2198"
  },
  "\ud83c\uddf0\ud83c\uddf7": {
    "emoji-id": "e-4EE",
    "codepoint": "U+1F1F0 U+1F1F7",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS KR",
    "twitter-id": "1f1f0-1f1f7",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER K",
      "REGIONAL INDICATOR SYMBOL LETTER R"
    ]
  },
  "\ud83c\udded": {
    "emoji-id": "e-55B",
    "codepoint": "U+1F1ED",
    "name": "REGIONAL INDICATOR SYMBOL LETTER H",
    "twitter-id": "1f1ed"
  },
  "\ud83c\udfe1": {
    "emoji-id": "e-4B1",
    "codepoint": "U+1F3E1",
    "name": "HOUSE WITH GARDEN",
    "twitter-id": "1f3e1"
  },
  "\ud83d\udc60": {
    "emoji-id": "e-4D6",
    "codepoint": "U+1F460",
    "name": "HIGH-HEELED SHOE",
    "twitter-id": "1f460"
  },
  "\ud83c\udf5a": {
    "emoji-id": "e-96A",
    "codepoint": "U+1F35A",
    "name": "COOKED RICE",
    "twitter-id": "1f35a"
  },
  "\ud83d\udcdf": {
    "emoji-id": "e-522",
    "codepoint": "U+1F4DF",
    "name": "PAGER",
    "twitter-id": "1f4df"
  },
  "\ud83d\udc50": {
    "emoji-id": "e-BA1",
    "codepoint": "U+1F450",
    "name": "OPEN HANDS SIGN",
    "twitter-id": "1f450"
  },
  "\ud83c\udf4a": {
    "emoji-id": "e-052",
    "codepoint": "U+1F34A",
    "name": "TANGERINE",
    "twitter-id": "1f34a"
  },
  "\ud83d\udccf": {
    "emoji-id": "e-550",
    "codepoint": "U+1F4CF",
    "name": "STRAIGHT RULER",
    "twitter-id": "1f4cf"
  },
  "\ud83c\udfc1": {
    "emoji-id": "e-7D7",
    "codepoint": "U+1F3C1",
    "name": "CHEQUERED FLAG",
    "twitter-id": "1f3c1"
  },
  "\ud83d\udc40": {
    "emoji-id": "e-190",
    "codepoint": "U+1F440",
    "name": "EYES",
    "twitter-id": "1f440"
  },
  "\ud83c\udf3b": {
    "emoji-id": "e-046",
    "codepoint": "U+1F33B",
    "name": "SUNFLOWER",
    "twitter-id": "1f33b"
  },
  "\ud83d\ude39": {
    "emoji-id": "e-34A",
    "codepoint": "U+1F639",
    "name": "CAT FACE WITH TEARS OF JOY",
    "twitter-id": "1f639"
  },
  "\ud83d\udcbe": {
    "emoji-id": "e-53D",
    "codepoint": "U+1F4BE",
    "name": "FLOPPY DISK",
    "twitter-id": "1f4be"
  },
  "\u303d": {
    "emoji-id": "e-81B",
    "codepoint": "U+303D",
    "name": "PART ALTERNATION MARK",
    "twitter-id": "303d"
  },
  "\ud83c\udfbc": {
    "emoji-id": "e-81A",
    "codepoint": "U+1F3BC",
    "name": "MUSICAL SCORE",
    "twitter-id": "1f3bc"
  },
  "\u2733": {
    "emoji-id": "e-B62",
    "codepoint": "U+2733",
    "name": "EIGHT SPOKED ASTERISK",
    "twitter-id": "2733"
  },
  "\ud83d\udeb2": {
    "emoji-id": "e-7EB",
    "codepoint": "U+1F6B2",
    "name": "BICYCLE",
    "twitter-id": "1f6b2"
  },
  "\ud83d\udc35": {
    "emoji-id": "e-1C4",
    "codepoint": "U+1F435",
    "name": "MONKEY FACE",
    "twitter-id": "1f435"
  },
  "\ud83d\ude29": {
    "emoji-id": "e-321",
    "codepoint": "U+1F629",
    "name": "WEARY FACE",
    "twitter-id": "1f629"
  },
  "\ud83d\udd2f": {
    "emoji-id": "e-4F8",
    "codepoint": "U+1F52F",
    "name": "SIX POINTED STAR WITH MIDDLE DOT",
    "twitter-id": "1f52f"
  },
  "\ud83d\udcae": {
    "emoji-id": "e-B7A",
    "codepoint": "U+1F4AE",
    "name": "WHITE FLOWER",
    "twitter-id": "1f4ae"
  },
  "\ud83c\udfac": {
    "emoji-id": "e-808",
    "codepoint": "U+1F3AC",
    "name": "CLAPPER BOARD",
    "twitter-id": "1f3ac"
  },
  "\ud83d\udea2": {
    "emoji-id": "e-7E8",
    "codepoint": "U+1F6A2",
    "name": "SHIP",
    "twitter-id": "1f6a2"
  },
  "\ud83c\uddf7\ud83c\uddfa": {
    "emoji-id": "e-4EC",
    "codepoint": "U+1F1F7 U+1F1FA",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS RU",
    "twitter-id": "1f1f7-1f1fa",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER R",
      "REGIONAL INDICATOR SYMBOL LETTER U"
    ]
  },
  "\ud83d\udc25": {
    "emoji-id": "e-1BB",
    "codepoint": "U+1F425",
    "name": "FRONT-FACING BABY CHICK",
    "twitter-id": "1f425"
  },
  "\ud83c\udf1b": {
    "emoji-id": "e-016",
    "codepoint": "U+1F31B",
    "name": "FIRST QUARTER MOON WITH FACE",
    "twitter-id": "1f31b"
  },
  "\ud83c\udd98": {
    "emoji-id": "e-B4F",
    "codepoint": "U+1F198",
    "name": "SQUARED SOS",
    "twitter-id": "1f198"
  },
  "\ud83d\udd1f": {
    "emoji-id": "e-83B",
    "codepoint": "U+1F51F",
    "name": "KEYCAP TEN",
    "twitter-id": "1f51f"
  },
  "\ud83d\udc9e": {
    "emoji-id": "e-B18",
    "codepoint": "U+1F49E",
    "name": "REVOLVING HEARTS",
    "twitter-id": "1f49e"
  },
  "9\u20e3": {
    "emoji-id": "e-836",
    "codepoint": "U+0039 U+20E3",
    "name": "KEYCAP 9",
    "twitter-id": "39-20e3",
    "names": [
      "DIGIT NINE",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\ud83d\ude92": {
    "emoji-id": "e-7F2",
    "codepoint": "U+1F692",
    "name": "FIRE ENGINE",
    "twitter-id": "1f692"
  },
  "\u203c": {
    "emoji-id": "e-B06",
    "codepoint": "U+203C",
    "name": "DOUBLE EXCLAMATION MARK",
    "twitter-id": "203c"
  },
  "\ud83c\udf0b": {
    "emoji-id": "e-03A",
    "codepoint": "U+1F30B",
    "name": "VOLCANO",
    "twitter-id": "1f30b"
  },
  "\ud83d\ude09": {
    "emoji-id": "e-347",
    "codepoint": "U+1F609",
    "name": "WINKING FACE",
    "twitter-id": "1f609"
  },
  "\ud83d\udd0f": {
    "emoji-id": "e-B90",
    "codepoint": "U+1F50F",
    "name": "LOCK WITH INK PEN",
    "twitter-id": "1f50f"
  },
  "\ud83d\udc8e": {
    "emoji-id": "e-826",
    "codepoint": "U+1F48E",
    "name": "GEM STONE",
    "twitter-id": "1f48e"
  },
  "\ud83c\udf8c": {
    "emoji-id": "e-514",
    "codepoint": "U+1F38C",
    "name": "CROSSED FLAGS",
    "twitter-id": "1f38c"
  },
  "\ud83c\ude01": {
    "emoji-id": "e-B24",
    "codepoint": "U+1F201",
    "name": "SQUARED KATAKANA KOKO",
    "twitter-id": "1f201"
  },
  "\ud83c\udf7b": {
    "emoji-id": "e-987",
    "codepoint": "U+1F37B",
    "name": "CLINKING BEER MUGS",
    "twitter-id": "1f37b"
  },
  "\ud83c\uddf8": {
    "emoji-id": "e-566",
    "codepoint": "U+1F1F8",
    "name": "REGIONAL INDICATOR SYMBOL LETTER S",
    "twitter-id": "1f1f8"
  },
  "\ud83d\udc5a": {
    "emoji-id": "e-4DB",
    "codepoint": "U+1F45A",
    "name": "WOMANS CLOTHES",
    "twitter-id": "1f45a"
  },
  "\u26f2": {
    "emoji-id": "e-4BC",
    "codepoint": "U+26F2",
    "name": "FOUNTAIN",
    "twitter-id": "26f2"
  },
  "\u2197": {
    "emoji-id": "e-AF0",
    "codepoint": "U+2197",
    "name": "NORTH EAST ARROW",
    "twitter-id": "2197"
  },
  "\ud83d\udc75": {
    "emoji-id": "e-1A8",
    "codepoint": "U+1F475",
    "name": "OLDER WOMAN",
    "twitter-id": "1f475"
  },
  "\ud83c\udf6b": {
    "emoji-id": "e-97A",
    "codepoint": "U+1F36B",
    "name": "CHOCOLATE BAR",
    "twitter-id": "1f36b"
  },
  "\ud83c\udde8": {
    "emoji-id": "e-556",
    "codepoint": "U+1F1E8",
    "name": "REGIONAL INDICATOR SYMBOL LETTER C",
    "twitter-id": "1f1e8"
  },
  "\ud83d\udcee": {
    "emoji-id": "e-52E",
    "codepoint": "U+1F4EE",
    "name": "POSTBOX",
    "twitter-id": "1f4ee"
  },
  "\u23ec": {
    "emoji-id": "e-B02",
    "codepoint": "U+23EC",
    "name": "BLACK DOWN-POINTING DOUBLE TRIANGLE",
    "twitter-id": "23ec"
  },
  "\ud83d\ude01": {
    "emoji-id": "e-333",
    "codepoint": "U+1F601",
    "name": "GRINNING FACE WITH SMILING EYES",
    "twitter-id": "1f601"
  },
  "\ud83c\udf5b": {
    "emoji-id": "e-96C",
    "codepoint": "U+1F35B",
    "name": "CURRY AND RICE",
    "twitter-id": "1f35b"
  },
  "\ud83d\udcde": {
    "emoji-id": "e-524",
    "codepoint": "U+1F4DE",
    "name": "TELEPHONE RECEIVER",
    "twitter-id": "1f4de"
  },
  "\u2753": {
    "emoji-id": "e-B09",
    "codepoint": "U+2753",
    "name": "BLACK QUESTION MARK ORNAMENT",
    "twitter-id": "2753"
  },
  "\ud83c\ude51": {
    "emoji-id": "e-B50",
    "codepoint": "U+1F251",
    "name": "CIRCLED IDEOGRAPH ACCEPT",
    "twitter-id": "1f251"
  },
  "\ud83d\udc55": {
    "emoji-id": "e-4CF",
    "codepoint": "U+1F455",
    "name": "T-SHIRT",
    "twitter-id": "1f455"
  },
  "\u2649": {
    "emoji-id": "e-02C",
    "codepoint": "U+2649",
    "name": "TAURUS",
    "twitter-id": "2649"
  },
  "\ud83d\udcce": {
    "emoji-id": "e-53A",
    "codepoint": "U+1F4CE",
    "name": "PAPERCLIP",
    "twitter-id": "1f4ce"
  },
  "\u25c0": {
    "emoji-id": "e-AFD",
    "codepoint": "U+25C0",
    "name": "BLACK LEFT-POINTING TRIANGLE",
    "twitter-id": "25c0"
  },
  "\ud83d\udc45": {
    "emoji-id": "e-194",
    "codepoint": "U+1F445",
    "name": "TONGUE",
    "twitter-id": "1f445"
  },
  "\ud83c\udfbb": {
    "emoji-id": "e-819",
    "codepoint": "U+1F3BB",
    "name": "VIOLIN",
    "twitter-id": "1f3bb"
  },
  "\ud83c\ude3a": {
    "emoji-id": "e-B41",
    "codepoint": "U+1F23A",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-55B6",
    "twitter-id": "1f23a"
  },
  "\ud83d\udeb9": {
    "emoji-id": "e-B33",
    "codepoint": "U+1F6B9",
    "name": "MENS SYMBOL",
    "twitter-id": "1f6b9"
  },
  "\ud83d\udc3e": {
    "emoji-id": "e-1DB",
    "codepoint": "U+1F43E",
    "name": "PAW PRINTS",
    "twitter-id": "1f43e"
  },
  "\ud83c\udf3c": {
    "emoji-id": "e-04D",
    "codepoint": "U+1F33C",
    "name": "BLOSSOM",
    "twitter-id": "1f33c"
  },
  "\ud83d\ude32": {
    "emoji-id": "e-322",
    "codepoint": "U+1F632",
    "name": "ASTONISHED FACE",
    "twitter-id": "1f632"
  },
  "\ud83d\udd30": {
    "emoji-id": "e-044",
    "codepoint": "U+1F530",
    "name": "JAPANESE SYMBOL FOR BEGINNER",
    "twitter-id": "1f530"
  },
  "\ud83d\udcb5": {
    "emoji-id": "e-4E3",
    "codepoint": "U+1F4B5",
    "name": "BANKNOTE WITH DOLLAR SIGN",
    "twitter-id": "1f4b5"
  },
  "\u2734": {
    "emoji-id": "e-B61",
    "codepoint": "U+2734",
    "name": "EIGHT POINTED BLACK STAR",
    "twitter-id": "2734"
  },
  "\ud83c\udfab": {
    "emoji-id": "e-807",
    "codepoint": "U+1F3AB",
    "name": "TICKET",
    "twitter-id": "1f3ab"
  },
  "\ud83d\udea9": {
    "emoji-id": "e-B22",
    "codepoint": "U+1F6A9",
    "name": "TRIANGULAR FLAG ON POST",
    "twitter-id": "1f6a9"
  },
  "\ud83d\udc2e": {
    "emoji-id": "e-1D1",
    "codepoint": "U+1F42E",
    "name": "COW FACE",
    "twitter-id": "1f42e"
  },
  "\u23e9": {
    "emoji-id": "e-AFE",
    "codepoint": "U+23E9",
    "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE",
    "twitter-id": "23e9"
  },
  "\ud83d\ude22": {
    "emoji-id": "e-339",
    "codepoint": "U+1F622",
    "name": "CRYING FACE",
    "twitter-id": "1f622"
  },
  "\ud83d\udd20": {
    "emoji-id": "e-B7C",
    "codepoint": "U+1F520",
    "name": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS",
    "twitter-id": "1f520"
  },
  "\ud83d\udca5": {
    "emoji-id": "e-B5A",
    "codepoint": "U+1F4A5",
    "name": "COLLISION SYMBOL",
    "twitter-id": "1f4a5"
  },
  "\ud83c\ude1a": {
    "emoji-id": "e-B3A",
    "codepoint": "U+1F21A",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-7121",
    "twitter-id": "1f21a"
  },
  "\ud83d\ude99": {
    "emoji-id": "e-7E5",
    "codepoint": "U+1F699",
    "name": "RECREATIONAL VEHICLE",
    "twitter-id": "1f699"
  },
  "\ud83d\udc1e": {
    "emoji-id": "e-1E2",
    "codepoint": "U+1F41E",
    "name": "LADY BEETLE",
    "twitter-id": "1f41e"
  },
  "\u2b1c": {
    "emoji-id": "e-B6B",
    "codepoint": "U+2B1C",
    "name": "WHITE LARGE SQUARE",
    "twitter-id": "2b1c"
  },
  "\ud83d\ude12": {
    "emoji-id": "e-326",
    "codepoint": "U+1F612",
    "name": "UNAMUSED FACE",
    "twitter-id": "1f612"
  },
  "\ud83d\udd10": {
    "emoji-id": "e-B8A",
    "codepoint": "U+1F510",
    "name": "CLOSED LOCK WITH KEY",
    "twitter-id": "1f510"
  },
  "\ud83c\udd97": {
    "emoji-id": "e-B27",
    "codepoint": "U+1F197",
    "name": "SQUARED OK",
    "twitter-id": "1f197"
  },
  "\ud83d\udc95": {
    "emoji-id": "e-B0F",
    "codepoint": "U+1F495",
    "name": "TWO HEARTS",
    "twitter-id": "1f495"
  },
  "\u2714": {
    "emoji-id": "e-B49",
    "codepoint": "U+2714",
    "name": "HEAVY CHECK MARK",
    "twitter-id": "2714"
  },
  "\ud83c\udf8b": {
    "emoji-id": "e-521",
    "codepoint": "U+1F38B",
    "name": "TANABATA TREE",
    "twitter-id": "1f38b"
  },
  "\ud83d\ude89": {
    "emoji-id": "e-7EC",
    "codepoint": "U+1F689",
    "name": "STATION",
    "twitter-id": "1f689"
  },
  "\ud83d\udc0e": {
    "emoji-id": "e-7DC",
    "codepoint": "U+1F40E",
    "name": "HORSE",
    "twitter-id": "1f40e"
  },
  "\ud83c\udf0c": {
    "emoji-id": "e-03B",
    "codepoint": "U+1F30C",
    "name": "MILKY WAY",
    "twitter-id": "1f30c"
  },
  "\ud83d\ude02": {
    "emoji-id": "e-334",
    "codepoint": "U+1F602",
    "name": "FACE WITH TEARS OF JOY",
    "twitter-id": "1f602"
  },
  "\ud83d\udc85": {
    "emoji-id": "e-196",
    "codepoint": "U+1F485",
    "name": "NAIL POLISH",
    "twitter-id": "1f485"
  },
  "\ud83d\ude4e": {
    "emoji-id": "e-35A",
    "codepoint": "U+1F64E",
    "name": "PERSON WITH POUTING FACE",
    "twitter-id": "1f64e"
  },
  "\ud83d\uddff": {
    "emoji-id": "e-4C8",
    "codepoint": "U+1F5FF",
    "name": "MOYAI",
    "twitter-id": "1f5ff"
  },
  "\ud83d\udc7e": {
    "emoji-id": "e-1B1",
    "codepoint": "U+1F47E",
    "name": "ALIEN MONSTER",
    "twitter-id": "1f47e"
  },
  "\ud83c\uddf7": {
    "emoji-id": "e-565",
    "codepoint": "U+1F1F7",
    "name": "REGIONAL INDICATOR SYMBOL LETTER R",
    "twitter-id": "1f1f7"
  },
  "\ud83c\udd99": {
    "emoji-id": "e-B37",
    "codepoint": "U+1F199",
    "name": "SQUARED UP WITH EXCLAMATION MARK",
    "twitter-id": "1f199"
  },
  "\u23eb": {
    "emoji-id": "e-B03",
    "codepoint": "U+23EB",
    "name": "BLACK UP-POINTING DOUBLE TRIANGLE",
    "twitter-id": "23eb"
  },
  "\ud83d\udc6e": {
    "emoji-id": "e-1A1",
    "codepoint": "U+1F46E",
    "name": "POLICE OFFICER",
    "twitter-id": "1f46e"
  },
  "\ud83c\udf6c": {
    "emoji-id": "e-97B",
    "codepoint": "U+1F36C",
    "name": "CANDY",
    "twitter-id": "1f36c"
  },
  "\ud83c\udde7": {
    "emoji-id": "e-555",
    "codepoint": "U+1F1E7",
    "name": "REGIONAL INDICATOR SYMBOL LETTER B",
    "twitter-id": "1f1e7"
  },
  "\ud83d\udce5": {
    "emoji-id": "e-534",
    "codepoint": "U+1F4E5",
    "name": "INBOX TRAY",
    "twitter-id": "1f4e5"
  },
  "\u2764": {
    "emoji-id": "e-B0C",
    "codepoint": "U+2764",
    "name": "HEAVY BLACK HEART",
    "twitter-id": "2764"
  },
  "\ud83d\udc5e": {
    "emoji-id": "e-4CC",
    "codepoint": "U+1F45E",
    "name": "MANS SHOE",
    "twitter-id": "1f45e"
  },
  "\ud83c\udf5c": {
    "emoji-id": "e-963",
    "codepoint": "U+1F35C",
    "name": "STEAMING BOWL",
    "twitter-id": "1f35c"
  },
  "\u2652": {
    "emoji-id": "e-035",
    "codepoint": "U+2652",
    "name": "AQUARIUS",
    "twitter-id": "2652"
  },
  "\ud83d\udd50": {
    "emoji-id": "e-01E",
    "codepoint": "U+1F550",
    "name": "CLOCK FACE ONE OCLOCK",
    "twitter-id": "1f550"
  },
  "\ud83d\udcd5": {
    "emoji-id": "e-502",
    "codepoint": "U+1F4D5",
    "name": "CLOSED BOOK",
    "twitter-id": "1f4d5"
  },
  "\u2754": {
    "emoji-id": "e-B0A",
    "codepoint": "U+2754",
    "name": "WHITE QUESTION MARK ORNAMENT",
    "twitter-id": "2754"
  },
  "\ud83d\udc4e": {
    "emoji-id": "e-BA0",
    "codepoint": "U+1F44E",
    "name": "THUMBS DOWN SIGN",
    "twitter-id": "1f44e"
  },
  "\ud83c\udf4c": {
    "emoji-id": "e-050",
    "codepoint": "U+1F34C",
    "name": "BANANA",
    "twitter-id": "1f34c"
  },
  "\ud83d\udcc5": {
    "emoji-id": "e-542",
    "codepoint": "U+1F4C5",
    "name": "CALENDAR",
    "twitter-id": "1f4c5"
  },
  "\u2744": {
    "emoji-id": "e-00E",
    "codepoint": "U+2744",
    "name": "SNOWFLAKE",
    "twitter-id": "2744"
  },
  "\ud83d\udc3b": {
    "emoji-id": "e-1C1",
    "codepoint": "U+1F43B",
    "name": "BEAR FACE",
    "twitter-id": "1f43b"
  },
  "0\u20e3": {
    "emoji-id": "e-837",
    "codepoint": "U+0030 U+20E3",
    "name": "KEYCAP 0",
    "twitter-id": "30-20e3",
    "names": [
      "DIGIT ZERO",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\u2139": {
    "emoji-id": "e-B47",
    "codepoint": "U+2139",
    "name": "INFORMATION SOURCE",
    "twitter-id": "2139"
  },
  "\ud83c\uddeb\ud83c\uddf7": {
    "emoji-id": "e-4E7",
    "codepoint": "U+1F1EB U+1F1F7",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS FR",
    "twitter-id": "1f1eb-1f1f7",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER F",
      "REGIONAL INDICATOR SYMBOL LETTER R"
    ]
  },
  "\ud83c\udfbe": {
    "emoji-id": "e-7D3",
    "codepoint": "U+1F3BE",
    "name": "TENNIS RACQUET AND BALL",
    "twitter-id": "1f3be"
  },
  "\ud83d\udcbc": {
    "emoji-id": "e-53B",
    "codepoint": "U+1F4BC",
    "name": "BRIEFCASE",
    "twitter-id": "1f4bc"
  },
  "\ud83d\udd31": {
    "emoji-id": "e-4D2",
    "codepoint": "U+1F531",
    "name": "TRIDENT EMBLEM",
    "twitter-id": "1f531"
  },
  "\ud83c\udfec": {
    "emoji-id": "e-4BD",
    "codepoint": "U+1F3EC",
    "name": "DEPARTMENT STORE",
    "twitter-id": "1f3ec"
  },
  "\ud83d\ude37": {
    "emoji-id": "e-32E",
    "codepoint": "U+1F637",
    "name": "FACE WITH MEDICAL MASK",
    "twitter-id": "1f637"
  },
  "\ud83c\udf35": {
    "emoji-id": "e-048",
    "codepoint": "U+1F335",
    "name": "CACTUS",
    "twitter-id": "1f335"
  },
  "\ud83d\udc2b": {
    "emoji-id": "e-1D6",
    "codepoint": "U+1F42B",
    "name": "BACTRIAN CAMEL",
    "twitter-id": "1f42b"
  },
  "\u25aa": {
    "emoji-id": "e-B6E",
    "codepoint": "U+25AA",
    "name": "BLACK SMALL SQUARE",
    "twitter-id": "25aa"
  },
  "\ud83d\udea8": {
    "emoji-id": "e-7F9",
    "codepoint": "U+1F6A8",
    "name": "POLICE CARS REVOLVING LIGHT",
    "twitter-id": "1f6a8"
  },
  "\ud83c\ude2f": {
    "emoji-id": "e-B40",
    "codepoint": "U+1F22F",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-6307",
    "twitter-id": "1f22f"
  },
  "\ud83c\udfae": {
    "emoji-id": "e-80A",
    "codepoint": "U+1F3AE",
    "name": "VIDEO GAME",
    "twitter-id": "1f3ae"
  },
  "\ud83d\udcac": {
    "emoji-id": "e-532",
    "codepoint": "U+1F4AC",
    "name": "SPEECH BALLOON",
    "twitter-id": "1f4ac"
  },
  "\ud83d\udd21": {
    "emoji-id": "e-B7D",
    "codepoint": "U+1F521",
    "name": "INPUT SYMBOL FOR LATIN SMALL LETTERS",
    "twitter-id": "1f521"
  },
  "\ud83d\udc1b": {
    "emoji-id": "e-1CB",
    "codepoint": "U+1F41B",
    "name": "BUG",
    "twitter-id": "1f41b"
  },
  "\ud83d\udc9c": {
    "emoji-id": "e-B16",
    "codepoint": "U+1F49C",
    "name": "PURPLE HEART",
    "twitter-id": "1f49c"
  },
  "\ud83c\udd92": {
    "emoji-id": "e-B38",
    "codepoint": "U+1F192",
    "name": "SQUARED COOL",
    "twitter-id": "1f192"
  },
  "\ud83d\udd11": {
    "emoji-id": "e-B82",
    "codepoint": "U+1F511",
    "name": "KEY",
    "twitter-id": "1f511"
  },
  "\u2796": {
    "emoji-id": "e-B52",
    "codepoint": "U+2796",
    "name": "HEAVY MINUS SIGN",
    "twitter-id": "2796"
  },
  "\ud83c\udf15": {
    "emoji-id": "e-015",
    "codepoint": "U+1F315",
    "name": "FULL MOON SYMBOL",
    "twitter-id": "1f315"
  },
  "\ud83c\udf8e": {
    "emoji-id": "e-519",
    "codepoint": "U+1F38E",
    "name": "JAPANESE DOLLS",
    "twitter-id": "1f38e"
  },
  "\ud83d\udc8c": {
    "emoji-id": "e-824",
    "codepoint": "U+1F48C",
    "name": "LOVE LETTER",
    "twitter-id": "1f48c"
  },
  "\u2003": {
    "emoji-id": "e-B4C",
    "codepoint": "U+2003",
    "name": "EM SPACE",
    "twitter-id": "2003"
  },
  "\ud83c\udf05": {
    "emoji-id": "e-00A",
    "codepoint": "U+1F305",
    "name": "SUNRISE",
    "twitter-id": "1f305"
  },
  "\ud83d\udc7b": {
    "emoji-id": "e-1AE",
    "codepoint": "U+1F47B",
    "name": "GHOST",
    "twitter-id": "1f47b"
  },
  "\ud83d\udcfc": {
    "emoji-id": "e-820",
    "codepoint": "U+1F4FC",
    "name": "VIDEOCASSETTE",
    "twitter-id": "1f4fc"
  },
  "\ud83c\uddf2": {
    "emoji-id": "e-560",
    "codepoint": "U+1F1F2",
    "name": "REGIONAL INDICATOR SYMBOL LETTER M",
    "twitter-id": "1f1f2"
  },
  "\ud83c\udf75": {
    "emoji-id": "e-984",
    "codepoint": "U+1F375",
    "name": "TEACUP WITHOUT HANDLE",
    "twitter-id": "1f375"
  },
  "\ud83d\udc6b": {
    "emoji-id": "e-1A0",
    "codepoint": "U+1F46B",
    "name": "MAN AND WOMAN HOLDING HANDS",
    "twitter-id": "1f46b"
  },
  "\ud83c\udfee": {
    "emoji-id": "e-4C2",
    "codepoint": "U+1F3EE",
    "name": "IZAKAYA LANTERN",
    "twitter-id": "1f3ee"
  },
  "\ud83c\udf65": {
    "emoji-id": "e-973",
    "codepoint": "U+1F365",
    "name": "FISH CAKE WITH SWIRL DESIGN",
    "twitter-id": "1f365"
  },
  "\ud83d\udc5b": {
    "emoji-id": "e-4DC",
    "codepoint": "U+1F45B",
    "name": "PURSE",
    "twitter-id": "1f45b"
  },
  "\ud83d\udcdc": {
    "emoji-id": "e-4FD",
    "codepoint": "U+1F4DC",
    "name": "SCROLL",
    "twitter-id": "1f4dc"
  },
  "\ud83d\udd51": {
    "emoji-id": "e-01F",
    "codepoint": "U+1F551",
    "name": "CLOCK FACE TWO OCLOCK",
    "twitter-id": "1f551"
  },
  "\ud83c\udf55": {
    "emoji-id": "e-975",
    "codepoint": "U+1F355",
    "name": "SLICE OF PIZZA",
    "twitter-id": "1f355"
  },
  "\u2b06": {
    "emoji-id": "e-AF8",
    "codepoint": "U+2B06",
    "name": "UPWARDS BLACK ARROW",
    "twitter-id": "2b06"
  },
  "\ud83d\udc4b": {
    "emoji-id": "e-B9D",
    "codepoint": "U+1F44B",
    "name": "WAVING HAND SIGN",
    "twitter-id": "1f44b"
  },
  "\ud83d\udccc": {
    "emoji-id": "e-54E",
    "codepoint": "U+1F4CC",
    "name": "PUSHPIN",
    "twitter-id": "1f4cc"
  },
  "\ud83d\ude47": {
    "emoji-id": "e-353",
    "codepoint": "U+1F647",
    "name": "PERSON BOWING DEEPLY",
    "twitter-id": "1f647"
  },
  "\ud83c\udf45": {
    "emoji-id": "e-055",
    "codepoint": "U+1F345",
    "name": "TOMATO",
    "twitter-id": "1f345"
  },
  "\ud83d\udcbb": {
    "emoji-id": "e-538",
    "codepoint": "U+1F4BB",
    "name": "PERSONAL COMPUTER",
    "twitter-id": "1f4bb"
  },
  "\ud83d\udd3a": {
    "emoji-id": "e-B78",
    "codepoint": "U+1F53A",
    "name": "UP-POINTING RED TRIANGLE",
    "twitter-id": "1f53a"
  },
  "\ud83d\ude38": {
    "emoji-id": "e-349",
    "codepoint": "U+1F638",
    "name": "GRINNING CAT FACE WITH SMILING EYES",
    "twitter-id": "1f638"
  },
  "\ud83c\udf3e": {
    "emoji-id": "e-049",
    "codepoint": "U+1F33E",
    "name": "EAR OF RICE",
    "twitter-id": "1f33e"
  },
  "\ud83d\udc3c": {
    "emoji-id": "e-1DF",
    "codepoint": "U+1F43C",
    "name": "PANDA FACE",
    "twitter-id": "1f43c"
  },
  "\ud83c\udfb5": {
    "emoji-id": "e-813",
    "codepoint": "U+1F3B5",
    "name": "MUSICAL NOTE",
    "twitter-id": "1f3b5"
  },
  "\ud83d\udcab": {
    "emoji-id": "e-B5F",
    "codepoint": "U+1F4AB",
    "name": "DIZZY SYMBOL",
    "twitter-id": "1f4ab"
  },
  "\ud83d\udd2a": {
    "emoji-id": "e-4FA",
    "codepoint": "U+1F52A",
    "name": "HOCHO",
    "twitter-id": "1f52a"
  },
  "\u21a9": {
    "emoji-id": "e-B83",
    "codepoint": "U+21A9",
    "name": "LEFTWARDS ARROW WITH HOOK",
    "twitter-id": "21a9"
  },
  "\ud83d\ude28": {
    "emoji-id": "e-33B",
    "codepoint": "U+1F628",
    "name": "FEARFUL FACE",
    "twitter-id": "1f628"
  },
  "\ud83d\udc2c": {
    "emoji-id": "e-1C7",
    "codepoint": "U+1F42C",
    "name": "DOLPHIN",
    "twitter-id": "1f42c"
  },
  "\u2122": {
    "emoji-id": "e-B2A",
    "codepoint": "U+2122",
    "name": "TRADE MARK SIGN",
    "twitter-id": "2122"
  },
  "\ud83d\udea7": {
    "emoji-id": "e-7F8",
    "codepoint": "U+1F6A7",
    "name": "CONSTRUCTION SIGN",
    "twitter-id": "1f6a7"
  },
  "\ud83c\udfa5": {
    "emoji-id": "e-801",
    "codepoint": "U+1F3A5",
    "name": "MOVIE CAMERA",
    "twitter-id": "1f3a5"
  },
  "\ud83d\udc9b": {
    "emoji-id": "e-B15",
    "codepoint": "U+1F49B",
    "name": "YELLOW HEART",
    "twitter-id": "1f49b"
  },
  "\ud83d\udd1a": {
    "emoji-id": "e-01A",
    "codepoint": "U+1F51A",
    "name": "END WITH LEFTWARDS ARROW ABOVE",
    "twitter-id": "1f51a"
  },
  "\u2199": {
    "emoji-id": "e-AF3",
    "codepoint": "U+2199",
    "name": "SOUTH WEST ARROW",
    "twitter-id": "2199"
  },
  "\ud83d\ude18": {
    "emoji-id": "e-32C",
    "codepoint": "U+1F618",
    "name": "FACE THROWING A KISS",
    "twitter-id": "1f618"
  },
  "\ud83d\udc1c": {
    "emoji-id": "e-1DA",
    "codepoint": "U+1F41C",
    "name": "ANT",
    "twitter-id": "1f41c"
  },
  "\ud83d\ude97": {
    "emoji-id": "e-7E4",
    "codepoint": "U+1F697",
    "name": "AUTOMOBILE",
    "twitter-id": "1f697"
  },
  "\u2716": {
    "emoji-id": "e-B53",
    "codepoint": "U+2716",
    "name": "HEAVY MULTIPLICATION X",
    "twitter-id": "2716"
  },
  "\ud83d\udc8b": {
    "emoji-id": "e-823",
    "codepoint": "U+1F48B",
    "name": "KISS MARK",
    "twitter-id": "1f48b"
  },
  "\ud83d\udd0a": {
    "emoji-id": "e-821",
    "codepoint": "U+1F50A",
    "name": "SPEAKER WITH THREE SOUND WAVES",
    "twitter-id": "1f50a"
  },
  "\ud83d\udc0c": {
    "emoji-id": "e-1B9",
    "codepoint": "U+1F40C",
    "name": "SNAIL",
    "twitter-id": "1f40c"
  },
  "\ud83d\ude87": {
    "emoji-id": "e-7E0",
    "codepoint": "U+1F687",
    "name": "METRO",
    "twitter-id": "1f687"
  },
  "\ud83c\udf85": {
    "emoji-id": "e-513",
    "codepoint": "U+1F385",
    "name": "FATHER CHRISTMAS",
    "twitter-id": "1f385"
  },
  "\ud83c\udc04": {
    "emoji-id": "e-80B",
    "codepoint": "U+1F004",
    "name": "MAHJONG TILE RED DRAGON",
    "twitter-id": "1f004"
  },
  "\ud83d\udcfb": {
    "emoji-id": "e-81F",
    "codepoint": "U+1F4FB",
    "name": "RADIO",
    "twitter-id": "1f4fb"
  },
  "\ud83c\uddf9": {
    "emoji-id": "e-567",
    "codepoint": "U+1F1F9",
    "name": "REGIONAL INDICATOR SYMBOL LETTER T",
    "twitter-id": "1f1f9"
  },
  "\ud83d\udc7c": {
    "emoji-id": "e-1AF",
    "codepoint": "U+1F47C",
    "name": "BABY ANGEL",
    "twitter-id": "1f47c"
  },
  "\ud83c\udde8\ud83c\uddf3": {
    "emoji-id": "e-4ED",
    "codepoint": "U+1F1E8 U+1F1F3",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS CN",
    "twitter-id": "1f1e8-1f1f3",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER C",
      "REGIONAL INDICATOR SYMBOL LETTER N"
    ]
  },
  "\ud83d\udceb": {
    "emoji-id": "e-52D",
    "codepoint": "U+1F4EB",
    "name": "CLOSED MAILBOX WITH RAISED FLAG",
    "twitter-id": "1f4eb"
  },
  "\ud83c\udde9": {
    "emoji-id": "e-557",
    "codepoint": "U+1F1E9",
    "name": "REGIONAL INDICATOR SYMBOL LETTER D",
    "twitter-id": "1f1e9"
  },
  "\u2668": {
    "emoji-id": "e-7FA",
    "codepoint": "U+2668",
    "name": "HOT SPRINGS",
    "twitter-id": "2668"
  },
  "\ud83c\udf6e": {
    "emoji-id": "e-97D",
    "codepoint": "U+1F36E",
    "name": "CUSTARD",
    "twitter-id": "1f36e"
  },
  "\ud83c\udfe5": {
    "emoji-id": "e-4B4",
    "codepoint": "U+1F3E5",
    "name": "HOSPITAL",
    "twitter-id": "1f3e5"
  },
  "\ud83d\udcdb": {
    "emoji-id": "e-504",
    "codepoint": "U+1F4DB",
    "name": "NAME BADGE",
    "twitter-id": "1f4db"
  },
  "\ud83d\udd5a": {
    "emoji-id": "e-028",
    "codepoint": "U+1F55A",
    "name": "CLOCK FACE ELEVEN OCLOCK",
    "twitter-id": "1f55a"
  },
  "\ud83c\udf5e": {
    "emoji-id": "e-964",
    "codepoint": "U+1F35E",
    "name": "BREAD",
    "twitter-id": "1f35e"
  },
  "\ud83d\udc5c": {
    "emoji-id": "e-4F0",
    "codepoint": "U+1F45C",
    "name": "HANDBAG",
    "twitter-id": "1f45c"
  },
  "\ud83c\ude50": {
    "emoji-id": "e-B3D",
    "codepoint": "U+1F250",
    "name": "CIRCLED IDEOGRAPH ADVANTAGE",
    "twitter-id": "1f250"
  },
  "\ud83d\udccb": {
    "emoji-id": "e-548",
    "codepoint": "U+1F4CB",
    "name": "CLIPBOARD",
    "twitter-id": "1f4cb"
  },
  "\ud83d\ude48": {
    "emoji-id": "e-354",
    "codepoint": "U+1F648",
    "name": "SEE-NO-EVIL MONKEY",
    "twitter-id": "1f648"
  },
  "\ud83c\udf4e": {
    "emoji-id": "e-051",
    "codepoint": "U+1F34E",
    "name": "RED APPLE",
    "twitter-id": "1f34e"
  },
  "\ud83d\udc4c": {
    "emoji-id": "e-B9F",
    "codepoint": "U+1F44C",
    "name": "OK HAND SIGN",
    "twitter-id": "1f44c"
  },
  "\ud83c\udfc4": {
    "emoji-id": "e-7DA",
    "codepoint": "U+1F3C4",
    "name": "SURFER",
    "twitter-id": "1f3c4"
  },
  "\ud83d\udd3b": {
    "emoji-id": "e-B79",
    "codepoint": "U+1F53B",
    "name": "DOWN-POINTING RED TRIANGLE",
    "twitter-id": "1f53b"
  },
  "\ud83d\udcba": {
    "emoji-id": "e-537",
    "codepoint": "U+1F4BA",
    "name": "SEAT",
    "twitter-id": "1f4ba"
  },
  "\ud83c\udf3f": {
    "emoji-id": "e-04E",
    "codepoint": "U+1F33F",
    "name": "HERB",
    "twitter-id": "1f33f"
  },
  "\ud83d\ude3d": {
    "emoji-id": "e-34B",
    "codepoint": "U+1F63D",
    "name": "KISSING CAT FACE WITH CLOSED EYES",
    "twitter-id": "1f63d"
  },
  "\ud83d\ude3a": {
    "emoji-id": "e-348",
    "codepoint": "U+1F63A",
    "name": "SMILING CAT FACE WITH OPEN MOUTH",
    "twitter-id": "1f63a"
  },
  "\ud83d\udc31": {
    "emoji-id": "e-1B8",
    "codepoint": "U+1F431",
    "name": "CAT FACE",
    "twitter-id": "1f431"
  },
  "\ud83c\udfb0": {
    "emoji-id": "e-80D",
    "codepoint": "U+1F3B0",
    "name": "SLOT MACHINE",
    "twitter-id": "1f3b0"
  },
  "\ud83d\udeb6": {
    "emoji-id": "e-7F0",
    "codepoint": "U+1F6B6",
    "name": "PEDESTRIAN",
    "twitter-id": "1f6b6"
  },
  "\ud83c\ude35": {
    "emoji-id": "e-B31",
    "codepoint": "U+1F235",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-6E80",
    "twitter-id": "1f235"
  },
  "\u2196": {
    "emoji-id": "e-AF2",
    "codepoint": "U+2196",
    "name": "NORTH WEST ARROW",
    "twitter-id": "2196"
  },
  "\ud83d\udd2b": {
    "emoji-id": "e-4F5",
    "codepoint": "U+1F52B",
    "name": "PISTOL",
    "twitter-id": "1f52b"
  },
  "\ud83d\udcaa": {
    "emoji-id": "e-B5E",
    "codepoint": "U+1F4AA",
    "name": "FLEXED BICEPS",
    "twitter-id": "1f4aa"
  },
  "\ud83d\ude2d": {
    "emoji-id": "e-33A",
    "codepoint": "U+1F62D",
    "name": "LOUDLY CRYING FACE",
    "twitter-id": "1f62d"
  },
  "\ud83d\udc21": {
    "emoji-id": "e-1D9",
    "codepoint": "U+1F421",
    "name": "BLOWFISH",
    "twitter-id": "1f421"
  },
  "\ud83c\udfa0": {
    "emoji-id": "e-7FC",
    "codepoint": "U+1F3A0",
    "name": "CAROUSEL HORSE",
    "twitter-id": "1f3a0"
  },
  "\ud83d\udd1b": {
    "emoji-id": "e-019",
    "codepoint": "U+1F51B",
    "name": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE",
    "twitter-id": "1f51b"
  },
  "\ud83d\udc9a": {
    "emoji-id": "e-B14",
    "codepoint": "U+1F49A",
    "name": "GREEN HEART",
    "twitter-id": "1f49a"
  },
  "\ud83c\udf1f": {
    "emoji-id": "e-B69",
    "codepoint": "U+1F31F",
    "name": "GLOWING STAR",
    "twitter-id": "1f31f"
  },
  "\ud83d\ude1d": {
    "emoji-id": "e-32A",
    "codepoint": "U+1F61D",
    "name": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",
    "twitter-id": "1f61d"
  },
  "\ud83d\udc11": {
    "emoji-id": "e-1CF",
    "codepoint": "U+1F411",
    "name": "SHEEP",
    "twitter-id": "1f411"
  },
  "\ud83c\udf90": {
    "emoji-id": "e-51E",
    "codepoint": "U+1F390",
    "name": "WIND CHIME",
    "twitter-id": "1f390"
  },
  "\u2194": {
    "emoji-id": "e-AF6",
    "codepoint": "U+2194",
    "name": "LEFT RIGHT ARROW",
    "twitter-id": "2194"
  },
  "\ud83d\udd0b": {
    "emoji-id": "e-4FC",
    "codepoint": "U+1F50B",
    "name": "BATTERY",
    "twitter-id": "1f50b"
  },
  "\ud83d\udc8a": {
    "emoji-id": "e-50A",
    "codepoint": "U+1F48A",
    "name": "PILL",
    "twitter-id": "1f48a"
  },
  "\ud83c\udf0f": {
    "emoji-id": "e-039",
    "codepoint": "U+1F30F",
    "name": "EARTH GLOBE ASIA-AUSTRALIA",
    "twitter-id": "1f30f"
  },
  "\ud83d\ude0d": {
    "emoji-id": "e-327",
    "codepoint": "U+1F60D",
    "name": "SMILING FACE WITH HEART-SHAPED EYES",
    "twitter-id": "1f60d"
  },
  "\ud83c\udf80": {
    "emoji-id": "e-50F",
    "codepoint": "U+1F380",
    "name": "RIBBON",
    "twitter-id": "1f380"
  },
  "1\u20e3": {
    "emoji-id": "e-82E",
    "codepoint": "U+0031 U+20E3",
    "name": "KEYCAP 1",
    "twitter-id": "31-20e3",
    "names": [
      "DIGIT ONE",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\ud83d\udcfa": {
    "emoji-id": "e-81C",
    "codepoint": "U+1F4FA",
    "name": "TELEVISION",
    "twitter-id": "1f4fa"
  },
  "\ud83d\uddfc": {
    "emoji-id": "e-4C4",
    "codepoint": "U+1F5FC",
    "name": "TOKYO TOWER",
    "twitter-id": "1f5fc"
  },
  "\ud83d\udc71": {
    "emoji-id": "e-1A4",
    "codepoint": "U+1F471",
    "name": "PERSON WITH BLOND HAIR",
    "twitter-id": "1f471"
  },
  "\u23f0": {
    "emoji-id": "e-02A",
    "codepoint": "U+23F0",
    "name": "ALARM CLOCK",
    "twitter-id": "23f0"
  },
  "\ud83c\uddf4": {
    "emoji-id": "e-562",
    "codepoint": "U+1F1F4",
    "name": "REGIONAL INDICATOR SYMBOL LETTER O",
    "twitter-id": "1f1f4"
  },
  "\ud83d\udcea": {
    "emoji-id": "e-52C",
    "codepoint": "U+1F4EA",
    "name": "CLOSED MAILBOX WITH LOWERED FLAG",
    "twitter-id": "1f4ea"
  },
  "\ud83c\udf6f": {
    "emoji-id": "e-97E",
    "codepoint": "U+1F36F",
    "name": "HONEY POT",
    "twitter-id": "1f36f"
  },
  "\ud83d\udc61": {
    "emoji-id": "e-4D7",
    "codepoint": "U+1F461",
    "name": "WOMANS SANDAL",
    "twitter-id": "1f461"
  },
  "\ud83c\udfe0": {
    "emoji-id": "e-4B0",
    "codepoint": "U+1F3E0",
    "name": "HOUSE BUILDING",
    "twitter-id": "1f3e0"
  },
  "\u2b1b": {
    "emoji-id": "e-B6C",
    "codepoint": "U+2B1B",
    "name": "BLACK LARGE SQUARE",
    "twitter-id": "2b1b"
  },
  "\ud83d\udd5b": {
    "emoji-id": "e-029",
    "codepoint": "U+1F55B",
    "name": "CLOCK FACE TWELVE OCLOCK",
    "twitter-id": "1f55b"
  },
  "\ud83d\udcda": {
    "emoji-id": "e-503",
    "codepoint": "U+1F4DA",
    "name": "BOOKS",
    "twitter-id": "1f4da"
  },
  "\ud83c\udf5f": {
    "emoji-id": "e-967",
    "codepoint": "U+1F35F",
    "name": "FRENCH FRIES",
    "twitter-id": "1f35f"
  },
  "\ud83d\udc51": {
    "emoji-id": "e-4D1",
    "codepoint": "U+1F451",
    "name": "CROWN",
    "twitter-id": "1f451"
  },
  "\u2757": {
    "emoji-id": "e-B04",
    "codepoint": "U+2757",
    "name": "HEAVY EXCLAMATION MARK SYMBOL",
    "twitter-id": "2757"
  },
  "\ud83d\udcca": {
    "emoji-id": "e-54A",
    "codepoint": "U+1F4CA",
    "name": "BAR CHART",
    "twitter-id": "1f4ca"
  },
  "\u2049": {
    "emoji-id": "e-B05",
    "codepoint": "U+2049",
    "name": "EXCLAMATION QUESTION MARK",
    "twitter-id": "2049"
  },
  "\ud83c\udf4f": {
    "emoji-id": "e-05B",
    "codepoint": "U+1F34F",
    "name": "GREEN APPLE",
    "twitter-id": "1f34f"
  },
  "\u264d": {
    "emoji-id": "e-030",
    "codepoint": "U+264D",
    "name": "VIRGO",
    "twitter-id": "264d"
  },
  "\ud83c\udfc0": {
    "emoji-id": "e-7D6",
    "codepoint": "U+1F3C0",
    "name": "BASKETBALL AND HOOP",
    "twitter-id": "1f3c0"
  },
  "\u2747": {
    "emoji-id": "e-B77",
    "codepoint": "U+2747",
    "name": "SPARKLE",
    "twitter-id": "2747"
  },
  "\ud83d\udc3a": {
    "emoji-id": "e-1D0",
    "codepoint": "U+1F43A",
    "name": "WOLF FACE",
    "twitter-id": "1f43a"
  },
  "\ud83c\udfbf": {
    "emoji-id": "e-7D5",
    "codepoint": "U+1F3BF",
    "name": "SKI AND SKI BOOT",
    "twitter-id": "1f3bf"
  },
  "\ud83d\udebd": {
    "emoji-id": "e-507",
    "codepoint": "U+1F6BD",
    "name": "TOILET",
    "twitter-id": "1f6bd"
  },
  "\ud83d\udd3c": {
    "emoji-id": "e-B01",
    "codepoint": "U+1F53C",
    "name": "UP-POINTING SMALL RED TRIANGLE",
    "twitter-id": "1f53c"
  },
  "\ud83d\udcb1": {
    "emoji-id": "e-4DE",
    "codepoint": "U+1F4B1",
    "name": "CURRENCY EXCHANGE",
    "twitter-id": "1f4b1"
  },
  "\ud83c\udf30": {
    "emoji-id": "e-04C",
    "codepoint": "U+1F330",
    "name": "CHESTNUT",
    "twitter-id": "1f330"
  },
  "\u2934": {
    "emoji-id": "e-AF4",
    "codepoint": "U+2934",
    "name": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS",
    "twitter-id": "2934"
  },
  "\u25ab": {
    "emoji-id": "e-B6D",
    "codepoint": "U+25AB",
    "name": "WHITE SMALL SQUARE",
    "twitter-id": "25ab"
  },
  "\u00a9": {
    "emoji-id": "e-B29",
    "codepoint": "U+00A9",
    "name": "COPYRIGHT SIGN",
    "twitter-id": "a9"
  },
  "\u2728": {
    "emoji-id": "e-B60",
    "codepoint": "U+2728",
    "name": "SPARKLES",
    "twitter-id": "2728"
  },
  "\ud83c\udfaf": {
    "emoji-id": "e-80C",
    "codepoint": "U+1F3AF",
    "name": "DIRECT HIT",
    "twitter-id": "1f3af"
  },
  "\ud83d\udead": {
    "emoji-id": "e-B1F",
    "codepoint": "U+1F6AD",
    "name": "NO SMOKING SYMBOL",
    "twitter-id": "1f6ad"
  },
  "\ud83d\udca1": {
    "emoji-id": "e-B56",
    "codepoint": "U+1F4A1",
    "name": "ELECTRIC LIGHT BULB",
    "twitter-id": "1f4a1"
  },
  "\ud83c\udf20": {
    "emoji-id": "e-B6A",
    "codepoint": "U+1F320",
    "name": "SHOOTING STAR",
    "twitter-id": "1f320"
  },
  "\u231b": {
    "emoji-id": "e-01C",
    "codepoint": "U+231B",
    "name": "HOURGLASS",
    "twitter-id": "231b"
  },
  "\ud83d\udc1a": {
    "emoji-id": "e-1C6",
    "codepoint": "U+1F41A",
    "name": "SPIRAL SHELL",
    "twitter-id": "1f41a"
  },
  "\ud83d\udd1c": {
    "emoji-id": "e-018",
    "codepoint": "U+1F51C",
    "name": "SOON WITH RIGHTWARDS ARROW ABOVE",
    "twitter-id": "1f51c"
  },
  "\ud83c\udd93": {
    "emoji-id": "e-B21",
    "codepoint": "U+1F193",
    "name": "SQUARED FREE",
    "twitter-id": "1f193"
  },
  "\ud83d\udc91": {
    "emoji-id": "e-829",
    "codepoint": "U+1F491",
    "name": "COUPLE WITH HEART",
    "twitter-id": "1f491"
  },
  "\u2797": {
    "emoji-id": "e-B54",
    "codepoint": "U+2797",
    "name": "HEAVY DIVISION SIGN",
    "twitter-id": "2797"
  },
  "\ud83d\ude16": {
    "emoji-id": "e-33F",
    "codepoint": "U+1F616",
    "name": "CONFOUNDED FACE",
    "twitter-id": "1f616"
  },
  "\u2648": {
    "emoji-id": "e-02B",
    "codepoint": "U+2648",
    "name": "ARIES",
    "twitter-id": "2648"
  },
  "\ud83c\udf8f": {
    "emoji-id": "e-51C",
    "codepoint": "U+1F38F",
    "name": "CARP STREAMER",
    "twitter-id": "1f38f"
  },
  "\ud83d\udd0c": {
    "emoji-id": "e-4FE",
    "codepoint": "U+1F50C",
    "name": "ELECTRIC PLUG",
    "twitter-id": "1f50c"
  },
  "\u2002": {
    "emoji-id": "e-B4D",
    "codepoint": "U+2002",
    "name": "EN SPACE",
    "twitter-id": "2002"
  },
  "\ud83d\udc81": {
    "emoji-id": "e-1B4",
    "codepoint": "U+1F481",
    "name": "INFORMATION DESK PERSON",
    "twitter-id": "1f481"
  },
  "\ud83c\udf00": {
    "emoji-id": "e-005",
    "codepoint": "U+1F300",
    "name": "CYCLONE",
    "twitter-id": "1f300"
  },
  "\ud83d\ude06": {
    "emoji-id": "e-332",
    "codepoint": "U+1F606",
    "name": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
    "twitter-id": "1f606"
  },
  "\ud83d\uddfb": {
    "emoji-id": "e-4C3",
    "codepoint": "U+1F5FB",
    "name": "MOUNT FUJI",
    "twitter-id": "1f5fb"
  },
  "\ud83d\udc7a": {
    "emoji-id": "e-1AD",
    "codepoint": "U+1F47A",
    "name": "JAPANESE GOBLIN",
    "twitter-id": "1f47a"
  },
  "\u26fd": {
    "emoji-id": "e-7F5",
    "codepoint": "U+26FD",
    "name": "FUEL PUMP",
    "twitter-id": "26fd"
  },
  "\ud83c\uddf3": {
    "emoji-id": "e-561",
    "codepoint": "U+1F1F3",
    "name": "REGIONAL INDICATOR SYMBOL LETTER N",
    "twitter-id": "1f1f3"
  },
  "\ud83d\udcf1": {
    "emoji-id": "e-525",
    "codepoint": "U+1F4F1",
    "name": "MOBILE PHONE",
    "twitter-id": "1f4f1"
  },
  "\ud83c\udf70": {
    "emoji-id": "e-962",
    "codepoint": "U+1F370",
    "name": "SHORTCAKE",
    "twitter-id": "1f370"
  },
  "\ud83d\udc6a": {
    "emoji-id": "e-19F",
    "codepoint": "U+1F46A",
    "name": "FAMILY",
    "twitter-id": "1f46a"
  },
  "\ud83c\udfef": {
    "emoji-id": "e-4BE",
    "codepoint": "U+1F3EF",
    "name": "JAPANESE CASTLE",
    "twitter-id": "1f3ef"
  },
  "\ud83d\udce1": {
    "emoji-id": "e-531",
    "codepoint": "U+1F4E1",
    "name": "SATELLITE ANTENNA",
    "twitter-id": "1f4e1"
  },
  "\ud83c\udf60": {
    "emoji-id": "e-974",
    "codepoint": "U+1F360",
    "name": "ROASTED SWEET POTATO",
    "twitter-id": "1f360"
  },
  "\u2666": {
    "emoji-id": "e-B1C",
    "codepoint": "U+2666",
    "name": "BLACK DIAMOND SUIT",
    "twitter-id": "2666"
  },
  "\ud83c\uddec\ud83c\udde7": {
    "emoji-id": "e-4EA",
    "codepoint": "U+1F1EC U+1F1E7",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS GB",
    "twitter-id": "1f1ec-1f1e7",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER G",
      "REGIONAL INDICATOR SYMBOL LETTER B"
    ]
  },
  "\ud83c\udfea": {
    "emoji-id": "e-4B9",
    "codepoint": "U+1F3EA",
    "name": "CONVENIENCE STORE",
    "twitter-id": "1f3ea"
  },
  "\ud83d\udcd1": {
    "emoji-id": "e-552",
    "codepoint": "U+1F4D1",
    "name": "BOOKMARK TABS",
    "twitter-id": "1f4d1"
  },
  "\u2b50": {
    "emoji-id": "e-B68",
    "codepoint": "U+2B50",
    "name": "WHITE MEDIUM STAR",
    "twitter-id": "2b50"
  },
  "\ud83d\udc4a": {
    "emoji-id": "e-B96",
    "codepoint": "U+1F44A",
    "name": "FISTED HAND SIGN",
    "twitter-id": "1f44a"
  },
  "\ud83d\udcc1": {
    "emoji-id": "e-543",
    "codepoint": "U+1F4C1",
    "name": "FILE FOLDER",
    "twitter-id": "1f4c1"
  },
  "\ud83c\udf40": {
    "emoji-id": "e-03C",
    "codepoint": "U+1F340",
    "name": "FOUR LEAF CLOVER",
    "twitter-id": "1f340"
  },
  "\ud83d\ude46": {
    "emoji-id": "e-352",
    "codepoint": "U+1F646",
    "name": "FACE WITH OK GESTURE",
    "twitter-id": "1f646"
  },
  "\ud83d\ude3b": {
    "emoji-id": "e-34C",
    "codepoint": "U+1F63B",
    "name": "SMILING CAT FACE WITH HEART-SHAPED EYES",
    "twitter-id": "1f63b"
  },
  "\ud83c\udf39": {
    "emoji-id": "e-041",
    "codepoint": "U+1F339",
    "name": "ROSE",
    "twitter-id": "1f339"
  },
  "\ud83d\udcb8": {
    "emoji-id": "e-4E4",
    "codepoint": "U+1F4B8",
    "name": "MONEY WITH WINGS",
    "twitter-id": "1f4b8"
  },
  "\ud83d\udd3d": {
    "emoji-id": "e-B00",
    "codepoint": "U+1F53D",
    "name": "DOWN-POINTING SMALL RED TRIANGLE",
    "twitter-id": "1f53d"
  },
  "\ud83d\udebc": {
    "emoji-id": "e-B35",
    "codepoint": "U+1F6BC",
    "name": "BABY SYMBOL",
    "twitter-id": "1f6bc"
  },
  "\ud83c\ude33": {
    "emoji-id": "e-B2F",
    "codepoint": "U+1F233",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A",
    "twitter-id": "1f233"
  },
  "\ud83c\udfb2": {
    "emoji-id": "e-80F",
    "codepoint": "U+1F3B2",
    "name": "GAME DIE",
    "twitter-id": "1f3b2"
  },
  "\ud83d\udc37": {
    "emoji-id": "e-1BF",
    "codepoint": "U+1F437",
    "name": "PIG FACE",
    "twitter-id": "1f437"
  },
  "\u25b6": {
    "emoji-id": "e-AFC",
    "codepoint": "U+25B6",
    "name": "BLACK RIGHT-POINTING TRIANGLE",
    "twitter-id": "25b6"
  },
  "\u2935": {
    "emoji-id": "e-AF5",
    "codepoint": "U+2935",
    "name": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS",
    "twitter-id": "2935"
  },
  "\ud83d\ude2b": {
    "emoji-id": "e-346",
    "codepoint": "U+1F62B",
    "name": "TIRED FACE",
    "twitter-id": "1f62b"
  },
  "\ud83d\udca8": {
    "emoji-id": "e-B5D",
    "codepoint": "U+1F4A8",
    "name": "DASH SYMBOL",
    "twitter-id": "1f4a8"
  },
  "\ud83d\udeac": {
    "emoji-id": "e-B1E",
    "codepoint": "U+1F6AC",
    "name": "SMOKING SYMBOL",
    "twitter-id": "1f6ac"
  },
  "\ud83c\udfa2": {
    "emoji-id": "e-7FE",
    "codepoint": "U+1F3A2",
    "name": "ROLLER COASTER",
    "twitter-id": "1f3a2"
  },
  "\ud83d\udc27": {
    "emoji-id": "e-1BC",
    "codepoint": "U+1F427",
    "name": "PENGUIN",
    "twitter-id": "1f427"
  },
  "\u26be": {
    "emoji-id": "e-7D1",
    "codepoint": "U+26BE",
    "name": "BASEBALL",
    "twitter-id": "26be"
  },
  "\ud83c\udf19": {
    "emoji-id": "e-014",
    "codepoint": "U+1F319",
    "name": "CRESCENT MOON",
    "twitter-id": "1f319"
  },
  "\ud83d\udc98": {
    "emoji-id": "e-B12",
    "codepoint": "U+1F498",
    "name": "HEART WITH ARROW",
    "twitter-id": "1f498"
  },
  "\ud83d\udd1d": {
    "emoji-id": "e-B42",
    "codepoint": "U+1F51D",
    "name": "TOP WITH UPWARDS ARROW ABOVE",
    "twitter-id": "1f51d"
  },
  "\ud83c\udf92": {
    "emoji-id": "e-51B",
    "codepoint": "U+1F392",
    "name": "SCHOOL SATCHEL",
    "twitter-id": "1f392"
  },
  "\ud83d\udc17": {
    "emoji-id": "e-1D5",
    "codepoint": "U+1F417",
    "name": "BOAR",
    "twitter-id": "1f417"
  },
  "\ud83d\ude0b": {
    "emoji-id": "e-32B",
    "codepoint": "U+1F60B",
    "name": "FACE SAVOURING DELICIOUS FOOD",
    "twitter-id": "1f60b"
  },
  "\ud83c\udf09": {
    "emoji-id": "e-010",
    "codepoint": "U+1F309",
    "name": "BRIDGE AT NIGHT",
    "twitter-id": "1f309"
  },
  "\ud83d\udc88": {
    "emoji-id": "e-199",
    "codepoint": "U+1F488",
    "name": "BARBER POLE",
    "twitter-id": "1f488"
  },
  "\ud83c\udd8e": {
    "emoji-id": "e-50D",
    "codepoint": "U+1F18E",
    "name": "NEGATIVE SQUARED AB",
    "twitter-id": "1f18e"
  },
  "\ud83d\udd0d": {
    "emoji-id": "e-B85",
    "codepoint": "U+1F50D",
    "name": "LEFT-POINTING MAGNIFYING GLASS",
    "twitter-id": "1f50d"
  },
  "\ud83d\ude8c": {
    "emoji-id": "e-7E6",
    "codepoint": "U+1F68C",
    "name": "BUS",
    "twitter-id": "1f68c"
  },
  "\ud83c\udf82": {
    "emoji-id": "e-511",
    "codepoint": "U+1F382",
    "name": "BIRTHDAY CAKE",
    "twitter-id": "1f382"
  },
  "\ud83c\uddef\ud83c\uddf5": {
    "emoji-id": "e-4E5",
    "codepoint": "U+1F1EF U+1F1F5",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS JP",
    "twitter-id": "1f1ef-1f1f5",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER J",
      "REGIONAL INDICATOR SYMBOL LETTER P"
    ]
  },
  "\u267b": {
    "emoji-id": "e-B2C",
    "codepoint": "U+267B",
    "name": "BLACK UNIVERSAL RECYCLING SYMBOL",
    "twitter-id": "267b"
  },
  "\ud83c\udf79": {
    "emoji-id": "e-988",
    "codepoint": "U+1F379",
    "name": "TROPICAL DRINK",
    "twitter-id": "1f379"
  },
  "\ud83c\uddfe": {
    "emoji-id": "e-56C",
    "codepoint": "U+1F1FE",
    "name": "REGIONAL INDICATOR SYMBOL LETTER Y",
    "twitter-id": "1f1fe"
  },
  "\ud83c\uddea\ud83c\uddf8": {
    "emoji-id": "e-4EB",
    "codepoint": "U+1F1EA U+1F1F8",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS ES",
    "twitter-id": "1f1ea-1f1f8",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER E",
      "REGIONAL INDICATOR SYMBOL LETTER S"
    ]
  },
  "\ud83d\udc77": {
    "emoji-id": "e-1AA",
    "codepoint": "U+1F477",
    "name": "CONSTRUCTION WORKER",
    "twitter-id": "1f477"
  },
  "\ud83c\udf69": {
    "emoji-id": "e-978",
    "codepoint": "U+1F369",
    "name": "DOUGHNUT",
    "twitter-id": "1f369"
  },
  "\ud83d\udce8": {
    "emoji-id": "e-52A",
    "codepoint": "U+1F4E8",
    "name": "INCOMING ENVELOPE",
    "twitter-id": "1f4e8"
  },
  "\ud83c\uddee": {
    "emoji-id": "e-55C",
    "codepoint": "U+1F1EE",
    "name": "REGIONAL INDICATOR SYMBOL LETTER I",
    "twitter-id": "1f1ee"
  },
  "\ud83c\udfe2": {
    "emoji-id": "e-4B2",
    "codepoint": "U+1F3E2",
    "name": "OFFICE BUILDING",
    "twitter-id": "1f3e2"
  },
  "\ud83d\udc67": {
    "emoji-id": "e-19C",
    "codepoint": "U+1F467",
    "name": "GIRL",
    "twitter-id": "1f467"
  },
  "\ud83c\udf59": {
    "emoji-id": "e-961",
    "codepoint": "U+1F359",
    "name": "RICE BALL",
    "twitter-id": "1f359"
  },
  "\ud83d\udcd8": {
    "emoji-id": "e-500",
    "codepoint": "U+1F4D8",
    "name": "BLUE BOOK",
    "twitter-id": "1f4d8"
  },
  "\ud83d\udc57": {
    "emoji-id": "e-4D5",
    "codepoint": "U+1F457",
    "name": "DRESS",
    "twitter-id": "1f457"
  },
  "\u25fe": {
    "emoji-id": "e-B70",
    "codepoint": "U+25FE",
    "name": "BLACK MEDIUM SMALL SQUARE",
    "twitter-id": "25fe"
  },
  "\ud83d\ude4b": {
    "emoji-id": "e-357",
    "codepoint": "U+1F64B",
    "name": "HAPPY PERSON RAISING ONE HAND",
    "twitter-id": "1f64b"
  },
  "\u2653": {
    "emoji-id": "e-036",
    "codepoint": "U+2653",
    "name": "PISCES",
    "twitter-id": "2653"
  },
  "\ud83c\udf49": {
    "emoji-id": "e-054",
    "codepoint": "U+1F349",
    "name": "WATERMELON",
    "twitter-id": "1f349"
  },
  "\ud83d\udcc8": {
    "emoji-id": "e-54B",
    "codepoint": "U+1F4C8",
    "name": "CHART WITH UPWARDS TREND",
    "twitter-id": "1f4c8"
  },
  "\ud83c\udfc2": {
    "emoji-id": "e-7D8",
    "codepoint": "U+1F3C2",
    "name": "SNOWBOARDER",
    "twitter-id": "1f3c2"
  },
  "\ud83d\udc47": {
    "emoji-id": "e-B9A",
    "codepoint": "U+1F447",
    "name": "WHITE DOWN POINTING BACKHAND INDEX",
    "twitter-id": "1f447"
  },
  "\ud83d\udebb": {
    "emoji-id": "e-506",
    "codepoint": "U+1F6BB",
    "name": "RESTROOM",
    "twitter-id": "1f6bb"
  },
  "\ud83c\udfb9": {
    "emoji-id": "e-817",
    "codepoint": "U+1F3B9",
    "name": "MUSICAL KEYBOARD",
    "twitter-id": "1f3b9"
  },
  "\ud83d\udc38": {
    "emoji-id": "e-1D7",
    "codepoint": "U+1F438",
    "name": "FROG FACE",
    "twitter-id": "1f438"
  },
  "\ud83d\ude3c": {
    "emoji-id": "e-34F",
    "codepoint": "U+1F63C",
    "name": "CAT FACE WITH WRY SMILE",
    "twitter-id": "1f63c"
  },
  "\u3030": {
    "emoji-id": "e-B07",
    "codepoint": "U+3030",
    "name": "WAVY DASH",
    "twitter-id": "3030"
  },
  "\ud83d\udd36": {
    "emoji-id": "e-B73",
    "codepoint": "U+1F536",
    "name": "LARGE ORANGE DIAMOND",
    "twitter-id": "1f536"
  },
  "\ud83c\ude34": {
    "emoji-id": "e-B30",
    "codepoint": "U+1F234",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-5408",
    "twitter-id": "1f234"
  },
  "\ud83d\udeab": {
    "emoji-id": "e-B48",
    "codepoint": "U+1F6AB",
    "name": "NO ENTRY SIGN",
    "twitter-id": "1f6ab"
  },
  "\ud83c\udfa9": {
    "emoji-id": "e-805",
    "codepoint": "U+1F3A9",
    "name": "TOP HAT",
    "twitter-id": "1f3a9"
  },
  "\ud83d\udc28": {
    "emoji-id": "e-1CD",
    "codepoint": "U+1F428",
    "name": "KOALA",
    "twitter-id": "1f428"
  },
  "\u27a1": {
    "emoji-id": "e-AFA",
    "codepoint": "U+27A1",
    "name": "BLACK RIGHTWARDS ARROW",
    "twitter-id": "27a1"
  },
  "\ud83d\udca7": {
    "emoji-id": "e-B5C",
    "codepoint": "U+1F4A7",
    "name": "DROPLET",
    "twitter-id": "1f4a7"
  },
  "\ud83d\udd26": {
    "emoji-id": "e-4FB",
    "codepoint": "U+1F526",
    "name": "ELECTRIC TORCH",
    "twitter-id": "1f526"
  },
  "\ud83c\udde9\ud83c\uddea": {
    "emoji-id": "e-4E8",
    "codepoint": "U+1F1E9 U+1F1EA",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS DE",
    "twitter-id": "1f1e9-1f1ea",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER D",
      "REGIONAL INDICATOR SYMBOL LETTER E"
    ]
  },
  "\u264b": {
    "emoji-id": "e-02E",
    "codepoint": "U+264B",
    "name": "CANCER",
    "twitter-id": "264b"
  },
  "\ud83d\udc18": {
    "emoji-id": "e-1CC",
    "codepoint": "U+1F418",
    "name": "ELEPHANT",
    "twitter-id": "1f418"
  },
  "\ud83d\ude1c": {
    "emoji-id": "e-329",
    "codepoint": "U+1F61C",
    "name": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE",
    "twitter-id": "1f61c"
  },
  "\ud83d\udc97": {
    "emoji-id": "e-B11",
    "codepoint": "U+1F497",
    "name": "GROWING HEART",
    "twitter-id": "1f497"
  },
  "\ud83d\udd16": {
    "emoji-id": "e-B8F",
    "codepoint": "U+1F516",
    "name": "BOOKMARK",
    "twitter-id": "1f516"
  },
  "\ud83c\udd95": {
    "emoji-id": "e-B36",
    "codepoint": "U+1F195",
    "name": "SQUARED NEW",
    "twitter-id": "1f195"
  },
  "\u270a": {
    "emoji-id": "e-B93",
    "codepoint": "U+270A",
    "name": "RAISED FIST",
    "twitter-id": "270a"
  },
  "\ud83c\udf89": {
    "emoji-id": "e-517",
    "codepoint": "U+1F389",
    "name": "PARTY POPPER",
    "twitter-id": "1f389"
  },
  "\ud83d\ude0c": {
    "emoji-id": "e-33E",
    "codepoint": "U+1F60C",
    "name": "RELIEVED FACE",
    "twitter-id": "1f60c"
  },
  "3\u20e3": {
    "emoji-id": "e-830",
    "codepoint": "U+0033 U+20E3",
    "name": "KEYCAP 3",
    "twitter-id": "33-20e3",
    "names": [
      "DIGIT THREE",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\ud83c\udf02": {
    "emoji-id": "e-007",
    "codepoint": "U+1F302",
    "name": "CLOSED UMBRELLA",
    "twitter-id": "1f302"
  },
  "\ud83d\udc87": {
    "emoji-id": "e-198",
    "codepoint": "U+1F487",
    "name": "HAIRCUT",
    "twitter-id": "1f487"
  },
  "\ud83d\udc78": {
    "emoji-id": "e-1AB",
    "codepoint": "U+1F478",
    "name": "PRINCESS",
    "twitter-id": "1f478"
  },
  "\ud83c\udd7e": {
    "emoji-id": "e-50E",
    "codepoint": "U+1F17E",
    "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER O",
    "twitter-id": "1f17e"
  },
  "\ud83d\uddfd": {
    "emoji-id": "e-4C6",
    "codepoint": "U+1F5FD",
    "name": "STATUE OF LIBERTY",
    "twitter-id": "1f5fd"
  },
  "\ud83c\udf72": {
    "emoji-id": "e-970",
    "codepoint": "U+1F372",
    "name": "POT OF FOOD",
    "twitter-id": "1f372"
  },
  "\ud83d\udcf7": {
    "emoji-id": "e-4EF",
    "codepoint": "U+1F4F7",
    "name": "CAMERA",
    "twitter-id": "1f4f7"
  },
  "\ud83c\uddf5": {
    "emoji-id": "e-563",
    "codepoint": "U+1F1F5",
    "name": "REGIONAL INDICATOR SYMBOL LETTER P",
    "twitter-id": "1f1f5"
  },
  "\ud83c\udfe9": {
    "emoji-id": "e-4B8",
    "codepoint": "U+1F3E9",
    "name": "LOVE HOTEL",
    "twitter-id": "1f3e9"
  },
  "\ud83d\udc68": {
    "emoji-id": "e-19D",
    "codepoint": "U+1F468",
    "name": "MAN",
    "twitter-id": "1f468"
  },
  "\ud83c\udf62": {
    "emoji-id": "e-96D",
    "codepoint": "U+1F362",
    "name": "ODEN",
    "twitter-id": "1f362"
  },
  "\ud83d\udce7": {
    "emoji-id": "e-B92",
    "codepoint": "U+1F4E7",
    "name": "E-MAIL SYMBOL",
    "twitter-id": "1f4e7"
  },
  "\ud83c\udfeb": {
    "emoji-id": "e-4BA",
    "codepoint": "U+1F3EB",
    "name": "SCHOOL",
    "twitter-id": "1f3eb"
  },
  "\ud83d\udc58": {
    "emoji-id": "e-4D9",
    "codepoint": "U+1F458",
    "name": "KIMONO",
    "twitter-id": "1f458"
  },
  "\u261d": {
    "emoji-id": "e-B98",
    "codepoint": "U+261D",
    "name": "WHITE UP POINTING INDEX",
    "twitter-id": "261d"
  },
  "\ud83c\udf52": {
    "emoji-id": "e-04F",
    "codepoint": "U+1F352",
    "name": "CHERRIES",
    "twitter-id": "1f352"
  },
  "\ud83d\udcd7": {
    "emoji-id": "e-4FF",
    "codepoint": "U+1F4D7",
    "name": "GREEN BOOK",
    "twitter-id": "1f4d7"
  },
  "\ud83d\udd56": {
    "emoji-id": "e-024",
    "codepoint": "U+1F556",
    "name": "CLOCK FACE SEVEN OCLOCK",
    "twitter-id": "1f556"
  },
  "\ud83d\udc48": {
    "emoji-id": "e-B9B",
    "codepoint": "U+1F448",
    "name": "WHITE LEFT POINTING BACKHAND INDEX",
    "twitter-id": "1f448"
  },
  "\ud83c\udccf": {
    "emoji-id": "e-812",
    "codepoint": "U+1F0CF",
    "name": "PLAYING CARD BLACK JOKER",
    "twitter-id": "1f0cf"
  },
  "\ud83d\ude4c": {
    "emoji-id": "e-358",
    "codepoint": "U+1F64C",
    "name": "PERSON RAISING BOTH HANDS IN CELEBRATION",
    "twitter-id": "1f64c"
  },
  "\ud83c\udf42": {
    "emoji-id": "e-042",
    "codepoint": "U+1F342",
    "name": "FALLEN LEAF",
    "twitter-id": "1f342"
  },
  "\ud83d\udcc7": {
    "emoji-id": "e-54D",
    "codepoint": "U+1F4C7",
    "name": "CARD INDEX",
    "twitter-id": "1f4c7"
  },
  "\ud83d\udeba": {
    "emoji-id": "e-B34",
    "codepoint": "U+1F6BA",
    "name": "WOMENS SYMBOL",
    "twitter-id": "1f6ba"
  },
  "\ud83c\ude39": {
    "emoji-id": "e-B3E",
    "codepoint": "U+1F239",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-5272",
    "twitter-id": "1f239"
  },
  "\ud83d\udc3d": {
    "emoji-id": "e-1E0",
    "codepoint": "U+1F43D",
    "name": "PIG NOSE",
    "twitter-id": "1f43d"
  },
  "\ud83d\ude31": {
    "emoji-id": "e-341",
    "codepoint": "U+1F631",
    "name": "FACE SCREAMING IN FEAR",
    "twitter-id": "1f631"
  },
  "\ud83d\udd37": {
    "emoji-id": "e-B74",
    "codepoint": "U+1F537",
    "name": "LARGE BLUE DIAMOND",
    "twitter-id": "1f537"
  },
  "4\u20e3": {
    "emoji-id": "e-831",
    "codepoint": "U+0034 U+20E3",
    "name": "KEYCAP 4",
    "twitter-id": "34-20e3",
    "names": [
      "DIGIT FOUR",
      "COMBINING ENCLOSING KEYCAP"
    ]
  },
  "\ud83c\udfb4": {
    "emoji-id": "e-811",
    "codepoint": "U+1F3B4",
    "name": "FLOWER PLAYING CARDS",
    "twitter-id": "1f3b4"
  },
  "\ud83d\udeaa": {
    "emoji-id": "e-4F3",
    "codepoint": "U+1F6AA",
    "name": "DOOR",
    "twitter-id": "1f6aa"
  },
  "\u00ae": {
    "emoji-id": "e-B2D",
    "codepoint": "U+00AE",
    "name": "REGISTERED SIGN",
    "twitter-id": "ae"
  },
  "\ud83d\udc2d": {
    "emoji-id": "e-1C2",
    "codepoint": "U+1F42D",
    "name": "MOUSE FACE",
    "twitter-id": "1f42d"
  },
  "\ud83d\ude21": {
    "emoji-id": "e-33D",
    "codepoint": "U+1F621",
    "name": "POUTING FACE",
    "twitter-id": "1f621"
  },
  "\ud83c\udd94": {
    "emoji-id": "e-B81",
    "codepoint": "U+1F194",
    "name": "SQUARED ID",
    "twitter-id": "1f194"
  },
  "\ud83d\udd27": {
    "emoji-id": "e-4C9",
    "codepoint": "U+1F527",
    "name": "WRENCH",
    "twitter-id": "1f527"
  },
  "\ud83d\udca6": {
    "emoji-id": "e-B5B",
    "codepoint": "U+1F4A6",
    "name": "SPLASHING SWEAT SYMBOL",
    "twitter-id": "1f4a6"
  },
  "\ud83c\udfa4": {
    "emoji-id": "e-800",
    "codepoint": "U+1F3A4",
    "name": "MICROPHONE",
    "twitter-id": "1f3a4"
  },
  "\ud83d\ude9a": {
    "emoji-id": "e-7F1",
    "codepoint": "U+1F69A",
    "name": "DELIVERY TRUCK",
    "twitter-id": "1f69a"
  },
  "\ud83d\udc1d": {
    "emoji-id": "e-1E1",
    "codepoint": "U+1F41D",
    "name": "HONEYBEE",
    "twitter-id": "1f41d"
  },
  "\ud83c\udf13": {
    "emoji-id": "e-013",
    "codepoint": "U+1F313",
    "name": "FIRST QUARTER MOON SYMBOL",
    "twitter-id": "1f313"
  },
  "\u2611": {
    "emoji-id": "e-B8B",
    "codepoint": "U+2611",
    "name": "BALLOT BOX WITH CHECK",
    "twitter-id": "2611"
  },
  "\ud83d\udd17": {
    "emoji-id": "e-B4B",
    "codepoint": "U+1F517",
    "name": "LINK SYMBOL",
    "twitter-id": "1f517"
  },
  "\ud83d\udc96": {
    "emoji-id": "e-B10",
    "codepoint": "U+1F496",
    "name": "SPARKLING HEART",
    "twitter-id": "1f496"
  },
  "\u270b": {
    "emoji-id": "e-B95",
    "codepoint": "U+270B",
    "name": "RAISED HAND",
    "twitter-id": "270b"
  },
  "\ud83d\udc0d": {
    "emoji-id": "e-1D3",
    "codepoint": "U+1F40D",
    "name": "SNAKE",
    "twitter-id": "1f40d"
  },
  "\ud83c\udf03": {
    "emoji-id": "e-008",
    "codepoint": "U+1F303",
    "name": "NIGHT WITH STARS",
    "twitter-id": "1f303"
  },
  "\u2601": {
    "emoji-id": "e-001",
    "codepoint": "U+2601",
    "name": "CLOUD",
    "twitter-id": "2601"
  },
  "\ud83d\udc86": {
    "emoji-id": "e-197",
    "codepoint": "U+1F486",
    "name": "FACE MASSAGE",
    "twitter-id": "1f486"
  },
  "\u2005": {
    "emoji-id": "e-B4E",
    "codepoint": "U+2005",
    "name": "FOUR-PER-EM SPACE",
    "twitter-id": "2005"
  },
  "\ud83c\udf84": {
    "emoji-id": "e-512",
    "codepoint": "U+1F384",
    "name": "CHRISTMAS TREE",
    "twitter-id": "1f384"
  },
  "\u26fa": {
    "emoji-id": "e-7FB",
    "codepoint": "U+26FA",
    "name": "TENT",
    "twitter-id": "26fa"
  },
  "\ud83c\udd7f": {
    "emoji-id": "e-7F6",
    "codepoint": "U+1F17F",
    "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER P",
    "twitter-id": "1f17f"
  },
  "\ud83c\uddee\ud83c\uddf9": {
    "emoji-id": "e-4E9",
    "codepoint": "U+1F1EE U+1F1F9",
    "name": "REGIONAL INDICATOR SYMBOL LETTERS IT",
    "twitter-id": "1f1ee-1f1f9",
    "names": [
      "REGIONAL INDICATOR SYMBOL LETTER I",
      "REGIONAL INDICATOR SYMBOL LETTER T"
    ]
  },
  "\ud83d\udc7d": {
    "emoji-id": "e-1B0",
    "codepoint": "U+1F47D",
    "name": "EXTRATERRESTRIAL ALIEN",
    "twitter-id": "1f47d"
  },
  "\ud83c\udf73": {
    "emoji-id": "e-965",
    "codepoint": "U+1F373",
    "name": "COOKING",
    "twitter-id": "1f373"
  },
  "\ud83c\uddf0": {
    "emoji-id": "e-55E",
    "codepoint": "U+1F1F0",
    "name": "REGIONAL INDICATOR SYMBOL LETTER K",
    "twitter-id": "1f1f0"
  },
  "\ud83d\udcf6": {
    "emoji-id": "e-838",
    "codepoint": "U+1F4F6",
    "name": "ANTENNA WITH BARS",
    "twitter-id": "1f4f6"
  },
  "\u26ea": {
    "emoji-id": "e-4BB",
    "codepoint": "U+26EA",
    "name": "CHURCH",
    "twitter-id": "26ea"
  },
  "\ud83c\udf63": {
    "emoji-id": "e-96E",
    "codepoint": "U+1F363",
    "name": "SUSHI",
    "twitter-id": "1f363"
  },
  "\ud83d\udce6": {
    "emoji-id": "e-535",
    "codepoint": "U+1F4E6",
    "name": "PACKAGE",
    "twitter-id": "1f4e6"
  },
  "\u26ab": {
    "emoji-id": "e-B66",
    "codepoint": "U+26AB",
    "name": "MEDIUM BLACK CIRCLE",
    "twitter-id": "26ab"
  },
  "\ud83d\udc5d": {
    "emoji-id": "e-4F1",
    "codepoint": "U+1F45D",
    "name": "POUCH",
    "twitter-id": "1f45d"
  },
  "\ud83c\udf53": {
    "emoji-id": "e-053",
    "codepoint": "U+1F353",
    "name": "STRAWBERRY",
    "twitter-id": "1f353"
  },
  "\u2b07": {
    "emoji-id": "e-AF9",
    "codepoint": "U+2B07",
    "name": "DOWNWARDS BLACK ARROW",
    "twitter-id": "2b07"
  },
  "\u2651": {
    "emoji-id": "e-034",
    "codepoint": "U+2651",
    "name": "CAPRICORN",
    "twitter-id": "2651"
  },
  "\ud83d\udd57": {
    "emoji-id": "e-025",
    "codepoint": "U+1F557",
    "name": "CLOCK FACE EIGHT OCLOCK",
    "twitter-id": "1f557"
  },
  "\ud83d\udcd6": {
    "emoji-id": "e-546",
    "codepoint": "U+1F4D6",
    "name": "OPEN BOOK",
    "twitter-id": "1f4d6"
  },
  "\ud83d\udc4d": {
    "emoji-id": "e-B97",
    "codepoint": "U+1F44D",
    "name": "THUMBS UP SIGN",
    "twitter-id": "1f44d"
  },
  "\ud83c\udf43": {
    "emoji-id": "e-043",
    "codepoint": "U+1F343",
    "name": "LEAF FLUTTERING IN WIND",
    "twitter-id": "1f343"
  },
  "\ud83d\udcc6": {
    "emoji-id": "e-549",
    "codepoint": "U+1F4C6",
    "name": "TEAR-OFF CALENDAR",
    "twitter-id": "1f4c6"
  },
  "\ud83d\udd2e": {
    "emoji-id": "e-4F7",
    "codepoint": "U+1F52E",
    "name": "CRYSTAL BALL",
    "twitter-id": "1f52e"
  },
  "\u263a": {
    "emoji-id": "e-336",
    "codepoint": "U+263A",
    "name": "WHITE SMILING FACE",
    "twitter-id": "263a"
  },
  "\ud83d\udd38": {
    "emoji-id": "e-B75",
    "codepoint": "U+1F538",
    "name": "SMALL ORANGE DIAMOND",
    "twitter-id": "1f538"
  },
  "\ud83d\udcbd": {
    "emoji-id": "e-53C",
    "codepoint": "U+1F4BD",
    "name": "MINIDISC",
    "twitter-id": "1f4bd"
  },
  "\ud83c\udfb3": {
    "emoji-id": "e-810",
    "codepoint": "U+1F3B3",
    "name": "BOWLING",
    "twitter-id": "1f3b3"
  },
  "\ud83c\ude32": {
    "emoji-id": "e-B2E",
    "codepoint": "U+1F232",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-7981",
    "twitter-id": "1f232"
  },
  "\ud83d\udc36": {
    "emoji-id": "e-1B7",
    "codepoint": "U+1F436",
    "name": "DOG FACE",
    "twitter-id": "1f436"
  },
  "\ud83c\udf34": {
    "emoji-id": "e-047",
    "codepoint": "U+1F334",
    "name": "PALM TREE",
    "twitter-id": "1f334"
  },
  "\ud83d\ude2a": {
    "emoji-id": "e-342",
    "codepoint": "U+1F62A",
    "name": "SLEEPY FACE",
    "twitter-id": "1f62a"
  },
  "\ud83d\udd28": {
    "emoji-id": "e-4CA",
    "codepoint": "U+1F528",
    "name": "HAMMER",
    "twitter-id": "1f528"
  },
  "\ud83c\udfa3": {
    "emoji-id": "e-7FF",
    "codepoint": "U+1F3A3",
    "name": "FISHING POLE AND FISH",
    "twitter-id": "1f3a3"
  },
  "\u26a1": {
    "emoji-id": "e-004",
    "codepoint": "U+26A1",
    "name": "HIGH VOLTAGE SIGN",
    "twitter-id": "26a1"
  },
  "\ud83d\udc26": {
    "emoji-id": "e-1C8",
    "codepoint": "U+1F426",
    "name": "BIRD",
    "twitter-id": "1f426"
  },
  "\ud83d\ude1a": {
    "emoji-id": "e-32D",
    "codepoint": "U+1F61A",
    "name": "KISSING FACE WITH CLOSED EYES",
    "twitter-id": "1f61a"
  },
  "\u3299": {
    "emoji-id": "e-B2B",
    "codepoint": "U+3299",
    "name": "CIRCLED IDEOGRAPH SECRET",
    "twitter-id": "3299"
  },
  "\ud83d\udd18": {
    "emoji-id": "e-B8C",
    "codepoint": "U+1F518",
    "name": "RADIO BUTTON",
    "twitter-id": "1f518"
  },
  "\ud83d\udc9d": {
    "emoji-id": "e-B17",
    "codepoint": "U+1F49D",
    "name": "HEART WITH RIBBON",
    "twitter-id": "1f49d"
  },
  "\ud83d\ude4a": {
    "emoji-id": "e-355",
    "codepoint": "U+1F64A",
    "name": "SPEAK-NO-EVIL MONKEY",
    "twitter-id": "1f64a"
  },
  "\ud83c\udf93": {
    "emoji-id": "e-51A",
    "codepoint": "U+1F393",
    "name": "GRADUATION CAP",
    "twitter-id": "1f393"
  },
  "\ud83d\ude91": {
    "emoji-id": "e-7F3",
    "codepoint": "U+1F691",
    "name": "AMBULANCE",
    "twitter-id": "1f691"
  },
  "\u25fc": {
    "emoji-id": "e-B72",
    "codepoint": "U+25FC",
    "name": "BLACK MEDIUM SQUARE",
    "twitter-id": "25fc"
  },
  "\ud83c\udf14": {
    "emoji-id": "e-012",
    "codepoint": "U+1F314",
    "name": "WAXING GIBBOUS MOON SYMBOL",
    "twitter-id": "1f314"
  },
  "\ud83d\ude0a": {
    "emoji-id": "e-335",
    "codepoint": "U+1F60A",
    "name": "SMILING FACE WITH SMILING EYES",
    "twitter-id": "1f60a"
  },
  "\ud83d\udc8d": {
    "emoji-id": "e-825",
    "codepoint": "U+1F48D",
    "name": "RING",
    "twitter-id": "1f48d"
  },
  "\u270c": {
    "emoji-id": "e-B94",
    "codepoint": "U+270C",
    "name": "VICTORY HAND",
    "twitter-id": "270c"
  },
  "\ud83c\udf83": {
    "emoji-id": "e-51F",
    "codepoint": "U+1F383",
    "name": "JACK-O-LANTERN",
    "twitter-id": "1f383"
  },
  "\ud83c\ude02": {
    "emoji-id": "e-B3F",
    "codepoint": "U+1F202",
    "name": "SQUARED KATAKANA SA",
    "twitter-id": "1f202"
  },
  "\ud83c\udf04": {
    "emoji-id": "e-009",
    "codepoint": "U+1F304",
    "name": "SUNRISE OVER MOUNTAINS",
    "twitter-id": "1f304"
  },
  "\ud83c\udff0": {
    "emoji-id": "e-4BF",
    "codepoint": "U+1F3F0",
    "name": "EUROPEAN CASTLE",
    "twitter-id": "1f3f0"
  },
  "\ud83c\uddff": {
    "emoji-id": "e-56D",
    "codepoint": "U+1F1FF",
    "name": "REGIONAL INDICATOR SYMBOL LETTER Z",
    "twitter-id": "1f1ff"
  },
  "\u23f3": {
    "emoji-id": "e-01B",
    "codepoint": "U+23F3",
    "name": "HOURGLASS WITH FLOWING SAND",
    "twitter-id": "23f3"
  },
  "\ud83c\udd70": {
    "emoji-id": "e-50B",
    "codepoint": "U+1F170",
    "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER A",
    "twitter-id": "1f170"
  },
  "\ud83d\udc76": {
    "emoji-id": "e-1A9",
    "codepoint": "U+1F476",
    "name": "BABY",
    "twitter-id": "1f476"
  },
  "\ud83c\udf74": {
    "emoji-id": "e-980",
    "codepoint": "U+1F374",
    "name": "FORK AND KNIFE",
    "twitter-id": "1f374"
  },
  "\ud83c\uddef": {
    "emoji-id": "e-55D",
    "codepoint": "U+1F1EF",
    "name": "REGIONAL INDICATOR SYMBOL LETTER J",
    "twitter-id": "1f1ef"
  },
  "\ud83d\ude93": {
    "emoji-id": "e-7F4",
    "codepoint": "U+1F693",
    "name": "POLICE CAR",
    "twitter-id": "1f693"
  },
  "\ud83c\udfe3": {
    "emoji-id": "e-4B3",
    "codepoint": "U+1F3E3",
    "name": "JAPANESE POST OFFICE",
    "twitter-id": "1f3e3"
  },
  "\ud83d\udc66": {
    "emoji-id": "e-19B",
    "codepoint": "U+1F466",
    "name": "BOY",
    "twitter-id": "1f466"
  },
  "\ud83c\udf64": {
    "emoji-id": "e-97F",
    "codepoint": "U+1F364",
    "name": "FRIED SHRIMP",
    "twitter-id": "1f364"
  },
  "\ud83d\udd58": {
    "emoji-id": "e-026",
    "codepoint": "U+1F558",
    "name": "CLOCK FACE NINE OCLOCK",
    "twitter-id": "1f558"
  },
  "\ud83d\udcdd": {
    "emoji-id": "e-527",
    "codepoint": "U+1F4DD",
    "name": "MEMO",
    "twitter-id": "1f4dd"
  },
  "\ud83d\udc56": {
    "emoji-id": "e-4D0",
    "codepoint": "U+1F456",
    "name": "JEANS",
    "twitter-id": "1f456"
  },
  "\ud83c\udf54": {
    "emoji-id": "e-960",
    "codepoint": "U+1F354",
    "name": "HAMBURGER",
    "twitter-id": "1f354"
  },
  "\u264a": {
    "emoji-id": "e-02D",
    "codepoint": "U+264A",
    "name": "GEMINI",
    "twitter-id": "264a"
  },
  "\ud83d\udccd": {
    "emoji-id": "e-53F",
    "codepoint": "U+1F4CD",
    "name": "ROUND PUSHPIN",
    "twitter-id": "1f4cd"
  },
  "\u274c": {
    "emoji-id": "e-B45",
    "codepoint": "U+274C",
    "name": "CROSS MARK",
    "twitter-id": "274c"
  },
  "\ud83c\udfc3": {
    "emoji-id": "e-7D9",
    "codepoint": "U+1F3C3",
    "name": "RUNNER",
    "twitter-id": "1f3c3"
  },
  "\ud83d\udc46": {
    "emoji-id": "e-B99",
    "codepoint": "U+1F446",
    "name": "WHITE UP POINTING BACKHAND INDEX",
    "twitter-id": "1f446"
  },
  "\ud83c\udf44": {
    "emoji-id": "e-04B",
    "codepoint": "U+1F344",
    "name": "MUSHROOM",
    "twitter-id": "1f344"
  },
  "\ud83d\udd06": {
    "emoji-id": "",
    "codepoint": "U+1F506",
    "name": "HIGH BRIGHTNESS SYMBOL",
    "twitter-id": "1f506"
  }
}

  )

  .constant(
    'EMOJIREG',
    /(🔹|😿|🌽|🐳|🈷|🎶|💴|↪|🔩|↕|🐣|☔|🎦|💤|🆚|🔙|💔|😏|🚀|🎆|✅|💄|🇺|♿|👳|🅱|📴|🇪|🍭|✂|👣|🏦|📤|🕙|🍝|👓|❕|📔|♏|🍍|👃|🛀|🏆|📄|🈸|🎽|6⃣|💳|🔲|😰|🐴|🎭|💣|🔢|😠|🐤|⚠|◽|💓|🔒|🆑|🇺🇸|㊗|➕|🐔|🚏|🎍|💃|☀|🌆|🙍|📳|🇱|🍶|👴|🏭|📂|📣|♠|🍦|👤|📓|🕒|♐|🍖|👔|❎|📃|🙀|🍆|👄|🐹|🎸|🚾|🔳|💲|➰|🌷|😵|🐩|🎨|🔣|💢|😥|🐙|⚽|🔓|💒|☕|🎈|✏|🔃|💂|🌇|😅|👹|7⃣|🇼|📲|🍷|👩|🏨|🇬|📢|🍧|♥|👙|🕓|📒|🍗|👉|🏈|⛎|Ⓜ|🍇|🙅|💹|🌸|➿|😾|🐲|🎷|🈶|🔴|💩|🐢|🎧|🚥|🔤|💙|😞|🐒|🚕|🔔|💉|🌈|☎|🎇|🚅|🇻|📹|🍸|👲|♌|⛵|🇫|📩|🍨|👢|🏧|📙|🍘|👒|⬅|🕔|📉|🍈|◻|♎|👂|2⃣|⛅|🎺|😳|🌱|💰|🔵|🎪|🐯|😣|💠|🔥|🚤|🐟|😓|🌑|💐|🆖|🎊|✉|✈|😃|🌁|💀|🚄|👿|🗾|🍱|📰|🇶|⏪|👯|♣|🍡|📠|🇦|👟|⚪|#⃣|8⃣|🍑|📐|🕕|⛔|🏊|👏|🍁|📀|🙉|⛄|🌺|💿|🎱|🐰|💯|⭕|🎡|🐠|😤|⌚|💟|🔞|⚓|✒|🎑|😔|🌊|💏|🔎|🚃|🙏|🎁|5⃣|😄|🍺|🇽|⛳|👰|🍪|↘|🇰🇷|🇭|🏡|👠|🍚|📟|👐|🍊|📏|🏁|👀|🌻|😹|💾|〽|🎼|✳|🚲|🐵|😩|🔯|💮|🎬|🚢|🇷🇺|🐥|🌛|🆘|🔟|💞|9⃣|🚒|‼|🌋|😉|🔏|💎|🎌|🈁|🍻|🇸|👚|⛲|↗|👵|🍫|🇨|📮|⏬|😁|🍛|📞|❓|🉑|👕|♉|📎|◀|👅|🎻|🈺|🚹|🐾|🌼|😲|🔰|💵|✴|🎫|🚩|🐮|⏩|😢|🔠|💥|🈚|🚙|🐞|⬜|😒|🔐|🆗|💕|✔|🎋|🚉|🐎|🌌|😂|💅|🙎|🗿|👾|🇷|🆙|⏫|👮|🍬|🇧|📥|❤|👞|🍜|♒|🕐|📕|❔|👎|🍌|📅|❄|🐻|0⃣|ℹ|🇫🇷|🎾|💼|🔱|🏬|😷|🌵|🐫|▪|🚨|🈯|🎮|💬|🔡|🐛|💜|🆒|🔑|➖|🌕|🎎|💌| |🌅|👻|📼|🇲|🍵|👫|🏮|🍥|👛|📜|🕑|🍕|⬆|👋|📌|🙇|🍅|💻|🔺|😸|🌾|🐼|🎵|💫|🔪|↩|😨|🐬|™|🚧|🎥|💛|🔚|↙|😘|🐜|🚗|✖|💋|🔊|🐌|🚇|🎅|🀄|📻|🇹|👼|🇨🇳|📫|🇩|♨|🍮|🏥|📛|🕚|🍞|👜|🉐|📋|🙈|🍎|👌|🏄|🔻|💺|🌿|😽|😺|🐱|🎰|🚶|🈵|↖|🔫|💪|😭|🐡|🎠|🔛|💚|🌟|😝|🐑|🎐|↔|🔋|💊|🌏|😍|🎀|1⃣|📺|🗼|👱|⏰|🇴|📪|🍯|👡|🏠|⬛|🕛|📚|🍟|👑|❗|📊|⁉|🍏|♍|🏀|❇|🐺|🎿|🚽|🔼|💱|🌰|⤴|▫|©|✨|🎯|🚭|💡|🌠|⌛|🐚|🔜|🆓|💑|➗|😖|♈|🎏|🔌| |💁|🌀|😆|🗻|👺|⛽|🇳|📱|🍰|👪|🏯|📡|🍠|♦|🇬🇧|🏪|📑|⭐|👊|📁|🍀|🙆|😻|🌹|💸|🔽|🚼|🈳|🎲|🐷|▶|⤵|😫|💨|🚬|🎢|🐧|⚾|🌙|💘|🔝|🎒|🐗|😋|🌉|💈|🆎|🔍|🚌|🎂|🇯🇵|♻|🍹|🇾|🇪🇸|👷|🍩|📨|🇮|🏢|👧|🍙|📘|👗|◾|🙋|♓|🍉|📈|🏂|👇|🚻|🎹|🐸|😼|〰|🔶|🈴|🚫|🎩|🐨|➡|💧|🔦|🇩🇪|♋|🐘|😜|💗|🔖|🆕|✊|🎉|😌|3⃣|🌂|💇|👸|🅾|🗽|🍲|📷|🇵|🏩|👨|🍢|📧|🏫|👘|☝|🍒|📗|🕖|👈|🃏|🙌|🍂|📇|🚺|🈹|🐽|😱|🔷|4⃣|🎴|🚪|®|🐭|😡|🆔|🔧|💦|🎤|🚚|🐝|🌓|☑|🔗|💖|✋|🐍|🌃|☁|💆| |🎄|⛺|🅿|🇮🇹|👽|🍳|🇰|📶|⛪|🍣|📦|⚫|👝|🍓|⬇|♑|🕗|📖|👍|🍃|📆|🔮|☺|🔸|💽|🎳|🈲|🐶|🌴|😪|🔨|🎣|⚡|🐦|😚|㊙|🔘|💝|🙊|🎓|🚑|◼|🌔|😊|💍|✌|🎃|🈂|🌄|🏰|🇿|⏳|🅰|👶|🍴|🇯|🚓|🏣|👦|🍤|🕘|📝|👖|🍔|♊|📍|❌|🏃|👆|🍄|🔆)/g
  )
;
