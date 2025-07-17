import React from 'react'

const EmailCard = ({ email, onUpdateStatus }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '10px'
    }}>
      <p><strong>De:</strong> {email.sender}</p>
      <p><strong>Asunto:</strong> {email.subject}</p>
      <p><strong>Contenido:</strong> {email.content}</p>
      <p><strong>Estado:</strong> {email.status}</p>
      {email.status === 'pendiente' && (
        <div>
          <button onClick={() => onUpdateStatus(email.id, 'seguro')}>✅ Marcar como Seguro</button>
          <button onClick={() => onUpdateStatus(email.id, 'sospechoso')}>⚠️ Marcar como Sospechoso</button>
        </div>
      )}
    </div>
  )
}

export default EmailCard
