var TableTable_IllustratedHandbookRewardData = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_IllustratedHandbookRewardData_Auto.js")
		if (!this._map)
			PILogE("Table_IllustratedHandbookRewardData: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_IllustratedHandbookRewardData: id not found");
		return val;
	},

	getProgressTypeNum: function(id) {
		var info = this.info(id);
		return info ? info["progressTypeNum"] : null;
	},

	getDescription: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["description"]) : info["description"];
	},

	getImgRefId: function(id) {
		var info = this.info(id);
		return info ? info["imgRefId"] : null;
	},

	getCatagoryName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["catagoryName"]) : info["catagoryName"];
	},

	getRewardRefId: function(id) {
		var info = this.info(id);
		return info ? info["rewardRefId"] : null;
	},

	getRewardType: function(id) {
		var info = this.info(id);
		return info ? info["rewardType"] : null;
	},

	getProgressType: function(id) {
		var info = this.info(id);
		return info ? info["progressType"] : null;
	},

	getCatagoryId: function(id) {
		var info = this.info(id);
		return info ? info["catagoryId"] : null;
	},

	getTotalNum: function(id) {
		var info = this.info(id);
		return info ? info["totalNum"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}