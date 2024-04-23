import { Component } from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import books from "../data/books/fantasy.json"
import { Col, Container, Row } from "react-bootstrap"

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className='row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
          {books.map((book) => {
            return (
              <Col key={book.asin}>
                <Card>
                  <Card.Img variant='top' src={book.img} />
                  <Card.Body className='d-flex flex-column justify-content-between bg-secondary'>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                      <span>{book.category.charAt(0).toUpperCase() + book.category.slice(1)}</span>
                      <Badge bg='success'>{book.price}</Badge>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks
