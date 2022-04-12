import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

    function RenderComments({dish}) {
        if (dish != null) {
            const comment = dish.comments.map((comment) => {
                return(
                    <div key={comment.id} className="col-12 col-md-5 m-1">
                        {/* <CardText> */}
                            <ul className="list-unstyled" >
                                <li>{comment.comment}</li>
                                <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                            </ul>
                        {/* </CardText> */}
                    </div>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    {/* <Card> */}
                        {/* <CardBody> */}
                            {/* <CardTitle><h4>Comments</h4></CardTitle> */}
                            <h4>Comments</h4>
                            {comment}
                        {/* </CardBody> */}
                    {/* </Card> */}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    
    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }


    const DishDetail = (props) => {

        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        );
    }

export default DishDetail;