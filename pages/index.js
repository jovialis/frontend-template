/**
 * Created by jovialis (Dylan Hanson) on 9/12/20
 **/

import styleResolver from "../helpers/styleResolver";
import styles from './index.module.scss';
const c = styleResolver(styles);

export default function IndexPage({props}) {
    return (
        <div className={c('page-index')}>
            <h1>New Template</h1>
            <p>Let's get started...</p>
        </div>
    );
}