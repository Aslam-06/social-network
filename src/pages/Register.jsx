import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { data, useNavigate } from 'react-router-dom';

function Inscription() {

    const[message,setMessage]=useState('')
    const { register,formState:{ errors },reset,handleSubmit,watch }=useForm()
    const { registeruser }=useContext(AuthContext)
    const navigate=useNavigate()
    const password=watch('password','')


    const onsubmit=()=>{

      registeruser(data)

        reset()

        setMessage('Inscription Validée')

        setTimeout(() => {
            navigate('/')
        }, 2000);

    }


  return (
    <Form onSubmit={handleSubmit(onsubmit)} >
        { message && <Alert variant='sucess' >{ message }</Alert> }

      <Form.Group className="mb-3" controlId="formBasicNom">
        <Form.Label> Nom </Form.Label>
        <Form.Control type="email" placeholder="Entre votre nom" {...register('nom',{required:'Veillez entrez votre nom',pattern:{value:/^[a-z-A-Z]+$/,message:'Ce champ ne contient que des chiffres',}, })} isInvalid={!!errors.nom} />
        <Form.Control.Feedback type="invalid" > {errors.nom?.message} </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Prenom </Form.Label>
        <Form.Control type="email" placeholder="Entre votre email" {...register('email',{required:'Veillez entrez votre Prenom',pattern:{value:/^[a-z-A-Z]+$/,message:'Ce champ contient que des chiffres',}, })} isInvalid={!!errors.prenom} />
        <Form.Control.Feedback type="invalid" > {errors.prenom?.message} </Form.Control.Feedback>
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Confirmez votre mot de passe </Form.Label>
        <Form.Control type="password" placeholder="Confirmez votre mot de passe" {...register('password',{required:'Ce champs est obligatoire',validate:(value)=>value === password || 'les mots de passe ne correspond', })} isInvalid={!!errors.password} />
        <Form.Control.Feedback type="invalid" > {errors.password?.message} </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Numero </Form.Label>
        <Form.Control type="email" placeholder="Entre votre numero" {...register('numero',{required:'Veillez entrez votre numero',pattern:{value:/^[0-9]+$/,message:'Ce champ doit contenir que des chiffres',}, })} isInvalid={!!errors.number} />
        <Form.Control.Feedback type="invalid" > {errors.number?.message} </Form.Control.Feedback>
      </Form.Group>

      <Form.Select aria-label="Default select example">
        <option> Sexe </option>
        <option value="1">Masculin</option>
        <option value="2">Feminin</option>
      </Form.Select>

      <Button variant="sucess" type="submit" className='mt-3' > 
        Se Connecter
      </Button >
      <div className='mt-2' >
        Avez-vous déjà un compte ?{''}
        <Link to='/register' style={{ textDecoration:'uderline' }} > Incrivez-vous </Link>
      </div>
    </Form>
  );
}

export default Inscription;