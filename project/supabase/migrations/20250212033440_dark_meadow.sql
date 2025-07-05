/*
  # Real Estate Database Schema

  1. New Tables
    - `properties`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `price` (numeric)
      - `beds` (integer)
      - `baths` (integer)
      - `sqft` (numeric)
      - `address` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `user_id` (uuid, foreign key)
  
  2. Security
    - Enable RLS on `properties` table
    - Add policies for authenticated users to:
      - Read all properties
      - Create/update/delete their own properties
*/

CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL,
  beds integer NOT NULL,
  baths numeric NOT NULL,
  sqft numeric NOT NULL,
  address text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read properties
CREATE POLICY "Anyone can view properties"
  ON properties
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert their own properties
CREATE POLICY "Users can insert their own properties"
  ON properties
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own properties
CREATE POLICY "Users can update their own properties"
  ON properties
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own properties
CREATE POLICY "Users can delete their own properties"
  ON properties
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);