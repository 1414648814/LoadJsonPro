var TableTable_Banghui = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Banghui_Auto.js")
		if (!this._map)
			PILogE("Table_Banghui: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Banghui: id not found");
		return val;
	},

	getMemberNum: function(id) {
		var info = this.info(id);
		return info ? info["memberNum"] : null;
	},

	getLevelcost: function(id) {
		var info = this.info(id);
		return info ? info["levelcost"] : null;
	},

	getLevel: function(id) {
		var info = this.info(id);
		return info ? info["Level"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}