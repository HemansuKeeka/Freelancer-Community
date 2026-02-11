-- CREATE MEMBERS TABLE
CREATE TABLE members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  background TEXT,
  freelance_topic TEXT,
  bio TEXT,
  avatar_url TEXT DEFAULT 'https://i.pravatar.cc/150?u=' || gen_random_uuid(),
  is_online BOOLEAN DEFAULT true,
  is_open_to_work BOOLEAN DEFAULT true
);

-- CREATE MESSAGES TABLE
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  recipient_id UUID REFERENCES members(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  sender_email TEXT -- Identification for who sent it since we're using simple session emails
);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- POLICIES (Allowing public access for this prototype, restrict as needed for production)
CREATE POLICY "Public profiles are viewable by everyone" ON members FOR SELECT USING (true);
CREATE POLICY "Anyone can join" ON members FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can send messages" ON messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update their own status" ON members FOR UPDATE USING (true); -- Broad for prototype
CREATE POLICY "Recipient can view their messages" ON messages FOR SELECT USING (true);