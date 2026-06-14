const payload = {
  "OrderID": "ORD-TEST-9999",
  "Customer Name": "Test Customer",
  "Phone": "+1 555-0199",
  "Email": "test.customer@example.com",
  "Address": "123 Test Suite Road",
  "City": "Test City",
  "Zip Code": "12345",
  "Product": "Premium Anti-Gravity Boots",
  "Qty": 1,
  "Price 1 unit": 299.99,
  "Subtotal": 299.99,
  "Shipping Fee": 15.00,
  "Grand Total": 314.99,
  "Status": "In Process",
  "Processing email": "Sent",
  "Confirm email": "Not Sent",
  "Out for Delivery email": "Not Sent",
  "Delivered email": "Not Sent",
  "Cancel email": "Not Sent"
};

const webhookUrl = "https://ahmadbutt3256.app.n8n.cloud/webhook-test/8cb2a17a-91e7-47ff-ad91-dbe7c33ad217";

console.log("Sending test payload to n8n webhook...");
console.log(JSON.stringify(payload, null, 2));

fetch(webhookUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
  .then(async (res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
    }
    const responseText = await res.text();
    console.log("Response status:", res.status);
    console.log("Response body:", responseText);
    console.log("Test data sent successfully!");
  })
  .catch((err) => {
    console.error("Error sending test data:", err);
  });
