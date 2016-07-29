var TableTable_Bang_shenqi = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_shenqi_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_shenqi: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_shenqi: id not found");
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

	getIconId: function(id) {
		var info = this.info(id);
		return info ? info["IconId"] : null;
	},

	getEffect: function(id) {
		var info = this.info(id);
		return info ? info["effect"] : null;
	},

	getRewardYin: function(id) {
		var info = this.info(id);
		return info ? info["rewardYin"] : null;
	},

	getCost: function(id) {
		var info = this.info(id);
		return info ? info["cost"] : null;
	},

	getLimit: function(id) {
		var info = this.info(id);
		return info ? info["limit"] : null;
	},

	getType: function(id) {
		var info = this.info(id);
		return info ? info["type"] : null;
	},

	getRewardZijin: function(id) {
		var info = this.info(id);
		return info ? info["rewardZijin"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}