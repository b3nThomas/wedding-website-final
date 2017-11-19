export class Navigator {

    private $navId: string;

    constructor (navigatorId: string) {
        this.$navId = navigatorId;
    }

    public activateHiding = (navigatorId) => {
        let lastScroll = $(window).scrollTop();
        $(window).on('scroll', () => {
            const currentScroll = $(window).scrollTop();
            const direction = lastScroll < currentScroll ? 'down' : 'up';
            direction === 'down' && currentScroll > 50 ? this.hideNavigator(navigatorId) : this.showNavigator(navigatorId);
            lastScroll = currentScroll;
        });
    }

    private hideNavigator = (navigatorId) => {
        $(navigatorId).css('margin-top', '-50px');
    }

    private showNavigator = (navigatorId) => {
        $(navigatorId).css('margin-top', '0');
    }
}
