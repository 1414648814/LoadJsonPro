var TableTable_Juese_chengzhang = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Juese_chengzhang_Auto.js")
		if (!this._map)
			PILogE("Table_Juese_chengzhang: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Juese_chengzhang: id not found");
		return val;
	},

	getFightHeroNumberLimit: function(id) {
		var info = this.info(id);
		return info ? info["fightHeroNumberLimit"] : null;
	},

	getNeedExperience: function(id) {
		var info = this.info(id);
		return info ? info["needExperience"] : null;
	},

	getLevel: function(id) {
		var info = this.info(id);
		return info ? info["level"] : null;
	},

	getTiLiLimit: function(id) {
		var info = this.info(id);
		return info ? info["tiLiLimit"] : null;
	},

	getRewardYuanBao: function(id) {
		var info = this.info(id);
		return info ? info["rewardYuanBao"] : null;
	},

	getNeiLiLimit: function(id) {
		var info = this.info(id);
		return info ? info["neiLiLimit"] : null;
	},

	getFriendLimit: function(id) {
		var info = this.info(id);
		return info ? info["friendLimit"] : null;
	},

	getBaseAttack: function(id) {
		var info = this.info(id);
		return info ? info["baseAttack"] : null;
	},

	getStudentLimit: function(id) {
		var info = this.info(id);
		return info ? info["studentLimit"] : null;
	},

	getRewardYinLiang: function(id) {
		var info = this.info(id);
		return info ? info["rewardYinLiang"] : null;
	},

	getBaseDefense: function(id) {
		var info = this.info(id);
		return info ? info["baseDefense"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}