var TableTable_Hotsell = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Hotsell_Auto.js")
		if (!this._map)
			PILogE("Table_Hotsell: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Hotsell: id not found");
		return val;
	},

	getBuyTimes: function(id) {
		var info = this.info(id);
		return info ? info["buyTimes"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getPriCost: function(id) {
		var info = this.info(id);
		return info ? info["priCost"] : null;
	},

	getPutAway : function(id) {
		var info = this.info(id);
		return info ? info["putAway "] : null;
	},

	getItemLists: function(id) {
		var info = this.info(id);
		return info ? info["itemLists"] : null;
	},

	getPreCost: function(id) {
		var info = this.info(id);
		return info ? info["preCost"] : null;
	},

	getPeriods: function(id) {
		var info = this.info(id);
		return info ? info["periods"] : null;
	},

	getDesc: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["desc"]) : info["desc"];
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}