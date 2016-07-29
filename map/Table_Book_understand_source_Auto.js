var TableTable_Book_understand_source = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Book_understand_source_Auto.js")
		if (!this._map)
			PILogE("Table_Book_understand_source: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Book_understand_source: id not found");
		return val;
	},

	getBookStar: function(id) {
		var info = this.info(id);
		return info ? info["bookStar"] : null;
	},

	getSuccPro: function(id) {
		var info = this.info(id);
		return info ? info["succPro"] : null;
	},

	getBookSourceStar: function(id) {
		var info = this.info(id);
		return info ? info["bookSourceStar"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}