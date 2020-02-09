"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // constuctor 
        function Player(img, plr) {
            var _this = _super.call(this, img) || this;
            _this.velocity = 3;
            _this.isMoving = false;
            _this.direction = 'U'; // U - Up, D - Down
            _this._playerWidth = 137;
            _this._playerHeight = 87;
            var x = 0;
            var y = 80;
            if (plr == 2) {
                x = objects.GameObject.GetCanvasSize().x - _this._playerWidth;
            }
            _this.position = new objects.Vector2(x, y);
            return _this;
        }
        Player.prototype._checkBounds = function () {
            throw new Error("Method not implemented.");
        };
        Player.prototype.Start = function () {
            throw new Error("Method not implemented.");
        };
        Player.prototype.Update = function () {
            var y = this.position.y;
            if (this.isMoving) {
                if (this.direction == 'U') {
                    y -= this.velocity;
                }
                else {
                    y += this.velocity;
                }
            }
            if (y < 80) { // game bar
                y = 80;
            }
            else if (y > objects.GameObject.GetCanvasSize().y - this._playerHeight) {
                y = objects.GameObject.GetCanvasSize().y - this._playerHeight;
            }
            this.position = new objects.Vector2(this.position.x, y);
        };
        Player.prototype.Reset = function () {
            throw new Error("Method not implemented.");
        };
        Player.prototype.StartMoveUp = function () {
            this.direction = 'U';
            this.isMoving = true;
        };
        Player.prototype.StartMoveDown = function () {
            this.direction = 'D';
            this.isMoving = true;
        };
        Player.prototype.StopMove = function () {
            this.isMoving = false;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=Player.js.map