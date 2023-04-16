import unittest
from graphene.test import Client
from app.graphene.query import schema
from app.database.repositories.user_repository import UserRepository
from app.database.models import User


class TestUserResolver(unittest.TestCase):
    def test_resolve_user(self):
        # UserRepository の get_user メソッドをモックする
        UserRepository.get_user = lambda _, user_id: User(
            id=1,
            user_id="user1",
            email="test@example.com",
            name="Test User",
            icon="https://example.com/icon.png",
        )

        client = Client(schema)

        executed = client.execute(
            """
            {
              user(userId: "user1") {
                id
                username
                email
                icon
              }
            }
            """
        )
        print(executed)

        expected = {
            "data": {
                "user": {
                    "id": "1",
                    "username": "Test User",
                    "email": "test@example.com",
                    "icon": "https://example.com/icon.png",
                }
            }
        }

        self.assertEqual(executed, expected)


if __name__ == "__main__":
    unittest.main()
