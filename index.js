

import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://llnhgryglvyfsnypmgnj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmhncnlnbHZ5ZnNueXBtZ25qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzc5MTMsImV4cCI6MTk5Mjc1MzkxM30.eO9vpo5kS5LHu0cNIUHPN4XAFBpvrQ2y8BKBKJ6cybY'
const supabase = createClient(supabaseUrl, supabaseKey)

 async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
    let bookTable = document.getElementById('books');
    bookTable.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</tr>`;
  }
   
 }
getBooks();

