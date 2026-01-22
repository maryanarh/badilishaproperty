/*
  # Create Contact Inquiries Table

  ## Overview
  This migration creates a table to store contact form submissions from potential clients
  interested in property swaps through Badilisha Properties.

  ## New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `full_name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `phone` (text, optional) - Contact's phone number
      - `property_type` (text, optional) - Type of property they own (e.g., house, apartment, land)
      - `location` (text, optional) - Property location
      - `interest_type` (text, optional) - What they're interested in (upgrade, downsize, relocate, etc.)
      - `message` (text, optional) - Additional message or details
      - `created_at` (timestamptz) - Timestamp of inquiry submission
      - `status` (text) - Status of inquiry (new, contacted, in_progress, completed)
  
  ## Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for anonymous users to insert inquiries
    - Add policy for authenticated admins to view all inquiries
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  property_type text,
  location text,
  interest_type text,
  message text,
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