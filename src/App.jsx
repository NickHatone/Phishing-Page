import React, { useEffect, useState } from 'react'

// Correos base
const sampleEmails = [
  {
    id: 1,
    senderName: "Amazon Support",
    email: "support@amaz0n-secure.com",
    subject: "Verifica tu cuenta urgente",
    content: "Haz clic aquí para asegurar tu cuenta. Podrías perder acceso.",
    status: "pendiente"
  },
  {
    id: 2,
    senderName: "Pedro García",
    email: "pedro@gmail.com",
    subject: "Reunión mañana",
    content: "Confirmamos reunión a las 10:00 am.",
    status: "pendiente"
  },
  {
    id: 3,
    senderName: "Facebook Alert",
    email: "security@faceb00k.com",
    subject: "Tu cuenta fue bloqueada",
    content: "Haz clic para recuperarla ahora.",
    status: "pendiente"
  },
  {
    id: 4,
    senderName: "Netflix",
    email: "billing@netfIix.com",
    subject: "Problema con tu pago",
    content: "Actualiza tus datos de tarjeta para evitar suspensión.",
    status: "pendiente"
  },
  {
    id: 5,
    senderName: "Luis Torres",
    email: "luis.torres@empresa.com",
    subject: "Informe mensual",
    content: "Adjunto el informe de ventas de este mes.",
    status: "pendiente"
  }
]
  
function App() {
  const [emails, setEmails] = useState([])

  // Cargar correos al inicio
  useEffect(() => {
    const saved = localStorage.getItem('emails')
    if (saved) {
      const parsed = JSON.parse(saved)
      const pendientes = parsed.filter(e => e.status === 'pendiente')
      if (pendientes.length === 0) {
        setEmails(sampleEmails)
        localStorage.setItem('emails', JSON.stringify(sampleEmails))
      } else {
        setEmails(parsed)
      }
    } else {
      setEmails(sampleEmails)
      localStorage.setItem('emails', JSON.stringify(sampleEmails))
    }
  }, [])

  // Reinicio si no hay más pendientes
  useEffect(() => {
    const pendientes = emails.filter(e => e.status === 'pendiente')
    if (emails.length > 0 && pendientes.length === 0) {
      setTimeout(() => {
        setEmails(sampleEmails)
        localStorage.setItem('emails', JSON.stringify(sampleEmails))
      }, 1000)
    }
  }, [emails])

  // Marcar correo
  const marcar = (id, nuevoEstado) => {
    const actualizados = emails.map(email =>
      email.id === id ? { ...email, status: nuevoEstado } : email
    )
    setEmails(actualizados)
    localStorage.setItem('emails', JSON.stringify(actualizados))
  }

  const pendiente = emails.find(e => e.status === 'pendiente')

  return (
    <div style={{ maxWidth: '700px', margin: '30px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Detector de Phishing</h1> 
      <h2>Bienvenido soy alumno de inacap,te presento esta pagina para aprender a identificar Phishing de forma rapida y super practica</h2>
      <img 
  src="https://play-lh.googleusercontent.com/c5cvYpLLDFDLFqyHqtf_GzR0sYpXUs19zt7FmPT5pCHcPRqylSU_TgaHZLF2g8iUGGA_" 
  alt="Icono"
  style={{ width: '300px', height: '300px', verticalAlign: 'middle',borderRadius: '50%'}}
/>

      <div style={{ marginBottom: '20px' }}>
        <p>✅ Seguros: {emails.filter(e => e.status === 'seguro').length}</p>
        <p>⚠️ Sospechosos: {emails.filter(e => e.status === 'sospechoso').length}</p>
        <p>✉️ Pendientes: {emails.filter(e => e.status === 'pendiente').length}</p>
      </div>

      {pendiente ? (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', backgroundColor: '#000000ff', padding: '20px', borderRadius: '8px' }}>
          <div style={{ flex: 1 }}>
            <p><strong>Remitente:</strong> {pendiente.senderName}</p>
            <p><strong>Email:</strong> {pendiente.email}</p>
            <p><strong>Asunto:</strong> {pendiente.subject}</p>
            <p><strong>Mensaje:</strong> {pendiente.content}</p>

            <div style={{ marginTop: '20px', fontSize: '0.95em', backgroundColor: '#000000ff', padding: '10px', borderRadius: '6px', border: '1px solid #ffd700' }}>
              <strong>🧠 Consejo:</strong>
              <ul>
                <li>Revisa si el email tiene errores ortográficos o urgencia extrema.</li>
                <li>Confirma si la dirección de correo es legítima (ej: amazon.com vs amaz0n-secure.com).</li>
                <li>Nunca hagas clic sin verificar el enlace primero.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => marcar(pendiente.id, 'seguro')} style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
              ✅ Marcar como Seguro
            </button>
            <button onClick={() => marcar(pendiente.id, 'sospechoso')} style={{ backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
              ⚠️ Marcar como Sospechoso
            </button>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: '20px' }}>🎉 Todos los correos fueron revisados. Reiniciando...</p>
      )}
    </div>
  )
}

export default App
