/**
 * Clear all data from the database while keeping table structure.
 * Usage: node clear-db.js
 */
import db, { save, close } from './db.js';

db.run('DELETE FROM invites');
save();
close();
console.log('[clear-db] All rows deleted from invites. Schema unchanged.');
