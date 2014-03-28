UUTIL.DBUtil = OBJECT({
	init : function(cls, inner, self) {

		var
		// remove forever.
		removeForever;

		self.removeForever = removeForever = function(params, errorHandler) {
			//REQUIRED: params
			//REQUIRED: params.box
			//REQUIRED: params.dbName
			//REQUIRED: params.id
			//OPTIONAL: errorHandler

			var
			//IMPORT: Mongolian.ObjectId
			ObjectId = UPPERSITE.MODULE('mongolian').ObjectId,

			// box
			box = params.box,

			// db name
			dbName = params.dbName,

			// id
			id = params.id,

			// filter
			filter;

			try {

				UPPERSITE.db.collection(box.boxName + '.' + dbName).remove({
					_id : new ObjectId(id),
					__IS_ENABLED : false
				}, function(error) {

					if (error === null) {
						if (errorHandler !== undefined) {
							errorHandler();
						}
					}

					// if error is not null
					else {
						if (errorHandler !== undefined) {
							errorHandler(error.toString());
						}
					}
				});
			}

			// if catch error
			catch (error) {
				if (errorHandler !== undefined) {
					errorHandler(error.toString());
				}
			}
		};
	}
});
