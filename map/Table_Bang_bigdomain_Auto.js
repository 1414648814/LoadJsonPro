var TableTable_Bang_bigdomain = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_bigdomain_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_bigdomain: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_bigdomain: id not found");
		return val;
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

	getImage: function(id) {
		var info = this.info(id);
		return info ? info["image"] : null;
	},

	getDifficulty: function(id) {
		var info = this.info(id);
		return info ? info["difficulty"] : null;
	},

	getLimit: function(id) {
		var info = this.info(id);
		return info ? info["limit"] : null;
	},

	getY: function(id) {
		var info = this.info(id);
		return info ? info["y"] : null;
	},

	getX: function(id) {
		var info = this.info(id);
		return info ? info["x"] : null;
	},

	getDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["dec"]) : info["dec"];
	},

	getDomains: function(id) {
		var info = this.info(id);
		return info ? info["domains"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}