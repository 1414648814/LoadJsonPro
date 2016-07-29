var TableTable_Card_chengzhang = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Card_chengzhang_Auto.js")
		if (!this._map)
			PILogE("Table_Card_chengzhang: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Card_chengzhang: id not found");
		return val;
	},

	getNeedAllExperience: function(id) {
		var info = this.info(id);
		return info ? info["needAllExperience"] : null;
	},

	getNeedExperience: function(id) {
		var info = this.info(id);
		return info ? info["needExperience"] : null;
	},

	getLevel: function(id) {
		var info = this.info(id);
		return info ? info["level"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}