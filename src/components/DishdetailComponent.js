import { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    render() {
 

        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;