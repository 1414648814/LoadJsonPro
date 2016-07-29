var TableTable_Bang_science = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_science_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_science: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_science: id not found");
		return val;
	},

	getLevelCost: function(id) {
		var info = this.info(id);
		return info ? info["levelCost"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getIconId: function(id) {
		var info = this.info(id);
		return info ? info["IconId"] : null;
	},

	getBuyCost: function(id) {
		var info = this.info(id);
		return info ? info["buyCost"] : null;
	},

	getScienceTime: function(id) {
		var info = this.info(id);
		return info ? info["scienceTime"] : null;
	},

	getDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["dec"]) : info["dec"];
	},

	getType: function(id) {
		var info = this.info(id);
		return info ? info["type"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}