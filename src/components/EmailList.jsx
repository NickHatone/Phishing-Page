import React from 'react'
import EmailCard from './EmailCard'

const EmailList = ({ emails, onUpdateStatus }) => {
  return (
    <div>
      {emails.map((email) => (
        <EmailCard key={email.id} email={email} onUpdateStatus={onUpdateStatus} />
      ))}
    </div>
  )
}

export default EmailList
