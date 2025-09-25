import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { DatAContext } from '../context/DataContext';
import PostItem from '../components/PostItem';
import PostForm from '../components/PostForm';

function Profile () {
  const { user } = useContext(AuthContext);
  const { posts } = useContext(DatAContext);

  if (!user) {
    return <p>Veuillez vous connecter pour accéder à votre profil.</p>
  }

  const userPosts = posts.filter(post => post.userId === user.id)

  return (
    <div className="profile">

        <h3>Mes publications</h3>
            {userPosts.length > 0 ? (
                userPosts.map(post => (
                <PostItem key={post.id} post={post} /> 
                ))
            ) : (
                <p>Vous n'avez encore rien publié.</p>
            )}

        <h2>Profil de {user.username}</h2>
        { userPosts.length>0 ? <h3>Créer un nouveau post</h3>: <h3>Créer un post</h3> }
        <PostForm />

    </div>
  );
};

export default Profile;