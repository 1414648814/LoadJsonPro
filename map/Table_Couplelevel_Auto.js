var TableTable_Couplelevel = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Couplelevel_Auto.js")
		if (!this._map)
			PILogE("Table_Couplelevel: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Couplelevel: id not found");
		return val;
	},

	getLuckValue: function(id) {
		var info = this.info(id);
		return info ? info["luckValue"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getLevel: function(id) {
		var info = this.info(id);
		return info ? info["level"] : null;
	},

	getAddition: function(id) {
		var info = this.info(id);
		return info ? info["addition"] : null;
	},

	getDigSuccessAddLuckValue: function(id) {
		var info = this.info(id);
		return info ? info["digSuccessAddLuckValue"] : null;
	},

	getDigFailReduceLuckValue: function(id) {
		var info = this.info(id);
		return info ? info["digFailReduceLuckValue"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}