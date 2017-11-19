export class NavBar {

    private $navId: string;

    constructor (navBarId: string) {
        this.$navId = navBarId;
    }

    private hideNavBar = () => {
        const hideDistance: string = '-50px';
        $(this.$navId).css('margin-top', hideDistance);
    }

    private showNavBar = () => {
        $(this.$navId).css('margin-top', '0');
    }
    public activateHiding = (scrollWindow: number) => {
        let lastScroll: number = $(window).scrollTop();
        let lastHidden: number = 0;
        let lastShown: number = 0;

        $(window).on('scroll', () => {
            const currentScroll: number = $(window).scrollTop();
            const direction = lastScroll < currentScroll ? 'down' : 'up';
            if (direction === 'down' && (currentScroll - lastShown) > scrollWindow) {
                this.hideNavBar();
                lastHidden = currentScroll;
            } 
            if (direction === 'up' && (lastHidden - currentScroll) > scrollWindow) {
                this.showNavBar();
                lastShown = currentScroll;
            }
            lastScroll = currentScroll;
        });
    }
}
