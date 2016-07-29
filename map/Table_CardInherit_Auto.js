var TableTable_CardInherit = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_CardInherit_Auto.js")
		if (!this._map)
			PILogE("Table_CardInherit: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_CardInherit: id not found");
		return val;
	},

	getNumRatio: function(id) {
		var info = this.info(id);
		return info ? info["numRatio"] : null;
	},

	getExpRatioGold: function(id) {
		var info = this.info(id);
		return info ? info["expRatioGold"] : null;
	},

	getStar: function(id) {
		var info = this.info(id);
		return info ? info["star"] : null;
	},

	getExpRatio: function(id) {
		var info = this.info(id);
		return info ? info["expRatio"] : null;
	},

	getNumRatioGold: function(id) {
		var info = this.info(id);
		return info ? info["numRatioGold"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}