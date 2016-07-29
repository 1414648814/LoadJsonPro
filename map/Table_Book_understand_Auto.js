var TableTable_Book_understand = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Book_understand_Auto.js")
		if (!this._map)
			PILogE("Table_Book_understand: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Book_understand: id not found");
		return val;
	},

	getAddtion: function(id) {
		var info = this.info(id);
		return info ? info["addtion"] : null;
	},

	getBookStar: function(id) {
		var info = this.info(id);
		return info ? info["bookStar"] : null;
	},

	getSuccBase: function(id) {
		var info = this.info(id);
		return info ? info["succBase"] : null;
	},

	getCostYin: function(id) {
		var info = this.info(id);
		return info ? info["costYin"] : null;
	},

	getFloor: function(id) {
		var info = this.info(id);
		return info ? info["floor"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}