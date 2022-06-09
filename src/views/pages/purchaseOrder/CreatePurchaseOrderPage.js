import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import { addCustomer } from "../../../actions";
import Select2 from "react-select2-wrapper";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { poCodes } from "mock-data/poCodes";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
function CreatePurchaseOrderPage() {
  const dispatch = useDispatch();
  //const mockData = useSelector((state) => state.customers);
  let initial_id = 0;
  let initialPurchaseOrder = {
    id: initial_id,
    title: "",
    date: "",
    PONumber: "",
    requesterName: "",
    supplierName: "",
    orderDate: "",
    deliveryDate: "",
    productName: "",
    productDescription: "",
    productEAN: "",
    productQuantity: "",
    productPrice: "",
    tax: "",
    total: "",
    assortmentType: "",
  };
  let [purchaseOrder, setPurchaseOrder] = useState(initialPurchaseOrder);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    initial_id += 1;
    purchaseOrder.id = initial_id;
    console.log(purchaseOrder);
  };
  const handleChange = (e) => {
    //e.preventDefault();
    setPurchaseOrder({ ...purchaseOrder, [e.target.name]: e.target.value });
  };
  const clearInput = (e) => {
    e.target.value = "";
  };
  const handleSelect = (option) => {
    setPurchaseOrder({ ...purchaseOrder, ["supplierName"]: option.label });
    initialPurchaseOrder.supplierName = option.label;
  };

  return (
    <>
      <GradientEmptyHeader />

      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create purchase order</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <h6 className="heading-small text-muted mb-4">
                    Purchase Order Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Title
                          </label>
                          <Input
                            id="input-first-name"
                            value={purchaseOrder.title}
                            type="text"
                            name="title"
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Date
                          </label>
                          <Input
                            id="input-last-name"
                            value={purchaseOrder.date}
                            type="date"
                            name="date"
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            PO number
                          </label>
                          <Input
                            id="input-email"
                            value={purchaseOrder.PONumber}
                            type="text"
                            name="PONumber"
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="supplierName"
                          >
                            Supplier name
                          </label>
                          <Select
                            id="supplierName"
                            components={makeAnimated()}
                            options={poCodes}
                            onChange={(option) => handleSelect(option)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="requesterName"
                          >
                            Requester name
                          </label>
                          <Input
                            id="requesterName"
                            value={purchaseOrder.requesterName}
                            type="text"
                            name="requesterName"
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Delivery information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Delivery Date
                          </label>
                          <Input
                            id="input-city"
                            placeholder="11-11-2020"
                            type="date"
                            name="deliveryDate"
                            value={purchaseOrder.deliveryDate}
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Product name
                          </label>
                          <Input
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                            name="productName"
                            value={purchaseOrder.productName}
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                            Description
                          </label>
                          <Input
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="text"
                            name="productDescription"
                            value={purchaseOrder.productDescription}
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="assortmentType"
                          >
                            Assortment Type
                          </label>
                          <Input
                            id="assortmentType"
                            type="select"
                            onChange={(e) => handleChange(e)}
                          >
                            <option selected value="orderable">
                              Orderable
                            </option>
                            <option value="ifNecessary">If necessary</option>
                            <option value="notOrderable">Not orderable</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="category"
                          >
                            Category
                          </label>
                          <Input
                            id="category"
                            type="select"
                            onChange={(e) => handleChange(e)}
                          >
                            <option selected value="frozen">
                              Frozen -18℃
                            </option>
                            <option value="cold">Cold -2 -0℃</option>
                            <option value="chilled">Chilled 1 - 7℃</option>
                            <option value="chilled">Dry mixed</option>
                            <option value="chilled">Diary</option>
                            <option value="chilled">Bread</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="align-items-center py-4">
                      <Col lg="12" xs="7" className="text-right">
                        <Button type="submit" color="success">
                          Create
                        </Button>
                        <Button
                          type="button"
                          color="info"
                          onClick={() =>
                            history.push("/admin/search-employees")
                          }
                        >
                          Back to Search
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreatePurchaseOrderPage;
