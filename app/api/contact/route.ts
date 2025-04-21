import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, message } = body;
    
    // Here you would typically send this data to an email service or database
    // For example, using nodemailer, SendGrid, or storing in Sanity
    
    console.log('Contact form submission:', { fullName, email, message });
    
    // Return success response
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
} 