/**
 * Created by jovialis (Dylan Hanson) on 9/12/20
 **/

// Util wrapper class to easily format serverSide props.
export default class PropsWrapper {

    constructor(context, ignoreUser) {
        if (!ignoreUser) {
            this.user = context.req.user ? context.req.user.export() : null;
        }
    }

    export(props) {
        return {
            props: {
                user: this.user,
                ...props
            }
        };
    }

}
