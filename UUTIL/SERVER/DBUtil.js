UUTIL.DBUtil = OBJECT({
	init : function(cls, inner, self) {

		var
		// remove forever.
		removeForever;

		self.removeForever = removeForever = function(params, errorHandler) {
			//REQUIRED: params
			//REQUIRED: params.box
			//REQUIRED: params.dbName
			//OPTIONAL: params.id
			//OPTIONAL: params.filter
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
			filter = params.filter;

			try {

				if (filter === undefined) {
					filter = {
						_id : new ObjectId(id)
					};
				}

				filter.__IS_ENABLED = false;

				UPPERSITE.db.collection(box.boxName + '.' + dbName).remove(filter, function(error) {

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
