import classNames from 'classnames';
/**
 * Maps BaseAttribute props into object that can be attached to the jsx component.
 * @param baseClassNames - component class names that will be joined to the className string.
 * @param props - components base props.
 */
export const mapPropsToAttributes = (props, ...baseClassNames) => {
    const { id, role, style, classNames: otherClassNames } = props;
    const { covered, disabled } = props;
    const { ripple } = props;
    return {
        id, role, style,
        'data-tip': true,
        'data-for': id,
        className: `${props.className || ''} ${classNames(...baseClassNames)} ${classNames(otherClassNames)} ${classNames({ ripple, covered, disabled })}`,
    };
};

export const clipText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.substr(0, limit-3) + '...';
}