
import React from "react";
import background from "../assets/images/tiffin5.jpg";

const TermCondition = () => {
  return (
    <div style={{ backgroundColor: 'rgba(161, 125, 93, 0.6)', height: '100  ' }}>
      <section id="about">
        <div
          className="container text-white text-center py-5 position-relative"
          style={{
            height: "35vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(41, 39, 39, 0.67)",
              zIndex: 2,
            }}
          ></div>

          <div style={{ zIndex: 3 }}>
            <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontFamily: 'cursive' }}>
              Terms and Conditions
            </h2>
          </div>
        </div>
        <div className="condition " style={{ padding: '0px 95px 30px 95px' }}>
          <h6 style={{ lineHeight: '1.9', backgroundColor: 'white', padding: '40px 40px 40px 40px' }}>
            Welcome to Apna-Tiffin, the No.1 Tiffin and Food Delivery App in Indore! By using our services, you agree to comply with the following terms and conditions: <br />

            <b><u>1. User Eligibility </u></b><br />

            1.1 <b>Age Requirement:</b> To use Apna-Tiffin, you must be at least 18 years old. If you are under 18, you may use the app under the supervision of a parent or legal guardian. <br />

            <b><u>2. Account Registration </u></b><br />

            2.1 <b>Accurate Information:</b> When creating an account with Apna-Tiffin, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.<br />

            2.2 <b>Account Security:</b> Notify us immediately of any unauthorized use of your account or any other breach of security.<br />

            <b><u>3. Ordering and Payment </u></b><br />

            3.1 <b>Order Confirmation:</b> By placing an order through Apna-Tiffin, you acknowledge that you have reviewed and confirmed the order details, including the items, quantities, and delivery address.<br />

            3.2 <b>Payment:</b> You agree to pay the total amount specified in your order, including any applicable taxes and fees. Apna-Tiffin uses secure third-party payment processors to handle transactions.<br />

            3.3 <b>Cancellation and Refund:</b> Orders can be canceled within the specified time frame. Refund policies are outlined in our refund policy section.<br />

            <b><u>4. Delivery Services </u></b><br />

            4.1 <b>Delivery Address</b> Ensure that the delivery address provided is accurate and accessible. Apna-Tiffin is not responsible for undeliverable orders due to incorrect or incomplete addresses.<br />

            4.2 <b>Delivery Times:</b> While we strive to meet delivery time estimates, they are not guaranteed and may vary based on factors beyond our control.<br />

            <b><u>5. User Conduct </u></b><br />

            5.1 <b>Prohibited Activities:</b> You agree not to engage in any activities that violate applicable laws, infringe on the rights of others, or interfere with the proper functioning of Tiffino.<br />

            5.2 <b>User Content:</b> Any content you submit, including reviews and feedback, should be truthful, lawful, and respectful. Tiffino reserves the right to remove or modify user-generated content.<br />

            <b><u>6. Termination of Services </u></b><br />

            6.1 <b>Termination:</b> Apna-Tiffin reserves the right to terminate or suspend your account and access to our services at our discretion, without prior notice, if you violate these terms and conditions.<br />

            <b><u>7. Changes to Terms and Conditions </u></b><br />

            Apna-Tiffin reserves the right to update or modify these terms and conditions. We will notify you of any changes through the app or other communication channels.<br />

            <b><u>8. Contact Us </u></b><br />

            If you have any questions or concerns regarding these terms and conditions, please contact us at [info@apnatiffinfoods.in].<br />

            Thank you for choosing Apna-Tiffin - Indore's No.1 Tiffin and Food Delivery App!<br />
          </h6>
        </div>
      </section>
    </div>
    
  );
};

export default TermCondition;
