import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vmswxqpplehaedyndokq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtc3d4cXBwbGVoYWVkeW5kb2txIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMDU1NzksImV4cCI6MjA0MTc4MTU3OX0.cud_CkOCORedES7QR3pFzLqPQAlKQgRxc55h9kXFcFA'

// const supabaseUrl = 'https://zymjvrcnqoymmwcujzfu.supabase.co'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bWp2cmNucW95bW13Y3VqemZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NzgxMjMsImV4cCI6MjA0MDU1NDEyM30.gaLY9bX5bOY_LPmp9o9EbXQbDYFm2SCKIE8xbj7Y2Fw'

export const supabase = createClient(supabaseUrl, supabaseKey)
