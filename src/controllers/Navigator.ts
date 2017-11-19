export class Navigator {

    private $navId: string;

    constructor (navigatorId: string) {
        this.$navId = navigatorId;
    }

    public activateHiding = (navigatorId) => {
        let lastScroll = $(window).scrollTop();
        $(window).on('scroll', () => {
            const currentScroll: number = $(window).scrollTop();
            const maxScroll: number = -($(window).height() - $(document).height());
            const direction = lastScroll < currentScroll ? 'down' : 'up';
            if (direction === 'down' && (currentScroll > 25 || currentScroll === maxScroll)) {
                this.hideNavigator(navigatorId);
            } else {
                this.showNavigator(navigatorId);
            }
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
