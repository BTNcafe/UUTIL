UPPERCASE_ONE.MAIN = METHOD({
	run : function() {'use strict';
		if (BROWSER_CONFIG.MAIN !== undefined) {
			eval('(' + BROWSER_CONFIG.MAIN + ')')(UPPERCASE_ONE);
		}
	}
});
