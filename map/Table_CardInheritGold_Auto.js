var TableTable_CardInheritGold = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_CardInheritGold_Auto.js")
		if (!this._map)
			PILogE("Table_CardInheritGold: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_CardInheritGold: id not found");
		return val;
	},

	getJieShu: function(id) {
		var info = this.info(id);
		return info ? info["jieShu"] : null;
	},

	getStar: function(id) {
		var info = this.info(id);
		return info ? info["star"] : null;
	},

	getGold: function(id) {
		var info = this.info(id);
		return info ? info["gold"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}