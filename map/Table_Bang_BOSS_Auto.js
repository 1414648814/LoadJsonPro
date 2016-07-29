var TableTable_Bang_BOSS = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_BOSS_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_BOSS: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_BOSS: id not found");
		return val;
	},

	getZijinLimitTotal: function(id) {
		var info = this.info(id);
		return info ? info["zijinLimitTotal"] : null;
	},

	getYinLimitTotal: function(id) {
		var info = this.info(id);
		return info ? info["yinLimitTotal"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getNeedProgress: function(id) {
		var info = this.info(id);
		return info ? info["needProgress"] : null;
	},

	getIconId: function(id) {
		var info = this.info(id);
		return info ? info["iconId"] : null;
	},

	getCardId: function(id) {
		var info = this.info(id);
		return info ? info["cardId"] : null;
	},

	getRewardYin: function(id) {
		var info = this.info(id);
		return info ? info["rewardYin"] : null;
	},

	getImageId: function(id) {
		var info = this.info(id);
		return info ? info["imageId"] : null;
	},

	getName2: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name2"]) : info["name2"];
	},

	getBlood: function(id) {
		var info = this.info(id);
		return info ? info["blood"] : null;
	},

	getYinLimitOnce: function(id) {
		var info = this.info(id);
		return info ? info["yinLimitOnce"] : null;
	},

	getTime: function(id) {
		var info = this.info(id);
		return info ? info["time"] : null;
	},

	getMoreZijin: function(id) {
		var info = this.info(id);
		return info ? info["moreZijin"] : null;
	},

	getCD: function(id) {
		var info = this.info(id);
		return info ? info["CD"] : null;
	},

	getRewardZijin: function(id) {
		var info = this.info(id);
		return info ? info["rewardZijin"] : null;
	},

	getNpcHeroRefIdList: function(id) {
		var info = this.info(id);
		return info ? info["npcHeroRefIdList"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}