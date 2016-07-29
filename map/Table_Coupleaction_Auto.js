var TableTable_Coupleaction = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Coupleaction_Auto.js")
		if (!this._map)
			PILogE("Table_Coupleaction: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Coupleaction: id not found");
		return val;
	},

	getGetExpRatio: function(id) {
		var info = this.info(id);
		return info ? info["getExpRatio"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getGetXinshiRatio: function(id) {
		var info = this.info(id);
		return info ? info["getXinshiRatio"] : null;
	},

	getMoneyType: function(id) {
		var info = this.info(id);
		return info ? info["moneyType"] : null;
	},

	getCost: function(id) {
		var info = this.info(id);
		return info ? info["cost"] : null;
	},

	getExpGuding: function(id) {
		var info = this.info(id);
		return info ? info["expGuding"] : null;
	},

	getYinGuding: function(id) {
		var info = this.info(id);
		return info ? info["yinGuding"] : null;
	},

	getVipLevel: function(id) {
		var info = this.info(id);
		return info ? info["vipLevel"] : null;
	},

	getAddLuckValue: function(id) {
		var info = this.info(id);
		return info ? info["addLuckValue"] : null;
	},

	getShiGuding: function(id) {
		var info = this.info(id);
		return info ? info["shiGuding"] : null;
	},

	getType: function(id) {
		var info = this.info(id);
		return info ? info["type"] : null;
	},

	getGetYinRatio: function(id) {
		var info = this.info(id);
		return info ? info["getYinRatio"] : null;
	},

	getDescription: function(id) {
		var info = this.info(id);
		return info ? info["description"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}