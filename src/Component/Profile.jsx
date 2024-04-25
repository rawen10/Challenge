import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'; // Fichier CSS externe pour les styles spécifiques aux composants

function Profile({ token }) { // Supposons que le token soit passé en prop
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Ajouter un état de chargement
  const [error, setError] = useState(null); // Ajouter un état d'erreur

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/auth/getme/${token}`); // Correction du formatage
        setUser(response.data); // Mettre à jour l'utilisateur avec les données de réponse
      } catch (err) {
        setError(err); // Gérer l'erreur s'il y en a une
      } finally {
        setLoading(false); // Mettre fin au chargement
      }
    };

    fetchUser(); // Appeler la fonction pour récupérer les informations utilisateur
  }, [token]); // Se re-déclencher uniquement si le token change

  if (loading) {
    return <div style={{ paddingTop: 150, height: '100vh' }}>Loading user information...</div>;
  }

  if (error) {
    return <div style={{ paddingTop: 150, height: '100vh', color: 'white' }}>Error fetching user information: {error.message}</div>;
  }

  if (!user) {
    return <div className="profile-no-user" style={{ paddingTop: 150, height: '100vh' }}>No user information available.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-details">
        <h2>Profile</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default Profile;
