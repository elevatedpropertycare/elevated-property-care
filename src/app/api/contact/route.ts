import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      formType = 'contact',
      firstName = '',
      lastName = '',
      name = '',
      email = '',
      phone = '',
      location = '',
      usage = '',
      sqft = '',
      message = '',
    } = body;

    const leadName = name || `${firstName} ${lastName}`.trim() || 'Prospective Client';

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const notificationRecipient =
      process.env.NOTIFICATION_EMAIL || 'elevatedpropertycarecorp@gmail.com';

    // 1. Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const emailSubject = `New Property Inquiry from ${leadName} (${location || 'Sussex County'})`;
      
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ded5c1; border-radius: 8px; background-color: #faf9f6;">
          <h2 style="color: #0f171d; margin-top: 0; border-bottom: 2px solid #cbbea1; padding-bottom: 10px;">
            New Lead: Elevated Property Care
          </h2>
          <p style="font-size: 14px; color: #594d3f;">A new property inquiry was submitted via the website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1b2a34; width: 140px;">Source Form:</td>
              <td style="padding: 8px; color: #304c5e;">${formType === 'estimate' ? 'Annual Estimate / Walkthrough Request' : 'General Contact / Consultation'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1b2a34;">Full Name:</td>
              <td style="padding: 8px; color: #304c5e;">${leadName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1b2a34;">Email:</td>
              <td style="padding: 8px; color: #304c5e;"><a href="mailto:${email}" style="color: #41708b;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1b2a34;">Phone:</td>
              <td style="padding: 8px; color: #304c5e;"><a href="tel:${phone}" style="color: #41708b;">${phone || 'Not provided'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1b2a34;">Town / Location:</td>
              <td style="padding: 8px; color: #304c5e;">${location || 'Not specified'}</td>
            </tr>
            ${usage ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1b2a34;">Property Usage:</td>
              <td style="padding: 8px; color: #304c5e;">${usage}</td>
            </tr>` : ''}
            ${sqft ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1b2a34;">Approx. Sq Ft:</td>
              <td style="padding: 8px; color: #304c5e;">${sqft}</td>
            </tr>` : ''}
            ${message ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1b2a34; vertical-align: top;">Message / Details:</td>
              <td style="padding: 8px; color: #304c5e; white-space: pre-wrap;">${message}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #ded5c1; font-size: 12px; color: #837158;">
            Sent automatically from elevatedpropertycare.com
          </div>
        </div>
      `;

      const fromAddress = process.env.RESEND_FROM_EMAIL || 'Elevated Property Care <onboarding@resend.dev>';

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [notificationRecipient],
          reply_to: email,
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json();
        console.error('Resend API error:', errorData);
        return NextResponse.json(
          { error: errorData.message || 'Failed to send email via Resend' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, provider: 'resend' });
    }

    // 2. Web3Forms fallback
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey) {
      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `New Property Inquiry from ${leadName}`,
          from_name: 'Elevated Property Care Website',
          name: leadName,
          email,
          phone,
          location,
          usage,
          sqft,
          message: message || `Walkthrough request for ${location}`,
        }),
      });

      if (!w3Res.ok) {
        const err = await w3Res.json();
        return NextResponse.json(
          { error: err.message || 'Failed to send email via Web3Forms' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, provider: 'web3forms' });
    }

    // If neither key is configured yet:
    console.warn('Neither RESEND_API_KEY nor WEB3FORMS_ACCESS_KEY is set.');
    return NextResponse.json(
      {
        error: 'EMAIL_SERVICE_NOT_CONFIGURED',
        message: 'No email delivery service configured. Please add RESEND_API_KEY in your Vercel Environment Variables.',
      },
      { status: 503 }
    );
  } catch (err: any) {
    console.error('Inquiry submission error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
