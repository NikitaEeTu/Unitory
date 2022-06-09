import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useHistory } from "react-router";
// reactstrap components
import { Button, Card, CardHeader, Container, Row } from "reactstrap";
import { pagination } from "utils/tableUtils";
import { useSelector } from "react-redux";
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import { purchaseOrderList } from "mock-data/purchaseOrderList";
const { SearchBar } = Search;
const formatActionButtonCell = (cell, row) => {
  const purchaseOrderDetails = (e) => {
    var { id } = e.target;
    //   history.push(`/admin/purchaseOrder/purchaseOrder-details/:id${id}`);
  };
  return (
    <>
      <Button id={row.id} className="btn-icon btn-2" type="button" color="info">
        <span id={row.id} className="btn-inner--icon">
          <i id={row.id} className="ni ni-badge" />
        </span>
      </Button>
    </>
  );
};

function PurchaseOrdersList() {
  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search purchase orders</h3>
              </CardHeader>
              <ToolkitProvider
                data={purchaseOrderList}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden: true,
                  },
                  {
                    dataField: "title",
                    text: "title",
                    sort: true,
                  },
                  {
                    dataField: "supplierName",
                    text: "supplier name",
                    sort: true,
                  },
                  {
                    dataField: "requesterName",
                    text: "Requester Name",
                    sort: true,
                  },
                  {
                    dataField: "action",
                    text: "",
                    formatter: formatActionButtonCell,
                  },
                ]}
                search
              >
                {(props) => (
                  <div className="py-4 table-responsive">
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        Search:
                        <SearchBar
                          className="form-control-sm"
                          {...props.searchProps}
                        />
                      </label>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
      );
    </>
  );
}

export default PurchaseOrdersList;
