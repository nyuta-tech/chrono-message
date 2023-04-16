-- Delete related test data from messages
DELETE FROM messages
WHERE sender_id IN ('user1', 'user2') OR recipient_id IN ('user1', 'user2');

-- Delete related test data from social_accounts
DELETE FROM social_accounts
WHERE user_id IN ('user1', 'user2');

-- Delete related test data from friends
DELETE FROM friends
WHERE user_id IN ('user1', 'user2') OR friend_id IN ('user1', 'user2');

-- Delete related test data from users
DELETE FROM users
WHERE user_id IN ('user1', 'user2');
