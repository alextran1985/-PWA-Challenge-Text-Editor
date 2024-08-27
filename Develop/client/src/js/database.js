import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');
const contentDb = await openDB('content', 1);
  var tx = contentsDb.transaction('content', 'readwrite');
  var store = tx.objectStore('contents');
  var request = store.put({ id: id, content: content });
  var result = await request;
  console.log('Data saved to the database', result);
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');
console.log('GET all from the database');
  const contentsDb = await openDB('contents', 1);
  var tx = contentsDb.transaction('contents', 'readonly');
  var store = tx.objectStore('contents');
  var request = store.getAll();
  var result = await request;
  console.log('result.value', result);
  return result;
initdb();
