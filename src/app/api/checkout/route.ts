import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      orderId,
      customerName,
      phone,
      email,
      address,
      city,
      zipCode,
      product,
      qty,
      price1Unit,
      subtotal,
      shippingFee,
      grandTotal,
    } = body;

    // Validate required fields
    if (!orderId || !customerName || !phone || !email || !address || !city || !zipCode) {
      return NextResponse.json(
        { success: false, error: "Missing required order information." },
        { status: 400 }
      );
    }

    // Format the payload to match the final Google Sheets columns exactly
    const n8nPayload = {
      "OrderID": orderId,
      "Customer Name": customerName,
      "Phone": phone,
      "Email": email,
      "Address": address,
      "City": city,
      "Zip Code": zipCode,
      "Product": product,
      "Qty": qty,
      "Price 1 unit": price1Unit,
      "Subtotal": subtotal,
      "Shipping Fee": shippingFee,
      "Grand Total": grandTotal,
      "Status": "In Process",
      "Processing email": "Sent",
      "Confirm email": "Not Sent",
      "Out for Delivery email": "Not Sent",
      "Delivered email": "Not Sent"
    };

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("WARNING: N8N_WEBHOOK_URL is not configured in environment variables. Simulating success in development mode.");
      // In development mode, return mock success to prevent blocking checkout if the webhook is not set up yet
      return NextResponse.json({
        success: true,
        mock: true,
        message: "Order received. Webhook URL not configured.",
        orderId,
      });
    }

    // Send payload to n8n webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(n8nPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("n8n Webhook Error response:", errorText);
      throw new Error(`Failed to forward order to n8n webhook: ${response.statusText}`);
    }

    return NextResponse.json({
      success: true,
      orderId,
    });
  } catch (error: any) {
    console.error("Checkout API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process order." },
      { status: 500 }
    );
  }
}
