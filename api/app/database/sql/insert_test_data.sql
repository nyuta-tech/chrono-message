-- Insert test data for users
INSERT INTO users (user_id, email, name, icon)
VALUES ('user1', 'user1@example.com', 'User One', 'icon1.png'),
       ('user2', 'user2@example.com', 'User Two', 'icon2.png');

-- Insert test data for friends
INSERT INTO friends (user_id, friend_id)
VALUES ('user1', 'user2'),
       ('user2', 'user1');

-- Insert test data for social_accounts
INSERT INTO social_accounts (user_id, site_name, access_token)
VALUES ('user1', 'facebook', 'user1_facebook_access_token'),
       ('user2', 'twitter', 'user2_twitter_access_token');

-- Insert test data for messages
INSERT INTO messages (sender_id, recipient_id, content, send_date, received_date, scheduled_date, is_read, sent_via)
VALUES ('user1', 'user2', 'Hello User Two', '2023-04-03 10:00:00', '2023-04-03 10:05:00', NULL, TRUE, NULL),
       ('user2', 'user1', 'Hi User One', '2023-04-03 10:10:00', '2023-04-03 10:15:00', NULL, TRUE, NULL),
       ('user1', 'user2', 'Scheduled message', NULL, NULL, '2023-04-04 12:00:00', FALSE, NULL);
