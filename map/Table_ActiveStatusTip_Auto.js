var TableTable_ActiveStatusTip = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_ActiveStatusTip_Auto.js")
		if (!this._map)
			PILogE("Table_ActiveStatusTip: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_ActiveStatusTip: id not found");
		return val;
	},

	getEndTime: function(id) {
		var info = this.info(id);
		return info ? info["endTime"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getWeight: function(id) {
		var info = this.info(id);
		return info ? info["weight"] : null;
	},

	getIconId: function(id) {
		var info = this.info(id);
		return info ? info["iconId"] : null;
	},

	getIsDisplay: function(id) {
		var info = this.info(id);
		return info ? info["isDisplay"] : null;
	},

	getStartTime: function(id) {
		var info = this.info(id);
		return info ? info["startTime"] : null;
	},

	getCountdownTime: function(id) {
		var info = this.info(id);
		return info ? info["countdownTime"] : null;
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