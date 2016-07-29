var TableTable_Couple_shower = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Couple_shower_Auto.js")
		if (!this._map)
			PILogE("Table_Couple_shower: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Couple_shower: id not found");
		return val;
	},

	getCoupleShowerAdd: function(id) {
		var info = this.info(id);
		return info ? info["coupleShowerAdd"] : null;
	},

	getLuckValueStep: function(id) {
		var info = this.info(id);
		return info ? info["luckValueStep"] : null;
	},

	getShowerStep: function(id) {
		var info = this.info(id);
		return info ? info["showerStep"] : null;
	},

	getShowerLimitTime: function(id) {
		var info = this.info(id);
		return info ? info["showerLimitTime"] : null;
	},

	getYinStep: function(id) {
		var info = this.info(id);
		return info ? info["yinStep"] : null;
	},

	getMaxLevel: function(id) {
		var info = this.info(id);
		return info ? info["maxLevel"] : null;
	},

	getRefId: function(id) {
		var info = this.info(id);
		return info ? info["refId"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}