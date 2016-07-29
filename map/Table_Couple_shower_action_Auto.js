var TableTable_Couple_shower_action = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Couple_shower_action_Auto.js")
		if (!this._map)
			PILogE("Table_Couple_shower_action: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Couple_shower_action: id not found");
		return val;
	},

	getCdTime: function(id) {
		var info = this.info(id);
		return info ? info["cdTime"] : null;
	},

	getDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["dec"]) : info["dec"];
	},

	getCostNeili: function(id) {
		var info = this.info(id);
		return info ? info["costNeili"] : null;
	},

	getType: function(id) {
		var info = this.info(id);
		return info ? info["type"] : null;
	},

	getRewardList: function(id) {
		var info = this.info(id);
		return info ? info["rewardList"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}