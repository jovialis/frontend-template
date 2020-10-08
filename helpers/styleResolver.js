/**
 * Created by jovialis (Dylan Hanson) on 9/16/20
 **/

export default function styleResolver(stylesheet) {
    return function(classes, injectedClasses) {
        let mappedClasses = classes.split(' ').map(n => stylesheet[n] ? stylesheet[n] : n).join(' ').trim();

        if (injectedClasses) {
            mappedClasses  = mappedClasses + ' ' + injectedClasses;
        }

        return mappedClasses;
    }
}