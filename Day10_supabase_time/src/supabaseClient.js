import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tjyspgxjyrswgccjeszs.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqeXNwZ3hqeXJzd2djY2plc3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNDU4OTUsImV4cCI6MjA0MDgyMTg5NX0.mEyQQvoBE8SSlZ8R1-tcN15hl1GHWBwBK_vy1Dshq-Q'

// const supabaseUrl = 'https://zymjvrcnqoymmwcujzfu.supabase.co'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bWp2cmNucW95bW13Y3VqemZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NzgxMjMsImV4cCI6MjA0MDU1NDEyM30.gaLY9bX5bOY_LPmp9o9EbXQbDYFm2SCKIE8xbj7Y2Fw'

export const supabase = createClient(supabaseUrl, supabaseKey)
