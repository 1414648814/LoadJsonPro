var TableTable_Bang_exchange = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_exchange_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_exchange: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_exchange: id not found");
		return val;
	},

	getDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["dec"]) : info["dec"];
	},

	getPrice: function(id) {
		var info = this.info(id);
		return info ? info["price"] : null;
	},

	getRewardType: function(id) {
		var info = this.info(id);
		return info ? info["rewardType"] : null;
	},

	getSociatyLevel: function(id) {
		var info = this.info(id);
		return info ? info["sociatyLevel"] : null;
	},

	getNum: function(id) {
		var info = this.info(id);
		return info ? info["num"] : null;
	},

	getImageId: function(id) {
		var info = this.info(id);
		return info ? info["imageId"] : null;
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