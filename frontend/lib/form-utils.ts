// Form submission utility for AQR website
// Handles email and WhatsApp integration

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

export interface FormData {
  [key: string]: any;
}

// Company contact details
export const COMPANY_EMAIL = "atlantisquest4@gmail.com";
export const COMPANY_WHATSAPP = "+256745174879";
export const COMPANY_PHONE = "0745174879";

/**
 * Handles form submission by opening WhatsApp and showing success message
 * @param formData - The form data to send
 * @param formType - Type of form (for message formatting)
 * @returns Promise<FormSubmissionResult>
 */
export async function submitForm(
  formData: FormData,
  formType: string
): Promise<FormSubmissionResult> {
  try {
    // Format the message based on form type
    const message = formatWhatsAppMessage(formData, formType);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP.replace('+', '')}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Also create mailto link for email
    const emailSubject = `${formType} - ${formData.name || formData.company || 'New Inquiry'}`;
    const emailBody = formatEmailMessage(formData, formType);
    const emailUrl = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    setTimeout(() => {
      window.open(emailUrl, '_blank');
    }, 500);
    
    return {
      success: true,
      message: "Form submitted successfully! We've opened WhatsApp and your email client. We'll contact you soon."
    };
  } catch (error) {
    return {
      success: false,
      message: "There was an error submitting your form. Please try again.",
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Formats WhatsApp message based on form type and data
 */
function formatWhatsAppMessage(formData: FormData, formType: string): string {
  const timestamp = new Date().toLocaleString();
  let message = `🚀 *${formType} Request*\n`;
  message += `📅 Submitted: ${timestamp}\n\n`;
  
  // Add form-specific fields
  Object.entries(formData).forEach(([key, value]) => {
    if (value && value.toString().trim()) {
      const label = formatFieldLabel(key);
      message += `*${label}:* ${value}\n`;
    }
  });
  
  message += `\n📧 Email: ${COMPANY_EMAIL}\n`;
  message += `📱 WhatsApp: ${COMPANY_WHATSAPP}\n`;
  message += `📞 Phone: ${COMPANY_PHONE}`;
  
  return message;
}

/**
 * Formats email message based on form type and data
 */
function formatEmailMessage(formData: FormData, formType: string): string {
  const timestamp = new Date().toLocaleString();
  let message = `${formType} Request\n`;
  message += `Submitted: ${timestamp}\n\n`;
  
  // Add form-specific fields
  Object.entries(formData).forEach(([key, value]) => {
    if (value && value.toString().trim()) {
      const label = formatFieldLabel(key);
      message += `${label}: ${value}\n`;
    }
  });
  
  message += `\n---\nThis message was sent from the AQR website contact form.\n\nContact Information:\nEmail: ${COMPANY_EMAIL}\nWhatsApp: ${COMPANY_WHATSAPP}\nPhone: ${COMPANY_PHONE}`;
  
  return message;
}

/**
 * Formats field labels for better readability
 */
function formatFieldLabel(key: string): string {
  const labelMap: { [key: string]: string } = {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    contact: 'Contact',
    subject: 'Subject',
    message: 'Message',
    company: 'Company',
    contactPerson: 'Contact Person',
    country: 'Country',
    category: 'Category',
    number: 'Number of Workers',
    startDate: 'Start Date',
    jobDescription: 'Job Description',
    info: 'Additional Information',
    pickupDate: 'Pickup Date',
    passengers: 'Number of Passengers',
    vehicleType: 'Vehicle Type',
    pickupLocation: 'Pickup Location',
    destination: 'Destination',
    requests: 'Special Requests',
    pickup: 'Pickup Location',
    dropoff: 'Drop-off Location',
    visaType: 'Visa Type',
    nationality: 'Nationality',
    passportNumber: 'Passport Number',
    travelDate: 'Travel Date',
    duration: 'Duration',
    purpose: 'Purpose of Travel',
    hotelName: 'Hotel Name',
    checkIn: 'Check-in Date',
    checkOut: 'Check-out Date',
    guests: 'Number of Guests',
    roomType: 'Room Type',
    ticketType: 'Ticket Type',
    departure: 'Departure Location',
    arrival: 'Arrival Location',
    departureDate: 'Departure Date',
    returnDate: 'Return Date'
  };
  
  return labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

/**
 * Common form submission handler
 */
export async function handleFormSubmit(
  e: React.FormEvent<HTMLFormElement>,
  formData: FormData,
  formType: string,
  setSubmitting: (value: boolean) => void,
  setSuccess: (value: boolean) => void,
  setError: (value: string) => void,
  resetForm: () => void
): Promise<void> {
  e.preventDefault();
  setSubmitting(true);
  setError('');
  setSuccess(false);
  
  try {
    const result = await submitForm(formData, formType);
    
    if (result.success) {
      setSuccess(true);
      resetForm();
    } else {
      setError(result.message);
    }
  } catch (error) {
    setError('An unexpected error occurred. Please try again.');
  } finally {
    setSubmitting(false);
  }
}
