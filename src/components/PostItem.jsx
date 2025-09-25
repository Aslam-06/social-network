import Card from 'react-bootstrap/Card';
import Buttonlikes from './LikeButton';
import Commentsession from './CommentSession';

function Postitem() {
  return (
    <>
    <small className='text-muted' >Publié le { new Date(post.createdat).toLocaleString } </small>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{post.content}</Card.Text>
      </Card.Body>
    </Card>
    { post.image && 
       <div> <img src={post.image} alt="Pubimage" style={{ maxWidth:'100%', borderRadius:'4px' }} /> </div>
    }
    <div style={{ margin:'auto' }} >
        < Buttonlikes />
        < Commentsession />
    </div>
    </div>
    </>
  );
}

export default Postitem;