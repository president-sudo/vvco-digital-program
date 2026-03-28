/*
  # Concert Program Schema

  ## Overview
  Creates tables for storing concert program information including concert details,
  program items, and performers.

  ## New Tables
  
  ### `concerts`
  - `id` (uuid, primary key) - Unique identifier for each concert
  - `title` (text) - Concert title
  - `subtitle` (text, nullable) - Optional subtitle or theme
  - `venue` (text) - Performance venue name
  - `date` (timestamptz) - Concert date and time
  - `description` (text, nullable) - Concert description or notes
  - `created_at` (timestamptz) - Record creation timestamp

  ### `program_items`
  - `id` (uuid, primary key) - Unique identifier for each program item
  - `concert_id` (uuid, foreign key) - References concerts table
  - `order_index` (integer) - Display order of items
  - `type` (text) - Type: 'piece', 'intermission', 'section'
  - `composer` (text, nullable) - Composer name
  - `title` (text) - Piece or section title
  - `duration` (text, nullable) - Estimated duration (e.g., "15 min")
  - `notes` (text, nullable) - Additional notes or information
  - `created_at` (timestamptz) - Record creation timestamp

  ### `performers`
  - `id` (uuid, primary key) - Unique identifier for each performer
  - `concert_id` (uuid, foreign key) - References concerts table
  - `name` (text) - Performer name
  - `role` (text) - Role or instrument
  - `bio` (text, nullable) - Short biography
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Record creation timestamp

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access (concert programs are typically public)
  - Restrict write access to authenticated users only
*/

CREATE TABLE IF NOT EXISTS concerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text,
  venue text NOT NULL,
  date timestamptz NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS program_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  concert_id uuid NOT NULL REFERENCES concerts(id) ON DELETE CASCADE,
  order_index integer NOT NULL DEFAULT 0,
  type text NOT NULL DEFAULT 'piece',
  composer text,
  title text NOT NULL,
  duration text,
  notes text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS performers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  concert_id uuid NOT NULL REFERENCES concerts(id) ON DELETE CASCADE,
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE concerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE performers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view concerts"
  ON concerts FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert concerts"
  ON concerts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update concerts"
  ON concerts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can view program items"
  ON program_items FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert program items"
  ON program_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update program items"
  ON program_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can view performers"
  ON performers FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert performers"
  ON performers FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update performers"
  ON performers FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);