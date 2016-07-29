var TableTable_Jjc_reward = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Jjc_reward_Auto.js")
		if (!this._map)
			PILogE("Table_Jjc_reward: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Jjc_reward: id not found");
		return val;
	},

	getRankStart: function(id) {
		var info = this.info(id);
		return info ? info["rankStart"] : null;
	},

	getRankEnd: function(id) {
		var info = this.info(id);
		return info ? info["rankEnd"] : null;
	},

	getRewardShengwang: function(id) {
		var info = this.info(id);
		return info ? info["rewardShengwang"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}