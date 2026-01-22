export interface ContactInquiry {
  full_name: string;
  email: string;
  phone: string;
  property_type: string;
  location: string;
  interest_type: string;
  message: string;
  step: 1 | 2;
}
