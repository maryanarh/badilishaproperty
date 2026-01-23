/*
  # Create Contact Inquiries Table (Aligned with Frontend)

  ## Overview
  This migration creates a table to store contact form submissions from potential clients
  interested in property swaps through Badilisha Properties.

  The schema is intentionally aligned with the current React contact form
  to avoid insert failures and ensure a stable production setup.

  ## New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `full_name` (text) - Contact's full name
      - `phone` (text) - Contact's phone number
      - `location` (text) - Property location
      - `property_type` (text, optional) - Type of property (house, apartment, land)
      - `goal` (text, optional) - Client’s goal or request
      - `status` (text) - Inquiry status (new, contacted, in_progress, completed)
      - `created_at` (timestamptz) - Timestamp of inquiry submission

  ## Security
    - Enable RLS on `contact_inquiries` table
    - Allow anonymous users to submit inquiries
    - Allow authenticated users (admins) to read inquiries
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  property_type text,
  goal text,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact inquiry"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
