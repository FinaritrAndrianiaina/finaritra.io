const withProps = (Component,props) => {
    return function(props_other) {
        return <Component {...props_other} {...props} />
    }
}

export default withProps;