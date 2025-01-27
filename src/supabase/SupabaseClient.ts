import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iqymkuxpswvkjwiadlfx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxeW1rdXhwc3d2a2p3aWFkbGZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5ODcxNjMsImV4cCI6MjA1MzU2MzE2M30.PWkKR0BEQGbRwQTM1Y_WKNnnY6WCRr4Hk8rcHT6-pTo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;