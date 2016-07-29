var TableTable_Jieshu = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Jieshu_Auto.js")
		if (!this._map)
			PILogE("Table_Jieshu: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Jieshu: id not found");
		return val;
	},

	getJieShu: function(id) {
		var info = this.info(id);
		return info ? info["jieShu"] : null;
	},

	getHorseAtkDefRatio: function(id) {
		var info = this.info(id);
		return info ? info["horseAtkDefRatio"] : null;
	},

	getArmorAtkDefRatio: function(id) {
		var info = this.info(id);
		return info ? info["armorAtkDefRatio"] : null;
	},

	getBookAtkDefRatio: function(id) {
		var info = this.info(id);
		return info ? info["bookAtkDefRatio"] : null;
	},

	getRebirthNeedPlayerLevel: function(id) {
		var info = this.info(id);
		return info ? info["rebirthNeedPlayerLevel"] : null;
	},

	getRebirthNeedItemNum1: function(id) {
		var info = this.info(id);
		return info ? info["rebirthNeedItemNum1"] : null;
	},

	getRebirthNeedItemNum2: function(id) {
		var info = this.info(id);
		return info ? info["rebirthNeedItemNum2"] : null;
	},

	getHeroAtkDefRatio: function(id) {
		var info = this.info(id);
		return info ? info["heroAtkDefRatio"] : null;
	},

	getCostYinLiang: function(id) {
		var info = this.info(id);
		return info ? info["costYinLiang"] : null;
	},

	getRebirthNeedCardNum: function(id) {
		var info = this.info(id);
		return info ? info["rebirthNeedCardNum"] : null;
	},

	getCardLevelLimit: function(id) {
		var info = this.info(id);
		return info ? info["cardLevelLimit"] : null;
	},

	getWeaponAtkDefRatio: function(id) {
		var info = this.info(id);
		return info ? info["weaponAtkDefRatio"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}