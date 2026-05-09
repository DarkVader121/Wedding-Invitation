// initialization.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://ffcledhrgpppintgsfsv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmY2xlZGhyZ3BwcGludGdzZnN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMTEyNzUsImV4cCI6MjA5Mzg4NzI3NX0.IWh8LtIdnYYKBe63SDRIqEpHXXB7c5dKB4Rg1s1HzXg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);