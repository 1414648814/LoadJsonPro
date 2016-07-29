var TableTable_Bang_zhang = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_zhang_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_zhang: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_zhang: id not found");
		return val;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getOpenDec: function(id) {
		var info = this.info(id);
		return info ? info["openDec"] : null;
	},

	getIconId: function(id) {
		var info = this.info(id);
		return info ? info["iconId"] : null;
	},

	getName2: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name2"]) : info["name2"];
	},

	getDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["dec"]) : info["dec"];
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}