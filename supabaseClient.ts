import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hvtrbuphwchlcxwdnngd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dHJidXBod2NobGN4d2RubmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MTAxMzMsImV4cCI6MjA4NjM4NjEzM30.ixxKc8j9EhO7HQeZRe2CHX4jJpomln10qAlRPQwScDk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);