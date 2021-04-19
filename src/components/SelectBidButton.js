import React from 'react'

const SelectBidButton = ({ bid }) => {

    const handleClick = () => {
        console.log(bid)
    }

    return (
        <button onClick={handleClick} className="btn cta-btn">Select</button>
    )

}

export default SelectBidButton