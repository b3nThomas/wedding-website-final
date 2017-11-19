"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Navigator {
    constructor(navigatorId) {
        this.activateHiding = (navigatorId) => {
            let lastScroll = $(window).scrollTop();
            $(window).on('scroll', () => {
                const currentScroll = $(window).scrollTop();
                const direction = lastScroll < currentScroll ? 'down' : 'up';
                direction === 'down' && currentScroll > 50 ? this.hideNavigator(navigatorId) : this.showNavigator(navigatorId);
                lastScroll = currentScroll;
            });
        };
        this.hideNavigator = (navigatorId) => {
            $(navigatorId).css('margin-top', '-50px');
        };
        this.showNavigator = (navigatorId) => {
            $(navigatorId).css('margin-top', '0');
        };
        this.$navId = navigatorId;
    }
}
exports.Navigator = Navigator;
//# sourceMappingURL=Navigator.js.map