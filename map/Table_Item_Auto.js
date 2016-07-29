var TableTable_Item = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Item_Auto.js")
		if (!this._map)
			PILogE("Table_Item: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Item: id not found");
		return val;
	},

	getItemEffect: function(id) {
		var info = this.info(id);
		return info ? info["itemEffect"] : null;
	},

	getDescription: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["description"]) : info["description"];
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getVisible: function(id) {
		var info = this.info(id);
		return info ? info["visible"] : null;
	},

	getIconId: function(id) {
		var info = this.info(id);
		return info ? info["iconId"] : null;
	},

	getVipLevelLimit: function(id) {
		var info = this.info(id);
		return info ? info["vipLevelLimit"] : null;
	},

	getMoneyType: function(id) {
		var info = this.info(id);
		return info ? info["moneyType"] : null;
	},

	getImageId: function(id) {
		var info = this.info(id);
		return info ? info["imageId"] : null;
	},

	getDiscount: function(id) {
		var info = this.info(id);
		return info ? info["discount"] : null;
	},

	getBuyTimesLimit: function(id) {
		var info = this.info(id);
		return info ? info["buyTimesLimit"] : null;
	},

	getOriginalPrice: function(id) {
		var info = this.info(id);
		return info ? info["originalPrice"] : null;
	},

	getPriceCalculateType: function(id) {
		var info = this.info(id);
		return info ? info["priceCalculateType"] : null;
	},

	getPropShowType: function(id) {
		var info = this.info(id);
		return info ? info["propShowType"] : null;
	},

	getOrder: function(id) {
		var info = this.info(id);
		return info ? info["order"] : null;
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