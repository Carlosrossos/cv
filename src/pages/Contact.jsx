import React from 'react'
import styles from '../styles/pages/Contact.module.css'
import ContactCard from '../components/ContactCard'

export default function Contact() {
  return (
    <div className={styles.container}>
    <ContactCard/>
  </div>
  )
}
