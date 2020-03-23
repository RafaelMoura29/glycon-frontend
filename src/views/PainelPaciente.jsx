import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import { NavLink, Link } from "react-router-dom";

import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    CardText,
    Table,
    Badge,
    Button,
    CardHeader,
    FormGroup,
    Input,
    Label
} from "reactstrap";
import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4
} from "variables/charts.jsx";

class PainelPaciente extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0, height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    setBgChartData = name => {
        this.setState({
            bigChartData: name
        });
    };
    render() {
        return (
            <>
                <div className="content">
                    <Card >
                        <CardBody>
                            <Row>
                                <Col className="pr-md-1" md="10">
                                    <h3 className="title">Coletas de Nome paciente</h3>
                                </Col>
                                {this.state.width > 910
                                    ? <Col className="pr-md-1" md="2">
                                        <Link to="/admin/Form_glicemia">
                                            <Button className="btn-fill" color="warning" type="submit">
                                                Coleta</Button>
                                        </Link>
                                    </Col>
                                    : <Col className="pr-md-1" md="3">

                                    </Col>
                                }

                            </Row>
                            <Row>
                                <Col className="pr-md-1" md="3">
                                    <FormGroup>
                                        <Label>
                                            Data:
                                        </Label>
                                        <Row>
                                            <Col className="pr-md-1" md="10">
                                                <Input
                                                    type="date"
                                                    name="date"
                                                    id="exampleDate"
                                                />
                                            </Col>
                                            <Col className="pr-md-1" md="2">
                                                <Button className="btn-icon" color="info" size="sm">
                                                    <i className="fa fa-search" />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">

                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Data</th>
                                                <th>Hora</th>
                                                <th>Valor Glicemia</th>
                                                <th>Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>20/02/2020</td>
                                                <td>12:00</td>
                                                <td>120 mg/dl</td>
                                                <td>Capilar</td>
                                            </tr>
                                            <tr>
                                                <td>20/02/2020</td>
                                                <td>12:00</td>
                                                <td>120 mg/dl</td>
                                                <td>Capilar</td>
                                            </tr>
                                            <tr>
                                                <td>20/02/2020</td>
                                                <td>12:00</td>
                                                <td>120 mg/dl</td>
                                                <td>Capilar</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <Card className="card-chart">
                        <CardHeader>
                            <CardTitle tag="h3">
                                <i className="fa fa-tint" />{" "}
                    Evolução da glicemia
                  </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Col className="pr-md-1" md="12">
                                <Row>
                                    <Col className="pr-md-1" md="3">
                                        <FormGroup>
                                            <Label>
                                                Data inicial:
                                        </Label>
                                            <Input
                                                type="date"
                                                name="date"
                                                id="exampleDate"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pr-md-1" md="3" >
                                        <FormGroup>
                                            <Label>
                                                Data final:
                                        </Label>
                                            <Row>
                                                <Col className="pr-md-1" md="10">
                                                    <Input
                                                        type="date"
                                                        name="date"
                                                        id="exampleDate"
                                                    />
                                                </Col>
                                                <Col className="pr-md-1" md="2">
                                                    <Button className="btn-icon" color="info" size="sm">
                                                        <i className="fa fa-search" />
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="pr-md-1" md="12">

                                <div className="chart-area">
                                    <Line
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                    />
                                </div>
                            </Col>

                        </CardBody>
                    </Card>

                </div>
                {this.state.width < 910
                    ? <div style={{ position: 'fixed', bottom: 16, right: 16 }}>
                        <Link to="/admin/Form_glicemia">
                            <Button renderAs="button" size="lg" className="btn-round btn-icon" color="warning">
                                <i className="fa fa-tint"></i>
                            </Button>
                        </Link>
                    </div>
                    : <div />
                }


            </>
        );
    }
}

export default PainelPaciente;