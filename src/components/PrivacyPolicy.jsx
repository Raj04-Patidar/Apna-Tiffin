import React from 'react'
import background from "../assets/images/tiffin4.jpg";
import Footer from './Footer';
const PrivacyPolicy = () => {
  return (
    <div>
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
                Privacy and Policy
              </h2>
            </div>
          </div>
          <div className="condition " style={{ padding:'0px 95px 30px 95px' }}>
            <h6 style={{ lineHeight: '1.9',backgroundColor:'white',padding:'40px 40px 40px 40px'}}>
              <b> Welcome to Apna-Tiffin, the No.1 Tiffin and Food Delivery App in Indore! Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy outlines the types of information we may collect when you use our app, how we use that information, and the choices you have regarding your personal data.</b> <br /><br />

              <b><u>1. Information We Collect</u></b> <br />

              1.1 <b>Personal Information:</b> When you sign up for Apna-Tiffin, we collect personal information such as your name, contact details, delivery address, and payment information to facilitate a smooth ordering experience. <br />

              1.2 <b>Usage Information:</b> We gather information about how you interact with our app, including your browsing and search history, order preferences, and device information. <br />

              1.3 <b>Location Data:</b> To provide you with accurate delivery services, we may collect and process your precise location data. <br /><br />

              <b><u>2. How We Use Your Information</u></b> <br />

              2.1 <b>Order Processing:</b> We use your personal information to process your orders, arrange deliveries, and facilitate payment transactions. <br />

              2.2 <b>Improving Services:</b> We analyze user behavior to enhance our app's functionality, personalize your experience, and introduce new features. <br />

              2.3 <b>Communication:</b> We may use your contact information to communicate with you about your orders, promotions, updates, and important service-related information. <br />

              2.4 <b>Customer Support:</b> Your information helps us provide efficient customer support in case you encounter any issues with our services. <br /><br />

              <b><u>3. Data Security</u></b> <br />

              We take appropriate measures to protect your information from unauthorized access, disclosure, alteration, and destruction. Our security protocols include encryption, secure data storage, and regular security assessments. <br /><br />

              <b><u>4. Third-Party Services</u></b> <br />

              Tiffino may use third-party services to process payments, provide delivery services, or for analytics purposes. These third parties have their own privacy policies, and we encourage you to review them. <br /><br />

              <b><u>5. Your Choices</u></b> <br />

              You can control the personal information you provide to Apna-Tiffin. You may update your account details, adjust communication preferences, and review or delete certain information. <br /><br />

              <b><u>6. Changes to the Privacy Policy</u></b> <br />

              Apna-Tiffin reserves the right to update or modify this Privacy Policy. We will notify you of any changes through the app or other communication channels. <br /><br />

              <b><u>7. Contact Us</u></b> <br />

              If you have any questions, concerns, or requests regarding your privacy or this Privacy Policy, please contact us at [supprot@Apna-Tiffinfoods.in]. <br /><br />

              <b>Thank you for choosing Apna-Tiffin - Indore's No.1 Tiffin and Food Delivery App!</b> <br /><br />

              <h3><b>Refund Policy</b></h3>
              Refund requests for Apna-Tiffin orders must be made within 24 hours of purchase. If there's an issue with your order or you're dissatisfied, please contact our customer support at [support@Apna-Tiffinfoods.in] with details and photos. Refunds will be processed to the original payment method within 7 business days. Apna-Tiffin reserves the right to assess and approve refund requests based on individual cases. Thank you for choosing Apna-Tiffin!<br />

              <h3><b><u>Shipping Policy</u></b></h3>
              Apna-Tiffin delivers culinary excellence with precision and care. Our team strives to ensure timely and efficient delivery of your orders. Delivery times may vary based on location and order volume. We currently serve the vibrant city of Indore. Stay updated on your order status through the app. For any inquiries or assistance, contact our dedicated support team at [support@Apna-Tiffinfoods.in]. We appreciate your trust in Apna-Tiffin for a delightful food experience
            </h6>
          </div>

        </section>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
