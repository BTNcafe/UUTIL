// run: nodemon SingleFileModeExample.js

require('./UPPERCASE_ONE/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUseDB : true
	},
	BROWSER_CONFIG : {
		MAIN : function(BOX) {

			BOX.MATCH_VIEW({
				uris : ['', 'View'],
				target : CLASS({

					preset : function() {'use strict';
						return VIEW;
					},

					init : function(cls, inner, self) {'use strict';

						var
						// div
						div,

						// close.
						close;

						div = DIV({
							style : {
								fontSize : 50
							},
							children : [SPAN({
								children : ['Hello UPPERCASE!']
							})]
						}).appendTo(BODY);

						//OVERRIDE: self.close
						self.close = close = function(params) {
							div.remove();
						};
					}
				})
			});
		}
	}
});
