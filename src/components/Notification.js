import React from 'react'

const Notification = ({showNotification}) => {
    return (
        <div className={`notification-container ${  showNotification ? 'show' : '' }`}>
            
        </div>
    )
}

export default Notification
