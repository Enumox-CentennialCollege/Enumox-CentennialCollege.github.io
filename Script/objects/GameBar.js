"use strict";
var objects;
(function (objects) {
    var GameBar = /** @class */ (function () {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function GameBar(stage) {
            this._plrOneLife = 100;
            this._plrTwoLife = 100;
            this._plrOneXp = 0;
            this._plrTwoXp = 0;
            this._gameStart = (new Date()).getTime();
            this._plrOneLifeBar = new createjs.Graphics();
            this._plrTwoLifeBar = new createjs.Graphics();
            this._plrOneXpBar = new createjs.Graphics();
            this._plrTwoXpBar = new createjs.Graphics();
            this._timerLabel = new objects.Label("000:00", "48px", "Consolas", "#000000", 640, 40, true);
            stage.addChild(this._timerLabel);
        }
        GameBar.prototype.Update = function () {
            var curMilis = (new Date).getTime();
            var secondsDiff = (curMilis - this._gameStart) / 1000;
            var seconds = ("00" + Math.floor(secondsDiff) % 60).substr(-2);
            var minutes = ("000" + Math.floor(secondsDiff / 60)).substr(-3);
            this._timerLabel.text = minutes + ":" + seconds;
        };
        return GameBar;
    }());
    objects.GameBar = GameBar;
})(objects || (objects = {}));
//# sourceMappingURL=GameBar.js.map