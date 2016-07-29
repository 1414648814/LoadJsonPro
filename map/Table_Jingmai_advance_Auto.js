var TableTable_Jingmai_advance = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Jingmai_advance_Auto.js")
		if (!this._map)
			PILogE("Table_Jingmai_advance: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Jingmai_advance: id not found");
		return val;
	},

	getTypeProList: function(id) {
		var info = this.info(id);
		return info ? info["typeProList"] : null;
	},

	getSuccessPro: function(id) {
		var info = this.info(id);
		return info ? info["successPro"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getImg: function(id) {
		var info = this.info(id);
		return info ? info["img"] : null;
	},

	getQualityProList: function(id) {
		var info = this.info(id);
		return info ? info["qualityProList"] : null;
	},

	getNpcId: function(id) {
		var info = this.info(id);
		return info ? info["npcId"] : null;
	},

	getAttachNumProList: function(id) {
		var info = this.info(id);
		return info ? info["attachNumProList"] : null;
	},

	getFailPro: function(id) {
		var info = this.info(id);
		return info ? info["failPro"] : null;
	},

	getCost: function(id) {
		var info = this.info(id);
		return info ? info["cost"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}