import React from 'react'

const withSlowAppear = (Component) => {
    return (props) => {
        const {invisible} = props
        const className = invisible ? 'd-none' : 'slow-appear'
        return (
            <div className={className}>
                <Component {...props} />
            </div>
        )
    }
}

export default withSlowAppear