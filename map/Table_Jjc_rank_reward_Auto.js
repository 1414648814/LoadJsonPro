var TableTable_Jjc_rank_reward = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Jjc_rank_reward_Auto.js")
		if (!this._map)
			PILogE("Table_Jjc_rank_reward: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Jjc_rank_reward: id not found");
		return val;
	},

	getBookPartRewardItemList: function(id) {
		var info = this.info(id);
		return info ? info["bookPartRewardItemList"] : null;
	},

	getName: function(id) {
		var info = this.info(id);
		return info ? info["name"] : null;
	},

	getRewardList: function(id) {
		var info = this.info(id);
		return info ? info["rewardList"] : null;
	},

	getRankStart: function(id) {
		var info = this.info(id);
		return info ? info["rankStart"] : null;
	},

	getHasCardReward: function(id) {
		var info = this.info(id);
		return info ? info["hasCardReward"] : null;
	},

	getDec: function(id) {
		var info = this.info(id);
		return info ? info["dec"] : null;
	},

	getRankEnd: function(id) {
		var info = this.info(id);
		return info ? info["rankEnd"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}