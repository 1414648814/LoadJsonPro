var TableTable_Jingmai_unlock = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Jingmai_unlock_Auto.js")
		if (!this._map)
			PILogE("Table_Jingmai_unlock: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Jingmai_unlock: id not found");
		return val;
	},

	getPrecon: function(id) {
		var info = this.info(id);
		return info ? info["precon"] : null;
	},

	getLevel: function(id) {
		var info = this.info(id);
		return info ? info["level"] : null;
	},

	getCost: function(id) {
		var info = this.info(id);
		return info ? info["cost"] : null;
	},

	getDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["dec"]) : info["dec"];
	},

	getQuality: function(id) {
		var info = this.info(id);
		return info ? info["quality"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}