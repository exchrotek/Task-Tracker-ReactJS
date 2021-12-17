import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// const [addButtonText,setAddButtonText] = useState(true)

const Header = ({ title, onAdd, showAddTask }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'steelblue':'green'} text={showAddTask ? "Close" : "Add"} onClick={onAdd} />
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header

