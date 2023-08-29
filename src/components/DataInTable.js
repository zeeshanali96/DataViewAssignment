import React from "react";
import { Button } from "react-bootstrap";
import TableComponent from "./TableComponent";

const DataInTable = ({ setHandleDisplay, data }) => {
  return (
    <>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => setHandleDisplay("card")}
      >
        Go To Card View
      </Button>
      <TableComponent data={data} />
    </>
  );
};

export default DataInTable;
