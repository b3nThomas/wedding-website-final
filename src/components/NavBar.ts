export class NavBar {

    private $navId: string;

    constructor (navBarId: string) {
        this.$navId = navBarId;
    }

    private hideNavBar = () => {
        $(this.$navId).addClass('nav-hidden');
    }

    private showNavBar = () => {
        $(this.$navId).removeClass('nav-hidden');
    }

    public activateHiding = (scrollWindow: number) => {
        let lastScroll: number = $(window).scrollTop();
        let lastHidden: number = 0;
        let lastShown: number = 0;

        $(window).on('scroll', () => {
            const currentScroll: number = $(window).scrollTop();
            const direction = lastScroll < currentScroll ? 'down' : 'up';
            if (direction === 'down' && (currentScroll - lastShown) > (scrollWindow * 2)) {
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
