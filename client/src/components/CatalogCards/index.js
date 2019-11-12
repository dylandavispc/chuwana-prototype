import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";

export function CatalogList({ children }) {
    return <div className="d-flex flex-wrap bd-highlight example-parent">
    {children}
  </div>
  }

export function CatalogCards({ name, catagory, disc, price }) {
  return (
    <MDBCol lg="3" md="12" className="p-2 bd-highlight mb-lg-0 mb-4">
     {/* <MDBCol lg="4" md="12" className="mb-lg-0 mb-4"> */}
        <MDBCard wide ecommerce>
        <MDBCardImage
            cascade
            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
            top
            alt="sample photo"
        />
        <MDBCardBody cascade className="text-center">
            <a href="#!" className="text-muted">
            <h5>{catagory}</h5>
            </a>
            <MDBCardTitle>
            <strong>
                <a href="#!">{name}</a>
            </strong>
            </MDBCardTitle>
            <MDBCardText>
            {disc}
            </MDBCardText>
            <MDBCardFooter className="px-1">
            <span className="float-left font-weight-bold">
                <strong>${price}</strong>
            </span>
            <span className="float-right">
                
            </span>
            </MDBCardFooter>
        </MDBCardBody>
        </MDBCard>
     </MDBCol>
    //  </div>
  );
}
