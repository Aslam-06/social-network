import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Connexion() {

    const[message,setMessage]=useState('')
    const { register,formState:{ errors },reset,handleSubmit }=useForm()
    const { loginuser }=useContext(AuthContext)
    const navigate=useNavigate()


    const onsubmit=()=>{

        loginuser(data)

        reset()

        setMessage('Connexion Réussie')

        setTimeout(() => {
            navigate('/')
        }, 2000);

    }


  return (
    <Form onSubmit={handleSubmit(onsubmit)} >
        { message && <Alert variant='sucess' >{ message }</Alert> }

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email </Form.Label>
        <Form.Control type="email" placeholder="Entre votre email" {...register('email',{required:'Veillez entrez votre email',pattern:{value:/^[^/s@]+@[^/s@].[/^s@]+$/,message:'Ce champ doit contenir le caractère @',}, })} isInvalid={!!errors.email} />
        <Form.Control.Feedback type="invalid" > {errors.email?.message} </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Mot de Passe </Form.Label>
        <Form.Control type="password" placeholder="Entre votre mot de passe" {...register('password',{required:'Ce champs est obligatoire',minLength:{ value:5,message:'Au moins 5 caractères',},maxLength:{ value:10,message:'Au plus 10 caractères' }, })} isInvalid={!!errors.password} />
        <Form.Control.Feedback type="invalid" > {errors.password?.message} </Form.Control.Feedback>
      </Form.Group>

      <Button variant="sucess" type="submit" className='mt-3' > 
        Se Connecter
      </Button >
      <div className='mt-2' >
        Vous n'avez pas encore compte ?{''}
        <Link to='/register' style={{ textDecoration:'uderline' }} > Incrivez-vous </Link>
      </div>
    </Form>
  );
}

export default Connexion;

